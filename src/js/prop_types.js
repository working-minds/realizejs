import PropTypes from 'prop-types';
import i18n from './i18n/i18n';

export default {
  ...PropTypes,
  localizedString(props, propName, componentName) {
    const value = props[propName];
    if (value === null ||
        value === undefined ||
        (typeof value === 'string' && value.length === 0)) {

      return null;
    }

    const translatedValue = i18n.t(value);
    if (typeof value !== 'string' ||
        typeof translatedValue !== 'string' ||
        translatedValue.length === 0) {

      return new Error(`Property ${propName} from ${componentName} is not a localized string`);
    }

    return null;
  },
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.string,
  ]),
};
