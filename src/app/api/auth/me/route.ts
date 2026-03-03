import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { getSupabaseClient } from '@/storage/database/supabase-client';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

// 验证 JWT token
async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    // 从 cookie 中获取 token
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: '未登录' },
        { status: 401 }
      );
    }

    // 验证 token
    const payload = await verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { error: '登录已过期，请重新登录' },
        { status: 401 }
      );
    }

    const userId = payload.userId as string;

    // 从数据库获取用户信息
    const client = getSupabaseClient();

    const { data: user, error } = await client
      .from('users')
      .select('id, email, name, created_at')
      .eq('id', userId)
      .single();

    if (error || !user) {
      return NextResponse.json(
        { error: '用户不存在' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.created_at,
      },
    });
  } catch (error) {
    console.error('获取用户信息错误:', error);
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
}
