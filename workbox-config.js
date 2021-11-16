module.exports = {
  globDirectory: 'build/',
  cleanupOutdatedCaches: true,
  inlineWorkboxRuntime: false,
  navigationPreload: false,
  // runtimeCaching: [
  //   {
  //     urlPattern: /https:\/\/med-app\.store\//,
  //     handler: 'NetworkFirst',
  //   },
  // ],
  globPatterns: ['**/*.{html,json,js,css,pdf}'],
  swDest: 'build/sw.js',
};
