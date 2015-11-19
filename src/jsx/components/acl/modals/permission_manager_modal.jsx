var PermissionManagerModal = React.createClass({
  mixins: [RequestHandlerMixin],

  PropTypes: {
    permissionManagerInModal: React.PropTypes.bool,
    principal: React.PropTypes.object,
    principalType: React.PropTypes.string,
    resource: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    className: React.PropTypes.string,
    modalId: React.PropTypes.string,
    updatePermissionsBaseUrl: React.PropTypes.string,
    principalsBaseUrl: React.PropTypes.string,
    principalsPermissionsBaseUrl: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      permissionManagerInModal: true,
      principal: null,
      principalType: '',
      resource: null,
      resourceType: '',
      className: 'permission-manager-modal',
      modalId: 'permission-manager-modal',
      updatePermissionsBaseUrl: '/bulk_permissions',
      principalsBaseUrl: '/principals',
      principalsPermissionsBaseUrl: '/principals/principals_permissions'
    }
  },

  render: function() {
    return (
      <Modal id={this.props.modalId} className={this.props.className} headerSize={this.props.headerSize} opened={true} ref="modal">
        <ModalHeader>
          <h5>Gerenciar Permissões - {this.props.resource.name}</h5>
        </ModalHeader>

        <ModalContent>
          <div className='permissions-modal-content'>
            <PermissionManager
              ref='permissionManager'
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
          <div className='modal-footer' style={{'float': 'right'}}>
            <CloseModalButton modalId={this.props.modalId} />
            <UpdatePermissionsButton handleUpdatePermissions={this.handleUpdatePermissions} />
          </div>
        </ModalFooter>
      </Modal>
    )
  },

  loadPrincipalsPermissions: function(selectedDatas) {
    this.refs.permissionManager.createPrincipalsPermissions(selectedDatas)
  },

  getPostData: function() {
    var principalPermissions = this.refs.permissionManager.state.principalsPermissions;
    var postData = [];

    for (var i = 0; i < principalPermissions.length; i++) {
      if (!!principalPermissions[i].changed) {
        var permissionsByPrincipal = principalPermissions[i].permissions;
        var permissions = permissionsByPrincipal.map(function(a) {return a.permission;});
        var implies = permissionsByPrincipal.map(function(a) {return a.implies;});
        implies = [].concat.apply([], implies);
        permissions = _.difference(permissions, implies);

        postData.push({
          principal_id: principalPermissions[i].principal_id,
          principal_type: principalPermissions[i].principal_type,
          permissions: permissions
        })
      }
    }

    return { resource_id: this.props.resource.id, resource_type: this.props.resourceType, permissions_by_principal: postData };
  },

  handleUpdatePermissions: function(event) {
    var url = this.props.updatePermissionsBaseUrl;
    var postData = this.getPostData();
    var method = 'PUT';
    this.performRequest(url, postData, method)
  },

  onSuccess: function() {
    $('#'+this.props.modalId).closeModal();
    window.location.reload();
  }

});