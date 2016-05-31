import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import { autobind } from '../../../utils/decorators';

import { Button } from '../../../components';

export default class CloseModalButton extends Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    clearTheme: PropTypes.bool,
    element: PropTypes.string,
    modalId: PropTypes.string,
  };

  static defaultProps = {
    name: 'Fechar',
    className: 'btn waves-effect waves-light close-button grey lighten-4',
    clearTheme: true,
    element: 'a',
  };

  @autobind
  closeModal() {
    if (!!this.props.modalId) {
      $(`#${this.props.modalId}`).closeModal();
    }
  }

  render() {
    return (
      <Button {...this.props} onClick={this.closeModal} />
    );
  }
}
