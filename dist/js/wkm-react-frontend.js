/*!
 * WKM Frontend v0.0.0 (http://www.wkm.com.br)
 * Copyright 2015-2015 Pedro Jesus <pjesus@wkm.com.br>
 */
$.extend(FormSerializer.patterns, {
  validate: /^[a-z_][a-z0-9#_\.-]*(?:\[(?:\d*|[a-z0-9#_\.-]+)\])*$/i,
  key: /[a-z0-9#_\.-]+|(?=\[\])/gi,
  named: /^[a-z0-9#_\.-]+$/i
});
var WRF = {};

WRF.config = {
  theme: 'materialize'
};

WRF.themes = {};

WRF.getTheme = function() {
  var defaultTheme = WRF.themes.default;
  var currentTheme = WRF.themes[WRF.config.theme];

  return $.extend({}, defaultTheme, currentTheme);
};

WRF.themeProp = function(key, theme) {
  if(!key) {
    return '';
  }

  if(theme === undefined) {
    theme = this.getTheme();
  }

  var keyArr = key.split('.');
  var prop = theme;

  try {
    while(keyArr.length > 0) {
      prop = prop[keyArr.shift()];
    }
  } catch(err) {
    return '';
  }

  return prop;
};

WRF.themeClass = function(keys) {
  var theme = this.getTheme();
  var keysArr = keys.split(' ');
  var themeClass = "";

  while(keysArr.length > 0) {
    var key = keysArr.shift();
    var classKey = key + '.cssClass';

    themeClass += WRF.themeProp(classKey, theme) + ' ';
  }

  return themeClass.trim();
};

WRF.themes.default = {
  grid: {
    cssClass: 'grid',

    row: {
      cssClass: 'row'
    },

    filter: {
      wrapper: {
        cssClass: 'grid__filter'
      },

      buttonGroup: {
        cssClass: 'filter__button-group'
      },

      clearButton: {
        cssClass: 'filter__button--clear'
      }
    },

    table: {
      cssClass: '',

      wrapper: {
        cssClass: 'grid__table'
      },

      header: {
        cssClass: 'table-header',

        label: {
          cssClass: 'table-header__name'
        }
      },

      cell: {
        cssClass: 'table-cell',

        text: {
          cssClass: 'table-cell--text'
        },

        currency: {
          cssClass: 'table-cell--currency'
        },

        number: {
          cssClass: 'table-cell--number'
        },

        boolean: {
          cssClass: 'table-cell--boolean'
        },

        datetime: {
          cssClass: 'table-cell--datetime'
        }
      }
    },

    pagination: {
      wrapper: {
        cssClass: 'grid__pagination'
      }
    }
  },

  form: {
    cssClass: ''
  },

  button: {
    cssClass: '',

    cancel: {
      cssClass: ''
    }
  }
};
WRF.themes.materialize = {
  grid: {
    cssClass: 'grid',

    row: {
      cssClass: 'row'
    },

    filter: {
      wrapper: {
        cssClass: 'grid__filter'
      },

      buttonGroup: {
        cssClass: 'filter__button-group col s12 m12 l12 right-align'
      },

      clearButton: {
        cssClass: 'filter__button--clear'
      }
    },

    table: {
      cssClass: 'grid__table'
    },

    pagination: {
      cssClass: 'grid__pagination'
    }
  },

  table: {
    cssClass: 'striped responsive-table',

    header: {
      cssClass: 'table-header',

      label: {
        cssClass: 'table-header__name'
      }
    },

    cell: {
      cssClass: 'table-cell',

      text: {
        cssClass: 'table-cell--text'
      },

      currency: {
        cssClass: 'table-cell--currency'
      },

      number: {
        cssClass: 'table-cell--number'
      },

      boolean: {
        cssClass: 'table-cell--boolean'
      },

      datetime: {
        cssClass: 'table-cell--datetime'
      }
    }
  },

  form: {
    cssClass: ''
  },

  button: {
    cssClass: 'btn waves-effect waves-light',

    cancel: {
      cssClass: 'grey lighten-4'
    }
  },

  pagination: {
    cssClass: 'pagination',

    item: {
      cssClass: 'waves-effect',

      disabled: {
        cssClass: 'disabled'
      },

      active: {
        cssClass: 'active'
      }
    }
  },

  icon: {
    cssClass: 'material-icons',
    left: 'chevron_left',
    right: 'chevron_right',
    search: 'search'
  }
};
var CssClassMixin = {
  propTypes: {
    clearTheme: React.PropTypes.bool,
    className: React.PropTypes.string,
    themeClassKey: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      clearTheme: false,
      className: ''
    };
  },

  className: function() {
    var className = '';
    var themeClassKey = this.getThemeClassKey();

    if(!this.props.clearTheme && !!themeClassKey) {
      className += WRF.themeClass(themeClassKey);
    }

    if(!!this.props.className) {
      className += ' ' + this.props.className;
    }

    return className;
  },

  getThemeClassKey: function() {
    var themeClassKey = this.props.themeClassKey;
    if(!themeClassKey && !!this.state) {
      themeClassKey = this.state.themeClassKey;
    }

    return themeClassKey;
  }
};
var InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      onChange: function(event) {
        return true;
      }
    };
  },

  focus: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    if(!!inputNode) {
      inputNode.focus();
    }
  }
};
var Button = React.createClass({displayName: "Button",
  mixins: [CssClassMixin],
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    additionalThemeClassKeys: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      additionalThemeClassKeys: ''
    }
  },

  getInitialState: function() {
    return {
      themeClassKey: 'button ' + this.props.additionalThemeClassKeys
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
    if(!this.props.icon) {
      return '';
    }

    return React.createElement(Icon, {className: "right", type: this.props.icon});
  }
});

var Form = React.createClass({displayName: "Form",
  propTypes: {
    inputs: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    focus: React.PropTypes.bool,
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
      focus: true,
      onSuccess: function(data) {
        return true;
      },
      onError: function(xhr, status, error) {
        return true;
      },
      onSubmit: function(event, postData) {
        return true;
      },
      onReset: function(event) {
        return true;
      }
    };
  },

  componentDidMount: function() {
    var firstInputRef = this.refs.input_0;

    if(!!firstInputRef && this.props.focus) {
      firstInputRef.focus();
    }
  },

  render: function() {
    return (
      React.createElement("form", {action: this.props.action, 
        id: this.props.id, 
        onSubmit: this.handleSubmit, 
        onReset: this.props.onReset, 
        ref: "form"}, 

        this.renderInputs(), 
        this.props.children
      )
    );
  },

  renderInputs: function() {
    var inputsProps = this.props.inputs;
    var inputComponents = [];
    var inputIndex = 0;

    for(var inputName in inputsProps) {
      if(inputsProps.hasOwnProperty(inputName)) {
        var inputProps = inputsProps[inputName];
        inputComponents.push(React.createElement(Input, React.__spread({},  inputProps, {id: inputName, key: "input_" + inputIndex, ref: "input_" + inputIndex})));
        inputIndex++;
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
    var postData = this.serialize();

    if(this.props.onSubmit(event, postData)) {
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
  }

});

var Grid = React.createClass({displayName: "Grid",
  mixins: [CssClassMixin],
  propTypes: {
    url: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filterForm: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      paginationConfigs: {
        param: 'p',
        perPage: 20,
        window: 4
      },
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      sortData: {},
      filterForm: {
        inputs: {
          name: { label: 'Nome' }
        }
      },
      columns: {
        name: { label: 'Nome' }
      },
      dataRowsParam: 'data',
      countParam: 'count',
      data: {
        dataRows: [],
        count: 0
      }
    };
  },

  getInitialState: function() {
    return {
      dataRows: this.props.data.dataRows,
      count: this.props.data.count,
      page: 1,
      filterData: {},
      sortData: this.props.sortData,
      themeClassKey: 'grid'
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        this.renderFilter(), 

        this.renderPagination(), 
        this.renderTable(), 
        this.renderPagination()
      )
    );
  },

  renderFilter: function() {
    return (
      React.createElement(GridFilter, React.__spread({}, 
        this.props.filterForm, 
        {url: this.props.url, 
        onSubmit: this.onFilterSubmit})
      )
    );
  },

  renderTable: function() {
    return (
      React.createElement(GridTable, {
        columns: this.props.columns, 
        sortConfigs: this.props.sortConfigs, 
        sortData: this.state.sortData, 
        dataRows: this.state.dataRows, 
        onSort: this.onSort}
      )
    );
  },

  renderPagination: function() {
    var totalRowsCount = this.state.count;
    var pageRowsCount = this.state.dataRows.length;
    if(totalRowsCount <= pageRowsCount) {
      return null;
    }

    return (
      React.createElement(GridPagination, React.__spread({}, 
        this.props.paginationConfigs, 
        {page: this.state.page, 
        count: this.state.count, 
        onPagination: this.onPagination})
      )
    );
  },

  onPagination: function(page) {
    this.state.page = page;
    this.loadData();
  },

  onFilterSubmit: function(event, postData) {
    this.state.filterData = postData;
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
      dataRows: data[this.props.dataRowsParam],
      count: data[this.props.countParam]
    });
  },

  buildPostData: function() {
    var postData = $.extend({}, this.state.filterData);
    postData[this.props.paginationConfigs.param] = this.state.page;
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
  mixins: [CssClassMixin],
  propTypes: {
    inputs: React.PropTypes.object,
    url: React.PropTypes.string,
    method: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    clearButton: React.PropTypes.object,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      form: {},
      method: "GET",
      submitButton: {
        name: 'Filtrar',
        icon: 'search'
      },
      clearButton: {
        name: 'Limpar',
        additionalThemeClassKeys: 'grid.filter.clearButton button.cancel'
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

  getInitialState: function() {
    return {
      themeClassKey: 'grid.filter.wrapper grid.row'
    };
  },

  render: function() {
    return(
      React.createElement("div", {className: this.className()}, 
        React.createElement(Form, React.__spread({},  this.props, {ref: "form"}), 
          this.props.children, 

          React.createElement("div", {className: WRF.themeClass('grid.filter.buttonGroup')}, 
            React.createElement(Button, React.__spread({},  this.props.clearButton, {type: "reset"})), 
            React.createElement(Button, React.__spread({},  this.props.submitButton, {type: "submit"}))
          )
        )
      )
    );
  },

  serialize: function() {
    return this.refs.form.serialize();
  }

});

var GridPagination = React.createClass({displayName: "GridPagination",
  mixins: [CssClassMixin],
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.pagination grid.row',
      page: 1,
      perPage: 20,
      window: 4,
      onPagination: function(page) {
        return true;
      }
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        React.createElement(Pagination, {
          page: this.props.page, 
          count: this.props.count, 
          perPage: this.props.perPage, 
          window: this.props.window, 
          onPagination: this.props.onPagination}
        )
      )
    );
  }
});

var GridTable = React.createClass({displayName: "GridTable",
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.table grid.row',
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
      React.createElement("div", {className: this.className()}, 
        React.createElement(Table, {
          columns: this.props.columns, 
          sortConfigs: this.props.sortConfigs, 
          sortData: this.props.sortData, 
          dataRows: this.props.dataRows, 
          onSort: this.props.onSort}
        )
      )
    );
  }
});

var Icon = React.createClass({displayName: "Icon",
  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      type: ''
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'icon'
    };
  },

  render: function() {
    return (
      React.createElement("i", {className: this.className()}, this.themeIconType())
    );
  },

  themeIconType: function() {
    return WRF.themeProp('icon.' + this.props.type);
  }
});

var Input = React.createClass({displayName: "Input",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    component: React.PropTypes.string,
    componentMapping: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      value: null,
      onChange: function(event) {
        return true;
      },
      component: 'text',
      componentMapping: function(component) {
        var mapping = {
          text: InputText,
          checkbox: InputCheckbox,
          select: InputSelect,
          hidden: InputHidden
        };

        return mapping[component];
      }
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  focus: function() {
    var inputComponentRef = this.refs.inputComponent;
    inputComponentRef.focus();
  },

  render: function() {
    if(this.props.component === 'hidden')
      return this.renderHiddenInput();
    else
      return this.renderVisibleInput();
  },

  renderVisibleInput: function() {
    return (
      React.createElement("div", {className: "input-field col l3 m4 s12"}, 
        this.renderComponentInput(), 
        React.createElement("label", {htmlFor: this.props.id}, this.labelValue())
      )
    );
  },

  renderHiddenInput: function() {
    return this.renderComponentInput();
  },

  renderComponentInput: function() {
    var componentInputClass = this.props.componentMapping(this.props.component);
    var componentInputName = this.props.name || this.props.id;
    var componentInputProps = React.__spread({}, this.props, { name: componentInputName, ref: "inputComponent" });

    return React.createElement(componentInputClass, componentInputProps);
  },

  labelValue: function() {
    return this.props.label || this.props.name;
  }
});

var InputCheckbox = React.createClass({displayName: "InputCheckbox",
  mixins: [InputComponentMixin],

  componentDidMount: function() {
    React.findDOMNode(this.refs.input).indeterminate = true;
  },

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props, {type: "checkbox", ref: "input", className: "validate"}))
    );
  }
});

var InputHidden = React.createClass({displayName: "InputHidden",
  mixins: [InputComponentMixin],

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props, {type: "hidden", ref: "input"}))
    );
  }
});

var InputText = React.createClass({displayName: "InputText",
  mixins: [InputComponentMixin],
  propTypes: {
    placeholder: React.PropTypes.string
  },

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props, {type: "text", ref: "input", className: "validate"}))
    );
  }
});

var InputSelect = React.createClass({displayName: "InputSelect",
  mixins: [InputComponentMixin],

  propTypes: {
    options: React.PropTypes.array,
    optionsUrl: React.PropTypes.string,
    dependsOn: React.PropTypes.object,
    includeBlank: React.PropTypes.bool,
    nameField: React.PropTypes.string,
    valueField: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      includeBlank: true,
      dependsOn: null,
      options: [],
      nameField: 'name',
      valueField: 'id'
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
    var options = [];

    for(var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var option = {
        name: String(dataItem[this.props.nameField]),
        value: String(dataItem[this.props.valueField])
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

var Pagination = React.createClass({displayName: "Pagination",
  mixins: [CssClassMixin],
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'pagination',
      page: 1,
      perPage: 20,
      window: 4,
      onPagination: function(page) {
        return true;
      }
    };
  },

  render: function() {
    return (
      React.createElement("ul", {className: this.className()}, 
        this.renderPreviousButton(), 
        this.renderPageButtons(), 
        this.renderNextButton()
      )
    );
  },

  renderPreviousButton: function() {
    var disabled = (this.props.page <= 1);

    return (
      React.createElement(PaginationItem, {disabled: disabled, iconType: "left", onClick: this.navigateToPrevious})
    );
  },

  renderNextButton: function() {
    var disabled = (this.props.page >= this.lastPage());

    return (
      React.createElement(PaginationItem, {disabled: disabled, iconType: "right", onClick: this.navigateToNext})
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
    var active = (this.props.page === page);

    return (
      React.createElement(PaginationItem, {active: active, text: String(page), onClick: this.navigateTo.bind(this, page), key: "page_" + page})
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

var PaginationItem = React.createClass({displayName: "PaginationItem",
  mixins: [CssClassMixin],
  propTypes: {
    disabled: React.PropTypes.bool,
    active: React.PropTypes.bool,
    iconType: React.PropTypes.string,
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      active: false,
      iconType: null,
      text: '',
      onClick: function(event) {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.buildThemeClassKey()
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.buildThemeClassKey(nextProps)
    });
  },

  buildThemeClassKey: function(props) {
    props = props || this.props;
    var themeClassKey = 'pagination.item';
    if(props.disabled) {
      themeClassKey += ' pagination.item.disabled';
    }

    if(props.active) {
      themeClassKey += ' pagination.item.active';
    }

    return themeClassKey;
  },

  render: function() {
    return (
      React.createElement("li", {className: this.className(), onClick: this.handleClick}, 
        React.createElement("a", {href: "#!"}, 
          this.props.text, 
          !!this.props.iconType ? this.renderIcon() : ''
        )
      )
    );
  },

  renderIcon: function() {
    return React.createElement(Icon, {type: this.props.iconType});
  },

  handleClick: function() {
    if(!this.props.disabled) {
      this.props.onClick();
    }
  }
});

var Table = React.createClass({displayName: "Table",
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table',
      columns: {},
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      sortData: {},
      dataRows: [],
      onSort: function(sortData) {
        return true;
      }
    };
  },

  render: function() {
    return(
      React.createElement("table", {className: this.className()}, 
        React.createElement("thead", null, 
          this.renderTableHeaders()
        ), 
        React.createElement("tbody", null, 
          (this.props.dataRows.length > 0) ? this.renderTableRows() : this.renderEmptyMessage()
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
          React.createElement(TableHeader, React.__spread({},  columnProps,  this.props.sortConfigs, 
            {name: columnName, 
            key: columnName, 
            sortDirection: this.sortDirectionForColumn(columnName), 
            ref: "header_" + columnName, 
            onSort: this.props.onSort, 
            clearTheme: this.props.clearTheme})
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
      rowComponents.push(React.createElement(TableRow, {columns: this.props.columns, data: dataRow, key: "table_row_" + i, clearTheme: this.props.clearTheme}));
    }

    return rowComponents;
  },

  renderEmptyMessage: function() {
    var columnsCount = 0;
    for(var key in this.props.columns) {
      columnsCount++;
    }

    return (
      React.createElement("tr", null, 
        React.createElement("td", {colSpan: columnsCount}, 
          "Nenhum resultado foi encontrado."
        )
      )
    );
  }
});

var TableCell = React.createClass({displayName: "TableCell",
  mixins: [CssClassMixin],
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

  getInitialState: function() {
    return {
      themeClassKey: 'table.cell table.cell.' + this.props.format
    };
  },

  render: function() {
    return (
      React.createElement("td", {className: this.className()}, 
        this.renderValue()
      )
    );
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

var TableHeader = React.createClass({displayName: "TableHeader",
  mixins: [CssClassMixin],
  propTypes: {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    sortable: React.PropTypes.bool,
    sortDirection: React.PropTypes.string,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.header',
      sortable: true,
      sortDirection: null,
      onSort: function(sortData) {
        return true;
      }
    };
  },

  render: function() {
    return (
      React.createElement("th", {className: this.className()}, 
        React.createElement("span", {onClick: this.sortColumn, className: this.labelClassName()}, 
          this.props.label || this.props.name
        )
      )
    );
  },

  labelClassName: function() {
    var className = '';

    if(!this.props.clearTheme) {
      className += WRF.themeClass('table.header.label');
    }

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

var TableRow = React.createClass({displayName: "TableRow",
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object
  },

  render: function() {
    return (
      React.createElement("tr", {className: this.className()}, 
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
        cellComponents.push(
          React.createElement(TableCell, React.__spread({},  columnProps, 
            {name: columnName, 
            data: this.props.data, 
            key: columnName, 
            clearTheme: this.props.clearTheme})
          )
        );
      }
    }

    return cellComponents;
  }
});
