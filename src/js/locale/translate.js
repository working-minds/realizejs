Realize.locale.translate = function(key) {
  var currentLanguage = Realize.config.language;
  var languageObj = Realize.locale.languages[currentLanguage];

  return Realize.utils.getProp(key, languageObj);
};

Realize.t = Realize.locale.translate;