import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // 创建响应并清除 cookie
    const response = NextResponse.json({
      success: true,
      message: '登出成功',
    });

    response.cookies.delete('auth-token');

    return response;
  } catch (error) {
    console.error('登出错误:', error);
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
}
