import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';
import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

// 生成 JWT token
async function generateToken(userId: string, email: string): Promise<string> {
  const token = await new SignJWT({ userId, email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .setIssuedAt()
    .sign(JWT_SECRET);

  return token;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 验证必填字段
    if (!email || !password) {
      return NextResponse.json(
        { error: '邮箱和密码为必填项' },
        { status: 400 }
      );
    }

    const client = getSupabaseClient();

    // 查找用户
    const { data: user, error } = await client
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return NextResponse.json(
        { error: '邮箱或密码错误' },
        { status: 401 }
      );
    }

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: '邮箱或密码错误' },
        { status: 401 }
      );
    }

    // 生成 JWT token
    const token = await generateToken(user.id, user.email);

    // 创建响应
    const response = NextResponse.json({
      success: true,
      message: '登录成功',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });

    // 设置 httpOnly cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('登录错误:', error);
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
}
