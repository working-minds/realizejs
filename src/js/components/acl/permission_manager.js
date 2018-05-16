import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { autobind, mixin } from '../../utils/decorators';
import { uuid } from '../../utils';

import {
  Grid,
  PrincipalActionButtons,
} from '../../components';

import { RequestHandlerMixin } from '../../mixins';

@mixin(RequestHandlerMixin)
export default class PermissionManager extends Component {
  static propTypes = {
    principal: PropTypes.object,
    principalType: PropTypes.string,
    resource: PropTypes.object,
    resourceType: PropTypes.string,
    PrincipalGridProps: PropTypes.object,
    permissionManagerInModal: PropTypes.bool,
    principalsBaseUrl: PropTypes.string,
    principalsPermissionsBaseUrl: PropTypes.string,
    impliesPermissionBaseUrl: PropTypes.string,
    permissionsBaseUrl: PropTypes.string,
  };

  static defaultProps = {
    principal: null,
    principalType: '',
    resource: null,
    resourceType: '',
    permissionManagerInModal: false,
    principalsBaseUrl: '/wkm_acl_ui/principals',
    principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions',
    impliesPermissionBaseUrl: '/wkm_acl_ui/implies',
    permissionsBaseUrl: '/wkm_acl_ui/permissions',
    PrincipalGridProps: {
      selectable: false,
      pagination: false,
      columns: {
        name: {
          label: 'Nome',
        },
        principal_type_translated: {
          label: 'Tipo',
        },
      },
      tableClassName: 'table bordered',
      clearThemeTable: true,
      actionButtons: {
        member: [],
        collection: []
      }
    }
  };

  state = {
    principalsPermissions: {},
    selectedPrincipal: this.props.principal,
    principals: []
  };

  getSelectedPrincipal() {
    return !!this.state.selectedPrincipal ? this.state.selectedPrincipal : this.props.principal;
  }

  componentDidMount() {
    this.loadPrincipals();
    this.loadPrincipalsPermissions();
  }

  componentWillReceiveProps() {
    this.loadPrincipals();
  }

  addPermissionChecked(permissions) {
    const principalsPermissions = this.state.principalsPermissions;
    const selectedPrincipal = this.getSelectedPrincipal();

    for (let i = 0; i < principalsPermissions.length; i++) {
      if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
        principalsPermissions[i].permissions.push(permissions);
        principalsPermissions[i].changed = true;
      }
    }

    if (principalsPermissions.length === 0) {
      principalsPermissions.push({
        principal_id: selectedPrincipal.id,
        principal_type: this.props.principalType,
        permissions: [permissions],
        changed: true
      });
    }

    this.setState({
      principalsPermissions
    });
  }

  switchPrincipalPermissions(principalPermission) {
    const principalsPermissions = this.state.principalsPermissions;
    const selectedPrincipal = this.getSelectedPrincipal();

    for (let i = 0; i < principalsPermissions.length; i++) {
      if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
        principalsPermissions.splice(i, 1);
      }
    }

    principalsPermissions.push(principalPermission);
    return principalsPermissions;
  }

  createPrincipalsPermissions(principals) {
    const principalsPermissions = this.state.principalsPermissions;

    for (let i = 0; i < principals.length; i++) {
      if (!this.alreadyExistPrincipalPermissions(principals[i])) {
        principalsPermissions.push({
          principal_id: principals[i].principal_id,
          principal_type: principals[i].principal_type,
          permissions: [],
        });
      }
    }

    this.setState({
      principalsPermissions,
    });
  }

  alreadyExistPrincipalPermissions(principal) {
    const principalsPermissions = this.state.principalsPermissions;
    let belongs = false;

    for (let i = 0; i < principalsPermissions.length; i++) {
      if (principalsPermissions[i].principal_id === principal.id) {
        belongs = true;
        break;
      }
    }

    return belongs;
  }

  loadPrincipals() {
    $.ajax({
      url: this.props.principalsBaseUrl,
      dataType: 'json',
      async: false,
      data: {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType,
      },
      success: (data) => {
        this.setState({
          principals: data.principals,
          selectedPrincipal: this.getSelectedPrincipal() || data.principals[0]
        });
      }
    });
  }

  loadPrincipalsPermissions() {
    $.ajax({
      url: this.props.principalsPermissionsBaseUrl,
      dataType: 'json',
      async: false,
      data: {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType,
      },
      success: (data) => {
        this.setState({
          principalsPermissions: data.principals,
        });
      },
    });
  }

  principalPermission() {
    const principalsPermissions = this.state.principalsPermissions;
    const selectedPrincipal = this.getSelectedPrincipal();

    let principalPermissions = null;
    for (let i = 0; i < principalsPermissions.length; i++) {
      if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
        principalPermissions = principalsPermissions[i];
      }
    }

    return principalPermissions;
  }

  rowCssClass(data) {
    const selectedPrincipal = this.state.selectedPrincipal;

    if (!!data && !!selectedPrincipal) {
      if (data.id === selectedPrincipal.id) {
        return 'row-selected';
      }
    }

    return undefined;
  }

  dataGridPrincipals() {
    return {
      dataRows: this.state.principals,
      count: 10,
    };
  }

  @autobind
  handleSelectPrincipal(event, data) {
    this.setState({
      selectedPrincipal: data
    });
  }

  @autobind
  handleRemovePrincipal() {
    this.props.handleRemovePrincipal(this.state.selectedPrincipal);
  }

  @autobind
  handleOpenPrincipalModal() {
    $('#add-principals-modal').openModal();
    $(window).resize();
  }

  @autobind
  handleRemovePermissionChecked(permission) {
    const principalPermission = this.principalPermission();
    const permissions = principalPermission.permissions;

    for (let i = 0; i < permissions.length; i++) {
      if (permissions[i].permission === permission) {
        permissions.splice(i, 1);
      }
    }

    principalPermission.permissions = permissions;
    principalPermission.changed = true;
    const principalsPermissions = this.switchPrincipalPermissions(principalPermission);

    this.setState({
      principalsPermissions
    });
  }

  @autobind
  handleAddPermissionChecked(permission) {
    const selectedPrincipal = this.getSelectedPrincipal();
    const principalId = selectedPrincipal.id;

    $.ajax({
      url: this.props.impliesPermissionBaseUrl,
      method: 'GET',
      dataType: 'json',
      data: {
        principal_id: principalId,
        principal_type: this.props.principalType,
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType,
        permission,
      },
      success: (data) => {
        this.addPermissionChecked(data.permissions);
      }
    });
  }

  renderPrincipalsGrid() {
    const component = [];
    const principal = this.props.principal;

    if (!principal) {
      component.push(<h5>Usuários/Grupo:</h5>);
      component.push(
        <div>
          <div className="principal-grid">
            <Grid
              ref={ref => { this.grid = ref; }}
              {...this.props.PrincipalGridProps}
              key={Math.random()}
              onClickRow={this.handleSelectPrincipal}
              tableRowCssClass={this.rowCssClass}
              data={this.dataGridPrincipals()}
              url={this.props.principalsBaseUrl}
            />
          </div>
          {this.renderActionButtons()}
        </div>
      );
    }

    return component;
  }

  renderActionButtons() {
    const component = [];

    component.push(
      <PrincipalActionButtons
        handleRemovePrincipal={this.handleRemovePrincipal}
        handleOpenPrincipalModal={this.handleOpenPrincipalModal}
        modalContainerId="principals-modal"
      />
    );

    return component;
  }

  renderEditPermission() {
    const component = [];
    const selectedPrincipal = this.getSelectedPrincipal();
    let principalType = !!this.state.selectedPrincipal ?
      selectedPrincipal.principal_type :
      this.props.principalType;

    if (!!selectedPrincipal) {
      if (!selectedPrincipal.principal_type)
        principalType = this.props.principalType;

      component.push(<h5>Permissões de {selectedPrincipal.name}:</h5>);
      component.push(
        <EditPermissions
          principal={selectedPrincipal}
          principalType={principalType}
          principalPermission={this.principalPermission()}
          resource={this.props.resource}
          resourceType={this.props.resourceType}
          handleRemovePermissionChecked={this.handleRemovePermissionChecked}
          handleAddPermissionChecked={this.handleAddPermissionChecked}
          afterCreateEntry={this.forceUpdate}
        />
      );
    }

    return component;
  }

  renderAddPrincipalsModal() {
    if (!this.props.permissionManagerInModal) {
      return [
        <IndexPrincipal handleAddPrincipal={this.handleAddPrincipal} />,
      ];
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderPrincipalsGrid()}
        {this.renderEditPermission()}
        {this.renderAddPrincipalsModal()}
      </div>
    );
  }
}
