import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import { autobind, mixin } from '../../../utils/decorators';

import {
  InputAutocompleteSelect,
  InputAutocompleteResult,
  InputAutocompleteValues,
} from '../../../components/input/autocomplete';
import InputBase from '../input_base';
import {
  CssClassMixin,
  SelectComponentMixin,
  InputSelectActionsListenerMixin,
} from '../../../mixins';

@mixin(
  CssClassMixin,
  SelectComponentMixin,
  InputSelectActionsListenerMixin
)
export default class InputAutocomplete extends InputBase {
  static propTypes = {
    maxOptions: PropTypes.number,
    maxOptionsParam: PropTypes.string,
    searchParam: PropTypes.string,
    actionButtons: PropTypes.array,
    onSearchValueChange: PropTypes.func,
    clientSideSearch: PropTypes.bool,
  };

  static defaultProps = {
    maxOptions: 99,
    maxOptionsParam: 'limit',
    searchParam: 'query',
    themeClassKey: 'input.autocomplete',
    actionButtons: [],
    clientSideSearch: false,
  };

  state = {
    ...this.state,
    active: 0,
    searchValue: '',
    value: this.ensureIsArray(this.props.value),
  };

  componentWillMount() {
    this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
  }

  componentDidMount() {
    const valuesSelect = ReactDOM.findDOMNode(this.select);
    const $form = $(valuesSelect.form);
    $form.on('reset', this.clearSelection);
  }

  componentWillUnmount() {
    const valuesSelect = ReactDOM.findDOMNode(this.select);
    const $form = $(valuesSelect.form);
    $form.off('reset', this.clearSelection);
  }

  getResultComponent() {
    return this.result;
  }

  hideResult() {
    $(document).off('click', this.handleDocumentClick);
    const $resultNode = $(ReactDOM.findDOMNode(this.getResultComponent()));
    const $searchInput = $resultNode.find('input[type=text]');
    $resultNode.hide();
    $searchInput.val('');

    this.state.loadParams[this.props.searchParam] = '';
    this.setState({
      active: 0,
    });
  }

  @autobind
  showResult(event) {
    if (this.props.disabled || this.props.readOnly) {
      const selectInput = event.currentTarget;
      selectInput.blur();

      return;
    }

    $(document).on('click', this.handleDocumentClick);
    const $resultNode = $(ReactDOM.findDOMNode(this.getResultComponent()));
    const searchInput = $resultNode.find('input[type=text]')[0];

    $resultNode.show();
    searchInput.focus();
  }

  @autobind
  searchOptions(event, searchValue) {
    this.props.clientSideSearch
      ? this.executeClientSideOptionsSearch(searchValue)
      : this.executeServerSideOptionsSearch(searchValue);

    if (typeof this.props.onSearchValueChange === 'function') {
      this.props.onSearchValueChange(searchValue);
    }
  }

  executeClientSideOptionsSearch(searchValue) {
    this.setState({ searchValue });
  }

  executeServerSideOptionsSearch(searchValue) {
    this.state.searchValue = searchValue;
    this.state.loadParams[this.props.searchParam] = searchValue;
    this.loadOptions();
  }

  moveActiveUp() {
    this.setState({
      active: Math.max(0, this.state.active - 1),
    });
  }

  moveActiveDown() {
    const $resultNode = $(ReactDOM.findDOMNode(this.getResultComponent()));
    const resultListCount = $resultNode.find('li').length;

    this.setState({
      active: Math.min(resultListCount - 1, this.state.active + 1),
    });
  }

  selectOption() {
    const resultRef = this.getResultComponent();
    const resultListRef = resultRef.list;
    if (!resultListRef) {
      return;
    }

    const activeOptionRef = resultListRef[`option_${this.state.active}`];

    this.handleSelect(null, {
      name: activeOptionRef.props.name,
      value: activeOptionRef.props.value,
      showOnTop: false,
    });
  }

  getResultOptions() {
    return this.state.options.filter((option) =>
      !this.props.clientSideSearch ||
      (!!option.name && !!option.name.match(new RegExp(this.state.searchValue, 'i')))
    );
  }

  @autobind
  clearSelection() {
    this.setState({
      value: [],
    }, this.triggerDependableChanged);

    if (!this.props.multiple) {
      this.hideResult();
    }

    if (!!this.props.onSelect) {
      this.props.onSelect(this.props.id, [], []);
    }
  }

  @autobind
  handleDocumentClick(event) {
    const $resultNode = $(ReactDOM.findDOMNode(this.getResultComponent()));
    const $containerNode = $(ReactDOM.findDOMNode(this.container));
    const searchInput = $resultNode.find('input[type=text]')[0];

    if ($containerNode.find(event.target).length === 0) {
      this.hideResult();
    } else {
      searchInput.focus();
    }
  }

  @autobind
  handleSearchNavigation(event) {
    if (!!this.props.onKeyDown) {
      this.props.onKeyDown(event);
      return;
    }
    const keyCode = event.keyCode;

    if (keyCode === 38) {
      this.moveActiveUp();
    } else if (keyCode === 40) {
      this.moveActiveDown();
    } else if (keyCode === 13) {
      event.preventDefault();
      this.selectOption();
    } else if (keyCode === 27 || keyCode === 9) {
      this.hideResult();
    }
  }

  @autobind
  handleOptionMouseEnter(position) {
    this.setState({
      active: position,
    });
  }

  @autobind
  handleSelect(event, option) {
    const optionIndex = this.state.value.indexOf(option.value);

    if (optionIndex < 0) {
      if (!this.props.multiple) {
        this.state.value = [];
      }

      this.state.value.push(option.value);
    } else {
      this.state.value.splice(optionIndex, 1);
    }

    this.forceUpdate();
    this.triggerDependableChanged();

    if (!this.props.multiple) {
      this.hideResult();
    }

    if (!!this.props.onSelect) {
      this.props.onSelect(this.props.id, this.state.value, this.state.loadData);
    }

    this.props.onChange(event, this.state.value, this);
  }

  render() {
    return (
      <div className={this.className()} ref={ref => { this.container = ref; }}>
        <InputAutocompleteSelect
          {...this.propsWithoutCSS()}
          disabled={this.isDisabled()}
          selectedOptions={this.selectedOptions()}
          onFocus={this.showResult}
        />

        <InputAutocompleteResult
          id={this.props.id}
          selectedOptions={this.selectedOptions()}
          options={this.getResultOptions()}
          active={this.state.active}
          searchValue={this.state.searchValue}
          actionButtons={this.props.actionButtons}
          onKeyDown={this.handleSearchNavigation}
          onChange={this.searchOptions}
          onSelect={this.handleSelect}
          onClear={this.clearSelection}
          onOptionMouseEnter={this.handleOptionMouseEnter}
          ref={ref => { this.result = ref; }}
        />

        <InputAutocompleteValues
          id={this.props.id}
          name={this.props.name}
          multiple={this.props.multiple}
          selectedOptions={this.selectedOptions()}
          ref={ref => { this.select = ref; }}
        />
      </div>
    );
  }
}
