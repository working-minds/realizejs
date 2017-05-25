import React from 'react';
import _ from 'lodash';

import i18n from '../../i18n/i18n';
import PropTypes from '../../prop_types';
import { FormActions } from '../../actions';
import Flash from '../../components/flash/flash';

export default {
  propTypes: {
    errorMessage: PropTypes.string,
    baseErrorParam: PropTypes.string,
    onError: PropTypes.func,
    mapping: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      errorMessage: i18n.t('errors.formErrorMessage'),
      baseErrorParam: 'base',
      onError() { return true; },
      mapping: true,
    };
  },

  getInitialState() {
    return {
      errors: {},
    };
  },

  clearErrors() {
    this.setState({ errors: {} });
  },

  handleValidationError(xhr) {
    this.setState({ errors: this.getParsedErrors(xhr.responseText) });
  },

  getParsedErrors(errors) {
    const parsedErrors = JSON.parse(errors);
    if (this.props.mapping) {
      return this.mapParsedErrors(parsedErrors);
    } else {
      return parsedErrors;
    }
  },

  mapParsedErrors(parsedErrors) {
    return Object.keys(parsedErrors)
      .reduce((acc, k) => Object.assign({}, acc, { [k.split('.').pop()]: parsedErrors[k] }), {});
  },

  handleError(xhr, status, error) {
    this.setState({ isLoading: false });

    FormActions.error(this.props.id, xhr, status, error);
    if (this.props.onError(xhr, status, error) && (xhr.status === 422)) {
      this.handleValidationError(xhr);
    }
  },

  renderBaseErrorsListItems(baseErrors) {
    return baseErrors.map((baseError) => (
      <li key={baseError}>{baseError}</li>
    ));
  },

  renderBaseErrorsList() {
    const baseErrors = this.state.errors[this.props.baseErrorParam];
    if (!baseErrors) return <span />;
    return (
      <ul>
        {this.renderBaseErrorsListItems(baseErrors)}
      </ul>
    );
  },

  renderFlashErrorMessage() {
    return (
      <div>
        {this.props.errorMessage}
        {this.renderBaseErrorsList()}
      </div>
    );
  },

  renderFlashErrors() {
    if (_.isEmpty(this.state.errors)) return <span />;
    return (
      <Flash
        type="error"
        message={this.renderFlashErrorMessage()}
        dismissed={false}
      />
    );
  },
};
