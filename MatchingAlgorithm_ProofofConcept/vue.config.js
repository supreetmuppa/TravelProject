module.exports = {
    devServer: {
      proxy: {
        '/match': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      }
    }
  };
  