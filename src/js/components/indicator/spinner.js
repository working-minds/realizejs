window.Spinner = React.createClass({

  propTypes: {
    size: React.PropTypes.string,
    color: React.PropTypes.string,
    active: React.PropTypes.bool,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      size: 'small',
      color: 'green',
      active: true,
      className: ''
    };
  },

  render: function() {
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
  },

  wrapperClassName: function() {
    var className = "spinner preloader-wrapper " + this.props.size;
    if(this.props.active) {
      className += " active";
    }

    className += " " + this.props.className;
    return className;
  },

  layerClassName: function() {
    var className = "spinner-layer spinner-" + this.props.color + "-only";

    return className;
  }
});
