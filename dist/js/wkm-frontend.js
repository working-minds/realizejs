/*!
 * WKM Frontend v0.0.0 (http://www.wkm.com.br)
 * Copyright 2015-2015 Pedro Jesus <pjesus@wkm.com.br>
 */
var Button = React.createClass({displayName: "Button",
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      className: ''
    };
  },

  render: function() {
    return (
      React.createElement("button", {className: this.className(), type: this.props.type, onClick: this.props.onClick}, 
        this.props.name, 
        this.renderIcon()
      )
    );
  },

  renderIcon: function() {
    var iconName = this.props.icon;
    if(!iconName) {
      return '';
    }

    return React.createElement("i", {className: "material-icons right"}, iconName);
  },

  className: function() {
    var className = "btn waves-effect waves-light ";
    className += this.props.className;

    return className;
  }
});

var Form = React.createClass({displayName: "Form",
  propTypes: {
    inputs: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      action: '',
      method: 'POST',
      dataType: 'json',
      onSuccess: function(data) {
        return true;
      },
      onError: function(xhr, status, error) {
        return true;
      },
      onSubmit: function(event) {
        return true;
      },
      onReset: function(event) {
        return true;
      }
    };
  },

  render: function() {
    return (
      React.createElement("form", {action: this.props.action, 
        id: this.props.id, 
        onSubmit: this.handleSubmit, 
        onReset: this.handleReset, 
        ref: "form"}, 

        this.renderInputs(), 
        this.props.children
      )
    );
  },

  renderInputs: function() {
    var inputsProps = this.props.inputs;
    var inputComponents = [];

    for(var inputName in inputsProps) {
      if(inputsProps.hasOwnProperty(inputName)) {
        var inputProps = inputsProps[inputName];
        inputComponents.push(React.createElement(Input, React.__spread({},  inputProps, {id: inputName, key: inputName, ref: "input_" + inputName})));
      }
    }

    return inputComponents;
  },

  serialize : function() {
    var form = React.findDOMNode(this.refs.form);
    return $(form).serializeObject();
  },

  handleSubmit: function(event) {
    event.preventDefault();

    if(this.props.onSubmit(event)) {
      var postData = this.serialize();
      this.submit(postData);
    }
  },

  submit: function(postData) {
    $.ajax({
      url: this.props.action,
      method: this.props.method,
      dataType: this.props.dataType,
      data: postData,
      success: function(data) {
        this.props.onSuccess(data);
      }.bind(this),
      error: function(xhr, status, error) {
        this.props.onError(xhr, status, error);
      }.bind(this)
    });
  },

  handleReset: function(event) {
    var refInputs = this.getRefInputs();
    for(var i = 0; i < refInputs.length; i++) {
      var refInput = refInputs[i];
      var inputNode = React.findDOMNode(refInput);

      inputNode.value = "";
      refInput.onChange({currentTarget: inputNode});
    }

    this.props.onReset(event);
  },

  getRefInputs: function() {
    var refInputs = [];
    var refs = this.refs;

    for(var refName in refs) {
      if(refs.hasOwnProperty(refName)) {
        var ref = refs[refName];
        if(refName.match(/^input_/)) {
          refInputs.push(ref);
        }
      }
    }

    return refInputs;
  }

});

var Grid = React.createClass({displayName: "Grid",
  propTypes: {
    url: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filterForm: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsKey: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      dataRowsKey: 'data',
      paginationConfigs: {
        pageParam: 'p'
      },
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      sortData: {}
    };
  },

  getInitialState: function() {
    return {
      dataRows: this.props.data.dataRows,
      count: this.props.data.count,
      page: 1,
      filterData: {},
      sortData: this.props.sortData
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: "grid"}, 
        this.renderFilter(), 

        this.renderPagination(), 
        this.renderTable(), 
        this.renderPagination()
      )
    );
  },

  renderFilter: function() {
    return (
      React.createElement("div", {className: "grid__filter row"}, 
        React.createElement(GridFilter, {
          form: this.props.filterForm, 
          url: this.props.url, 
          onSubmit: this.onFilterSubmit, 
          ref: "gridFilter"})
      )
    );
  },

  renderTable: function() {
    return (
      React.createElement("div", {className: "grid__table row"}, 
        React.createElement(GridTable, {
          columns: this.props.columns, 
          sortConfigs: this.props.sortConfigs, 
          sortData: this.state.sortData, 
          dataRows: this.state.dataRows, 
          onSort: this.onSort, 
          ref: "gridTable"})
      )
    );
  },

  renderPagination: function() {
    return (
      React.createElement("div", {className: "grid__pagination row"}, 
        React.createElement(Pagination, React.__spread({}, 
          this.props.paginationConfigs, 
          {page: this.state.page, 
          count: this.state.count, 
          onPagination: this.onPagination})
        )
      )
    );
  },

  onPagination: function(page) {
    this.state.page = page;
    this.loadData();
  },

  onFilterSubmit: function(event) {
    this.state.filterData = this.refs.gridFilter.serialize();
    this.state.page = 1;
    this.loadData();

    return false;
  },

  onSort: function(sortData) {
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  },

  loadData: function() {
    var postData = this.buildPostData();

    $.ajax({
      url: this.props.url,
      method: 'GET',
      dataType: 'json',
      data: postData,
      success: function(data) {
        this.dataLoaded(data);
      }.bind(this),
      error: function(xhr, status, error) {
        console.log('Grid Load error:' + error);
      }.bind(this)
    });
  },

  dataLoaded: function(data) {
    this.setState({
      dataRows: data[this.props.dataRowsKey],
      count: data.count
    });
  },

  buildPostData: function() {
    var postData = $.extend({}, this.state.filterData);
    postData[this.props.paginationConfigs.pageParam] = this.state.page;
    if(!$.isEmptyObject(this.state.sortData)) {
      $.extend(postData, this.buildSortPostData());
    }

    return postData;
  },

  buildSortPostData: function() {
    var sortParam = this.props.sortConfigs.param;
    var sortPostData = {};
    sortPostData[sortParam] = this.parseSortPostDataValue();

    return sortPostData;
  },

  parseSortPostDataValue: function() {
    var sortValueFormat = this.props.sortConfigs.valueFormat;
    var field = this.state.sortData.field;
    var direction = this.state.sortData.direction;

    return sortValueFormat.replace(/%\{field}/, field).replace(/%\{direction}/, direction);
  }

});

var GridFilter = React.createClass({displayName: "GridFilter",
  propTypes: {
    form: React.PropTypes.object,
    url: React.PropTypes.string,
    method: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    clearButton: React.PropTypes.object,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      form: {

      },
      method: "GET",
      submitButton: {
        name: 'Filtrar',
        icon: 'search'
      },
      clearButton: {
        name: 'Limpar',
        className: 'filter__button--clear grey lighten-4'
      },
      onSuccess: function(data) {
        return true;
      },
      onError: function(xhr, status, error) {
        return true;
      },
      onSubmit: function(event) {
        return true;
      }
    };
  },

  render: function() {
    return(
      React.createElement(Form, React.__spread({},  this.props.form, 
        {action: this.props.url, 
        method: this.props.method, 
        onSuccess: this.props.onSuccess, 
        onError: this.props.onError, 
        onSubmit: this.props.onSubmit, 
        ref: "form"}), 

        this.props.children, 

        React.createElement("div", {className: "filter__button-group col s12 m12 l12 right-align"}, 
          React.createElement(Button, React.__spread({},  this.props.clearButton, {onClick: this.resetFilter})), 
          React.createElement(Button, React.__spread({},  this.props.submitButton, {type: "submit"}))
        )
      )
    );
  },

  serialize: function() {
    return this.refs.form.serialize();
  },

  resetFilter: function(event) {
    var formNode = React.findDOMNode(this.refs.form);
    formNode.reset();
  }

});

var GridTable = React.createClass({displayName: "GridTable",
  propTypes: {
    columns: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      columns: {},
      sortConfigs: {},
      sortData: {},
      dataRows: [],
      onSort: function(sortData) {
        return true;
      }
    };
  },

  render: function() {
    return(
      React.createElement("table", {className: "striped responsive-table"}, 
        React.createElement("thead", null, 
          this.renderTableHeaders()
        ), 
        React.createElement("tbody", null, 
          this.renderTableRows()
        )
      )
    );
  },

  renderTableHeaders: function() {
    var columns = this.props.columns;
    var headerComponents = [];

    for(var columnName in columns) {
      if(columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        headerComponents.push(
          React.createElement(GridTableHeader, React.__spread({},  columnProps,  this.props.sortConfigs, 
            {name: columnName, 
            key: columnName, 
            sortDirection: this.sortDirectionForColumn(columnName), 
            ref: "header_" + columnName, 
            onSort: this.props.onSort})
          )
        );
      }
    }

    return (
      React.createElement("tr", null, 
        headerComponents
      )
    );
  },

  sortDirectionForColumn: function(columnName) {
    var sortData = this.props.sortData;
    if(!!sortData.field && sortData.field == columnName) {
      return sortData.direction;
    }

    return null;
  },

  renderTableRows: function() {
    var rowComponents = [];
    var dataRows = this.props.dataRows;

    for(var i = 0; i < dataRows.length; i++) {
      var dataRow = dataRows[i];
      rowComponents.push(React.createElement(GridTableRow, {columns: this.props.columns, data: dataRow, key: "table_row_" + i}));
    }

    return rowComponents;
  }
});

var GridTableCell = React.createClass({displayName: "GridTableCell",
  validFormats: ['text', 'currency', 'number', 'boolean', 'datetime'],

  propTypes: {
    name: React.PropTypes.string,
    data: React.PropTypes.object,
    value: React.PropTypes.func,
    format: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      format: 'text'
    };
  },

  render: function() {
    return React.createElement("td", {className: this.cssClass()}, this.renderValue());
  },

  cssClass: function() {
    return "column--" + this.props.format;
  },

  renderValue: function() {
    var format = this.props.format;
    var customValue = this.props.value;

    if(!!customValue) {
      return customValue(this.props.data);
    } else if($.inArray(format, this.validFormats) >= 0) {
      return this[format + "Value"]();
    } else {
      return this.textValue();
    }
  },

  textValue: function() {
    return this.props.data[this.props.name];
  },

  numberValue: function() {
    var value = parseFloat(this.props.data[this.props.name]);
    return numeral(value).format('0,0.[000]');
  },

  currencyValue: function() {
    var value = parseFloat(this.props.data[this.props.name]);
    return numeral(value).format('$ 0,0.00');
  },

  booleanValue: function() {
    var value = this.props.data[this.props.name];
    return value ? "Sim" : "Não";
  },

  datetimeValue: function() {
    var value = moment(this.props.data[this.props.name]);
    return value.format("DD/MM/YYYY HH:mm");
  }
});

var GridTableHeader = React.createClass({displayName: "GridTableHeader",
  propTypes: {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    sortable: React.PropTypes.bool,
    sortDirection: React.PropTypes.string,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      sortable: true,
      sortDirection: null,
      onSort: function(sortData) {
        return true;
      }
    };
  },

  render: function() {
    return (
      React.createElement("th", {className: "table-header"}, 
        React.createElement("span", {onClick: this.sortColumn, className: this.className()}, 
          this.props.label || this.props.name
        )
      )
    );
  },

  className: function() {
    var className = "table-header__name";
    if(this.props.sortable) {
      className += " sortable";

      var sortDirection = this.props.sortDirection;
      if(sortDirection !== null) {
        className += " " + sortDirection;
      }
    }

    return className;
  },

  sortColumn: function() {
    if(!this.props.sortable) {
      return null;
    }

    var sortData = this.buildSortData();
    this.props.onSort(sortData);
  },

  buildSortData: function() {
    var sortField = this.props.name;
    var sortDirection = this.getSortDirection();

    return {
      field: sortField,
      direction: sortDirection
    };
  },

  getSortDirection: function() {
    var currentSortDirection = this.props.sortDirection;
    if(currentSortDirection === null || currentSortDirection == 'desc') {
      return 'asc';
    } else if(currentSortDirection == 'asc') {
      return 'desc';
    }
  }

});

var GridTableRow = React.createClass({displayName: "GridTableRow",
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object
  },

  render: function() {
    return (
      React.createElement("tr", null, 
        this.renderCells()
      )
    );
  },

  renderCells: function() {
    var columns = this.props.columns;
    var cellComponents = [];

    for(var columnName in columns) {
      if(columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        cellComponents.push(React.createElement(GridTableCell, React.__spread({},  columnProps, {name: columnName, data: this.props.data, key: columnName})));
      }
    }

    return cellComponents;
  }
});

var Input = React.createClass({displayName: "Input",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    component: React.PropTypes.string,
    value: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      component: 'text',
      value: null
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  componentWillMount: function() {
    if(!this.props.name) {
      this.props.name = this.props.id;
    }
  },

  render: function() {
    return (
      React.createElement("div", {className: "input-field col l3 m4 s12"}, 
        this.renderComponentInput(), 
        React.createElement("label", {htmlFor: this.props.id}, this.labelValue())
      )
    );
  },

  renderComponentInput: function() {
    var componentMapping = {
      text: React.createElement(InputText, React.__spread({},  this.props, {value: this.state.value, onChange: this.onChange})),
      checkbox: React.createElement(InputCheckbox, React.__spread({},  this.props, {value: this.state.value, onChange: this.onChange})),
      select: React.createElement(InputSelect, React.__spread({},  this.props, {value: this.state.value, onChange: this.onChange}))
    };

    return componentMapping[this.props.component];
  },

  labelValue: function() {
    var label = this.props.label;
    if(!label) {
      label = this.props.name;
    }

    return label;
  },

  onChange: function(event) {
    target = event.currentTarget;
    var value = target.value;

    this.setState({
      value: value
    });
  }
});

var InputCheckbox = React.createClass({displayName: "InputCheckbox",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false
    };
  },

  componentDidMount: function() {
    React.findDOMNode(this.refs.checkbox).indeterminate = true;
  },

  render: function() {
    return (
      React.createElement("input", {
        id: this.props.id, 
        name: this.props.name, 
        onChange: this.props.onChange, 
        type: "checkbox", className: "validate", ref: "checkbox"}
      )
    );
  }
});

var InputSelect = React.createClass({displayName: "InputSelect",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    options: React.PropTypes.array,
    optionsUrl: React.PropTypes.string,
    dependsOn: React.PropTypes.object,
    includeBlank: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      includeBlank: true,
      disabled: false,
      dependsOn: null,
      options: []
    };
  },

  getInitialState: function() {
    return {
      options: this.props.options,
      disabled: this.props.disabled
    };
  },

  componentWillMount: function() {
    if(!!this.props.dependsOn) {
      this.state.disabled = true;
    }
  },

  componentDidMount: function() {
    this.applyMaterialize();

    if(this.props.optionsUrl) {
      if(!!this.props.dependsOn) {
        this.listenDependableChanges();
      } else {
        this.loadOptions();
      }
    }
  },

  componentDidUpdate: function(previousProps, previousState) {
    var state = this.state;
    if(state.options != previousState.options) {
      this.applyMaterialize();
    }
  },

  render: function() {
    return (
      React.createElement("select", {
        id: this.props.id, 
        name: this.props.name, 
        value: this.props.value, 
        onChange: this.props.onChange, 
        disabled: this.state.disabled, 
        ref: "select"}, 
        this.renderOptions()
      )
    );
  },

  handleChange: function(event) {
    var selectElement = React.findDOMNode(this.refs.select);
    var $selectElement = $(selectElement);

    $selectElement.trigger('dependable_changed', [selectElement.value]);
    this.props.onChange(event);
  },

  renderOptions: function() {
    var selectOptions = [];
    var options = this.state.options;

    if(this.props.includeBlank) {
      selectOptions.push(React.createElement(InputSelectOption, {name: "Selecione", value: "", key: "empty_option"}));
    }

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      selectOptions.push(React.createElement(InputSelectOption, React.__spread({},  optionProps, {key: optionProps.name})));
    }

    return selectOptions;
  },

  loadOptions: function(params) {
    $.ajax({
      url: this.props.optionsUrl,
      method: 'GET',
      dataType: 'json',
      data: params,
      success: this.loadOptionsCallback,
      error: function(xhr, status, error) {
        console.log('InputSelect Load error:' + error);
      }.bind(this)
    });
  },

  loadOptionsCallback: function(data) {
    var nameField = 'name';
    var valueField = 'id';

    var options = [];
    for(var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var option = {
        name: String(dataItem[nameField]),
        value: String(dataItem[valueField])
      };

      options.push(option);
    }

    this.setState({
      options: options,
      disabled: (!!this.props.dependsOn && options.length <= 0)
    });
  },

  listenDependableChanges: function() {
    var dependsOnObj = this.props.dependsOn;
    var dependableId = dependsOnObj.dependableId;
    var paramName = dependsOnObj.paramName || dependableId;
    var dependable = document.getElementById(dependableId);

    $(dependable).on('dependable_changed', function(event, dependableValue) {
      if(!dependableValue) {
        this.emptyAndDisable();
        return false;
      }

      var loadParams = {};
      loadParams[paramName] = dependableValue;
      this.loadOptions(loadParams);
    }.bind(this));
  },

  emptyAndDisable: function() {
    this.setState({
      options: [],
      disabled: true
    });
  },

  // Funcoes especificas para o Materialize

  applyMaterialize: function() {
    var selectElement = React.findDOMNode(this.refs.select);

    $(selectElement).material_select(this.handleChangeMaterialize.bind(this, selectElement));
    this.handleChangeMaterialize(selectElement);
  },

  handleChangeMaterialize: function(selectElement) {
    var $selectElement = $(selectElement);
    var fakeEvent = { currentTarget: selectElement };

    //Implementação que resolve o seguinte bug do Materialize: https://github.com/Dogfalo/materialize/issues/1570
    $selectElement.parent().parent().find('> .caret').remove();

    $selectElement.trigger('dependable_changed', [selectElement.value]);
    this.props.onChange(fakeEvent);
  }
});

var InputSelectOption = React.createClass({displayName: "InputSelectOption",
  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.string
  },

  render: function() {
    return React.createElement("option", {value: this.props.value}, this.props.name);
  }
});

var InputText = React.createClass({displayName: "InputText",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false
    };
  },

  render: function() {
    return (
      React.createElement("input", {
        placeholder: this.props.placeholder, 
        id: this.props.id, 
        name: this.props.name, 
        value: this.props.value, 
        onChange: this.props.onChange, 
        disabled: this.props.disabled, 
        type: "text", className: "validate"}
      )
    );
  }
});

var Pagination = React.createClass({displayName: "Pagination",
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      page: 1,
      perPage: 20,
      window: 4
    };
  },

  render: function() {
    return (
      React.createElement("ul", {className: "pagination"}, 
        this.renderPreviousButton(), 
        this.renderPageButtons(), 
        this.renderNextButton()
      )
    );
  },

  renderPreviousButton: function() {
    var liClass = "waves-effect";
    if(this.props.page <= 1) {
      liClass= "disabled";
    }

    return (
      React.createElement("li", {className: liClass, onClick: this.navigateToPrevious}, 
        React.createElement("a", {href: "#!"}, 
          React.createElement("i", {className: "material-icons"}, "chevron_left")
        )
      )
    );
  },

  renderNextButton: function() {
    var liClass = "waves-effect";
    if(this.props.page >= this.lastPage()) {
      liClass= "disabled";
    }

    return (
      React.createElement("li", {className: liClass, onClick: this.navigateToNext}, 
        React.createElement("a", {href: "#!"}, 
          React.createElement("i", {className: "material-icons"}, "chevron_right")
        )
      )
    );
  },

  renderPageButtons: function() {
    var window = this.props.window;
    var firstWindowPage = Math.max(1, this.props.page - window);
    var lastWindowPage = Math.min(this.lastPage(), this.props.page + window);

    var pageButtons = [];
    for(var i = firstWindowPage; i <= lastWindowPage; i++) {
      pageButtons.push(this.renderPageButton(i));
    }

    return pageButtons;
  },

  renderPageButton: function(page) {
    var liClass = "waves-effect";
    if(this.props.page == page) {
      liClass = "active";
    }

    return (
      React.createElement("li", {className: liClass, key: "page_" + page, onClick: this.navigateTo.bind(this, page)}, 
        React.createElement("a", {href: "#!"}, page)
      )
    );
  },

  lastPage: function() {
    return Math.ceil(this.props.count / this.props.perPage);
  },

  navigateToPrevious: function() {
    var pageToNavigate = Math.max(1, this.props.page - 1);
    this.navigateTo(pageToNavigate);
  },

  navigateToNext: function() {
    var pageToNavigate = Math.min(this.lastPage(), this.props.page + 1);
    this.navigateTo(pageToNavigate);
  },

  navigateTo: function(page) {
    this.props.onPagination(page);
  }
});
