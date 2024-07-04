import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './public-path';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let root = null;

// 定义渲染函数
function render(props) {
  const { container } = props;
  const containerElement = container ? container.querySelector('#root') : document.querySelector('#root');
  if (!root) {
    root = ReactDOM.createRoot(containerElement);
  }
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// 单独运行时渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 导出生命周期函数
export async function bootstrap() {
  console.log('sub-app-2 bootstraped');
}

export async function mount(props) {
  console.log('sub-app-2 mounted', props);
  render(props);
}

export async function unmount(props) {
  console.log('sub-app-2 unmounted', props);
  if (root) {
    root.unmount();
    root = null;
  }
}