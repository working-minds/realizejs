window.HeaderMenu = React.createClass({

  propTypes: {
    items: React.PropTypes.array,
    leftIcon: React.PropTypes.string,
    rightIcon: React.PropTypes.string,
    text: React.PropTypes.string,
    href: React.PropTypes.string,
    ref_id:React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      items: [],
      leftIcon: '',
      rightIcon: '',
      ref_id: 'headerMenu'
    };
  },

  render: function () {
    var leftIcon =  (this.props.leftIcon !== '')? <i className={'material-icons left'}>{this.props.leftIcon}</i> : '';
    var rightIcon =  (this.props.rightIcon !== '')? <i className={'material-icons right'}>{this.props.rightIcon}</i> : '';

    return (
        <div>
          <a href={this.props.href} ref="readerMenu" onClick={this.props.onClick} target={this.props.target} data-activates={this.props.ref_id}>
            {leftIcon}
            {this.props.text}
            {rightIcon}
          </a>
          {this.renderMenu()}
        </div>
    );
  },

  renderMenu: function(){
    return (
        <Menu ref_id={this.props.ref_id} className="dropdown-content" items={this.props.items}>
          {this.props.children}
        </Menu>
    );
  },

  componentDidMount: function(){
    $(ReactDOM.findDOMNode(this.refs.readerMenu)).dropdown();
  }

});
