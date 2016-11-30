import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';

import { Form } from '../../components';

@mixin(CssClassMixin)
export default class GridFilter extends Component {
  static propTypes = {
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
    collapsible: PropTypes.bool
  };

  static defaultProps = {
    method: "GET",
    collapsible: false,
    submitButton: {
      name: 'actions.filter',
      icon: 'search'
    },
    clearButton: {
      name: 'actions.clear',
      type: 'reset',
      style: 'cancel'
    },
    onSuccess: function(data) {
      return true;
    },
    onError: function(xhr, status, error) {
      return true;
    },
    onSubmit: function(event) {
      return true;
    }
  };

  constructor (props) {
    super(props);
    this.state = {
      themeClassKey: 'grid.filter.wrapper'
    };
  }

  componentDidUpdate (){
    let collapsible = ReactDOM.findDOMNode(this.refs.collapsible);
    if (!!collapsible) {
      $(collapsible).collapsible();
    }
  }

  renderFilters () {
    if(this.props.collapsible)  {
      return this.renderCollapsibleFilter();
    } else {
     return this.renderFormFilters();
    }
  }

  renderCollapsibleFilter () {
    let component = [];

    component.push(
      <ul className='collapsible' data-collapsible='accordion' ref='collapsible' key='collapsible_form'>
        <li>
          <div className='collapsible-header'>
            <span>Filtrar</span>
            <i className='material-icons'>filter_list</i>
          </div>
          <div className='collapsible-body'>
            {this.renderFormFilters()}
          </div>
        </li>
      </ul>
    );

    return component;
  }

  renderFormFilters () {
    return (
      <Form {...this.props} otherButtons={[this.props.clearButton]} style="filter" ref="form" />
    )
  }

  render () {
    return(
      <div className={this.className()}>
        {this.renderFilters()}
      </div>
    );
  }

  serialize () {
    return this.refs.form.serialize();
  }
}
