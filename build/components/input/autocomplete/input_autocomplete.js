'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../../utils/decorators');

var _autocomplete = require('../../../components/input/autocomplete');

var _input_base = require('../input_base');

var _input_base2 = _interopRequireDefault(_input_base);

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var InputAutocomplete = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.SelectComponentMixin, _mixins.InputSelectActionsListenerMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_InputBase) {
  _inherits(InputAutocomplete, _InputBase);

  function InputAutocomplete() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputAutocomplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputAutocomplete)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      active: 0,
      searchValue: '',
      value: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputAutocomplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var valuesSelect = _reactDom2.default.findDOMNode(this.refs.select);
      var $form = (0, _jquery2.default)(valuesSelect.form);
      $form.on('reset', this.clearSelection);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var valuesSelect = _reactDom2.default.findDOMNode(this.refs.select);
      var $form = (0, _jquery2.default)(valuesSelect.form);
      $form.off('reset', this.clearSelection);
    }
  }, {
    key: 'getResultComponent',
    value: function getResultComponent() {
      return this.refs.result;
    }
  }, {
    key: 'hideResult',
    value: function hideResult() {
      (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
      var $resultNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.getResultComponent()));
      var $searchInput = $resultNode.find('input[type=text]');
      $resultNode.hide();
      $searchInput.val('');

      this.state.loadParams[this.props.searchParam] = '';
      this.setState({
        active: 0
      });
    }
  }, {
    key: 'showResult',
    value: function showResult(event) {
      if (this.state.disabled || this.props.readOnly) {
        var selectInput = event.currentTarget;
        selectInput.blur();

        return;
      }

      (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
      var $resultNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.getResultComponent()));
      var searchInput = $resultNode.find('input[type=text]')[0];

      $resultNode.show();
      searchInput.focus();
    }
  }, {
    key: 'searchOptions',
    value: function searchOptions(event) {
      var $searchInput = (0, _jquery2.default)(event.currentTarget);
      var searchValue = $searchInput.val();

      this.state.searchValue = searchValue;
      this.state.loadParams[this.props.searchParam] = searchValue;
      this.loadOptions();

      if (typeof this.props.onSearchValueChange === 'function') {
        this.props.onSearchValueChange(searchValue);
      }
    }
  }, {
    key: 'moveActiveUp',
    value: function moveActiveUp() {
      this.setState({
        active: Math.max(0, this.state.active - 1)
      });
    }
  }, {
    key: 'moveActiveDown',
    value: function moveActiveDown() {
      var $resultNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.getResultComponent()));
      var resultListCount = $resultNode.find('li').length;

      this.setState({
        active: Math.min(resultListCount - 1, this.state.active + 1)
      });
    }
  }, {
    key: 'selectOption',
    value: function selectOption() {
      var resultRef = this.getResultComponent();
      var resultListRef = resultRef.refs.list;
      if (!resultListRef) {
        return;
      }

      var activeOptionRef = resultListRef.refs['option_' + this.state.active];

      this.handleSelect(null, {
        name: activeOptionRef.props.name,
        value: activeOptionRef.props.value,
        showOnTop: false
      });
    }
  }, {
    key: 'clearSelection',
    value: function clearSelection() {
      this.setState({
        value: []
      }, this.triggerDependableChanged);

      if (!!this.props.onSelect) {
        this.props.onSelect(this.props.id, [], []);
      }
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(event) {
      var $resultNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.getResultComponent()));
      var $containerNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.container));
      var searchInput = $resultNode.find('input[type=text]')[0];

      if ($containerNode.find(event.target).length === 0) {
        this.hideResult();
      } else {
        searchInput.focus();
      }
    }
  }, {
    key: 'handleSearchNavigation',
    value: function handleSearchNavigation(event) {
      if (!!this.props.onKeyDown) {
        this.props.onKeyDown(event);
        return;
      }
      var keyCode = event.keyCode;

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
  }, {
    key: 'handleOptionMouseEnter',
    value: function handleOptionMouseEnter(position) {
      this.setState({
        active: position
      });
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(event, option) {
      var optionIndex = this.state.value.indexOf(option.value);

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

      if (!!this.props.onSelect) {
        this.props.onSelect(this.props.id, this.state.value, this.state.loadData);
      }

      this.props.onChange(event, this.state.value, this);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className(), ref: 'container' },
        _react2.default.createElement(_autocomplete.InputAutocompleteSelect, _extends({}, this.propsWithoutCSS(), {
          disabled: this.isDisabled(),
          selectedOptions: this.selectedOptions(),
          onFocus: this.showResult
        })),
        _react2.default.createElement(_autocomplete.InputAutocompleteResult, {
          id: this.props.id,
          selectedOptions: this.selectedOptions(),
          options: this.state.options,
          active: this.state.active,
          searchValue: this.state.searchValue,
          actionButtons: this.props.actionButtons,
          onKeyDown: this.handleSearchNavigation,
          onChange: this.searchOptions,
          onSelect: this.handleSelect,
          onClear: this.clearSelection,
          onOptionMouseEnter: this.handleOptionMouseEnter,
          ref: 'result'
        }),
        _react2.default.createElement(_autocomplete.InputAutocompleteValues, {
          id: this.props.id,
          name: this.props.name,
          multiple: this.props.multiple,
          selectedOptions: this.selectedOptions(),
          ref: 'select'
        })
      );
    }
  }]);

  return InputAutocomplete;
}(_input_base2.default), _class3.propTypes = {
  maxOptions: _prop_types2.default.number,
  maxOptionsParam: _prop_types2.default.string,
  searchParam: _prop_types2.default.string,
  actionButtons: _prop_types2.default.array,
  onSearchValueChange: _prop_types2.default.func
}, _class3.defaultProps = {
  maxOptions: 99,
  maxOptionsParam: 'limit',
  searchParam: 'query',
  themeClassKey: 'input.autocomplete',
  actionButtons: []
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleDocumentClick', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleDocumentClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSearchNavigation', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSearchNavigation'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleOptionMouseEnter', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleOptionMouseEnter'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSelect', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelect'), _class2.prototype)), _class2)) || _class);
exports.default = InputAutocomplete;