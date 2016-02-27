var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.Header = React.createClass({
  mixins: [CssClassMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'header',
      wrapperClassName: 'nav-wrapper container'
    };
  },

  componentDidMount: function(){
    $(".button-collapse").sideNav({
      edge: 'right',
      closeOnClick: true
    });
    $('.collapsible').collapsible();
  },

  render: function() {
    return (
      <nav className={this.className()} role="navigation">
        <div className={this.props.wrapperClassName}>
          {this.props.children}
        </div>
      </nav>
    );
  }

});