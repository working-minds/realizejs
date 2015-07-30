$.extend(FormSerializer.patterns, {
  validate: /^[a-z_][a-z0-9#_\.-]*(?:\[(?:\d*|[a-z0-9#_\.-]+)\])*$/i,
  key: /[a-z0-9#_\.-]+|(?=\[\])/gi,
  named: /^[a-z0-9#_\.-]+$/i
});