import React from 'react';
import PropTypes from '../prop_types';
import _ from 'lodash';

export default {
  propTypes: {
    forwardedProps: PropTypes.object,
    ignoreForwarded: PropTypes.array,
  },

  getDefaultProps() {
    return {
      forwardedProps: {},
    };
  },

  getChildren() {
    return this.cloneChildrenWithProps();
  },

  renderChildren() {
    return this.cloneChildrenWithProps();
  },

  filterChildren(childType) {
    const result = [];
    React.Children.map(this.props.children, (child) => {
      if (!!child && child.type === childType) {
        result.push(child);
      }
    });

    return result;
  },

  cloneChildrenWithProps(options) {
    const props = this.buildPropsToForward();
    const cloneChildWithProps = this.cloneChildWithProps.bind(this, props);

    if (!!options && !!options.childrenType) {
      return React.Children.map(this.filterChildren(options.childrenType), cloneChildWithProps);
    }

    return React.Children.map(this.props.children, cloneChildWithProps);
  },

  cloneChildWithProps(props, child) {
    const forwardedProps = _.merge({}, this.props.forwardedProps, props);
    if (!child || !child.type) {
      return null;
    }

    return React.cloneElement(
      child,
      _.merge({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps })
    );
  },

  buildChildPropsToKeep(child) {
    const { getDefaultProps } = child.type;
    const { ignoreForwarded } = child.props;
    const defaultChildProps = getDefaultProps ? child.type.getDefaultProps() : {};
    const keepProps = Array.isArray(ignoreForwarded) ? ignoreForwarded : [];

    return Object.keys(child.props)
      .filter((propKey) => (
        this.childPropValueIsNotDefault(child.props[propKey], defaultChildProps[propKey]) ||
        this.shouldKeepChildPropValueAnyway(propKey, keepProps)
      ))
      .reduce((acc, propKey) => Object.assign(acc, { [propKey]: child.props[propKey] }), {});
  },

  childPropValueIsNotDefault(propValue, defaultPropValue) {
    return !_.isEqual(propValue, defaultPropValue);
  },

  shouldKeepChildPropValueAnyway (propName, keepList) {
    return keepList.indexOf(propName) >= 0;
  },

  buildPropsToForward() {
    const propsToForward = this.propsToForward ? this.propsToForward() : [];
    const forwardMapping = this.propsToForwardMapping ? this.propsToForwardMapping() : {};

    return _.merge(propsToForward.reduce((acc, propToForward) => (
      Object.assign(acc, { [propToForward]: this.props[propToForward] })
    ), {}), forwardMapping);
  },

};
