var _mergeWith = require('lodash/mergeWith');
var _isArray = require('lodash/isArray');

window.GridActionsMixin = {
  propTypes: {
    actionButtons: React.PropTypes.object,
    rowHref: React.PropTypes.string,
    haveShowAction: React.PropTypes.bool,

    createActionButton: React.PropTypes.object,
    showActionButton: React.PropTypes.object,
    editActionButton: React.PropTypes.object,
    destroyActionButton: React.PropTypes.object
  },

  getDefaultProps: function() {
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

  getRowHref: function() {
    var rowHref = this.props.rowHref;
    var haveShowAction = this.props.haveShowAction;
    if(!haveShowAction || (!!rowHref && typeof rowHref == "string")) {
      return rowHref;
    }

    return this.getRestActionUrl('show');
  },

  getActionButtons: function() {
    return _mergeWith(this.getDefaultActionButtonsObject(), this.props.actionButtons, this.mergeActionButtons);
  },

  mergeActionButtons: function(defaultObject, propsObject) {
    var propsActionButtons = this.props.actionButtons;
    var propsExtend = propsActionButtons.extend;
    var extendActionButtons = (typeof(propsExtend) == "boolean") ? propsExtend : false;

    if(extendActionButtons && _isArray(propsObject) && _isArray(defaultObject)) {
      return propsObject.concat(defaultObject);
    } else {
      return propsObject;
    }
  },

  getDefaultActionButtonsObject: function() {
    return {
      extend: true,
      member: this.getDefaultMemberActionButtons(),
      collection: this.getDefaultCollectionActionButtons()
    }
  },

  getDefaultMemberActionButtons: function() {
    var actions = [
      this.getDefaultEditActionProps(),
      this.getDefaultDestroyActionProps()
    ];

    if(this.props.haveShowAction) {
      actions.unshift(this.getDefaultShowActionProps());
    }

    return actions;
  },

  getDefaultCollectionActionButtons: function() {
    return [this.getDefaultCreateActionProps()];
  },

  getDefaultCreateActionProps: function() {
    return $.extend({}, {
      name: 'actions.new',
      context: 'none',
      href: this.getRestActionUrl('add')
    }, this.props.createActionButton);
  },

  getDefaultShowActionProps: function() {
    return $.extend({}, {
      icon: 'search',
      href: this.getRestActionUrl('show')
    }, this.props.showActionButton);
  },

  getDefaultEditActionProps: function() {
    return $.extend({}, {
      icon: 'edit',
      href: this.getRestActionUrl('edit')
    }, this.props.editActionButton);
  },

  getDefaultDestroyActionProps: function() {
    return $.extend({}, {
      icon: 'destroy',
      method: this.getRestActionMethod('destroy'),
      actionUrl: this.getRestActionUrl('destroy'),
      confirmsWith: this.props.destroyConfirm
    }, this.props.destroyActionButton);
  }
};

module.exports = GridActionsMixin;