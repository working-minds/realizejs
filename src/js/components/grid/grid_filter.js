import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';
import { i18n } from '../../realize';
import $ from 'jquery';

import { CssClassMixin } from '../../mixins';

import { Form } from '../../components';

@mixin(CssClassMixin)
export default class GridFilter extends Component {
  static propTypes = {
    hidden: PropTypes.bool,
    inputs: PropTypes.object,
    action: PropTypes.string,
    method: PropTypes.string,
    submitButton: PropTypes.object,
    clearButton: PropTypes.object,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
    isLoading: PropTypes.bool,
    collapsible: PropTypes.bool,
  };

  static defaultProps = {
    method: 'GET',
    collapsible: false,
    submitButton: {
      name: 'actions.filter',
      icon: 'search',
    },
    clearButton: {
      name: 'actions.clear',
      type: 'reset',
      buttonStyle: 'cancel',
    },
    onSuccess() {},
    onError() {},
    onSubmit() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      themeClassKey: 'grid.filter.wrapper',
    };
  }

  componentDidUpdate() {
    const collapsible = ReactDOM.findDOMNode(this.collapsible);
    if (!!collapsible) {
      $(collapsible).collapsible();
    }
  }

  renderFilters() {
    return this.props.collapsible
      ? this.renderCollapsibleFilter()
      : this.renderFormFilters();
  }

  renderCollapsibleFilter() {
    const component = [];

    component.push(
      <ul
        className="collapsible"
        data-collapsible="accordion"
        ref={ref => { this.collapsible = ref; }}
        key="collapsible_form"
      >
        <li>
          <div className="collapsible-header">
            <span>{i18n.t('actions.filter')}</span>
            <i className="material-icons">filter_list</i>
          </div>
          <div className="collapsible-body">
            {this.renderFormFilters()}
          </div>
        </li>
      </ul>
    );

    return component;
  }

  renderFormFilters() {
    return (
      <Form
        {...this.props}
        otherButtons={[this.props.clearButton]}
        formStyle="filter"
        ref={ref => { this.form = ref; }}
      />
    );
  }

  render() {
    if (this.props.hidden) return null;

    return (
      <div className={this.className()}>
        {this.renderFilters()}
      </div>
    );
  }

  serialize() {
    return this.form.serialize();
  }
}
