import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import { autobind, mixin } from '../../../utils/decorators';

import PermissionManagerModal from './permission_manager_modal';
import AddPrincipalsModal from './add_principals_modal';

import { RequestHandlerMixin } from '../../../mixins';

@mixin(RequestHandlerMixin)
export default class AclModalsWrapper extends Component {
  static propTypes = {
    principal: PropTypes.object,
    principalType: PropTypes.string,
    resource: PropTypes.object,
    resourceType: PropTypes.string,
    urlProps: PropTypes.object,
    title: PropTypes.string,
    reloadPageAfterSubmit: PropTypes.bool,
  };

  static defaultProps = {
    principal: null,
    principalType: '',
    resource: null,
    resourceType: '',
    title: null,
    reloadPageAfterSubmit: false,
    urlProps: {
      principalsBaseUrl: '/wkm_acl_ui/principals',
      potentialPrincipalsBaseUrl: '/wkm_acl_ui/principals/potential_principals',
      principalsTypeBaseUrl: '/wkm_acl_ui/principals/types',
      updatePermissionsBaseUrl: '/wkm_acl_ui/bulk_permissions',
      principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions',
    },
  };

  onSuccess() {
    this.forceUpdate();
  }

  @autobind
  handleAddPrincipal(selectedDatas) {
    const url = this.props.urlProps.principalsBaseUrl;
    const data = {
      principals: selectedDatas,
      resource_id: this.props.resource.id,
      resource_type: this.props.resourceType,
    };

    this.performRequest(url, data, 'POST');
    $('#add-principals-modal').closeModal();
    this.permissionManagerModal.loadPrincipalsPermissions(selectedDatas);
  }

  @autobind
  handleRemovePrincipal(selectedPrincipal) {
    if (confirm('Você tem certeza que deseja retirar as permissões desse usuário/grupo?')) {
      const url = this.props.urlProps.principalsBaseUrl;
      const data = {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType,
        principal_id: selectedPrincipal.id,
        principal_type: selectedPrincipal.principal_type,
      };

      this.performRequest(url, data, 'DELETE');
    }
  }

  renderPermissionManagerModal() {
    const component = [];
    component.push(
      <PermissionManagerModal
        ref={ref => { this.permissionManagerModal = ref; }}
        title={this.props.title}
        resource={this.props.resource}
        resourceType={this.props.resourceType}
        principal={this.props.principal}
        principalType={this.props.principalType}
        principalsBaseUrl={this.props.urlProps.principalsBaseUrl}
        principalsPermissionsBaseUrl={this.props.urlProps.principalsPermissionsBaseUrl}
        updatePermissionsBaseUrl={this.props.urlProps.updatePermissionsBaseUrl}
        handleRemovePrincipal={this.handleRemovePrincipal}
        reloadPageAfterSubmit={this.props.reloadPageAfterSubmit}
      />
    );

    return component;
  }

  renderAddPrincipalsModal() {
    const component = [];
    if (!this.props.principal) {
      component.push(
        <AddPrincipalsModal
          potentialPrincipalsBaseUrl={this.props.urlProps.potentialPrincipalsBaseUrl}
          principalsTypeBaseUrl={this.props.urlProps.principalsTypeBaseUrl}
          handleAddPrincipal={this.handleAddPrincipal}
          resource={this.props.resource}
          resourceType={this.props.resourceType}
        />
      );
    }

    return component;
  }

  render() {
    return (
      <div>
        <div>
          {this.renderPermissionManagerModal()}
          {this.renderAddPrincipalsModal()}
        </div>
      </div>
    );
  }
}
