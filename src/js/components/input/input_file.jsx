var InputFile = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    buttonName: React.PropTypes.string,
    wrapperClassName: React.PropTypes.string,
    buttonClassName: React.PropTypes.string,
    filePathWrapperClassName: React.PropTypes.string,
    buttonIcon: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.file',
      buttonName: 'Arquivo'
    };
  },

  render: function() {
    return (
      <div className={this.wrapperClassName()}>
        <div className={this.buttonClassName()}>
          <span>{this.getButtonName()}</span>
          <input {...this.props} value={this.state.value} onChange={this.handleChange} type="file" ref="input" />
        </div>
        <div className={this.filePathWrapperClassName()}>
          <input className={this.inputClassName()} placeholder={this.getLabelName()} type="text" ref="filePath" />
        </div>
      </div>
    );
  },

  handleChange: function(event) {
    this._handleChange(event);

    var fileInput = ReactDOM.findDOMNode(this.refs.input);
    var filePathInput = ReactDOM.findDOMNode(this.refs.filePath);

    $(filePathInput).val(fileInput.files[0].name);
  },

  wrapperClassName: function() {
    return this.themedClassName('input.file.wrapper', this.props.wrapperClassName);
  },

  filePathWrapperClassName: function() {
    return this.themedClassName('input.file.filePathWrapper', this.props.filePathWrapperClassName);
  },

  buttonClassName: function() {
    return this.themedClassName('input.file.button', this.props.buttonClassName);
  },

  getButtonName: function() {
    if (!!this.props.buttonIcon) {
      var component = [];
      component.push(<i className="material-icons">{this.props.buttonIcon}</i>);

      return component;
    }

    return this.props.buttonName;
  },

  getLabelName: function() {
    return (this.props.label || this.props.name);
  }
});
