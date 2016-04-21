var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');

window.AddPrincipalsModal = React.createClass({
  mixins: [RequestHandlerMixin],

  PropTypes: {
    resource: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    className: React.PropTypes.string,
    modalId: React.PropTypes.string,
    potentialPrincipalsBaseUrl: React.PropTypes.string,
    principalsTypeBaseUrl: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: 'add-principals-modal',
      modalId: 'add-principals-modal',
      potentialPrincipalsBaseUrl: '/wkm_acl_ui/principals/potential_principals',
      principalsTypeBaseUrl: '/wkm_acl_ui/principals/types',
      gridProps: {
        selectable: true,
        paginationOnTop: false,
        paginationConfigs: {
          perPage: 10,
          window: 4,
          param: 'p'
        },
        columns: {
          name: {
            label: 'Nome'
          },
          principal_type_translated: {
            label: 'Tipo'
          }
        },
        tableClassName: 'table bordered',
        actionButtons: {
          member: [],
          collection: []
        }
      }
    }
  },

  getInitialState: function() {
    return {
      selectedPrincipal: null,
      potentialPrincipals: [],
      principalType: null
    }
  },

  componentWillMount: function() {
    $.ajax({
      url: this.props.principalsTypeBaseUrl,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        this.setState({
          principalType: data[0].name
        })
      }.bind(this)
    });
  },

  componentWillReceiveProps: function() {
    this.refs.grid.backToInitialState();
  },

  render: function() {
    return (
      <Modal id={this.props.modalId} style={{'z-index': '9000'}} className={this.props.className} headerSize={this.props.headerSize} ref="add-principals-modal">
        <ModalHeader>
          <h5>Selecionar Usuário/Grupo</h5>
        </ModalHeader>

        <ModalContent >
          <div className='principal-modal-content'>
            <Grid
              ref='grid'
              {...this.props.gridProps}
              url={this.props.potentialPrincipalsBaseUrl}
              filter={this.filters()}
              eagerLoad={true}
              onClickRow={this.handleSelectPrincipal}
              />
          </div>
        </ModalContent>

        <ModalFooter>
          <div className='modal-footer' style={{'float': 'right'}}>
            <CloseModalButton modalId={this.props.modalId} />
            <Button name='Adicionar' element='a' onClick={this.handleAddPrincipal} />
          </div>
        </ModalFooter>
      </Modal>
    )
  },

  filters: function(){
    return {
      resource: 'q',
      inputs: {
        name_cont: {
          label: 'Nome',
          className: 'col s12 l6 m6'
        },
        principal_type: {
          label: 'Tipo',
          component: 'autocomplete',
          optionsUrl: this.props.principalsTypeBaseUrl,
          searchParam: 'principal_type',
          className: 'col s12 l6 m6',
          scope: 'global'
        },
        resource_id: {
          value: this.props.resource.id,
          component: 'hidden',
          scope: 'global'
        },
        resource_type: {
          value: this.props.resourceType,
          component: 'hidden',
          scope: 'global'
        },
        per_page: {
          value: 10,
          component: 'hidden',
          scope: 'global'
        }
      }
    }
  },

  handleSelectPrincipal: function(event, data) {
    this.setState({
      selectedPrincipal: data
    });
  },

  handleAddPrincipal: function() {
    var selectedDatas = this.getSelectedDatas();
    if (selectedDatas.length == 0) {
      alert('Necessário selecionar alguém para adicionar')
    } else {
      this.addPrincipal(selectedDatas)
    }
  },

  getSelectedDatas: function() {
    var selectedRowsIds = this.refs.grid.state.selectedRowIds;
    var dataRows = this.refs.grid.state.dataRows;
    var selectedDatas = [];

    selectedRowsIds.forEach(function(rowId) {
      dataRows.forEach(function(data) {
        if (data.id == rowId) {
          selectedDatas.push({principal_id: data.id, principal_type: data.principal_type})
        }
      })
    });

    return selectedDatas;
  },

  addPrincipal: function(selectedDatas) {
    this.props.handleAddPrincipal(selectedDatas)
  },

  getData: function() {
    return {
      dataRows: this.state.potentialPrincipals,
      count: this.state.potentialPrincipals.length
    }
  }

});