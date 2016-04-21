import React, { Component } from 'react';
import PropTypes from 'prop_types';

export default class Spinner extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    active: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    size: 'small',
    color: 'green',
    active: true,
    className: ''
  };

  render () {
    return (
      <div className={this.wrapperClassName()}>
        <div className={this.layerClassName()}>
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  }

  wrapperClassName () {
    let className = "spinner preloader-wrapper " + this.props.size;
    if(this.props.active) {
      className += " active";
    }

    className += " " + this.props.className;
    return className;
  }

  layerClassName () {
    let className = "spinner-layer spinner-" + this.props.color + "-only";

    return className;
  }
}
