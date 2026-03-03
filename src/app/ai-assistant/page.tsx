'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Mic, X, Trash2, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 从 localStorage 加载历史消息
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        if (messagesWithDates.length > 0) {
          setMessages(messagesWithDates);
        } else {
          // 如果没有历史消息，显示欢迎消息
          setMessages([{
            id: '1',
            role: 'assistant',
            content: '您好！我是与风同行的智能助手"小风"。很高兴为您服务！请问有什么可以帮助您的？',
            timestamp: new Date(),
          }]);
        }
      } catch (e) {
        console.error('Failed to parse saved messages:', e);
        setMessages([{
          id: '1',
          role: 'assistant',
          content: '您好！我是与风同行的智能助手"小风"。很高兴为您服务！请问有什么可以帮助您的？',
          timestamp: new Date(),
        }]);
      }
    } else {
      // 首次访问，显示欢迎消息
      setMessages([{
        id: '1',
        role: 'assistant',
        content: '您好！我是与风同行的智能助手"小风"。很高兴为您服务！请问有什么可以帮助您的？',
        timestamp: new Date(),
      }]);
    }
  }, []);

  // 保存消息到 localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 清空对话
  const clearChat = () => {
    if (window.confirm('确定要清空对话历史吗？')) {
      setMessages([{
        id: Date.now().toString(),
        role: 'assistant',
        content: '您好！我是与风同行的智能助手"小风"。很高兴为您服务！请问有什么可以帮助您的？',
        timestamp: new Date(),
      }]);
      localStorage.removeItem('chatHistory');
    }
  };

  // 语音输入
  const handleVoiceInput = async () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('您的浏览器不支持语音识别功能');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      // 创建助手消息占位符
      const assistantMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: 'assistant',
          content: '',
          timestamp: new Date(),
        },
      ]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') break;

              try {
                const parsed = JSON.parse(data);
                if (parsed.content) {
                  assistantContent += parsed.content;
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === assistantMessageId
                        ? { ...msg, content: assistantContent }
                        : msg
                    )
                  );
                }
              } catch (e) {
                // Ignore JSON parse errors for incomplete chunks
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: '抱歉，我现在无法回复您的消息。请稍后再试。',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickQuestions = [
    '如何退换货？',
    '配送时间多久？',
    '如何联系客服？',
    '产品保修政策',
    '订单查询',
    '支付方式',
    '如何修改订单',
    '发票问题',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* 头部 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">小风</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">智能助手小风</h1>
                <p className="text-sm text-green-500">在线</p>
              </div>
            </div>
            <button
              onClick={clearChat}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
            >
              <Trash2 size={16} />
              <span className="text-sm">清空对话</span>
            </button>
          </div>
        </div>
      </header>

      {/* 对话区域 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* 消息列表 */}
          <div className="h-[600px] overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className={`flex items-end space-x-2 max-w-[80%] ${
                  message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  {/* 头像 */}
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">小风</span>
                    </div>
                  )}

                  {/* 消息气泡 */}
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-orange-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString('zh-CN', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  {/* 用户头像 */}
                  {message.role === 'user' && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">我</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* 正在输入提示 */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">小风</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 输入区域 */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleVoiceInput}
                disabled={isTyping}
                className={`p-2 rounded-full transition-colors ${
                  isRecording
                    ? 'bg-red-100 text-red-500 animate-pulse'
                    : 'text-gray-500 hover:text-orange-500 hover:bg-orange-50'
                }`}
                title="语音输入"
              >
                <Mic size={20} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isRecording ? '正在录音...' : '输入您的问题...'}
                className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                disabled={isTyping || isRecording}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              小风是基于 AI 技术的智能助手，可能无法完全理解您的问题
            </p>
          </form>
        </div>

        {/* 快捷问题 */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <MessageSquare size={16} className="mr-2" />
            常见问题
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickQuestions.map((question) => (
              <button
                key={question}
                onClick={() => setInput(question)}
                disabled={isTyping}
                className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-orange-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
