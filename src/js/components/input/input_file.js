import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import i18n from '../../i18n';
import { autobind, mixin } from '../../utils/decorators';

import {
  CssClassMixin,
  InputComponentMixin,
} from '../../mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin,
)
export default class InputFile extends Component {
  static propTypes = {
    wrapperClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
    buttonName: PropTypes.localizedString,
    buttonIcon: PropTypes.string,
    filePathWrapperClassName: PropTypes.string,
    filePathField: PropTypes.string,
    data: PropTypes.object,
  };

  static defaultProps = {
    themeClassKey: 'input.file',
    buttonName: 'inputs.file.buttonName',
    filePathField: null,
    data: {},
  };

  componentDidMount() {
    this.setFilePathValue();
  }

  getButtonName() {
    if (!!this.props.buttonIcon) {
      const component = [];
      component.push(<i className="material-icons" key="inputFileIcon">{this.props.buttonIcon}</i>);

      return component;
    }

    return i18n.t(this.props.buttonName);
  }

  getLabelName() {
    return (this.props.label || this.props.name);
  }

  getFilePathField() {
    let filePathField = this.props.filePathField;
    if (!filePathField) {
      filePathField = `${this.props.id}_file_name`;
    }

    return filePathField;
  }

  setFilePathValue() {
    const filePathNode = ReactDOM.findDOMNode(this.refs.filePath);
    const filePathField = this.getFilePathField();

    if (!!filePathField) {
      const filePath = this.props.data[filePathField];
      if (!!filePath) {
        filePathNode.value = filePath;
      }
    }
  }

  filePathWrapperClassName() {
    return this.themedClassName('input.file.filePathWrapper', this.props.filePathWrapperClassName);
  }

  @autobind
  handleChange(event) {
    this._handleChange(event);

    const fileInput = ReactDOM.findDOMNode(this.refs.input);
    const filePathInput = ReactDOM.findDOMNode(this.refs.filePath);

    $(filePathInput).val(fileInput.files[0].name);
  }

  render() {
    return (
      <div className={this.wrapperClassName()}>
        <div className={this.buttonClassName()}>
          <span>{this.getButtonName()}</span>
          <input
            {...this.props}
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
  }
}