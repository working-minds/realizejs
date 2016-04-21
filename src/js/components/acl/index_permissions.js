var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');
var ModalRendererMixin = require('realize/mixins/modal_renderer_mixin.jsx');

window.IndexPermissions = React.createClass({
  mixins: [RequestHandlerMixin, ModalRendererMixin],

  PropTypes: {
    principal: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    gridProps: React.PropTypes.object,
    className: React.PropTypes.string,
    editPermissionBaseUrl: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
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
        tableClassName: 'table striped bordered'
      },
      editPermissionsProps: {
        url: null,
        actionCallback: null
      }
    }
  },

  getInitialState: function() {
    return {
      hasResource: true
    }
  },

  render: function() {
    var hasResource = this.state.hasResource;
    hasResource ? display = 'block' : display = 'none';

    return (
      <div className={this.props.className} style={{'display': display}}>
        <Grid {...this.props.gridProps} ref="grid" columns={this.getColumns()} filter={this.filters()} onLoadSuccess={this.onLoadSuccess} actionButtons={this.getActionButtons()} />
      </div>
    )
  },

  openEditPermission: function(event, dataRowId, data) {
    var permissionEditURL = this.props.editPermissionBaseUrl;
    var data = {
      principal_id: this.props.principal.id,
      principal_type: this.props.principalType,
      resource_type: this.props.resourceType,
      resource_id: data.resource_id
    };

    this.performRequest(permissionEditURL, data);
  },

  onSuccess: function(responseData) {
    this.renderModalHtml(responseData);
  },

  getActionButtons: function() {
    var gridProps = this.props.gridProps;
    if (!!gridProps.actionButtons)
      return gridProps.actionButtons;
    else {
      return {
        member: [
          {
            icon: 'edit',
            onClick: this.openEditPermission
          }
        ],
          collection: []
      }
    }
  },

  getColumns: function() {
    var gridProps = this.props.gridProps;

    if (!!gridProps.columns) {
      return gridProps.columns
    } else {
      var resourceType = this.props.resourceType;
      return this.defaultColumns(resourceType);
    }
  },

  defaultColumns: function(resourceType) {
    return {
      resource_name: {
        label: I18n.t('models.' + resourceType)
      },
      permission: {
        label: 'Permissão',
        component: 'LabelPermission'
      }
    }
  },

  filters: function() {
    return {
      resource: 'q',
      inputs: {
        principal_id: {
          value: this.props.principal.id,
          component: 'hidden',
          scope: 'global'
        },
        principal_type: {
          value: this.props.principalType,
          component: 'hidden',
          scope: 'global'
        },
        resource_type: {
          value: this.props.resourceType,
          component: 'hidden',
          scope: 'global'
        }
      }
    }
  },

  onLoadSuccess: function() {
    var dataRows = this.refs.grid.state.dataRows;
    if (dataRows.length == 0) {
      this.setState({
        hasResource: false
      })
    }
  }

});