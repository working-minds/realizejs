import PropTypes from '../prop_types';
import i18n from '../i18n/i18n';

export default {
  propTypes: {
    resource: PropTypes.string,
    name: PropTypes.string
  },

  localizeResourceField (name, resource) {
    if(!name) { name = this.props.name }
    if(!resource) { resource = this.props.resource }

    if(name === undefined || resource === undefined) {
      return '';
    }

    try {
      let resourceKey = 'resources.' + resource + '.fields.' + name;
      return i18n.t(resourceKey, true);

    } catch(err) {
      resourceKey = 'resources.defaults.fields.' + name;
      try {
        return i18n.t(resourceKey, true);
      } catch(err) {
        return name;
      }
    }
  }

}
