var ContainerMixin = {
  propTypes: {
    forwardedProps: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      forwardedProps: {}
    };
  },

  getChildren: function() {
    return this.cloneChildrenWithProps();
  },

  renderChildren: function() {
    return this.cloneChildrenWithProps();
  },

  getAllDescendants: function() {

  },

  cloneChildrenWithProps: function() {
    var props = this.buildPropsToForward();

    return React.Children.map(this.props.children, function(child) {
      var forwardedProps = $.extend({}, this.props.forwardedProps, props);
      return React.addons.cloneWithProps(child, $.extend({}, forwardedProps, { forwardedProps: forwardedProps }));
    }.bind(this));
  },

  buildPropsToForward: function() {
    var propsToForward = !!this.propsToForward ? this.propsToForward() : [];
    var forwardMapping = !!this.propsToForwardMapping ? this.propsToForwardMapping() : {};
    var props = {};

    for(var i = 0; i < propsToForward.length; i++) {
      var propToForward = propsToForward[i];

      props[propToForward] = this.props[propToForward];
    }

    return $.extend(props, forwardMapping);
  }

};