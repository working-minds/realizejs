import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { autobind, mixin } from '../../utils/decorators';
import { uuid } from '../../utils';

import { Input } from '../../components/input';
import { RequestHandlerMixin } from '../../mixins';

@mixin(RequestHandlerMixin)
export default class EditPermissions extends Component {
  static propTypes = {
    principal: PropTypes.object,
    principalType: PropTypes.string,
    resource: PropTypes.object,
    resourceType: PropTypes.string,
    title: PropTypes.string,
    saveOnSelect: PropTypes.bool,
    principalPermissions: PropTypes.object,
    permissionsBaseUrl: PropTypes.permissionsBaseUrl
  };

  static defaultProps = {
    principal: null,
    principalType: '',
    resource: null,
    resourceType: null,
    title: '',
    saveOnSelect: false,
    principalPermissions: null,
    permissionsBaseUrl: '/wkm_acl_ui/permissions',
  };

  state = {
    permissions: [],
    permissionsChecked: this.initialPrincipalPermissions(),
  };

  componentDidMount() {
    this.getPermissions();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      permissionsChecked: nextProps.principalPermission,
    });
  }

  componentDidUpdate() {
    $('.permission-manager-modal').resize();
  }

  initialPrincipalPermissions() {
    return !!this.props.principalPermissions ?
      this.props.principalPermissions :
      [];
  }

  checked(permission) {
    const permissionsChecked = !!this.state.permissionsChecked ?
      this.state.permissionsChecked.permissions :
      [];
    let checked = false;

    if (!!permissionsChecked) {
      for (let i = 0; i < permissionsChecked.length; i++) {
        let permissions = permissionsChecked[i].permission;
        const implies = permissionsChecked[i].implies;

        if (!$.isArray(permissions)) {
          permissions = [permissions];
        }

        if (permissions.indexOf(permission) !== -1 ||
          implies.indexOf(permission) !== -1) {
          checked = true;
        }
      }
    }

    return checked;
  }

  disabled(permission) {
    const permissionsChecked = !!this.state.permissionsChecked ?
      this.state.permissionsChecked.permissions :
      [];
    let disabled = false;

    if (!!permissionsChecked) {
      for (let i = 0; i < permissionsChecked.length; i++) {
        const permissionName = permissionsChecked[i].permission;
        const implies = permissionsChecked[i].implies;
        const inherited = permissionsChecked[i].inherited;
        if ((implies.indexOf(permission) !== -1) ||
          (permissionName === permission && inherited === true)) {
          disabled = true;
        }
      }
    }

    return disabled;
  }

  grantPermission(permission) {
    const url = this.props.permissionsBaseUrl;
    const data = {
      principal_id: this.props.principal.id,
      principal_type: this.props.principalType,
      resource_id: this.props.resource.id,
      resourceType: this.props.resourceType,
      permissions: [permission],
    };

    this.performRequest(url, data, 'POST', 'json');
  }

  revokePermission(permission) {
    const url = `${this.props.permissionsBaseUrl}/${this.props.principal.id}`;
    const data = {
      principal_id: this.props.principal.id,
      principal_type: this.props.principalType,
      resource_id: this.props.resource.id,
      resource_type: this.props.resourceType,
      permissions: [permission]
    };

    this.performRequest(url, data, 'DELETE', 'json');
  }

  getPermissions() {
    let context = this;

    $.ajax({
      url: `${this.props.permissionsBaseUrl}/${this.props.principal.id}`,
      method: 'GET',
      dataType: 'json',
      data: {
        principal_type: this.props.principalType,
        principal_id: this.props.principal.id,
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: (data) => {
        this.setState({
          permissions: data.permissions
        }, () => {
          context.props.afterCreateEntry();
        });
      }
    });
  }

  onSuccess() {
    this.getPermissions();
  }

  addPermissionChecked(permission) {
    this.props.handleAddPermissionChecked(permission);
  }

  removePermissionChecked(permission) {
    this.props.handleRemovePermissionChecked(permission);
  }

  belongsToPermissionsChecked(permission) {
    const permissionsChecked = !!this.state.permissionsChecked ?
      this.state.permissionsChecked.permissions :
      [];
    let belongs = false;

    for (let i = 0; i < permissionsChecked.length; i++) {
      if (permissionsChecked[i].permissions === permission) {
        belongs = true;
      }
    }

    return belongs;
  }

  checkboxId(permission) {
    return `permissions_${permission}_`;
  }

  checkboxName() {
    return 'permissions[]';
  }

  @autobind
  handleChange(permission) {
    return () => {
      const checkbox = ReactDOM.findDOMNode(this[`checkbox_${permission}`]);
      const checked = $($(checkbox).find('input')).is(':checked');
      if (!!this.props.saveOnSelect) {
        if (checked) {
          this.grantPermission(permission);
        } else {
          this.revokePermission(permission);
        }
      } else {
        if (checked) {
          if (!this.belongsToPermissionsChecked(permission)) {
            this.addPermissionChecked(permission);
          }
        } else {
          this.removePermissionChecked(permission);
        }
      }
    };
  }

  renderPermissionGroup() {
    const component = [];
    const permissions = this.state.permissions;

    if (!!permissions) {
      permissions.forEach((permission) => {
        component.push(
          <Input
            key={uuid.v4()}
            component="checkbox"
            ref={ref => { this[`checkbox_${permission}`] = ref; }}
            label={I18n.t(`permissions.${permission}`)}
            value={permission}
            checked={this.checked(permission)}
            disabled={this.disabled(permission)}
            onChange={this.handleChange.bind(this, permission)}
            id={this.checkboxId(permission)}
            name={this.checkboxName()}
            className="col s12"
          />
        );
      });
    }

    return component;
  }

  renderTitle() {
    const component = [];
    if (!!this.props.title) {
      component.push(<h3>{this.props.title}</h3>);
    }

    return component;
  }

  renderHiddenInputs() {
    const component = [];
    component.push(<input key={uuid.v4()} type="hidden" name="_method" value="put" />);
    component.push(<input key={uuid.v4()} type="hidden" name="resource_type" value={this.props.resourceType} />);
    component.push(<input key={uuid.v4()} type="hidden" name="resource_id" value={this.props.resource.id} />);
    component.push(<input key={uuid.v4()} type="hidden" name="principal_type" value={this.props.principalType} />);
    component.push(<input key={uuid.v4()} type="hidden" name="principal_id" value={this.props.principal.id} />);

    return component;
  }

  render() {
    return (
      <div className="row permissions-manager">
        {this.renderTitle()}
        <div className="box-edit-permissions">
          {this.renderHiddenInputs()}
          {this.renderPermissionGroup()}
        </div>
      </div>
    );
  }
}
