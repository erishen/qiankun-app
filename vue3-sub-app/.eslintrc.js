module.exports = {
  root: true, // 表示这是根配置文件，不再继续向上查找其他配置文件
  env: {
    node: true, // 设置环境为 Node.js
    browser: true, // 设置环境为浏览器
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐的规则
    'plugin:vue/vue3-recommended', // 使用 Vue 3 推荐的规则
  ],
  parserOptions: {
    parser: 'babel-eslint', // 使用 babel-eslint 解析器
    ecmaVersion: 2023, // 设置 ECMAScript 版本
    sourceType: 'module', // 设置源代码类型为 module，即 ECMAScript 模块
  },
  rules: {
    // 自定义规则配置
    'no-console': 'off', 
    'no-unused-vars': 'error',
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/require-default-prop": "off"
  },
};
