var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');

metalsmith(__dirname)
  .source('src')
  .use(markdown(require('./config/markdown')))
  .use(templates(require('./config/templates')))
  .destination('build')
  .build(function(err){
    if (err){
      throw err;
    }
  });
