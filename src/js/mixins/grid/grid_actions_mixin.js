import PropTypes from '../../prop_types';
import { isArray, isBoolean, isString, mergeWith } from 'lodash';

export default {
  propTypes: {
    actionButtons: PropTypes.object,
    rowHref: PropTypes.string,
    haveShowAction: PropTypes.bool,

    createActionButton: PropTypes.object,
    showActionButton: PropTypes.object,
    editActionButton: PropTypes.object,
    destroyActionButton: PropTypes.object,
  },

  getDefaultProps() {
    return {
      actionButtons: {},
      rowHref: null,
      haveShowAction: false,
      createActionButton: {},
      showActionButton: {},
      editActionButton: {},
      destroyActionButton: {},
    };
  },

  getRowHref() {
    const rowHref = this.props.rowHref;
    const isValidRowHref = rowHref && isString(rowHref);

    return (!this.props.haveShowAction || isValidRowHref)
      ? rowHref
      : this.restClient.getRestActionUrl('show');
  },

  getActionButtons() {
    return mergeWith(
      this.getDefaultActionButtonsObject(),
      this.props.actionButtons,
      this.mergeActionButtons.bind(this)
    );
  },

  mergeActionButtons(defaultObject, propsObject) {
    const propsActionButtons = this.props.actionButtons;
    const propsExtend = propsActionButtons.extend;
    const extendActionButtons = isBoolean(propsExtend) && propsExtend;
    const mustConcatActionButtons = extendActionButtons
      && isArray(propsObject)
      && isArray(defaultObject);

    return mustConcatActionButtons
      ? propsObject.concat(defaultObject)
      : propsObject;
  },

  getDefaultActionButtonsObject() {
    return {
      extend: true,
      member: this.getDefaultMemberActionButtons(),
      collection: this.getDefaultCollectionActionButtons(),
    };
  },

  getDefaultMemberActionButtons() {
    const actions = [
      this.getDefaultEditActionProps(),
      this.getDefaultDestroyActionProps(),
    ];

    if (this.props.haveShowAction) {
      actions.unshift(this.getDefaultShowActionProps());
    }

    return actions;
  },

  getDefaultCollectionActionButtons() {
    return [this.getDefaultCreateActionProps()];
  },

  getDefaultCreateActionProps() {
    return {
      name: 'actions.new',
      context: 'none',
      href: this.restClient.getRestActionUrl('add'),
      ...this.props.createActionButton,
    };
  },

  getDefaultShowActionProps() {
    return {
      icon: 'search',
      href: this.restClient.getRestActionUrl('show'),
      ...this.props.showActionButton,
    };
  },

  getDefaultEditActionProps() {
    return {
      icon: 'edit',
      href: this.restClient.getRestActionUrl('edit'),
      ...this.props.editActionButton,
    };
  },

  getDefaultDestroyActionProps() {
    return {
      icon: 'destroy',
      method: this.restClient.getRestActionMethod('destroy'),
      actionUrl: this.restClient.getRestActionUrl('destroy'),
      confirmsWith: this.props.destroyConfirm,
      ...this.props.destroyActionButton,
    };
  },
};
