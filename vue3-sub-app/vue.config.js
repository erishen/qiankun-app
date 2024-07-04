const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7300, // 你可以选择任意一个未被占用的端口
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd',
      chunkLoadingGlobal: 'webpackJsonp_vueApp',
    },
  },
})
