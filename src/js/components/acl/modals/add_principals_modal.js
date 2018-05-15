import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import { autobind, mixin } from '../../../utils/decorators';

import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  CloseModalButton,
  Button,
  Grid,
} from '../../../components';

import { RequestHandlerMixin } from '../../../mixins';

@mixin(RequestHandlerMixin)
export default class AddPrincipalsModal extends Component {
  static propTypes = {
    resource: PropTypes.object,
    resourceType: PropTypes.string,
    className: PropTypes.string,
    modalId: PropTypes.string,
    potentialPrincipalsBaseUrl: PropTypes.string,
    principalsTypeBaseUrl: PropTypes.string,
  };

  static defaultProps = {
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
        param: 'p',
      },
      columns: {
        name: {
          label: 'Nome',
        },
        principal_type_translated: {
          label: 'Tipo',
        },
      },
      tableClassName: 'table bordered',
      actionButtons: {
        member: [],
        collection: [],
      },
    },
  };

  state = {
    selectedPrincipal: null,
    potentialPrincipals: [],
    principalType: null,
  };

  componentWillMount() {
    $.ajax({
      url: this.props.principalsTypeBaseUrl,
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({
          principalType: data[0].name,
        });
      },
    });
  }

  componentWillReceiveProps() {
    this.grid.backToInitialState();
  }

  getData() {
    return {
      dataRows: this.state.potentialPrincipals,
      count: this.state.potentialPrincipals.length,
    };
  }

  getSelectedDatas() {
    const selectedRowsIds = this.grid.state.selectedRowIds;
    const dataRows = this.grid.state.dataRows;
    const selectedDatas = [];

    selectedRowsIds.forEach((rowId) => {
      dataRows.forEach((data) => {
        if (data.id === rowId) {
          selectedDatas.push({
            principal_id: data.id,
            principal_type: data.principal_type,
          });
        }
      });
    });

    return selectedDatas;
  }

  addPrincipal(selectedDatas) {
    this.props.handleAddPrincipal(selectedDatas);
  }

  filters() {
    return {
      resource: 'q',
      inputs: {
        name_cont: {
          label: 'Nome',
          className: 'col s12 l6 m6',
        },
        principal_type: {
          label: 'Tipo',
          component: 'autocomplete',
          optionsUrl: this.props.principalsTypeBaseUrl,
          searchParam: 'principal_type',
          className: 'col s12 l6 m6',
          scope: 'global',
        },
        resource_id: {
          value: this.props.resource.id,
          component: 'hidden',
          scope: 'global',
        },
        resource_type: {
          value: this.props.resourceType,
          component: 'hidden',
          scope: 'global',
        },
        per_page: {
          value: 10,
          component: 'hidden',
          scope: 'global',
        },
      },
    };
  }

  @autobind
  handleSelectPrincipal(event, data) {
    this.setState({
      selectedPrincipal: data,
    });
  }

  @autobind
  handleAddPrincipal() {
    const selectedDatas = this.getSelectedDatas();
    if (selectedDatas.length === 0) {
      alert('Necessário selecionar alguém para adicionar');
    } else {
      this.addPrincipal(selectedDatas);
    }
  }

  render() {
    return (
      <Modal
        id={this.props.modalId}
        style={{ 'z-index': '9000' }}
        className={this.props.className}
        headerSize={this.props.headerSize}
        ref={ref => { this.addPrincipalsModal = ref; }}
      >
        <ModalHeader>
          <h5>Selecionar Usuário/Grupo</h5>
        </ModalHeader>

        <ModalContent>
          <div className="principal-modal-content">
            <Grid
              ref={ref => { this.grid = ref; }}
              {...this.props.gridProps}
              url={this.props.potentialPrincipalsBaseUrl}
              filter={this.filters()}
              eagerLoad
              onClickRow={this.handleSelectPrincipal}
            />
          </div>
        </ModalContent>

        <ModalFooter>
          <div className="modal-footer" style={{ float: 'right' }}>
            <CloseModalButton modalId={this.props.modalId} />
            <Button
              name="Adicionar"
              element="a"
              onClick={this.handleAddPrincipal}
            />
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}
