# 声明
本项目只是为学习react使用，借鉴大佬项目 https://github.com/huajian-pro/resume-design

## 项目介绍

该项目目前为纯前端项目，所有数据存储在浏览器端，你可以利用该项目轻松制作出精美的简历。你可以随意添加删除简历模块、选择模板、更改字体大小、颜色、间距等等样式。

## 在线体验地址

https://icefiresong24.github.io/

**图片：**

<p align="center"><img width="1000" src="https://gitee.com/sharemore52/resume-design/raw/main/doc/images/3.png"></p>


<p align="center"><img width="1000" src="https://gitee.com/sharemore52/resume-design/raw/main/doc/images/4.png"></p>


<p align="center"><img width="1000" src="https://gitee.com/sharemore52/resume-design/raw/main/doc/images/6.png"></p>

## 功能介绍

- [x] 简历模板提供
- [x] 动态增删简历模块
- [x] 自定义模板中字体样式
- [x] 导出为PDF功能(待完善）
- [x] 重置
- [x] 自定义头像


## 项目技术

- 使用react+redux+react-router + Typescript + Vite技术栈(新手学习上路。。。）

## 如何使用

### 拉取项目
```bash
git clone 
```
- 推荐使用包管理工具[pnpm](https://pnpm.io/installation)
- 或使用[yarn](https://yarnpkg.com/getting-started/install)、npm（node自带无需额外安装）包管理工具
- Node版本请确保在v16.0及以上

> pnpm全局安装方法`npm i -g pnpm`

### 安装项目依赖
```bash

// 使用pnpm安装依赖（推荐）
pnpm install
```

### 运行项目
```bash
pnpm dev
```

### 构建项目
```bash
pnpm build
```

### 目录说明:

```
├─ doc			  // 项目打包
├─ public         // 公共资源目录
├─ src
│  ├─ api         // 请求封装，暂时未用到
│  ├─ assets      // 资源文件存放目录
│  ├─ components  // 公共组件存放路径
│  ├─ router      // 项目路由配置
|  ├─ store       // 状态管理文件夹
|  ├─ types       // ts类型定义文件
|  ├─ utils       // 工具函数
|  └─ index.html     // 主入口页面
|  └─ env.d.ts    // ts类型声明文件
```
