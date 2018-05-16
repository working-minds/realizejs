import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import { autobind, mixin } from '../../../utils/decorators';
import { difference } from 'lodash';

import { Modal, ModalHeader, ModalContent, ModalFooter } from '../../../components/modal';
import CloseModalButton from './close_modal_button';
import PermissionManager from '../permission_manager';
import UpdatePermissionsButton from '../update_permission_button';

import { RequestHandlerMixin } from '../../../mixins';

@mixin(RequestHandlerMixin)
export default class PermissionManagerModal extends Component {
  static propTypes = {
    permissionManagerInModal: PropTypes.bool,
    principal: PropTypes.object,
    principalType: PropTypes.string,
    resource: PropTypes.object,
    resourceType: PropTypes.string,
    className: PropTypes.string,
    modalId: PropTypes.string,
    updatePermissionsBaseUrl: PropTypes.string,
    principalsBaseUrl: PropTypes.string,
    principalsPermissionsBaseUrl: PropTypes.string,
    title: PropTypes.string,
    reloadPageAfterSubmit: PropTypes.bool,
    headerSize: PropTypes.string,
    handleRemovePrincipal: PropTypes.func,
  };

  static defaultProps = {
    permissionManagerInModal: true,
    principal: null,
    principalType: '',
    resource: null,
    resourceType: '',
    title: null,
    className: 'permission-manager-modal',
    modalId: 'permission-manager-modal',
    updatePermissionsBaseUrl: '/wkm_acl_ui/bulk_permissions',
    principalsBaseUrl: '/wkm_acl_ui/principals',
    principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions',
    reloadPageAfterSubmit: false,
  };

  @autobind
  onSuccess() {
    $(`#${this.props.modalId}`).closeModal();
    if (this.props.reloadPageAfterSubmit) {
      window.location.reload();
    }
  }

  getPostData() {
    const principalPermissions = this.permissionManager.state.principalsPermissions;
    const postData = [];

    for (let i = 0; i < principalPermissions.length; i++) {
      if (!!principalPermissions[i].changed) {
        const permissionsByPrincipal = principalPermissions[i].permissions;
        let permissions = permissionsByPrincipal.map((a) => a.permission);
        let implies = permissionsByPrincipal.map((a) => a.implies);

        implies = [].concat.apply([], implies);
        permissions = difference(permissions, implies);

        postData.push({
          principal_id: principalPermissions[i].principal_id,
          principal_type: principalPermissions[i].principal_type,
          permissions,
        });
      }
    }

    return {
      resource_id: this.props.resource.id,
      resource_type: this.props.resourceType,
      permissions_by_principal: postData,
    };
  }

  loadPrincipalsPermissions(selectedDatas) {
    this.permissionManager.createPrincipalsPermissions(selectedDatas);
  }

  @autobind
  handleUpdatePermissions() {
    const url = this.props.updatePermissionsBaseUrl;
    const postData = this.getPostData();
    const method = 'PUT';
    this.performRequest(url, postData, method);
  }

  renderTitle() {
    const component = [];
    const title = !!this.props.title ?
      this.props.title :
      this.props.resource.name;

    component.push(
      <h5>Gerenciar Permissões - {title}</h5>
    );

    return component;
  }

  render() {
    return (
      <Modal
        id={this.props.modalId}
        className={this.props.className}
        headerSize={this.props.headerSize}
        opened
        ref={ref => { this.modal = ref; }}
      >
        <ModalHeader>
          <h5>Gerenciar Permissões - {this.props.resource.name}</h5>
        </ModalHeader>

        <ModalContent>
          <div className="permissions-modal-content">
            <PermissionManager
              ref={ref => { this.permissionManager = ref; }}
              handleRemovePrincipal={this.props.handleRemovePrincipal}
              permissionManagerInModal={this.props.permissionManagerInModal}
              principal={this.props.principal}
              principalType={this.props.principalType}
              resource={this.props.resource}
              resourceType={this.props.resourceType}
              principalsBaseUrl={this.props.principalsBaseUrl}
              principalsPermissionsBaseUrl={this.props.principalsPermissionsBaseUrl}
            />
          </div>
        </ModalContent>

        <ModalFooter>
          <div className="modal-footer" style={{ float: 'right' }}>
            <CloseModalButton modalId={this.props.modalId} />
            <UpdatePermissionsButton handleUpdatePermissions={this.handleUpdatePermissions} />
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}
