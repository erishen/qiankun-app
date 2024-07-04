import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerMicroApps([
  {
    name: 'sub-app-1',
    entry: '//localhost:7100',
    container: '#subapp-viewport',
    activeRule: '/subapp1',
  },
  {
    name: 'sub-app-2',
    entry: '//localhost:7200',
    container: '#subapp-viewport',
    activeRule: '/subapp2',
  },
  {
    name: 'vue3-sub-app',
    entry: '//localhost:7300',
    container: '#subapp-viewport',
    activeRule: '/vue3',
  },
]);

start();
