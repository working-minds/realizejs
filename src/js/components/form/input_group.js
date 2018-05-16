import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';
import themes from '../../theme';

import { Input } from '../../components';
import { CssClassMixin } from '../../mixins';

@mixin(CssClassMixin)
export default class InputGroup extends Component {
  static propTypes = {
    inputs: PropTypes.object,
    data: PropTypes.object,
    errors: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    resource: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    separator: PropTypes.bool,
    formStyle: PropTypes.string,
    wrapperClassName: PropTypes.string,
    inputWrapperComponent: PropTypes.component,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    onKeyDown: PropTypes.func,
  };

  static defaultProps = {
    inputs: {},
    data: {},
    errors: {},
    formStyle: 'default',
    label: null,
    separator: false,
    disabled: false,
    readOnly: false,
    themeClassKey: 'form.inputGroup',
    wrapperClassName: 'wrapper_input_group',
    inputWrapperComponent: Input,
    children: <span />,
    onKeyDown() {},
  };

  getClassName() {
    let className = this.className();
    if (this.props.label !== null) {
      className += ` ${themes.getCssClass('form.inputGroup.section')}`;
    }

    return className;
  }

  serialize() {
    return Object.keys(this)
      .filter(refKey => refKey.match(/^input_/))
      .reduce((acc, refKey) => Object.assign({}, acc, this[refKey].serialize()), {});
  }

  validate() {
    return Object.keys(this)
      .filter(refKey => refKey.match(/^input_/) && typeof this[refKey].validate === 'function')
      .reduce((acc, refKey) => Object.assign({}, acc, this[refKey].validate()), {});
  }

  renderInputs() {
    const { inputs, disabled, readOnly, formStyle, errors, data, resource } = this.props;
    const InputWrapperComponent = this.props.inputWrapperComponent || Input;

    return Object.keys(inputs).map((inputKey, i) => {
      const inputProps = inputs[inputKey];
      return (
        <InputWrapperComponent
          disabled={disabled}
          readOnly={readOnly}
          formStyle={formStyle}
          id={inputKey}
          errors={errors}
          {...inputProps}
          data={data}
          resource={resource}
          key={`input_${inputKey}_${i}`}
          ref={ref => { this[`input_${inputKey}_${i}`] = ref; }}
        />
      );
    });
  }

  renderLabel() {
    return (
      <h5 className={themes.getCssClass('form.inputGroup.label')}>
        {this.props.label}
      </h5>
    );
  }

  renderDivider() {
    return (
      <div className={themes.getCssClass('form.inputGroup.divider')}>
        <hr />
      </div>
    );
  }

  render() {
    return (
      <div className={this.props.wrapperClassName} onKeyDown={this.props.onKeyDown}>
        <div className={this.getClassName()}>
          {this.props.label ? this.renderLabel() : <span />}
          <div>
            {this.renderInputs()}
          </div>
        </div>
        {this.props.separator ? this.renderDivider() : <span />}
      </div>
    );
  }
}
