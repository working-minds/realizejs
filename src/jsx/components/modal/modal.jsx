var Modal = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    top: React.PropTypes.string,
    bottom: React.PropTypes.string,
    left: React.PropTypes.string,
    right: React.PropTypes.string,
    footerFixed:React.PropTypes.boolean
  },

  getDefaultProps: function() {
    return {
      id:'',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      footerFixed:false
    }
  },

  render: function() {
    return (
      <div id={this.props.id} className={this.themeStyle()} ref="modal">
        {this.props.children}
      </div>
    );
  },

  themeStyle: function(){
    var className = 'modal '+this.props.className;
    className = this.props.footerFixed? (className += ' modal-fixed-footer ') : className;
    return className;
  },

  componentDidMount: function(){
    this.applyDimension();
  },

  applyDimension: function(){
    var modal = $(React.findDOMNode(this.refs.modal));
    modal.css('top',this.props.top+'px');
    modal.css('left',this.props.left+'px');
    modal.css('right',this.props.right+'px');
    modal.css('bottom',this.props.bottom+'px');
  }
});

