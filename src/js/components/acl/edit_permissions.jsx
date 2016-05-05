var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');

window.EditPermissions = React.createClass({
  mixins: [RequestHandlerMixin,UtilsMixin],

  PropTypes: {
    principal: React.PropTypes.object,
    principalType: React.PropTypes.string,
    resource: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    title: React.PropTypes.string,
    saveOnSelect: React.PropTypes.bool,
    principalPermissions: React.PropTypes.object,
    permissionsBaseUrl: React.PropTypes.permissionsBaseUrl
  },

  getDefaultProps: function() {
    return {
      principal: null,
      principalType: '',
      resource: null,
      resourceType: null,
      title: '',
      saveOnSelect: false,
      principalPermissions: [],
      permissionsBaseUrl: '/wkm_acl_ui/permissions'
    }
  },

  getInitialState: function() {
    return {
      permissions: [],
      permissionsChecked: this.initialPrincipalPermissions()
    }
  },

  componentDidMount: function() {
    this.getPermissions()
  },

  componentDidUpdate: function() {
    $('.permission-manager-modal').resize();
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      permissionsChecked: nextProps.principalPermission
    })
  },

  render: function() {
    return (
      <div className='row permissions-manager'>
        {this.renderTitle()}
        <div className='box-edit-permissions'>
          {this.renderHiddenInputs()}
          {this.renderPermissionGroup()}
        </div>
      </div>
    )
  },

  initialPrincipalPermissions: function() {
    if (!!this.props.principalPermissions) {
      return this.props.principalPermissions
    } else {
      return []
    }
  },

  checked: function(permission) {
    var permissionsChecked = !!this.state.permissionsChecked ?  this.state.permissionsChecked.permissions : [];
    var checked = false;

    if (!!permissionsChecked) {
      for (var i = 0; i < permissionsChecked.length; i++) {
        var permissions = permissionsChecked[i].permission;
        var implies = permissionsChecked[i].implies;

        if (!$.isArray(permissions)) {
          permissions = [permissions]
        }

        if (permissions.indexOf(permission) !== -1 || implies.indexOf(permission) !== -1)
          checked = true;
      }
    }

    return checked;
  },

  disabled: function(permission) {
    var permissionsChecked = !!this.state.permissionsChecked ?  this.state.permissionsChecked.permissions : [];
    var disabled = false;

    if (!!permissionsChecked) {
      for(var i = 0; i < permissionsChecked.length; i++) {
        var permission_name = permissionsChecked[i].permission;
        var implies = permissionsChecked[i].implies;
        var inherited = permissionsChecked[i].inherited;
        if ((implies.indexOf(permission) !== -1) || (permission_name == permission && inherited == true))
          disabled = true;
      }
    }

    return disabled;
  },

  handleChange: function(permission, event) {
    var checkbox = React.findDOMNode(this.refs['checkbox_'+permission]);
    var checked = $($(checkbox).find('input')).is(':checked');
    if (!!this.props.saveOnSelect) {
      if (checked) {
        this.grantPermission(permission)
      } else {
        this.revokePermission(permission)
      }
    } else {
      if (checked){
        if (!this.belongsToPermissionsChecked(permission)) {
          this.addPermissionChecked(permission);
        }
      } else {
        this.removePermissionChecked(permission)
      }
    }
  },

  grantPermission: function(permission) {
    var url = this.props.permissionsBaseUrl;
    var data = { principal_id: this.props.principal.id,
                 principal_type: this.props.principalType,
                 resource_id: this.props.resource.id,
                 resourceType: this.props.resourceType,
                 permissions: [permission]
    };

    this.performRequest(url, data, 'POST', 'json');
  },

  revokePermission: function(permission) {
    var url = this.props.permissionsBaseUrl + "/" + this.props.principal.id;
    var data = { principal_id: this.props.principal.id,
                 principal_type: this.props.principalType,
                 resource_id: this.props.resource.id,
                 resource_type: this.props.resourceType,
                 permissions: [permission]
    };

    this.performRequest(url, data, 'DELETE', 'json');
  },

  getPermissions: function() {
    var context = this;
    $.ajax({
      url: this.props.permissionsBaseUrl + "/" +this.props.principal.id,
      method: 'GET',
      dataType: 'json',
      data: {
        principal_type: this.props.principalType,
        principal_id: this.props.principal.id,
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: function(data) {
        this.setState({
          permissions: data.permissions
        },function(){
          context.props.afterCreateEntry();
        });
      }.bind(this)
    });
  },

  onSuccess: function() {
    this.getPermissions();
  },

  addPermissionChecked: function(permission) {
    this.props.handleAddPermissionChecked(permission);
  },

  removePermissionChecked: function(permission) {
    this.props.handleRemovePermissionChecked(permission);
  },

  belongsToPermissionsChecked: function(permission) {
    var permissionsChecked = !!this.state.permissionsChecked ?  this.state.permissionsChecked.permissions : [];
    var belongs = false;

    for(var i = 0; i < permissionsChecked.length; i++) {
      if(permissionsChecked[i].permissions === permission) {
        belongs = true
      }
    }

    return belongs;
  },

  checkboxId: function(permission) {
    return 'permissions_'+permission+'_'
  },

  checkboxName: function() {
    return 'permissions[]'
  },

  renderPermissionGroup: function() {
    var component = [];
    var permissions = this.state.permissions;
    var resourceId = this.props.resource.id;

    if (!!permissions) {
      permissions.forEach(function (permission) {
        component.push(<Input key={this.generateUUID()}
                              component='checkbox'
                              ref={'checkbox_'+permission}
                              label={I18n.t('permissions.'+permission)}
                              value={permission}
                              checked={this.checked(permission)}
                              disabled={this.disabled(permission)}
                              onChange={this.handleChange.bind(this, permission)}
                              id={this.checkboxId(permission)}
                              name={this.checkboxName()}
                              className='col s12'
          />);

      }.bind(this));
    }

    return component;
  },

  renderTitle: function() {
    var component = [];
    if (!!this.props.title)
      component.push(<h3>{this.props.title}</h3>);

    return component;
  },

  renderHiddenInputs: function() {
    var component = [];
    component.push(<input key={this.generateUUID()} type="hidden" name="_method" value="put" />);
    component.push(<input key={this.generateUUID()} type="hidden" name="resource_type" value={this.props.resourceType} />);
    component.push(<input key={this.generateUUID()} type="hidden" name="resource_id" value={this.props.resource.id} />);
    component.push(<input key={this.generateUUID()} type="hidden" name="principal_type" value={this.props.principalType} />);
    component.push(<input key={this.generateUUID()} type="hidden" name="principal_id" value={this.props.principal.id} />);

    return component;
  }

});