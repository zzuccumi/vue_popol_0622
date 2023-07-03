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
  publicPath: "/vue_portfolio/",
};
