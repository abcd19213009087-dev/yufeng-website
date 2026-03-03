import { NextRequest, NextResponse } from 'next/server';
import { LLMClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message parameter' },
        { status: 400 }
      );
    }

    const config = new Config();
    const client = new LLMClient(config, customHeaders);

    // 构建对话历史
    const systemPrompt = `你是与风同行科技有限公司的智能客服助手"小风"，名字叫小风。与风同行是一家专注于智能硬件与软件创新的科技公司。

你的职责：
1. 热情友好地帮助用户解决问题
2. 提供产品信息、售后服务、配送查询等服务
3. 回答关于与风同行的公司相关问题
4. 用简洁、专业的语言回答
5. 保持礼貌和耐心

服务范围：
- 产品咨询（手机、电视、笔记本、智能家居等）
- 售后服务（退换货、维修、保修等）
- 订单查询和配送服务
- 公司信息和联系方式
- 常见问题解答

回答风格：
- 亲切友好，像朋友一样交流
- 使用"您"来称呼用户
- 尽量提供具体、实用的建议
- 如果不确定，诚实地说明并建议联系人工客服

请记住，你是与风同行的一部分，代表着公司的形象。`;

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...(history || []),
      { role: 'user' as const, content: message },
    ];

    // 创建流式响应
    const stream = client.stream(messages, {
      model: 'doubao-seed-2-0-pro-260215', // 使用旗舰模型获得更好的对话质量
      temperature: 0.7,
      thinking: 'disabled',
      caching: 'enabled',
    });

    // 设置 SSE 响应头
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (chunk.content) {
              const content = chunk.content.toString();
              const data = `data: ${JSON.stringify({ content })}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
          }
          // 发送结束标记
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      },
    });

    return new NextResponse(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
