import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import "antd/dist/antd.min.css";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import "virtual:windi.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
