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
      actionButtons: null,
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
    var actionButtons = this.props.actionButtons || {};

    if(!actionButtons.member) {
      actionButtons.member = this.getDefaultMemberActionButtons();
    }

    if(!actionButtons.collection) {
      actionButtons.collection = this.getDefaultCollectionActionButtons();
    }

    return actionButtons;
  },

  getMemberActionButtons: function() {
    if($.isPlainObject(this.props.actionButtons) && !!this.props.actionButtons.member) {
      return this.props.actionButtons.member;
    } else {
      return this.getDefaultMemberActionButtons();
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

  getCollectionActionButtons: function() {
    if($.isPlainObject(this.props.actionButtons) && !!this.props.actionButtons.collection) {
      return this.props.actionButtons.collection;
    } else {
      return this.getDefaultCollectionActionButtons();
    }
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