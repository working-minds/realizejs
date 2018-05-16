import React from 'react';

import PropTypes from '../../prop_types';
import { FormActions } from '../../actions';

import Flash from '../../components/flash/flash';

export default {
  propTypes: {
    onSuccess: PropTypes.func,
    successMessage: PropTypes.string,
  },

  getDefaultProps() {
    return {
      onSuccess() { return true; },
      successMessage: '',
    };
  },

  getInitialState() {
    return {
      showSuccessFlash: false,
    };
  },

  renderFlashSuccess() {
    if (!this.state.showSuccessFlash) return <span />;
    return (
      <Flash
        type="success"
        message={this.props.successMessage}
        dismissed={false}
      />
    );
  },

  handleSuccess(data, status, xhr) {
    this.setState({
      isLoading: false,
      errors: {},
      showSuccessFlash: (!!this.props.successMessage && this.props.successMessage.length > 0),
    });

    FormActions.success(this.props.id, data, status, xhr);
    if (this.props.onSuccess(data, status, xhr) &&
        xhr.getResponseHeader('Content-Type').match(/text\/javascript/)) {
      eval(data);
    }
  },
};
