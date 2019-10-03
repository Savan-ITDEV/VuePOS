module.exports = {
    devServer: {
      proxy: {
        "/upload": {
          target: "http://localhost:8084",
        }
      }
    }
  }