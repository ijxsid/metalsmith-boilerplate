var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var stylus = require('metalsmith-stylus');
var browsersync = require('metalsmith-browser-sync');

metalsmith(__dirname)
  .source('src')
  .use(markdown(require('./config/markdown')))
  .use(templates(require('./config/templates')))
  .use(stylus(require('./config/stylus')))
  .destination('build')
  .use(browsersync({
  server: 'build',
  files: ['src/**/*.md', 'src/**/*.styl', 'templates/**/*.jade']
  }))
  .build(function(err){
    if (err){
      throw err;
    }
  });
  
