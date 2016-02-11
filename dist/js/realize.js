/*!
 * Realize v0.7.23 (http://www.wkm.com.br)
 * Copyright 2015-2016 
 */
'use strict';

var Realize = {};

Realize.config = {
  theme: 'materialize',
  locale: 'en',
  restUrls: {
    index: ':url',
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
  },

  grid: {
    pagination: {
      param: 'p',
      perPageParam: 'per_page',
      perPage: 20,
      window: 4
    },
    sort: {
      param: 's',
      directionParam: 's_dir',
      fieldValueFormat: '%{field}',
      sortFieldName: 'name'
    }
  }
};

Realize.setConfig = function (newConfig) {
  $.extend(true, Realize.config, newConfig);
};

"use strict";

$.extend(FormSerializer.patterns, {
  validate: /^[a-z_][a-z0-9#_\.-]*(?:\[(?:\d*|[a-z0-9#_\.-]+)\])*$/i,
  key: /[a-z0-9#_\.-]+|(?=\[\])/gi,
  named: /^[a-z0-9#_\.-]+$/i
});

'use strict';

Realize.utils = {};

Realize.utils.getProp = function (key, obj) {
  var keyArr = key.split('.');
  var prop = obj;

  try {
    while (keyArr.length > 0) {
      prop = prop[keyArr.shift()];
    }
  } catch (err) {
    return '';
  }
  return prop;
};

"use strict";

Realize.PropTypes = {};

Realize.PropTypes.localizedString = function (props, propName, componentName) {
  var value = props[propName];
  if (value === null || value === undefined || typeof value === "string" && value.length === 0) {
    return null;
  }

  var translatedValue = Realize.t(value);
  if (typeof value !== "string" || typeof translatedValue !== "string" || translatedValue.length === 0) {
    return new Error('Property ' + propName + ' from ' + componentName + ' is not a localized string.');
  }
};

'use strict';

Realize.i18n = {};
Realize.i18n.locales = {};

Realize.i18n.registerLocale = function (newLocaleObj, locale) {
  if (!$.isPlainObject(newLocaleObj)) {
    throw 'Invalid Locale Object.';
  }

  if (!locale) {
    throw 'Invalid Locale Name.';
  }

  var currentLocaleObj = Realize.i18n.locales[locale] || {};
  Realize.i18n.locales[locale] = $.extend({}, currentLocaleObj, newLocaleObj);
};

Realize.i18n.setLocale = function (locale) {
  Realize.config.locale = locale;
};

Realize.i18n.translate = function (key, throwsException) {
  if (throwsException === undefined) {
    throwsException = false;
  }

  if (typeof key !== "string") {
    if (throwsException) {
      throw 'Key is not a string';
    }

    return '';
  }

  var currentLocale = Realize.config.locale;
  var localeObj = Realize.i18n.locales[currentLocale];

  var translation = Realize.utils.getProp(key, localeObj);
  if (!translation) {
    if (throwsException) {
      throw 'Key not found in locale object';
    }

    translation = key;
  }

  return translation;
};

Realize.t = Realize.i18n.translate;

'use strict';

Realize.i18n.registerLocale({
  true: 'Yes',
  false: 'No',
  ok: 'Ok',
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
    date: {
      alias: 'mm/dd/yyyy'
    },
    datetime: {
      mask: 'm/d/y h:s',
      placeholder: 'mm/dd/yyyy, hh:ss'
    },
    cpf: '999.999.999-99',
    cnpj: '99.999.999/9999-99',
    phone: '(99) 9999[9]-9999',
    integer: {
      alias: "integer"
    },
    decimal: {
      alias: "decimal",
      groupSeparator: ".",
      radixPoint: ",",
      removeMaskOnSubmit: true
    },
    currency: {
      alias: "currency",
      prefix: "$ ",
      groupSeparator: ".",
      radixPoint: ",",
      placeholder: "0",
      removeMaskOnSubmit: true
    }
  },

  inputs: {
    autocomplete: {
      emptyResult: 'No items found.',
      clear: 'Clear selected items'
    },

    datefilter: {
      from: 'From',
      to: 'To'
    },

    file: {
      buttonName: 'File'
    }
  },

  date: {
    formats: {
      default: 'MM/DD/YYYY HH:mm',
      date: 'MM/DD/YYYY'
    }
  },

  errors: {
    invalidAction: "Invalid action",
    inputSelect: {
      invalidOption: "Invalid format for select option. (Expected format: {name:\"\", value:\"\"})"
    }
  }

}, 'en');

'use strict';

Realize.i18n.registerLocale({
  true: 'Sim',
  false: 'Não',
  ok: 'Ok',
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
    date: {
      alias: 'dd/mm/yyyy'
    },
    datetime: {
      mask: 'd/m/y h:s',
      placeholder: 'dd/mm/yyyy, hh:ss'
    },
    cpf: '999.999.999-99',
    cnpj: '99.999.999/9999-99',
    phone: '(99) 9999[9]-9999',
    integer: {
      alias: "integer"
    },
    decimal: {
      alias: "decimal",
      groupSeparator: ".",
      radixPoint: ",",
      removeMaskOnSubmit: true
    },
    currency: {
      alias: "currency",
      prefix: "R$ ",
      groupSeparator: ".",
      radixPoint: ",",
      placeholder: "0",
      removeMaskOnSubmit: true
    }
  },

  inputs: {
    autocomplete: {
      emptyResult: 'Nenhum item foi encontrado.',
      clear: 'Limpar itens selecionados'
    },

    datefilter: {
      from: 'De',
      to: 'Até'
    },

    file: {
      buttonName: 'Arquivo'
    }
  },

  date: {
    formats: {
      default: 'DD/MM/YYYY HH:mm',
      date: 'DD/MM/YYYY'
    }
  },

  errors: {
    invalidAction: "Ação inválida",
    inputSelect: {
      invalidOption: "Formato inválido de opção de select (Formato esperado: {name:\"\", value:\"\"})"
    }
  }

}, 'pt-BR');

'use strict';

Realize.themes = {};

Realize.themes.getCurrent = function () {
  var defaultTheme = Realize.themes.default;
  var currentTheme = Realize.themes[Realize.config.theme];

  return $.extend({}, defaultTheme, currentTheme);
};

Realize.themes.getProp = function (key) {
  if (!key) {
    return '';
  }

  var currentTheme = this.getCurrent();
  return Realize.utils.getProp(key, currentTheme);
};

Realize.themes.getCssClass = function (keys) {
  var keysArr = keys.split(' ');
  var themeClass = "";

  while (keysArr.length > 0) {
    var key = keysArr.shift();
    var classKey = key + '.cssClass';

    themeClass += this.getProp(classKey) + ' ';
  }

  return themeClass.trim();
};

'use strict';

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

'use strict';

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
    cssClass: 'table striped',

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
      },

      oneLine: {
        cssClass: 'col s12'
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
      },

      actionButton: {
        cssClass: 'button btn waves-effect waves-light black-text grey lighten-2'
      }
    },

    checkbox: {
      cssClass: ''
    },

    switch: {
      cssClass: 'input-switch switch'
    },

    datefilter: {
      cssClass: 'input-datefilter',

      select: {
        cssClass: 'input-datefilter__select select-wrapper initialized'
      },

      body: {
        cssClass: 'input-datefilter__body z-depth-1'
      }
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
    cssClass: 'tabs-container',

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

  sidenav: {

    button: {
      cssClass: 'sidenav__button'
    }
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

"use strict";

var FormActions = Reflux.createActions(["submit", "success", "error", "reset"]);

'use strict';

var InputSelectActions = Reflux.createActions(['select', 'selectSearchValue']);

'use strict';

var ModalActions = Reflux.createActions(['open', 'openFinished', 'close']);

'use strict';

var FormStore = Reflux.createStore({
  listenables: [FormActions],
  formId: '',
  action: '',
  actionData: {},

  onSubmit: function onSubmit(formId, event, postData) {
    this.formId = formId;
    this.action = 'submit';
    this.actionData = {
      event: event,
      postData: postData
    };

    this.trigger(this);
  },

  onSuccess: function onSuccess(formId, responseData, status, xhr) {
    this.formId = formId;
    this.action = 'success';
    this.actionData = {
      responseData: responseData,
      status: status,
      xhr: xhr
    };

    this.trigger(this);
  },

  onError: function onError(formId, xhr, status, error) {
    this.formId = formId;
    this.action = 'error';
    this.actionData = {
      xhr: xhr,
      status: status,
      error: error
    };

    this.trigger(this);
  },

  onReset: function onReset(formId, event) {
    this.formId = formId;
    this.action = 'reset';
    this.actionData = {
      event: event
    };

    this.trigger(this);
  }

});

'use strict';

var InputSelectStore = Reflux.createStore({
  listenables: [InputSelectActions],

  action: '',
  inputId: '',
  selectedOption: {},

  onSelect: function onSelect(inputId, selectedOption) {
    this.action = 'Select';
    this.inputId = inputId;
    this.selectedOption = selectedOption;

    this.trigger(this);
  },

  onSelectSearchValue: function onSelectSearchValue(inputId) {
    this.action = 'SelectSearchValue';
    this.inputId = inputId;
    this.selectedOption = {};

    this.trigger(this);
  }
});

'use strict';

var ModalStore = Reflux.createStore({
  listenables: [ModalActions],
  optionProps: ['dismissible', 'opacity', 'inDuration', 'outDuration', 'ready', 'complete'],

  modalId: '',
  openerId: '',
  shouldOpen: false,
  options: {},

  onOpen: function onOpen(props) {
    this.modalId = props.modalId;
    this.openerId = props.openerId;
    this.shouldOpen = true;
    this.shouldClose = false;
    this.options = $.grep(props, (function (prop) {
      return this.optionProps.indexOf(prop) > 0;
    }).bind(this));

    this.trigger(this);
  },

  onOpenFinished: function onOpenFinished() {
    this.shouldOpen = false;

    this.trigger(this);
  },

  onClose: function onClose(props) {
    this.modalId = props.modalId;
    this.shouldOpen = false;
    this.shouldClose = true;

    this.trigger(this);
  }
});

'use strict';

var ContainerMixin = {
  propTypes: {
    forwardedProps: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      forwardedProps: {}
    };
  },

  getChildren: function getChildren() {
    return this.cloneChildrenWithProps();
  },

  renderChildren: function renderChildren() {
    return this.cloneChildrenWithProps();
  },

  filterChildren: function filterChildren(childType) {
    var result = [];
    React.Children.map(this.props.children, function (child) {
      if (!!child && child.type == childType) {
        result.push(child);
      }
    });

    return result;
  },

  cloneChildrenWithProps: function cloneChildrenWithProps(options) {
    var props = this.buildPropsToForward();

    if (!!options && !!options.childrenType) {
      return React.Children.map(this.filterChildren(options.childrenType), (function (child) {
        var forwardedProps = $.extend({}, this.props.forwardedProps, props);
        if (!child || !child.type) {
          return null;
        }

        return React.cloneElement(child, $.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
      }).bind(this));
    } else {
      return React.Children.map(this.props.children, (function (child) {
        var forwardedProps = $.extend({}, this.props.forwardedProps, props);
        if (!child || !child.type) {
          return null;
        }

        return React.cloneElement(child, $.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
      }).bind(this));
    }
  },

  buildChildPropsToKeep: function buildChildPropsToKeep(child) {
    var defaultChildProps = {};
    var keepProps = [];

    if (!!child.type.getDefaultProps) defaultChildProps = child.type.getDefaultProps();

    if ($.isArray(child.props['ignoreForwarded'])) keepProps = child.props['ignoreForwarded'];

    var newProps = {};

    for (var k in child.props) {
      if (this.childPropValueIsNotDefault(child.props[k], defaultChildProps[k]) || this.shouldKeepChildPropValueAnyway(k, keepProps)) newProps[k] = child.props[k];
    }
    return newProps;
  },

  childPropValueIsNotDefault: function childPropValueIsNotDefault(propValue, defaultPropValue) {
    return !_.isEqual(propValue, defaultPropValue);
  },

  shouldKeepChildPropValueAnyway: function shouldKeepChildPropValueAnyway(propName, keepList) {
    return keepList.indexOf(propName) >= 0;
  },

  buildPropsToForward: function buildPropsToForward() {
    var propsToForward = !!this.propsToForward ? this.propsToForward() : [];
    var forwardMapping = !!this.propsToForwardMapping ? this.propsToForwardMapping() : {};
    var props = {};

    for (var i = 0; i < propsToForward.length; i++) {
      var propToForward = propsToForward[i];

      props[propToForward] = this.props[propToForward];
    }

    return $.extend(props, forwardMapping);
  }

};

'use strict';

var CssClassMixin = {
  propTypes: {
    clearTheme: React.PropTypes.bool,
    className: React.PropTypes.string,
    themeClassKey: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      clearTheme: false
    };
  },

  themedClassName: function themedClassName(themeClassKey, className) {
    var themedClassName = '';

    if (!this.props.clearTheme && !!themeClassKey) {
      themedClassName += Realize.themes.getCssClass(themeClassKey);
    }

    if (!!className) {
      themedClassName += ' ' + className;
    }

    return themedClassName;
  },

  className: function className() {
    var themeClassKey = this.getThemeClassKey();
    var className = this.props.className;

    return this.themedClassName(themeClassKey, className);
  },

  getThemeClassKey: function getThemeClassKey() {
    var themeClassKey = this.props.themeClassKey;
    if (!!this.state && !!this.state.themeClassKey) {
      themeClassKey = this.state.themeClassKey;
    }

    return themeClassKey;
  },

  propsWithoutCSS: function propsWithoutCSS() {
    var cssProps = ['className', 'themeClassKey'];
    var props = $.extend({}, this.props);
    $.each(cssProps, (function (i, cssProp) {
      delete props[cssProp];
    }).bind(this));

    return props;
  }
};

"use strict";

var FormActionsListenerMixin = {
  propTypes: {
    onFormSubmit: React.PropTypes.func,
    onFormSuccess: React.PropTypes.func,
    onFormError: React.PropTypes.func,
    onFormReset: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onFormSubmit: null,
      onFormSuccess: null,
      onFormError: null,
      onFormReset: null
    };
  },

  getInitialState: function getInitialState() {
    return {
      formState: null
    };
  },

  componentDidMount: function componentDidMount() {
    FormStore.listen(this.formActionListener);
  },

  formActionListener: function formActionListener(formState) {
    try {
      this.executePropListener(formState);
    } catch (e) {
      this.executeComponentListener(formState);
    }
  },

  executePropListener: function executePropListener(formState) {
    var formAction = formState.action;
    var propListenerName = "onForm" + S(formAction).capitalize().s;
    var propListener = this.props[propListenerName];

    if (typeof propListener == "function") {
      propListener.apply(this, this.formActionParameters(formState));
    } else {
      throw 'Prop form listener not defined';
    }
  },

  executeComponentListener: function executeComponentListener(formState) {
    var formAction = formState.action;
    var componentListenerName = "handleForm" + S(formAction).capitalize().s;
    var componentListener = this[componentListenerName];

    if (typeof componentListener == "function") {
      componentListener.apply(this, this.formActionParameters(formState));
    }
  },

  formActionParameters: function formActionParameters(formState) {
    var formActionData = formState.actionData;
    var formId = formState.formId;

    var formActionParameters = $.map(formActionData, function (value, index) {
      return [value];
    });

    formActionParameters.unshift(formId);
    return formActionParameters;
  }

};

'use strict';

var FormContainerMixin = {
  propTypes: {
    errors: React.PropTypes.object,
    errorThemeClassKey: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      errors: {}
    };
  },

  formContainerClassName: function formContainerClassName() {
    var className = this.className();
    if (this.inputChildrenHaveErrors() || !!this.props.errors && !$.isEmptyObject(this.props.errors)) {
      className += ' ' + Realize.themes.getCssClass(this.props.errorThemeClassKey);
    }

    return className;
  },

  inputChildrenHaveErrors: function inputChildrenHaveErrors() {
    var errorIds = $.map(this.props.errors, function (error, errorId) {
      return errorId;
    });

    return this.checkInputChildrenForErrors(errorIds, this.props.children);
  },

  checkInputChildrenForErrors: function checkInputChildrenForErrors(errorIds, children) {
    var inputChildrenHaveErrors = false;

    React.Children.forEach(children, (function (child) {
      if (child.type == Input && $.inArray(child.props.id, errorIds) >= 0) {
        inputChildrenHaveErrors = true;
      } else if (child.type == InputGroup) {
        inputChildrenHaveErrors = this.checkInputGroupForErrors(errorIds, child);
      } else if (React.Children.count(child.children) > 0) {
        inputChildrenHaveErrors = this.checkInputChildrenForErrors(errorIds, child.children);
      }

      if (inputChildrenHaveErrors) {
        return false;
      }
    }).bind(this));

    return inputChildrenHaveErrors;
  },

  checkInputGroupForErrors: function checkInputGroupForErrors(errorIds, inputGroup) {
    var inputGroupHaveErrors = false;
    var inputsIds = $.map(inputGroup.props.inputs, function (inputProps) {
      return inputProps.id;
    });

    $.each(inputsIds, function (i, inputId) {
      if ($.inArray(inputId, errorIds) >= 0) {
        inputGroupHaveErrors = true;
        return false;
      }
    });

    return inputGroupHaveErrors;
  }

};

'use strict';

var FormErrorHandlerMixin = {
  propTypes: {
    errorMessage: React.PropTypes.string,
    baseErrorParam: React.PropTypes.string,
    onError: React.PropTypes.func,
    mapping: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      errorMessage: 'Por favor, verifique o(s) erro(s) abaixo.',
      baseErrorParam: 'base',
      onError: function onError(xhr, status, error) {
        return true;
      },
      mapping: true
    };
  },

  getInitialState: function getInitialState() {
    return {
      errors: {}
    };
  },

  renderFlashErrors: function renderFlashErrors() {
    if ($.isEmptyObject(this.state.errors)) {
      return '';
    }

    return React.createElement(Flash, { type: 'error', message: this.flashErrorMessage(), dismissed: false });
  },

  clearErrors: function clearErrors() {
    this.setState({ errors: {} });
  },

  handleError: function handleError(xhr, status, error) {
    this.setState({ isLoading: false });

    FormActions.error(this.props.id, xhr, status, error);
    if (this.props.onError(xhr, status, error)) {
      if (xhr.status === 422) {
        this.handleValidationError(xhr);
      }
    }
  },

  handleValidationError: function handleValidationError(xhr) {
    this.setState({ errors: this.getMappingErrors(xhr.responseText) });
  },

  getMappingErrors: function getMappingErrors(error) {
    var errors = JSON.parse(error);
    if (this.props.mapping) {
      var mappingErrors = {};

      for (var property in errors) {
        var key = property.split('.').pop();
        mappingErrors[key] = errors[property];
      }

      return mappingErrors;
    } else {
      return errors;
    }
  },

  flashErrorMessage: function flashErrorMessage() {
    return React.createElement(
      'div',
      null,
      this.props.errorMessage,
      this.baseErrorsList()
    );
  },

  baseErrorsList: function baseErrorsList() {
    var baseErrors = this.state.errors[this.props.baseErrorParam];
    var baseErrorsListComponents = [];
    if (!baseErrors) {
      return '';
    }

    for (var i = 0; i < baseErrors.length; i++) {
      var baseError = baseErrors[i];
      baseErrorsListComponents.push(React.createElement(
        'li',
        { key: baseError },
        baseError
      ));
    }

    return React.createElement(
      'ul',
      null,
      baseErrorsListComponents
    );
  }
};

'use strict';

var FormSuccessHandlerMixin = {
  propTypes: {
    onSuccess: React.PropTypes.func,
    successMessage: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onSuccess: function onSuccess(data, status, xhr) {
        return true;
      },
      successMessage: ''
    };
  },

  getInitialState: function getInitialState() {
    return {
      showSuccessFlash: false
    };
  },

  renderFlashSuccess: function renderFlashSuccess() {
    if (!this.state.showSuccessFlash) {
      return '';
    }

    return React.createElement(Flash, { type: 'success', message: this.props.successMessage, dismissed: false });
  },

  handleSuccess: function handleSuccess(data, status, xhr) {
    var showSuccessFlash = !!this.props.successMessage && this.props.successMessage.length > 0;
    this.setState({
      isLoading: false,
      errors: {},
      showSuccessFlash: showSuccessFlash
    });

    FormActions.success(this.props.id, data, status, xhr);
    if (this.props.onSuccess(data, status, xhr)) {
      if (xhr.getResponseHeader('Content-Type').match(/text\/javascript/)) {
        eval(data);
      }
    }
  }
};

'use strict';

var GridActionsMixin = {
  propTypes: {
    actionButtons: React.PropTypes.object,
    rowHref: React.PropTypes.string,
    haveShowAction: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      actionButtons: null,
      rowHref: null,
      haveShowAction: false
    };
  },

  getRowHref: function getRowHref() {
    var rowHref = this.props.rowHref;
    var haveShowAction = this.props.haveShowAction;
    if (!haveShowAction || !!rowHref && typeof rowHref == "string") {
      return rowHref;
    }

    return this.getRestActionUrl('show');
  },

  getActionButtons: function getActionButtons() {
    var actionButtons = this.props.actionButtons || {};

    if (!actionButtons.member) {
      actionButtons.member = this.getDefaultMemberActionButtons();
    }

    if (!actionButtons.collection) {
      actionButtons.collection = this.getDefaultCollectionActionButtons();
    }

    return actionButtons;
  },

  getMemberActionButtons: function getMemberActionButtons() {
    if ($.isPlainObject(this.props.actionButtons) && !!this.props.actionButtons.member) {
      return this.props.actionButtons.member;
    } else {
      return this.getDefaultMemberActionButtons();
    }
  },

  getDefaultMemberActionButtons: function getDefaultMemberActionButtons() {
    var actions = [{
      icon: 'edit',
      href: this.getRestActionUrl('edit')
    }, {
      icon: 'destroy',
      method: this.getRestActionMethod('destroy'),
      actionUrl: this.getRestActionUrl('destroy'),
      confirmsWith: this.props.destroyConfirm
    }];

    if (this.props.haveShowAction) {
      actions.unshift({
        icon: 'search',
        href: this.getRestActionUrl('show')
      });
    }

    return actions;
  },

  getCollectionActionButtons: function getCollectionActionButtons() {
    if ($.isPlainObject(this.props.actionButtons) && !!this.props.actionButtons.collection) {
      return this.props.actionButtons.collection;
    } else {
      return this.getDefaultCollectionActionButtons();
    }
  },

  getDefaultCollectionActionButtons: function getDefaultCollectionActionButtons() {
    return [{
      name: 'actions.new',
      context: 'none',
      href: this.getRestActionUrl('add')
    }];
  }
};

'use strict';

var CheckboxComponentMixin = {
  propTypes: {
    checked: React.PropTypes.bool,
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      renderAsIndeterminate: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      checked: this.getInitialChecked()
    };
  },

  componentDidMount: function componentDidMount() {
    var inputNode = ReactDOM.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;

    var $form = $(inputNode.form);
    $form.on('reset', this._handleCheckboxReset);
  },

  componentWillUnmount: function componentWillUnmount() {
    var inputNode = ReactDOM.findDOMNode(this.refs.input);
    var $form = $(inputNode.form);
    $form.off('reset', this._handleCheckboxReset);
  },

  valueIsBoolean: function valueIsBoolean() {
    var value = this.props.value;
    return typeof value === "boolean" || value === 0 || value === 1;
  },

  getInitialChecked: function getInitialChecked() {
    var checked = this.props.checked;
    if (checked !== null && this.props.checked !== undefined) {
      return checked;
    }

    if (this.valueIsBoolean()) {
      return !!this.props.value;
    }

    return false;
  },

  /* Event handlers */

  _handleCheckboxReset: function _handleCheckboxReset(event) {
    if (this.isMounted()) {
      this.setState({
        checked: this.getInitialChecked()
      });
    }
  },

  _handleCheckboxChange: function _handleCheckboxChange(event) {
    this.props.onChange(event);

    if (!event.isDefaultPrevented()) {
      var newState = { checked: event.target.checked };
      if (this.valueIsBoolean()) {
        newState.value = event.target.checked;
      }

      this.setState(newState);
    }
  }
};

'use strict';

var InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    placeholder: Realize.PropTypes.localizedString,
    errors: React.PropTypes.node,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      value: null,
      disabled: false,
      readOnly: false,
      onChange: function onChange(event) {
        return true;
      },
      onFocus: function onFocus(event) {
        return true;
      },
      errors: []
    };
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },

  componentDidMount: function componentDidMount() {
    var $form = $(this.getInputFormNode());
    $form.on('reset', this._handleReset);
  },

  componentWillUnmount: function componentWillUnmount() {
    var $form = $(this.getInputFormNode());
    $form.off('reset', this._handleReset);
  },

  getInputFormNode: function getInputFormNode() {
    var inputRef = this.refs.input;
    if (!!inputRef) {
      return ReactDOM.findDOMNode(inputRef).form;
    }

    return null;
  },

  _handleReset: function _handleReset(event) {
    if (this.isMounted() && !this.inputNodeIsCheckbox()) {
      this.setState({
        value: ''
      });
    }
  },

  _handleChange: function _handleChange(event) {
    this.props.onChange(event);

    if (!event.isDefaultPrevented()) {
      var value = event.target.value;
      this.setState({ value: value });
    }
  },

  _handleFocus: function _handleFocus(event) {
    this.props.onFocus(event);

    if (this.props.readOnly) {
      var inputNode = event.currentTarget;
      inputNode.blur();
    }
  },

  inputClassName: function inputClassName() {
    var className = this.className();
    var errors = this.props.errors;

    if (!!errors && errors.length > 0) {
      className += ' ' + Realize.themes.getCssClass('input.error');
    }

    return className;
  },

  getPlaceholder: function getPlaceholder() {
    var placeholder = Realize.t(this.props.placeholder);
    if (typeof placeholder !== "string" || placeholder.length === 0) {
      return null;
    }

    return placeholder;
  },

  inputNodeIsCheckbox: function inputNodeIsCheckbox() {
    var inputNode = ReactDOM.findDOMNode(this.refs.input);
    return !!inputNode && inputNode.type === "checkbox";
  }

};

"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var InputSelectActionsListenerMixin = {
  componentDidMount: function componentDidMount() {
    InputSelectStore.listen(this.inputSelectActionListener);
  },

  inputSelectActionListener: function inputSelectActionListener(storeState) {
    var changedInputId = storeState.inputId;

    if (this.isChangedInput(changedInputId)) {
      var action = storeState.action;
      var actionFunctionName = "handle" + action + "Action";
      this[actionFunctionName](storeState);
    }
  },

  isChangedInput: function isChangedInput(changedInputId) {
    var originalId = this.props.originalId;
    var id = this.props.id;

    return !!originalId && originalId == changedInputId || !!id && id == changedInputId;
  },

  handleSelectAction: function handleSelectAction(storeState) {
    var selectedOption = storeState.selectedOption;
    this.validateSelectedOption(selectedOption);

    this.setState({
      optionsCache: this.cacheSelectedOption(selectedOption),
      value: [selectedOption.value]
    });
  },

  handleSelectSearchValueAction: function handleSelectSearchValueAction(storeState) {
    var searchValue = this.state.searchValue;
    if (typeof searchValue != "string") {
      throw new Error(Realize.t("errors.invalidAction"));
    }

    storeState.selectedOption = {
      name: searchValue,
      value: searchValue
    };

    this.handleSelectAction(storeState);
    if (typeof this.hideResult == "function") {
      this.hideResult();
    }
  },

  validateSelectedOption: function validateSelectedOption(selectedOption) {
    if ((typeof selectedOption === "undefined" ? "undefined" : _typeof(selectedOption)) != "object" || !selectedOption.name || !selectedOption.value) {
      throw new Error(Realize.t("errors.inputSelect.invalidOption"));
    }
  },

  cacheSelectedOption: function cacheSelectedOption(selectedOption) {
    if (typeof this.cacheOptions == "function") {
      return this.cacheOptions([selectedOption]);
    }
    return this.state.optionsCache;
  }
};

'use strict';

var MaterializeSelectMixin = {
  componentDidMount: function componentDidMount() {
    this.applyMaterialize(true);
  },

  componentDidUpdate: function componentDidUpdate(previousProps, previousState) {
    if (this.state.options != previousState.options) {
      this.applyMaterialize();
    }
  },

  applyMaterialize: function applyMaterialize(onMount) {
    var selectElement = ReactDOM.findDOMNode(this.refs.select);
    $(selectElement).material_select(this.handleChangeMaterialize.bind(this, selectElement));

    if (!onMount) {
      this.handleChangeMaterialize(selectElement);
    }
  },

  handleChangeMaterialize: function handleChangeMaterialize(selectElement) {
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

'use strict';

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
    onLoadError: React.PropTypes.func,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dependsOn: null,
      optionsParam: null,
      nameField: 'name',
      valueField: 'id',
      options: [],
      multiple: false,
      onSelect: null,
      onLoad: function onLoad(data) {
        return true;
      },
      onLoadError: function onLoadError(xhr, status, error) {
        console.log('Select Load error:' + error);
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      options: this.props.options,
      optionsCache: this.props.options,
      disabled: this.props.disabled,
      mustDisable: false,
      loadParams: {},
      loadData: []
    };
  },

  componentWillMount: function componentWillMount() {
    // SelecComponent alwalys handle value as an array.
    this.state.value = this.ensureIsArray(this.state.value);

    if (!!this.props.dependsOn) {
      this.state.mustDisable = true;
    }
  },

  componentDidMount: function componentDidMount() {
    if (this.props.optionsUrl) {
      if (!!this.props.dependsOn) {
        this.listenToDependableChange();
        this.loadDependentOptions();
      } else {
        this.loadOptions();
      }
    }

    if (this.state.value.length > 0) {
      this.triggerDependableChanged();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (!!this.props.dependsOn) {
      this.unbindDependableChangeListener();
    }
  },

  ensureIsArray: function ensureIsArray(value) {
    if (value === null || value === undefined || value.length === 0) {
      value = [];
    } else if (!$.isArray(value)) {
      value = [value];
    }
    return value;
  },

  selectedOptions: function selectedOptions() {
    var selectedOptions = [];
    $.each(this.state.optionsCache, (function (i, option) {
      if (this.state.value.indexOf(option.value) >= 0) {
        selectedOptions.push(option);
      }
    }).bind(this));

    return selectedOptions;
  },

  loadOptions: function loadOptions() {
    $.ajax({
      url: this.props.optionsUrl,
      method: 'GET',
      dataType: 'json',
      data: this.state.loadParams,
      success: this.handleLoad,
      error: this.onLoadError
    });
  },

  handleLoad: function handleLoad(data) {
    var options = [];
    var optionsParam = this.props.optionsParam;
    if (!!optionsParam) {
      data = data[optionsParam];
    }

    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var option = {
        name: String(dataItem[this.props.nameField]),
        value: dataItem[this.props.valueField]
      };

      options.push(option);
    }

    this.setState({
      loadData: data,
      options: options,
      optionsCache: this.cacheOptions(options),
      mustDisable: !!this.props.dependsOn && options.length <= 0
    }, this.triggerDependableChanged);

    this.props.onLoad(data);
  },

  cacheOptions: function cacheOptions(options) {
    var optionsCache = options.slice(0);
    var optionValuesCache = $.map(optionsCache, function (option) {
      return option.value;
    });

    $.each(this.state.optionsCache, function (i, option) {
      var optionValue = option.value;
      if (optionValuesCache.indexOf(optionValue) < 0) {
        optionsCache.push(option);
      }
    });

    return optionsCache;
  },

  listenToDependableChange: function listenToDependableChange() {
    var dependableId = this.props.dependsOn.dependableId;
    dependableId = dependableId.replace(/(:|\.|\[|]|,)/g, "\\$1");
    $('body').delegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },

  unbindDependableChangeListener: function unbindDependableChangeListener() {
    var dependableId = this.props.dependsOn.dependableId;
    dependableId = dependableId.replace(/(:|\.|\[|]|,)/g, "\\$1");
    $('body').undelegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },

  onDependableChange: function onDependableChange(event, dependableValue) {
    this.loadDependentOptions(dependableValue);
  },

  loadDependentOptions: function loadDependentOptions(dependableValue) {
    if (!dependableValue) {
      dependableValue = this.getDependableNode().val();
    }

    if (!dependableValue || dependableValue.length === 0) {
      this.emptyAndDisable();
      return false;
    }

    if ($.isArray(dependableValue) && dependableValue.length == 1) {
      dependableValue = dependableValue[0];
    }

    var dependsOnObj = this.props.dependsOn;
    var paramName = dependsOnObj.param || dependsOnObj.dependableId;
    this.state.loadParams[paramName] = dependableValue;
    this.loadOptions();
  },

  getDependableNode: function getDependableNode() {
    var dependsOnObj = this.props.dependsOn;
    return $(document.getElementById(dependsOnObj.dependableId));
  },

  triggerDependableChanged: function triggerDependableChanged() {
    var $valuesElement = $(ReactDOM.findDOMNode(this.refs.select));
    var optionValues = this.state.value;

    $valuesElement.trigger('dependable_changed', [optionValues]);
  },

  emptyAndDisable: function emptyAndDisable() {
    this.setState({
      options: [],
      optionsCache: [],
      mustDisable: true
    });
  },

  isDisabled: function isDisabled() {
    return this.state.disabled || this.state.mustDisable;
  }
};

'use strict';

var LocalizedResourceFieldMixin = {
  propTypes: {
    resource: React.PropTypes.string,
    name: React.PropTypes.string
  },

  localizeResourceField: function localizeResourceField(name, resource) {
    if (!name) {
      name = this.props.name;
    }
    if (!resource) {
      resource = this.props.resource;
    }

    if (name === undefined || resource === undefined) {
      return '';
    }

    try {
      var resourceKey = 'resources.' + resource + '.fields.' + name;
      return Realize.t(resourceKey, true);
    } catch (err) {
      resourceKey = 'resources.defaults.fields.' + name;
      try {
        return Realize.t(resourceKey, true);
      } catch (err) {
        return name;
      }
    }
  }

};

"use strict";

var ModalRendererMixin = {
  propTypes: {
    modalContainerId: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      modalContainerId: "modal-container"
    };
  },

  renderModalHtml: function renderModalHtml(modalHtml) {
    var modalContainerId = this.props.modalContainerId;

    var $modalContainer = $("#" + modalContainerId);
    if ($modalContainer.length === 0) {
      $modalContainer = $("<div id='" + modalContainerId + "'></div>");
      $("body").append($modalContainer);
    }

    $modalContainer.html(modalHtml);
  }
};

'use strict';

var RequestHandlerMixin = {
  propTypes: {
    onRequest: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onComplete: React.PropTypes.func
  },

  current_xhr: null,

  getDefaultProps: function getDefaultProps() {
    return {
      onRequest: function onRequest(requestData, url) {},
      onSuccess: function onSuccess(responseData, status, xhr) {
        return true;
      },
      onError: function onError(xhr, status, error) {
        return true;
      },
      onComplete: function onComplete(xhr, status) {
        return true;
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      isLoading: false
    };
  },

  performRequest: function performRequest(url, requestData, method, dataType) {
    var requestOptions = {
      url: url,
      data: requestData || {},
      method: method || 'GET',
      success: this.successCallback,
      error: this.errorCallback,
      complete: this.completeCallback
    };

    if (!!dataType) {
      requestOptions.dataType = dataType;
    }

    this.cancelPendingRequest();
    this.requestCallback(requestData, url);
    this.current_xhr = $.ajax(requestOptions);
  },

  cancelPendingRequest: function cancelPendingRequest() {
    if (this.current_xhr !== null && this.current_xhr.readyState < 4) {
      this.current_xhr.abort();
    }
  },

  requestCallback: function requestCallback(requestData, url) {
    this.setState({ isLoading: true });
    this.executeCallback('onRequest', requestData, url);
  },

  successCallback: function successCallback(responseData, status, xhr) {
    if (this.executeCallback('onSuccess', responseData, status, xhr)) {
      this.handleSuccess(responseData, status, xhr);
    }
  },

  errorCallback: function errorCallback(xhr, status, error) {
    if (error !== "abort") {
      this.executeCallback('onError', xhr, status, error);
    }
  },

  completeCallback: function completeCallback(xhr, status) {
    this.setState({ isLoading: false });
    this.executeCallback('onComplete', xhr, status);
  },

  executeCallback: function executeCallback(callbackFunction) {
    var callbackArguments = Array.prototype.slice.call(arguments, 1);
    var componentFunction = this[callbackFunction];
    var propFunction = this.props[callbackFunction];

    if (typeof componentFunction === "function") {
      componentFunction.apply(this, callbackArguments);
    } else {
      propFunction.apply(this, callbackArguments);
    }
  },

  handleSuccess: function handleSuccess(responseData, status, xhr) {
    var contentType = xhr.getResponseHeader('Content-Type');

    if (contentType.match(/text\/javascript/)) {
      this.handleJsResponse(responseData);
    } else if (contentType.match(/text\/html/)) {
      this.handleHtmlResponse(responseData);
    }
  },

  handleJsResponse: function handleJsResponse(responseJs) {
    eval(responseJs);
  },

  handleHtmlResponse: function handleHtmlResponse(responseHtml) {}
};

'use strict';

var RestActionsMixin = {
  propTypes: {
    actionUrls: React.PropTypes.object,
    actionMethods: React.PropTypes.object,
    destroyConfirm: React.PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      actionUrls: null,
      actionMethods: null,
      destroyConfirm: 'Tem certeza que deseja remover este item?'
    };
  },

  getRestActionUrl: function getRestActionUrl(action, id) {
    var actionUrls = this.props.actionUrls || Realize.config.restUrls;
    var actionUrl = actionUrls[action];
    actionUrl = actionUrl.replace(/:url/, this.props.url);
    if (!!id) {
      actionUrl = actionUrl.replace(/:id/, id);
    }

    return actionUrl;
  },

  getRestActionMethod: function getRestActionMethod(action) {
    var actionMethods = this.props.actionMethods || Realize.config.restMethods;
    return actionMethods[action];
  }
};

'use strict';

var UtilsMixin = {

  // source: https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29
  generateUUID: function generateUUID() {
    var d = new Date().getTime();

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
  }
};

'use strict';

var EditPermissions = React.createClass({
  displayName: 'EditPermissions',

  mixins: [RequestHandlerMixin],

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

  getDefaultProps: function getDefaultProps() {
    return {
      principal: null,
      principalType: 'User',
      resource: null,
      resourceType: null,
      title: '',
      saveOnSelect: false,
      principalPermissions: null,
      permissionsBaseUrl: '/wkm_acl_ui/permissions'
    };
  },

  getInitialState: function getInitialState() {
    return {
      permissions: [],
      permissionsChecked: this.initialPrincipalPermissions()
    };
  },

  componentDidMount: function componentDidMount() {
    this.getPermissions();
  },

  componentDidUpdate: function componentDidUpdate() {
    $('.permission-manager-modal').resize();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      permissionsChecked: nextProps.principalPermission
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'row permissions-manager' },
      this.renderTitle(),
      React.createElement(
        'div',
        { className: 'box-edit-permissions' },
        this.renderHiddenInputs(),
        this.renderPermissionGroup()
      )
    );
  },

  initialPrincipalPermissions: function initialPrincipalPermissions() {
    if (!!this.props.principalPermissions) {
      return this.props.principalPermissions;
    } else {
      return [];
    }
  },

  checked: function checked(permission) {
    var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
    var checked = false;

    if (!!permissionsChecked) {
      for (var i = 0; i < permissionsChecked.length; i++) {
        var permissions = permissionsChecked[i].permission;
        var implies = permissionsChecked[i].implies;

        if (!$.isArray(permissions)) {
          permissions = [permissions];
        }

        if (permissions.indexOf(permission) !== -1 || implies.indexOf(permission) !== -1) checked = true;
      }
    }

    return checked;
  },

  disabled: function disabled(permission) {
    var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
    var disabled = false;

    if (!!permissionsChecked) {
      for (var i = 0; i < permissionsChecked.length; i++) {
        var permission_name = permissionsChecked[i].permission;
        var implies = permissionsChecked[i].implies;
        var inherited = permissionsChecked[i].inherited;
        if (implies.indexOf(permission) !== -1 || permission_name == permission && inherited == true) disabled = true;
      }
    }

    return disabled;
  },

  handleChange: function handleChange(permission, event) {
    var checkbox = React.findDOMNode(this.refs['checkbox_' + permission]);
    var checked = $($(checkbox).find('input')).is(':checked');
    if (!!this.props.saveOnSelect) {
      if (checked) {
        this.grantPermission(permission);
      } else {
        this.revokePermission(permission);
      }
    } else {
      if (checked) {
        if (!this.belongsToPermissionsChecked(permission)) {
          this.addPermissionChecked(permission);
        }
      } else {
        this.removePermissionChecked(permission);
      }
    }
  },

  grantPermission: function grantPermission(permission) {
    var url = this.props.permissionsBaseUrl;
    var data = { principal_id: this.props.principal.id,
      principal_type: 'User',
      resource_id: this.props.resource.id,
      resourceType: this.props.resourceType,
      permissions: [permission]
    };

    this.performRequest(url, data, 'POST', 'json');
  },

  revokePermission: function revokePermission(permission) {
    var url = this.props.permissionsBaseUrl + "/" + this.props.principal.id;
    var data = { principal_id: this.props.principal.id,
      principal_type: 'User',
      resource_id: this.props.resource.id,
      resource_type: this.props.resourceType,
      permissions: [permission]
    };

    this.performRequest(url, data, 'DELETE', 'json');
  },

  getPermissions: function getPermissions() {
    $.ajax({
      url: this.props.permissionsBaseUrl + "/" + this.props.principal.id,
      method: 'GET',
      dataType: 'json',
      data: {
        principal_type: this.props.principalType,
        principal_id: this.props.principal.id,
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: (function (data) {
        this.setState({
          permissions: data.permissions
        });
      }).bind(this)
    });
  },

  onSuccess: function onSuccess() {
    this.getPermissions();
  },

  addPermissionChecked: function addPermissionChecked(permission) {
    this.props.handleAddPermissionChecked(permission);
  },

  removePermissionChecked: function removePermissionChecked(permission) {
    this.props.handleRemovePermissionChecked(permission);
  },

  belongsToPermissionsChecked: function belongsToPermissionsChecked(permission) {
    var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
    var belongs = false;

    for (var i = 0; i < permissionsChecked.length; i++) {
      if (permissionsChecked[i].permissions === permission) {
        belongs = true;
      }
    }

    return belongs;
  },

  checkboxId: function checkboxId(permission) {
    return 'permissions_' + permission + '_';
  },

  checkboxName: function checkboxName() {
    return 'permissions[]';
  },

  renderPermissionGroup: function renderPermissionGroup() {
    var component = [];
    var permissions = this.state.permissions;
    var resourceId = this.props.resource.id;

    if (!!permissions) {
      permissions.forEach((function (permission) {
        component.push(React.createElement(Input, { key: resourceId + '_' + permission + '_' + Math.random(),
          component: 'checkbox',
          ref: 'checkbox_' + permission,
          label: I18n.t('permissions.' + permission),
          value: permission,
          checked: this.checked(permission),
          disabled: this.disabled(permission),
          onChange: this.handleChange.bind(this, permission),
          id: this.checkboxId(permission),
          name: this.checkboxName(),
          className: 'col s12'
        }));
      }).bind(this));
    }

    return component;
  },

  renderTitle: function renderTitle() {
    var component = [];
    if (!!this.props.title) component.push(React.createElement(
      'h3',
      null,
      this.props.title
    ));

    return component;
  },

  renderHiddenInputs: function renderHiddenInputs() {
    var component = [];
    component.push(React.createElement('input', { type: 'hidden', name: '_method', value: 'put' }));
    component.push(React.createElement('input', { type: 'hidden', name: 'resource_type', value: this.props.resourceType }));
    component.push(React.createElement('input', { type: 'hidden', name: 'resource_id', value: this.props.resource.id }));
    component.push(React.createElement('input', { type: 'hidden', name: 'principal_type', value: this.props.principalType }));
    component.push(React.createElement('input', { type: 'hidden', name: 'principal_id', value: this.props.principal.id }));

    return component;
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var IndexPermissions = React.createClass({
  displayName: 'IndexPermissions',

  mixins: [RequestHandlerMixin, ModalRendererMixin],

  PropTypes: {
    principal: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    gridProps: React.PropTypes.object,
    className: React.PropTypes.string,
    editPermissionBaseUrl: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      principal: null,
      principalType: null,
      resourceType: '',
      className: 'index-permissions',
      editPermissionBaseUrl: '/wkm_acl_ui/permission_managers',
      gridProps: {
        url: '/wkm_acl_ui/permissions',
        selectable: false,
        pagination: false,
        eagerLoad: true,
        tableClassName: 'table striped bordered'
      },
      editPermissionsProps: {
        url: null,
        actionCallback: null
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      hasResource: true
    };
  },

  render: function render() {
    var hasResource = this.state.hasResource;
    hasResource ? display = 'block' : display = 'none';

    return React.createElement(
      'div',
      { className: this.props.className, style: { 'display': display } },
      React.createElement(Grid, _extends({}, this.props.gridProps, { ref: 'grid', columns: this.getColumns(), filter: this.filters(), onLoadSuccess: this.onLoadSuccess, actionButtons: this.getActionButtons() }))
    );
  },

  openEditPermission: function openEditPermission(event, dataRowId, data) {
    var permissionEditURL = this.props.editPermissionBaseUrl;
    var data = {
      principal_id: this.props.principal.id,
      principal_type: this.props.principalType,
      resource_type: this.props.resourceType,
      resource_id: data.resource_id
    };

    this.performRequest(permissionEditURL, data);
  },

  onSuccess: function onSuccess(responseData) {
    this.renderModalHtml(responseData);
  },

  getActionButtons: function getActionButtons() {
    var gridProps = this.props.gridProps;
    if (!!gridProps.actionButtons) return gridProps.actionButtons;else {
      return {
        member: [{
          icon: 'edit',
          onClick: this.openEditPermission
        }],
        collection: []
      };
    }
  },

  getColumns: function getColumns() {
    var gridProps = this.props.gridProps;

    if (!!gridProps.columns) {
      return gridProps.columns;
    } else {
      var resourceType = this.props.resourceType;
      return this.defaultColumns(resourceType);
    }
  },

  defaultColumns: function defaultColumns(resourceType) {
    return {
      resource_name: {
        label: I18n.t('models.' + resourceType)
      },
      permission: {
        label: 'Permissão',
        component: 'LabelPermission'
      }
    };
  },

  filters: function filters() {
    return {
      resource: 'q',
      inputs: {
        principal_id: {
          value: this.props.principal.id,
          component: 'hidden',
          scope: 'global'
        },
        principal_type: {
          value: this.props.principalType,
          component: 'hidden',
          scope: 'global'
        },
        resource_type: {
          value: this.props.resourceType,
          component: 'hidden',
          scope: 'global'
        }
      }
    };
  },

  onLoadSuccess: function onLoadSuccess() {
    var dataRows = this.refs.grid.state.dataRows;
    if (dataRows.length == 0) {
      this.setState({
        hasResource: false
      });
    }
  }

});

'use strict';

var LabelPermission = React.createClass({
  displayName: 'LabelPermission',

  PropTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: ''
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.className },
      this.renderLabel()
    );
  },

  renderLabel: function renderLabel() {
    var component = [];
    var permissions = this.props.value;

    if (permissions.length == 0) {
      component.push(React.createElement(
        'div',
        null,
        ' - '
      ));
    } else {
      permissions.forEach(function (permission) {
        component.push(React.createElement(
          'div',
          null,
          I18n.t('permissions.' + permission)
        ));
      });
    }

    return component;
  }

});

'use strict';

var AclModalsWrapper = React.createClass({
  displayName: 'AclModalsWrapper',

  mixins: [RequestHandlerMixin],

  PropTypes: {
    principal: React.PropTypes.object,
    principalType: React.PropTypes.string,
    resource: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    urlProps: React.PropTypes.object,
    title: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
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
        principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions'
      }
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        this.renderPermissionManagerModal(),
        this.renderAddPrincipalsModal()
      )
    );
  },

  renderPermissionManagerModal: function renderPermissionManagerModal() {
    var component = [];
    component.push(React.createElement(PermissionManagerModal, {
      ref: 'permissionManagerModal',
      title: this.props.title,
      resource: this.props.resource,
      resourceType: this.props.resourceType,
      principal: this.props.principal,
      principalType: this.props.principalType,
      principalsBaseUrl: this.props.urlProps.principalsBaseUrl,
      principalsPermissionsBaseUrl: this.props.urlProps.principalsPermissionsBaseUrl,
      updatePermissionsBaseUrl: this.props.urlProps.updatePermissionsBaseUrl,
      handleRemovePrincipal: this.handleRemovePrincipal
    }));

    return component;
  },

  renderAddPrincipalsModal: function renderAddPrincipalsModal() {
    var component = [];
    if (!this.props.principal) {
      component.push(React.createElement(AddPrincipalsModal, {
        potentialPrincipalsBaseUrl: this.props.urlProps.potentialPrincipalsBaseUrl,
        principalsTypeBaseUrl: this.props.urlProps.principalsTypeBaseUrl,
        handleAddPrincipal: this.handleAddPrincipal,
        resource: this.props.resource,
        resourceType: this.props.resourceType
      }));
    }

    return component;
  },

  handleAddPrincipal: function handleAddPrincipal(selectedDatas) {
    var url = this.props.urlProps.principalsBaseUrl;
    var data = { principals: selectedDatas, resource_id: this.props.resource.id, resource_type: this.props.resourceType };
    this.performRequest(url, data, 'POST');
    $('#add-principals-modal').closeModal();
    this.refs.permissionManagerModal.loadPrincipalsPermissions(selectedDatas);
  },

  handleRemovePrincipal: function handleRemovePrincipal(selectedPrincipal) {
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

  onSuccess: function onSuccess() {
    this.forceUpdate();
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var AddPrincipalsModal = React.createClass({
  displayName: 'AddPrincipalsModal',

  mixins: [RequestHandlerMixin],

  PropTypes: {
    resource: React.PropTypes.object,
    resourceType: React.PropTypes.string,
    className: React.PropTypes.string,
    modalId: React.PropTypes.string,
    potentialPrincipalsBaseUrl: React.PropTypes.string,
    principalsTypeBaseUrl: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
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
    };
  },

  getInitialState: function getInitialState() {
    return {
      selectedPrincipal: null,
      potentialPrincipals: [],
      principalType: null
    };
  },

  componentWillMount: function componentWillMount() {
    $.ajax({
      url: this.props.principalsTypeBaseUrl,
      method: 'GET',
      dataType: 'json',
      success: (function (data) {
        this.setState({
          principalType: data[0].name
        });
      }).bind(this)
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.refs.grid.backToInitialState();
  },

  render: function render() {
    return React.createElement(
      Modal,
      { id: this.props.modalId, style: { 'z-index': '9000' }, className: this.props.className, headerSize: this.props.headerSize, ref: 'add-principals-modal' },
      React.createElement(
        ModalHeader,
        null,
        React.createElement(
          'h5',
          null,
          'Selecionar Usuário/Grupo'
        )
      ),
      React.createElement(
        ModalContent,
        null,
        React.createElement(
          'div',
          { className: 'principal-modal-content' },
          React.createElement(Grid, _extends({
            ref: 'grid'
          }, this.props.gridProps, {
            url: this.props.potentialPrincipalsBaseUrl,
            filter: this.filters(),
            eagerLoad: true,
            onClickRow: this.handleSelectPrincipal
          }))
        )
      ),
      React.createElement(
        ModalFooter,
        null,
        React.createElement(
          'div',
          { className: 'modal-footer', style: { 'float': 'right' } },
          React.createElement(CloseModalButton, { modalId: this.props.modalId }),
          React.createElement(Button, { name: 'Adicionar', element: 'a', onClick: this.handleAddPrincipal })
        )
      )
    );
  },

  filters: function filters() {
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
    };
  },

  handleSelectPrincipal: function handleSelectPrincipal(event, data) {
    this.setState({
      selectedPrincipal: data
    });
  },

  handleAddPrincipal: function handleAddPrincipal() {
    var selectedDatas = this.getSelectedDatas();
    if (selectedDatas.length == 0) {
      alert('Necessário selecionar alguém para adicionar');
    } else {
      this.addPrincipal(selectedDatas);
    }
  },

  getSelectedDatas: function getSelectedDatas() {
    var selectedRowsIds = this.refs.grid.state.selectedRowIds;
    var dataRows = this.refs.grid.state.dataRows;
    var selectedDatas = [];

    selectedRowsIds.forEach(function (rowId) {
      dataRows.forEach(function (data) {
        if (data.id == rowId) {
          selectedDatas.push({ principal_id: data.id, principal_type: data.principal_type });
        }
      });
    });

    return selectedDatas;
  },

  addPrincipal: function addPrincipal(selectedDatas) {
    this.props.handleAddPrincipal(selectedDatas);
  },

  getData: function getData() {
    return {
      dataRows: this.state.potentialPrincipals,
      count: this.state.potentialPrincipals.length
    };
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CloseModalButton = React.createClass({
  displayName: 'CloseModalButton',

  PropTypes: {
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    clearTheme: React.PropTypes.bool,
    element: React.PropTypes.string,
    modalId: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Fechar',
      className: 'btn waves-effect waves-light close-button grey lighten-4',
      clearTheme: true,
      element: 'a'
    };
  },

  render: function render() {
    return React.createElement(Button, _extends({}, this.props, { onClick: this.closeModal }));
  },

  closeModal: function closeModal() {
    if (!!this.props.modalId) {
      $('#' + this.props.modalId).closeModal();
    }
  }

});

'use strict';

var PermissionManagerModal = React.createClass({
  displayName: 'PermissionManagerModal',

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
    principalsPermissionsBaseUrl: React.PropTypes.string,
    title: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      permissionManagerInModal: true,
      principal: null,
      principalType: '',
      resource: null,
      resourceType: '',
      title: null,
      className: 'permission-manager-modal',
      modalId: 'permission-manager-modal',
      updatePermissionsBaseUrl: '/wkm_acl_ui/bulk_permissions',
      principalsBaseUrl: '/wkm_acl_ui/principals',
      principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions'
    };
  },

  render: function render() {
    return React.createElement(
      Modal,
      { id: this.props.modalId, className: this.props.className, headerSize: this.props.headerSize, opened: true, ref: 'modal' },
      React.createElement(
        ModalHeader,
        null,
        React.createElement(
          'h5',
          null,
          'Gerenciar Permissões - ',
          this.props.resource.name
        )
      ),
      React.createElement(
        ModalContent,
        null,
        React.createElement(
          'div',
          { className: 'permissions-modal-content' },
          React.createElement(PermissionManager, {
            ref: 'permissionManager',
            handleRemovePrincipal: this.props.handleRemovePrincipal,
            permissionManagerInModal: this.props.permissionManagerInModal,
            principal: this.props.principal,
            principalType: this.props.principalType,
            resource: this.props.resource,
            resourceType: this.props.resourceType,
            principalsBaseUrl: this.props.principalsBaseUrl,
            principalsPermissionsBaseUrl: this.props.principalsPermissionsBaseUrl
          })
        )
      ),
      React.createElement(
        ModalFooter,
        null,
        React.createElement(
          'div',
          { className: 'modal-footer', style: { 'float': 'right' } },
          React.createElement(CloseModalButton, { modalId: this.props.modalId }),
          React.createElement(UpdatePermissionsButton, { handleUpdatePermissions: this.handleUpdatePermissions })
        )
      )
    );
  },

  renderTitle: function renderTitle() {
    var component = [];
    if (!!this.props.title) {
      var title = this.props.title;
    } else {
      var title = this.props.resource.name;
    }

    component.push(React.createElement(
      'h5',
      null,
      'Gerenciar Permissões - ',
      title
    ));

    return component;
  },

  loadPrincipalsPermissions: function loadPrincipalsPermissions(selectedDatas) {
    this.refs.permissionManager.createPrincipalsPermissions(selectedDatas);
  },

  getPostData: function getPostData() {
    var principalPermissions = this.refs.permissionManager.state.principalsPermissions;
    var postData = [];

    for (var i = 0; i < principalPermissions.length; i++) {
      if (!!principalPermissions[i].changed) {
        var permissionsByPrincipal = principalPermissions[i].permissions;
        var permissions = permissionsByPrincipal.map(function (a) {
          return a.permission;
        });
        var implies = permissionsByPrincipal.map(function (a) {
          return a.implies;
        });
        implies = [].concat.apply([], implies);
        permissions = _.difference(permissions, implies);

        postData.push({
          principal_id: principalPermissions[i].principal_id,
          principal_type: principalPermissions[i].principal_type,
          permissions: permissions
        });
      }
    }

    return { resource_id: this.props.resource.id, resource_type: this.props.resourceType, permissions_by_principal: postData };
  },

  handleUpdatePermissions: function handleUpdatePermissions(event) {
    var url = this.props.updatePermissionsBaseUrl;
    var postData = this.getPostData();
    var method = 'PUT';
    this.performRequest(url, postData, method);
  },

  onSuccess: function onSuccess() {
    $('#' + this.props.modalId).closeModal();
    window.location.reload();
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var PermissionManager = React.createClass({
  displayName: 'PermissionManager',

  mixins: [RequestHandlerMixin],

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

  getDefaultProps: function getDefaultProps() {
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
    };
  },

  getInitialState: function getInitialState() {
    return {
      principalsPermissions: {},
      selectedPrincipal: this.props.principal,
      principals: []
    };
  },

  //// LIFECYCLES ////

  componentDidMount: function componentDidMount() {
    this.loadPrincipals();
    this.loadPrincipalsPermissions();
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.loadPrincipals();
  },

  ////// RENDER //////

  render: function render() {
    return React.createElement(
      'div',
      null,
      this.renderPrincipalsGrid(),
      this.renderEditPermission(),
      this.renderAddPrincipalsModal()
    );
  },

  renderPrincipalsGrid: function renderPrincipalsGrid() {
    var component = [];
    var principal = this.props.principal;

    if (!principal) {
      component.push(React.createElement(
        'h5',
        null,
        'Usuários/Grupo:'
      ));
      component.push(React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'principal-grid' },
          React.createElement(Grid, _extends({ ref: 'grid'
          }, this.props.PrincipalGridProps, {
            key: Math.random(),
            onClickRow: this.handleSelectPrincipal,
            tableRowCssClass: this.rowCssClass,
            data: this.dataGridPrincipals()
          }))
        ),
        this.renderActionButtons()
      ));
    }

    return component;
  },

  renderActionButtons: function renderActionButtons() {
    var component = [];

    component.push(React.createElement(PrincipalActionButtons, {
      handleRemovePrincipal: this.handleRemovePrincipal,
      handleOpenPrincipalModal: this.handleOpenPrincipalModal,
      modalContainerId: 'principals-modal'
    }));

    return component;
  },

  renderEditPermission: function renderEditPermission() {
    var component = [];
    var selectedPrincipal = !!this.state.selectedPrincipal ? this.state.selectedPrincipal : this.props.principal;
    var principal_type = !!this.state.selectedPrincipal ? selectedPrincipal.principal_type : this.props.principalType;

    if (!!selectedPrincipal) {
      component.push(React.createElement(
        'h5',
        null,
        'Permissões de ',
        selectedPrincipal.name,
        ':'
      ));
      component.push(React.createElement(EditPermissions, {
        principal: selectedPrincipal,
        principalType: principal_type,
        principalPermission: this.principalPermission(),
        resource: this.props.resource,
        resourceType: this.props.resourceType,
        handleRemovePermissionChecked: this.handleRemovePermissionChecked,
        handleAddPermissionChecked: this.handleAddPermissionChecked
      }));
    }

    return component;
  },

  renderAddPrincipalsModal: function renderAddPrincipalsModal() {
    var permissionManagerInModal = this.props.permissionManagerInModal;
    if (!permissionManagerInModal) {
      var component = [];
      component.push(React.createElement(IndexPrincipal, { handleAddPrincipal: this.handleAddPrincipal }));

      return component;
    }
  },

  ////// CHECK/UNCHECK PERMISSIONS METHODS //////

  handleRemovePermissionChecked: function handleRemovePermissionChecked(permission) {
    var principalPermission = this.principalPermission();
    var permissions = principalPermission.permissions;

    for (var i = 0; i < permissions.length; i++) {
      if (permissions[i].permission === permission) {
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

  handleAddPermissionChecked: function handleAddPermissionChecked(permission) {
    var principalId = !!this.state.selectedPrincipal ? this.state.selectedPrincipal.id : this.props.principal.id;

    $.ajax({
      url: this.props.impliesPermissionBaseUrl,
      method: 'GET',
      dataType: 'json',
      data: {
        principal_id: principalId,
        principal_type: 'User',
        permission: permission,
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: (function (data) {
        this.addPermissionChecked(data.permissions);
      }).bind(this)
    });
  },

  addPermissionChecked: function addPermissionChecked(permissions) {
    var principalsPermissions = this.state.principalsPermissions;
    var selectedPrincipal = !!this.state.selectedPrincipal ? this.state.selectedPrincipal : this.props.principal;

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
      });
    }

    this.setState({
      principalPermissions: principalsPermissions
    });
  },

  switchPrincipalPermissions: function switchPrincipalPermissions(principalPermission) {
    var principalsPermissions = this.state.principalsPermissions;
    var selectedPrincipal = !!this.state.selectedPrincipal ? this.state.selectedPrincipal : this.props.principal;

    for (var i = 0; i < principalsPermissions.length; i++) {
      if (selectedPrincipal.id == principalsPermissions[i].principal_id) {
        principalsPermissions.splice(i, 1);
      }
    }

    principalsPermissions.push(principalPermission);
    return principalsPermissions;
  },

  ////// PRINCIPALS GRID METHODS //////

  handleSelectPrincipal: function handleSelectPrincipal(event, data) {

    this.setState({
      selectedPrincipal: data
    });
  },

  principalPermission: function principalPermission() {
    var principalsPermissions = this.state.principalsPermissions;
    var principalPermissions = null;
    var selectedPrincipal = !!this.state.selectedPrincipal ? this.state.selectedPrincipal : this.props.principal;

    for (var i = 0; i < principalsPermissions.length; i++) {
      if (selectedPrincipal.id == principalsPermissions[i].principal_id) {
        principalPermissions = principalsPermissions[i];
      }
    }

    return principalPermissions;
  },

  rowCssClass: function rowCssClass(data) {
    var selectedPrincipal = this.state.selectedPrincipal;
    if (!!data && !!selectedPrincipal) {
      if (data.id == selectedPrincipal.id) return 'row-selected';
    }
  },

  dataGridPrincipals: function dataGridPrincipals() {
    return {
      dataRows: this.state.principals,
      count: 10
    };
  },

  handleRemovePrincipal: function handleRemovePrincipal() {
    this.props.handleRemovePrincipal(this.state.selectedPrincipal);
  },

  handleOpenPrincipalModal: function handleOpenPrincipalModal() {
    $('#add-principals-modal').openModal();
    $(window).resize();
  },

  createPrincipalsPermissions: function createPrincipalsPermissions(principals) {
    var principalsPermissions = this.state.principalsPermissions;

    for (var i = 0; i < principals.length; i++) {
      if (!this.alreadyExistPrincipalPermissions(principals[i])) {
        principalsPermissions.push({ principal_id: principals[i].principal_id, principal_type: principals[i].principal_type, permissions: [] });
      }
    }

    this.setState({
      principalsPermissions: principalsPermissions
    });
  },

  alreadyExistPrincipalPermissions: function alreadyExistPrincipalPermissions(principal) {
    var principalsPermissions = this.state.principalsPermissions;
    var belongs = false;

    for (var i = 0; i < principalsPermissions.length; i++) {
      if (principalsPermissions[i].principal_id == principal.id) {
        belongs = true;
        break;
      }
    }

    return belongs;
  },

  ////// LOAD STATES METHODS //////

  loadPrincipals: function loadPrincipals() {
    $.ajax({
      url: this.props.principalsBaseUrl,
      dataType: 'json',
      data: {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: (function (data) {
        this.setState({
          principals: data.principals,
          selectedPrincipal: data.principals[0]
        });
      }).bind(this)
    });
  },

  loadPrincipalsPermissions: function loadPrincipalsPermissions() {
    $.ajax({
      url: this.props.principalsPermissionsBaseUrl,
      dataType: 'json',
      data: {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      },
      success: (function (data) {
        this.setState({
          principalsPermissions: data.principals
        });
      }).bind(this)
    });
  }

});

'use strict';

var PrincipalActionButtons = React.createClass({
  displayName: 'PrincipalActionButtons',

  mixins: [RequestHandlerMixin, ModalRendererMixin],

  PropTypes: {
    className: React.PropTypes.string,
    handleOpenPrincipalModal: React.PropTypes.func,
    handleRemovePrincipal: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'principal-action-buttons',
      handleAddPrincipal: null,
      handleRemovePrincipal: null
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.className },
      this.renderAddPrincipalButton(),
      this.renderRemovePrincipalButton(),
      React.createElement('div', { style: { 'clear': 'both' } })
    );
  },

  renderRemovePrincipalButton: function renderRemovePrincipalButton() {
    var component = [];
    component.push(React.createElement(Button, {
      name: 'Remover',
      onClick: this.props.handleRemovePrincipal
    }));

    return component;
  },

  renderAddPrincipalButton: function renderAddPrincipalButton() {
    var component = [];
    component.push(React.createElement(Button, {
      name: 'Adicionar',
      onClick: this.props.handleOpenPrincipalModal
    }));

    return component;
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UpdatePermissionsButton = React.createClass({
  displayName: 'UpdatePermissionsButton',

  PropTypes: {
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    clearTheme: React.PropTypes.bool,
    element: React.PropTypes.string,
    handleUpdatePermissions: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Atualizar',
      className: 'btn waves-effect waves-grey button-modal ',
      clearTheme: true,
      element: 'a',
      handleUpdatePermissions: function handleUpdatePermissions() {
        return null;
      }
    };
  },

  render: function render() {
    return React.createElement(Button, _extends({}, this.props, {
      onClick: this.props.handleUpdatePermissions
    }));
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = React.createClass({
  displayName: 'Button',

  mixins: [CssClassMixin, RequestHandlerMixin],
  propTypes: {
    name: Realize.PropTypes.localizedString,
    type: React.PropTypes.string,
    icon: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
    style: React.PropTypes.oneOf(['danger', 'primary', 'warning', 'cancel']),
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
    actionUrl: React.PropTypes.string,
    actionData: React.PropTypes.object,
    isLoading: React.PropTypes.bool,
    disableWith: Realize.PropTypes.localizedString,
    confirmsWith: Realize.PropTypes.localizedString,
    element: React.PropTypes.oneOf(['button', 'a']),
    target: React.PropTypes.string,
    method: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'button',
      name: '',
      disabled: false,
      isLoading: false,
      icon: null,
      href: null,
      onClick: null,
      actionUrl: null,
      actionData: {},
      disableWith: 'loading',
      confirmsWith: null,
      element: 'button',
      method: null
    };
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: this.getButtonThemeClassKey() + this.getStyleThemeClassKey()
    };
  },

  getButtonThemeClassKey: function getButtonThemeClassKey() {
    var themeClassKey = this.props.themeClassKey;

    if (!this.props.name || this.props.name.length === 0) {
      themeClassKey += ' button.iconOnly';
    }

    return themeClassKey;
  },

  getStyleThemeClassKey: function getStyleThemeClassKey() {
    if (!this.props.style) {
      return '';
    }

    return ' button.' + this.props.style;
  },

  render: function render() {
    var content = '';
    if (this.props.isLoading) {
      content = this.renderLoadingIndicator();
    } else {
      content = this.renderContent();
    }

    return React.createElement(this.props.element, {
      className: this.getClassName(),
      type: this.props.type,
      disabled: this.props.disabled || this.props.isLoading,
      href: this.getHref(),
      onClick: this.handleClick,
      'data-method': this.getMethod(),
      'data-confirm': this.getConfirmsWith()
    }, content);
  },

  getClassName: function getClassName() {
    var className = this.className();
    if (this.props.disabled && this.props.element === 'a') className = 'button btn-flat disable-action-button';

    return className;
  },

  getHref: function getHref() {
    if (this.props.disabled && this.props.element === 'a') return 'javascript:void(0)';
    return this.props.href;
  },

  getMethod: function getMethod() {
    if (!!this.props.method) {
      return this.props.method;
    }

    return null;
  },

  getConfirmsWith: function getConfirmsWith() {
    if (!!this.props.confirmsWith) {
      return Realize.t(this.props.confirmsWith);
    }

    return null;
  },

  renderContent: function renderContent() {
    return [Realize.t(this.props.name), this.renderIcon()];
  },

  renderIcon: function renderIcon() {
    if (!this.props.icon) {
      return '';
    }

    var iconProps = null;
    if ($.isPlainObject(this.props.icon)) {
      iconProps = this.props.icon;
    } else {
      iconProps = { type: this.props.icon };
    }

    return React.createElement(Icon, _extends({ className: this.getIconClassName() }, iconProps, { key: 'icon' }));
  },

  renderLoadingIndicator: function renderLoadingIndicator() {
    return Realize.t(this.props.disableWith);
  },

  handleClick: function handleClick(event) {
    var buttonOnClick = this.props.onClick;
    var buttonAction = this.props.actionUrl;

    if ($.isFunction(buttonOnClick)) {
      this.props.onClick(event);
    } else if (!!buttonAction) {
      var actionData = this.props.actionData;
      this.performRequest(buttonAction, actionData, this.getMethod() || 'POST');
    }
  },

  getIconClassName: function getIconClassName() {
    if (!this.props.name || this.props.name.length === 0) {
      return '';
    } else {
      return 'right';
    }
  }

});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ButtonGroup = React.createClass({
  displayName: "ButtonGroup",

  mixins: [CssClassMixin],
  propTypes: {
    buttons: React.PropTypes.array
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'button.group',
      buttons: []
    };
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: this.className() },
      this.renderButtons()
    );
  },

  renderButtons: function renderButtons() {
    var buttonsProps = this.props.buttons;
    var buttons = [];

    for (var i = 0; i < buttonsProps.length; i++) {
      var buttonProps = buttonsProps[i];

      buttons.push(React.createElement(Button, _extends({}, buttonProps, { key: "button_" + i })));
    }

    return buttons;
  }

});

'use strict';

var Container = React.createClass({
  displayName: 'Container',

  mixins: [ContainerMixin],

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    className: 'row';
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.className },
      this.renderChildren()
    );
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Flash = React.createClass({
  displayName: 'Flash',

  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    message: React.PropTypes.node,
    dismissTimeout: React.PropTypes.number,
    canDismiss: React.PropTypes.bool,
    onDismiss: React.PropTypes.func,
    dismissed: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'info',
      dismissTimeout: -1,
      canDismiss: true,
      dismissed: false,
      message: '',
      onDismiss: function onDismiss() {
        return true;
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: 'flash flash.' + this.props.type,
      dismissed: this.props.dismissed
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({ dismissed: nextProps.dismissed });
  },

  componentDidMount: function componentDidMount() {
    if (this.props.dismissTimeout > 0) {
      this.setDismissTimeout();
    }
  },

  render: function render() {
    return React.createElement(
      ReactCSSTransitionGroup,
      { transitionName: 'dismiss', transitionAppear: true, transitionAppearTimeout: 500 },
      this.state.dismissed ? '' : this.renderFlash()
    );
  },

  renderFlash: function renderFlash() {
    return React.createElement(
      'div',
      { className: this.className(), ref: 'flash' },
      React.createElement(FlashContent, this.props),
      this.props.canDismiss ? React.createElement(FlashDismiss, _extends({}, this.props, { onClick: this.dismiss })) : ''
    );
  },

  dismiss: function dismiss() {
    this.setState({ dismissed: true });
    this.props.onDismiss();
  },

  setDismissTimeout: function setDismissTimeout() {
    setTimeout((function () {
      this.dismiss();
    }).bind(this), this.props.dismissTimeout);
  }
});

'use strict';

var FlashContent = React.createClass({
  displayName: 'FlashContent',

  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string,
    message: React.PropTypes.node
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: 'flash.content flash.' + this.props.type + '.content'
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className() },
      React.createElement(
        'p',
        null,
        this.props.message
      )
    );
  }
});

'use strict';

var FlashDismiss = React.createClass({
  displayName: 'FlashDismiss',

  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string,
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: 'flash.dismiss flash.' + this.props.type + '.content'
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className(), onClick: this.props.onClick },
      React.createElement(Icon, { type: 'close' })
    );
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BulkEditForm = React.createClass({
  displayName: 'BulkEditForm',

  mixins: [CssClassMixin, UtilsMixin],

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

  getDefaultProps: function getDefaultProps() {
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
      onSubmit: function onSubmit(event, postData) {},
      onReset: function onReset(event) {}
    };
  },

  getInitialState: function getInitialState() {
    var disabled = [];

    for (var i = 0; i < this.props.inputGroups.length; i++) {
      var inputs = this.props.inputGroups[i].inputs;
      for (var inputId in inputs) {
        disabled.push(inputId);
      }
    }

    return {
      disabled: disabled,
      inputKeys: this.generateInputIds()
    };
  },

  render: function render() {
    var formProps = $.extend({}, this.props);
    delete formProps.inputGroups;

    return React.createElement(
      Form,
      formProps,
      this.renderChildren()
    );
  },

  generateInputIds: function generateInputIds() {
    var idsMap = {};
    for (var i = 0; i < this.props.inputGroups.length; i++) {
      var inputs = this.props.inputGroups[i].inputs;
      for (var inputId in inputs) {
        idsMap[inputId] = "input_" + inputId + this.generateUUID();
      }
    }

    return idsMap;
  },

  renderChildren: function renderChildren() {
    var inputComponents = [];

    for (var i = 0; i < this.props.inputGroups.length; i++) {
      var inputGroup = this.props.inputGroups[i];
      this.generateInputs(inputComponents, inputGroup, i);
    }

    return inputComponents;
  },

  generateInputs: function generateInputs(inputComponents, inputGroup, i) {
    var inputIndex = 0;

    inputComponents.push(React.createElement(
      'h5',
      { key: "header_" + i },
      inputGroup.label
    ));
    var inputsProps = inputGroup.inputs;
    for (var inputId in inputsProps) {
      if (inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if (!inputProps.id) {
          inputProps.id = inputId;
        }

        inputProps.disabled = this.state.disabled.indexOf(inputId) !== -1;
        var resourceName = inputGroup.resource || this.props.resource;

        var switchId = "enable";
        if (!!resourceName) {
          switchId = switchId + "_" + resourceName;
        }
        switchId = switchId + "_" + inputId;

        var switchName = "enable";
        if (!!resourceName) {
          switchName = switchName + "[" + resourceName + "]";
        }
        switchName = switchName + "[" + inputId + "]";

        if (inputId == 'ids') {
          inputComponents.push(React.createElement(Input, _extends({}, inputProps, {
            disabled: false,
            data: this.props.data,
            resource: inputGroup.resource || this.props.resource,
            className: 'col m7 s10',
            key: "value_" + inputId,
            ref: "input_" + inputId,
            component: 'hidden'
          })));
        } else {
          inputComponents.push(React.createElement(
            Container,
            { className: 'row' },
            React.createElement(InputSwitch, {
              id: switchId,
              name: switchName,
              onChange: this.handleSwitchChange,
              className: 'switch col l3 m3 s2',
              offLabel: '',
              onLabel: '',
              key: "switch_" + inputId
            }),
            React.createElement(Input, _extends({}, inputProps, {
              data: this.props.data,
              errors: this.props.errors,
              resource: inputGroup.resource || this.props.resource,
              formStyle: this.props.formStyle,
              className: 'input-field col offset-s1 l8 m8 s8',
              clearTheme: true,
              key: this.state.inputKeys[inputId],
              ref: "input_" + inputId
            }))
          ));
          inputIndex++;
        }
      }
    }

    return inputComponents;
  },

  handleSwitchChange: function handleSwitchChange(event) {
    var sw = event.target;
    var inputId = sw.id.replace(/^enable_/, '');

    if (sw.name.indexOf('[') !== -1) {
      inputId = sw.name.split('[').pop().replace(']', '');
    }

    var disabled = $.extend([], this.state.disabled);

    if (!sw.checked) {
      disabled.push(inputId);
    } else {
      disabled.splice(disabled.indexOf(inputId), 1);
    }

    var inputKeys = this.state.inputKeys;
    inputKeys[inputId] = "input_" + inputId + this.generateUUID();
    this.setState({ disabled: disabled, inputKeys: inputKeys });
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Form = React.createClass({
  displayName: 'Form',

  mixins: [CssClassMixin, ContainerMixin, FormErrorHandlerMixin, FormSuccessHandlerMixin],

  propTypes: {
    id: React.PropTypes.string,
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    contentType: React.PropTypes.string,
    multipart: React.PropTypes.bool,
    style: React.PropTypes.string,
    resource: React.PropTypes.string,
    ajaxSubmit: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    submitButton: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]),
    otherButtons: React.PropTypes.array,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'form',
      id: null,
      inputs: {},
      data: {},
      action: '',
      method: 'POST',
      dataType: undefined,
      contentType: undefined,
      multipart: false,
      style: 'default',
      resource: null,
      ajaxSubmit: true,
      isLoading: false,
      disabled: false,
      readOnly: false,
      submitButton: {
        name: 'actions.send',
        icon: 'send'
      },
      otherButtons: [],
      onSubmit: function onSubmit(event, postData) {},
      onReset: function onReset(event) {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      isLoading: null
    };
  },

  propsToForward: function propsToForward() {
    return ['resource', 'data', 'readOnly', 'disabled'];
  },

  propsToForwardMapping: function propsToForwardMapping() {
    return {
      errors: this.state.errors,
      formStyle: this.props.style
    };
  },

  render: function render() {
    return React.createElement(
      'form',
      { action: this.props.action,
        method: this.props.method == 'PUT' && !this.props.ajaxSubmit ? 'POST' : this.props.method,
        encType: this.parseFormEncType(),
        id: this.props.id,
        onSubmit: this.handleSubmit,
        onReset: this.handleReset,
        className: this.className(),
        ref: 'form' },
      this.renderFlashErrors(),
      this.renderFlashSuccess(),
      this.renderInputs(),
      this.renderMethodTag(),
      this.renderChildren(),
      React.createElement(FormButtonGroup, _extends({}, this.propsWithoutCSS(), { isLoading: this.isLoading() }))
    );
  },

  renderMethodTag: function renderMethodTag() {
    return React.createElement('input', { name: '_method', type: 'hidden', value: this.props.method });
  },

  renderInputs: function renderInputs() {
    if (!this.props.inputs || $.isEmptyObject(this.props.inputs)) {
      return '';
    }

    return React.createElement(InputGroup, _extends({}, this.propsWithoutCSS(), { formStyle: this.props.style, errors: this.state.errors }));
  },

  parseFormEncType: function parseFormEncType() {
    if (!!this.props.multipart) {
      return "multipart/form-data";
    } else {
      return "application/x-www-form-urlencoded";
    }
  },

  handleSubmit: function handleSubmit(event) {
    event.nativeEvent.preventDefault();
    var postData = this.serialize();
    this.props.onSubmit(event, postData);
    FormActions.submit(this.props.id, event, postData);

    if (!event.isDefaultPrevented()) {
      this.setState({ isLoading: true, errors: {}, showSuccessFlash: false });
      this.submit(postData);
    }
  },

  handleReset: function handleReset(event) {
    this.props.onReset(event);
    FormActions.reset(this.props.id, event);
  },

  serialize: function serialize() {
    var form = ReactDOM.findDOMNode(this.refs.form);
    return $(form).serializeObject();
  },

  submit: function submit(postData) {
    if (!!this.props.ajaxSubmit) {
      this.ajaxSubmit(postData);
    } else {
      this.formSubmit();
    }
  },

  ajaxSubmit: function ajaxSubmit(postData) {
    var submitOptions = {
      url: this.props.action,
      method: this.props.method,
      data: postData,
      success: this.handleSuccess,
      error: this.handleError
    };

    if (!!this.props.dataType) {
      submitOptions.dataType = this.props.dataType;
    }

    if (!!this.props.contentType) {
      submitOptions.contentType = this.props.contentType;

      if (submitOptions.contentType == "application/json") {
        submitOptions.data = JSON.stringify(postData);
      }
    }

    if (this.props.multipart) {
      var fd = new FormData(ReactDOM.findDOMNode(this.refs.form));
      var multipartOptions = {
        data: fd,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false
      };
      submitOptions = $.extend({}, submitOptions, multipartOptions);
    }

    $.ajax(submitOptions);
  },

  formSubmit: function formSubmit() {
    var formNode = ReactDOM.findDOMNode(this.refs.form);
    formNode.submit();
  },

  isLoading: function isLoading() {
    var isLoading = this.state.isLoading;
    if (isLoading === null) {
      isLoading = this.props.isLoading;
    }

    return isLoading;
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FormButtonGroup = React.createClass({
  displayName: 'FormButtonGroup',

  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    submitButton: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]),
    otherButtons: React.PropTypes.array,
    isLoading: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'form.buttonGroup',
      inputs: {},
      submitButton: {
        name: 'actions.send',
        icon: 'send'
      },
      otherButtons: [],
      isLoading: false
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className() },
      this.renderOtherButtons(),
      this.renderSubmitButton()
    );
  },

  renderOtherButtons: function renderOtherButtons() {
    if (!_.isEmpty(this.props.inputs) && this.isAllInputsHidden()) {
      return '';
    }

    var otherButtonsProps = this.props.otherButtons;
    var otherButtons = [];

    for (var i = 0; i < otherButtonsProps.length; i++) {
      var otherButtonProps = otherButtonsProps[i];
      otherButtons.push(React.createElement(Button, _extends({}, otherButtonProps, { key: otherButtonProps.name })));
    }

    return otherButtons;
  },

  renderSubmitButton: function renderSubmitButton() {
    if (!_.isEmpty(this.props.inputs) && this.isAllInputsHidden() || !this.props.submitButton) {
      return '';
    }

    var submitButton = [];
    submitButton.push(React.createElement(Button, _extends({}, this.submitButtonProps(), { ref: 'submitButton', key: 'submit_button' })));
    return submitButton;
  },

  isAllInputsHidden: function isAllInputsHidden() {
    var allHidden = true;
    var inputs = this.props.inputs;

    for (var property in inputs) {
      if (inputs.hasOwnProperty(property)) {
        var input = inputs[property];
        if (input.component !== 'hidden') return allHidden = false;
      }
    }

    return allHidden;
  },

  submitButtonProps: function submitButtonProps() {
    var isLoading = this.props.isLoading;
    return $.extend({}, this.props.submitButton, {
      type: "submit",
      disabled: isLoading,
      isLoading: isLoading
    });
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputGroup = React.createClass({
  displayName: 'InputGroup',

  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    errors: React.PropTypes.object,
    resource: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    label: React.PropTypes.string,
    separator: React.PropTypes.bool,
    formStyle: React.PropTypes.string,
    wrapperClassName: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      inputs: {},
      data: {},
      errors: {},
      formStyle: 'default',
      label: null,
      separator: false,
      disabled: false,
      readOnly: false,
      themeClassKey: 'form.inputGroup',
      wrapperClassName: 'wrapper_input_group'
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.wrapperClassName },
      React.createElement(
        'div',
        { className: this.inputGroupClassName() },
        this.renderLabel(),
        this.renderInputs(),
        this.props.children
      ),
      this.renderDivider()
    );
  },

  inputGroupClassName: function inputGroupClassName() {
    var className = this.className();
    if (this.props.label !== null) {
      className += ' ' + Realize.themes.getCssClass('form.inputGroup.section');
    }

    return className;
  },

  renderInputs: function renderInputs() {
    var inputsProps = this.props.inputs;
    var inputComponents = [];
    var inputIndex = 0;

    for (var inputId in inputsProps) {
      if (inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if (!inputProps.id) {
          inputProps.id = inputId;
        }

        inputComponents.push(React.createElement(Input, _extends({}, inputProps, {
          data: this.props.data,
          errors: this.props.errors,
          resource: this.props.resource,
          formStyle: this.props.formStyle,
          disabled: this.props.disabled,
          readOnly: this.props.readOnly,
          key: "input_" + inputIndex,
          ref: "input_" + inputIndex
        })));

        inputIndex++;
      }
    }

    return inputComponents;
  },

  renderLabel: function renderLabel() {
    if (this.props.label === null) {
      return '';
    }

    return React.createElement(
      'h5',
      null,
      this.props.label
    );
  },

  renderDivider: function renderDivider() {
    if (!this.props.separator) {
      return '';
    }

    //TODO: refatorar para um componente
    var className = Realize.themes.getCssClass('form.inputGroup.divider');
    return React.createElement(
      'div',
      { className: className },
      React.createElement('hr', null)
    );
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Grid = React.createClass({
  displayName: 'Grid',

  mixins: [CssClassMixin, RequestHandlerMixin, RestActionsMixin, GridActionsMixin],

  propTypes: {
    url: React.PropTypes.string,
    eagerLoad: React.PropTypes.bool,
    resource: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    paginationType: React.PropTypes.string,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filter: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    selectedRowIdsParam: React.PropTypes.string,
    dataRowIdField: React.PropTypes.string,
    isLoading: React.PropTypes.bool,
    selectable: React.PropTypes.bool,
    tableClassName: React.PropTypes.string,
    onLoadSuccess: React.PropTypes.func,
    onLoadError: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func,
    customTableHeader: React.PropTypes.string,
    forceShowSelectAllButton: React.PropTypes.bool,
    onClickRow: React.PropTypes.func,
    tableRowCssClass: React.PropTypes.func,
    paginationOnTop: React.PropTypes.bool,
    clearThemeTable: React.PropTypes.bool,
    pagination: React.PropTypes.bool,
    perPageOptions: React.PropTypes.array
  },

  paginationConfigs: null,
  sortConfigs: null,

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'grid',
      eagerLoad: false,
      paginationConfigs: {},
      paginationType: 'default',
      sortConfigs: {},
      sortData: {},
      filter: {},
      columns: {},
      dataRowsParam: 'data',
      countParam: 'count',
      selectedRowIdsParam: 'rowIds',
      dataRowIdField: 'id',
      isLoading: false,
      selectable: true,
      rowSelectableFilter: null,
      customTableHeader: null,
      forceShowSelectAllButton: false,
      onClickRow: null,
      tableRowCssClass: null,
      paginationOnTop: true,
      clearThemeTable: false,
      pagination: true,
      perPageOptions: [{ name: 10, value: 10 }, { name: 20, value: 20 }, { name: 50, value: 50 }],
      onLoadSuccess: function onLoadSuccess(data) {},
      onLoadError: function onLoadError(xhr, status, error) {},
      data: {
        dataRows: [],
        count: 0
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      dataRows: this.props.data.dataRows,
      selectedRowIds: [],
      allSelected: false,
      count: this.props.data.count,
      page: 1,
      perPage: this.initialPerPage(),
      filterData: {},
      sortData: this.props.sortData,
      gridIsLoading: this.props.isLoading
    };
  },

  componentDidMount: function componentDidMount() {
    this.paginationConfigs = $.extend({}, Realize.config.grid.pagination, this.props.paginationConfigs);
    this.sortConfigs = $.extend({}, Realize.config.grid.sort, this.props.sortConfigs);

    this.setState({
      filterData: this.getInitialFilterData()
    }, (function () {
      if (!!this.props.eagerLoad) {
        this.loadData();
      }
    }).bind(this));
  },

  backToInitialState: function backToInitialState() {
    this.setState({
      selectedRowIds: [],
      allSelected: false,
      page: 1
    });

    this.setState({
      filterData: this.getInitialFilterData()
    }, (function () {
      this.loadData();
    }).bind(this));
  },

  initialPerPage: function initialPerPage() {
    var paginationConfigs = $.extend({}, Realize.config.grid.pagination, this.props.paginationConfigs);
    return paginationConfigs.perPage;
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.gridClassName(), ref: 'grid' },
      this.renderFilter(),
      this.renderPaginationOnTop(),
      this.renderTable(),
      this.renderPagination()
    );
  },

  renderPaginationOnTop: function renderPaginationOnTop() {
    if (!!this.props.paginationOnTop) return this.renderPagination();
  },

  gridClassName: function gridClassName() {
    var className = this.className();
    if (this.state.gridIsLoading) {
      className += ' loading';
    }

    return className;
  },

  /* Initializers */

  getInitialFilterData: function getInitialFilterData() {
    var gridFilterNode = ReactDOM.findDOMNode(this.refs.filter);
    var filterForm = $(gridFilterNode).find('form');

    return filterForm.serializeObject();
  },

  /* Renderers */

  renderFilter: function renderFilter() {
    if ($.isEmptyObject(this.props.filter)) {
      return '';
    }

    return React.createElement(GridFilter, _extends({
      action: this.props.url
    }, this.props.filter, {
      isLoading: this.state.gridIsLoading,
      onSubmit: this.onFilterSubmit,
      ref: 'filter'
    }));
  },

  renderTable: function renderTable() {
    return React.createElement(GridTable, {
      resource: this.props.resource,
      columns: this.props.columns,
      sortConfigs: this.sortConfigs,
      sortData: this.state.sortData,
      dataRows: this.state.dataRows,
      selectable: this.props.selectable,
      selectedRowIds: this.state.selectedRowIds,
      selectedRowIdsParam: this.props.selectedRowIdsParam,
      dataRowIdField: this.props.dataRowIdField,
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
      customTableHeader: this.props.customTableHeader,
      forceShowSelectAllButton: this.props.forceShowSelectAllButton,
      onClickRow: this.props.onClickRow,
      rowHref: this.getRowHref(),
      tableRowCssClass: this.props.tableRowCssClass,
      clearThemeTable: this.props.clearThemeTable
    });
  },

  renderPagination: function renderPagination() {
    if (this.props.pagination) {
      return React.createElement(GridPagination, _extends({}, this.paginationConfigs, {
        perPageOptions: this.props.perPageOptions,
        perPage: this.state.perPage,
        page: this.state.page,
        count: this.state.count,
        onPagination: this.onPagination,
        onChangePerPage: this.onChangePerPage,
        pageRowsCount: this.state.dataRows.length,
        type: this.props.paginationType
      }));
    }
  },

  /* Event handlers */

  onPagination: function onPagination(page) {
    this.state.page = page;
    if (this.state.allSelected) {
      this.state.selectedRowIds = [];
    }

    this.state.allSelected = false;
    this.loadData();
  },

  onChangePerPage: function onChangePerPage(perPage) {
    this.state.perPage = perPage;
    this.paginationConfigs.perPage = perPage;

    if (this.state.allSelected) this.state.selectedRowIds = [];

    this.state.allSelected = false;
    this.loadData();
  },

  onFilterSubmit: function onFilterSubmit(event, postData) {
    event.preventDefault();

    this.state.selectedRowIds = [];
    this.state.allSelected = false;
    this.state.filterData = postData;
    this.state.page = 1;
    this.loadData();
  },

  onSort: function onSort(sortData) {
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  },

  /* Data load handler */

  loadData: function loadData() {
    this.setState({ gridIsLoading: true });
    var postData = this.buildPostData();
    var filterProps = this.props.filter;
    var filterMethod = filterProps.method || 'GET';
    var filterDataType = filterProps.dataType || 'json';

    $.ajax({
      url: this.getRestActionUrl('index'),
      method: filterMethod,
      dataType: filterDataType,
      data: postData,
      success: this.handleLoad,
      error: this.handleLoadError
    });
  },

  handleLoad: function handleLoad(data) {
    this.setState({
      gridIsLoading: false,
      dataRows: data[this.props.dataRowsParam],
      count: data[this.props.countParam]
    }, (function () {
      this.props.onLoadSuccess(data);
    }).bind(this));
  },

  handleLoadError: function handleLoadError(xhr, status, error) {
    this.props.onLoadError(xhr, status, error);
    this.setState({ gridIsLoading: false });
    console.log('Grid Load Error:' + error);
  },

  buildPostData: function buildPostData() {
    var postData = $.extend({}, this.state.filterData);

    $.extend(postData, this.buildPaginationPostData());
    if (!$.isEmptyObject(this.state.sortData)) {
      $.extend(postData, this.buildSortPostData());
    }

    return postData;
  },

  buildPaginationPostData: function buildPaginationPostData() {
    var paginationPostData = {};

    var paginationParam = this.paginationConfigs.param;
    var paginationParamPerPage = 'per_page';

    paginationPostData[paginationParam] = this.state.page;
    paginationPostData[paginationParamPerPage] = this.state.perPage;

    return paginationPostData;
  },

  buildSortPostData: function buildSortPostData() {
    var sortParam = this.sortConfigs.param;
    var sortDirectionParam = this.sortConfigs.directionParam;
    var sortPostData = {};
    sortPostData[sortParam] = this.parseSortPostDataValue();
    sortPostData[sortDirectionParam] = this.state.sortData.direction;

    return sortPostData;
  },

  parseSortPostDataValue: function parseSortPostDataValue() {
    var sortValueFormat = this.sortConfigs.fieldValueFormat;
    var field = this.state.sortData.field;
    var direction = this.state.sortData.direction;

    if (!sortValueFormat) {
      return field;
    }

    return sortValueFormat.replace(/%\{field}/, field).replace(/%\{direction}/, direction);
  },

  /* Selection handlers */

  selectDataRows: function selectDataRows(event, selectedRowIds) {
    event.preventDefault();

    this.setState({
      selectedRowIds: selectedRowIds,
      allSelected: false
    });
  },

  removeSelection: function removeSelection(event) {
    event.preventDefault();

    this.setState({
      selectedRowIds: [],
      allSelected: false
    });
  },

  selectAllRows: function selectAllRows(event) {
    event.preventDefault();

    this.setState({
      allSelected: true
    });
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var GridFilter = React.createClass({
  displayName: 'GridFilter',

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
    isLoading: React.PropTypes.bool,
    collapsible: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      method: "GET",
      collapsible: false,
      submitButton: {
        name: 'actions.filter',
        icon: 'search'
      },
      clearButton: {
        name: 'actions.clear',
        type: 'reset',
        style: 'cancel'
      },
      onSuccess: function onSuccess(data) {
        return true;
      },
      onError: function onError(xhr, status, error) {
        return true;
      },
      onSubmit: function onSubmit(event) {
        return true;
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: 'grid.filter.wrapper'
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className() },
      this.renderFilters()
    );
  },

  renderFilters: function renderFilters() {
    if (this.props.collapsible) {
      return this.renderCollapsibleFilter();
    } else {
      return this.renderFormFilters();
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    var collapsible = ReactDOM.findDOMNode(this.refs.collapsible);
    if (!!collapsible) {
      $(collapsible).collapsible();
    }
  },

  renderCollapsibleFilter: function renderCollapsibleFilter() {
    var component = [];

    component.push(React.createElement(
      'ul',
      { className: 'collapsible', 'data-collapsible': 'accordion', ref: 'collapsible', key: 'collapsible_form' },
      React.createElement(
        'li',
        null,
        React.createElement(
          'div',
          { className: 'collapsible-header' },
          React.createElement(
            'span',
            null,
            'Filtrar'
          ),
          React.createElement(
            'i',
            { className: 'material-icons' },
            'filter_list'
          )
        ),
        React.createElement(
          'div',
          { className: 'collapsible-body' },
          this.renderFormFilters()
        )
      )
    ));

    return component;
  },

  renderFormFilters: function renderFormFilters() {
    return React.createElement(Form, _extends({}, this.props, { otherButtons: [this.props.clearButton], style: 'filter', ref: 'form' }));
  },

  serialize: function serialize() {
    return this.refs.form.serialize();
  }

});

'use strict';

var GridPagination = React.createClass({
  displayName: 'GridPagination',

  mixins: [CssClassMixin],
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func,
    onChangePerPage: React.PropTypes.func,
    pageRowsCount: React.PropTypes.number,
    type: React.PropTypes.string,
    perPageOptions: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'grid.pagination',
      page: 1,
      perPage: 20,
      window: 4,
      perPageOptions: [{ name: 10, value: 10 }, { name: 20, value: 20 }, { name: 50, value: 50 }],
      onPagination: function onPagination(page) {
        return true;
      },
      onChangePerPage: function onChangePerPage(perPage) {
        return true;
      }
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className() },
      this.renderPagination(),
      this.renderRangePagination(),
      this.renderPerPage()
    );
  },

  renderRangePagination: function renderRangePagination() {
    return React.createElement(
      'div',
      { className: 'range_pagination' },
      React.createElement(
        'span',
        null,
        this.rangePaginationText()
      )
    );
  },

  renderPerPage: function renderPerPage() {
    return React.createElement(
      'div',
      { className: 'per_page' },
      React.createElement(Input, { value: this.props.perPage, component: 'select',
        includeBlank: false, clearTheme: true,
        className: 'form__input input-field',
        options: this.props.perPageOptions,
        onChange: this.changePerPage
      })
    );
  },

  renderPagination: function renderPagination() {
    var totalRowsCount = this.props.count;
    var pageRowsCount = this.props.pageRowsCount;
    if (totalRowsCount <= pageRowsCount) {
      return null;
    }

    return React.createElement(
      'div',
      null,
      React.createElement(Pagination, {
        page: this.props.page,
        count: this.props.count,
        perPage: this.props.perPage,
        window: this.props.window,
        onPagination: this.props.onPagination,
        type: this.props.type
      })
    );
  },

  changePerPage: function changePerPage(event) {
    var value = event.currentTarget.value;
    this.props.onChangePerPage(value);
  },

  rangePaginationText: function rangePaginationText() {
    var perPage = this.props.perPage;
    var page = this.props.page;
    var pageRowsCount = this.props.pageRowsCount;

    var firstElement = perPage * page - (perPage - 1);
    var lastElement = pageRowsCount < perPage ? this.props.count : perPage * page;
    var totalElement = this.props.count;

    return firstElement + ' - ' + lastElement + ' de ' + totalElement;
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var GridTable = React.createClass({
  displayName: 'GridTable',

  mixins: [CssClassMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'grid.table'
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className() },
      React.createElement(Table, _extends({}, this.propsWithoutCSS(), { className: this.props.tableClassName, clearTheme: this.props.clearThemeTable }))
    );
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var GridForm = React.createClass({
  displayName: 'GridForm',

  mixins: [CssClassMixin, UtilsMixin, RestActionsMixin],

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
    eagerLoad: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    formComponent: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onLoadSuccess: React.PropTypes.func,
    onLoadError: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
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
      eagerLoad: true,
      readOnly: false,
      formComponent: Form,
      onSubmit: function onSubmit(event, postData) {},
      onReset: function onReset(event) {},
      onSuccess: function onSuccess(data, status, xhr) {
        return true;
      },
      onError: function onError(xhr, status, error) {
        return true;
      },
      onLoadSuccess: function onLoadSuccess(data) {},
      onLoadError: function onLoadError(xhr, status, error) {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      formAction: 'create',
      selectedDataRow: null,
      selectedRowId: null,
      isLoading: this.props.isLoading
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className() },
      React.createElement(
        'div',
        { className: this.className() + "__form" },
        this.renderForm()
      ),
      React.createElement(
        'div',
        { className: this.className() + "__grid" },
        React.createElement(Grid, _extends({}, this.propsWithoutCSS(), {
          actionButtons: this.getActionButtons(),
          ref: 'grid'
        }))
      )
    );
  },

  renderForm: function renderForm() {
    if (this.props.readOnly) {
      return;
    }

    var formProps = React.__spread({ style: 'filter' }, this.props.form, {
      action: this.getFormAction(),
      data: this.state.selectedDataRow,
      method: this.getFormMethod(),
      submitButton: this.getFormSubmitButton(),
      otherButtons: this.getFormOtherButtons(),
      onSubmit: this.onSubmit,
      onReset: this.onReset,
      onSuccess: this.onSuccess,
      onError: this.onError,
      key: "form_" + this.generateUUID(),
      ref: "form"
    });

    return React.createElement(this.props.formComponent, formProps, null);
  },

  getFormAction: function getFormAction() {
    return this.getRestActionUrl(this.state.formAction, this.state.selectedRowId);
  },

  getFormMethod: function getFormMethod() {
    return this.getRestActionMethod(this.state.formAction);
  },

  getFormSubmitButton: function getFormSubmitButton() {
    if (this.state.formAction == 'create') {
      return this.props.createButton;
    } else if (this.state.formAction == 'update') {
      return this.props.updateButton;
    }

    return '';
  },

  getFormOtherButtons: function getFormOtherButtons() {
    if (this.state.formAction == 'update') {
      var cancelButtonProps = $.extend({}, this.props.cancelButton, {
        type: "reset"
      });

      return [cancelButtonProps];
    }

    return [];
  },

  getActionButtons: function getActionButtons() {
    var actionButtons = this.props.actionButtons || {};

    if (!actionButtons.member) {
      actionButtons.member = this.getDefaultMemberActionButtons();
    }

    if (!actionButtons.collection) {
      actionButtons.collection = this.getDefaultCollectionActionButtons();
    }

    return actionButtons;
  },

  getDefaultMemberActionButtons: function getDefaultMemberActionButtons() {
    if (this.props.readOnly) {
      return [];
    }

    return [{
      icon: 'edit',
      onClick: this.editAction
    }, {
      icon: 'destroy',
      onClick: this.destroyAction
    }];
  },

  getDefaultCollectionActionButtons: function getDefaultCollectionActionButtons() {
    return [];
  },

  onSubmit: function onSubmit(event, postData) {
    this.props.onSubmit(event, postData);
  },

  onReset: function onReset(event) {
    this.setState({
      formAction: 'create',
      selectedRowId: null,
      selectedDataRow: null
    });

    this.clearFormErrors();
    this.props.onReset(event);
  },

  onSuccess: function onSuccess(data, status, xhr) {
    if (this.props.onSuccess(data, status, xhr)) {
      this.loadGridData();
      this.resetForm();
    }
  },

  onError: function onError(xhr, status, error) {
    return this.props.onError(xhr, status, error);
  },

  editAction: function editAction(event, id, data) {
    this.setState({
      formAction: 'update',
      selectedRowId: id,
      selectedDataRow: data
    });

    this.clearFormErrors();
  },

  destroyAction: function destroyAction(event, id) {
    var destroyUrl = this.getRestActionUrl('destroy', id);
    var destroyMethod = this.getRestActionMethod('destroy');

    if (!this.props.destroyConfirm || confirm(this.props.destroyConfirm)) {
      this.setState({ isLoading: true });
      this.resetForm();

      $.ajax({
        url: destroyUrl,
        method: destroyMethod,
        success: this.handleDestroy,
        error: this.handleDestroyError
      });
    }
  },

  handleDestroy: function handleDestroy(data) {
    this.loadGridData(data);
  },

  handleDestroyError: function handleDestroyError(xhr, status, error) {
    this.setState({ isLoading: false });
    console.log(error);
  },

  loadGridData: function loadGridData() {
    var gridRef = this.refs.grid;
    gridRef.loadData();
  },

  resetForm: function resetForm() {
    var formNode = ReactDOM.findDOMNode(this.refs.form);
    formNode.reset();
  },

  clearFormErrors: function clearFormErrors() {
    var formRef = this.refs.form;
    formRef.clearErrors();
  }

});

'use strict';

var Header = React.createClass({
  displayName: 'Header',

  mixins: [CssClassMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'header',
      wrapperClassName: 'nav-wrapper container'
    };
  },

  componentDidMount: function componentDidMount() {
    $(".button-collapse").sideNav({
      edge: 'right',
      closeOnClick: true
    });
    $('.collapsible').collapsible();
  },

  render: function render() {
    return React.createElement(
      'nav',
      { className: this.className(), role: 'navigation' },
      React.createElement(
        'div',
        { className: this.props.wrapperClassName },
        this.props.children
      )
    );
  }

});

'use strict';

var HeaderButton = React.createClass({
  displayName: 'HeaderButton',

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

  getDefaultProps: function getDefaultProps() {
    return {
      iconAlign: ' '
    };
  },

  render: function render() {
    var button = '';
    if (this.props.imgSrc) button = this.renderImage();else button = this.renderButton();

    return button;
  },

  renderButton: function renderButton() {
    return React.createElement(
      'a',
      { href: this.props.href, ref: this.props.ref, onClick: this.props.onClick, target: this.props.target },
      React.createElement(
        'i',
        { className: 'material-icons ' + this.props.iconAlign },
        this.props.icon
      ),
      this.props.text
    );
  },

  renderImage: function renderImage() {
    return React.createElement(
      'a',
      { className: 'brand-logo', href: this.props.href },
      React.createElement('img', { src: this.props.imgSrc, alt: this.props.imgAlt })
    );
  }

});

'use strict';

var HeaderMenu = React.createClass({
  displayName: 'HeaderMenu',

  //mixins: [CssClassMixin],

  propTypes: {
    items: React.PropTypes.array,
    leftIcon: React.PropTypes.string,
    rightIcon: React.PropTypes.string,
    text: React.PropTypes.string,
    href: React.PropTypes.string,
    ref_id: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      items: [],
      leftIcon: '',
      rightIcon: '',
      ref_id: 'headerMenu'
    };
  },

  render: function render() {
    var leftIcon = this.props.leftIcon !== '' ? React.createElement(
      'i',
      { className: 'material-icons left' },
      this.props.leftIcon
    ) : '';
    var rightIcon = this.props.rightIcon !== '' ? React.createElement(
      'i',
      { className: 'material-icons right' },
      this.props.rightIcon
    ) : '';

    return React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: this.props.href, ref: 'readerMenu', onClick: this.props.onClick, target: this.props.target, 'data-activates': this.props.ref_id },
        leftIcon,
        this.props.text,
        rightIcon
      ),
      this.renderMenu()
    );
  },

  renderMenu: function renderMenu() {
    return React.createElement(
      Menu,
      { ref_id: this.props.ref_id, className: 'dropdown-content', items: this.props.items },
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.readerMenu)).dropdown();
  }

});

'use strict';

var HeaderSection = React.createClass({
  displayName: 'HeaderSection',

  //mixins: [CssClassMixin],

  propTypes: {
    align: React.PropTypes.string,
    id: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      align: 'left',
      className: 'hide-on-med-and-down'
    };
  },

  render: function render() {
    return React.createElement(
      'ul',
      { className: this.props.className + ' ' + this.props.align, id: this.props.id },
      this.renderChildren()
    );
  },

  renderChildren: function renderChildren() {
    return React.Children.map(this.props.children, function (child, i) {
      return React.createElement(
        'li',
        { key: "item_" + i },
        child
      );
    });
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Icon = React.createClass({
  displayName: 'Icon',

  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: ''
    };
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: 'icon'
    };
  },

  render: function render() {
    return React.createElement(
      'i',
      _extends({ className: this.className() }, this.propsWithoutCSS()),
      this.iconType()
    );
  },

  iconType: function iconType() {
    var iconType = Realize.themes.getProp('icon.' + this.props.type);
    if (!iconType) {
      iconType = this.props.type;
    }

    return iconType;
  }
});

'use strict';

var Spinner = React.createClass({
  displayName: 'Spinner',

  propTypes: {
    size: React.PropTypes.string,
    color: React.PropTypes.string,
    active: React.PropTypes.bool,
    className: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      size: 'small',
      color: 'green',
      active: true,
      className: ''
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.wrapperClassName() },
      React.createElement(
        'div',
        { className: this.layerClassName() },
        React.createElement(
          'div',
          { className: 'circle-clipper left' },
          React.createElement('div', { className: 'circle' })
        ),
        React.createElement(
          'div',
          { className: 'gap-patch' },
          React.createElement('div', { className: 'circle' })
        ),
        React.createElement(
          'div',
          { className: 'circle-clipper right' },
          React.createElement('div', { className: 'circle' })
        )
      )
    );
  },

  wrapperClassName: function wrapperClassName() {
    var className = "spinner preloader-wrapper " + this.props.size;
    if (this.props.active) {
      className += " active";
    }

    className += " " + this.props.className;
    return className;
  },

  layerClassName: function layerClassName() {
    var className = "spinner-layer spinner-" + this.props.color + "-only";

    return className;
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputAutocomplete = React.createClass({
  displayName: 'InputAutocomplete',

  mixins: [CssClassMixin, InputComponentMixin, SelectComponentMixin, InputSelectActionsListenerMixin],

  propTypes: {
    maxOptions: React.PropTypes.number,
    maxOptionsParam: React.PropTypes.string,
    searchParam: React.PropTypes.string,
    actionButtons: React.PropTypes.array
  },

  getDefaultProps: function getDefaultProps() {
    return {
      maxOptions: 99,
      maxOptionsParam: 'limit',
      searchParam: 'query',
      themeClassKey: 'input.autocomplete',
      actionButtons: []
    };
  },

  getInitialState: function getInitialState() {
    return {
      active: 0,
      searchValue: ''
    };
  },

  componentWillMount: function componentWillMount() {
    this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
  },

  componentDidMount: function componentDidMount() {
    var valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.on('reset', this.clearSelection);
  },

  componentWillUnmount: function componentWillUnmount() {
    var valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.off('reset', this.clearSelection);
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className(), ref: 'container' },
      React.createElement(InputAutocompleteSelect, _extends({}, this.propsWithoutCSS(), {
        disabled: this.isDisabled(),
        selectedOptions: this.selectedOptions(),
        onFocus: this.showResult
      })),
      React.createElement(InputAutocompleteResult, {
        id: this.props.id,
        selectedOptions: this.selectedOptions(),
        options: this.state.options,
        active: this.state.active,
        searchValue: this.state.searchValue,
        actionButtons: this.props.actionButtons,
        onKeyDown: this.handleSearchNavigation,
        onChange: this.searchOptions,
        onSelect: this.handleSelect,
        onClear: this.clearSelection,
        onOptionMouseEnter: this.handleOptionMouseEnter,
        ref: 'result'
      }),
      React.createElement(InputAutocompleteValues, {
        id: this.props.id,
        name: this.props.name,
        multiple: this.props.multiple,
        selectedOptions: this.selectedOptions(),
        ref: 'select'
      })
    );
  },

  handleDocumentClick: function handleDocumentClick(event) {
    var $resultNode = $(ReactDOM.findDOMNode(this.refs.result));
    var $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    var searchInput = $resultNode.find('input[type=text]')[0];

    if ($containerNode.find(event.target).length === 0) {
      this.hideResult();
    } else {
      searchInput.focus();
    }
  },

  hideResult: function hideResult() {
    $(document).off('click', this.handleDocumentClick);
    var $resultNode = $(ReactDOM.findDOMNode(this.refs.result));
    var $searchInput = $resultNode.find('input[type=text]');
    $resultNode.hide();
    $searchInput.val('');

    this.state.loadParams[this.props.searchParam] = '';
    this.setState({
      active: 0
    });
  },

  showResult: function showResult(event) {
    if (this.state.disabled || this.props.readOnly) {
      var selectInput = event.currentTarget;
      selectInput.blur();

      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $resultNode = $(ReactDOM.findDOMNode(this.refs.result));
    var searchInput = $resultNode.find('input[type=text]')[0];

    $resultNode.show();
    searchInput.focus();
  },

  searchOptions: function searchOptions(event) {
    var $searchInput = $(event.currentTarget);

    this.state.searchValue = $searchInput.val();
    this.state.loadParams[this.props.searchParam] = this.state.searchValue;
    this.loadOptions();
  },

  handleSearchNavigation: function handleSearchNavigation(event) {
    var keyCode = event.keyCode;

    if (keyCode == 38) {
      this.moveActiveUp();
    } else if (keyCode == 40) {
      this.moveActiveDown();
    } else if (keyCode == 13) {
      event.preventDefault();
      this.selectOption();
    } else if (keyCode == 27 || keyCode == 9) {
      this.hideResult();
    }
  },

  moveActiveUp: function moveActiveUp() {
    this.setState({
      active: Math.max(0, this.state.active - 1)
    });
  },

  moveActiveDown: function moveActiveDown() {
    var $resultNode = $(ReactDOM.findDOMNode(this.refs.result));
    var resultListCount = $resultNode.find('li').length;

    this.setState({
      active: Math.min(resultListCount - 1, this.state.active + 1)
    });
  },

  selectOption: function selectOption() {
    var resultRef = this.refs.result;
    var resultListRef = resultRef.refs.list;
    var activeOptionRef = resultListRef.refs["option_" + this.state.active];

    this.handleSelect({
      name: activeOptionRef.props.name,
      value: activeOptionRef.props.value,
      showOnTop: false
    });
  },

  clearSelection: function clearSelection() {
    this.setState({
      value: []
    }, this.triggerDependableChanged);

    if (!!this.props.onSelect) {
      this.props.onSelect(this.props.id, [], []);
    }
  },

  handleOptionMouseEnter: function handleOptionMouseEnter(position) {
    this.setState({
      active: position
    });
  },

  handleSelect: function handleSelect(option) {
    var optionIndex = this.state.value.indexOf(option.value);

    if (optionIndex < 0) {
      if (!this.props.multiple) {
        this.state.value = [];
      }

      this.state.value.push(option.value);
    } else {
      this.state.value.splice(optionIndex, 1);
    }

    this.forceUpdate();
    this.triggerDependableChanged();

    if (!!this.props.onSelect) {
      this.props.onSelect(this.props.id, this.state.value, this.state.loadData);
    }
  }

});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputAutocompleteList = React.createClass({
  displayName: "InputAutocompleteList",

  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    selectedOptions: React.PropTypes.array,
    options: React.PropTypes.array,
    active: React.PropTypes.number,
    onSelect: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.autocomplete.list',
      options: [],
      selectedOptions: [],
      onSelect: function onSelect() {
        return true;
      },
      onOptionMouseEnter: function onOptionMouseEnter() {
        return true;
      }
    };
  },

  render: function render() {
    return React.createElement(
      "ul",
      { className: this.className() },
      this.renderOptions()
    );
  },

  renderOptions: function renderOptions() {
    var options = [].concat(this.onTopSelectedOptions(), this.otherOptions());
    var listOptions = [];

    for (var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      listOptions.push(React.createElement(InputAutocompleteOption, _extends({}, optionProps, {
        onSelect: this.props.onSelect,
        onOptionMouseEnter: this.props.onOptionMouseEnter,
        position: i,
        isActive: i == this.props.active,
        id: this.props.id,
        key: optionProps.name,
        ref: "option_" + i
      })));
    }

    return listOptions;
  },

  onTopSelectedOptions: function onTopSelectedOptions() {
    var selectedOptions = $.map(this.props.selectedOptions, function (selectedOption) {
      var option = $.extend({}, selectedOption);

      option.selected = true;
      return option;
    });

    return $.grep(selectedOptions, function (option) {
      return !!option.showOnTop;
    });
  },

  otherOptions: function otherOptions() {
    var otherOptions = $.map(this.props.options, (function (option) {
      var otherOption = $.extend({}, option);
      var relatedSelectedOption = $.grep(this.props.selectedOptions, function (selectedOption) {
        return selectedOption.value == otherOption.value;
      })[0];

      if (!!relatedSelectedOption) {
        otherOption.selected = true;
        otherOption.showOnTop = relatedSelectedOption.showOnTop;
      }

      return otherOption;
    }).bind(this));

    return $.grep(otherOptions, function (option) {
      return !option.showOnTop;
    });
  }
});

'use strict';

var InputAutocompleteOption = React.createClass({
  displayName: 'InputAutocompleteOption',

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

  getDefaultProps: function getDefaultProps() {
    return {
      selected: false,
      onSelect: function onSelect() {
        return true;
      },
      onOptionMouseEnter: function onOptionMouseEnter() {
        return true;
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: this.parseThemeClassKey(this.props.isActive)
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      themeClassKey: this.parseThemeClassKey(nextProps.isActive)
    });
  },

  parseThemeClassKey: function parseThemeClassKey(isActive) {
    var themeClassKey = 'input.autocomplete.option';
    if (isActive) {
      themeClassKey += ' input.autocomplete.option.active';
    }

    return themeClassKey;
  },

  render: function render() {
    return React.createElement(
      'li',
      { className: this.className(), onClick: this.handleSelect, onMouseEnter: this.handleMouseEnter },
      React.createElement(InputCheckbox, { id: this.parseOptionId(), checked: this.props.selected, onChange: this.disableEvent, onClick: this.disableEvent, key: this.generateUUID() }),
      React.createElement(Label, { id: this.parseOptionId(), name: this.props.name })
    );
  },

  handleSelect: function handleSelect(event) {
    var option = {
      name: this.props.name,
      value: this.props.value,
      showOnTop: false
    };

    this.props.onSelect(option);
    event.stopPropagation();
  },

  handleMouseEnter: function handleMouseEnter() {
    this.props.onOptionMouseEnter(this.props.position);
  },

  disableEvent: function disableEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  },

  parseOptionId: function parseOptionId() {
    return 'autocomplete_option_' + this.props.id + '_' + this.props.value;
  }
});

"use strict";

var InputAutocompleteResult = React.createClass({
  displayName: "InputAutocompleteResult",

  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    options: React.PropTypes.array,
    selectedOptions: React.PropTypes.array,
    active: React.PropTypes.number,
    searchValue: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    onKeyDown: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onClear: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.autocomplete.result',
      options: [],
      selectedOptions: []
    };
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: this.className() },
      this.renderSearchInput(),
      this.renderClearButton(),
      this.renderResult(),
      this.renderActionButtons()
    );
  },

  renderSearchInput: function renderSearchInput() {
    return React.createElement(
      "div",
      { className: "input-autocomplete__search" },
      React.createElement(Icon, { type: "search", className: "prefix" }),
      React.createElement(InputText, {
        onKeyDown: this.props.onKeyDown,
        value: this.props.searchValue,
        onChange: this.props.onChange,
        autoComplete: "off"
      })
    );
  },

  renderClearButton: function renderClearButton() {
    return React.createElement(
      "a",
      { href: "#!",
        className: "input-autocomplete__clear-button",
        onClick: this.props.onClear },
      Realize.t("inputs.autocomplete.clear")
    );
  },

  renderResult: function renderResult() {
    var options = this.props.options;
    if (options.length > 0) {
      return this.renderList();
    } else {
      return this.renderEmptyMessage();
    }
  },

  renderList: function renderList() {
    return React.createElement(InputAutocompleteList, {
      id: this.props.id,
      selectedOptions: this.props.selectedOptions,
      options: this.props.options,
      active: this.props.active,
      onSelect: this.props.onSelect,
      onOptionMouseEnter: this.props.onOptionMouseEnter,
      ref: "list"
    });
  },

  renderEmptyMessage: function renderEmptyMessage() {
    return React.createElement(
      "div",
      { className: "input-autocomplete__empty-message" },
      Realize.t("inputs.autocomplete.emptyResult")
    );
  },

  renderActionButtons: function renderActionButtons() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for (var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(this.renderActionButton(actionButtonProps, i));
    }

    return React.createElement(
      "div",
      { className: "input-autocomplete__action-buttons" },
      actionButtons
    );
  },

  renderActionButton: function renderActionButton(actionButtonProps, i) {
    var buttonComponent = actionButtonProps.component || 'Button';
    var buttonProps = React.__spread({}, actionButtonProps, {
      themeClassKey: 'input.autocomplete.actionButton',
      element: "a",
      key: "action_" + i
    });

    return React.createElement(eval(buttonComponent), buttonProps);
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputAutocompleteSelect = React.createClass({
  displayName: 'InputAutocompleteSelect',

  mixins: [CssClassMixin, UtilsMixin, InputComponentMixin],

  propTypes: {
    selectedOptions: React.PropTypes.array,
    placeholder: Realize.PropTypes.localizedString
  },

  getDefaultProps: function getDefaultProps() {
    return {
      selectedOptions: [],
      themeClassKey: 'input.autocomplete.select',
      placeholder: 'select'
    };
  },

  getInitialState: function getInitialState() {
    return {
      options: []
    };
  },

  //TODO: este e um componente do materialize. Tornar este componente generico.
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: this.className() },
        React.createElement(
          'span',
          { className: 'caret', onClick: this.focusSelect },
          '▼'
        ),
        React.createElement(InputText, {
          id: this.selectId(),
          value: this.renderSelectedOptions(),
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          onFocus: this.props.onFocus,
          errors: this.props.errors,
          ref: 'select',
          key: "autocomplete_select_" + this.generateUUID()
        })
      ),
      React.createElement(Label, _extends({}, this.propsWithoutCSS(), { id: this.selectId() }))
    );
  },

  renderSelectedOptions: function renderSelectedOptions() {
    var options = this.props.selectedOptions;

    return $.map(options, function (option) {
      return option.name;
    }).join(', ');
  },

  selectId: function selectId() {
    return 'autocomplete_select_' + this.props.id;
  },

  focusSelect: function focusSelect() {
    var selectInput = ReactDOM.findDOMNode(this.refs.select);
    selectInput.focus();
  }
});

"use strict";

var InputAutocompleteValues = React.createClass({
  displayName: "InputAutocompleteValues",

  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    selectedOptions: React.PropTypes.array
  },

  getDefaultProps: function getDefaultProps() {
    return {
      multiple: false,
      selectedOptions: []
    };
  },

  render: function render() {
    return React.createElement(
      "select",
      {
        multiple: true,
        id: this.props.id,
        name: this.valueInputName(),
        value: this.selectedOptionsValues(),
        readOnly: true,
        style: { display: "none" } },
      this.renderValueInputs()
    );
  },

  selectedOptionsValues: function selectedOptionsValues() {
    return $.map(this.props.selectedOptions, function (selectedOption) {
      return selectedOption.value;
    });
  },

  renderValueInputs: function renderValueInputs() {
    var valueInputs = [];
    var selectedOptions = this.props.selectedOptions;

    for (var i = 0; i < selectedOptions.length; i++) {
      var option = selectedOptions[i];
      valueInputs.push(React.createElement("option", { value: option.value, key: option.name }));
    }

    return valueInputs;
  },

  valueInputName: function valueInputName() {
    var inputName = this.props.name;
    if (this.props.multiple) {
      inputName += '[]';
    }

    return inputName;
  }
});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputCheckbox = React.createClass({
  displayName: "InputCheckbox",

  mixins: [CssClassMixin, InputComponentMixin, CheckboxComponentMixin],

  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.checkbox'
    };
  },

  render: function render() {
    return React.createElement("input", _extends({}, this.props, {
      checked: this.state.checked,
      className: this.inputClassName(),
      onChange: this._handleCheckboxChange,
      type: "checkbox",
      ref: "input"
    }));
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputCheckboxGroup = React.createClass({
  displayName: 'InputCheckboxGroup',

  mixins: [CssClassMixin, InputComponentMixin, SelectComponentMixin],

  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    currentValues: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.checkbox',
      name: '',
      align: 'vertical'
    };
  },

  getInitialState: function getInitialState() {
    return {
      currentValues: this.props.currentValues
    };
  },

  renderChildItems: function renderChildItems() {
    var items = React.Children.map(this.props.children, function (item) {
      if (item !== null && item.props.children[0].type.displayName == "input") return item;
    });
    return items;
  },

  renderPropItems: function renderPropItems() {
    var selectOptions = [];
    var options = this.state.options;

    for (var i = 0; i < options.length; i++) {
      var optionProps = options[i];

      var filledClass = optionProps.filled ? 'filled-in' : '';
      optionProps.id = this.props.id + '_' + i;

      selectOptions.push(React.createElement(
        'p',
        { key: 'p_input' + i },
        React.createElement(InputCheckbox, _extends({}, optionProps, { name: this.props.name, className: filledClass, checked: this.isChecked(optionProps) })),
        React.createElement(Label, optionProps)
      ));
    }
    return selectOptions;
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'input-checkbox-group align-' + this.props.align },
      this.renderChildItems(),
      this.renderPropItems()
    );
  },

  isChecked: function isChecked(item) {
    var currentValues = this.state.currentValues;
    if (!$.isArray(currentValues)) currentValues = [currentValues];
    return $.inArray(item.value, currentValues) !== -1;
  }

});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputDatefilter = React.createClass({
  displayName: "InputDatefilter",

  mixins: [CssClassMixin],
  propTypes: {
    originalId: React.PropTypes.string,
    originalName: React.PropTypes.string,
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    resource: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    fromFilterInput: React.PropTypes.object,
    toFilterInput: React.PropTypes.object,
    okButton: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.datefilter',
      disabled: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      selectedDates: []
    };
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: this.className(), ref: "container" },
      React.createElement(InputDatefilterSelect, _extends({}, this.propsWithoutCSS(), {
        selectedDates: this.state.selectedDates,
        onFocus: this.showFilterBody
      })),
      React.createElement(InputDatefilterBody, _extends({}, this.propsWithoutCSS(), {
        id: this.props.originalId,
        name: this.props.originalName,
        onSelectDate: this.handleSelectDate,
        ref: "body"
      }))
    );
  },

  /* Input focus handlers */

  showFilterBody: function showFilterBody(event) {
    if (this.props.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    var firstFilterInput = $bodyNode.find('input[type=text]')[0];

    $bodyNode.show();
    firstFilterInput.focus();
  },

  hideFilterBody: function hideFilterBody() {
    $(document).off('click', this.handleDocumentClick);
    var $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    $bodyNode.hide();
  },

  handleDocumentClick: function handleDocumentClick(event) {
    var $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    if ($containerNode.find(event.target).length === 0) {
      this.hideFilterBody();
    }
  },

  /* Date selection handlers */

  handleSelectDate: function handleSelectDate(selectedDates) {
    this.setState({
      selectedDates: selectedDates
    });

    this.hideFilterBody();
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputDatefilterBody = React.createClass({
  displayName: 'InputDatefilterBody',

  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    fromFilterInput: React.PropTypes.object,
    toFilterInput: React.PropTypes.object,
    okButton: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.datefilter.body',
      id: null,
      name: null,
      resource: null,
      fromFilterInput: {},
      toFilterInput: {},
      okButton: {
        name: 'ok'
      }
    };
  },

  /* Renderers */

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className(), onClick: this.handleFilterBodyClick, ref: 'filterBody' },
      this.renderFromInput(),
      this.renderToInput(),
      this.renderUpdateButton()
    );
  },

  renderFromInput: function renderFromInput() {
    return React.createElement(
      'div',
      { className: 'input-datefilter__filter' },
      React.createElement(Input, _extends({}, this.fromInputProps(), {
        onKeyDown: this.handleInputKeypress,
        component: 'datepicker',
        ref: 'fromInput'
      }))
    );
  },

  fromInputProps: function fromInputProps() {
    return this.filterInputProps("from");
  },

  renderToInput: function renderToInput() {
    return React.createElement(
      'div',
      { className: 'input-datefilter__filter' },
      React.createElement(Input, _extends({}, this.toInputProps(), {
        onKeyDown: this.handleInputKeypress,
        component: 'datepicker',
        ref: 'toInput'
      }))
    );
  },

  toInputProps: function toInputProps() {
    return this.filterInputProps("to");
  },

  renderUpdateButton: function renderUpdateButton() {
    return React.createElement(
      'div',
      { className: 'input-datefilter__button' },
      React.createElement(Button, _extends({}, this.props.okButton, {
        element: 'a',
        onClick: this.selectDate
      }))
    );
  },

  /* Event handlers */

  handleFilterBodyClick: function handleFilterBodyClick(event) {
    var filterBody = ReactDOM.findDOMNode(this.refs.filterBody);
    var fromInput = $(ReactDOM.findDOMNode(this.refs.fromInput)).find('input')[0];

    if (event.target == filterBody) {
      fromInput.focus();
    }
  },

  handleInputKeypress: function handleInputKeypress(event) {
    var keyCode = event.keyCode;

    if (keyCode == 13 || keyCode == 9) {
      this.handleInputTabKeypress(event);
    } else if (keyCode == 27) {
      event.preventDefault();
      this.selectDate();
    }
  },

  handleInputTabKeypress: function handleInputTabKeypress(event) {
    event.preventDefault();
    var fromInput = $(ReactDOM.findDOMNode(this.refs.fromInput)).find('input')[0];
    var toInput = $(ReactDOM.findDOMNode(this.refs.toInput)).find('input')[0];

    if (event.target == fromInput) {
      toInput.focus();
    } else {
      this.selectDate();
    }
  },

  /* Date selection handlers */

  selectDate: function selectDate() {
    var $fromInput = $(ReactDOM.findDOMNode(this.refs.fromInput)).find('input');
    var $toInput = $(ReactDOM.findDOMNode(this.refs.toInput)).find('input');
    var selectedDates = $.grep([$fromInput.val(), $toInput.val()], function (date) {
      return !!date;
    });

    this.props.onSelectDate(selectedDates);
  },

  /* Props parser methods */

  filterInputProps: function filterInputProps(filterType) {
    var inputProps = {
      formStyle: 'oneLine',
      resource: this.props.resource,
      id: this.getFilterInputId(filterType),
      name: this.getFilterInputName(filterType),
      label: this.getFilterInputLabel(filterType)
    };

    $.extend(inputProps, this.props[filterType + "FilterInput"]);
    return inputProps;
  },

  getFilterInputId: function getFilterInputId(filterType) {
    var inputId = this.props.id;
    if (!!inputId) {
      return inputId + "_" + filterType;
    }

    return null;
  },

  getFilterInputName: function getFilterInputName(filterType) {
    var inputName = this.props.name;
    if (!!inputName) {
      return inputName + "_" + filterType;
    }

    return null;
  },

  getFilterInputLabel: function getFilterInputLabel(filterType) {
    return Realize.t("inputs.datefilter." + filterType);
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputDatefilterSelect = React.createClass({
  displayName: 'InputDatefilterSelect',

  mixins: [CssClassMixin, UtilsMixin, InputComponentMixin],

  propTypes: {
    selectedDates: React.PropTypes.array,
    placeholder: Realize.PropTypes.localizedString,
    onBlur: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      selectedDates: [],
      themeClassKey: 'input.datefilter.select',
      placeholder: 'select'
    };
  },

  //TODO: este e um componente do materialize. Tornar este componente generico.
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: this.className() },
        React.createElement(
          'span',
          { className: 'caret', onClick: this.focusSelect },
          '▼'
        ),
        React.createElement(InputText, {
          id: this.selectId(),
          value: this.renderSelectedDates(),
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          onFocus: this.props.onFocus,
          errors: this.props.errors,
          ref: 'select',
          key: "datefilter_select_" + this.generateUUID()
        })
      ),
      React.createElement(Label, _extends({}, this.propsWithoutCSS(), { id: this.selectId() }))
    );
  },

  renderSelectedDates: function renderSelectedDates() {
    var dates = this.props.selectedDates;
    return dates.join(' - ');
  },

  selectId: function selectId() {
    return 'datefilter_select_' + this.props.id;
  },

  focusSelect: function focusSelect() {
    var selectInput = ReactDOM.findDOMNode(this.refs.select);
    selectInput.focus();
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Input = React.createClass({
  displayName: 'Input',

  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.node,
    component: React.PropTypes.string,
    formStyle: React.PropTypes.oneOf(['default', 'filter', 'oneLine']),
    data: React.PropTypes.object,
    errors: React.PropTypes.object,
    resource: React.PropTypes.string,
    scope: React.PropTypes.oneOf(['resource', 'global']),
    maxLength: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input',
      value: null,
      component: 'text',
      formStyle: 'default',
      data: {},
      errors: {},
      resource: null,
      scope: 'resource',
      maxLength: null
    };
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },

  themeClassKeyByStyle: function themeClassKeyByStyle() {
    return 'input.wrapper.' + this.props.formStyle;
  },

  inputClassName: function inputClassName() {
    var className = this.className();
    if (!this.props.className) {
      className += ' ' + Realize.themes.getCssClass('input.grid.' + this.props.formStyle);
    }

    return className;
  },

  render: function render() {
    var renderFunction = 'render' + S(this.props.component).capitalize().s + 'Input';
    if (this.hasOwnProperty(renderFunction)) {
      return this[renderFunction]();
    } else {
      return this.renderInput();
    }
  },

  renderInput: function renderInput() {
    return React.createElement(
      'div',
      { className: this.inputClassName(), id: this.getInputContainerId() },
      this.renderComponentInput(),
      this.renderLabel(),
      this.renderInputErrors()
    );
  },

  renderInputWithoutLabel: function renderInputWithoutLabel() {
    return React.createElement(
      'div',
      { className: this.inputClassName(), id: this.getInputContainerId() },
      this.renderComponentInput(),
      this.renderInputErrors()
    );
  },

  renderAutocompleteInput: function renderAutocompleteInput() {
    return this.renderInputWithoutLabel();
  },

  renderDatefilterInput: function renderDatefilterInput() {
    return this.renderInputWithoutLabel();
  },

  renderDatepickerInput: function renderDatepickerInput() {
    return this.renderInputWithoutLabel();
  },

  renderNumberInput: function renderNumberInput() {
    return this.renderInputWithoutLabel();
  },

  renderSwitchInput: function renderSwitchInput() {
    return this.renderInputWithoutLabel();
  },

  renderFileInput: function renderFileInput() {
    return this.renderInputWithoutLabel();
  },

  renderHiddenInput: function renderHiddenInput() {
    return this.renderComponentInput();
  },

  renderComponentInput: function renderComponentInput() {
    var componentInputClass = this.getInputComponentClass(this.props.component);
    var componentInputProps = React.__spread(this.propsWithoutCSS(), {
      originalId: this.props.id,
      originalName: this.props.name,
      id: this.getInputComponentId(),
      name: this.getInputComponentName(),
      errors: this.getInputErrors(),
      value: this.getInputComponentValue(),
      maxLength: this.getMaxLength(),
      ref: "inputComponent"
    });

    return React.createElement(componentInputClass, componentInputProps);
  },

  renderLabel: function renderLabel() {
    var inputValue = this.getInputComponentValue();
    var isActive = inputValue !== null && inputValue !== undefined && String(inputValue).length > 0;

    return React.createElement(Label, _extends({}, this.propsWithoutCSS(), { id: this.getInputComponentId(), active: isActive }));
  },

  renderInputErrors: function renderInputErrors() {
    return React.createElement(InputError, { errors: this.getInputErrors() });
  },

  getInputContainerId: function getInputContainerId() {
    return "input__" + this.props.id;
  },

  getInputComponentClass: function getInputComponentClass(component) {
    var mapping = {
      text: InputText,
      autocomplete: InputAutocomplete,
      checkbox: InputCheckbox,
      datefilter: InputDatefilter,
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

    return mapping[component] || window[component];
  },

  getInputComponentId: function getInputComponentId() {
    var inputId = this.props.id;
    if (this.props.resource !== null && this.props.scope === "resource") {
      inputId = this.props.resource + '_' + inputId;
    }

    return inputId;
  },

  getInputComponentName: function getInputComponentName() {
    var inputName = this.props.name || this.props.id;
    if (this.props.resource !== null && this.props.scope === "resource") {
      inputName = this.props.resource + '[' + inputName + ']';
    }

    return inputName;
  },

  getInputComponentValue: function getInputComponentValue() {
    if (!!this.props.value) {
      return this.props.value;
    }

    var data = this.props.data || {};
    var dataValue = data[this.props.id];

    if (typeof dataValue === 'boolean') {
      dataValue = dataValue ? 1 : 0;
    }

    return dataValue;
  },

  getMaxLength: function getMaxLength() {
    var acceptComponents = ['text', 'masked', 'number', 'textarea'];

    if (!!this.props.maxLength && acceptComponents.indexOf(this.props.component) != -1) {
      return this.props.maxLength;
    }
  },

  getInputErrors: function getInputErrors() {
    if (this.props.errors[this.props.resource] && this.props.errors[this.props.resource][this.props.id]) return this.props.errors[this.props.resource][this.props.id];
    return this.props.errors[this.props.id];
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputDatepicker = React.createClass({
  displayName: 'InputDatepicker',

  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    mask: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.datepicker',
      mask: null,
      format: null,
      maskType: 'date'
    };
  },

  componentDidMount: function componentDidMount() {
    this.setPickadatePlugin();
  },

  render: function render() {
    return React.createElement(
      'span',
      null,
      React.createElement(InputMasked, _extends({}, this.props, {
        value: this.formatDateValue(),
        className: this.className(),
        type: 'date',
        ref: 'input'
      })),
      React.createElement(Label, this.propsWithoutCSS()),
      React.createElement(Button, {
        disabled: this.props.disabled || this.props.readOnly,
        icon: { type: "calendar" },
        className: 'input-datepicker__button prefix',
        onClick: this.handleCalendarClick,
        type: 'button',
        ref: 'button'
      })
    );
  },

  getDateFormat: function getDateFormat() {
    return this.props.format || Realize.t('date.formats.date');
  },

  setPickadatePlugin: function setPickadatePlugin() {
    var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    $inputNode.pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true,
      format: this.getDateFormat().toLowerCase()
    });

    var picker = $inputNode.pickadate('picker');
    picker.on('close', this.props.onChange);
  },

  handleCalendarClick: function handleCalendarClick(event) {
    var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    var picker = $inputNode.pickadate('picker');

    // TODO: should close on date click - materialize currently broke it
    if (picker.get('open')) {
      picker.close();
    } else {
      picker.open();
    }

    event.stopPropagation();
  },

  formatDateValue: function formatDateValue() {
    var date = moment(this.props.value);
    var formattedValue = date.format(this.getDateFormat());
    if (formattedValue == "Invalid date") {
      return this.props.value;
    }

    return formattedValue;
  }
});

'use strict';

var InputError = React.createClass({
  displayName: 'InputError',

  mixins: [CssClassMixin],

  propTypes: {
    errors: React.PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      errors: [],
      themeClassKey: 'input.error.hint'
    };
  },

  render: function render() {
    return React.createElement(
      'span',
      { className: this.className() },
      this.errorMessages()
    );
  },

  errorMessages: function errorMessages() {
    var errors = this.props.errors;
    var errorMessage = '';
    if (!$.isArray(errors)) {
      errors = [errors];
    }

    for (var i = 0; i < errors.length; i++) {
      var error = errors[i];
      errorMessage += error + ' / ';
    }

    return errorMessage.replace(/[\/\s]*$/, '');
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputFile = React.createClass({
  displayName: 'InputFile',

  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    wrapperClassName: React.PropTypes.string,
    buttonClassName: React.PropTypes.string,
    buttonName: Realize.PropTypes.localizedString,
    buttonIcon: React.PropTypes.string,
    filePathWrapperClassName: React.PropTypes.string,
    filePathField: React.PropTypes.string,
    data: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.file',
      buttonName: 'inputs.file.buttonName',
      filePathField: null,
      data: {}
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.wrapperClassName() },
      React.createElement(
        'div',
        { className: this.buttonClassName() },
        React.createElement(
          'span',
          null,
          this.getButtonName()
        ),
        React.createElement('input', _extends({}, this.props, {
          value: this.state.value,
          onChange: this.handleChange,
          disabled: this.props.disabled || this.props.readOnly,
          type: 'file',
          ref: 'input'
        }))
      ),
      React.createElement(
        'div',
        { className: this.filePathWrapperClassName() },
        React.createElement('input', {
          className: this.inputClassName(),
          placeholder: this.getLabelName(),
          onFocus: this._handleFocus,
          type: 'text',
          ref: 'filePath'
        })
      )
    );
  },

  componentDidMount: function componentDidMount() {
    this.setFilePathValue();
  },

  handleChange: function handleChange(event) {
    this._handleChange(event);

    var fileInput = ReactDOM.findDOMNode(this.refs.input);
    var filePathInput = ReactDOM.findDOMNode(this.refs.filePath);

    $(filePathInput).val(fileInput.files[0].name);
  },

  wrapperClassName: function wrapperClassName() {
    return this.themedClassName('input.file.wrapper', this.props.wrapperClassName);
  },

  filePathWrapperClassName: function filePathWrapperClassName() {
    return this.themedClassName('input.file.filePathWrapper', this.props.filePathWrapperClassName);
  },

  buttonClassName: function buttonClassName() {
    return this.themedClassName('input.file.button', this.props.buttonClassName);
  },

  getButtonName: function getButtonName() {
    if (!!this.props.buttonIcon) {
      var component = [];
      component.push(React.createElement(
        'i',
        { className: 'material-icons' },
        this.props.buttonIcon
      ));

      return component;
    }

    return Realize.t(this.props.buttonName);
  },

  getLabelName: function getLabelName() {
    return this.props.label || this.props.name;
  },

  getFilePathField: function getFilePathField() {
    var filePathField = this.props.filePathField;
    if (!filePathField) {
      filePathField = this.props.id + "_file_name";
    }

    return filePathField;
  },

  setFilePathValue: function setFilePathValue() {
    var filePathNode = ReactDOM.findDOMNode(this.refs.filePath);
    var filePathField = this.getFilePathField();

    if (!!filePathField) {
      var filePath = this.props.data[filePathField];
      if (!!filePath) {
        filePathNode.value = filePath;
      }
    }
  }

});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputHidden = React.createClass({
  displayName: "InputHidden",

  mixins: [InputComponentMixin],

  render: function render() {
    return React.createElement("input", _extends({}, this.props, { type: "hidden", ref: "input" }));
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var InputMasked = React.createClass({
  displayName: 'InputMasked',

  mixins: [CssClassMixin, InputComponentMixin],

  propTypes: {
    type: React.PropTypes.string,
    mask: React.PropTypes.string,
    maskType: React.PropTypes.string,
    regex: React.PropTypes.string,
    onComplete: React.PropTypes.func,
    onIncomplete: React.PropTypes.func,
    onCleared: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.text',
      type: 'text',
      mask: null,
      maskType: null,
      regex: null,
      onComplete: function onComplete() {},
      onIncomplete: function onIncomplete() {},
      onCleared: function onCleared() {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      placeholder: this.getPlaceholder()
    };
  },

  predefinedMasks: function predefinedMasks() {
    var localeMasks = Realize.t("masks");
    var predefinedMasks = {};

    for (var maskName in localeMasks) {
      if (localeMasks.hasOwnProperty(maskName)) {
        var mask = localeMasks[maskName];
        if (typeof mask == "string") {
          predefinedMasks[maskName] = {
            mask: mask
          };
        } else if ((typeof mask === 'undefined' ? 'undefined' : _typeof(mask)) == "object") {
          predefinedMasks[maskName] = mask;
        }
      }
    }

    return predefinedMasks;
  },

  render: function render() {
    return React.createElement(
      'input',
      _extends({}, this.props, {
        value: this.state.value,
        placeholder: this.state.placeholder,
        className: this.inputClassName(),
        onChange: this.handleChange,
        onFocus: this._handleFocus,
        ref: 'input' }),
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    var appliedMask = this.applyMask();
    this.setMaskPlaceholder(appliedMask);
  },

  componentDidUpdate: function componentDidUpdate() {
    this.applyMask();
  },

  handleChange: function handleChange(event) {
    this.props.onChange(event);

    if (!event.isDefaultPrevented()) {
      var value = $(event.target).inputmask('unmaskedvalue');
      this.setState({ value: value });
    }
  },

  applyMask: function applyMask() {
    var appliedMask = {};
    if (!!this.props.regex) {
      appliedMask = this.applyRegexMask();
    } else {
      appliedMask = this.applyBaseMask();
    }

    return appliedMask;
  },

  applyRegexMask: function applyRegexMask() {
    var $input = $(this.getInputElement());
    var maskOptions = this.parseMaskOptions();

    $input.inputmask('Regex', maskOptions);
    return maskOptions;
  },

  applyBaseMask: function applyBaseMask() {
    var maskType = this.props.maskType;
    var predefinedMasks = this.predefinedMasks();
    var predefinedMask = predefinedMasks[maskType];

    var appliedMask = {};
    if (!!predefinedMask) {
      appliedMask = this.applyPredefinedMask(predefinedMask);
    } else {
      appliedMask = this.applyCustomMask();
    }

    return appliedMask;
  },

  applyPredefinedMask: function applyPredefinedMask(predefinedMask) {
    var $input = $(this.getInputElement());
    var predefinedMaskOptions = $.extend({}, this.parseMaskOptions(), predefinedMask);

    $input.inputmask(predefinedMaskOptions);
    return predefinedMaskOptions;
  },

  applyCustomMask: function applyCustomMask() {
    var $input = $(this.getInputElement());
    var maskOptions = this.parseMaskOptions();

    $input.inputmask(maskOptions);
    this.setMaskPlaceholder(maskOptions);
    return maskOptions;
  },

  getInputElement: function getInputElement() {
    return ReactDOM.findDOMNode(this.refs.input);
  },

  parseMaskOptions: function parseMaskOptions() {
    var maskOptions = $.extend({
      showMaskOnHover: false,
      clearIncomplete: true
    }, this.filterMaskOptionProps());

    maskOptions.oncomplete = this.props.onComplete;
    maskOptions.onincomplete = this.props.onIncomplete;
    maskOptions.oncleared = this.props.onCleared;

    return maskOptions;
  },

  filterMaskOptionProps: function filterMaskOptionProps() {
    var maskOptionProps = {};
    var propsToFilter = ['onComplete', 'onIncomplete', 'onCleared'];
    for (var propName in this.props) {
      if (this.props.hasOwnProperty(propName)) {
        var prop = this.props[propName];
        if (!!prop && propsToFilter.indexOf(propName) < 0) {
          maskOptionProps[propName] = prop;
        }
      }
    }

    return maskOptionProps;
  },

  setMaskPlaceholder: function setMaskPlaceholder(appliedMaskOptions) {
    var appliedPlaceholder = appliedMaskOptions.placeholder;

    if (!!appliedPlaceholder) {
      this.setState({ placeholder: appliedPlaceholder });
    }
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputNumber = React.createClass({
  displayName: 'InputNumber',

  mixins: [CssClassMixin, InputComponentMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.number',
      maskType: 'integer'
    };
  },

  render: function render() {
    return React.createElement(
      'span',
      null,
      React.createElement(InputMasked, _extends({}, this.props, {
        className: this.className(),
        onChange: this._handleChange,
        onFocus: this._handleFocus,
        type: 'text',
        ref: 'input'
      })),
      React.createElement(Label, this.propsWithoutCSS())
    );
  }
});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputPassword = React.createClass({
  displayName: "InputPassword",

  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    confirms: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.text'
    };
  },

  render: function render() {
    return React.createElement("input", _extends({}, this.props, {
      value: this.state.value,
      placeholder: this.getPlaceholder(),
      className: this.inputClassName(),
      onChange: this._handleChange,
      onFocus: this._handleFocus,
      type: "password", ref: "input" }));
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputSwitch = React.createClass({
  displayName: 'InputSwitch',

  mixins: [CssClassMixin, InputComponentMixin, CheckboxComponentMixin],

  propTypes: {
    label: React.PropTypes.string,
    offLabel: Realize.PropTypes.localizedString,
    onLabel: Realize.PropTypes.localizedString
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'input.switch',
      offLabel: 'false',
      onLabel: 'true',
      label: null
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: this.className() },
        React.createElement(
          'label',
          null,
          Realize.t(this.props.offLabel),
          React.createElement('input', _extends({}, this.checkboxProps(), {
            checked: this.state.checked,
            value: this.state.value,
            disabled: this.props.disabled || this.props.readOnly,
            className: this.inputClassName(),
            onChange: this._handleCheckboxChange,
            type: 'checkbox',
            ref: 'input'
          })),
          React.createElement('span', { className: 'lever' }),
          Realize.t(this.props.onLabel)
        ),
        this.renderInputHidden()
      ),
      this.renderLabel()
    );
  },

  renderLabel: function renderLabel() {
    if (!this.props.label) {
      return null;
    }

    return React.createElement(Label, { name: this.props.label, active: true });
  },

  renderInputHidden: function renderInputHidden() {
    if (this.valueIsBoolean()) {
      return React.createElement(InputHidden, _extends({}, this.props, { value: this.state.value }));
    }

    return null;
  },

  checkboxProps: function checkboxProps() {
    if (this.valueIsBoolean()) {
      return {};
    }

    return this.props;
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputText = React.createClass({
  displayName: 'InputText',

  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    type: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'text',
      themeClassKey: 'input.text'
    };
  },

  render: function render() {
    return React.createElement('input', _extends({}, this.props, {
      value: this.state.value,
      placeholder: this.getPlaceholder(),
      className: this.inputClassName(),
      onChange: this._handleChange,
      onFocus: this._handleFocus,
      ref: 'input'
    }));
  }
});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputTextarea = React.createClass({
  displayName: "InputTextarea",

  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    rows: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      rows: 4,
      themeClassKey: 'input.textarea'
    };
  },

  render: function render() {
    return React.createElement("textarea", _extends({}, this.props, {
      value: this.state.value,
      placeholder: this.getPlaceholder(),
      className: this.inputClassName(),
      onChange: this._handleChange,
      onFocus: this._handleFocus,
      ref: "input"
    }));
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputRadioGroup = React.createClass({
  displayName: 'InputRadioGroup',

  mixins: [CssClassMixin, InputComponentMixin, SelectComponentMixin],

  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    currentValue: React.PropTypes.string,
    withGap: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      name: '',
      align: 'vertical',
      currentValue: null,
      withGap: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      currentValue: this.props.currentValue
    };
  },

  renderOptions: function renderOptions() {
    var selectOptions = [];
    var options = this.state.options;

    for (var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      optionProps.id = this.props.name + '_' + i;
      optionProps.type = 'radio';

      if (this.state.currentValue === optionProps.value) optionProps.defaultChecked = optionProps.value;
      if (this.props.withGap) optionProps.className = 'with-gap';

      selectOptions.push(React.createElement(
        'p',
        { key: "p_input_" + i, id: 'input_' + optionProps.value },
        React.createElement('input', _extends({}, optionProps, { name: this.props.name, onChange: this._handleChange })),
        React.createElement(Label, { id: optionProps.id, label: optionProps.name })
      ));
    }
    return selectOptions;
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'input-checkbox-group align-' + this.props.align, ref: 'radioGroup' },
      this.renderOptions()
    );
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var InputSelect = React.createClass({
  displayName: 'InputSelect',

  mixins: [CssClassMixin, InputComponentMixin, SelectComponentMixin, InputSelectActionsListenerMixin, MaterializeSelectMixin],

  propTypes: {
    includeBlank: React.PropTypes.bool,
    blankText: Realize.PropTypes.localizedString
  },

  getDefaultProps: function getDefaultProps() {
    return {
      includeBlank: true,
      themeClassKey: 'input.select',
      blankText: 'select'
    };
  },

  componentDidMount: function componentDidMount() {
    var valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.on('reset', this.clearSelection);
  },

  componentWillUnmount: function componentWillUnmount() {
    var valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.off('reset', this.clearSelection);
  },

  clearSelection: function clearSelection() {
    this.setState({
      value: []
    }, this.triggerDependableChanged);
  },

  render: function render() {
    return React.createElement(
      'select',
      {
        id: this.props.id,
        name: this.props.name,
        value: this.selectedValue(),
        onChange: this.handleChange,
        disabled: this.isDisabled() || this.props.readOnly,
        className: this.className(),
        ref: 'select' },
      this.renderOptions()
    );
  },

  renderOptions: function renderOptions() {
    var selectOptions = [];
    var options = this.state.options;

    if (this.props.includeBlank) {
      selectOptions.push(React.createElement(InputSelectOption, { name: Realize.t(this.props.blankText), value: '', key: 'empty_option' }));
    }

    for (var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      selectOptions.push(React.createElement(InputSelectOption, _extends({}, optionProps, { key: optionProps.name })));
    }

    return selectOptions;
  },

  selectedValue: function selectedValue() {
    var value = this.state.value;
    if (!this.props.multiple) {
      value = value[0];
    }

    return value;
  },

  handleChange: function handleChange(event) {
    this.props.onChange(event);

    if (!event.isDefaultPrevented()) {
      var selectElement = ReactDOM.findDOMNode(this.refs.select);

      this.setState({
        value: this.ensureIsArray(selectElement.value)
      }, this.triggerDependableChanged);
    }
  }

});

"use strict";

var InputSelectOption = React.createClass({
  displayName: "InputSelectOption",

  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.node
  },

  render: function render() {
    return React.createElement(
      "option",
      { value: this.props.value },
      this.props.name
    );
  }
});

'use strict';

var Label = React.createClass({
  displayName: 'Label',

  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      name: '',
      label: '',
      themeClassKey: 'label'
    };
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: this.getLabelThemeClassKey(this.props)
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      themeClassKey: this.getLabelThemeClassKey(nextProps)
    });
  },

  getLabelThemeClassKey: function getLabelThemeClassKey(props) {
    var themeClassKey = props.themeClassKey;
    if (props.active) {
      themeClassKey += ' label.active';
    }

    return themeClassKey;
  },

  render: function render() {
    return React.createElement(
      'label',
      { htmlFor: this.props.id, onClick: this.props.onClick, className: this.className() },
      this.props.label || this.props.name
    );
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// TODO: [DEPRECATION] Prop ref_id is deprecated, remember to remove it.
var Menu = React.createClass({
  displayName: 'Menu',

  propTypes: {
    ref_id: React.PropTypes.string,
    id: React.PropTypes.string,
    items: React.PropTypes.array
  },

  getDefaultProps: function getDefaultProps() {
    return {
      ref_id: '',
      id: '',
      items: []
    };
  },

  renderPropItems: function renderPropItems() {
    var menuItems = this.props.items.map(function (item, i) {
      return React.createElement(MenuItem, _extends({}, item, { key: 'menu_' + i }));
    }, this);
    return menuItems;
  },

  renderChildItems: function renderChildItems() {
    var menuItems = React.Children.map(this.props.children, function (item) {
      if (item && item.type && (item.type.displayName || item.type.name) === 'MenuItem') return item;
    });
    return menuItems;
  },

  render: function render() {
    console && console.warn && console.warn('[Realize] Menu prop ref_id will be removed, use id instead!');
    var id = this.props.ref_id || (typeof this.props.id !== 'string' ? '' : this.props.id);

    return React.createElement(
      'ul',
      { id: id, className: this.props.className },
      this.renderPropItems(),
      this.renderChildItems()
    );
  }
});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MenuItem = React.createClass({
  displayName: 'MenuItem',

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

  getDefaultProps: function getDefaultProps() {
    return {
      iconAlign: 'left',
      method: 'get',
      element: 'a'
    };
  },

  render: function render() {
    return React.createElement(
      'li',
      null,
      React.createElement(Button, _extends({}, this.props, { clearTheme: true, name: this.props.text }))
    );
  }
});

'use strict';

var Modal = React.createClass({
  displayName: 'Modal',

  mixins: [Reflux.connect(ModalStore, 'modalStore'), CssClassMixin, ContainerMixin],

  propTypes: {
    id: React.PropTypes.string,
    opened: React.PropTypes.bool,
    marginHeaderFooter: React.PropTypes.number,
    width: React.PropTypes.string,
    minContentHeight: React.PropTypes.number,
    useAvailableHeight: React.PropTypes.bool,

    dismissible: React.PropTypes.bool,
    opacity: React.PropTypes.number,
    inDuration: React.PropTypes.number,
    outDuration: React.PropTypes.number,
    ready: React.PropTypes.func,
    complete: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      id: '',
      themeClassKey: 'modal',
      opened: false,
      marginHeaderFooter: 100,
      width: '60%',
      minContentHeight: 0,
      useAvailableHeight: false,

      dismissible: true,
      opacity: 0.4,
      inDuration: 300,
      outDuration: 200,
      ready: function ready() {
        return true;
      },
      complete: function complete() {
        return true;
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      modalStore: null
    };
  },

  /* Lifecycle functions */

  componentDidMount: function componentDidMount() {
    this.resizeContent();
    $(window).on('resize', this.resizeContent);

    if (!!this.props.opened) {
      this.open();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    $(window).off('resize', this.resizeContent);
  },

  componentDidUpdate: function componentDidUpdate() {
    this.resizeContent();
    if (!!this.state.opened) {
      this.open();
    }

    if (this.state.modalStore) {
      this.handleModalStoreState();
    }
  },

  handleModalStoreState: function handleModalStoreState() {
    var modalStore = this.state.modalStore;
    var shouldOpenModal = modalStore.shouldOpen;
    var shouldCloseModal = modalStore.shouldClose;
    var modalToOpenId = modalStore.modalId;

    if (modalToOpenId == this.props.id) {
      if (shouldOpenModal) {
        this.open();
      }

      if (shouldCloseModal) {
        this.close();
      }
    }
  },

  /* Rendering functions */

  render: function render() {
    var header = this.filterChildren(ModalHeader) ? this.renderHeader() : '';
    var content = this.filterChildren(ModalContent) ? this.renderContent() : '';
    var footer = this.filterChildren(ModalFooter) ? this.renderFooter() : '';

    if (header == '' && content == '' && footer == '') content = React.createElement(
      ModalContent,
      this.props,
      this.props.children
    );

    return React.createElement(
      'div',
      { id: this.props.id, className: this.className(), ref: 'modal' },
      header,
      content,
      footer
    );
  },

  renderHeader: function renderHeader() {
    return React.createElement(
      'div',
      { ref: 'headerContainer', className: 'modal-header-container' },
      this.filterChildren(ModalHeader)
    );
  },

  renderContent: function renderContent() {
    return React.createElement(
      'div',
      { ref: 'contentContainer', className: 'modal-content-container' },
      this.filterChildren(ModalContent)
    );
  },

  renderFooter: function renderFooter() {
    return React.createElement(
      'div',
      { ref: 'footerContainer', className: 'modal-footer-container' },
      this.filterChildren(ModalFooter)
    );
  },

  /* Modal opener handlers */

  open: function open(options) {
    var $modal = $(ReactDOM.findDOMNode(this.refs.modal));

    $modal.openModal({
      dismissible: this.props.dismissible, // Modal can be dismissed by clicking outside of the modal
      opacity: this.props.opacity, // Opacity of modal background
      inDuration: this.props.inDuration, // Transition in duration
      outDuration: this.props.outDuration, // Transition out duration
      ready: this.handleReady, // Callback for Modal open
      complete: this.props.complete // Callback for Modal close
    });
  },

  handleReady: function handleReady() {
    this.resizeContent();
    ModalActions.openFinished();

    if (typeof this.props.ready === "function") {
      this.props.ready();
    }
  },

  /* Modal close handlers */

  close: function close() {
    var $modal = $(ReactDOM.findDOMNode(this.refs.modal));

    $modal.closeModal();
  },

  /* Modal resize handlers */

  resizeContent: function resizeContent() {
    var modal = ReactDOM.findDOMNode(this.refs.modal);
    var contentContainer = ReactDOM.findDOMNode(this.refs.contentContainer);

    $(modal).css("max-height", $(window).height() - this.props.marginHeaderFooter);
    $(modal).css("width", this.props.width);

    var availableHeight = this.getAvailableHeight();
    var contentHeight = this.getContentHeight();
    var containerHeight = 0;
    if (!!this.props.useAvailableHeight) {
      containerHeight = availableHeight;
    } else {
      containerHeight = Math.min(availableHeight, contentHeight);
    }

    $(contentContainer).css("height", containerHeight);
  },

  getAvailableHeight: function getAvailableHeight() {
    var headerContainer = ReactDOM.findDOMNode(this.refs.headerContainer);
    var footerContainer = ReactDOM.findDOMNode(this.refs.footerContainer);

    return $(window).height() - this.props.marginHeaderFooter - ($(headerContainer).height() + $(footerContainer).height());
  },

  getContentHeight: function getContentHeight() {
    var contentContainer = ReactDOM.findDOMNode(this.refs.contentContainer);
    var minContentHeight = this.props.minContentHeight;
    var contentHeight = 0;

    $(contentContainer).find("> *").each(function (i, content) {
      contentHeight += $(content).outerHeight();
    });

    return Math.max(minContentHeight, contentHeight);
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ModalButton = React.createClass({
  displayName: 'ModalButton',

  mixins: [CssClassMixin],

  propTypes: {
    modalId: React.PropTypes.string,
    openerId: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      modalId: '',
      openerId: ''
    };
  },

  render: function render() {
    return React.createElement(Button, _extends({}, this.props, {
      className: this.getClassName(),
      onClick: this.openModal,
      ref: 'modalButton'
    }));
  },

  getClassName: function getClassName() {
    var className = this.className();
    if (this.props.disabled && this.props.element === 'a') className = 'button btn-flat disable-action-button';

    return className;
  },

  openModal: function openModal(event) {
    event.nativeEvent.preventDefault();
    event.stopPropagation();
    event.preventDefault();

    ModalActions.open(this.props);
  }

});

'use strict';

var ModalContent = React.createClass({
  displayName: 'ModalContent',

  mixins: [CssClassMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'modal.content'
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className() },
      this.props.children
    );
  }
});

'use strict';

var ModalFooter = React.createClass({
  displayName: 'ModalFooter',

  mixins: [CssClassMixin],

  propTypes: {
    separatorThemeClassKey: React.PropTypes.string,
    withSeparator: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'modal.footer',
      separatorThemeClassKey: 'modal.footer.withSeparator',
      withSeparator: true
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.footerClassName() },
      this.props.children
    );
  },

  footerClassName: function footerClassName() {
    var className = this.className();
    if (this.props.withSeparator) {
      className += " " + Realize.themes.getCssClass(this.props.separatorThemeClassKey);
    }

    return className;
  }
});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ModalForm = React.createClass({
  displayName: "ModalForm",

  mixins: [CssClassMixin, ContainerMixin],

  propTypes: {
    title: React.PropTypes.string,
    form: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      title: "",
      form: {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      isLoading: false
    };
  },

  render: function render() {
    return React.createElement(
      Modal,
      this.props,
      this.renderHeader(),
      this.renderContent(),
      this.renderFooter()
    );
  },

  renderHeader: function renderHeader() {
    var modalHeader = this.filterChildren(ModalHeader);
    if (!modalHeader || modalHeader.length == 0) {
      modalHeader.push(React.createElement(
        ModalHeader,
        { key: "modal-header" },
        React.createElement(
          "h5",
          null,
          this.props.title
        )
      ));
    }

    return modalHeader;
  },

  renderContent: function renderContent() {
    return React.createElement(
      ModalContent,
      null,
      React.createElement(
        Form,
        _extends({}, this.props.form, {
          submitButton: false,
          otherButtons: [],
          onError: this.handleSubmitError,
          onSuccess: this.handleSubmitSuccess,
          ref: "form" }),
        this.props.children
      )
    );
  },

  renderFooter: function renderFooter() {
    return React.createElement(
      ModalFooter,
      null,
      React.createElement(FormButtonGroup, _extends({}, this.props.form, { submitButton: this.submitButtonProps(), isLoading: this.state.isLoading }))
    );
  },

  submitButtonProps: function submitButtonProps() {
    var submitButtonProps = this.props.form.submitButton || this.defaultSubmitButtonProps();
    submitButtonProps.onClick = this.submitForm;

    return submitButtonProps;
  },

  defaultSubmitButtonProps: function defaultSubmitButtonProps() {
    return {
      name: 'actions.send',
      icon: 'send'
    };
  },

  submitForm: function submitForm(event) {
    var formRef = this.refs.form;

    formRef.handleSubmit(event);
    this.setState({
      isLoading: true
    });
  },

  handleSubmitSuccess: function handleSubmitSuccess(data, status, xhr) {
    var onSuccessCallback = this.props.form.onSuccess;
    if (typeof onSuccessCallback == "function") {
      this.props.onSuccess(data, status, xhr);
    }

    this.setState({
      isLoading: false
    });

    return true;
  },

  handleSubmitError: function handleSubmitError(xhr, status, error) {
    var onErrorCallback = this.props.form.onError;
    if (typeof onErrorCallback == "function") {
      this.props.onError(xhr, status, error);
    }

    this.setState({
      isLoading: false
    });

    return true;
  }
});

'use strict';

var ModalHeader = React.createClass({
  displayName: 'ModalHeader',

  mixins: [CssClassMixin],

  propTypes: {
    withTitle: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'modal.header',
      withTitle: true
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.getClassName() },
      this.props.children
    );
  },

  getClassName: function getClassName() {
    var className = Realize.themes.getCssClass(this.props.themeClassKey);
    if (!this.props.clearTheme && this.props.withTitle) {
      className += ' ' + Realize.themes.getCssClass('modal.header.withTitle');
    }

    return className;
  }
});

'use strict';

var HeaderNotifications = React.createClass({
  displayName: 'HeaderNotifications',

  propTypes: {
    ouSlug: React.PropTypes.string,
    className: React.PropTypes.string,
    text: React.PropTypes.string,
    icon: React.PropTypes.string,
    baseUrl: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      ouSlug: null,
      className: 'notifications',
      icon: 'add_alert',
      text: '',
      baseUrl: '/notifications'
    };
  },

  getInitialState: function getInitialState() {
    return {
      count: 0,
      active: false
    };
  },

  handleClick: function handleClick() {
    var list = ReactDOM.findDOMNode(this.refs.notificationsList);
    $(list).slideDown();
    this.state.active = !this.state.active;
    this.forceUpdate();
  },

  closeList: function closeList() {
    this.setState({
      active: false
    });
  },

  componentDidMount: function componentDidMount() {
    //TODO: alterar estes event handlers para o React.
    $('html').on('click', this.closeList);

    $('.notifications-list').mouseover(function () {
      $('body').addClass('noscroll');
    });

    $('.notifications-list').mouseout(function () {
      $('body').removeClass('noscroll');
    });

    this.loadNotifications();
  },

  loadNotifications: function loadNotifications() {
    $.ajax({
      url: this.props.baseUrl,
      dataType: 'json',
      data: {
        per_page: 50,
        ou_slug: this.props.ouSlug,
        q: {
          s: 'created_at desc'
        }
      },
      success: (function (data) {
        this.setState({
          notifications: data.notifications,
          count: data.unread_count
        });
      }).bind(this)
    });
  },

  renderIcon: function renderIcon() {
    var component = [];

    if (this.state.count > 0) {
      component.push(React.createElement(
        'i',
        { className: 'material-icons', key: 'notification_icon' },
        'notifications'
      ));
    } else {
      component.push(React.createElement(
        'i',
        { className: 'material-icons', key: 'notification_icon' },
        'notifications_none'
      ));
    }

    return component;
  },

  handleClickItem: function handleClickItem(responseData) {
    $.ajax({
      url: this.props.baseUrl,
      dataType: 'json',
      data: {
        per_page: 50,
        q: {
          s: 'created_at desc'
        }
      },
      success: (function (data) {
        this.setState({
          notifications: data.notifications,
          count: data.not_read_count
        });
      }).bind(this)
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.className },
      React.createElement(
        'a',
        { onClick: this.handleClick },
        this.renderIcon(),
        React.createElement(NotificationNumber, { count: this.state.count })
      ),
      React.createElement(NotificationsList, { ref: 'notificationsList',
        active: this.state.active,
        baseUrl: this.props.baseUrl,
        handleClickItem: this.handleClickItem,
        notifications: this.state.notifications
      })
    );
  }

});

var NotificationNumber = React.createClass({
  displayName: 'NotificationNumber',

  propTypes: {
    className: React.PropTypes.string,
    count: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'notification-number',
      count: 0
    };
  },

  unreadNotificationNumber: function unreadNotificationNumber() {
    var component = [];
    if (!!this.props.count && this.props.count > 0) component.push(React.createElement(
      'span',
      { className: this.props.className, key: 'notification_count' },
      this.props.count
    ));
    return component;
  },

  render: function render() {
    return React.createElement(
      'span',
      { className: 'jewelCount' },
      this.unreadNotificationNumber()
    );
  }

});

'use strict';

var NotificationsList = React.createClass({
  displayName: 'NotificationsList',

  mixins: [RequestHandlerMixin, ModalRendererMixin],

  propTypes: {
    className: React.PropTypes.string,
    active: React.PropTypes.bool,
    notifications: React.PropTypes.array,
    handleClickItem: React.PropTypes.func,
    baseUrl: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'notifications-list z-depth-1',
      active: false,
      notifications: [],
      baseUrl: '/notifications',
      handleClickItem: function handleClickItem(data) {}
    };
  },

  handleClick: function handleClick(event, id) {
    var url = this.props.baseUrl + '/' + id;
    this.performRequest(url);
  },

  onSuccess: function onSuccess(responseData) {
    this.renderModalHtml(responseData);
    this.props.handleClickItem(responseData);
  },

  renderNotification: function renderNotification() {
    var component = [];
    var notifications = this.props.notifications;

    for (var i = 0; i < notifications.length; i++) {
      var notification = notifications[i];
      var liClass = !!notification.read_by_user ? '' : 'not-read';

      component.push(React.createElement(
        'li',
        { className: liClass, key: "notification_item_" + i },
        React.createElement(
          'a',
          { onClick: this.handleClick.bind(this, event, notification.id) },
          React.createElement(
            'span',
            null,
            notification.message
          ),
          React.createElement(
            'div',
            { className: 'created_at-notification' },
            'Criado em: ',
            moment(notification.created_at).format("DD/MM/YYYY HH:mm")
          )
        )
      ));
    }

    return component;
  },

  renderSeeAll: function renderSeeAll() {
    var component = [];

    if (this.props.notifications.length === 0) {
      component.push(React.createElement(
        'div',
        { className: 'box-see-all', key: 'notification_see_all' },
        React.createElement('div', { className: 'divider' }),
        React.createElement(
          'span',
          null,
          React.createElement(
            'a',
            null,
            I18n.t('labels.not-notifications')
          )
        )
      ));
    } else {
      component.push(React.createElement(
        'div',
        { className: 'box-see-all', key: 'notification_see_all' },
        React.createElement('div', { className: 'divider' }),
        React.createElement(
          'span',
          null,
          React.createElement(
            'a',
            { href: '/notifications' },
            I18n.t('buttons.see-all')
          )
        )
      ));
    }

    return component;
  },

  render: function render() {
    var display = this.props.active ? 'block' : 'none';
    return React.createElement(
      'div',
      { className: this.props.className, style: { display: display } },
      React.createElement(
        'ul',
        null,
        this.renderNotification()
      ),
      this.renderSeeAll()
    );
  }

});

'use strict';

var Pagination = React.createClass({
  displayName: 'Pagination',

  mixins: [CssClassMixin],
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func,
    type: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'pagination',
      page: 1,
      perPage: 20,
      window: 4,
      onPagination: function onPagination(page) {
        return true;
      }
    };
  },

  render: function render() {
    return React.createElement(
      'ul',
      { className: this.className() },
      this.renderPreviousButton(),
      this.renderPaginationByType(),
      this.renderNextButton()
    );
  },

  renderPaginationByType: function renderPaginationByType() {
    if (this.props.type == 'default') return React.createElement(
      'span',
      null,
      this.renderFirstButton(),
      this.renderPageButtons(),
      this.renderLastButton()
    );else if (this.props.type == 'input') return React.createElement(
      'span',
      null,
      this.renderPageInput()
    );
  },

  renderPreviousButton: function renderPreviousButton() {
    var disabled = this.props.page <= 1;

    return React.createElement(PaginationItem, { disabled: disabled, iconType: 'left', onClick: this.navigateToPrevious });
  },

  renderFirstButton: function renderFirstButton() {
    if (this.firstWindowPage() <= 1) {
      return '';
    }

    return React.createElement(PaginationItem, { text: '...', onClick: this.navigateTo.bind(this, 1) });
  },

  renderNextButton: function renderNextButton() {
    var disabled = this.props.page >= this.lastPage();

    return React.createElement(PaginationItem, { disabled: disabled, iconType: 'right', onClick: this.navigateToNext });
  },

  renderLastButton: function renderLastButton() {
    var lastPage = this.lastPage();
    if (this.lastWindowPage() >= lastPage) {
      return '';
    }

    return React.createElement(PaginationItem, { text: '...', onClick: this.navigateTo.bind(this, lastPage) });
  },

  renderPageButtons: function renderPageButtons() {
    var pageButtons = [];
    for (var i = this.firstWindowPage(); i <= this.lastWindowPage(); i++) {
      pageButtons.push(this.renderPageButton(i));
    }

    return pageButtons;
  },

  renderPageButton: function renderPageButton(page) {
    var active = this.props.page === page;

    return React.createElement(PaginationItem, { active: active, text: String(page), onClick: this.navigateTo.bind(this, page), key: "page_" + page });
  },

  renderPageInput: function renderPageInput() {
    var page = this.props.page;
    return React.createElement(Input, { value: page, clearTheme: true, className: 'form__input input-field col s3' });
  },

  lastPage: function lastPage() {
    return Math.ceil(this.props.count / this.props.perPage);
  },

  firstWindowPage: function firstWindowPage() {
    return Math.max(1, this.props.page - this.props.window);
  },

  lastWindowPage: function lastWindowPage() {
    return Math.min(this.lastPage(), this.props.page + this.props.window);
  },

  navigateToPrevious: function navigateToPrevious() {
    var pageToNavigate = Math.max(1, this.props.page - 1);
    this.navigateTo(pageToNavigate);
  },

  navigateToNext: function navigateToNext() {
    var pageToNavigate = Math.min(this.lastPage(), this.props.page + 1);
    this.navigateTo(pageToNavigate);
  },

  navigateTo: function navigateTo(page) {
    this.props.onPagination(page);
  }
});

'use strict';

var PaginationItem = React.createClass({
  displayName: 'PaginationItem',

  mixins: [CssClassMixin],
  propTypes: {
    disabled: React.PropTypes.bool,
    active: React.PropTypes.bool,
    iconType: React.PropTypes.string,
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      active: false,
      iconType: null,
      text: '',
      onClick: function onClick(event) {
        return true;
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      themeClassKey: this.buildThemeClassKey()
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      themeClassKey: this.buildThemeClassKey(nextProps)
    });
  },

  buildThemeClassKey: function buildThemeClassKey(props) {
    props = props || this.props;
    var themeClassKey = 'pagination.item';
    if (props.disabled) {
      themeClassKey += ' pagination.item.disabled';
    }

    if (props.active) {
      themeClassKey += ' pagination.item.active';
    }

    return themeClassKey;
  },

  render: function render() {
    return React.createElement(
      'li',
      { className: this.className(), onClick: this.handleClick },
      React.createElement(
        'a',
        { href: '#!' },
        this.props.text,
        !!this.props.iconType ? this.renderIcon() : ''
      )
    );
  },

  renderIcon: function renderIcon() {
    return React.createElement(Icon, { type: this.props.iconType });
  },

  handleClick: function handleClick() {
    if (!this.props.disabled) {
      this.props.onClick();
    }
  }
});

'use strict';

var SideNav = React.createClass({
  displayName: 'SideNav',

  mixins: [CssClassMixin],

  propTypes: {
    items: React.PropTypes.array,
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    text: React.PropTypes.string,
    ref_id: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'sidenav.button',
      items: [],
      icon: 'view_headline',
      iconAlign: '',
      ref_id: 'sideNav',
      text: ''
    };
  },

  render: function render() {
    var iconAlign = this.props.text ? 'left' : '';

    return React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: this.props.href, className: this.className(), ref: 'sideNav', onClick: this.props.onClick, target: this.props.target, 'data-activates': this.props.ref_id },
        React.createElement(
          'i',
          { className: 'material-icons ' + iconAlign },
          this.props.icon
        ),
        this.props.text
      ),
      this.renderMenu()
    );
  },

  renderMenu: function renderMenu() {
    return React.createElement(
      Menu,
      { ref_id: this.props.ref_id, className: 'side-nav full', items: this.props.items },
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.sideNav)).sideNav();
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Table = React.createClass({
  displayName: 'Table',

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
    rowSelectableFilter: React.PropTypes.func,
    forceShowSelectAllButton: React.PropTypes.bool,
    onClickRow: React.PropTypes.func,
    rowHref: React.PropTypes.string,
    tableRowCssClass: React.PropTypes.func
  },

  sortConfigs: null,

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'table',
      columns: {},
      dataRowIdField: 'id',
      selectedRowIdsParam: 'rowIds',
      selectable: false,
      sortConfigs: {},
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
      onSort: function onSort(sortData) {},
      onSelect: function onSelect(event, selectedRowIds) {},
      onRemoveSelection: function onRemoveSelection(event) {},
      onSelectAll: function onSelectAll(event) {},
      rowSelectableFilter: null,
      forceShowSelectAllButton: false,
      onClickRow: null,
      rowHref: null,
      tableRowCssClass: null
    };
  },

  getInitialState: function getInitialState() {
    return {
      selectedRowIds: this.props.selectedRowIds || [],
      allSelected: this.props.allSelected
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var selectedRowIds = nextProps.selectedRowIds;
    var allSelected = nextProps.allSelected;

    if (!!selectedRowIds && $.isArray(selectedRowIds)) {
      this.setState({ selectedRowIds: selectedRowIds });
    }

    if (allSelected !== null && allSelected !== undefined) {
      this.setState({ allSelected: allSelected });
    }
  },

  componentDidMount: function componentDidMount() {
    this.sortConfigs = $.extend({}, Realize.config.grid.sort, this.props.sortConfigs);

    if (!!this.props.customTableHeader) {
      var $thead = $(ReactDOM.findDOMNode(this.refs.thead));
      $thead.prepend(this.props.customTableHeader);
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.wrapperClassName() },
      this.renderActions(),
      React.createElement(
        'table',
        { className: this.className() },
        React.createElement(
          'thead',
          { ref: 'thead' },
          React.createElement(
            'tr',
            null,
            this.renderHeaderSelectCell(),
            this.renderTableHeaders()
          )
        ),
        React.createElement(
          'tbody',
          null,
          this.props.dataRows.length > 0 ? this.renderTableRows() : this.renderEmptyMessage()
        )
      )
    );
  },

  wrapperClassName: function wrapperClassName() {
    var wrapperClassName = '';
    if (!this.props.clearTheme) {
      wrapperClassName = Realize.themes.getCssClass('table.wrapper');
    }

    return wrapperClassName;
  },

  renderActions: function renderActions() {
    var collectionButtons = this.props.actionButtons.collection || [];
    if (!this.props.selectable && collectionButtons.length == 0) {
      return '';
    }

    return React.createElement(TableActions, {
      dataRows: this.state.dataRows,
      selectedRowIds: this.state.selectedRowIds,
      selectedRowIdsParam: this.props.selectedRowIdsParam,
      allSelected: this.state.allSelected,
      allSelectedData: this.props.allSelectedData,
      count: this.props.count,
      onRemoveSelection: this.removeSelection,
      onSelectAll: this.selectAllRows,
      actionButtons: this.props.actionButtons.collection || [],
      rowSelectableFilter: this.props.rowSelectableFilter,
      forceShowSelectAllButton: this.props.forceShowSelectAllButton
    });
  },

  renderHeaderSelectCell: function renderHeaderSelectCell() {
    if (!this.props.selectable) {
      return '';
    }

    return React.createElement(TableSelectCell, {
      onSelectToggle: this.toggleDataRows,
      dataRowIds: this.getDataRowIds(),
      selected: this.isAllDataRowsSelected(),
      rowId: "all",
      cellElement: "th",
      key: "header_select"
    });
  },

  renderTableHeaders: function renderTableHeaders() {
    var columns = this.props.columns;
    var headerComponents = [];

    for (var columnName in columns) {
      if (columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        headerComponents.push(React.createElement(TableHeader, _extends({}, columnProps, this.sortConfigs, {
          name: columnName,
          key: columnName,
          sortDirection: this.sortDirectionForColumn(columnName),
          ref: "header_" + columnName,
          resource: this.props.resource,
          onSort: this.props.onSort,
          clearTheme: this.props.clearTheme
        })));
      }
    }

    return headerComponents;
  },

  sortDirectionForColumn: function sortDirectionForColumn(columnName) {
    var sortData = this.props.sortData;
    if (!!sortData.field && sortData.field == columnName) {
      return sortData.direction;
    }

    return null;
  },

  renderTableRows: function renderTableRows() {
    var rowComponents = [];
    var dataRows = this.props.dataRows;

    for (var i = 0; i < dataRows.length; i++) {
      var dataRow = dataRows[i];
      rowComponents.push(React.createElement(TableRow, _extends({}, this.propsWithoutCSS(), {
        onSelectToggle: this.toggleDataRows,
        selected: this.dataRowIsSelected(dataRow),
        data: dataRow,
        dataRowIdField: this.props.dataRowIdField,
        actionButtons: this.props.actionButtons.member || [],
        key: "table_row_" + i,
        rowSelectableFilter: this.props.rowSelectableFilter,
        onClickRow: this.props.onClickRow,
        rowHref: this.props.rowHref,
        tableRowCssClass: this.props.tableRowCssClass
      })));
    }

    return rowComponents;
  },

  renderEmptyMessage: function renderEmptyMessage() {
    var columnsCount = 0;
    for (var key in this.props.columns) {
      columnsCount++;
    }

    if (this.props.selectable) {
      columnsCount++;
    }

    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        { colSpan: columnsCount, className: 'empty-message' },
        Realize.t(this.props.emptyMessage)
      )
    );
  },

  getDataRowIds: function getDataRowIds() {
    var rowSelectableFilter = this.props.rowSelectableFilter;
    var selectableDataRows = $.grep(this.props.dataRows, function (dataRow) {
      return !rowSelectableFilter || !!rowSelectableFilter(dataRow);
    });

    return $.map(selectableDataRows, (function (dataRow) {
      return dataRow[this.props.dataRowIdField];
    }).bind(this));
  },

  toggleDataRows: function toggleDataRows(event, dataRowIds, selected) {
    var selectedRowIds = [];
    if (selected) {
      selectedRowIds = this.addSelectedDataRows(dataRowIds);
    } else {
      selectedRowIds = this.removeSelectedDataRows(dataRowIds);
    }

    this.props.onSelect(event, selectedRowIds);
    if (!event.isDefaultPrevented()) {
      this.setState({
        selectedRowIds: selectedRowIds,
        allSelected: false
      });
    }
  },

  addSelectedDataRows: function addSelectedDataRows(dataRowIds) {
    var selectedRowIds = this.state.selectedRowIds.slice();
    $.each(dataRowIds, function (i, dataRowId) {
      if ($.inArray(dataRowId, selectedRowIds) < 0) {
        selectedRowIds.push(dataRowId);
      }
    });

    return selectedRowIds;
  },

  removeSelectedDataRows: function removeSelectedDataRows(dataRowIds) {
    return $.grep(this.state.selectedRowIds, (function (dataRowId) {
      return $.inArray(dataRowId, dataRowIds) < 0;
    }).bind(this));
  },

  dataRowIsSelected: function dataRowIsSelected(dataRow) {
    var dataRowId = dataRow[this.props.dataRowIdField];
    return $.inArray(dataRowId, this.state.selectedRowIds) >= 0 || this.props.allSelected;
  },

  isAllDataRowsSelected: function isAllDataRowsSelected() {
    var dataRowIds = this.getDataRowIds();
    var selectedRowIdsInPage = $.grep(this.state.selectedRowIds, function (selectedDataRowId) {
      return $.inArray(selectedDataRowId, dataRowIds) >= 0;
    });

    return dataRowIds.length > 0 && dataRowIds.length == selectedRowIdsInPage.length || this.props.allSelected;
  },

  removeSelection: function removeSelection(event) {
    this.props.onRemoveSelection(event);

    if (!event.isDefaultPrevented()) {
      this.setState({
        selectedRowIds: [],
        allSelected: false
      });
    }
  },

  selectAllRows: function selectAllRows(event) {
    this.props.onSelectAll(event);

    if (!event.isDefaultPrevented()) {
      this.setState({
        allSelected: true
      });
    }
  }
});

'use strict';

var TableActionButton = React.createClass({
  displayName: 'TableActionButton',

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
    component: React.PropTypes.string,
    params: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      selectedRowIds: [],
      allSelected: false,
      method: null,
      conditionParams: null,
      disabled: false,
      selectionContext: 'none',
      component: 'Button',
      params: null,
      conditionToShowActionButton: function conditionToShowActionButton(data) {
        return true;
      }
    };
  },

  render: function render() {
    return React.createElement(
      'span',
      null,
      this.renderButton()
    );
  },

  renderButton: function renderButton() {
    var component = [];
    if (!this.props.conditionToShowActionButton(this.props.conditionParams)) {
      return component;
    }

    var buttonProps = React.__spread({}, this.props, {
      isLoading: this.state.isLoading,
      disabled: this.isDisabled(),
      method: this.actionButtonMethod(),
      href: this.actionButtonHref(),
      onClick: this.actionButtonClick,
      key: this.props.name
    });

    var buttonComponent = React.createElement(eval(this.props.component), buttonProps);
    component.push(buttonComponent);

    return component;
  },

  isDisabled: function isDisabled() {
    if (!!this.props.disabled || !!this.state.isLoading) {
      return true;
    }

    var selectionContext = this.props.selectionContext;
    if (selectionContext === 'none') {
      return false;
    } else if (selectionContext === 'atLeastOne') {
      return this.props.selectedRowIds.length === 0;
    }

    return false;
  },

  actionButtonMethod: function actionButtonMethod() {
    var buttonHref = this.props.href;
    if (!buttonHref) {
      return null;
    }

    return this.props.method;
  },

  actionButtonHref: function actionButtonHref() {
    var buttonHref = this.props.href;
    if (!buttonHref) {
      return '#!';
    }

    var selectedData = this.getSelectedData();
    buttonHref = buttonHref + '?' + $.param(selectedData);

    if (!!this.props.params) {
      for (var property in this.props.params) {
        buttonHref = buttonHref + '&' + property + '=' + this.props.params[property];
      }
    }

    return buttonHref;
  },

  actionButtonClick: function actionButtonClick(event) {
    if (this.isDisabled()) {
      return;
    }

    var buttonOnClick = this.props.onClick;
    var buttonAction = this.props.actionUrl;
    var selectedData = this.getSelectedData();

    if ($.isFunction(buttonOnClick)) {
      buttonOnClick(event, selectedData);
    } else if (!!buttonAction) {
      this.performRequest(buttonAction, selectedData, this.props.method);
    }
  },

  getSelectedData: function getSelectedData() {
    var selectedData = {};
    if (this.props.allSelected && !!this.props.allSelectedData && !$.isEmptyObject(this.props.allSelectedData)) {
      selectedData = this.props.allSelectedData;
    } else {
      selectedData[this.props.selectedRowIdsParam] = this.props.selectedRowIds;
    }

    return selectedData;
  }
});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TableActions = React.createClass({
  displayName: "TableActions",

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
    rowSelectableFilter: React.PropTypes.func,
    forceShowSelectAllButton: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'table.actions',
      actionButtons: [],
      selectedRowIds: [],
      allSelected: false,
      rowSelectableFilter: null,
      forceShowSelectAllButton: false,
      onRemoveSelection: function onRemoveSelection(event) {},
      onSelectAll: function onSelectAll(event) {}
    };
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: this.className() },
      React.createElement(
        "div",
        null,
        React.createElement(TableSelectionIndicator, this.propsWithoutCSS()),
        this.renderButtons()
      )
    );
  },

  renderButtons: function renderButtons() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for (var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(React.createElement(TableActionButton, _extends({}, actionButtonProps, this.propsWithoutCSS(), {
        element: "a",
        themeClassKey: "button.flat",
        key: "action_" + i
      })));
    }

    return actionButtons;
  }
});

'use strict';

var TableCell = React.createClass({
  displayName: 'TableCell',

  mixins: [CssClassMixin],

  propTypes: {
    name: React.PropTypes.string,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    value: React.PropTypes.func,
    format: React.PropTypes.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'table.cell',
      format: 'text',
      data: {}
    };
  },

  render: function render() {
    return React.createElement(
      'td',
      { className: this.cellClassName() },
      this.renderValue()
    );
  },

  cellClassName: function cellClassName() {
    var className = this.className();
    if (!!this.props.format) {
      className += ' table-cell--' + this.props.format;
    }

    if (!!this.props.name) {
      className += ' table-cell--' + this.props.name;
    }

    return className;
  },

  renderValue: function renderValue() {
    var format = this.props.format;
    var customValue = this.props.value;
    var dataValue = this.props.data[this.props.name];

    var value = null;

    if (!!customValue) {
      value = customValue(this.props.data, this.props);
    } else if (dataValue === null || dataValue === undefined) {
      value = '-';
    } else {
      try {
        value = this[format + "Value"](dataValue);
      } catch (err) {
        value = this.textValue(dataValue);
      }
    }

    if (!!this.props.component) {
      return React.createElement(eval(this.props.component), $.extend({}, this.props, { value: value }));
    } else {
      return value;
    }
  },

  textValue: function textValue(value) {
    return value;
  },

  numberValue: function numberValue(value) {
    value = parseFloat(value);
    return numeral(value).format('0,0.[000]');
  },

  percentageValue: function percentageValue(value) {
    value = parseFloat(value);
    if (value > 1.0 || value < -1.0) {
      value = value / 100.0;
    }

    return numeral(value).format('0.00%');
  },

  currencyValue: function currencyValue(value) {
    value = parseFloat(value);
    return numeral(value).format('$ 0,0.00');
  },

  booleanValue: function booleanValue(value) {
    return Realize.t(String(value));
  },

  dateValue: function dateValue(value) {
    value = moment(value);
    return value.format("DD/MM/YYYY");
  },

  datetimeValue: function datetimeValue(value) {
    value = moment(value);
    return value.format("DD/MM/YYYY HH:mm");
  }
});

'use strict';

var TableHeader = React.createClass({
  displayName: 'TableHeader',

  mixins: [CssClassMixin, LocalizedResourceFieldMixin],

  propTypes: {
    name: React.PropTypes.string,
    label: Realize.PropTypes.localizedString,
    format: React.PropTypes.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime']),
    sortable: React.PropTypes.bool,
    sortDirection: React.PropTypes.string,
    sortFieldName: React.PropTypes.string,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'table.header',
      sortable: true,
      sortDirection: null,
      sortFieldName: 'name',
      onSort: function onSort(sortData) {
        return true;
      }
    };
  },

  render: function render() {
    return React.createElement(
      'th',
      { className: this.headerClassName() },
      React.createElement(
        'span',
        { onClick: this.sortColumn, className: this.labelClassName() },
        this.getLabel()
      )
    );
  },

  headerClassName: function headerClassName() {
    var className = this.className();
    if (!!this.props.format) {
      className += ' table-header--' + this.props.format;
    }

    return className;
  },

  getLabel: function getLabel() {
    if (!!this.props.label && this.props.label.length > 0) {
      return Realize.t(this.props.label);
    }

    return this.localizeResourceField();
  },

  labelClassName: function labelClassName() {
    var className = '';

    if (!this.props.clearTheme) {
      className += Realize.themes.getCssClass('table.header.label');
    }

    if (this.props.sortable) {
      className += " sortable";

      var sortDirection = this.props.sortDirection;
      if (sortDirection !== null) {
        className += " " + sortDirection;
      }
    }

    return className;
  },

  sortColumn: function sortColumn() {
    if (!this.props.sortable) {
      return null;
    }

    var sortData = this.buildSortData();
    this.props.onSort(sortData);
  },

  buildSortData: function buildSortData() {
    var sortField = this.props[this.props.sortFieldName];
    var sortDirection = this.getSortDirection();

    return {
      field: sortField,
      direction: sortDirection
    };
  },

  getSortDirection: function getSortDirection() {
    var currentSortDirection = this.props.sortDirection;
    if (currentSortDirection === null || currentSortDirection == 'desc') {
      return 'asc';
    } else if (currentSortDirection == 'asc') {
      return 'desc';
    }
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TableRow = React.createClass({
  displayName: 'TableRow',

  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    actionButtons: React.PropTypes.array,
    rowSelectableFilter: React.PropTypes.func,
    onSelectToggle: React.PropTypes.func,
    onClickRow: React.PropTypes.func,
    rowHref: React.PropTypes.string,
    tableRowCssClass: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      columns: {},
      data: {},
      dataRowIdField: 'id',
      selectable: true,
      selected: false,
      actionButtons: [],
      themeClassKey: 'table.row',
      rowSelectableFilter: null,
      onClickRow: null,
      rowHref: null,
      tableRowCssClass: null,
      onSelectToggle: function onSelectToggle(event, dataRows, selected) {}
    };
  },

  /* renderers */

  render: function render() {
    return React.createElement(
      'tr',
      { className: this.getClassName(), ref: 'row', onClick: this.rowClick },
      this.renderSelectCell(),
      this.renderCells(),
      this.renderActionsCell()
    );
  },

  getClassName: function getClassName() {
    var className = this.className();

    if (!!this.props.onClickRow || !!this.props.rowHref) {
      className = className + ' clickable-row';
    }

    if (!!this.props.tableRowCssClass) {
      var cssClass = this.props.tableRowCssClass(this.props.data);
      if (!!cssClass) {
        className = className + ' ' + cssClass;
      }
    }

    return className;
  },

  renderSelectCell: function renderSelectCell() {
    if (!this.props.selectable) {
      return '';
    }

    var rowSelectableFilter = this.props.rowSelectableFilter;
    if (typeof rowSelectableFilter === "function" && !rowSelectableFilter(this.props.data)) {
      return React.createElement('td', null);
    }

    return React.createElement(TableSelectCell, {
      onSelectToggle: this.props.onSelectToggle,
      dataRowIds: [this.getDataRowId()],
      rowId: String(this.getDataRowId()),
      selected: this.props.selected,
      key: 'select'
    });
  },

  renderCells: function renderCells() {
    var columns = this.props.columns;
    var cellComponents = [];

    $.each(columns, (function (columnName, columnProps) {
      cellComponents.push(React.createElement(TableCell, _extends({}, columnProps, this.propsWithoutCSS(), {
        name: columnName,
        key: columnName
      })));
    }).bind(this));

    return cellComponents;
  },

  renderActionsCell: function renderActionsCell() {
    if (!$.isArray(this.props.actionButtons) || this.props.actionButtons.length === 0) {
      return '';
    }

    return React.createElement(TableRowActions, _extends({}, this.propsWithoutCSS(), { ref: 'actions' }));
  },

  /* event handlers */

  rowClick: function rowClick(event) {
    if (event.isPropagationStopped()) {
      return;
    }

    var onClickRow = this.props.onClickRow;
    var rowHref = this.props.rowHref;

    if (!!onClickRow && typeof onClickRow === "function") {
      onClickRow(event, this.props.data);
    } else if (!!rowHref && typeof rowHref === "string") {
      this.goToRowHref(event);
    }
  },

  goToRowHref: function goToRowHref(event) {
    var rowHref = this.props.rowHref;
    var dataRowId = this.props.data[this.props.dataRowIdField];

    window.location.href = rowHref.replace(/:id/, dataRowId);
  },

  /* utilities */

  getDataRowId: function getDataRowId() {
    return this.props.data[this.props.dataRowIdField];
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TableRowActionButton = React.createClass({
  displayName: 'TableRowActionButton',

  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    count: React.PropTypes.number,
    actionUrl: React.PropTypes.string,
    method: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    conditionToShowActionButton: React.PropTypes.func,
    component: React.PropTypes.string,
    element: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: {},
      dataRowIdField: 'id',
      method: null,
      conditionParams: null,
      disabled: false,
      component: null,
      element: 'a',
      themeClassKey: 'button.flat',
      conditionToShowActionButton: function conditionToShowActionButton(data) {
        return true;
      }
    };
  },

  render: function render() {
    return React.createElement(
      'span',
      null,
      this.renderButton()
    );
  },

  renderButton: function renderButton() {
    var component = [];
    if (this.props.conditionToShowActionButton(this.props.conditionParams)) if (!!this.props.component) {
      return React.createElement(eval(this.props.component), this.props);
    } else {
      component.push(React.createElement(Button, _extends({}, this.props, {
        method: this.actionButtonMethod(),
        href: this.actionButtonHref(),
        onClick: this.actionButtonClick,
        key: 'button'
      })));
    }

    return component;
  },

  actionButtonMethod: function actionButtonMethod() {
    var buttonHref = this.props.href;
    if (!buttonHref) {
      return null;
    }

    return this.props.method;
  },

  actionButtonHref: function actionButtonHref() {
    var buttonHref = this.props.href;
    if (!!buttonHref) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonHref = buttonHref.replace(/:id/, dataRowId);
    }

    return buttonHref;
  },

  actionButtonUrl: function actionButtonUrl() {
    var buttonActionUrl = this.props.actionUrl;
    if (!!buttonActionUrl) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonActionUrl = buttonActionUrl.replace(/:id/, dataRowId);
    }

    return buttonActionUrl;
  },

  actionButtonClick: function actionButtonClick(event) {
    var buttonOnClick = this.props.onClick;
    var buttonAction = this.actionButtonUrl();

    if ($.isFunction(buttonOnClick)) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonOnClick(event, dataRowId, this.props.data);
    } else if (!!buttonAction) {
      var actionData = this.getActionData(this.props);
      this.performRequest(buttonAction, actionData, this.props.method || 'POST');
    }

    event.stopPropagation();
  },

  getActionData: function getActionData() {
    var dataIdParam = this.props.dataIdParam || 'id';
    var dataRowId = this.props.data[this.props.dataRowIdField];
    var actionData = {};

    actionData[dataIdParam] = dataRowId;
    return actionData;
  }

});

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TableRowActions = React.createClass({
  displayName: 'TableRowActions',

  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    conditionParams: React.PropTypes.object,
    component: React.PropTypes.string,
    paramsToComponent: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
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

  render: function render() {
    return React.createElement(
      'td',
      { className: this.className() },
      this.renderButtons()
    );
  },

  renderButtons: function renderButtons() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for (var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      var conditionToShowFunction = actionButtonProps.conditionToShowActionButton;

      if (!conditionToShowFunction || actionButtonProps.conditionToShowActionButton(actionButtonProps.conditionParams)) {
        if (!!actionButtonProps.component) {
          return React.createElement(eval(actionButtonProps.component), $.extend({}, this.props, actionButtonProps.paramsToComponent));
        } else {
          actionButtons.push(React.createElement(TableRowActionButton, _extends({ key: "action_" + i }, actionButtonProps, { dataRowIdField: this.props.dataRowIdField, data: this.props.data })));
        }
      }
    }

    return actionButtons;
  }
});

'use strict';

var TableSelectCell = React.createClass({
  displayName: 'TableSelectCell',

  mixins: [CssClassMixin, UtilsMixin],

  propTypes: {
    rowId: React.PropTypes.string,
    cellElement: React.PropTypes.string,
    dataRowIds: React.PropTypes.array,
    selected: React.PropTypes.bool,
    onSelectToggle: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'table.select',
      rowId: '',
      cellElement: 'td',
      dataRowIds: [],
      selected: false,
      onSelectToggle: function onSelectToggle(event, dataRows, selected) {}
    };
  },

  render: function render() {
    return React.createElement(this.props.cellElement, { className: this.className() }, [React.createElement(InputCheckbox, { id: this.getCheckboxId(), checked: this.props.selected, key: this.generateUUID() }), React.createElement(Label, { id: this.getCheckboxId(), key: 'label', onClick: this.handleChange })]);
  },

  getCheckboxId: function getCheckboxId() {
    return "select_" + String(this.props.rowId);
  },

  handleChange: function handleChange(event) {
    this.props.onSelectToggle(event, this.props.dataRowIds, !this.props.selected);
  },

  handleClick: function handleClick(event) {
    event.stopPropagation();
  }
});

'use strict';

var TableSelectionIndicator = React.createClass({
  displayName: 'TableSelectionIndicator',

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
    rowSelectableFilter: React.PropTypes.func,
    forceShowSelectAllButton: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
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
      forceShowSelectAllButton: false,
      onRemoveSelection: function onRemoveSelection(event) {},
      onSelectAll: function onSelectAll(event) {}
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.className() },
      React.createElement(
        'span',
        null,
        this.renderMessage()
      ),
      ' ',
      this.renderActions()
    );
  },

  renderMessage: function renderMessage() {
    var count = this.getSelectionCount();
    if (count === 0) {
      return '';
    } else if (count === 1) {
      return Realize.t(this.props.message.singular);
    } else {
      var message = Realize.t(this.props.message.plural);
      return message.replace(/:count/, count);
    }
  },

  renderActions: function renderActions() {
    var count = this.getSelectionCount();
    if (count === 0) {
      return '';
    }

    return React.createElement(
      'span',
      null,
      '(',
      this.renderRemoveSelectionButton(),
      this.renderSelectAllButton(),
      ')'
    );
  },

  renderRemoveSelectionButton: function renderRemoveSelectionButton() {
    return React.createElement(
      'a',
      { href: '#!', onClick: this.props.onRemoveSelection },
      Realize.t(this.props.removeSelectionButtonName)
    );
  },

  renderSelectAllButton: function renderSelectAllButton() {
    if (typeof this.props.rowSelectableFilter === "function" || this.props.allSelected) {
      if (!this.props.forceShowSelectAllButton) {
        return '';
      }
    }

    return React.createElement(
      'span',
      null,
      ' | ',
      React.createElement(
        'a',
        { href: '#!', onClick: this.props.onSelectAll },
        this.getSelectAllButtonName()
      )
    );
  },

  getSelectionCount: function getSelectionCount() {
    if (this.props.allSelected && !!this.props.count) {
      return this.props.count;
    } else {
      return this.props.selectedRowIds.length;
    }
  },

  getSelectAllButtonName: function getSelectAllButtonName() {
    var buttonName = Realize.t(this.props.selectAllButtonName);
    var count = this.props.count || this.props.dataRows.length;

    return buttonName.replace(/:count/, count);
  }
});

"use strict";

var Tab = React.createClass({
  displayName: "Tab",

  mixins: [CssClassMixin, ContainerMixin],

  propTypes: {
    id: React.PropTypes.string
  },

  render: function render() {
    return React.createElement(
      "div",
      { id: this.props.id, className: this.className() },
      this.renderChildren()
    );
  }
});

'use strict';

var TabButton = React.createClass({
  displayName: 'TabButton',

  mixins: [CssClassMixin, ContainerMixin, FormContainerMixin],

  propTypes: {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'tabs.tabButton',
      errorThemeClassKey: 'tabs.tabButton.error',
      className: 's1',
      active: false
    };
  },

  render: function render() {
    return React.createElement(
      'li',
      { className: this.formContainerClassName() },
      React.createElement(
        'a',
        { href: '#' + this.props.id, className: this.props.active ? "active" : "" },
        this.props.title
      )
    );
  }

});

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tabs = React.createClass({
  displayName: "Tabs",

  mixins: [CssClassMixin, ContainerMixin],

  propTypes: {
    themeClassKey: React.PropTypes.string,
    className: React.PropTypes.string,
    activeTab: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      themeClassKey: 'tabs',
      activeTab: 1
    };
  },

  componentDidMount: function componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.tabsContainer)).tabs();
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: this.className() },
      React.createElement(
        "ul",
        { className: "tabs z-depth-1", ref: "tabsContainer" },
        this.renderTabButtons()
      ),
      React.createElement(
        "div",
        null,
        this.renderChildren()
      )
    );
  },

  renderTabButtons: function renderTabButtons() {
    var tabs = [];
    var children = this.getChildren();

    React.Children.forEach(children, (function (child, i) {
      var isActive = i === this.props.activeTab - 1;
      tabs.push(React.createElement(TabButton, _extends({}, child.props, { active: isActive, key: "tab_" + i })));
    }).bind(this));

    return tabs;
  }
});

//# sourceMappingURL=realize.js.map