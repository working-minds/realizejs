var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.InputAutocompleteResult = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    options: React.PropTypes.array,
    selectedOptions: React.PropTypes.array,
    active: React.PropTypes.number,
    searchValue: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    onKeyDown: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onClear: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.result',
      options: [],
      selectedOptions: []
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderSearchInput()}
        {this.renderClearButton()}
        {this.renderResult()}
        {this.renderActionButtons()}
      </div>
    );
  },

  renderSearchInput: function() {
    return (
      <div className="input-autocomplete__search">
        <Icon type="search" className="prefix" />
        <InputText
          onKeyDown={this.props.onKeyDown}
          value={this.props.searchValue}
          onChange={this.props.onChange}
          autoComplete="off"
        />
      </div>
    );
  },

  renderClearButton: function() {
    return (
      <a href="#!"
         className="input-autocomplete__clear-button"
         onClick={this.props.onClear}>

        {Realize.i18n.t("inputs.autocomplete.clear")}
      </a>
    );
  },

  renderResult: function() {
    var options = this.props.options;
    if(options.length > 0) {
      return this.renderList();
    } else {
      return this.renderEmptyMessage();
    }
  },

  renderList: function() {
    return (
      <InputAutocompleteList
        id={this.props.id}
        selectedOptions={this.props.selectedOptions}
        options={this.props.options}
        active={this.props.active}
        onSelect={this.props.onSelect}
        onOptionMouseEnter={this.props.onOptionMouseEnter}
        ref="list"
      />
    );
  },

  renderEmptyMessage: function() {
    return (
      <div className="input-autocomplete__empty-message">
        {Realize.i18n.t("inputs.autocomplete.emptyResult")}
      </div>
    );
  },

  renderActionButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(this.renderActionButton(actionButtonProps, i));
    }

    return (
      <div className="input-autocomplete__action-buttons">
        {actionButtons}
      </div>
    );
  },

  renderActionButton: function(actionButtonProps, i) {
    var buttonComponent = (actionButtonProps.component || 'Button');
    var buttonProps = React.__spread({}, actionButtonProps, {
      themeClassKey: 'input.autocomplete.actionButton',
      element: "a",
      key: ("action_" + i)
    });

    return React.createElement(eval(buttonComponent), buttonProps);
  }
});