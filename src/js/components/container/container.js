import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import ContainerMixin from '../../mixins/container_mixin';

@mixin(ContainerMixin)
export default class Container extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: 'row'
  }

  render () {
    return (
      <div className={this.props.className}>
        {this.renderChildren()}
      </div>
    );
  }
}
