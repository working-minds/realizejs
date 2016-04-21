var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');

window.AclModalsWrapper = React.createClass({
  mixins: [RequestHandlerMixin],

  PropTypes: {
    principal: React.PropTypes.object,
    principalType: React.PropTypes.string,
    resource: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    urlProps: React.PropTypes.object,
    title: React.PropTypes.string,
    reloadPageAfterSubmit: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      principal: null,
      principalType: '',
      resource: null,
      resourceType: '',
      title: null,
      urlProps: {
        principalsBaseUrl: '/wkm_acl_ui/principals',
        potentialPrincipalsBaseUrl: '/wkm_acl_ui/principals/potential_principals',
        principalsTypeBaseUrl: '/wkm_acl_ui/principals/types',
        updatePermissionsBaseUrl: '/wkm_acl_ui/bulk_permissions',
        principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions',
        reloadPageAfterSubmit: false
      }
    }
  },

  render: function() {
    return (
      <div>
        <div>
          {this.renderPermissionManagerModal()}
          {this.renderAddPrincipalsModal()}
        </div>
      </div>
    )
  },

  renderPermissionManagerModal: function() {
    var component = [];
    component.push(<PermissionManagerModal
      ref='permissionManagerModal'
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
      />);

    return component;
  },

  renderAddPrincipalsModal: function() {
    var component = [];
    if (!this.props.principal) {
      component.push(<AddPrincipalsModal
        potentialPrincipalsBaseUrl={this.props.urlProps.potentialPrincipalsBaseUrl}
        principalsTypeBaseUrl={this.props.urlProps.principalsTypeBaseUrl}
        handleAddPrincipal={this.handleAddPrincipal}
        resource={this.props.resource}
        resourceType={this.props.resourceType}
        />);
    }

    return component;
  },

  handleAddPrincipal: function(selectedDatas) {
    var url = this.props.urlProps.principalsBaseUrl;
    var data = { principals: selectedDatas, resource_id: this.props.resource.id, resource_type: this.props.resourceType };
    this.performRequest(url, data, 'POST');
    $('#add-principals-modal').closeModal();
    this.refs.permissionManagerModal.loadPrincipalsPermissions(selectedDatas);
  },

  handleRemovePrincipal: function(selectedPrincipal) {
    if (confirm("Você tem certeza que deseja retirar as permissões desse usuário/grupo?")) {
      var url = this.props.urlProps.principalsBaseUrl;
      var data = {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType,
        principal_id: selectedPrincipal.id,
        principal_type: selectedPrincipal.principal_type
      };

      this.performRequest(url, data, 'DELETE');
    }
  },

  onSuccess: function() {
    this.forceUpdate();
  }

});