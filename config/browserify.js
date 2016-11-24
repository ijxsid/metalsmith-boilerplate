module.exports = {
  files: ['/scripts/index.js'],
  dest: '/js/bundle.js',
  transforms: [["babelify", { "presets": ["es2015"] }]],
  extensions: ['.js']
};
