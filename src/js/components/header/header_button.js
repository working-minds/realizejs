window.HeaderButton = React.createClass({

  propTypes: {
    imgSrc: React.PropTypes.string,
    imgAlt: React.PropTypes.string,
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    text: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    onClick: React.PropTypes.func,
    ref: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconAlign: ' '
    };
  },

  render: function () {
    var button = '';
    if(this.props.imgSrc)
      button = this.renderImage();
    else
      button = this.renderButton();

    return (
      button
    );
  },

  renderButton: function() {
    return (
      <a href={this.props.href} ref={this.props.ref}  onClick={this.props.onClick} target={this.props.target} >
        <i className={'material-icons ' + this.props.iconAlign}>{this.props.icon}</i>{this.props.text}
      </a>
    );
  },

  renderImage: function(){
    return (
      <a className="brand-logo" href={this.props.href}>
        <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
      </a>);
  }

});
