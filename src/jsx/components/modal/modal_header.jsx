var ModalHeader = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    height: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      height:'50px',
      width:'100%'
    };
  },

  render: function() {
    return (
        <div id={this.props.id} className={'modal-header '+this.props.className} ref="modalHeader">
          {this.props.children}
        </div>
    );
  },

  componentDidMount: function(){
    this.applyDimension();
  },

  applyDimension: function(){
    var modalHeader = $(React.findDOMNode(this.refs.modalHeader));
    modalHeader.css('height',this.props.height);
  }

});