var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.SideNav = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    items: React.PropTypes.array,
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    text: React.PropTypes.string,
    ref_id:React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'sidenav.button',
      items: [],
      icon: 'view_headline',
      iconAlign: '',
      ref_id: 'sideNav',
      text: ''
    };
  },

  render: function () {
    var iconAlign = this.props.text? 'left' : '';

    return (
      <div>
        <a href={this.props.href} className={this.className()} ref="sideNav" onClick={this.props.onClick} target={this.props.target} data-activates={this.props.ref_id}>
          <i className={'material-icons ' + iconAlign}>{this.props.icon}</i>
          {this.props.text}
        </a>
        {this.renderMenu()}
      </div>
    );
  },

  renderMenu: function(){
    return (<Menu ref_id={this.props.ref_id} className="side-nav full" items={this.props.items}>{this.props.children}</Menu>);
  },

  componentDidMount: function(){
    $(ReactDOM.findDOMNode(this.refs.sideNav)).sideNav();
  }

});
