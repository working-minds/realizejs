import React, { Component } from 'react';
import PropTypes from 'prop_types';

import { Button } from 'components';

export default class UpdatePermissionButton extends Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    clearTheme: PropTypes.bool,
    element: PropTypes.string,
    handleUpdatePermissions: PropTypes.func,
  }

  static defaultProps = {
    name: 'Atualizar',
    className: 'btn waves-effect waves-grey button-modal ',
    clearTheme: true,
    element: 'a',
    handleUpdatePermissions: () => null,
  }

  render() {
    return (
      <Button
        {...this.props}
        onClick={this.props.handleUpdatePermissions}
      />
    );
  }
}
