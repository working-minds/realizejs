var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');

window.PermissionManager = React.createClass({
  mixins: [RequestHandlerMixin,UtilsMixin],

  ////// SPECIFICATIONS //////

  PropTypes: {
    principal: React.PropTypes.object,
    principalType: React.PropTypes.string,
    resource: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    PrincipalGridProps: React.PropTypes.object,
    permissionManagerInModal: React.PropTypes.bool,
    principalsBaseUrl: React.PropTypes.string,
    principalsPermissionsBaseUrl: React.PropTypes.string,
    impliesPermissionBaseUrl: React.PropTypes.string,
    permissionsBaseUrl: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
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
            label: 'Nome'
          },
          principal_type_translated: {
            label: 'Tipo'
          }
        },
        tableClassName: 'table bordered',
        clearThemeTable: true,
        actionButtons: {
          member: [],
          collection: []
        }
      }
    }
  },

  getInitialState: function() {
    return {
      principalsPermissions: {},
      selectedPrincipal: this.props.principal,
      principals: []
    }
  },

  //// LIFECYCLES ////
  getSelectedPrincipal: function(){
    return !!this.state.selectedPrincipal ? this.state.selectedPrincipal : this.props.principal;
  },

  componentDidMount: function() {
    this.loadPrincipals();
    this.loadPrincipalsPermissions();
  },

  componentWillReceiveProps: function() {
    this.loadPrincipals();
  },

  ////// RENDER //////

  render: function() {
    return (
      <div>
        {this.renderPrincipalsGrid()}
        {this.renderEditPermission()}
        {this.renderAddPrincipalsModal()}
      </div>
    )
  },

  renderPrincipalsGrid: function() {
    var component = [];
    var principal = this.props.principal;

    if(!principal) {
      component.push(<h5>Usuários/Grupo:</h5>);
      component.push(
        <div>
          <div className='principal-grid'>
            <Grid ref='grid'
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
  },

  renderActionButtons: function() {
    var component = [];

    component.push(<PrincipalActionButtons
      handleRemovePrincipal={this.handleRemovePrincipal}
      handleOpenPrincipalModal={this.handleOpenPrincipalModal}
      modalContainerId='principals-modal'
      />);

    return component;
  },

  renderEditPermission: function() {
    var component = [];
    var selectedPrincipal = this.getSelectedPrincipal();
    var principal_type = !!this.state.selectedPrincipal ? selectedPrincipal.principal_type : this.props.principalType;

    if(!!selectedPrincipal) {
      if (!selectedPrincipal.principal_type)
        principal_type = this.props.principalType;

      component.push(<h5>Permissões de {selectedPrincipal.name}:</h5>);
      component.push(
        <EditPermissions
          principal={selectedPrincipal}
          principalType={principal_type}
          principalPermission={this.principalPermission()}
          resource={this.props.resource}
          resourceType={this.props.resourceType}
          handleRemovePermissionChecked={this.handleRemovePermissionChecked}
          handleAddPermissionChecked={this.handleAddPermissionChecked}
          afterCreateEntry={this.forceUpdate}
          />)
    }

    return component;
  },

  renderAddPrincipalsModal: function() {
    var permissionManagerInModal = this.props.permissionManagerInModal;
    if (!permissionManagerInModal) {
      var component = [];
      component.push(<IndexPrincipal handleAddPrincipal={this.handleAddPrincipal} />);

      return component;
    }
  },

  ////// CHECK/UNCHECK PERMISSIONS METHODS //////

  handleRemovePermissionChecked: function(permission) {
    var principalPermission = this.principalPermission();
    var permissions = principalPermission.permissions;

    for(var i = 0; i < permissions.length; i++) {
      if(permissions[i].permission === permission) {
        permissions.splice(i, 1);
      }
    }

    principalPermission['permissions'] = permissions;
    principalPermission.changed = true;
    var principalsPermissions = this.switchPrincipalPermissions(principalPermission);

    this.setState({
      principalPermissions: principalsPermissions
    });
  },

  handleAddPermissionChecked: function(permission) {
    var selectedPrincipal = this.getSelectedPrincipal();
    var principalId = selectedPrincipal.id;

    $.ajax({
      url: this.props.impliesPermissionBaseUrl,
      method: 'GET',
      dataType: 'json',
      data: {
        principal_id: principalId,
        principal_type: this.props.principalType,
        permission: permission,
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: function (data) {
        this.addPermissionChecked(data.permissions)
      }.bind(this)
    });
  },

  addPermissionChecked: function(permissions) {
    var principalsPermissions = this.state.principalsPermissions;
    var selectedPrincipal = this.getSelectedPrincipal();

    for (var i = 0; i < principalsPermissions.length; i++) {
      if (selectedPrincipal.id == principalsPermissions[i].principal_id) {
        principalsPermissions[i].permissions.push(permissions);
        principalsPermissions[i].changed = true;
      }
    }

    if (principalsPermissions.length == 0) {
      principalsPermissions.push({
        principal_id: selectedPrincipal.id,
        principal_type: this.props.principalType,
        permissions: [permissions],
        changed: true
      })
    }

    this.setState({
      principalPermissions: principalsPermissions
    })
  },

  switchPrincipalPermissions: function(principalPermission) {
    var principalsPermissions = this.state.principalsPermissions;
    var selectedPrincipal = this.getSelectedPrincipal();

    for (var i = 0; i < principalsPermissions.length; i++) {
      if (selectedPrincipal.id == principalsPermissions[i].principal_id) {
        principalsPermissions.splice(i, 1)
      }
    }

    principalsPermissions.push(principalPermission);
    return principalsPermissions;
  },

  ////// PRINCIPALS GRID METHODS //////

  handleSelectPrincipal: function(event, data) {

    this.setState({
      selectedPrincipal: data
    });
  },

  principalPermission: function() {
    var principalsPermissions = this.state.principalsPermissions;
    var principalPermissions = null;
    var selectedPrincipal = this.getSelectedPrincipal();

    for (var i = 0; i < principalsPermissions.length; i++) {
      if (selectedPrincipal.id == principalsPermissions[i].principal_id) {
        principalPermissions = principalsPermissions[i];
      }
    }

    return principalPermissions;
  },

  rowCssClass: function(data) {
    var selectedPrincipal = this.state.selectedPrincipal;
    if (!!data && !!selectedPrincipal) {
      if (data.id == selectedPrincipal.id)
        return 'row-selected'
    }
  },

  dataGridPrincipals: function() {
    return {
      dataRows: this.state.principals,
      count: 10
    }
  },

  handleRemovePrincipal: function() {
    this.props.handleRemovePrincipal(this.state.selectedPrincipal)
  },

  handleOpenPrincipalModal: function() {
    $('#add-principals-modal').openModal();
    $(window).resize();
  },

  createPrincipalsPermissions: function(principals) {
    var principalsPermissions = this.state.principalsPermissions;

    for (var i = 0; i < principals.length; i++) {
      if(!this.alreadyExistPrincipalPermissions(principals[i])){
        principalsPermissions.push({principal_id: principals[i].principal_id, principal_type: principals[i].principal_type, permissions: []})
      }
    }

    this.setState({
      principalsPermissions: principalsPermissions
    })
  },

  alreadyExistPrincipalPermissions: function(principal) {
    var principalsPermissions = this.state.principalsPermissions;
    var belongs = false;

    for(var i = 0; i < principalsPermissions.length; i++) {
      if (principalsPermissions[i].principal_id == principal.id) {
        belongs = true;
        break;
      }
    }

    return belongs;
  },


  ////// LOAD STATES METHODS //////

  loadPrincipals: function() {
    $.ajax({
      url: this.props.principalsBaseUrl,
      dataType: 'json',
      async:false,
      data: {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: function(data) {
        this.setState({ 
          principals: data.principals,
          selectedPrincipal: this.getSelectedPrincipal() || data.principals[0]
        })
      }.bind(this)
    });
  },

  loadPrincipalsPermissions: function() {
    $.ajax({
      url: this.props.principalsPermissionsBaseUrl,
      dataType: 'json',
      async:false,
      data: {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: function(data) {
        this.setState({
          principalsPermissions: data.principals
        })
      }.bind(this)
    });
  }

});