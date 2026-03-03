# 与风同行官网

> 仿小米风格的科技公司官网，包含完整的产品展示、用户认证和智能客服功能。

## 项目简介

与风同行是一家专注于智能硬件与软件创新的科技公司，本官网展示了公司的产品、服务和品牌理念。

### 主要功能

- ✅ 产品展示（手机、电视、笔记本、智能家居、云服务）
- ✅ 用户注册/登录（JWT 认证 + 密码加密）
- ✅ 智能客服"小风"（AI 对话）
- ✅ 新闻资讯
- ✅ 服务支持（维修、退换货、FAQ）
- ✅ 全端响应式设计
- ✅ SEO 优化

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.1.1 | React 框架 |
| React | 19.2.3 | UI 库 |
| TypeScript | 5.x | 类型安全 |
| Tailwind CSS | 4.x | 样式框架 |
| shadcn/ui | Latest | UI 组件库 |
| Supabase | Latest | 数据库与认证 |
| bcryptjs | 3.0.3 | 密码加密 |
| jsonwebtoken | 9.0.3 | JWT 认证 |

## 快速开始

### 前置要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 配置环境变量

复制 `.env.example` 为 `.env.local`，并填入你的配置：

```bash
cp .env.example .env.local
```

**必需的环境变量：**

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# JWT 密钥
JWT_SECRET=your-random-secret-key

# 应用配置
NEXT_PUBLIC_APP_URL=http://localhost:5000
NODE_ENV=development
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:5000](http://localhost:5000) 查看应用。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 项目结构

```
src/
├── app/                      # Next.js App Router
│   ├── api/                  # API 路由
│   │   └── auth/             # 认证相关 API
│   │       ├── login/        # 登录
│   │       ├── register/     # 注册
│   │       ├── me/           # 获取用户信息
│   │       └── logout/       # 登出
│   ├── about/                # 关于我们
│   ├── products/             # 产品展示
│   ├── news/                 # 新闻资讯
│   ├── login/                # 登录页面
│   ├── register/             # 注册页面
│   ├── orders/               # 订单管理
│   ├── ai-assistant/         # AI 智能客服
│   └── layout.tsx            # 根布局
├── components/               # React 组件
│   ├── ui/                   # shadcn/ui 基础组件
│   ├── Header.tsx            # 页头导航
│   ├── Footer.tsx            # 页脚
│   └── ProductGrid.tsx       # 产品网格
├── contexts/                 # React Context
│   └── AuthContext.tsx       # 认证上下文
├── storage/                  # 数据存储
│   └── database/             # 数据库相关
│       └── shared/           # 共享数据库模型
│           └── schema.ts     # 数据库 Schema
└── lib/                      # 工具函数
```

## 核心功能说明

### 用户认证系统

基于 JWT 和 httpOnly Cookie 的安全认证系统：

1. **注册**
   - 邮箱密码注册
   - 密码 bcrypt 加密存储
   - 自动生成 JWT token

2. **登录**
   - 邮箱密码验证
   - JWT token 认证
   - 7 天有效期

3. **会话管理**
   - httpOnly Cookie 存储 token
   - 自动刷新用户信息
   - 安全登出

**API 端点：**

```typescript
POST /api/auth/register  // 注册
POST /api/auth/login     // 登录
GET  /api/auth/me        // 获取当前用户
POST /api/auth/logout    // 登出
```

### 数据库 Schema

```typescript
users {
  id: varchar(36) PK
  email: varchar(255) UNIQUE
  password: varchar(255)
  name: varchar(128)
  created_at: timestamp
  updated_at: timestamp
}
```

## 开发规范

### 1. 使用 shadcn/ui 组件

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>标题</CardHeader>
      <CardContent>
        <Input placeholder="输入内容" />
        <Button>提交</Button>
      </CardContent>
    </Card>
  );
}
```

### 2. 路由开发

```tsx
// src/app/about/page.tsx
export const metadata = {
  title: '关于我们',
  description: '关于页面描述',
};

export default function AboutPage() {
  return <div>关于我们</div>;
}
```

### 3. API 路由

```tsx
// src/app/api/example/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ data: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true });
}
```

### 4. 依赖管理

```bash
# ✅ 使用 pnpm
pnpm install
pnpm add package-name
pnpm add -D package-name

# ❌ 禁止使用 npm 或 yarn
```

## 部署指南

### Vercel 部署（推荐）

```bash
# 1. 推送代码到 GitHub
git push origin main

# 2. 在 Vercel 中导入项目
# 3. 配置环境变量
# 4. 自动部署
```

详细部署步骤请查看 [部署指南-从0到1上线完整指南.md](./部署指南-从0到1上线完整指南.md)

### Docker 部署

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

### 传统服务器部署

```bash
# 安装依赖
pnpm install

# 构建
pnpm build

# 使用 PM2 启动
pm2 start ecosystem.config.js
```

## 性能优化

- ✅ 图片懒加载
- ✅ 代码分割
- ✅ CDN 加速
- ✅ Gzip 压缩
- ✅ 数据库索引
- ✅ 缓存策略

## 安全措施

- ✅ 密码 bcrypt 加密
- ✅ JWT 认证
- ✅ httpOnly Cookie
- ✅ HTTPS
- ✅ XSS 防护
- ✅ CSRF 防护
- ✅ Rate Limiting

## 浏览器支持

| 浏览器 | 版本 |
|--------|------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证。

## 联系方式

- **官网**: https://yufeng.com
- **技术支持**: tech@yufeng.com
- **商务合作**: business@yufeng.com

## 更新日志

### v1.0.0 (2025-01-XX)

**初始发布**
- ✅ 完成核心功能开发
- ✅ 实现用户认证系统
- ✅ 部署到生产环境
