var highlight = require('highlight.js');

module.exports = {
 gfm: true,
 tables: true,
 highlight: function (code, lang) {
   if (!lang) {
     return code;
   }

   try {
     return highlight.highlight(lang, code).value;
   } catch (e) {
     return code;
   }
 }
};
