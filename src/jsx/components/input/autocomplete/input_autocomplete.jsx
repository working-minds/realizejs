var InputAutocomplete = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin
  ],

  propTypes: {
    maxOptions: React.PropTypes.number,
    maxOptionsParam: React.PropTypes.string,
    searchParam: React.PropTypes.string,
    multiple: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      maxOptions: 99,
      maxOptionsParam: 'limit',
      searchParam: 'query',
      themeClassKey: 'input.autocomplete',
      multiple: false
    };
  },

  getInitialState: function() {
    return {
      selectedOptions: [],
      active: 0
    };
  },

  componentWillMount: function() {
    this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
  },

  componentDidMount: function() {
    var valuesField = React.findDOMNode(this.refs.valuesField);
    var $form = $(valuesField.form);
    $form.on('reset', function(){
      this.setState({
        selectedOptions: []
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div className={this.className()} ref="container">
        <InputAutocompleteSelect
          {...this.propsWithoutCSS()}
          disabled={this.state.disabled}
          selectedOptions={this.state.selectedOptions}
          onFocus={this.showResult}
        />

        <InputAutocompleteResult
          id={this.props.id}
          selectedOptions={this.state.selectedOptions}
          options={this.state.options}
          active={this.state.active}
          onKeyDown={this.handleSearchNavigation}
          onKeyUp={this.searchOptions}
          onSelect={this.handleSelect}
          onClear={this.clearSelection}
          onOptionMouseEnter={this.handleOptionMouseEnter}
          ref="result"
        />

        <InputAutocompleteValues
          id={this.props.id}
          name={this.props.name}
          multiple={this.props.multiple}
          selectedOptions={this.state.selectedOptions}
          ref="valuesField"
        />
      </div>
    );
  },

  handleDocumentClick: function(event) {
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var $containerNode = $(React.findDOMNode(this.refs.container));
    var searchInput = $resultNode.find('input[type=text]')[0];

    if($containerNode.find(event.target).length === 0) {
      this.hideResult();
    } else {
      searchInput.focus();
    }
  },

  hideResult: function() {
    $(document).off('click', this.handleDocumentClick);
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var $searchInput = $resultNode.find('input[type=text]');
    $resultNode.hide();
    $searchInput.val('');

    this.state.loadParams[this.props.searchParam] = '';
    this.setState({
      active: 0,
      selectedOptions: $.map(this.state.selectedOptions, function(option) {
        option.showOnTop = true;
        return option;
      })
    });
    this.loadOptions();
  },

  showResult: function(event) {
    if(this.state.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var searchInput = $resultNode.find('input[type=text]')[0];

    $resultNode.show();
    searchInput.focus();
  },

  searchOptions: function(event) {
    var $searchInput = $(event.currentTarget);

    this.state.loadParams[this.props.searchParam] = $searchInput.val();
    this.loadOptions();
  },

  handleSearchNavigation: function(event) {
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
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var resultListCount = $resultNode.find('li').length;

    this.setState({
      active: Math.min(resultListCount - 1, this.state.active + 1)
    });
  },

  selectOption: function() {
    var resultRef = this.refs.result;
    var resultListRef = resultRef.refs.list;
    var activeOptionRef = resultListRef.refs["option_" + this.state.active];

    this.handleSelect({
      name: activeOptionRef.props.name,
      value: activeOptionRef.props.value,
      showOnTop: false
    });
  },

  clearSelection: function() {
    this.setState({
      selectedOptions: []
    });
  },

  handleOptionMouseEnter: function(position) {
    this.setState({
      active: position
    });
  },

  handleSelect: function(option) {
    if(this.props.multiple) {
      this.handleMultipleSelect(option);
    } else {
      this.handleSingleSelect(option);
    }

    this.triggerDependableChanged();
  },

  handleMultipleSelect: function(option) {
    var optionIndex = this.selectedOptionIndex(option);

    if(optionIndex < 0) {
      this.state.selectedOptions.push(option);
    } else {
      this.state.selectedOptions.splice(optionIndex, 1);
    }

    this.forceUpdate();
  },

  handleSingleSelect: function(option) {
    var optionIndex = this.selectedOptionIndex(option);
    var newSelectedOptions = [];

    if(optionIndex < 0) {
      newSelectedOptions.push(option);
    }

    this.state.selectedOptions = newSelectedOptions;
    this.forceUpdate();
  },

  selectedOptionIndex: function(option) {
    var optionValues = $.map(this.state.selectedOptions, function(option) {
      return option.value;
    });

    return optionValues.indexOf(option.value);
  },

  triggerDependableChanged: function() {
    var $valuesElement = $(React.findDOMNode(this.refs.valuesField));
    var optionValues = $.map(this.state.selectedOptions, function(option) {
      return option.value;
    });

    if(optionValues.length == 1) {
      optionValues = optionValues[0];
    }

    $valuesElement.trigger('dependable_changed', [optionValues]);
  }

});
