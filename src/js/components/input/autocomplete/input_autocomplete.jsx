var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');
var SelectComponentMixin = require('realize/mixins/input/select_component_mixin.jsx');
var InputSelectActionsListenerMixin = require('realize/mixins/input/input_select_actions_listener_mixin.jsx');

window.InputAutocomplete = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin,
    InputSelectActionsListenerMixin
  ],

  propTypes: {
    maxOptions: React.PropTypes.number,
    maxOptionsParam: React.PropTypes.string,
    searchParam: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    clientSideSearch: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      maxOptions: 99,
      maxOptionsParam: 'limit',
      searchParam: 'query',
      themeClassKey: 'input.autocomplete',
      actionButtons: [],
      clientSideSearch: false
    };
  },

  getInitialState: function() {
    return {
      active: 0,
      searchValue: ''
    };
  },

  componentWillMount: function() {
    this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
  },

  componentDidMount: function() {
    var valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.on('reset', this.clearSelection);
  },

  componentWillUnmount: function() {
    var valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.off('reset', this.clearSelection);
  },

  render: function() {
    return (
      <div className={this.className()} ref="container">
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
          ref="result"
        />

        <InputAutocompleteValues
          id={this.props.id}
          name={this.props.name}
          multiple={this.props.multiple}
          selectedOptions={this.selectedOptions()}
          ref="select"
        />
      </div>
    );
  },

  handleDocumentClick: function(event) {
    var $resultNode = $(ReactDOM.findDOMNode(this.refs.result));
    var $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    var searchInput = $resultNode.find('input[type=text]')[0];

    if($containerNode.find(event.target).length === 0) {
      this.hideResult();
    } else {
      searchInput.focus();
    }
  },

  hideResult: function() {
    $(document).off('click', this.handleDocumentClick);
    var $resultNode = $(ReactDOM.findDOMNode(this.refs.result));
    var $searchInput = $resultNode.find('input[type=text]');
    $resultNode.hide();
    $searchInput.val('');

    this.state.loadParams[this.props.searchParam] = '';
    this.setState({
      active: 0
    });
  },

  showResult: function(event) {
    if(this.state.disabled || this.props.readOnly) {
      var selectInput = event.currentTarget;
      selectInput.blur();

      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $resultNode = $(ReactDOM.findDOMNode(this.refs.result));
    var searchInput = $resultNode.find('input[type=text]')[0];

    $resultNode.show();
    searchInput.focus();
  },

  searchOptions: function(event, searchValue) {
    this.props.clientSideSearch
      ? this.executeClientSideOptionsSearch(searchValue)
      : this.executeServerSideOptionsSearch(searchValue);
  },

  executeClientSideOptionsSearch: function(searchValue) {
    this.setState({ searchValue: searchValue });
  },

  executeServerSideOptionsSearch: function(searchValue) {
    this.state.searchValue = searchValue;
    this.state.loadParams[this.props.searchParam] = this.state.searchValue;
    this.loadOptions();
  },

  handleSearchNavigation: function(event) {
    if(!!this.props.onKeyDown){
      this.props.onKeyDown(event);
      return;
    }
    var keyCode = event.keyCode;

    if(keyCode == 38) {
      this.moveActiveUp();
    } else if(keyCode == 40) {
      this.moveActiveDown();
    } else if(keyCode == 13) {
      event.preventDefault();
      this.selectOption();
    } else if(keyCode == 27 || keyCode == 9) {
      this.hideResult();
    }
  },

  moveActiveUp: function() {
    this.setState({
      active: Math.max(0, this.state.active - 1)
    });
  },

  moveActiveDown: function() {
    var $resultNode = $(ReactDOM.findDOMNode(this.refs.result));
    var resultListCount = $resultNode.find('li').length;

    this.setState({
      active: Math.min(resultListCount - 1, this.state.active + 1)
    });
  },

  selectOption: function() {
    var resultRef = this.refs.result;
    var resultListRef = resultRef.refs.list;
    if(!resultListRef)
        return;
        
    var activeOptionRef = resultListRef.refs["option_" + this.state.active];

    this.handleSelect(null, {
      name: activeOptionRef.props.name,
      value: activeOptionRef.props.value,
      showOnTop: false
    });
  },

  clearSelection: function() {
    this.setState({
      value: []
    }, this.triggerDependableChanged);

    if(!this.props.multiple) {
      this.hideResult();
    }

    if(!!this.props.onSelect) {
      this.props.onSelect(this.props.id, [], []);
    }
  },

  handleOptionMouseEnter: function(position) {
    this.setState({
      active: position
    });
  },

  handleSelect: function(event, option) {
    var optionIndex = this.state.value.indexOf(option.value);

    if(optionIndex < 0) {
      if(!this.props.multiple) {
        this.state.value = [];
      }

      this.state.value.push(option.value);
    } else {
      this.state.value.splice(optionIndex, 1);
    }

    this.forceUpdate();
    this.triggerDependableChanged();

    if(!this.props.multiple) {
      this.hideResult();
    }

    if(!!this.props.onSelect) {
      this.props.onSelect(this.props.id, this.state.value, this.state.loadData);
    }

    this.props.onChange(event, this.state.value, this);
  },

  getResultOptions: function() {
    return this.state.options.filter(function(option) {
      return !this.props.clientSideSearch || (!!option.name && !!option.name.match(new RegExp(this.state.searchValue, 'i')));
    }.bind(this));
  }
});
