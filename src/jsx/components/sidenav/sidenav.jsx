var SideNav = React.createClass({
  //mixins: [CssClassMixin],

  propTypes: {
    items: React.PropTypes.array,
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    text: React.PropTypes.string,
    ref_id:React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      items: [],
      icon: 'view_headline',
      iconAlign: '',
      ref_id: 'sideNav',
      text: ''
    };
  },

  render: function () {
    var iconAlign = this.props.text? 'left':'';
    return (<div>
      <a href={this.props.href} ref="sideNav" onClick={this.props.onClick} target={this.props.target} data-activates={this.props.ref_id}>
        <i className={'material-icons ' + iconAlign}>{this.props.icon}</i>
        {this.props.text}
      </a>
      {this.renderMenu()}
    </div>);
  },

  renderMenu: function(){
    return (<Menu ref_id={this.props.ref_id} className="side-nav full" items={this.props.items}>{this.props.children}</Menu>);
  },

  componentDidMount: function(){
    $(React.findDOMNode(this.refs.sideNav)).sideNav();
  }

});
