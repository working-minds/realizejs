let numeral = require('numeral');
let languages = require.context('numeral/languages/', false, /\.js$/);
let supportedLanguages = Object.keys(languages);

supportedLanguages.forEach((languageName) => {
  let language = languages[languageName];
  numeral.language(languageName, language);
});

export default numeral;
