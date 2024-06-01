const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'WanderLink',
    themeColor: '#2d89ef',
    msTileColor: '#ffffff',
    manifestOptions: {
      background_color: '#ffffff'
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        process: require.resolve('process/browser')
      }
    }
  }
})
