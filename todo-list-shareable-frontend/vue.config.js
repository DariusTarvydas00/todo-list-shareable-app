const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
    devServer: {
      proxy: 'http://161.97.99.214:3000'
    }
});
