/*!
 * WKM Frontend v0.0.0 (http://www.wkm.com.br)
 * Copyright 2015-2015 Pedro Jesus <pjesus@wkm.com.br>
 */
var Realize = {};

Realize.config = {
  theme: 'materialize',
  locale: 'en',
  restUrls: {
    index: ':url.json',
    show: ':url/:id',
    add: ':url/new',
    create: ':url',
    edit: ':url/:id/edit',
    update: ':url/:id',
    destroy: ':url/:id'
  },

  restMethods: {
    index: 'GET',
    show: 'GET',
    add: 'GET',
    create: 'POST',
    edit: 'GET',
    update: 'PUT',
    destroy: 'DELETE'
  }
};

$.extend(FormSerializer.patterns, {
  validate: /^[a-z_][a-z0-9#_\.-]*(?:\[(?:\d*|[a-z0-9#_\.-]+)\])*$/i,
  key: /[a-z0-9#_\.-]+|(?=\[\])/gi,
  named: /^[a-z0-9#_\.-]+$/i
});
Realize.utils = {};

Realize.utils.getProp = function(key, obj) {
  var keyArr = key.split('.');
  var prop = obj;

  try {
    while(keyArr.length > 0) {
      prop = prop[keyArr.shift()];
    }
  } catch(err) {
    return '';
  }
  return prop;
};
Realize.PropTypes = {};

Realize.PropTypes.localizedString = function(props, propName, componentName) {
  var value = props[propName];
  if(value === null || value === undefined || (typeof value === "string" && value.length === 0)) {
    return true;
  }

  var translatedValue = Realize.t(value);
  if(typeof value !== "string" || typeof translatedValue !== "string" || translatedValue.length === 0) {
    return new Error('Property ' + propName + ' from ' + componentName + ' is not a localized string.');
  }
};
Realize.i18n = {};
Realize.i18n.locales = {};

Realize.i18n.registerLocale = function(newLocaleObj, locale) {
  if(!$.isPlainObject(newLocaleObj)) {
    throw 'Invalid Locale Object.'
  }

  if(!locale) {
    throw 'Invalid Locale Name.';
  }

  var currentLocaleObj = Realize.i18n.locales[locale] || {};
  Realize.i18n.locales[locale] = $.extend({}, currentLocaleObj, newLocaleObj);
};

Realize.i18n.setLocale = function(locale) {
  Realize.config.locale = locale;
};

Realize.i18n.translate = function(key, throwsException) {
  if(throwsException === undefined) {
    throwsException = false;
  }

  if(typeof key !== "string") {
    if(throwsException) {
      throw 'Key is not a string';
    }

    return '';
  }

  var currentLocale = Realize.config.locale;
  var localeObj = Realize.i18n.locales[currentLocale];

  var translatedString = Realize.utils.getProp(key, localeObj);
  if(!translatedString) {
    if(throwsException) {
      throw 'Key not found in locale object';
    }

    translatedString = key;
  }

  return translatedString;
};

Realize.t = Realize.i18n.translate;
Realize.i18n.registerLocale({
  true: 'Yes',
  false: 'No',
  loading: 'Loading...',
  select: 'Select',
  actions: {
    new: 'New',
    send: 'Send',
    filter: 'Filter',
    clear: 'Clear',
    add: 'Add',
    update: 'Update',
    cancel: 'Cancel'
  },

  table: {
    emptyResult: 'No results found.',
    selection: {
      clear: 'clear selection',
      selectAll: 'select all :count items',
      select: {
        singular: '1 item selected',
        plural: ':count items selected'
      }
    }
  },

  masks: {
    date: 'mm/dd/yyyy'
  },

  date: {
    formats: {
      default: 'MM/DD/YYYY HH:mm',
      date: 'MM/DD/YYYY'
    }
  }


}, 'en');
Realize.i18n.registerLocale({
  true: 'Sim',
  false: 'Não',
  loading: 'Carregando...',
  select: 'Selecione',
  actions: {
    new: 'Novo',
    send: 'Enviar',
    filter: 'Filtrar',
    clear: 'Limpar',
    add: 'Adicionar',
    update: 'Atualizar',
    cancel: 'Cancelar'
  },

  table: {
    emptyResult: 'Nenhum resultado foi encontrado.',
    selection: {
      clear: 'limpar seleção',
      selectAll: 'selecionar todos os :count itens',
      select: {
        singular: '1 item selecionado',
        plural: ':count itens selecionados'
      }
    }
  },

  masks: {
    date: 'dd/mm/yyyy'
  },

  date: {
    formats: {
      default: 'DD/MM/YYYY HH:mm',
      date: 'DD/MM/YYYY'
    }
  }

}, 'pt-BR');
Realize.themes = {};

Realize.themes.getCurrent = function() {
  var defaultTheme = Realize.themes.default;
  var currentTheme = Realize.themes[Realize.config.theme];

  return $.extend({}, defaultTheme, currentTheme);
};

Realize.themes.getProp = function(key) {
  if(!key) {
    return '';
  }

  var currentTheme = this.getCurrent();
  return Realize.utils.getProp(key, currentTheme);
};

Realize.themes.getCssClass = function(keys) {
  var keysArr = keys.split(' ');
  var themeClass = "";

  while(keysArr.length > 0) {
    var key = keysArr.shift();
    var classKey = key + '.cssClass';

    themeClass += this.getProp(classKey) + ' ';
  }

  return themeClass.trim();
};

Realize.themes.default = {
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
Realize.themes.materialize = {
  grid: {
    cssClass: 'grid row',

    filter: {
      wrapper: {
        cssClass: 'grid__filter col s12'
      }
    },

    table: {
      cssClass: 'grid__table col s12'
    },

    pagination: {
      cssClass: 'grid__pagination col s12'
    }
  },

  table: {
    cssClass: 'table striped responsive-table',

    wrapper: {
      cssClass: 'table-wrapper'
    },

    actions: {
      cssClass: 'table__actions'
    },

    selectionIndicator: {
      cssClass: 'table__selection-indicator'
    },

    header: {
      cssClass: 'table-header',

      label: {
        cssClass: 'table-header__name'
      }
    },

    select: {
      cssClass: 'table-select'
    },

    row: {
      cssClass: 'table-row',

      actions: {
        cssClass: 'table-row__actions'
      }
    },

    cell: {
      cssClass: 'table-cell'
    }
  },

  form: {
    cssClass: 'form row',

    buttonGroup: {
      cssClass: 'form__button-group col s12 m12 l12 right-align'
    },

    inputGroup: {
      cssClass: 'form__input-group',

      section: {
        cssClass: 'input-group__section'
      },

      divider: {
        cssClass: 'input-group__divider'
      }
    }
  },

  gridForm: {
    cssClass: 'grid-form'
  },

  input: {
    cssClass: 'form__input input-field',

    grid: {
      default: {
        cssClass: 'col l6 m6 s12'
      },

      filter: {
        cssClass: 'col l3 m4 s12'
      }
    },

    error: {
      cssClass: 'invalid',

      hint: {
        cssClass: 'form__input-error'
      }
    },

    text: {
      cssClass: ''
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
      cssClass: ''
    },

    datepicker: {
      cssClass: 'datepicker'
    },

    select: {
      cssClass: ''
    },

    textarea: {
      cssClass: 'materialize-textarea'
    },

    file: {
      cssClass: 'file-path',

      wrapper: {
        cssClass: 'file-field'
      },

      filePathWrapper: {
        cssClass: 'file-path-wrapper'
      },

      button: {
        cssClass: 'button btn'
      }

    }
  },

  label: {
    cssClass: 'label',

    active: {
      cssClass: 'active'
    }
  },

  button: {
    cssClass: 'button btn waves-effect waves-light',

    group: {
      cssClass: 'button-group'
    },

    floating: {
      cssClass: 'button button--floating btn-floating btn-large waves-effect waves-light'
    },

    flat: {
      cssClass: 'button button--flat btn-flat waves-effect waves-grey'
    },

    iconOnly: {
      cssClass: 'button--icon'
    },

    cancel: {
      cssClass: 'button-cancel black-text grey lighten-4'
    },

    danger: {
      cssClass: 'button-danger red lighten-1'
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

  flash: {
    cssClass: 'flash card z-depth-0',

    content: {
      cssClass: 'flash__content card-content'
    },

    dismiss: {
      cssClass: 'flash__dismiss card-action'
    },

    info: {
      cssClass: 'flash--info blue lighten-4',

      content: {
        cssClass: 'blue-text darken-4'
      }
    },

    warning: {
      cssClass: 'flash--warning amber lighten-4',

      content: {
        cssClass: 'orange-text darken-4'
      }
    },

    error: {
      cssClass: 'flash--error red lighten-4',

      content: {
        cssClass: 'red-text darken-4'
      }
    },

    success: {
      cssClass: 'flash--success green lighten-4',

      content: {
        cssClass: 'green-text darken-4'
      }
    }
  },

  tabs: {
    cssClass: 'tabs-container col',

    tabButton: {
      cssClass: 'tab',

      error: {
        cssClass: 'tab--error red lighten-4'
      }
    }

  },

  header: {
    cssClass: 'blue-grey darken-2'
  },

  modal: {
    cssClass: 'card realize-modal',

    header: {
      cssClass: 'card-content modal-header',
      withTitle: {
        cssClass: 'with-title'
      }
    },

    content: {
      cssClass: 'card-content modal-content'
    },

    footer: {
      cssClass: 'card-content modal-footer',
      withSeparator: {
        cssClass: 'with-separator'
      }
    }
  },


  icon: {
    cssClass: 'material-icons',

    left: 'chevron_left',
    right: 'chevron_right',
    search: 'search',
    calendar: 'today',
    close: 'clear',
    send: 'send',
    add: 'add',
    edit: 'mode_edit',
    destroy: 'delete'
  }
};
var ContainerMixin = {
  propTypes: {
    forwardedProps: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      forwardedProps: {}
    };
  },

  getChildren: function() {
    return this.cloneChildrenWithProps();
  },

  renderChildren: function() {
    return this.cloneChildrenWithProps();
  },

  getAllDescendants: function() {

  },

  cloneChildrenWithProps: function() {
    var props = this.buildPropsToForward();

    return React.Children.map(this.props.children, function(child) {
      var forwardedProps = $.extend({}, this.props.forwardedProps, props);
      return React.cloneElement(child, $.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
    }.bind(this));
  },

  buildChildPropsToKeep: function(child) {

    var defaultChildProps = {};
    var keepProps = [];

    if(!!child.type.getDefaultProps)
      defaultChildProps = child.type.getDefaultProps();

    if($.isArray(child.props['ignoreForwarded']))
      keepProps = child.props['ignoreForwarded'];

    var newProps = {};

    for(var k in child.props) {
      if( this.childPropValueIsNotDefault(child.props[k], defaultChildProps[k]) ||
          this.shouldKeepChildPropValueAnyway(k, keepProps))
        newProps[k] = child.props[k];
    }
    return newProps;
  },

  childPropValueIsNotDefault: function (propValue, defaultPropValue) {
    return !_.isEqual(propValue, defaultPropValue);
  },


  shouldKeepChildPropValueAnyway: function (propName, keepList) {
    return keepList.indexOf(propName) >= 0;
  },

  buildPropsToForward: function() {
    var propsToForward = !!this.propsToForward ? this.propsToForward() : [];
    var forwardMapping = !!this.propsToForwardMapping ? this.propsToForwardMapping() : {};
    var props = {};

    for(var i = 0; i < propsToForward.length; i++) {
      var propToForward = propsToForward[i];

      props[propToForward] = this.props[propToForward];
    }

    return $.extend(props, forwardMapping);
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
      clearTheme: false
    };
  },

  themedClassName: function(themeClassKey, className) {
    var themedClassName = '';

    if(!this.props.clearTheme && !!themeClassKey) {
      themedClassName += Realize.themes.getCssClass(themeClassKey);
    }

    if(!!className) {
      themedClassName += ' ' + className;
    }

    return themedClassName;
  },

  className: function() {
    var themeClassKey = this.getThemeClassKey();
    var className = this.props.className;

    return this.themedClassName(themeClassKey, className);
  },

  getThemeClassKey: function() {
    var themeClassKey = this.props.themeClassKey;
    if(!!this.state && !!this.state.themeClassKey) {
      themeClassKey = this.state.themeClassKey;
    }

    return themeClassKey;
  },

  propsWithoutCSS: function() {
    var cssProps = ['className', 'themeClassKey'];
    var props = $.extend({}, this.props);
    $.each(cssProps, function(i, cssProp) {
      delete props[cssProp];
    }.bind(this));

    return props;
  }
};
var FormContainerMixin = {
  propTypes: {
    errors: React.PropTypes.object,
    errorThemeClassKey: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      errors: {}
    };
  },

  formContainerClassName: function() {
    var className = this.className();
    if(this.inputChildrenHaveErrors()) {
      className += ' ' + Realize.themes.getCssClass(this.props.errorThemeClassKey);
    }

    return className;
  },

  inputChildrenHaveErrors: function() {
    var errorIds = $.map(this.props.errors, function(error, errorId) {
      return errorId;
    });

    return this.checkInputChildrenForErrors(errorIds, this.props.children);
  },

  checkInputChildrenForErrors: function(errorIds, children) {
    var inputChildrenHaveErrors = false;

    React.Children.forEach(children, function(child) {
      if(child.type == Input && $.inArray(child.props.id, errorIds) >= 0) {
        inputChildrenHaveErrors = true;
      } else if(child.type == InputGroup) {
        inputChildrenHaveErrors = this.checkInputGroupForErrors(errorIds, child);
      } else if(React.Children.count(child.children) > 0) {
        inputChildrenHaveErrors = this.checkInputChildrenForErrors(errorIds, child.children);
      }

      if(inputChildrenHaveErrors) {
        return false;
      }
    }.bind(this));

    return inputChildrenHaveErrors;
  },

  checkInputGroupForErrors: function (errorIds, inputGroup) {
    var inputGroupHaveErrors = false;
    var inputsIds = $.map(inputGroup.props.inputs, function(inputProps) {
      return inputProps.id;
    });

    $.each(inputsIds, function(i, inputId) {
      if($.inArray(inputId, errorIds) >= 0) {
        inputGroupHaveErrors = true;
        return false;
      }
    });

    return inputGroupHaveErrors;
  }

};
var FormErrorHandlerMixin = {
  propTypes: {
    errorMessage: React.PropTypes.string,
    baseErrorParam: React.PropTypes.string,
    onError: React.PropTypes.func,
    mapping: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      errorMessage: 'Por favor, verifique o(s) erro(s) abaixo.',
      baseErrorParam: 'base',
      onError: function(xhr, status, error) {
        return true;
      },
      mapping: true
    };
  },

  getInitialState: function() {
    return {
      errors: {}
    };
  },

  renderFlashErrors: function() {
    if($.isEmptyObject(this.state.errors)) {
      return '';
    }

    return React.createElement(Flash, {type: "error", message: this.flashErrorMessage(), dismissed: false});
  },

  clearErrors: function() {
    this.setState({errors: {}});
  },

  handleError: function(xhr, status, error) {
    this.setState({isLoading: false});
    if(this.props.onError(xhr, status, error)) {
      if(xhr.status === 422) {
        this.handleValidationError(xhr);
      }
    }
  },

  handleValidationError: function(xhr) {
    this.setState({errors: this.getMappingErrors(xhr.responseText)});
  },

  getMappingErrors: function(error){
    var errors = JSON.parse(error);
    if(this.props.mapping) {
      var mappingErrors = {};

      for(var property in errors){
        var key = property.split('.').pop();
        mappingErrors[key] = errors[property]
      }

      return mappingErrors;
    } else {
     return errors;
    }
  },

  flashErrorMessage: function() {
    return (
      React.createElement("div", null, 
        this.props.errorMessage, 
        this.baseErrorsList()
      )
    );
  },

  baseErrorsList: function() {
    var baseErrors = this.state.errors[this.props.baseErrorParam];
    var baseErrorsListComponents = [];
    if(!baseErrors) {
      return '';
    }

    for(var i = 0; i < baseErrors.length; i++) {
      var baseError = baseErrors[i];
      baseErrorsListComponents.push(React.createElement("li", {key: baseError}, baseError));
    }

    return (
      React.createElement("ul", null, 
        baseErrorsListComponents
      )
    );
  }
};
var FormSuccessHandlerMixin = {
  propTypes: {
    onSuccess: React.PropTypes.func,
    successMessage: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      onSuccess: function(data, status, xhr) { return true; },
      successMessage: ''
    };
  },

  getInitialState: function() {
    return {
      showSuccessFlash: false
    };
  },

  renderFlashSuccess: function() {
    if(!this.state.showSuccessFlash) {
      return '';
    }

    return React.createElement(Flash, {type: "success", message: this.props.successMessage, dismissed: false});
  },

  handleSuccess: function(data, status, xhr) {
    var showSuccessFlash = (!!this.props.successMessage && this.props.successMessage.length > 0);
    this.setState({
      isLoading: false,
      errors: {},
      showSuccessFlash: showSuccessFlash
    });

    if(this.props.onSuccess(data, status, xhr)) {
      if(xhr.getResponseHeader('Content-Type').match(/text\/javascript/)) {
        eval(data);
      }

    }
  }
};
var GridActionsMixin = {
  propTypes: {
    actionButtons: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      actionButtons: null
    };
  },

  getActionButtons: function() {
    var actionButtons = this.props.actionButtons || {};

    if(!actionButtons.member) {
      actionButtons.member = this.getDefaultMemberActionButtons();
    }

    if(!actionButtons.collection) {
      actionButtons.collection = this.getDefaultCollectionActionButtons();
    }

    return actionButtons;
  },

  getMemberActionButtons: function() {
    if($.isPlainObject(this.props.actionButtons) && !!this.props.actionButtons.member) {
      return this.props.actionButtons.member;
    } else {
      return this.getDefaultMemberActionButtons();
    }
  },

  getDefaultMemberActionButtons: function() {
    return [
      {
        icon: 'edit',
        href: this.getActionUrl('edit')
      },
      {
        icon: 'destroy',
        onClick: this.destroyAction
      }
    ];
  },

  getCollectionActionButtons: function() {
    if($.isPlainObject(this.props.actionButtons) && !!this.props.actionButtons.collection) {
      return this.props.actionButtons.collection;
    } else {
      return this.getDefaultCollectionActionButtons();
    }
  },

  getDefaultCollectionActionButtons: function() {
    return [
      {
        name: 'actions.new',
        context: 'none',
        href: this.getActionUrl('add')
      }
    ];
  },

  addAction: function(event) {
    window.location = this.getActionUrl('add');
  },

  editAction: function(event, id) {
    window.location = this.getActionUrl('edit', id);
  },

  destroyAction: function(event, id) {
    var destroyUrl = this.getActionUrl('destroy', id);
    var destroyMethod = this.getActionMethod('destroy');

    if(!this.props.destroyConfirm || confirm(this.props.destroyConfirm)) {
      this.setState({isLoading: true});

      $.ajax({
        url: destroyUrl,
        method: destroyMethod,
        success: this.handleDestroy,
        error: this.handleDestroyError
      });
    }
  },

  handleDestroy: function(data) {
    this.loadData(data);
  },

  handleDestroyError: function(xhr, status, error) {
    this.setState({isLoading: false});
    console.log(error);
  }
};
var CheckboxComponentMixin = {
  propTypes: {
    checked: React.PropTypes.bool,
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      renderAsIndeterminate: false
    };
  },

  getInitialState: function() {
    return {
      checked: this.getInitialChecked()
    };
  },

  componentDidMount: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;

    var $form = $(inputNode.form);
    $form.on('reset', this._handleCheckboxReset);
  },

  componentWillUnmount: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    var $form = $(inputNode.form);
    $form.off('reset', this._handleCheckboxReset);
  },

  getInitialChecked: function() {
    var checked = this.props.checked;
    var value = this.props.value;
    if(checked !== null && this.props.checked !== undefined) {
      return checked;
    }

    if(typeof value === "boolean" || value === 0 || value === 1) {
      return !!value;
    }

    return false;
  },

  _handleCheckboxReset: function(event) {
    if(this.isMounted()) {
      this.setState({
        checked: this.getInitialChecked()
      });
    }
  },

  _handleCheckboxChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      var newState = { checked: event.target.checked };
      var value = this.props.value;

      if(typeof value === "boolean" || value === 0 || value === 1) {
        newState.value = event.target.checked;
      }

      this.setState(newState);
    }
  }
};
var InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    placeholder: Realize.PropTypes.localizedString,
    errors: React.PropTypes.node,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      value: null,
      disabled: false,
      onChange: function(event) { return true; },
      errors: []
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  componentDidMount: function() {
    var $form = $(this.getInputFormNode());
    $form.on('reset', this._handleReset);
  },

  componentWillUnmount: function() {
    var $form = $(this.getInputFormNode());
    $form.off('reset', this._handleReset);
  },

  getInputFormNode: function() {
    var inputRef = this.refs.input;
    if(!!inputRef) {
      return React.findDOMNode(inputRef).form;
    }

    return null;
  },

  _handleReset: function(event) {
    if(this.isMounted() && !this.inputNodeIsCheckbox()) {
      this.setState({
        value: ''
      });
    }
  },

  _handleChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      var value = event.target.value;
      this.setState({value: value});
    }
  },

  inputClassName: function() {
    var className = this.className();
    var errors = this.props.errors;

    if(!!errors && errors.length > 0) {
      className += ' ' + Realize.themes.getCssClass('input.error');
    }

    return className;
  },

  getPlaceholder: function() {
    var placeholder = Realize.t(this.props.placeholder);
    if(typeof placeholder !== "string" || placeholder.length === 0) {
      return null;
    }

    return placeholder;
  },

  inputNodeIsCheckbox: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    return (!!inputNode && inputNode.type === "checkbox");
  }


};
var MaterializeSelectMixin = {
  componentDidMount: function() {
    this.applyMaterialize(true);
  },

  componentDidUpdate: function(previousProps, previousState) {
    if(this.state.options != previousState.options) {
      this.applyMaterialize();
    }
  },

  applyMaterialize: function(onMount) {
    var selectElement = React.findDOMNode(this.refs.select);
    $(selectElement).material_select(this.handleChangeMaterialize.bind(this, selectElement));

    if(!onMount) {
      this.handleChangeMaterialize(selectElement);
    }
  },

  handleChangeMaterialize: function(selectElement) {
    var $selectElement = $(selectElement);
    var fakeEvent = { currentTarget: selectElement };
    this.props.onChange(fakeEvent);

    //Implementação que resolve o seguinte bug do Materialize: https://github.com/Dogfalo/materialize/issues/1570
    $selectElement.parent().parent().find('> .caret').remove();

    this.setState({
      value: this.ensureIsArray(selectElement.value)
    }, this.triggerDependableChanged);
  }
};
var SelectComponentMixin = {
  propTypes: {
    options: React.PropTypes.array,
    dependsOn: React.PropTypes.object,
    optionsUrl: React.PropTypes.string,
    optionsParam: React.PropTypes.string,
    nameField: React.PropTypes.string,
    valueField: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    onLoad: React.PropTypes.func,
    onLoadError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      dependsOn: null,
      optionsParam: null,
      nameField: 'name',
      valueField: 'id',
      options: [],
      multiple: false,
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
      optionsCache: this.props.options,
      disabled: this.props.disabled,
      mustDisable: false,
      loadParams: {}
    };
  },

  componentWillMount: function() {
    // SelecComponent alwalys handle value as an array.
    this.state.value = this.ensureIsArray(this.state.value);

    if(!!this.props.dependsOn) {
      this.state.mustDisable = true;
    }
  },

  componentDidMount: function() {
    if(this.props.optionsUrl) {
      if(!!this.props.dependsOn) {
        this.listenToDependableChange();
        this.loadDependentOptions();
      } else {
        this.loadOptions();
      }
    }

    if(this.state.value.length > 0) {
      this.triggerDependableChanged();
    }
  },

  componentWillUnmount: function() {
    if(!!this.props.dependsOn) {
      this.unbindDependableChangeListener();
    }
  },

  ensureIsArray: function(value) {
    if(value === null || value === undefined || value.length === 0) {
      value = [];
    } else if(!$.isArray(value)) {
      value = [value];
    }
    return value;
  },

  selectedOptions: function() {
    var selectedOptions = [];
    $.each(this.state.optionsCache, function(i, option) {
      if(this.state.value.indexOf(option.value) >= 0) {
        selectedOptions.push(option);
      }
    }.bind(this));


    return selectedOptions;
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
    var optionsParam = this.props.optionsParam;
    if(!!optionsParam) {
      data = data[optionsParam];
    }

    for(var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var option = {
        name: String(dataItem[this.props.nameField]),
        value: dataItem[this.props.valueField]
      };

      options.push(option);
    }

    this.setState({
      options: options,
      optionsCache: this.cacheOptions(options),
      mustDisable: (!!this.props.dependsOn && options.length <= 0)
    }, this.triggerDependableChanged);

    this.props.onLoad(data);
  },

  cacheOptions: function(options) {
    var optionsCache = options.slice(0);
    var optionValuesCache = $.map(optionsCache, function(option) {
      return option.value;
    });

    $.each(this.state.optionsCache, function(i, option) {
      var optionValue = option.value;
      if(optionValuesCache.indexOf(optionValue) < 0) {
        optionsCache.push(option);
      }
    });

    return optionsCache;
  },

  listenToDependableChange: function() {
    var dependableId = this.props.dependsOn.dependableId;
    $('body').delegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },

  unbindDependableChangeListener: function() {
    var dependableId = this.props.dependsOn.dependableId;
    $('body').undelegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },

  onDependableChange: function(event, dependableValue) {
    this.loadDependentOptions(dependableValue);
  },

  loadDependentOptions: function(dependableValue) {
    if(!dependableValue) {
      dependableValue = this.getDependableNode().val();
    }

    if(!dependableValue || dependableValue.length === 0) {
      this.emptyAndDisable();
      return false;
    }

    if($.isArray(dependableValue) && dependableValue.length == 1) {
      dependableValue = dependableValue[0];
    }

    var dependsOnObj = this.props.dependsOn;
    var paramName = dependsOnObj.param || dependsOnObj.dependableId;
    this.state.loadParams[paramName] = dependableValue;
    this.loadOptions();
  },

  getDependableNode: function() {
    var dependsOnObj = this.props.dependsOn;
    return $(document.getElementById(dependsOnObj.dependableId));
  },

  triggerDependableChanged: function() {
    var $valuesElement = $(React.findDOMNode(this.refs.select));
    var optionValues = this.state.value;

    $valuesElement.trigger('dependable_changed', [optionValues]);
  },

  emptyAndDisable: function() {
    this.setState({
      options: [],
      optionsCache: [],
      mustDisable: true
    });
  },

  isDisabled: function () {
    return this.state.disabled || this.state.mustDisable;
  }
};
var LocalizedResourceFieldMixin = {
  propTypes: {
    resource: React.PropTypes.string,
    name: React.PropTypes.string
  },

  localizeResourceField: function(name, resource) {
    if(!name) { name = this.props.name }
    if(!resource) { resource = this.props.resource }

    if(name === undefined || resource === undefined) {
      return '';
    }

    try {
      var resourceKey = 'resources.' + resource + '.fields.' + name;
      return Realize.t(resourceKey, true);

    } catch(err) {
      resourceKey = 'resources.defaults.fields.' + name;
      try {
        return Realize.t(resourceKey, true);
      } catch(err) {
        return name;
      }
    }
  }

};
var ModalRendererMixin = {
  propTypes: {
    modalContainerId: React.PropTypes.string
  },

  getDefaultPropst: function() {
    return {
      modalContainerId: "modal-container"
    };
  },

  renderModalHtml: function(modalHtml) {
    var modalContainerId = this.props.modalContainerId;

    var $modalContainer = $("#" + modalContainerId);
    if($modalContainer.length === 0) {
      $modalContainer = $("<div id='" + modalContainerId + "'></div>");
      $("body").append($modalContainer);
    }

    $modalContainer.html(modalHtml);
  }
};
var RequestHandlerMixin = {
  propTypes: {
    onRequest: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onComplete: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      onRequest: function(requestData, url) {},
      onSuccess: function(responseData, status, xhr) { return true; },
      onError: function(xhr, status, error) { return true; },
      onComplete: function(xhr, status) { return true; }
    };
  },

  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  performRequest: function(url, requestData, method, dataType) {
    var requestOptions = {
      url: url,
      data: requestData,
      method: (method || 'GET'),
      success: this.successCallback,
      error: this.errorCallback,
      complete: this.completeCallback
    };

    if(!!dataType) {
      requestOptions.dataType = dataType;
    }

    this.requestCallback(requestData, url);
    $.ajax(requestOptions);
  },

  requestCallback: function(requestData, url) {
    this.setState({isLoading: true});
    this.executeCallback('onRequest', requestData, url);
  },

  successCallback: function(responseData, status, xhr) {
    if(this.executeCallback('onSuccess', responseData, status, xhr)) {
      this.handleSuccess(responseData, status, xhr);
    }
  },

  errorCallback: function(xhr, status, error) {
    this.executeCallback('onError', xhr, status, error);
  },

  completeCallback: function(xhr, status) {
    this.setState({isLoading: false});
    this.executeCallback('onComplete', xhr, status);
  },

  executeCallback: function(callbackFunction) {
    var callbackArguments = Array.prototype.slice.call(arguments, 1);
    var componentFunction = this[callbackFunction];
    var propFunction = this.props[callbackFunction];

    if(typeof componentFunction === "function") {
      componentFunction(callbackArguments);
    } else {
      propFunction(callbackArguments);
    }
  },

  handleSuccess: function(responseData, status, xhr) {
    var contentType = xhr.getResponseHeader('Content-Type');

    if(contentType.match(/text\/javascript/)) {
      this.handleJsResponse(responseData);
    } else if(contentType.match(/text\/html/)) {
      this.handleHtmlResponse(responseData);
    }
  },

  handleJsResponse: function(responseJs) {
    eval(responseJs);
  },

  handleHtmlResponse: function(responseHtml) {

  }
};
var RestActionsMixin = {
  propTypes: {
    actionUrls: React.PropTypes.object,
    actionMethods: React.PropTypes.object,
    destroyConfirm: React.PropTypes.node
  },

  getDefaultProps: function() {
    return {
      actionUrls: Realize.config.restUrls,
      actionMethods: Realize.config.restMethods,
      destroyConfirm: 'Tem certeza que deseja remover este item?'
    };
  },

  getActionUrl: function(action, id) {
    var actionUrl = this.props.actionUrls[action];
    actionUrl = actionUrl.replace(/:url/, this.props.url);
    if(!!id) {
      actionUrl = actionUrl.replace(/:id/, id);
    }

    return actionUrl;
  },

  getActionMethod: function(action) {
    return this.props.actionMethods[action];
  }

};
var UtilsMixin = {

  // source: https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29
  generateUUID: function() {
    var d = new Date().getTime();

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c =='x' ? r : (r&0x3|0x8)).toString(16);
    });
  }
};
var Button = React.createClass({displayName: "Button",
  mixins: [CssClassMixin],
  propTypes: {
    name: Realize.PropTypes.localizedString,
    type: React.PropTypes.string,
    icon: React.PropTypes.node,
    style: React.PropTypes.oneOf(['danger', 'primary', 'warning', 'cancel']),
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    disableWith: Realize.PropTypes.localizedString,
    confirmsWith: Realize.PropTypes.localizedString,
    element: React.PropTypes.oneOf(['button', 'a']),
    target: React.PropTypes.string,
    method: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'button',
      name: '',
      disabled: false,
      isLoading: false,
      icon: null,
      href: null,
      onClick: null,
      disableWith: 'loading',
      confirmsWith: null,
      element: 'button',
      method: null
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.getButtonThemeClassKey() + this.getStyleThemeClassKey()
    };
  },

  getButtonThemeClassKey: function() {
    var themeClassKey = this.props.themeClassKey;

    if(!this.props.name || this.props.name.length === 0) {
      themeClassKey += ' button.iconOnly';
    }

    return themeClassKey;
  },

  getStyleThemeClassKey: function() {
    if(!this.props.style) {
      return '';
    }

    return ' button.' + this.props.style;
  },

  render: function() {
    var content = '';
    if(this.props.isLoading) {
      content = this.renderLoadingIndicator();
    } else {
      content = this.renderContent();
    }

    return (
      React.createElement(this.props.element,
        {
          className: this.getClassName(),
          type: this.props.type,
          disabled: this.props.disabled,
          href: this.getHref(),
          onClick: this.handleClick,
          'data-method': this.getMethod(),
          'data-confirm': this.getConfirmsWith()
        },
        content
      )
    );
  },

  getClassName: function(){
    var className = this.className();
    if (this.props.disabled && this.props.element === 'a')
      className = 'button btn-flat disable-action-button';

    return className;
  },

  getHref: function() {
    if (this.props.disabled && this.props.element === 'a')
      return 'javascript:void(0)';
    return this.props.href;
  },

  getMethod: function() {
    if(!!this.props.method) {
      return this.props.method;
    }

    return null
  },

  getConfirmsWith: function() {
    if(!!this.props.confirmsWith) {
      return Realize.t(this.props.confirmsWith);
    }

    return null
  },

  renderContent: function() {
    return [ Realize.t(this.props.name), this.renderIcon() ];
  },

  renderIcon: function() {
    if(!this.props.icon) {
      return '';
    }

    var iconProps = null;
    if($.isPlainObject(this.props.icon)) {
      iconProps = this.props.icon;
    } else {
      iconProps = { type: this.props.icon };
    }
    
    return React.createElement(Icon, React.__spread({className: this.getIconClassName()},  iconProps, {key: "icon"}));
  },

  renderLoadingIndicator: function() {
    return Realize.t(this.props.disableWith);
  },

  handleClick: function(event) {
    if(!!this.props.onClick) {
      this.props.onClick(event);
    } else if(!!this.props.href && this.props.element !== 'a') {
      window.location = this.props.href;
    }
  },

  getIconClassName: function() {
    if(!this.props.name || this.props.name.length === 0) {
      return '';
    } else {
      return 'right';
    }
  }
  
});

var ButtonGroup = React.createClass({displayName: "ButtonGroup",
  mixins: [CssClassMixin],
  propTypes: {
    buttons: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'button.group',
      buttons: []
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        this.renderButtons()
      )
    );
  },

  renderButtons: function() {
    var buttonsProps = this.props.buttons;
    var buttons = [];

    for(var i = 0; i < buttonsProps.length; i++) {
      var buttonProps = buttonsProps[i];

      buttons.push(React.createElement(Button, React.__spread({},  buttonProps, {key: "button_" + i})));
    }

    return buttons;
  }

});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Flash = React.createClass({displayName: "Flash",
  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    message: React.PropTypes.node,
    dismissTimeout: React.PropTypes.number,
    canDismiss: React.PropTypes.bool,
    onDismiss: React.PropTypes.func,
    dismissed: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      type: 'info',
      dismissTimeout: -1,
      canDismiss: true,
      dismissed: false,
      message: '',
      onDismiss: function() {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'flash flash.' + this.props.type,
      dismissed: this.props.dismissed
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({dismissed: nextProps.dismissed});
  },

  componentDidMount: function() {
    if(this.props.dismissTimeout > 0) {
      this.setDismissTimeout();
    }
  },

  render: function() {
    return (
      React.createElement(ReactCSSTransitionGroup, {transitionName: "dismiss", transitionAppear: true}, 
        this.state.dismissed ? '' : this.renderFlash()
      )
    );
  },

  renderFlash: function() {
    return (
      React.createElement("div", {className: this.className(), ref: "flash"}, 
        React.createElement(FlashContent, React.__spread({},  this.props)), 
        this.props.canDismiss ? React.createElement(FlashDismiss, React.__spread({},  this.props, {onClick: this.dismiss})): ''
      )
    );
  },

  dismiss: function() {
    this.setState({dismissed: true});
    this.props.onDismiss();
  },

  setDismissTimeout: function() {
    setTimeout(function() {
      this.dismiss();
    }.bind(this), this.props.dismissTimeout);
  }
});

var FlashContent = React.createClass({displayName: "FlashContent",
  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string,
    message: React.PropTypes.node
  },

  getInitialState: function() {
    return {
      themeClassKey: 'flash.content flash.' + this.props.type + '.content'
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        React.createElement("p", null, 
          this.props.message
        )
      )
    );
  }
});

var FlashDismiss = React.createClass({displayName: "FlashDismiss",
  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string,
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      themeClassKey: 'flash.dismiss flash.' + this.props.type + '.content'
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className(), onClick: this.props.onClick}, 
        React.createElement(Icon, {type: "close"})
      )
    );
  }
});

var BulkEditForm = React.createClass({displayName: "BulkEditForm",
  mixins: [
    CssClassMixin,
    UtilsMixin
  ],

  propTypes: {
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    contentType: React.PropTypes.string,
    style: React.PropTypes.string,
    resource: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    otherButtons: React.PropTypes.array,
    isLoading: React.PropTypes.bool,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      inputs: {},
      data: {},
      action: '',
      method: 'POST',
      dataType: undefined,
      contentType: undefined,
      submitButton: {
        name: 'Enviar',
        icon: 'send'
      },
      otherButtons: [],
      isLoading: false,
      themeClassKey: 'form',
      style: 'default',
      resource: null,
      onSubmit: function (event, postData) {},
      onReset: function (event) {}
    };
  },

  getInitialState: function() {
    var disabled = [];

    for(var i = 0; i < this.props.inputGroups.length; i++ ) {
      var inputs = this.props.inputGroups[i].inputs;
      for(var inputId in inputs) {
        disabled.push(inputId);
      }
    }

    return {
      disabled: disabled,
      inputKeys: this.generateInputIds()
    };
  },

  render: function() {
    var formProps = $.extend({}, this.props);
    delete formProps.inputGroups;

    return (
      React.createElement(Form, React.__spread({},  formProps), 
        this.renderChildren()
      )
    );
  },

  generateInputIds: function(){
    var idsMap = {};
    for (var i = 0; i < this.props.inputGroups.length; i++ ){
      var inputs = this.props.inputGroups[i].inputs;
      for(var inputId in inputs)
        idsMap[inputId] = "input_" + inputId + this.generateUUID();
    }

    return idsMap;
  },

  renderChildren: function () {
    var inputComponents = [];

    for(var i = 0; i < this.props.inputGroups.length; i++ ) {
      var inputGroup = this.props.inputGroups[i];
      this.generateInputs(inputComponents, inputGroup, i);
    }

    return inputComponents;
  },


  generateInputs: function (inputComponents, inputGroup, i) {
    var inputIndex = 0;

    inputComponents.push(React.createElement("h5", {key: "header_" + i}, inputGroup.label));
    var inputsProps = inputGroup.inputs;
    for (var inputId in inputsProps) {
      if (inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if (!inputProps.id) {
          inputProps.id = inputId;
        }

        inputProps.disabled = (this.state.disabled.indexOf(inputId) !== -1);
        var resourceName = inputGroup.resource || this.props.resource;

        var switchId = "enable";
        if (!!resourceName) {
          switchId = switchId + "_" + resourceName
        }
        switchId = switchId + "_" + inputId;

        var switchName = "enable";
        if (!!resourceName) {
          switchName = switchName + "[" + resourceName + "]"
        }
        switchName = switchName + "[" + inputId + "]";

        if (inputId == 'ids') {
          inputComponents.push(
            React.createElement(Input, React.__spread({},  inputProps, 
              {disabled: false, 
              data: this.props.data, 
              resource: inputGroup.resource || this.props.resource, 
              className: "col m7 s10", 
              key: "value_" + inputId, 
              ref: "input_" + inputId, 
              component: "hidden"})
            )
          );
        } else {
          inputComponents.push(
            React.createElement("div", {className: "row", key: "wrapper_" + inputId}, 
              React.createElement(InputSwitch, {
                id: switchId, 
                name: switchName, 
                onChange: this.handleSwitchChange, 
                className: "switch col l3 m3 s2", 
                offLabel: "", 
                onLabel: "", 
                key: "switch_" + inputId}
              ), 
              React.createElement(Input, React.__spread({},  inputProps, 
                {data: this.props.data, 
                errors: this.props.errors, 
                resource: inputGroup.resource || this.props.resource, 
                formStyle: this.props.formStyle, 
                className: "input-field col offset-s1 l8 m8 s8", 
                clearTheme: true, 
                key: this.state.inputKeys[inputId], 
                ref: "input_" + inputId})
              )
            )
          );
          inputIndex++;
        }
      }
    }

    return inputComponents;
  },


  handleSwitchChange: function (event) {
    var sw = event.target;
    var inputId = sw.id.replace(/^enable_/, '');

    if (sw.name.indexOf('[') !== -1){
      inputId = sw.name.split('[').pop().replace(']', '');
    }

    var disabled = $.extend([], this.state.disabled);

    if(!sw.checked)
    {
      disabled.push(inputId);
    }
    else
    {
      disabled.splice(disabled.indexOf(inputId), 1);
    }

    var inputKeys = this.state.inputKeys;
    inputKeys[inputId] = "input_" + inputId + this.generateUUID();
    this.setState( { disabled: disabled, inputKeys: inputKeys });
  }

});
var Form = React.createClass({displayName: "Form",
  mixins: [
    CssClassMixin,
    ContainerMixin,
    FormErrorHandlerMixin,
    FormSuccessHandlerMixin
  ],

  propTypes: {
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    contentType: React.PropTypes.string,
    style: React.PropTypes.string,
    resource: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    otherButtons: React.PropTypes.array,
    isLoading: React.PropTypes.bool,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      inputs: {},
      data: {},
      action: '',
      method: 'POST',
      dataType: undefined,
      contentType: undefined,
      submitButton: {
        name: 'actions.send',
        icon: 'send'
      },
      otherButtons: [],
      isLoading: false,
      themeClassKey: 'form',
      style: 'default',
      resource: null,
      onSubmit: function(event, postData) {},
      onReset: function(event) {}
    };
  },

  getInitialState: function() {
    return {
      isLoading: null
    };
  },

  propsToForward: function() {
    return ['resource', 'data'];
  },

  propsToForwardMapping: function() {
    return {
      errors: this.state.errors,
      formStyle: this.props.style
    };
  },

  render: function() {
    return (
      React.createElement("form", {action: this.props.action, 
        id: this.props.id, 
        onSubmit: this.handleSubmit, 
        onReset: this.props.onReset, 
        className: this.className(), 
        ref: "form"}, 

        this.renderFlashErrors(), 
        this.renderFlashSuccess(), 
        this.renderInputs(), 
        this.renderChildren(), 

        React.createElement("div", {className: Realize.themes.getCssClass('form.buttonGroup')}, 
          this.renderOtherButtons(), 
          React.createElement(Button, React.__spread({},  this.submitButtonProps(), {ref: "submitButton"}))
        )
      )
    );
  },

  renderInputs: function() {
    if(!this.props.inputs || $.isEmptyObject(this.props.inputs)) {
      return '';
    }

    return React.createElement(InputGroup, React.__spread({},  this.propsWithoutCSS(), {formStyle: this.props.style, errors: this.state.errors}));
  },

  renderOtherButtons: function() {
    var otherButtonsProps = this.props.otherButtons;
    var otherButtons = [];

    for(var i = 0; i < otherButtonsProps.length; i++) {
      var otherButtonProps = otherButtonsProps[i];
      otherButtons.push(React.createElement(Button, React.__spread({},  otherButtonProps, {key: otherButtonProps.name})));
    }

    return otherButtons;
  },

  submitButtonProps: function() {
    var isLoading = this.isLoading();
    return $.extend({}, this.props.submitButton, {
      type: "submit",
      disabled: isLoading,
      isLoading: isLoading
    });
  },

  handleSubmit: function(event) {
    event.nativeEvent.preventDefault();
    var postData = this.serialize();
    this.props.onSubmit(event, postData);

    if(!event.isDefaultPrevented()) {
      this.setState({isLoading: true, errors: {}, showSuccessFlash: false});
      this.submit(postData);
    }
  },

  serialize : function() {
    var form = React.findDOMNode(this.refs.form);
    return $(form).serializeObject();
  },

  submit: function(postData) {
    var submitOptions = {
      url: this.props.action,
      method: this.props.method,
      data: postData,
      success: this.handleSuccess,
      error: this.handleError
    };

    if(!!this.props.dataType) {
      submitOptions.dataType = this.props.dataType;
    }

    if(!!this.props.contentType) {
      submitOptions.contentType = this.props.contentType;

      if(submitOptions.contentType == "application/json") {
        submitOptions.data = JSON.stringify(postData);
      }
    }

    $.ajax(submitOptions);
  },

  isLoading: function() {
    var isLoading = this.state.isLoading;
    if(isLoading === null) {
      isLoading = this.props.isLoading;
    }

    return isLoading;
  }
});

var InputGroup = React.createClass({displayName: "InputGroup",
  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    errors: React.PropTypes.object,
    resource: React.PropTypes.string,
    themeClassKey: React.PropTypes.string,
    label: React.PropTypes.string,
    separator: React.PropTypes.bool,
    formStyle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      inputs: {},
      data: {},
      errors: {},
      formStyle: 'default',
      label: null,
      separator: false,
      themeClassKey: 'form.inputGroup'
    };
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: this.inputGroupClassName()}, 
          this.renderLabel(), 
          this.renderInputs(), 
          this.props.children
        ), 
        this.renderDivider()
      )
    );
  },

  inputGroupClassName: function() {
    var className = this.className();
    if(this.props.label !== null) {
      className += ' ' + Realize.themes.getCssClass('form.inputGroup.section');
    }

    return className;
  },

  renderInputs: function() {
    var inputsProps = this.props.inputs;
    var inputComponents = [];
    var inputIndex = 0;

    for(var inputId in inputsProps) {
      if(inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if(!inputProps.id) {
          inputProps.id = inputId;
        }

        inputComponents.push(
          React.createElement(Input, React.__spread({},  inputProps, 
            {data: this.props.data, 
            errors: this.props.errors, 
            resource: this.props.resource, 
            formStyle: this.props.formStyle, 
            key: "input_" + inputIndex, 
            ref: "input_" + inputIndex})
          )
        );

        inputIndex++;
      }
    }

    return inputComponents;
  },

  renderLabel: function() {
    if(this.props.label === null) {
      return '';
    }

    return (React.createElement("h5", null, this.props.label));
  },

  renderDivider: function() {
    if(!this.props.separator) {
      return '';
    }

    //TODO: refatorar para um componente
    var className = Realize.themes.getCssClass('form.inputGroup.divider');
    return (
      React.createElement("div", {className: className}, 
        React.createElement("hr", null)
      )
    );
  }
});

var Grid = React.createClass({displayName: "Grid",
  mixins: [
    CssClassMixin,
    RestActionsMixin,
    GridActionsMixin
  ],

  propTypes: {
    url: React.PropTypes.string,
    eagerLoad: React.PropTypes.bool,
    resource: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filter: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    selectedRowIdsParam: React.PropTypes.string,
    isLoading: React.PropTypes.bool,
    selectable: React.PropTypes.bool,
    tableClassName: React.PropTypes.string,
    onLoadSuccess: React.PropTypes.func,
    onLoadError: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func,
    customTableHeader: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid',
      eagerLoad: false,
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
      filter: {},
      columns: {
        name: { label: 'Nome' }
      },
      dataRowsParam: 'data',
      countParam: 'count',
      selectedRowIdsParam: 'rowIds',
      data: {
        dataRows: [],
        count: 0
      },
      isLoading: false,
      selectable: true,
      onLoadSuccess: function(data) {},
      onLoadError: function(xhr, status, error) {},
      rowSelectableFilter: null,
      customTableHeader: null
    };
  },

  getInitialState: function() {
    return {
      dataRows: this.props.data.dataRows,
      selectedRowIds: [],
      allSelected: false,
      count: this.props.data.count,
      page: 1,
      filterData: {},
      sortData: this.props.sortData,
      isLoading: this.props.isLoading
    };
  },

  componentDidMount: function() {
    this.setState({
      filterData: this.getInitialFilterData()
    }, function() {
      if(!!this.props.eagerLoad) {
        this.loadData();
      }
    }.bind(this));
  },

  render: function() {
    return (
      React.createElement("div", {className: this.gridClassName(), ref: "grid"}, 
        this.renderFilter(), 

        this.renderPagination(), 
        this.renderTable(), 
        this.renderPagination()
      )
    );
  },

  gridClassName: function() {
    var className = this.className();
    if(this.state.isLoading) {
      className += ' loading';
    }

    return className;
  },

  /* Initializers */

  getInitialFilterData: function() {
    var gridFilterNode = React.findDOMNode(this.refs.filter);
    var filterForm = $(gridFilterNode).find('form');

    return filterForm.serializeObject();
  },

  /* Renderers */

  renderFilter: function() {
    if($.isEmptyObject(this.props.filter)) {
      return '';
    }

    return (
      React.createElement(GridFilter, React.__spread({
        action: this.props.url}, 
        this.props.filter, 
        {isLoading: this.state.isLoading, 
        onSubmit: this.onFilterSubmit, 
        ref: "filter"})
      )
    );
  },

  renderTable: function() {
    return (
      React.createElement(GridTable, {
        resource: this.props.resource, 
        columns: this.props.columns, 
        sortConfigs: this.props.sortConfigs, 
        sortData: this.state.sortData, 
        dataRows: this.state.dataRows, 
        selectable: this.props.selectable, 
        selectedRowIds: this.state.selectedRowIds, 
        selectedRowIdsParam: this.props.selectedRowIdsParam, 
        allSelected: this.state.allSelected, 
        allSelectedData: this.state.filterData, 
        count: this.state.count, 
        actionButtons: this.getActionButtons(), 
        tableClassName: this.props.tableClassName, 
        onSort: this.onSort, 
        onSelect: this.selectDataRows, 
        onRemoveSelection: this.removeSelection, 
        onSelectAll: this.selectAllRows, 
        rowSelectableFilter: this.props.rowSelectableFilter, 
        customTableHeader: this.props.customTableHeader}
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

  /* Event handlers */

  onPagination: function(page) {
    this.state.page = page;
    if(this.state.allSelected) {
      this.state.selectedRowIds = [];
    }

    this.state.allSelected = false;
    this.loadData();
  },

  onFilterSubmit: function(event, postData) {
    event.preventDefault();

    this.state.selectedRowIds = [];
    this.state.allSelected = false;
    this.state.filterData = postData;
    this.state.page = 1;
    this.loadData();
  },

  onSort: function(sortData) {
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  },

  /* Data load handler */

  loadData: function() {
    this.setState({isLoading: true});
    var postData = this.buildPostData();

    $.ajax({
      url: this.getActionUrl('index'),
      method: 'GET',
      dataType: 'json',
      data: postData,
      success: this.handleLoad,
      error: this.handleLoadError
    });
  },

  handleLoad: function(data) {
    this.setState({
      isLoading: false,
      dataRows: data[this.props.dataRowsParam],
      count: data[this.props.countParam]
    }, function() {
      this.props.onLoadSuccess(data);
    }.bind(this));
  },

  handleLoadError: function(xhr, status, error) {
    this.props.onLoadError(xhr, status, error);
    this.setState({isLoading: false});
    console.log('Grid Load Error:' + error);
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
  },

  /* Selection handlers */

  selectDataRows: function(event, selectedRowIds) {
    event.preventDefault();

    this.setState({
      selectedRowIds: selectedRowIds,
      allSelected: false
    });
  },

  removeSelection: function(event) {
    event.preventDefault();

    this.setState({
      selectedRowIds: [],
      allSelected: false
    });
  },

  selectAllRows: function(event) {
    event.preventDefault();

    this.setState({
      allSelected: true
    });
  }
});

var GridFilter = React.createClass({displayName: "GridFilter",
  mixins: [CssClassMixin],
  propTypes: {
    inputs: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    clearButton: React.PropTypes.object,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func,
    isLoading: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      method: "GET",
      submitButton: {
        name: 'actions.filter',
        icon: 'search'
      },
      clearButton: {
        name: 'actions.clear',
        type: 'reset',
        style: 'cancel'
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
      themeClassKey: 'grid.filter.wrapper'
    };
  },

  render: function() {
    return(
      React.createElement("div", {className: this.className()}, 
        React.createElement(Form, React.__spread({},  this.props, {otherButtons: [this.props.clearButton], style: "filter", ref: "form"}))
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
      themeClassKey: 'grid.pagination',
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

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.table'
    };
  },

  render: function() {
    return(
      React.createElement("div", {className: this.className()}, 
        React.createElement(Table, React.__spread({},  this.propsWithoutCSS(), {className: this.props.tableClassName}))
      )
    );
  }
});

var GridForm = React.createClass({displayName: "GridForm",
  mixins: [
    CssClassMixin,
    UtilsMixin,
    RestActionsMixin
  ],

  propTypes: {
    url: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filter: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    actionUrls: React.PropTypes.object,
    actionButtons: React.PropTypes.object,
    form: React.PropTypes.object,
    createButton: React.PropTypes.object,
    updateButton: React.PropTypes.object,
    cancelButton: React.PropTypes.object,
    isLoading: React.PropTypes.bool,
    selectable: React.PropTypes.bool,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onLoadSuccess: React.PropTypes.func,
    onLoadError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      form: {},
      actionButtons: null,
      themeClassKey: 'gridForm',
      isLoading: false,
      createButton: {
        name: 'actions.add',
        icon: 'add'
      },
      updateButton: {
        name: 'actions.update',
        icon: 'edit'
      },
      cancelButton: {
        name: 'actions.cancel',
        style: 'cancel'
      },
      selectable: true,
      onSubmit: function(event, postData) {},
      onReset: function(event) {},
      onSuccess: function(data, status, xhr) { return true; },
      onError: function(xhr, status, error) { return true; },
      onLoadSuccess: function(data) {},
      onLoadError: function(xhr, status, error) {}
    };
  },

  getInitialState: function() {
    return {
      formAction: 'create',
      selectedDataRow: null,
      selectedRowId: null,
      isLoading: this.props.isLoading
    };
  },

  componentDidMount: function() {
    this.loadGridData();
  },

  render: function() {
    //TODO: adicionar os divs de card em um componente separado.
    return (
      React.createElement("div", {className: this.className()}, 

        React.createElement("div", {className: "card"}, 
          React.createElement("div", {className: "card-content"}, 
            React.createElement(Form, React.__spread({
              style: "filter"}, 
              this.props.form, 
              {action: this.getFormAction(), 
              data: this.state.selectedDataRow, 
              method: this.getFormMethod(), 
              submitButton: this.getFormSubmitButton(), 
              otherButtons: this.getFormOtherButtons(), 
              onSubmit: this.onSubmit, 
              onReset: this.onReset, 
              onSuccess: this.onSuccess, 
              onError: this.onError, 
              key: "form_" + this.generateUUID(), 
              ref: "form"})
            )
          )
        ), 
        React.createElement("div", {className: "card"}, 
          React.createElement("div", {className: "card-content"}, 
            React.createElement(Grid, React.__spread({}, 
              this.propsWithoutCSS(), 
              {actionButtons: this.getActionButtons(), 
              ref: "grid"})
            )
          )
        )
      )
    );
  },

  getFormAction: function() {
    return this.getActionUrl(this.state.formAction, this.state.selectedRowId);
  },

  getFormMethod: function() {
    return this.getActionMethod(this.state.formAction);
  },

  getFormSubmitButton: function() {
    if(this.state.formAction == 'create') {
      return this.props.createButton;
    } else if(this.state.formAction == 'update') {
      return this.props.updateButton;
    }

    return '';
  },

  getFormOtherButtons: function() {
    if(this.state.formAction == 'update') {
      var cancelButtonProps = $.extend({}, this.props.cancelButton, {
        type: "reset"
      });

      return [cancelButtonProps];
    }

    return [];
  },

  getActionButtons: function() {
    var actionButtons = this.props.actionButtons || {};

    if(!actionButtons.member) {
      actionButtons.member = this.getDefaultMemberActionButtons();
    }

    if(!actionButtons.collection) {
      actionButtons.collection = this.getDefaultCollectionActionButtons();
    }

    return actionButtons;
  },

  getDefaultMemberActionButtons: function() {
    return [
      {
        icon: 'edit',
        onClick: this.editAction
      },
      {
        icon: 'destroy',
        onClick: this.destroyAction
      }
    ];
  },

  getDefaultCollectionActionButtons: function() {
    return [];
  },

  onSubmit: function(event, postData) {
    this.props.onSubmit(event, postData);
  },

  onReset: function(event) {
    this.setState({
      formAction: 'create',
      selectedRowId: null,
      selectedDataRow: null
    });

    this.clearFormErrors();
    this.props.onReset(event);
  },

  onSuccess: function(data, status, xhr) {
      if(this.props.onSuccess(data, status, xhr)) {
      this.loadGridData();
      this.resetForm();
    }
  },

  onError: function(xhr, status, error) {
    return this.props.onError(xhr, status, error);
  },

  editAction: function(event, id, data) {
    this.setState({
      formAction: 'update',
      selectedRowId: id,
      selectedDataRow: data
    });

    this.clearFormErrors();
  },

  destroyAction: function(event, id) {
    var destroyUrl = this.getActionUrl('destroy', id);
    var destroyMethod = this.getActionMethod('destroy');

    if(!this.props.destroyConfirm || confirm(this.props.destroyConfirm)) {
      this.setState({isLoading: true});
      this.resetForm();

      $.ajax({
        url: destroyUrl,
        method: destroyMethod,
        success: this.handleDestroy,
        error: this.handleDestroyError
      });
    }
  },

  handleDestroy: function(data) {
    this.loadGridData(data);
  },

  handleDestroyError: function(xhr, status, error) {
    this.setState({isLoading: false});
    console.log(error);
  },

  loadGridData: function() {
    var gridRef = this.refs.grid;
    gridRef.loadData();
  },

  resetForm: function() {
    var formNode = React.findDOMNode(this.refs.form);
    formNode.reset();
  },

  clearFormErrors: function() {
    var formRef = this.refs.form;
    formRef.clearErrors();
  }

});

var Header = React.createClass({displayName: "Header",
  mixins: [CssClassMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'header',
      wrapperClassName: 'nav-wrapper container'
    };
  },

  componentDidMount: function(){
    $(".button-collapse").sideNav({
      edge: 'right',
      closeOnClick: true
    });
    $('.collapsible').collapsible();
  },

  render: function() {
    return (
      React.createElement("nav", {className: this.className(), role: "navigation"}, 
        React.createElement("div", {className: this.props.wrapperClassName}, 
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
    onClick: React.PropTypes.func,
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
    align: React.PropTypes.string,
    id: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      align: 'left',
      className: 'hide-on-med-and-down'
    };
  },

  render: function () {

    return (
      React.createElement("ul", {className: this.props.className + ' ' + this.props.align, id: this.props.id}, 
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
      React.createElement("i", React.__spread({className: this.className()},  this.propsWithoutCSS()), this.iconType())
    );
  },

  iconType: function() {
    var iconType = Realize.themes.getProp('icon.' + this.props.type);
    if(!iconType) {
      iconType = this.props.type;
    }

    return iconType;
  }
});

var Spinner = React.createClass({displayName: "Spinner",
  propTypes: {
    size: React.PropTypes.string,
    color: React.PropTypes.string,
    active: React.PropTypes.bool,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      size: 'small',
      color: 'green',
      active: true,
      className: ''
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.wrapperClassName()}, 
        React.createElement("div", {className: this.layerClassName()}, 
          React.createElement("div", {className: "circle-clipper left"}, 
            React.createElement("div", {className: "circle"})
          ), 
          React.createElement("div", {className: "gap-patch"}, 
            React.createElement("div", {className: "circle"})
          ), 
          React.createElement("div", {className: "circle-clipper right"}, 
            React.createElement("div", {className: "circle"})
          )
        )
      )
    ); 
  },

  wrapperClassName: function() {
    var className = "spinner preloader-wrapper " + this.props.size;
    if(this.props.active) {
      className += " active";
    }

    className += " " + this.props.className;
    return className;
  },

  layerClassName: function() {
    var className = "spinner-layer spinner-" + this.props.color + "-only";

    return className;
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
    searchParam: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      maxOptions: 99,
      maxOptionsParam: 'limit',
      searchParam: 'query',
      themeClassKey: 'input.autocomplete'
    };
  },

  getInitialState: function() {
    return {
      active: 0,
      searchValue: ''
    };
  },

  componentWillMount: function() {
    this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
  },

  componentDidMount: function() {
    var valuesSelect = React.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.on('reset', this.clearSelection);
  },

  componentWillUnmount: function() {
    var valuesSelect = React.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.off('reset', this.clearSelection);
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className(), ref: "container"}, 
        React.createElement(InputAutocompleteSelect, React.__spread({}, 
          this.propsWithoutCSS(), 
          {disabled: this.isDisabled(), 
          selectedOptions: this.selectedOptions(), 
          onFocus: this.showResult})
        ), 

        React.createElement(InputAutocompleteResult, {
          id: this.props.id, 
          selectedOptions: this.selectedOptions(), 
          options: this.state.options, 
          active: this.state.active, 
          searchValue: this.state.searchValue, 
          onKeyDown: this.handleSearchNavigation, 
          onChange: this.searchOptions, 
          onSelect: this.handleSelect, 
          onClear: this.clearSelection, 
          onOptionMouseEnter: this.handleOptionMouseEnter, 
          ref: "result"}
        ), 

        React.createElement(InputAutocompleteValues, {
          id: this.props.id, 
          name: this.props.name, 
          multiple: this.props.multiple, 
          selectedOptions: this.selectedOptions(), 
          ref: "select"}
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
      active: 0
    });
  },

  showResult: function(event) {
    if(this.state.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var searchInput = $resultNode.find('input[type=text]')[0];

    $resultNode.show();
    searchInput.focus();
  },

  searchOptions: function(event) {
    var $searchInput = $(event.currentTarget);

    this.state.searchValue = $searchInput.val();
    this.state.loadParams[this.props.searchParam] = this.state.searchValue;
    this.loadOptions();
  },

  handleSearchNavigation: function(event) {
    var keyCode = event.keyCode;

    if(keyCode == 38) {
      this.moveActiveUp();
    } else if(keyCode == 40) {
      this.moveActiveDown();
    } else if(keyCode == 13) {
      event.preventDefault();
      this.selectOption();
    } else if(keyCode == 27 || keyCode == 9) {
      this.hideResult();
    }
  },

  moveActiveUp: function() {
    this.setState({
      active: Math.max(0, this.state.active - 1)
    });
  },

  moveActiveDown: function() {
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var resultListCount = $resultNode.find('li').length;

    this.setState({
      active: Math.min(resultListCount - 1, this.state.active + 1)
    });
  },

  selectOption: function() {
    var resultRef = this.refs.result;
    var resultListRef = resultRef.refs.list;
    var activeOptionRef = resultListRef.refs["option_" + this.state.active];

    this.handleSelect({
      name: activeOptionRef.props.name,
      value: activeOptionRef.props.value,
      showOnTop: false
    });
  },

  clearSelection: function() {
    this.setState({
      value: []
    }, this.triggerDependableChanged);
  },

  handleOptionMouseEnter: function(position) {
    this.setState({
      active: position
    });
  },

  handleSelect: function(option) {
    var optionIndex = this.state.value.indexOf(option.value);

    if(optionIndex < 0) {
      if(!this.props.multiple) {
        this.state.value = [];
      }

      this.state.value.push(option.value);
    } else {
      this.state.value.splice(optionIndex, 1);
    }

    this.forceUpdate();
    this.triggerDependableChanged();
  }

});

var InputAutocompleteList = React.createClass({displayName: "InputAutocompleteList",
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    selectedOptions: React.PropTypes.array,
    options: React.PropTypes.array,
    active: React.PropTypes.number,
    onSelect: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.list',
      options: [],
      selectedOptions: [],
      onSelect: function() {
        return true;
      },
      onOptionMouseEnter: function() {
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
          onOptionMouseEnter: this.props.onOptionMouseEnter, 
          position: i, 
          isActive: i == this.props.active, 
          id: this.props.id, 
          key: optionProps.name, 
          ref: "option_" + i})
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
  mixins: [CssClassMixin, UtilsMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.node,
    selected: React.PropTypes.bool,
    position: React.PropTypes.number,
    isActive: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selected: false,
      onSelect: function() {
        return true;
      },
      onOptionMouseEnter: function() {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.parseThemeClassKey(this.props.isActive)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.parseThemeClassKey(nextProps.isActive)
    });
  },

  parseThemeClassKey: function(isActive) {
    var themeClassKey = 'input.autocomplete.option';
    if(isActive) {
      themeClassKey += ' input.autocomplete.option.active';
    }

    return themeClassKey;
  },

  render: function() {
    return (
      React.createElement("li", {className: this.className(), onClick: this.handleSelect, onMouseEnter: this.handleMouseEnter}, 
        React.createElement(InputCheckbox, {id: this.parseOptionId(), checked: this.props.selected, onChange: this.disableEvent, onClick: this.disableEvent, key: this.generateUUID()}), 
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
    event.stopPropagation();
  },

  handleMouseEnter: function() {
    this.props.onOptionMouseEnter(this.props.position);
  },

  disableEvent: function(event) {
    event.stopPropagation();
    event.preventDefault();
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
    searchValue: React.PropTypes.string,
    onKeyDown: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onClear: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
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
          React.createElement(InputText, {onKeyDown: this.props.onKeyDown, value: this.props.searchValue, onChange: this.props.onChange, autoComplete: "off"})
        ), 

        React.createElement("a", {href: "#!", className: "input-autocomplete__clear-button", onClick: this.props.onClear}, 
          "Limpar itens selecionados"
        ), 

        React.createElement(InputAutocompleteList, {
          id: this.props.id, 
          selectedOptions: this.props.selectedOptions, 
          options: this.props.options, 
          active: this.props.active, 
          onSelect: this.props.onSelect, 
          onOptionMouseEnter: this.props.onOptionMouseEnter, 
          ref: "list"}
        )
      )
    );
  }
});


var InputAutocompleteSelect = React.createClass({displayName: "InputAutocompleteSelect",
  mixins: [
    CssClassMixin,
    UtilsMixin,
    InputComponentMixin
  ],

  propTypes: {
    selectedOptions: React.PropTypes.array,
    placeholder: Realize.PropTypes.localizedString,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selectedOptions: [],
      themeClassKey: 'input.autocomplete.select',
      placeholder: 'select',
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
            id: this.selectId(), 
            value: this.renderSelectedOptions(), 
            disabled: this.props.disabled, 
            placeholder: this.props.placeholder, 
            onFocus: this.props.onFocus, 
            errors: this.props.errors, 
            key: "autocomplete_select_" + this.generateUUID()}
          )
        ), 
        React.createElement(Label, React.__spread({},  this.propsWithoutCSS(), {id: this.selectId()}))
      )
    );
  },

  selectId: function() {
    return 'autocomplete_select_' + this.props.id;
  },

  renderSelectedOptions: function() {
    var options = this.props.selectedOptions;

    return $.map(options, function(option) {
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
      React.createElement("select", {
        multiple: true, 
        id: this.props.id, 
        name: this.valueInputName(), 
        value: this.selectedOptionsValues(), 
        style: {display: "none"}}, 
        this.renderValueInputs()
      )
    );
  },

  selectedOptionsValues: function() {
    return $.map(this.props.selectedOptions, function(selectedOption){
      return selectedOption.value;
    });
  },

  renderValueInputs: function() {
    var valueInputs = [];
    var selectedOptions = this.props.selectedOptions;

    for(var i = 0; i < selectedOptions.length; i++) {
      var option = selectedOptions[i];
      valueInputs.push(React.createElement("option", {value: option.value, key: option.name}));
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

var InputCheckbox = React.createClass({displayName: "InputCheckbox",
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    CheckboxComponentMixin
  ],

  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox'
    };
  },

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props, 
        {checked: this.state.checked, 
        className: this.inputClassName(), 
        onChange: this._handleCheckboxChange, 
        type: "checkbox", 
        ref: "input"})
      )
    );
  }

});

var InputCheckboxGroup = React.createClass({displayName: "InputCheckboxGroup",
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin
  ],

  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    currentValues: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      name:'',
      align: 'vertical'
    };
  },

  getInitialState: function() {
    return {
      currentValues: this.props.currentValues
    };
  },

  renderChildItems: function() {
    var items = React.Children.map(this.props.children, function(item) {
      if((item !== null) && (item.props.children[0].type.displayName == "input"))
        return item;
    });
    return items;
  },

  renderPropItems: function() {
    var selectOptions = [];
    var options = this.state.options;

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];

      var filledClass =  optionProps.filled? 'filled-in' : '';
      optionProps.id = this.props.id + '_' + i;

      selectOptions.push(
        React.createElement("p", {key: 'p_input'+i}, 
          React.createElement(InputCheckbox, React.__spread({},  optionProps , {name: this.props.name, className: filledClass, checked: this.isChecked(optionProps)})), 
          React.createElement(Label, React.__spread({},  optionProps))
        )
      );
    }
    return selectOptions;
  },

  render: function() {
    return (
      React.createElement("div", {className: 'input-checkbox-group align-' + this.props.align}, 
        this.renderChildItems(), 
        this.renderPropItems()
      )
    );
  },

  isChecked: function(item){
    var currentValues = this.state.currentValues;
    if(!$.isArray(currentValues))
      currentValues = [currentValues];
    return ($.inArray( item.value , currentValues ) !== -1);
  }

});

var Input = React.createClass({displayName: "Input",
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.node,
    component: React.PropTypes.string,
    formStyle: React.PropTypes.oneOf(['default', 'filter']),
    data: React.PropTypes.object,
    errors: React.PropTypes.object,
    resource: React.PropTypes.string,
    scope: React.PropTypes.oneOf(['resource', 'global'])
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input',
      value: null,
      component: 'text',
      formStyle: 'default',
      data: {},
      errors: {},
      resource: null,
      scope: 'resource'
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  themeClassKeyByStyle: function() {
    return 'input.wrapper.' + this.props.formStyle;
  },

  inputClassName: function() {
    var className = this.className();
    if(!this.props.className) {
      className += ' ' + Realize.themes.getCssClass('input.grid.' + this.props.formStyle);
    }

    return className;
  },

  render: function() {
    var renderFunction = 'render' + S(this.props.component).capitalize().s + 'Input';
    if(this.hasOwnProperty(renderFunction)) {
      return this[renderFunction]();
    } else {
      return this.renderInput();
    }
  },

  renderInput: function() {
    return (
      React.createElement("div", {className: this.inputClassName()}, 
        this.renderComponentInput(), 
        this.renderLabel(), 
        this.renderInputErrors()
      )
    );
  },

  renderAutocompleteInput: function() {
    return (
      React.createElement("div", {className: this.inputClassName()}, 
        this.renderComponentInput(), 
        this.renderInputErrors()
      )
    );
  },

  renderDatepickerInput: function() {
    return (
      React.createElement("div", {className: this.inputClassName()}, 
        this.renderComponentInput(), 
        this.renderInputErrors()
      )
    );
  },

  renderNumberInput: function(){
    return (
      React.createElement("div", {className: this.inputClassName()}, 
        this.renderComponentInput(), 
        this.renderInputErrors()
      )
    );
  },

  renderSwitchInput: function(){
    return (
      React.createElement("div", {className: this.inputClassName()}, 
        this.renderComponentInput(), 
        this.renderInputErrors()
      )
    );
  },

  renderFileInput: function() {
    return (
      React.createElement("div", {className: this.inputClassName()}, 
        this.renderComponentInput(), 
        this.renderInputErrors()
      )
    );
  },

  renderHiddenInput: function() {
    return this.renderComponentInput();
  },

  renderComponentInput: function() {
    var componentInputClass = this.getInputComponentClass(this.props.component);
    var componentInputProps = React.__spread(this.propsWithoutCSS(), {
      id: this.getInputComponentId(),
      name: this.getInputComponentName(),
      errors: this.getInputErrors(),
      value: this.getInputComponentValue(),
      ref: "inputComponent"
    });

    return React.createElement(componentInputClass, componentInputProps);
  },

  renderLabel: function() {
    var inputValue = this.getInputComponentValue();
    var isActive = (inputValue !== null && inputValue !== undefined && String(inputValue).length > 0);

    return (
      React.createElement(Label, React.__spread({},  this.propsWithoutCSS(), {id: this.getInputComponentId(), active: isActive}))
    );
  },

  renderInputErrors: function() {
    return (React.createElement(InputError, {errors: this.getInputErrors()}));
  },

  getInputComponentClass: function(component) {
    var mapping = {
      text: InputText,
      autocomplete: InputAutocomplete,
      checkbox: InputCheckbox,
      datepicker: InputDatepicker,
      number: InputNumber,
      file: InputFile,
      hidden: InputHidden,
      password: InputPassword,
      select: InputSelect,
      switch: InputSwitch,
      textarea: InputTextarea,
      checkbox_group: InputCheckboxGroup,
      radio_group: InputRadioGroup,
      masked: InputMasked
    };

    return (mapping[component] || window[component]);
  },

  getInputComponentId: function() {
    var inputId = this.props.id;
    if(this.props.resource !== null && this.props.scope === "resource") {
      inputId = this.props.resource + '_' + inputId;
    }

    return inputId;
  },

  getInputComponentName: function() {
    var inputName = (this.props.name || this.props.id);
    if(this.props.resource !== null && this.props.scope === "resource") {
      inputName = this.props.resource + '[' + inputName + ']';
    }

    return inputName;
  },

  getInputComponentValue: function() {
    if(!!this.props.value) {
      return this.props.value;
    }

    var data = this.props.data || {};
    var dataValue = data[this.props.id];

    if(typeof dataValue === 'boolean') {
      dataValue = (dataValue ? 1 : 0);
    }

    return dataValue;
  },

  getInputErrors: function() {
    if(this.props.errors[this.props.resource] && this.props.errors[this.props.resource][this.props.id])
      return this.props.errors[this.props.resource][this.props.id];
    return this.props.errors[this.props.id];
  }
});

var InputDatepicker = React.createClass({displayName: "InputDatepicker",
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    format: Realize.PropTypes.localizedString
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datepicker'
    };
  },

  componentDidMount: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    var buttonNode = React.findDOMNode(this.refs.button);

    var input = $(inputNode).pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true ,
      format: Realize.t('masks.date')
    });

    var picker = input.pickadate('picker');
    picker.on('close', this.props.onChange);

    // TODO: should close on date click - materialize currently broke it
    $(buttonNode).on('click', function(e) {
      if (picker.get('open')) {
        picker.close();
      } else {
        picker.open();
      }
      e.stopPropagation();
    });
  },

  render: function() {
    return (
      React.createElement("span", null, 
        React.createElement(InputMasked, React.__spread({},  this.props, {type: "date", className: this.className(), onChange: this._handleChange, plugin_params: {typeMask: 'date', showMaskOnHover: false}, ref: "input"})), 
        React.createElement(Label, React.__spread({},  this.propsWithoutCSS())), 
        React.createElement(Button, {disabled: this.props.disabled, icon: {type: "calendar"}, className: "input-datepicker__button prefix", type: "button", ref: "button"})
      )
    );
  }
});



var InputError = React.createClass({displayName: "InputError",
  mixins: [CssClassMixin],

  propTypes: {
    errors: React.PropTypes.node
  },

  getDefaultProps: function() {
    return {
      errors: [],
      themeClassKey: 'input.error.hint'
    };
  },

  render: function() {
    return (
      React.createElement("span", {className: this.className()}, 
        this.errorMessages()
      )
    );
  },

  errorMessages: function() {
    var errors = this.props.errors;
    var errorMessage = '';
    if(!$.isArray(errors)) {
      errors = [errors];
    }

    for(var i = 0; i < errors.length; i++) {
      var error = errors[i];
      errorMessage += error + ' / ';
    }

    return errorMessage.replace(/[\/\s]*$/, '');
  }

});

var InputFile = React.createClass({displayName: "InputFile",
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    buttonName: React.PropTypes.string,
    wrapperClassName: React.PropTypes.string,
    buttonClassName: React.PropTypes.string,
    filePathWrapperClassName: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.file',
      buttonName: 'Arquivo'
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.wrapperClassName()}, 
        React.createElement("div", {className: this.buttonClassName()}, 
          React.createElement("span", null, this.props.buttonName), 
          React.createElement("input", React.__spread({},  this.props, {value: this.state.value, onChange: this.handleChange, type: "file", ref: "input"}))
        ), 
        React.createElement("div", {className: this.filePathWrapperClassName()}, 
          React.createElement("input", {className: this.inputClassName(), placeholder: this.getLabelName(), type: "text", ref: "filePath"})
        )
      )
    );
  },

  handleChange: function(event) {
    this._handleChange(event);

    var fileInput = React.findDOMNode(this.refs.input);
    var filePathInput = React.findDOMNode(this.refs.filePath);

    $(filePathInput).val(fileInput.files[0].name);
  },

  wrapperClassName: function() {
    return this.themedClassName('input.file.wrapper', this.props.wrapperClassName);
  },

  filePathWrapperClassName: function() {
    return this.themedClassName('input.file.filePathWrapper', this.props.filePathWrapperClassName);
  },

  buttonClassName: function() {
    return this.themedClassName('input.file.button', this.props.buttonClassName);
  },

  getLabelName: function() {
    return (this.props.label || this.props.name);
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

var InputMasked = React.createClass({displayName: "InputMasked",
  mixins: [CssClassMixin, InputComponentMixin],

  propTypes: {
    mask: React.PropTypes.string,
    typeMask: React.PropTypes.string,
    predefinedMasks: React.PropTypes.object,
    regex: React.PropTypes.string,
    onComplete: React.PropTypes.func,
    onIncomplete: React.PropTypes.func,
    onCleared: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text',
      mask:'',
      typeMask:'',
      regex:'',
      predefinedMasks: {
        cpf: {
          mask:'999.999.999-99'
        },
        cnpj:{
          mask: '99.999.999/9999-99'
        },
        phone:{
          mask: '(99) 9999[9]-9999'
        },
        cell_phone:{
          mask: '(99) 9999[9]-9999'
        },
        currency:{
          mask:'999.999.999,99',
          numericInput: true,
          rightAlign: true
        }
      },
      onComplete: function() {},
      onIncomplete: function() {},
      onCleared: function() {}
    };
  },

  render: function() {
    return (
      React.createElement("input", React.__spread({},  this.props,  this.props.field_params, {value: this.state.value, className: this.inputClassName(), onKeyUp: this.props.onChange, ref: "input", type: "text"}), 
        this.props.children
      )
    );
  },

  componentDidMount: function() {
    if(this.isRegexMask())
      this.renderRegexMask();
    else{
      if(this.isAPredefinedMask())
        this.renderPredefinedMask();
      else
        this.renderCustomMask();
    }
  },

  renderRegexMask: function() {
    var params = {};
    params.regex = this.props.plugin_params.regex;
    this.renderBaseMask('Regex', params);
  },

  renderCustomMask: function() {
    var typeMask = this.props.plugin_params.typeMask;
    delete this.props.plugin_params.placeholder;
    delete this.props.plugin_params.typeMask;

    if(typeMask)
      this.renderBaseMask(typeMask, this.props.plugin_params);
    else
      this.renderBaseMask('', this.props.plugin_params);
  },

  renderPredefinedMask: function() {
    var params = this.maskMapping(this.props.plugin_params.mask);
    var typeMask = this.props.plugin_params.typeMask;
    delete this.props.plugin_params.mask;
    delete this.props.plugin_params.placeholder;
    delete this.props.plugin_params.typeMask;

    params = $.extend(params, this.props.plugin_params);
    this.renderBaseMask(typeMask, params);
  },

  renderBaseMask: function(type, params) {
    if(type !== undefined && type !== '')
      $(React.findDOMNode(this.refs.input)).inputmask(type, this.paramsWithEvents(params));
    else
      $(React.findDOMNode(this.refs.input)).inputmask(this.paramsWithEvents(params));
  },

  maskMapping: function(type) {
    var typesMask = this.props.predefinedMasks;
    return typesMask[type] === undefined ? type : typesMask[type];
  },

  isAPredefinedMask: function() {
    return this.props.plugin_params.mask in this.props.predefinedMasks;
  },

  isRegexMask: function() {
    return (this.props.plugin_params != null) && ('regex' in this.props.plugin_params);
  },

  paramsWithEvents: function(params) {
    if(!params) {
      params = {};
    }

    params.oncomplete = this.props.onComplete;
    params.onincomplete = this.props.onIncomplete;
    params.oncleared = this.props.onCleared;
    return params;
  }

});
var InputNumber = React.createClass({displayName: "InputNumber",
  mixins: [CssClassMixin, InputComponentMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.number',
      greedy: false,
      repeat: 10
    };
  },

  render: function() {
    return (
      React.createElement("span", null, 
        React.createElement(InputMasked, React.__spread({},  this.props, {type: "number", plugin_params: {typeMask: '9', repeat: this.props.repeat, greedy: this.props.greedy}, className: this.className(), ref: "input"})), 
        React.createElement(Label, React.__spread({},  this.propsWithoutCSS()))
      )
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
      React.createElement("input", React.__spread({}, 
        this.props, 
        {value: this.state.value, 
        placeholder: this.getPlaceholder(), 
        className: this.inputClassName(), 
        onChange: this._handleChange, 
        type: "password", ref: "input"}))
    );
  }
});

var InputSwitch = React.createClass({displayName: "InputSwitch",
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    CheckboxComponentMixin
  ],

  propTypes: {
    label: React.PropTypes.string,
    offLabel: Realize.PropTypes.localizedString,
    onLabel: Realize.PropTypes.localizedString
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.switch',
      className: 'switch',
      offLabel: 'false',
      onLabel: 'true',
      label: null
    };
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: this.props.className}, 
          React.createElement("label", null, 
            Realize.t(this.props.offLabel), 
            React.createElement("input", React.__spread({},  this.props, 
              {checked: this.state.checked, 
              value: this.state.value, 
              className: this.inputClassName(), 
              onChange: this._handleCheckboxChange, 
              type: "checkbox", 
              ref: "input"})
            ), 
            React.createElement("span", {className: "lever"}), 
            Realize.t(this.props.onLabel)
          )
        ), 
        this.renderLabel()
      )
    );
  },

  renderLabel: function() {
    if(!this.props.label) {
      return null;
    }

    return React.createElement(Label, {name: this.props.label, active: true});
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
      React.createElement("input", React.__spread({},  this.props, 
        {value: this.state.value, 
        placeholder: this.getPlaceholder(), 
        className: this.inputClassName(), 
        onChange: this._handleChange, 
        ref: "input"})
      )
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
      React.createElement("textarea", React.__spread({},  this.props, 
        {value: this.state.value, 
        placeholder: this.getPlaceholder(), 
        className: this.inputClassName(), 
        onChange: this._handleChange, 
        ref: "input"})
      )
    );
  }
});

var InputRadioGroup = React.createClass({displayName: "InputRadioGroup",
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin
  ],

  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    currentValue: React.PropTypes.string,
    withGap: React.PropTypes.string
  }, 

  getDefaultProps: function() {
    return {
      name:'',
      align: 'vertical',
      currentValue: null,
      withGap: false
    };
  },

  getInitialState: function() {
    return {
      currentValue: this.props.currentValue
    };
  },

  renderOptions: function() {
    var selectOptions = [];
    var options = this.state.options;

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      optionProps.id = this.props.name + '_' + i;
      optionProps.type = 'radio';

      if (this.state.currentValue === optionProps.value)
        optionProps.defaultChecked = optionProps.value;
      if (this.props.withGap)
        optionProps.className = 'with-gap';

      selectOptions.push(
        React.createElement("p", {key: "p_input_" + i}, 
          React.createElement("input", React.__spread({},  optionProps , {name: this.props.name})), 
          React.createElement(Label, {id: optionProps.id, label: optionProps.name})
        )
      );
    }
    return selectOptions;
  },

  render: function() {
    return (
      React.createElement("div", {className: 'input-checkbox-group align-' + this.props.align, ref: "radioGroup"}, 
        this.renderOptions()
      )
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
    includeBlank: React.PropTypes.bool,
    blankText: Realize.PropTypes.localizedString
  },

  getDefaultProps: function() {
    return {
      includeBlank: true,
      themeClassKey: 'input.select',
      blankText: 'select'
    };
  },

  render: function() {
    return (
      React.createElement("select", {
        id: this.props.id, 
        name: this.props.name, 
        value: this.selectedValue(), 
        onChange: this.handleChange, 
        disabled: this.isDisabled(), 
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
      selectOptions.push(React.createElement(InputSelectOption, {name: Realize.t(this.props.blankText), value: "", key: "empty_option"}));
    }

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      selectOptions.push(React.createElement(InputSelectOption, React.__spread({},  optionProps, {key: optionProps.name})));
    }

    return selectOptions;
  },

  selectedValue: function() {
    var value = this.state.value;
    if(!this.props.multiple) {
      value = value[0];
    }

    return value;
  },

  handleChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      var selectElement = React.findDOMNode(this.refs.select);

      this.setState({
        value: this.ensureIsArray(selectElement.value)
      }, this.triggerDependableChanged);
    }
  }

});

var InputSelectOption = React.createClass({displayName: "InputSelectOption",
  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.node
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
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      active: false,
      name: '',
      label: '',
      themeClassKey: 'label'
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.getLabelThemeClassKey(this.props)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.getLabelThemeClassKey(nextProps)
    });
  },

  getLabelThemeClassKey: function(props) {
    var themeClassKey = props.themeClassKey;
    if(props.active) {
      themeClassKey += ' label.active';
    }

    return themeClassKey;
  },

  render: function() {
    return (
      React.createElement("label", {htmlFor: this.props.id, onClick: this.props.onClick, className: this.className()}, 
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

  renderPropItems: function(){
    var menuItems = this.props.items.map(function ( item,i ) {
      return React.createElement(MenuItem, React.__spread({},  item , {key:  'menu_'+i}));
    },this);
    return menuItems;
  },
  renderChildItems: function(){
    var menuItems = React.Children.map(this.props.children, function(item) {
      if((item !== null) && (item.type.displayName = "MenuItem"))
        return item;
    });
    return menuItems;
  },

  render: function() {
    return (
      React.createElement("ul", {id: this.props.ref_id, className: this.props.className}, 
        this.renderPropItems(), 
        this.renderChildItems()
      )
    );
  }
});


var MenuItem = React.createClass({displayName: "MenuItem",
  propTypes: {
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    onClick: React.PropTypes.object,
    className: React.PropTypes.string,
    method: React.PropTypes.string,
    element: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconAlign: 'left',
      method: 'get',
      element: 'a'
    };
  },

  render: function() {
    return (
      React.createElement("li", null, 
        React.createElement(Button, React.__spread({},  this.props, {clearTheme: true, name: this.props.text}))
      )
    );
  }
});


var Modal = React.createClass({displayName: "Modal",
  mixins: [CssClassMixin],

  propTypes: {
    id: React.PropTypes.string,
    opened: React.PropTypes.bool,
    headerSize: React.PropTypes.number,
    footerSize: React.PropTypes.number,
    marginHeaderFooter:React.PropTypes.number,
    width: React.PropTypes.string,
    modalHeight: React.PropTypes.number,
    headerHeight: React.PropTypes.number,
    contentHeight: React.PropTypes.number,
    footerHeight: React.PropTypes.number,
    useAvailableHeight: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'modal',
      opened: false,
      headerSize: 50,
      footerSize: 50,
      marginHeaderFooter: 100,
      width: '60%',
      modalHeight: 0,
      headerHeight: 0,
      contentHeight: 0,
      footerHeight: 0,
      useAvailableHeight: false
    };
  },

  componentDidMount: function() {
    this.resizeContent();
    $(window).on('resize', this.resizeContent);

    if(!!this.props.opened) {
      this.openModal();
    }
  },

  componentDidUnmount: function() {
    $(window).off('resize', this.resizeContent);
  },

  componentDidUpdate: function() {
    this.resizeContent();
  },

  render: function() {
    var header = this.filterChildren(ModalHeader)? this.renderHeader() : '';
    var content = this.filterChildren(ModalContent)? this.renderContent() : '';
    var footer = this.filterChildren(ModalFooter)? this.renderFooter() : '';

    if(header == '' && content == '' && footer == '')
      content = React.createElement(ModalContent, React.__spread({},  this.propTypes), this.props.children);

    return (
      React.createElement("div", {id: this.props.id, className: this.className(), ref: "modal"}, 
        header, 
        content, 
        footer
      )
    );
  },

  renderHeader: function() {
    return (
      React.createElement("div", {ref: "headerContainer", className: "modal-header-container"}, 
        this.filterChildren(ModalHeader)
      )
    );
  },

  renderContent: function() {
    return (
      React.createElement("div", {ref: "contentContainer", className: "modal-content-container"}, 
        this.filterChildren(ModalContent)
      )
    );
  },

  renderFooter: function() {
    return (
      React.createElement("div", {ref: "footerContainer", className: "modal-footer-container"}, 
        this.filterChildren(ModalFooter)
      )
    );
  },

  openModal: function() {
    var $modal = $(React.findDOMNode(this.refs.modal));

    $modal.openModal({
      ready: this.resizeContent
    });
  },

  resizeContent: function() {
    var modal = React.findDOMNode(this.refs.modal);
    var contentContainer = React.findDOMNode(this.refs.contentContainer);

    $(modal).css("max-height", $(window).height() - (this.props.marginHeaderFooter));
    $(modal).css("width", this.props.width);

    var availableHeight = this.getAvailableHeight();
    var contentHeight = this.getContentHeight();
    var containerHeight = 0;
    if(!!this.props.useAvailableHeight) {
      containerHeight = availableHeight;
    } else {
      containerHeight = Math.min(availableHeight, contentHeight);
    }

    $(contentContainer).css("height", containerHeight);
  },

  getAvailableHeight: function() {
    var headerContainer = React.findDOMNode(this.refs.headerContainer);
    var footerContainer = React.findDOMNode(this.refs.footerContainer);

    return ($(window).height() - (this.props.marginHeaderFooter)) - ($(headerContainer).height() + $(footerContainer).height());
  },

  getContentHeight: function() {
    var contentContainer = React.findDOMNode(this.refs.contentContainer);
    var contentHeight = 0;
    $(contentContainer).find("> *").each(function(i, content) {
      contentHeight += $(content).outerHeight();
    });

    return contentHeight;
  },



  filterChildren : function(area) {
    var result = null;
    React.Children.map(this.props.children, function(x) {
      if (x.type == area)
        result =  x;
    });

    return result;
  }

});










var ModalButton = React.createClass({displayName: "ModalButton",
  mixins: [CssClassMixin],

  propTypes: {
    top: React.PropTypes.number,
    modalId: React.PropTypes.string,
    dismissible: React.PropTypes.bool,
    opacity: React.PropTypes.number,
    inDuration: React.PropTypes.number,
    outDuration: React.PropTypes.number,
    ready: React.PropTypes.func,
    complete: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      top: 0,
      modalId: '',
      dismissible: true,
      className: 'btn',
      opacity: 0.4,
      inDuration: 300,
      outDuration: 200,
      ready: function() { return true; },
      complete: function() { return true; }
    };
  },

  render: function() {
    return (
      React.createElement(Button, React.__spread({},  this.props, {className: this.getClassName(), href: "#!", onClick: this.openModal, ref: "modalButton"}))
    );
  },

  getClassName: function() {
    var className = this.className();
    if (this.props.disabled && this.props.element === 'a')
      className = 'button btn-flat disable-action-button';

    return className;
  },

  getModalToOpen: function() {
    return $("#" + this.props.modalId);
  },

  openModal: function(event) {
    event.nativeEvent.preventDefault();
    event.stopPropagation();
    event.preventDefault();

    $modalToOpen = this.getModalToOpen();
    $modalToOpen.openModal({
      top:this.props.top,
      dismissible: this.props.dismissible, // Modal can be dismissed by clicking outside of the modal
      opacity: this.props.opacity, // Opacity of modal background
      inDuration: this.props.inDuration, // Transition in duration
      outDuration: this.props.outDuration, // Transition out duration
      ready: this.handleReady, // Callback for Modal open
      complete: this.handleComplete // Callback for Modal close,
    });
  },

  handleReady: function() {
    $modalToOpen = this.getModalToOpen();
    $modalToOpen.trigger('resize');

    if(typeof this.props.ready === "function") {
      this.props.ready();
    }
  },

  handleComplete: function() {
    if(typeof this.props.complete === "function") {
      this.props.complete();
    }
  }

});

var ModalContent  = React.createClass({displayName: "ModalContent",
  mixins: [CssClassMixin],
  getDefaultProps: function() {
    return {
      themeClassKey: 'modal.content'
    };
  },
  render: function() {
    return React.createElement("div", {className: this.getClassName()}, this.props.children);
  },

  getClassName: function() {
    return Realize.themes.getCssClass(this.props.themeClassKey);
  }

});

var ModalFooter = React.createClass({displayName: "ModalFooter",
  mixins: [CssClassMixin],

  propTypes: {
    separatorThemeClassKey: React.PropTypes.string,
    withSeparator: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'modal.footer',
      separatorThemeClassKey: 'modal.footer.withSeparator',
      withSeparator: true
    };
  },

  render: function() {
    return React.createElement("div", {className: this.footerClassName()}, this.props.children);
  },

  footerClassName: function() {
    var className = this.className();
    if(this.props.withSeparator) {
      className += " " + Realize.themes.getCssClass(this.props.separatorThemeClassKey);
    }

    return className;
  }
});
var ModalHeader = React.createClass({displayName: "ModalHeader",
  mixins: [CssClassMixin],

  propTypes: {
    withTitle: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'modal.header',
      withTitle: true
    };
  },

  render: function() {
    return React.createElement("div", {className: this.getClassName()}, this.props.children);
  },

  getClassName: function() {
    var className = Realize.themes.getCssClass(this.props.themeClassKey);
    if(!this.props.clearTheme && this.props.withTitle) {
      className += ' '+ Realize.themes.getCssClass('modal.header.withTitle');
    }

    return className;
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
    resource: React.PropTypes.string,
    columns: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectedRowIdsParam: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    count: React.PropTypes.number,
    selectedRowIds: React.PropTypes.array,
    allSelected: React.PropTypes.bool,
    allSelectedData: React.PropTypes.object,
    emptyMessage: Realize.PropTypes.localizedString,
    actionButtons: React.PropTypes.object,
    onSort: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table',
      columns: {},
      dataRowIdField: 'id',
      selectedRowIdsParam: 'rowIds',
      selectable: false,
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      sortData: {},
      dataRows: [],
      count: 0,
      selectedRowIds: null,
      allSelected: null,
      allSelectedData: {},
      emptyMessage: 'table.emptyResult',
      actionButtons: {
        member: [],
        collection: []
      },
      onSort: function(sortData) {},
      onSelect: function(event, selectedRowIds) {},
      onRemoveSelection: function(event) {},
      onSelectAll: function(event) {},
      rowSelectableFilter: null
    };
  },

  getInitialState: function() {
    return {
      selectedRowIds: this.props.selectedRowIds || [],
      allSelected: this.props.allSelected
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var selectedRowIds = nextProps.selectedRowIds;
    var allSelected = nextProps.allSelected;

    if(!!selectedRowIds && $.isArray(selectedRowIds)) {
      this.setState({selectedRowIds: selectedRowIds});
    }

    if(allSelected !== null && allSelected !== undefined) {
      this.setState({allSelected: allSelected});
    }
  },

  componentDidMount: function () {
    if(!!this.props.customTableHeader)
    {
      var $thead = $(React.findDOMNode(this.refs.thead));
      $thead.prepend(this.props.customTableHeader)
    }
  },

  render: function() {
    return(
      React.createElement("div", {className: this.wrapperClassName()}, 
        this.renderActions(), 
        React.createElement("table", {className: this.className()}, 
          React.createElement("thead", {ref: "thead"}, 
            React.createElement("tr", null, 
              this.renderHeaderSelectCell(), 
              this.renderTableHeaders()
            )
          ), 
          React.createElement("tbody", null, 
            (this.props.dataRows.length > 0) ? this.renderTableRows() : this.renderEmptyMessage()
          )
        )
      )
    );
  },

  renderCustomTableHeader : function () {

  },

  wrapperClassName: function() {
    var wrapperClassName = '';
    if(!this.props.clearTheme) {
      wrapperClassName = Realize.themes.getCssClass('table.wrapper');
    }

    return wrapperClassName;
  },

  renderActions: function() {
    return (
      React.createElement(TableActions, {
        dataRows: this.state.dataRows, 
        selectedRowIds: this.state.selectedRowIds, 
        selectedRowIdsParam: this.props.selectedRowIdsParam, 
        allSelected: this.state.allSelected, 
        allSelectedData: this.props.allSelectedData, 
        count: this.props.count, 
        onRemoveSelection: this.removeSelection, 
        onSelectAll: this.selectAllRows, 
        actionButtons: this.props.actionButtons.collection || [], 
        rowSelectableFilter: this.props.rowSelectableFilter}
      )
    );
  },

  renderHeaderSelectCell: function() {
    if(!this.props.selectable) {
      return '';
    }

    return (
      React.createElement(TableSelectCell, {
        onSelectToggle: this.toggleDataRows, 
        dataRowIds: this.getDataRowIds(), 
        selected: this.isAllDataRowsSelected(), 
        rowId: "all", 
        cellElement: "th", 
        key: "header_select"}
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
            resource: this.props.resource, 
            onSort: this.props.onSort, 
            clearTheme: this.props.clearTheme})
            )
        );
      }
    }

    return headerComponents;
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
      rowComponents.push(
        React.createElement(TableRow, React.__spread({}, 
          this.propsWithoutCSS(), 
          {onSelectToggle: this.toggleDataRows, 
          selected: this.dataRowIsSelected(dataRow), 
          data: dataRow, 
          actionButtons: this.props.actionButtons.member || [], 
          key: "table_row_" + i, 
          rowSelectableFilter: this.props.rowSelectableFilter})
        )
      );
    }

    return rowComponents;
  },

  renderEmptyMessage: function() {
    var columnsCount = 0;
    for(var key in this.props.columns) {
      columnsCount++;
    }

    if(this.props.selectable) {
      columnsCount++;
    }

    return (
      React.createElement("tr", null, 
        React.createElement("td", {colSpan: columnsCount, className: "empty-message"}, 
          Realize.t(this.props.emptyMessage)
        )
      )
    );
  },

  getDataRowIds: function() {
    var rowSelectableFilter = this.props.rowSelectableFilter;
    var selectableDataRows = $.grep(this.props.dataRows, function(dataRow) {
      return !rowSelectableFilter || !!rowSelectableFilter(dataRow);
    });

    return $.map(selectableDataRows, function(dataRow) {
      return dataRow[this.props.dataRowIdField];
    }.bind(this));
  },

  toggleDataRows: function(event, dataRowIds, selected) {
    var selectedRowIds = [];
    if(selected) {
      selectedRowIds = this.addSelectedDataRows(dataRowIds);
    } else {
      selectedRowIds = this.removeSelectedDataRows(dataRowIds);
    }

    this.props.onSelect(event, selectedRowIds);
    if(!event.isDefaultPrevented()) {
      this.setState({
        selectedRowIds: selectedRowIds,
        allSelected: false
      });
    }
  },

  addSelectedDataRows: function(dataRowIds) {
    var selectedRowIds = this.state.selectedRowIds.slice();
    $.each(dataRowIds, function(i, dataRowId) {
      if($.inArray(dataRowId, selectedRowIds) < 0) {
        selectedRowIds.push(dataRowId);
      }
    });

    return selectedRowIds;
  },

  removeSelectedDataRows: function(dataRowIds) {
    return $.grep(this.state.selectedRowIds, function(dataRowId) {
      return ($.inArray(dataRowId, dataRowIds) < 0);
    }.bind(this));
  },

  dataRowIsSelected: function(dataRow) {
    var dataRowId = dataRow[this.props.dataRowIdField];
    return (($.inArray(dataRowId, this.state.selectedRowIds) >= 0) || this.props.allSelected);
  },

  isAllDataRowsSelected: function() {
    var dataRowIds = this.getDataRowIds();
    var selectedRowIdsInPage = $.grep(this.state.selectedRowIds, function(selectedDataRowId) {
      return ($.inArray(selectedDataRowId, dataRowIds) >= 0);
    });

    return ((dataRowIds.length > 0 && (dataRowIds.length == selectedRowIdsInPage.length)) || this.props.allSelected);
  },

  removeSelection: function(event) {
    this.props.onRemoveSelection(event);

    if(!event.isDefaultPrevented()) {
      this.setState({
        selectedRowIds: [],
        allSelected: false
      });
    }
  },

  selectAllRows: function(event) {
    this.props.onSelectAll(event);

    if(!event.isDefaultPrevented()) {
      this.setState({
        allSelected: true
      });
    }
  }
});

var TableActionButton = React.createClass({displayName: "TableActionButton",
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    selectedRowIds: React.PropTypes.array,
    selectedRowIdsParam: React.PropTypes.string,
    allSelected: React.PropTypes.bool,
    allSelectedData: React.PropTypes.object,
    count: React.PropTypes.number,
    actionUrl: React.PropTypes.string,
    method: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    selectionContext: React.PropTypes.oneOf(['none', 'atLeastOne']),
    conditionToShowActionButton: React.PropTypes.func,
    component: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      selectedRowIds: [],
      allSelected: false,
      method: null,
      conditionParams: null,
      disabled: false,
      selectionContext: 'none',
      component: null,
      conditionToShowActionButton: function(data) { return true }
    };
  },

  render: function() {
    return (
      React.createElement("span", null, 
        this.renderButton()
      )
    );
  },

  renderButton: function(){
    var component = [];
    if (this.props.conditionToShowActionButton(this.props.conditionParams))
      if(!!this.props.component){
        return React.createElement(eval(this.props.component), this.props)
      } else {
        component.push(
          React.createElement(Button, React.__spread({},  this.props, 
            {isLoading: this.state.isLoading, 
            disabled: this.isDisabled(), 
            method: this.actionButtonMethod(), 
            href: this.actionButtonHref(), 
            onClick: this.actionButtonClick, 
            key: this.props.name})
          )
        );
      }

    return component;
  },

  isDisabled: function() {
    if(!!this.props.disabled || !!this.state.isLoading) {
      return true;
    }

    var selectionContext = this.props.selectionContext;
    if (selectionContext === 'none') {
      return false;
    } else if (selectionContext === 'atLeastOne') {
      return (this.props.selectedRowIds.length === 0) ;
    }

    return false;
  },

  actionButtonMethod: function() {
    var buttonHref = this.props.href;
    if(!buttonHref) {
      return null;
    }

    return this.props.method;
  },

  actionButtonHref: function() {
    var buttonHref = this.props.href;
    if(!buttonHref) {
      return '#!';
    }

    var selectedData = this.getSelectedData();
    return (buttonHref + '?' + $.param(selectedData));
  },

  actionButtonClick: function(event) {
    if(this.isDisabled()) {
      return;
    }

    var buttonOnClick = this.props.onClick;
    var buttonAction = this.props.actionUrl;
    var selectedData = this.getSelectedData();

    if($.isFunction(buttonOnClick)) {
      buttonOnClick(event, selectedData);
    } else if(!!buttonAction) {
      this.performRequest(buttonAction, selectedData, this.props.method);
    }
  },

  getSelectedData: function() {
    var selectedData = {};
    if(this.props.allSelected && !!this.props.allSelectedData && !$.isEmptyObject(this.props.allSelectedData)) {
      selectedData = this.props.allSelectedData;
    } else {
      selectedData[this.props.selectedRowIdsParam] = this.props.selectedRowIds;
    }

    return selectedData;
  }
});

var TableActions = React.createClass({displayName: "TableActions",
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: React.PropTypes.array,
    selectedRowIds: React.PropTypes.array,
    selectedRowIdsParam: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    allSelected: React.PropTypes.bool,
    count: React.PropTypes.number,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.actions',
      actionButtons: [],
      selectedRowIds: [],
      allSelected: false,
      rowSelectableFilter: null,
      onRemoveSelection: function(event) {},
      onSelectAll: function(event) {}
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        React.createElement("div", null, 
          React.createElement(TableSelectionIndicator, React.__spread({},  this.propsWithoutCSS())), 
          this.renderButtons()
        )
      )
    );
  },

  renderButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(
        React.createElement(TableActionButton, React.__spread({}, 
          actionButtonProps, 
          this.propsWithoutCSS(), 
          {element: "a", 
          themeClassKey: "button.flat", 
          key: "action_" + i})
        )
      );
    }

    return actionButtons;
  }
});

var TableCell = React.createClass({displayName: "TableCell",
  mixins: [CssClassMixin],

  propTypes: {
    name: React.PropTypes.string,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    value: React.PropTypes.func,
    format: React.PropTypes.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime'])
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.cell',
      format: 'text',
      data: {}
    };
  },

  render: function() {
    return (
      React.createElement("td", {className: this.cellClassName()}, 
        this.renderValue()
      )
    );
  },

  cellClassName: function() {
    var className = this.className();
    if(!!this.props.format) {
      className += ' table-cell--' + this.props.format;
    }

    if(!!this.props.name) {
      className += ' table-cell--' + this.props.name;
    }

    return className;
  },

  renderValue: function() {

    var format = this.props.format;
    var customValue = this.props.value;
    var dataValue = this.props.data[this.props.name];

    var value = null;

    if(!!customValue) {
      value = customValue(this.props.data, this.props);
    } else if(dataValue === null || dataValue === undefined) {
      value = '-';
    } else {
      try {
        value = this[format + "Value"](dataValue);
      } catch(err) {
        value = this.textValue(dataValue);
      }
    }

    if(!!this.props.component){
      return React.createElement(eval(this.props.component), $.extend({}, this.props, {value: value}));
    }
    else {
      return value;
    }

  },

  textValue: function(value) {
    return value;
  },

  numberValue: function(value) {
    value = parseFloat(value);
    return numeral(value).format('0,0.[000]');
  },

  percentageValue: function(value) {
    value = parseFloat(value);
    if(value > 1.0 || value < -1.0) {
      value = value / 100.0;
    }

    return numeral(value).format('0.0%');
  },

  currencyValue: function(value) {
    value = parseFloat(value);
    return numeral(value).format('$ 0,0.00');
  },

  booleanValue: function(value) {
    return Realize.t(String(value));
  },

  dateValue: function(value) {
    value = moment(value);
    return value.format("DD/MM/YYYY");
  },

  datetimeValue: function(value) {
    value = moment(value);
    return value.format("DD/MM/YYYY HH:mm");
  }
});

var TableHeader = React.createClass({displayName: "TableHeader",
  mixins: [CssClassMixin, LocalizedResourceFieldMixin],

  propTypes: {
    label: Realize.PropTypes.localizedString,
    format: React.PropTypes.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime']),
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
      React.createElement("th", {className: this.headerClassName()}, 
        React.createElement("span", {onClick: this.sortColumn, className: this.labelClassName()}, 
          this.getLabel()
        )
      )
    );
  },

  headerClassName: function() {
    var className = this.className();
    if(!!this.props.format) {
      className += ' table-header--' + this.props.format;
    }

    return className;
  },

  getLabel: function() {
    if(!!this.props.label && this.props.label.length > 0) {
      return Realize.t(this.props.label);
    }

    return this.localizeResourceField();
  },

  labelClassName: function() {
    var className = '';

    if(!this.props.clearTheme) {
      className += Realize.themes.getCssClass('table.header.label');
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
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    actionButtons: React.PropTypes.array,
    rowSelectableFilter: React.PropTypes.func,
    onSelectToggle: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      columns: {},
      data: {},
      dataRowIdField: 'id',
      selectable: true,
      selected: false,
      actionButtons: [],
      themeClassKey: 'table.row',
      rowSelectableFilter: null,
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },


  render: function() {
    return (
      React.createElement("tr", {className: this.className(), ref: "row"}, 
        this.renderSelectCell(), 
        this.renderCells(), 
        this.renderActionsCell()
      )
    );
  },

  renderSelectCell: function() {
    if(!this.props.selectable) {
      return '';
    }

    var rowSelectableFilter = this.props.rowSelectableFilter;
    if(typeof rowSelectableFilter === "function" && !rowSelectableFilter(this.props.data)) {
      return React.createElement("td", null);
    }

    return (
      React.createElement(TableSelectCell, {
        onSelectToggle: this.props.onSelectToggle, 
        dataRowIds: [this.getDataRowId()], 
        rowId: String(this.getDataRowId()), 
        selected: this.props.selected, 
        key: "select"}
      )
    );
  },

  renderCells: function() {
    var columns = this.props.columns;
    var cellComponents = [];

    $.each(columns, function(columnName, columnProps) {
      cellComponents.push(
        React.createElement(TableCell, React.__spread({},  columnProps, 
          this.propsWithoutCSS(), 
          {name: columnName, 
          key: columnName})
        )
      );
    }.bind(this));

    return cellComponents;
  },

  renderActionsCell: function() {
    if(!$.isArray(this.props.actionButtons) || this.props.actionButtons.length === 0) {
      return '';
    }

    return React.createElement(TableRowActions, React.__spread({},  this.propsWithoutCSS(), {ref: "actions"}));
  },

  getDataRowId: function() {
    return this.props.data[this.props.dataRowIdField];
  }

});

var TableRowActionButton = React.createClass({displayName: "TableRowActionButton",
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    data: React.PropTypes.object,
    dataRowFieldId: React.PropTypes.string,
    count: React.PropTypes.number,
    actionUrl: React.PropTypes.string,
    method: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    conditionToShowActionButton: React.PropTypes.func,
    component: React.PropTypes.string,
    element: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      data: {},
      dataRowFieldId: 'id',
      method: null,
      conditionParams: null,
      disabled: false,
      component: null,
      element: 'a',
      themeClassKey: 'button.flat',
      conditionToShowActionButton: function(data) { return true }
    };
  },

  render: function() {
    return (
      React.createElement("span", null, 
        this.renderButton()
      )
    );
  },

  renderButton: function(){
    var component = [];
    if (this.props.conditionToShowActionButton(this.props.conditionParams))
      if(!!this.props.component){
        return React.createElement(eval(this.props.component), this.props)
      } else {
        component.push(
          React.createElement(Button, React.__spread({},  this.props, 
            {method: this.actionButtonMethod(), 
            href: this.actionButtonHref(), 
            onClick: this.actionButtonClick, 
            key: "button"})
          )
        );
      }

    return component;
  },

  actionButtonMethod: function() {
    var buttonHref = this.props.href;
    if(!buttonHref) {
      return null;
    }

    return this.props.method;
  },

  actionButtonHref: function() {
    var buttonHref = this.props.href;
    if(!!buttonHref) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonHref = buttonHref.replace(/:id/, dataRowId);
    }

    return buttonHref;
  },

  actionButtonClick: function(event) {
    var buttonOnClick = this.props.onClick;
    var buttonAction = this.props.actionUrl;

    if($.isFunction(buttonOnClick)) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonOnClick(event, dataRowId, this.props.data);
    } else if(!!buttonAction) {
      var actionData = this.getActionData(this.props);
      this.performRequest(buttonAction, actionData, (this.props.method || 'POST'));
    }
  },

  getActionData: function() {
    var dataIdParam = this.props.dataIdParam || 'id';
    var dataRowId = this.props.data[this.props.dataRowIdField];
    var actionData = {};

    actionData[dataIdParam] = dataRowId;
    return actionData;
  }

});

var TableRowActions = React.createClass({displayName: "TableRowActions",
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    conditionParams: React.PropTypes.object,
    component: React.PropTypes.string,
    paramsToComponent: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      data: {},
      dataRowIdField: 'id',
      actionButtons: [],
      themeClassKey: 'table.row.actions',
      conditionParams: {},
      component: null,
      paramsToComponent: {}
    };
  },

  render: function() {
    return (
      React.createElement("td", {className: this.className()}, 
        this.renderButtons()
      )
    );
  },

  renderButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      var conditionToShowFunction = actionButtonProps.conditionToShowActionButton;

      if(!conditionToShowFunction || actionButtonProps.conditionToShowActionButton(actionButtonProps.conditionParams)) {
        if(!!actionButtonProps.component) {
          return React.createElement(eval(actionButtonProps.component), $.extend({}, this.props, actionButtonProps.paramsToComponent))
        } else {
          actionButtons.push(
            React.createElement(TableRowActionButton, React.__spread({key: "action_" + i},  actionButtonProps, {dataRowIdField: this.props.dataRowIdField, data: this.props.data}))
          );
        }
      }
    }

    return actionButtons;
  }
});

var TableSelectCell = React.createClass({displayName: "TableSelectCell",
  mixins: [CssClassMixin, UtilsMixin],

  propTypes: {
    rowId: React.PropTypes.string,
    cellElement: React.PropTypes.string,
    dataRowIds: React.PropTypes.array,
    selected: React.PropTypes.bool,
    onSelectToggle: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.select',
      rowId: '',
      cellElement: 'td',
      dataRowIds: [],
      selected: false,
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },

  render: function() {
    return (
      React.createElement(this.props.cellElement,
        { className: this.className() },
        [
          React.createElement(InputCheckbox, {id: this.getCheckboxId(), checked: this.props.selected, key: this.generateUUID()}),
          React.createElement(Label, {id: this.getCheckboxId(), key: "label", onClick: this.handleChange})
        ]
      )
    );
  },

  getCheckboxId: function() {
    return "select_" + String(this.props.rowId);
  },

  handleChange: function(event) {
    this.props.onSelectToggle(event, this.props.dataRowIds, !this.props.selected);
  },

  handleClick: function(event) {
    event.stopPropagation();
  }
});

var TableSelectionIndicator = React.createClass({displayName: "TableSelectionIndicator",
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: React.PropTypes.array,
    selectedRowIds: React.PropTypes.array,
    actionButtons: React.PropTypes.array,
    message: React.PropTypes.object,
    removeSelectionButtonName: Realize.PropTypes.localizedString,
    selectAllButtonName: Realize.PropTypes.localizedString,
    allSelected: React.PropTypes.bool,
    count: React.PropTypes.number,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.selectionIndicator',
      dataRows: [],
      selectedRowIds: [],
      actionButtons: [],
      message: {
        plural: 'table.selection.select.plural',
        singular: 'table.selection.select.singular'
      },
      removeSelectionButtonName: 'table.selection.clear',
      selectAllButtonName: 'table.selection.selectAll',
      allSelected: false,
      rowSelectableFilter: null,
      onRemoveSelection: function(event) {},
      onSelectAll: function(event) {}
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: this.className()}, 
        React.createElement("span", null, this.renderMessage()), " ", this.renderActions()
      )
    );
  },

  renderMessage: function() {
    var count = this.getSelectionCount();
    if(count === 0) {
      return '';
    } else if(count === 1) {
      return Realize.t(this.props.message.singular);
    } else {
      var message = Realize.t(this.props.message.plural);
      return message.replace(/:count/, count);
    }
  },

  renderActions: function() {
    var count = this.getSelectionCount();
    if(count === 0) {
      return '';
    }

    return (
      React.createElement("span", null, 
        "(", this.renderRemoveSelectionButton(), 
        this.renderSelectAllButton(), ")"
      )
    );
  },

  renderRemoveSelectionButton: function() {
    return (
      React.createElement("a", {href: "#!", onClick: this.props.onRemoveSelection}, 
        Realize.t(this.props.removeSelectionButtonName)
      )
    );
  },

  renderSelectAllButton: function() {
    if(typeof this.props.rowSelectableFilter === "function" || this.props.allSelected) {
      return '';
    }

    return (
      React.createElement("span", null, 
        " | ", 
        React.createElement("a", {href: "#!", onClick: this.props.onSelectAll}, 
          this.getSelectAllButtonName()
        )
      )
    );
  },

  getSelectionCount: function() {
    if(this.props.allSelected && !!this.props.count) {
      return this.props.count;
    } else {
      return this.props.selectedRowIds.length;
    }
  },

  getSelectAllButtonName: function() {
    var buttonName = Realize.t(this.props.selectAllButtonName);
    var count = this.props.count || this.props.dataRows.length;

    return buttonName.replace(/:count/, count);
  }
});

var Tab = React.createClass({displayName: "Tab",
  mixins: [
    CssClassMixin,
    ContainerMixin
  ],

  propTypes: {
    id: React.PropTypes.string
  },

  render: function () {
    return (
      React.createElement("div", {id: this.props.id, className: this.className()}, 
        this.renderChildren()
      )
    );
  }
});
var TabButton = React.createClass({displayName: "TabButton",
  mixins: [
    CssClassMixin,
    ContainerMixin,
    FormContainerMixin
  ],

  propTypes: {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'tabs.tabButton',
      errorThemeClassKey: 'tabs.tabButton.error',
      className: 's1',
      active: false
    };
  },

  render: function () {
    return (
      React.createElement("li", {className: this.formContainerClassName()}, 
        React.createElement("a", {href: '#' + this.props.id, className: this.props.active ? "active" : ""}, 
          this.props.title
        )
      )
    );
  }

});
var Tabs = React.createClass({displayName: "Tabs",
  mixins: [
    CssClassMixin,
    ContainerMixin
  ],

  getDefaultProps: function() {
    return {
      themeClassKey: 'tabs',
      className: 's12'
    };
  },

  componentDidMount: function () {
    $(React.findDOMNode(this.refs.tabsContainer)).tabs();
  },

  render: function () {
    return (
      React.createElement("div", {className: this.className()}, 
        React.createElement("ul", {className: "tabs z-depth-1", ref: "tabsContainer"}, 
          this.renderTabButtons()
        ), 
        React.createElement("div", {className: "row"}, 
          this.renderChildren()
        )
      )
    );
  },

  renderTabButtons: function () {
    var tabs = [];
    var children = this.getChildren();

    React.Children.forEach(children, function(child, i) {
      var isActive = (i === 0);
      tabs.push(React.createElement(TabButton, React.__spread({},  child.props, {active: isActive, key: "tab_" + i})));
    }.bind(this));

    return tabs;
  }
});