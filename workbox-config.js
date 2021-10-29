module.exports = {
  globDirectory: 'build/',
  cleanupOutdatedCaches: true,
  inlineWorkboxRuntime: false,
  navigationPreload: false,
  runtimeCaching: [
    {
      urlPattern: /https:\/\/mind-health\.ru\/(?!api)/,
      handler: 'NetworkFirst',
    },
    {
      urlPattern: /https:\/\/fonts\.googleapis\.com/,
      handler: 'CacheFirst',
    },
    {
      urlPattern: /https:\/\/fonts\.gstatic\.com/,
      handler: 'CacheFirst',
    },
  ],
  globPatterns: ['**/*.{ico}'],
  swDest: 'build/sw.js',
};
