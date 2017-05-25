import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';

@mixin(CssClassMixin)
export default class FlashContent extends Component {
  static propTypes = {
    type: PropTypes.string,
    message: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.array,
    ]),
  };

  constructor(props) {
    super(props);
    this.state = {
      themeClassKey: `flash.content flash.${this.props.type}.content`
    };
  }

  renderMessages() {
    const isArray = Array.isArray(this.props.message);
    const messages = !isArray ? [this.props.message] : this.props.message;
    return messages.map((message, index) => {
      const MessageComponent = typeof message === 'string'
        ? 'p'
        : 'span';

      return <MessageComponent key={`flash_content_${index}`}>{message}</MessageComponent>;
    });
  }

  render () {
    return (
      <div className={this.className()}>
        {this.renderMessages()}
      </div>
    );
  }
}
