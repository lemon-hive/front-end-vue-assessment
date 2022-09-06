//  npm run build -- --target wc --name test-webcomponent src/App.vue

// function enableShadowCss(config) {
//   const configs = [
//     config.module.rule('vue').use('vue-loader'),
//     config.module.rule('css').oneOf('vue-modules').use('vue-style-loader'),
//     config.module.rule('css').oneOf('vue').use('vue-style-loader'),
//     config.module.rule('css').oneOf('normal-modules').use('vue-style-loader'),
//     config.module.rule('css').oneOf('normal').use('vue-style-loader'),
//   ];
//   configs.forEach((c) =>
//     c.tap((options) => {
//       options.shadowMode = true;
//       return options;
//     })
//   );
// }

// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     if (process.env.NODE_ENV === 'development') {
//       enableShadowCss(config);
//     }
//   },
// });

// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true
// });

function enableShadowCss(config) {
  const configs = [
    config.module.rule('vue').use('vue-loader'),
    config.module.rule('css').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('css').oneOf('vue').use('vue-style-loader'),
    config.module.rule('css').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('css').oneOf('normal').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('vue').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('normal').use('vue-style-loader'),
    config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('scss').oneOf('vue').use('vue-style-loader'),
    config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('scss').oneOf('normal').use('vue-style-loader'),
    config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('sass').oneOf('vue').use('vue-style-loader'),
    config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('sass').oneOf('normal').use('vue-style-loader'),
    config.module.rule('less').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('less').oneOf('vue').use('vue-style-loader'),
    config.module.rule('less').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('less').oneOf('normal').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('vue').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('normal').use('vue-style-loader'),
  ];
  configs.forEach((c) =>
    c.tap((options) => {
      options.shadowMode = true;
      return options;
    })
  );
}

module.exports = {
  // https://cli.vuejs.org/guide/webpack.html#chaining-advanced
  chainWebpack: (config) => {
    enableShadowCss(config);
  },
};

// vue.config.js
// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .tap(options => ({
//         ...options,
//         compilerOptions: {
//           // treat any tag that starts with ion- as custom elements
//           isCustomElement: tag => tag.startsWith('ion-')
//         }
//       }))
//   }
// }
