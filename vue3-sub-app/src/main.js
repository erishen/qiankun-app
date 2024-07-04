import './public-path';
import { createApp } from 'vue'
import App from './App.vue'
// import router from './router';

// createApp(App).mount('#app')

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
  // instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  if (instance) {
    instance.unmount();
    instance = null;
  }
}

