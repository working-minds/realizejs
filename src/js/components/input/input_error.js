import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';

@mixin(CssClassMixin)
export default class InputError extends Component {
  static propTypes = {
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };

  static defaultProps = {
    errors: [],
    themeClassKey: 'input.error.hint',
  };

  render() {
    return (
      <span className={this.className()}>
        {this.errorMessages()}
      </span>
    );
  }

  errorMessages() {
    let errors = this.props.errors;
    let errorMessage = '';

    if (!Array.isArray(errors)) {
      errors = [errors];
    }

    for (let i = 0; i < errors.length; i++) {
      const error = errors[i];
      errorMessage += `${error} / `;
    }

    return errorMessage.replace(/[\/\s]*$/, '');
  }
}
