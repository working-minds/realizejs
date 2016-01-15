/*!
 * Realize v0.7.16 (http://www.wkm.com.br)
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
    if (this.inputChildrenHaveErrors()) {
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