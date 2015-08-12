var ModalFooter = React.createClass({
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
      <div id={this.props.id} className={'modal-footer '+this.props.className} ref="modalFooter">
        {this.props.children}
      </div>
    );
  },

  componentDidMount: function(){
    this.applyDimension();
  },

  applyDimension: function(){
    var modalFooter = $(React.findDOMNode(this.refs.modalFooter));
    modalFooter.css('height',this.props.height);
  }

});