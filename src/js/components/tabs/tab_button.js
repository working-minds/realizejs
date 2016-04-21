var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var ContainerMixin = require('realize/mixins/container_mixin.jsx');
var FormContainerMixin = require('realize/mixins/form/form_container_mixin.jsx');

window.TabButton = React.createClass({
  mixins: [
    CssClassMixin,
    ContainerMixin,
    FormContainerMixin
  ],

  propTypes: {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'tabs.tabButton',
      errorThemeClassKey: 'tabs.tabButton.error',
      className: 's1',
      active: false
    };
  },

  render: function () {
    return (
      <li className={this.formContainerClassName()}>
        <a href={'#' + this.props.id} className={this.props.active ? "active" : ""}>
          {this.props.title}
        </a>
      </li>
    );
  }

});