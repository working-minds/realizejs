var FlashContent = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string,
    text: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      themeClassKey: 'flash.content flash.' + this.props.type + '.content'
    }
  },

  render: function() {
    return (
      <div className={this.className()}>
        <p>
          {this.props.text}
        </p>
      </div>
    );
  }
});
