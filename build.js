var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var stylus = require('metalsmith-stylus');

metalsmith(__dirname)
  .source('src')
  .use(markdown(require('./config/markdown')))
  .use(templates(require('./config/templates')))
  .use(stylus(require('./config/stylus')))
  .destination('build')
  .build(function(err){
    if (err){
      throw err;
    }
  });
