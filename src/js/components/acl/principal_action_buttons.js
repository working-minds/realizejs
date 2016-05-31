import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { Button } from '../../components';

import {
  RequestHandlerMixin,
  ModalRendererMixin,
} from '../../mixins';

@mixin(
  RequestHandlerMixin,
  ModalRendererMixin,
)
export default class PrincipalActionButtons extends Component {
  static propTypes = {
    className: PropTypes.string,
    handleOpenPrincipalModal: PropTypes.func,
    handleRemovePrincipal: PropTypes.func,
  }

  static defaultProps = {
    className: 'principal-action-buttons',
    handleAddPrincipal: null,
    handleRemovePrincipal: null,
  }

  renderRemovePrincipalButton() {
    const component = [];
    component.push(
      <Button
        name="Remover"
        onClick={this.props.handleRemovePrincipal}
      />
    );

    return component;
  }

  renderAddPrincipalButton() {
    const component = [];
    component.push(
      <Button
        name="Adicionar"
        onClick={this.props.handleOpenPrincipalModal}
      />
    );

    return component;
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderAddPrincipalButton()}
        {this.renderRemovePrincipalButton()}
        <div style={{ clear: 'both' }}></div>
      </div>
    );
  }
}
