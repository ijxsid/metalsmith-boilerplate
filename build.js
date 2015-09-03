var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var stylus = require('metalsmith-stylus');
var browsersync = require('metalsmith-browser-sync');
var gulpsmith = require('gulpsmith');
var browserify = require('metalsmith-browserify');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var define = require('metalsmith-define');
var paginate = require('metalsmith-pagination');

console.log('dirname => ', __dirname);

metalsmith(__dirname)
  .source('src')
  .use(define(require('./config/metadata')))
  .use(collections(require('./config/collections')))
  .use(paginate(require('./config/pagination.js')))
  .use(markdown(require('./config/markdown')))
  .use(permalinks(require('./config/permalinks')))
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
  
