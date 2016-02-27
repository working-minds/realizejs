var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputFile = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    wrapperClassName: React.PropTypes.string,
    buttonClassName: React.PropTypes.string,
    buttonName: Realize.PropTypes.localizedString,
    buttonIcon: React.PropTypes.string,
    filePathWrapperClassName: React.PropTypes.string,
    filePathField: React.PropTypes.string,
    data: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.file',
      buttonName: 'inputs.file.buttonName',
      filePathField: null,
      data: {}
    };
  },

  render: function() {
    return (
      <div className={this.wrapperClassName()}>
        <div className={this.buttonClassName()}>
          <span>{this.getButtonName()}</span>
          <input {...this.props}
            value={this.state.value}
            onChange={this.handleChange}
            disabled={this.props.disabled || this.props.readOnly}
            type="file"
            ref="input"
          />
        </div>
        <div className={this.filePathWrapperClassName()}>
          <input
            className={this.inputClassName()}
            placeholder={this.getLabelName()}
            onFocus={this._handleFocus}
            type="text"
            ref="filePath"
          />
        </div>
      </div>
    );
  },

  componentDidMount: function() {
    this.setFilePathValue();
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
      component.push(<i className="material-icons" key="inputFileIcon">{this.props.buttonIcon}</i>);

      return component;
    }

    return Realize.i18n.t(this.props.buttonName);
  },

  getLabelName: function() {
    return (this.props.label || this.props.name);
  },

  getFilePathField: function() {
    var filePathField = this.props.filePathField;
    if(!filePathField) {
      filePathField = this.props.id + "_file_name";
    }

    return filePathField;
  },

  setFilePathValue: function() {
    var filePathNode = ReactDOM.findDOMNode(this.refs.filePath);
    var filePathField = this.getFilePathField();

    if(!!filePathField) {
      var filePath = this.props.data[filePathField];
      if(!!filePath) {
        filePathNode.value = filePath;
      }
    }
  }

});
