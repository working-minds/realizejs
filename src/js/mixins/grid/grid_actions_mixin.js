import PropTypes from '../../prop_types';
import mergeWith from 'lodash/mergewith';
import isArray from 'lodash/isArray';
import $ from 'jquery';

export default {
  propTypes: {
    actionButtons: PropTypes.object,
    rowHref: PropTypes.string,
    haveShowAction: PropTypes.bool,

    createActionButton: PropTypes.object,
    showActionButton: PropTypes.object,
    editActionButton: PropTypes.object,
    destroyActionButton: PropTypes.object
  },

  getDefaultProps () {
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

  getRowHref () {
    var rowHref = this.props.rowHref;
    var haveShowAction = this.props.haveShowAction;
    if(!haveShowAction || (!!rowHref && typeof rowHref == "string")) {
      return rowHref;
    }

    return this.getRestActionUrl('show');
  },

  getActionButtons: function() {
    return mergeWith(this.getDefaultActionButtonsObject(), this.props.actionButtons, this.mergeActionButtons);
  },

  mergeActionButtons (defaultObject, propsObject) {
    var propsActionButtons = this.props.actionButtons;
    var propsExtend = propsActionButtons.extend;
    var extendActionButtons = (typeof(propsExtend) == "boolean") ? propsExtend : false;

    if(extendActionButtons && isArray(propsObject) && isArray(defaultObject)) {
      return propsObject.concat(defaultObject);
    } else {
      return propsObject;
    }
  },

  getDefaultActionButtonsObject () {
    return {
      extend: true,
      member: this.getDefaultMemberActionButtons(),
      collection: this.getDefaultCollectionActionButtons()
    }
  },

  getDefaultMemberActionButtons () {
    var actions = [
      this.getDefaultEditActionProps(),
      this.getDefaultDestroyActionProps()
    ];

    if(this.props.haveShowAction) {
      actions.unshift(this.getDefaultShowActionProps());
    }

    return actions;
  },

  getDefaultCollectionActionButtons () {
    return [this.getDefaultCreateActionProps()];
  },

  getDefaultCreateActionProps () {
    return $.extend({}, {
      name: 'actions.new',
      context: 'none',
      href: this.getRestActionUrl('add')
    }, this.props.createActionButton);
  },

  getDefaultShowActionProps () {
    return $.extend({}, {
      icon: 'search',
      href: this.getRestActionUrl('show')
    }, this.props.showActionButton);
  },

  getDefaultEditActionProps () {
    return $.extend({}, {
      icon: 'edit',
      href: this.getRestActionUrl('edit')
    }, this.props.editActionButton);
  },

  getDefaultDestroyActionProps () {
    return $.extend({}, {
      icon: 'destroy',
      method: this.getRestActionMethod('destroy'),
      actionUrl: this.getRestActionUrl('destroy'),
      confirmsWith: this.props.destroyConfirm
    }, this.props.destroyActionButton);
  }
}
