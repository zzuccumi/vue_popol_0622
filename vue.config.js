const path = require("path");

module.exports = {
  assetsDir: "assets",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss"`,
      },
      scss: {
        additionalData: `@import "@/assets/styles/mixins.scss";`,
      },
      scss: {
        additionalData: `@import "@/assets/styles/common.scss"`,
      },
    },
  },
  publicPath: "/vue_popol_0622/",
  outputDir: path.resolve(__dirname, "./dist"),
};
