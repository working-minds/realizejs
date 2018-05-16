import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { autobind, mixin } from '../../utils/decorators';
import { i18n } from '../../realize';

import { Grid } from '../../components';

import {
  RequestHandlerMixin,
  ModalRendererMixin,
} from '../../mixins';

@mixin(
  RequestHandlerMixin,
  ModalRendererMixin,
)
export default class IndexPermissions extends Component {
  static propTypes = {
    principal: PropTypes.object,
    resourceType: PropTypes.string,
    gridProps: PropTypes.object,
    className: PropTypes.string,
    editPermissionBaseUrl: PropTypes.object,
  };

  static defaultProps = {
    principal: null,
    principalType: null,
    resourceType: '',
    className: 'index-permissions',
    editPermissionBaseUrl: '/wkm_acl_ui/permission_managers',
    gridProps: {
      url: '/wkm_acl_ui/permissions',
      selectable: false,
      pagination: false,
      eagerLoad: true,
      tableClassName: 'table striped bordered',
    },
    editPermissionsProps: {
      url: null,
      actionCallback: null,
    },
  };

  state = {
    hasResource: true,
  };

  onSuccess(responseData) {
    this.renderModalHtml(responseData);
  }

  @autobind
  onLoadSuccess() {
    // TODO(rferrari): remove state access via refs
    const dataRows = this.grid.state.dataRows;
    if (dataRows.length === 0) {
      this.setState({
        hasResource: false,
      });
    }
  }

  getActionButtons() {
    const gridProps = this.props.gridProps;

    if (!!gridProps.actionButtons) {
      return gridProps.actionButtons;
    }

    return {
      member: [
        {
          icon: 'edit',
          onClick: this.openEditPermission,
        },
      ],
      collection: [],
    };
  }

  getColumns() {
    const gridProps = this.props.gridProps;

    if (!!gridProps.columns) {
      return gridProps.columns;
    }

    const resourceType = this.props.resourceType;
    return this.defaultColumns(resourceType);
  }

  defaultColumns(resourceType) {
    return {
      resource_name: {
        label: i18n.t(`models.${resourceType}`),
      },
      permission: {
        label: 'Permissão',
        component: 'LabelPermission',
      },
    };
  }

  filters() {
    return {
      resource: 'q',
      inputs: {
        principal_id: {
          value: this.props.principal.id,
          component: 'hidden',
          scope: 'global',
        },
        principal_type: {
          value: this.props.principalType,
          component: 'hidden',
          scope: 'global',
        },
        resource_type: {
          value: this.props.resourceType,
          component: 'hidden',
          scope: 'global',
        },
      },
    };
  }

  render() {
    const hasResource = this.state.hasResource;
    const display = hasResource ? 'block' : 'none';

    return (
      <div className={this.props.className} style={{ display }}>
        <Grid
          {...this.props.gridProps}
          ref={ref => { this.grid = ref; }}
          columns={this.getColumns()}
          filter={this.filters()}
          onLoadSuccess={this.onLoadSuccess}
          actionButtons={this.getActionButtons()}
        />
      </div>
    );
  }
}
