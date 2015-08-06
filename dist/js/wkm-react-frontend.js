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

  input: {
    wrapper: {
      cssClass: 'input-field col l3 m4 s12'
    },

    text: {
      cssClass: 'validate'
    },

    autocomplete: {
      cssClass: 'input-autocomplete',

      result: {
        cssClass: 'input-autocomplete__result z-depth-1'
      },

      list: {
        cssClass: 'input-autocomplete__list'
      },

      option: {
        cssClass: 'input-autocomplete__option',
        active: {
          cssClass: 'active'
        }
      },

      select: {
        cssClass: 'select-wrapper initialized'
      }
    },

    checkbox: {
      cssClass: 'validate'
    },

    datepicker: {
      cssClass: 'datepicker'
    },

    select: {
      cssClass: ''
    },

    textarea: {
      cssClass: 'materialize-textarea',

      wrapper: {
        cssClass: 'input-field col l12 m12 s12'
      }
    }
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
  },

  propsWithoutCSS: function() {
    var cssProps = ['clearTheme', 'className', 'themeClassKey'];
    var props = $.extend({}, this.props);
    $.each(cssProps, function(i, cssProp) {
      delete props[cssProp];
    }.bind(this));

    return props;
  }
};
var InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      onChange: function(event) {
        return true;
      }
    };
  }
};
var MaterializeSelectMixin = {
  componentDidMount: function() {
    this.applyMaterialize();
  },

  componentDidUpdate: function(previousProps, previousState) {
    if(this.state.options != previousState.options) {
      this.applyMaterialize();
    }
  },

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
};
var SelectComponentMixin = {
  propTypes: {
    options: React.PropTypes.array,
    dependsOn: React.PropTypes.object,
    optionsUrl: React.PropTypes.string,
    nameField: React.PropTypes.string,
    valueField: React.PropTypes.string,
    onLoad: React.PropTypes.func,
    onLoadError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      dependsOn: null,
      nameField: 'name',
      valueField: 'id',
      options: [],
      onLoad: function(data) {
        return true;
      },
      onLoadError: function(xhr, status, error) {
        console.log('Select Load error:' + error);
      }
    };
  },

  getInitialState: function() {
    return {
      options: this.props.options,
      disabled: this.props.disabled,
      loadParams: {}
    };
  },

  componentWillMount: function() {
    if(!!this.props.dependsOn) {
      this.state.disabled = true;
    }
  },

  componentDidMount: function() {
    if(this.props.optionsUrl) {
      if(!!this.props.dependsOn) {
        this.listenToDependableChange();
      } else {
        this.loadOptions();
      }
    }
  },

  loadOptions: function() {
    $.ajax({
      url: this.props.optionsUrl,
      method: 'GET',
      dataType: 'json',
      data: this.state.loadParams,
      success: this.handleLoad,
      error: this.onLoadError
    });
  },

  handleLoad: function(data) {
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

    this.props.onLoad(data);
  },

  listenToDependableChange: function() {
    var dependsOnObj = this.props.dependsOn;
    var dependableId = dependsOnObj.dependableId;
    var paramName = dependsOnObj.param || dependableId;
    var dependable = document.getElementById(dependableId);

    $(dependable).on('dependable_changed', function(event, dependableValue) {
      if(!dependableValue) {
        this.emptyAndDisable();
        return false;
      }

      this.state.loadParams[paramName] = dependableValue;
      this.loadOptions();
    }.bind(this));
  },

  emptyAndDisable: function() {
    this.setState({
      options: [],
      disabled: true
    });
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
    };
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

var Header = React.createClass({displayName: "Header",
  //mixins: [CssClassMixin],

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: ''
    };
  },

  render: function() {
    return (
        React.createElement("nav", {className: 'blue-grey darken-2 ' + this.props.className, role: "navigation"}, 
          React.createElement("div", {className: "nav-wrapper"}, 
          this.props.children
          )
        )
    );
  }

});
var HeaderButton = React.createClass({displayName: "HeaderButton",
  //mixins: [CssClassMixin],

  propTypes: {
    imgSrc: React.PropTypes.string,
    imgAlt: React.PropTypes.string,
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    text: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    onClick: React.PropTypes.object,
    ref: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconAlign: ' '
    };
  },

  render: function () {
    var button = '';
    if(this.props.imgSrc)
      button = this.renderImage();
    else
      button = this.renderButton();

    return (
      button
    );
  },

  renderButton: function() {
    return (
      React.createElement("a", {href: this.props.href, ref: this.props.ref, onClick: this.props.onClick, target: this.props.target}, 
        React.createElement("i", {className: 'material-icons ' + this.props.iconAlign}, this.props.icon), this.props.text
      )
    );
  },

  renderImage: function(){
    return (
      React.createElement("a", {className: "brand-logo", href: this.props.href}, 
        React.createElement("img", {src: this.props.imgSrc, alt: this.props.imgAlt})
      ));
  }

});

var HeaderMenu = React.createClass({displayName: "HeaderMenu",
  //mixins: [CssClassMixin],

  propTypes: {
    items: React.PropTypes.array,
    leftIcon: React.PropTypes.string,
    rightIcon: React.PropTypes.string,
    text: React.PropTypes.string,
    href: React.PropTypes.string,
    ref_id:React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      items: [],
      leftIcon: '',
      rightIcon: '',
      ref_id: 'headerMenu'
    };
  },

  render: function () {
    var leftIcon =  (this.props.leftIcon !== '')? React.createElement("i", {className: 'material-icons left'}, this.props.leftIcon) : '';
    var rightIcon =  (this.props.rightIcon !== '')? React.createElement("i", {className: 'material-icons right'}, this.props.rightIcon) : '';

    return (
        React.createElement("div", null, 
          React.createElement("a", {href: this.props.href, ref: "readerMenu", onClick: this.props.onClick, target: this.props.target, "data-activates": this.props.ref_id}, 
            leftIcon, 
            this.props.text, 
            rightIcon
          ), 
          this.renderMenu()
        )
    );
  },

  renderMenu: function(){
    return (
        React.createElement(Menu, {ref_id: this.props.ref_id, className: "dropdown-content", items: this.props.items}, 
          this.props.children
        )
    );
  },

  componentDidMount: function(){
    $(React.findDOMNode(this.refs.readerMenu)).dropdown();
  }

});

var HeaderSection = React.createClass({displayName: "HeaderSection",
  //mixins: [CssClassMixin],

  propTypes: {
    align: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      align: 'left',
      className: 'hide-on-med-and-down'
    };
  },

  render: function () {

    return (
      React.createElement("ul", {className: this.props.className + ' ' + this.props.align}, 
        this.renderChildren()
      )
    );
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, function(child, i) {
      return React.createElement("li", {key: "item_" + i}, child);
    });
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

var InputAutocomplete = React.createClass({displayName: "InputAutocomplete",
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin
  ],

  propTypes: {
    maxOptions: React.PropTypes.number,
    maxOptionsParam: React.PropTypes.string,
    searchParam: React.PropTypes.string,
    multiple: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      maxOptions: 99,
      maxOptionsParam: 'limit',
      searchParam: 'query',
      themeClassKey: 'input.autocomplete',
      multiple: false
    };
  },

  getInitialState: function() {
    return {
      selectedOptions: [],
      active: 0
    };
  },

  componentWillMount: function() {
    this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
  },

  componentDidMount: function() {
    var valuesField = React.findDOMNode(this.refs.valuesField);
    var $form = $(valuesField.form);
    $form.on('reset', function(){
      this.setState({
        selectedOptions: []
      });
    }.bind(this));
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className(), ref: "container"}, 
        React.createElement(InputAutocompleteSelect, React.__spread({}, 
          this.propsWithoutCSS(), 
          {selectedOptions: this.state.selectedOptions, 
          onFocus: this.showResult})
        ), 

        React.createElement(InputAutocompleteResult, {
          id: this.props.id, 
          selectedOptions: this.state.selectedOptions, 
          options: this.state.options, 
          active: this.state.active, 
          onKeyDown: this.handleSearchNavigation, 
          onKeyUp: this.searchOptions, 
          onSelect: this.handleSelect, 
          onClear: this.clearSelection, 
          ref: "result"}
        ), 

        React.createElement(InputAutocompleteValues, {
          id: this.props.id, 
          name: this.props.name, 
          multiple: this.props.multiple, 
          selectedOptions: this.state.selectedOptions, 
          ref: "valuesField"}
        )
      )
    );
  },

  handleDocumentClick: function(event) {
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var $containerNode = $(React.findDOMNode(this.refs.container));
    var searchInput = $resultNode.find('input[type=text]')[0];

    if($containerNode.find(event.target).length === 0) {
      this.hideResult();
    } else {
      searchInput.focus();
    }
  },

  hideResult: function() {
    $(document).off('click', this.handleDocumentClick);
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var $searchInput = $resultNode.find('input[type=text]');
    $resultNode.hide();
    $searchInput.val('');

    this.state.loadParams[this.props.searchParam] = '';
    this.setState({
      active: 0,
      selectedOptions: $.map(this.state.selectedOptions, function(option) {
        option.showOnTop = true;
        return option;
      })
    });
    this.loadOptions();
  },

  showResult: function() {
    $(document).on('click', this.handleDocumentClick);
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var searchInput = $resultNode.find('input[type=text]')[0];

    $resultNode.show();
    searchInput.focus();
  },

  searchOptions: function(event) {
    var $searchInput = $(event.currentTarget);

    this.state.loadParams[this.props.searchParam] = $searchInput.val();
    this.loadOptions();
  },

  handleSearchNavigation: function(event) {
    var keyCode = event.keyCode;

    if(keyCode == 38) {
      Math.max(0, this.state.active - 1);
      this.forceUpdate();
    } else if(keyCode == 40) {
      Math.max(0, this.state.active - 1);
      this.state.active++;
      this.forceUpdate();
    }
  },

  clearSelection: function() {
    this.setState({
      selectedOptions: []
    });
  },

  handleSelect: function(option) {
    if(this.props.multiple) {
      this.handleMultipleSelect(option);
    } else {
      this.handleSingleSelect(option);
    }
  },

  handleMultipleSelect: function(option) {
    var optionIndex = this.selectedOptionIndex(option);

    if(optionIndex < 0) {
      this.state.selectedOptions.push(option);
    } else {
      this.state.selectedOptions.splice(optionIndex, 1);
    }

    this.forceUpdate();
  },

  handleSingleSelect: function(option) {
    var optionIndex = this.selectedOptionIndex(option);
    var newSelectedOptions = [];

    if(optionIndex < 0) {
      newSelectedOptions.push(option);
    }

    this.setState({
      selectedOptions: newSelectedOptions
    });
  },

  selectedOptionIndex: function(option) {
    var optionValues = $.map(this.state.selectedOptions, function(option) {
      return option.value;
    });

    return optionValues.indexOf(option.value);
  }

});

var InputAutocompleteList = React.createClass({displayName: "InputAutocompleteList",
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    selectedOptions: React.PropTypes.array,
    options: React.PropTypes.array,
    active: React.PropTypes.number,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.list',
      options: [],
      selectedOptions: [],
      onSelect: function() {
        return true;
      }
    };
  },

  render: function() {
    return (
      React.createElement("ul", {className: this.className()}, 
        this.renderOptions()
      )
    );
  },

  renderOptions: function() {
    var options = [].concat(this.onTopSelectedOptions(), this.otherOptions());
    var listOptions = [];

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      listOptions.push(
        React.createElement(InputAutocompleteOption, React.__spread({},  optionProps, 
          {onSelect: this.props.onSelect, 
          active: i == this.props.active, 
          id: this.props.id, 
          key: optionProps.name})
        )
      );
    }

    return listOptions;
  },

  onTopSelectedOptions: function() {
    var selectedOptions = $.map(this.props.selectedOptions, function(selectedOption) {
      var option = $.extend({}, selectedOption);

      option.selected = true;
      return option;
    });

    return $.grep(selectedOptions, function(option) {
      return !!option.showOnTop;
    });
  },

  otherOptions: function() {
    var otherOptions = $.map(this.props.options, function(option) {
      var otherOption = $.extend({}, option);
      var relatedSelectedOption = $.grep(this.props.selectedOptions, function(selectedOption) {
        return selectedOption.value == otherOption.value;
      })[0];

      if(!!relatedSelectedOption) {
        otherOption.selected = true;
        otherOption.showOnTop = relatedSelectedOption.showOnTop;
      }

      return otherOption;
    }.bind(this));

    return $.grep(otherOptions, function(option) {
      return !option.showOnTop;
    });
  }
});

var InputAutocompleteOption = React.createClass({displayName: "InputAutocompleteOption",
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    selected: React.PropTypes.bool,
    active: React.PropTypes.bool,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selected: false,
      onSelect: function() {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.parseThemeClassKey(this.props.active)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.parseThemeClassKey(nextProps.active)
    });
  },

  parseThemeClassKey: function(active) {
    var themeClassKey = 'input.autocomplete.option';
    if(active) {
      themeClassKey += ' input.autocomplete.option.active';
    }

    return themeClassKey;
  },

  render: function() {
    return (
      React.createElement("li", {className: this.className(), onClick: this.handleSelect}, 
        React.createElement(InputCheckbox, {id: this.parseOptionId(), checked: this.props.selected, onClick: this.disableEvent}), 
        React.createElement(Label, {id: this.parseOptionId(), name: this.props.name})
      )
    );
  },

  handleSelect: function(event) {
    var option = {
      name: this.props.name,
      value: this.props.value,
      showOnTop: false
    };

    this.props.onSelect(option);
  },

  disableEvent: function(event) {
    event.stopPropagation();
  },

  parseOptionId: function() {
    return 'autocomplete_option_' + this.props.id + '_' + this.props.value;
  }
});

var InputAutocompleteResult = React.createClass({displayName: "InputAutocompleteResult",
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    options: React.PropTypes.array,
    selectedOptions: React.PropTypes.array,
    active: React.PropTypes.number,
    onKeyDown: React.PropTypes.func,
    onKeyUp: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onClear: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.result',
      options: [],
      selectedOptions: []
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        React.createElement("div", {className: "input-autocomplete__search"}, 
          React.createElement(Icon, {type: "search", className: "prefix"}), 
          React.createElement(InputText, {onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, autoComplete: "off"})
        ), 

        React.createElement("a", {href: "#!", className: "input-autocomplete__clear-button", onClick: this.props.onClear}, 
          "Limpar itens selecionados"
        ), 

        React.createElement(InputAutocompleteList, {
          id: this.props.id, 
          selectedOptions: this.props.selectedOptions, 
          options: this.props.options, 
          active: this.props.active, 
          onSelect: this.props.onSelect}
        )
      )
    );
  }
});


var InputAutocompleteSelect = React.createClass({displayName: "InputAutocompleteSelect",
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    selectedOptions: React.PropTypes.array,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selectedOptions: [],
      themeClassKey: 'input.autocomplete.select',
      placeholder: "Selecione",
      onFocus: function() {
        return true;
      },
      onBlur: function() {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      options: []
    };
  },

  //TODO: este e um componente do materialize. Tornar este componente generico.
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: this.className()}, 
          React.createElement("span", {className: "caret"}, "▼"), 
          React.createElement(InputText, {
            id: this.prefixSelectProp(this.props.id), 
            name: this.prefixSelectProp(this.props.name), 
            value: this.renderSelectedOptions(), 
            placeholder: this.props.placeholder, 
            onFocus: this.props.onFocus, 
            className: "select-dropdown"}
          )
        ), 
        React.createElement(Label, React.__spread({},  this.propsWithoutCSS(), {id: this.prefixSelectProp(this.props.id)}))
      )
    );
  },

  prefixSelectProp: function(prop) {
    return 'autocomplete_select_' + prop;
  },

  renderSelectedOptions: function() {
    var options = this.props.selectedOptions;

    return $.map(options, function(option){
      return option.name;
    }).join(', ');
  }
});

var InputAutocompleteValues = React.createClass({displayName: "InputAutocompleteValues",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    selectedOptions: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      multiple: false,
      selectedOptions: []
    };
  },

  render: function() {
    return (
      React.createElement("select", {name: this.valueInputName(), style: {display: "none"}, multiple: "true"}, 
        this.renderValueInputs()
      )
    );
  },

  renderValueInputs: function() {
    var valueInputs = [];
    var selectedOptions = this.props.selectedOptions;

    for(var i = 0; i < selectedOptions.length; i++) {
      var option = selectedOptions[i];
      valueInputs.push(React.createElement("option", {value: option.value, key: option.name, selected: "true"}));
    }

    return valueInputs;
  },

  valueInputName: function() {
    var inputName = this.props.name;
    if(this.props.multiple) {
      inputName += '[]';
    }

    return inputName;
  }
});

var Input = React.createClass({displayName: "Input",
  mixins: [CssClassMixin],
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
      component: 'text',
      onChange: function(event) {
        return true;
      },
      componentMapping: function(component) {
        var mapping = {
          text: InputText,
          autocomplete: InputAutocomplete,
          checkbox: InputCheckbox,
          datepicker: InputDatepicker,
          hidden: InputHidden,
          password: InputPassword,
          select: InputSelect,
          textarea: InputTextarea
        };

        return mapping[component];
      }
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value,
      themeClassKey: this.themeClassKeyByComponent()
    };
  },

  themeClassKeyByComponent: function() {
    var component = this.props.component;

    if(component === 'textarea') {
      return 'input.textarea.wrapper';
    } else {
      return 'input.wrapper';
    }
  },

  render: function() {
    var renderFunction = 'render' + S(this.props.component).capitalize().s + 'Input';
    if(this.hasOwnProperty(renderFunction)) {
      return this[renderFunction]();
    } else {
      return this.renderVisibleInput();
    }
  },

  renderVisibleInput: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        this.renderComponentInput(), 
        React.createElement(Label, React.__spread({},  this.propsWithoutCSS()))
      )
    );
  },

  renderAutocompleteInput: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        this.renderComponentInput()
      )
    );
  },

  renderHiddenInput: function() {
    return this.renderComponentInput();
  },

  renderComponentInput: function() {
    var componentInputClass = this.props.componentMapping(this.props.component);
    var componentInputName = this.props.name || this.props.id;
    var componentInputProps = React.__spread({}, this.propsWithoutCSS(), { name: componentInputName, ref: "inputComponent" });

    return React.createElement(componentInputClass, componentInputProps);
  }
});

var InputCheckbox = React.createClass({displayName: "InputCheckbox",
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      renderAsIndeterminate: false
    };
  },

  componentDidMount: function() {
    React.findDOMNode(this.refs.input).indeterminate = this.props.renderAsIndeterminate;
  },

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props, {type: "checkbox", className: this.className(), ref: "input"}))
    );
  }
});

var InputDatepicker = React.createClass({displayName: "InputDatepicker",
  mixins: [CssClassMixin, InputComponentMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datepicker'
    };
  },

  componentDidMount: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    $(inputNode).pickadate({
      selectMonths: true,
      selectYears: 15,
      format: 'dd/mm/yyyy'
    });
  },

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props, {type: "date", className: this.className(), ref: "input"}))
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

var InputPassword = React.createClass({displayName: "InputPassword",
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    confirms: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text'
    };
  },

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props, {type: "password", className: this.className(), ref: "input"}))
    );
  }
});

var InputText = React.createClass({displayName: "InputText",
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    type: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      type: 'text',
      themeClassKey: 'input.text'
    };
  },

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props, {className: this.className(), ref: "input"}))
    );
  }
});

var InputTextarea = React.createClass({displayName: "InputTextarea",
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    rows: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      rows: 4,
      themeClassKey: 'input.textarea'
    };
  },

  render: function() {
    return (
      React.createElement("textarea", React.__spread({},  this.props, {className: this.className(), ref: "input"}))
    );
  }
});

var InputSelect = React.createClass({displayName: "InputSelect",
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin,
    MaterializeSelectMixin
  ],

  propTypes: {
    includeBlank: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      includeBlank: true,
      themeClassKey: 'input.select'
    };
  },

  render: function() {
    return (
      React.createElement("select", {
        id: this.props.id, 
        name: this.props.name, 
        value: this.props.value, 
        onChange: this.handleChange, 
        disabled: this.state.disabled, 
        className: this.className(), 
        ref: "select"}, 
        this.renderOptions()
      )
    );
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

  handleChange: function(event) {
    var selectElement = React.findDOMNode(this.refs.select);
    var $selectElement = $(selectElement);

    $selectElement.trigger('dependable_changed', [selectElement.value]);
    this.props.onChange(event);
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

var Label = React.createClass({displayName: "Label",
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      name: '',
      label: ''
    };
  },

  render: function() {
    return (
      React.createElement("label", {htmlFor: this.props.id, onClick: this.props.onClick}, 
        (this.props.label || this.props.name)
      )
    );
  }
});

var Menu = React.createClass({displayName: "Menu",
  propTypes: {
    ref_id: React.PropTypes.string,
    items: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      ref_id:'',
      items: []
    };
  },

  componentWillMount: function() {
    if(!Array.isArray(this.props.children))
      this.props.children = [this.props.children];

    var items = this.renderItems();
    $(items).each(function (i, element) {
      this.props.children.push(element);
    }.bind(this));
  },

  render: function() {
    return (
      React.createElement("ul", {id: this.props.ref_id, className: this.props.className}, 
        this.renderChildren()
      )
    );
  },

  renderItems: function(){
    var menuItems = this.props.items.map(function ( item ) {
      return React.createElement(MenuItem, React.__spread({},  item ));
    },this);
    return menuItems;
  },

  renderChildren:function(){
    var menuItems = React.Children.map(this.props.children, function(item) {
      if((item !== null) && (item.type.displayName = "MenuItem"))
        return item;
    });
    return menuItems;
  }
});


var MenuItem = React.createClass({displayName: "MenuItem",
  propTypes: {
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    onClick: React.PropTypes.object,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconAlign: 'left'
    };
  },

  render: function() {
    var icon = (this.props.icon !== undefined)? React.createElement("i", {className: 'material-icons ' + (this.props.iconAlign || this.props.iconAlign)}, this.props.icon) : '';
    return (
      React.createElement("li", null, 
        React.createElement("a", {href: this.props.onClick? '#': this.props.href, onClick: this.props.onClick, target: this.props.target, className: this.props.className}, 
             icon, 
             this.props.text
        )
      )
    );
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
        this.renderFirstButton(), 
        this.renderPageButtons(), 
        this.renderLastButton(), 
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

  renderFirstButton: function() {
    if(this.firstWindowPage() <= 1) {
      return '';
    }

    return (
      React.createElement(PaginationItem, {text: "...", onClick: this.navigateTo.bind(this, 1)})
    );
  },

  renderNextButton: function() {
    var disabled = (this.props.page >= this.lastPage());

    return (
      React.createElement(PaginationItem, {disabled: disabled, iconType: "right", onClick: this.navigateToNext})
    );
  },

  renderLastButton: function() {
    var lastPage = this.lastPage();
    if(this.lastWindowPage() >= lastPage) {
      return '';
    }

    return (
      React.createElement(PaginationItem, {text: "...", onClick: this.navigateTo.bind(this, lastPage)})
    );
  },

  renderPageButtons: function() {
    var pageButtons = [];
    for(var i = this.firstWindowPage(); i <= this.lastWindowPage(); i++) {
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

  firstWindowPage: function() {
    return Math.max(1, this.props.page - this.props.window);
  },

  lastWindowPage: function() {
    return Math.min(this.lastPage(), this.props.page + this.props.window);
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

var SideNav = React.createClass({displayName: "SideNav",
  //mixins: [CssClassMixin],

  propTypes: {
    items: React.PropTypes.array,
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    text: React.PropTypes.string,
    ref_id:React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      items: [],
      icon: 'view_headline',
      iconAlign: '',
      ref_id: 'sideNav',
      text: ''
    };
  },

  render: function () {
    var iconAlign = this.props.text? 'left':'';
    return (React.createElement("div", null, 
      React.createElement("a", {href: this.props.href, ref: "sideNav", onClick: this.props.onClick, target: this.props.target, "data-activates": this.props.ref_id}, 
        React.createElement("i", {className: 'material-icons ' + iconAlign}, this.props.icon), 
        this.props.text
      ), 
      this.renderMenu()
    ));
  },

  renderMenu: function(){
    return (React.createElement(Menu, {ref_id: this.props.ref_id, className: "side-nav full", items: this.props.items}, this.props.children));
  },

  componentDidMount: function(){
    $(React.findDOMNode(this.refs.sideNav)).sideNav();
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
      format: 'text',
      data: {}
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
      return customValue(this.props.data, this.props);
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

var Tabs = React.createClass({displayName: "Tabs",

  render: function(){
    return (
        React.createElement("span", null, 
          React.createElement("ul", {className: "tabs", ref: "tabsContainer"}, 
            this.renderTabs()
          ), 
          React.createElement("div", {class: "row"}, 
            this.props.children
          )
        )
    );
  },

  componentDidMount: function(){
    $(React.findDOMNode(this.refs.tabsContainer)).tabs();
  },

  renderTabs: function() {
    var tabs = [];
    for(var i = 0; i < this.props.children.length; i++) {
      var isActive = i === 0 ? "active" : "";
      tabs[i] = (
          React.createElement("li", {className: "tab col s1"}, 
            React.createElement("a", {href: '#'+this.props.children[i].props.id, className: isActive}, 
              this.props.children[i].props.title
            )
          )
      );
    }

    return tabs;
  }

});

var Tab = React.createClass({displayName: "Tab",
  render: function(){
    return(
        React.createElement("div", {id: this.props.id}, 
			    this.props.children
        )
    );
  }
});