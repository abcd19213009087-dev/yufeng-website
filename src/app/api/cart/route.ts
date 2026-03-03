import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

interface CartItem {
  productId: number;
  quantity: number;
  color?: string;
}

// GET - 获取购物车
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: '未登录' },
        { status: 401 }
      );
    }

    const supabase = getSupabaseClient(token);

    // 获取当前用户
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      return NextResponse.json(
        { error: '获取用户信息失败' },
        { status: 401 }
      );
    }

    // 这里应该是从数据库获取购物车数据
    // 暂时返回模拟数据
    const cartItems = [
      {
        id: 1,
        name: '与风同行 Phone 15 Pro',
        price: 4999,
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop',
        quantity: 1,
        color: '幻夜黑',
      },
    ];

    return NextResponse.json({ items: cartItems });
  } catch (error) {
    console.error('Get cart error:', error);
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
}

// POST - 添加商品到购物车
export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: '未登录' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { productId, quantity, color }: CartItem = body;

    if (!productId || !quantity) {
      return NextResponse.json(
        { error: '缺少必要参数' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient(token);

    // 获取当前用户
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      return NextResponse.json(
        { error: '获取用户信息失败' },
        { status: 401 }
      );
    }

    // 这里应该是将商品添加到数据库的购物车表
    // 暂时返回成功响应
    return NextResponse.json({
      success: true,
      message: '已添加到购物车',
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
}

// PUT - 更新购物车商品数量
export async function PUT(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: '未登录' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { cartItemId, quantity } = body;

    if (!cartItemId || quantity === undefined) {
      return NextResponse.json(
        { error: '缺少必要参数' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient(token);

    // 获取当前用户
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      return NextResponse.json(
        { error: '获取用户信息失败' },
        { status: 401 }
      );
    }

    // 这里应该是更新数据库中的购物车商品数量
    // 暂时返回成功响应
    return NextResponse.json({
      success: true,
      message: '购物车已更新',
    });
  } catch (error) {
    console.error('Update cart error:', error);
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
}

// DELETE - 从购物车删除商品
export async function DELETE(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: '未登录' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const cartItemId = searchParams.get('id');

    if (!cartItemId) {
      return NextResponse.json(
        { error: '缺少购物车商品ID' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient(token);

    // 获取当前用户
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      return NextResponse.json(
        { error: '获取用户信息失败' },
        { status: 401 }
      );
    }

    // 这里应该是从数据库删除购物车商品
    // 暂时返回成功响应
    return NextResponse.json({
      success: true,
      message: '商品已从购物车删除',
    });
  } catch (error) {
    console.error('Delete from cart error:', error);
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
}
