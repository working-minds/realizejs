var numeral = require('numeral');
var supportedLanguages = require('../../node_modules/numeral/languages/*.js', { mode: 'list' });

supportedLanguages.forEach(function(language) {
  var languageObj = language.module;
  var languageName = language.name;
  numeral.language(languageName, languageObj);
});

module.exports = numeral;