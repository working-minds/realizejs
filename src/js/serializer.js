$.extend(FormSerializer.patterns, {
  validate: /^[a-z_][a-z0-9_\.-]*(?:\[(?:\d*|[a-z0-9_\.-]+)\])*$/i,
  key: /[a-z0-9_\.-]+|(?=\[\])/gi,
  named: /^[a-z0-9_\.-]+$/i
});