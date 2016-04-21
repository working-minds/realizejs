import React from 'react';
import PropTypes from 'prop_types';
import $ from 'jquery';
import isEqual from 'lodash/isEqual';

export default {
  propTypes: {
    forwardedProps: PropTypes.object
  },

  getDefaultProps () {
    return {
      forwardedProps: {}
    };
  },

  getChildren () {
    return this.cloneChildrenWithProps();
  },

  renderChildren () {
    return this.cloneChildrenWithProps();
  },

  filterChildren (childType) {
    let result = [];
    React.Children.map(this.props.children, function(child) {
      if (!!child && child.type == childType) {
        result.push(child);
      }
    });

    return result;
  },

  cloneChildrenWithProps (options) {
    let props = this.buildPropsToForward();

    if (!!options && !!options.childrenType) {
      return React.Children.map(this.filterChildren(options.childrenType), function(child) {
        let forwardedProps = $.extend({}, this.props.forwardedProps, props);
        if(!child || !child.type) {
          return null;
        }

        return React.cloneElement(child, $.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
      }.bind(this));
    } else {
      return React.Children.map(this.props.children, function(child) {
        let forwardedProps = $.extend({}, this.props.forwardedProps, props);
        if(!child || !child.type) {
          return null;
        }

        return React.cloneElement(child, $.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
      }.bind(this));
    }
  },

  buildChildPropsToKeep (child) {
    let defaultChildProps = {};
    let keepProps = [];

    if(!!child.type.getDefaultProps)
      defaultChildProps = child.type.getDefaultProps();

    if($.isArray(child.props['ignoreForwarded']))
      keepProps = child.props['ignoreForwarded'];

    var newProps = {};

    for(var k in child.props) {
      if( this.childPropValueIsNotDefault(child.props[k], defaultChildProps[k]) ||
          this.shouldKeepChildPropValueAnyway(k, keepProps))
        newProps[k] = child.props[k];
    }
    return newProps;
  },

  childPropValueIsNotDefault (propValue, defaultPropValue) {
    return !isEqual(propValue, defaultPropValue);
  },


  shouldKeepChildPropValueAnyway (propName, keepList) {
    return keepList.indexOf(propName) >= 0;
  },

  buildPropsToForward () {
    let propsToForward = !!this.propsToForward ? this.propsToForward() : [];
    let forwardMapping = !!this.propsToForwardMapping ? this.propsToForwardMapping() : {};
    let props = {};

    for(let i = 0; i < propsToForward.length; i++) {
      let propToForward = propsToForward[i];

      props[propToForward] = this.props[propToForward];
    }

    return $.extend(props, forwardMapping);
  }

}
