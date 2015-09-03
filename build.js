var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var stylus = require('metalsmith-stylus');
var browsersync = require('metalsmith-browser-sync');
var gulpsmith = require('gulpsmith');
var browserify = require('metalsmith-browserify');


console.log('dirname => ', __dirname);

metalsmith(__dirname)
  .source('src')
  .use(markdown(require('./config/markdown')))
  .use(templates(require('./config/templates')))
  .use(stylus(require('./config/stylus')))
  .use(browserify(require('./config/browserify')))
  .destination('build')
  .use(browsersync(require('./config/browsersync')))
  .build(function(err){
    if (err){
      throw err;
    }
  });
  
