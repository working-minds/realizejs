window.LocalizedResourceFieldMixin = {
  propTypes: {
    resource: React.PropTypes.string,
    name: React.PropTypes.string
  },

  localizeResourceField: function(name, resource) {
    if(!name) { name = this.props.name }
    if(!resource) { resource = this.props.resource }

    if(name === undefined || resource === undefined) {
      return '';
    }

    try {
      var resourceKey = 'resources.' + resource + '.fields.' + name;
      return Realize.i18n.t(resourceKey, true);

    } catch(err) {
      resourceKey = 'resources.defaults.fields.' + name;
      try {
        return Realize.i18n.t(resourceKey, true);
      } catch(err) {
        return name;
      }
    }
  }

};

module.exports = LocalizedResourceFieldMixin;