import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { Button } from '../../components';
import { CssClassMixin } from '../../mixins';

@mixin(CssClassMixin)
export default class ModalButton extends Component {
  static propTypes = {
    modalId: PropTypes.string,
    openerId: PropTypes.string
  };

  static defaultProps = {
    modalId: '',
    openerId: ''
  };

  render () {
    return (
      <Button {...this.props}
        className={this.getClassName()}
        onClick={this.openModal}
        ref="modalButton"/>
    );
  }

  getClassName () {
    let className = this.className();
    if(this.props.disabled && this.props.element === 'a')
      className = 'button btn-flat disable-action-button';

    return className;
  }

  openModal (event) {
    event.nativeEvent.preventDefault();
    event.stopPropagation();
    event.preventDefault();

    ModalActions.open(this.props);
  }
}
