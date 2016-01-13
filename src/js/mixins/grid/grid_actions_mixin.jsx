var GridActionsMixin = {
  propTypes: {
    actionButtons: React.PropTypes.object,
    rowHref: React.PropTypes.string,
    haveShowAction: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      actionButtons: null,
      rowHref: null,
      haveShowAction: false
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
      {
        icon: 'edit',
        href: this.getRestActionUrl('edit')
      },
      {
        icon: 'destroy',
        method: this.getRestActionMethod('destroy'),
        actionUrl: this.getRestActionUrl('destroy'),
        confirmsWith: this.props.destroyConfirm
      }
    ];

    if(this.props.haveShowAction) {
      actions.unshift({
        icon: 'search',
        href: this.getRestActionUrl('show')
      });
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
    return [
      {
        name: 'actions.new',
        context: 'none',
        href: this.getRestActionUrl('add')
      }
    ];
  }
};