import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CssClassMixin from '../../mixins/css_class_mixin';

import {FlashContent, FlashDismiss} from '../flash';

@mixin(CssClassMixin)
export default class Flash extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    message: PropTypes.node,
    dismissTimeout: PropTypes.number,
    canDismiss: PropTypes.bool,
    onDismiss: PropTypes.func,
    dismissed: PropTypes.bool
  };

  static defaultProps = {
    type: 'info',
    dismissTimeout: -1,
    canDismiss: true,
    dismissed: false,
    message: '',
    onDismiss: function() {
      return true;
    }
  };

  constructor (props) {
    super(props);
    this.state = {
      themeClassKey: 'flash flash.' + this.props.type,
      dismissed: this.props.dismissed
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({dismissed: nextProps.dismissed});
  }

  componentDidMount () {
    if(this.props.dismissTimeout > 0) {
      this.setDismissTimeout();
    }
  }

  renderFlash () {
    return (
      <div className={this.className()} ref={ref => { this.flash = ref; }}>
        <FlashContent {...this.props} />
        {this.props.canDismiss ? <FlashDismiss {...this.props} onClick={this.dismiss} />: ''}
      </div>
    );
  }

  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName="dismiss"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.state.dismissed ? '' : this.renderFlash()}
      </ReactCSSTransitionGroup>
    );
  }

  dismiss = () => {
    this.setState({dismissed: true});
    this.props.onDismiss();
  }

  setDismissTimeout () {
    setTimeout(() => {
      this.dismiss();
    }, this.props.dismissTimeout);
  }
}
