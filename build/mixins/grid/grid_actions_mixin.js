'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _mergeWith = require('lodash/mergeWith');

var _mergeWith2 = _interopRequireDefault(_mergeWith);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    actionButtons: _prop_types2.default.object,
    rowHref: _prop_types2.default.string,
    haveShowAction: _prop_types2.default.bool,

    createActionButton: _prop_types2.default.object,
    showActionButton: _prop_types2.default.object,
    editActionButton: _prop_types2.default.object,
    destroyActionButton: _prop_types2.default.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      actionButtons: {},
      rowHref: null,
      haveShowAction: false,
      createActionButton: {},
      showActionButton: {},
      editActionButton: {},
      destroyActionButton: {}
    };
  },
  getRowHref: function getRowHref() {
    var rowHref = this.props.rowHref;
    var haveShowAction = this.props.haveShowAction;
    if (!haveShowAction || !!rowHref && typeof rowHref == "string") {
      return rowHref;
    }

    return this.getRestActionUrl('show');
  },


  getActionButtons: function getActionButtons() {
    return (0, _mergeWith2.default)(this.getDefaultActionButtonsObject(), this.props.actionButtons, this.mergeActionButtons.bind(this));
  },

  mergeActionButtons: function mergeActionButtons(defaultObject, propsObject) {
    var propsActionButtons = this.props.actionButtons;
    var propsExtend = propsActionButtons.extend;
    var extendActionButtons = typeof propsExtend == "boolean" ? propsExtend : false;

    if (extendActionButtons && (0, _isArray2.default)(propsObject) && (0, _isArray2.default)(defaultObject)) {
      return propsObject.concat(defaultObject);
    } else {
      return propsObject;
    }
  },
  getDefaultActionButtonsObject: function getDefaultActionButtonsObject() {
    return {
      extend: true,
      member: this.getDefaultMemberActionButtons(),
      collection: this.getDefaultCollectionActionButtons()
    };
  },
  getDefaultMemberActionButtons: function getDefaultMemberActionButtons() {
    var actions = [this.getDefaultEditActionProps(), this.getDefaultDestroyActionProps()];

    if (this.props.haveShowAction) {
      actions.unshift(this.getDefaultShowActionProps());
    }

    return actions;
  },
  getDefaultCollectionActionButtons: function getDefaultCollectionActionButtons() {
    return [this.getDefaultCreateActionProps()];
  },
  getDefaultCreateActionProps: function getDefaultCreateActionProps() {
    return _jquery2.default.extend({}, {
      name: 'actions.new',
      context: 'none',
      href: this.getRestActionUrl('add')
    }, this.props.createActionButton);
  },
  getDefaultShowActionProps: function getDefaultShowActionProps() {
    return _jquery2.default.extend({}, {
      icon: 'search',
      href: this.getRestActionUrl('show')
    }, this.props.showActionButton);
  },
  getDefaultEditActionProps: function getDefaultEditActionProps() {
    return _jquery2.default.extend({}, {
      icon: 'edit',
      href: this.getRestActionUrl('edit')
    }, this.props.editActionButton);
  },
  getDefaultDestroyActionProps: function getDefaultDestroyActionProps() {
    return _jquery2.default.extend({}, {
      icon: 'destroy',
      method: this.getRestActionMethod('destroy'),
      actionUrl: this.getRestActionUrl('destroy'),
      confirmsWith: this.props.destroyConfirm
    }, this.props.destroyActionButton);
  }
};