/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = undefined;

	var _components = __webpack_require__(1);

	Object.keys(_components).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _components[key];
	    }
	  });
	});

	var _mixins = __webpack_require__(22);

	Object.keys(_mixins).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _mixins[key];
	    }
	  });
	});

	var _actions = __webpack_require__(184);

	Object.keys(_actions).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _actions[key];
	    }
	  });
	});

	var _stores = __webpack_require__(155);

	Object.keys(_stores).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _stores[key];
	    }
	  });
	});

	var _realize = __webpack_require__(59);

	Object.keys(_realize).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _realize[key];
	    }
	  });
	});

	__webpack_require__(185);

	var _utils2 = __webpack_require__(8);

	var _utils = _interopRequireWildcard(_utils2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.utils = _utils;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _acl = __webpack_require__(2);

	Object.keys(_acl).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _acl[key];
	    }
	  });
	});

	var _button = __webpack_require__(111);

	Object.keys(_button).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _button[key];
	    }
	  });
	});

	var _container = __webpack_require__(114);

	Object.keys(_container).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _container[key];
	    }
	  });
	});

	var _flash = __webpack_require__(116);

	Object.keys(_flash).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _flash[key];
	    }
	  });
	});

	var _form = __webpack_require__(122);

	Object.keys(_form).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _form[key];
	    }
	  });
	});

	var _grid = __webpack_require__(129);

	Object.keys(_grid).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _grid[key];
	    }
	  });
	});

	var _grid_form = __webpack_require__(134);

	Object.keys(_grid_form).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _grid_form[key];
	    }
	  });
	});

	var _header = __webpack_require__(137);

	Object.keys(_header).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _header[key];
	    }
	  });
	});

	var _icon = __webpack_require__(144);

	Object.keys(_icon).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _icon[key];
	    }
	  });
	});

	var _indicator = __webpack_require__(145);

	Object.keys(_indicator).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _indicator[key];
	    }
	  });
	});

	var _input = __webpack_require__(68);

	Object.keys(_input).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _input[key];
	    }
	  });
	});

	var _label = __webpack_require__(147);

	Object.keys(_label).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _label[key];
	    }
	  });
	});

	var _menu = __webpack_require__(149);

	Object.keys(_menu).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _menu[key];
	    }
	  });
	});

	var _modal = __webpack_require__(150);

	Object.keys(_modal).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _modal[key];
	    }
	  });
	});

	var _notification = __webpack_require__(160);

	Object.keys(_notification).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _notification[key];
	    }
	  });
	});

	var _pagination = __webpack_require__(164);

	Object.keys(_pagination).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _pagination[key];
	    }
	  });
	});

	var _sidenav = __webpack_require__(167);

	Object.keys(_sidenav).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _sidenav[key];
	    }
	  });
	});

	var _table = __webpack_require__(169);

	Object.keys(_table).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _table[key];
	    }
	  });
	});

	var _tabs = __webpack_require__(180);

	Object.keys(_tabs).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _tabs[key];
	    }
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UpdatePermissionButton = exports.PrincipalActionButtons = exports.PermissionManager = exports.LabelPermissions = exports.IndexPermissions = exports.EditPermissions = undefined;

	var _modals = __webpack_require__(3);

	Object.keys(_modals).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _modals[key];
	    }
	  });
	});

	var _edit_permissions = __webpack_require__(67);

	var _edit_permissions2 = _interopRequireDefault(_edit_permissions);

	var _index_permissions = __webpack_require__(106);

	var _index_permissions2 = _interopRequireDefault(_index_permissions);

	var _label_permission = __webpack_require__(107);

	var _label_permission2 = _interopRequireDefault(_label_permission);

	var _permission_manager = __webpack_require__(108);

	var _permission_manager2 = _interopRequireDefault(_permission_manager);

	var _principal_action_buttons = __webpack_require__(109);

	var _principal_action_buttons2 = _interopRequireDefault(_principal_action_buttons);

	var _update_permission_button = __webpack_require__(110);

	var _update_permission_button2 = _interopRequireDefault(_update_permission_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.EditPermissions = _edit_permissions2.default;
	exports.IndexPermissions = _index_permissions2.default;
	exports.LabelPermissions = _label_permission2.default;
	exports.PermissionManager = _permission_manager2.default;
	exports.PrincipalActionButtons = _principal_action_buttons2.default;
	exports.UpdatePermissionButton = _update_permission_button2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PermissinManagerModal = exports.CloseModalButton = exports.AddPrincipalsModal = exports.AclModalsWrapper = undefined;

	var _acl_modals_wrapper = __webpack_require__(4);

	var _acl_modals_wrapper2 = _interopRequireDefault(_acl_modals_wrapper);

	var _add_principals_modal = __webpack_require__(63);

	var _add_principals_modal2 = _interopRequireDefault(_add_principals_modal);

	var _close_modal_button = __webpack_require__(64);

	var _close_modal_button2 = _interopRequireDefault(_close_modal_button);

	var _permission_manager_modal = __webpack_require__(65);

	var _permission_manager_modal2 = _interopRequireDefault(_permission_manager_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.AclModalsWrapper = _acl_modals_wrapper2.default;
	exports.AddPrincipalsModal = _add_principals_modal2.default;
	exports.CloseModalButton = _close_modal_button2.default;
	exports.PermissinManagerModal = _permission_manager_modal2.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var AclModalsWrapper = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
	  _inherits(AclModalsWrapper, _Component);

	  function AclModalsWrapper() {
	    _classCallCheck(this, AclModalsWrapper);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AclModalsWrapper).apply(this, arguments));
	  }

	  _createClass(AclModalsWrapper, [{
	    key: 'onSuccess',
	    value: function onSuccess() {
	      this.forceUpdate();
	    }
	  }, {
	    key: 'handleAddPrincipal',
	    value: function handleAddPrincipal(selectedDatas) {
	      var url = this.props.urlProps.principalsBaseUrl;
	      var data = {
	        principals: selectedDatas,
	        resource_id: this.props.resource.id,
	        resource_type: this.props.resourceType
	      };

	      this.performRequest(url, data, 'POST');
	      (0, _jquery2.default)('#add-principals-modal').closeModal();
	      this.refs.permissionManagerModal.loadPrincipalsPermissions(selectedDatas);
	    }
	  }, {
	    key: 'handleRemovePrincipal',
	    value: function handleRemovePrincipal(selectedPrincipal) {
	      if (confirm('Você tem certeza que deseja retirar as permissões desse usuário/grupo?')) {
	        var url = this.props.urlProps.principalsBaseUrl;
	        var data = {
	          resource_id: this.props.resource.id,
	          resource_type: this.props.resourceType,
	          principal_id: selectedPrincipal.id,
	          principal_type: selectedPrincipal.principal_type
	        };

	        this.performRequest(url, data, 'DELETE');
	      }
	    }
	  }, {
	    key: 'renderPermissionManagerModal',
	    value: function renderPermissionManagerModal() {
	      var component = [];
	      component.push(_react2.default.createElement(_components.PermissionManagerModal, {
	        ref: 'permissionManagerModal',
	        title: this.props.title,
	        resource: this.props.resource,
	        resourceType: this.props.resourceType,
	        principal: this.props.principal,
	        principalType: this.props.principalType,
	        principalsBaseUrl: this.props.urlProps.principalsBaseUrl,
	        principalsPermissionsBaseUrl: this.props.urlProps.principalsPermissionsBaseUrl,
	        updatePermissionsBaseUrl: this.props.urlProps.updatePermissionsBaseUrl,
	        handleRemovePrincipal: this.handleRemovePrincipal,
	        reloadPageAfterSubmit: this.props.reloadPageAfterSubmit
	      }));

	      return component;
	    }
	  }, {
	    key: 'renderAddPrincipalsModal',
	    value: function renderAddPrincipalsModal() {
	      var component = [];
	      if (!this.props.principal) {
	        component.push(_react2.default.createElement(_components.AddPrincipalsModal, {
	          potentialPrincipalsBaseUrl: this.props.urlProps.potentialPrincipalsBaseUrl,
	          principalsTypeBaseUrl: this.props.urlProps.principalsTypeBaseUrl,
	          handleAddPrincipal: this.handleAddPrincipal,
	          resource: this.props.resource,
	          resourceType: this.props.resourceType
	        }));
	      }

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          this.renderPermissionManagerModal(),
	          this.renderAddPrincipalsModal()
	        )
	      );
	    }
	  }]);

	  return AclModalsWrapper;
	}(_react.Component), _class3.propTypes = {
	  principal: _prop_types2.default.object,
	  principalType: _prop_types2.default.string,
	  resource: _prop_types2.default.object,
	  resourceType: _prop_types2.default.string,
	  urlProps: _prop_types2.default.object,
	  title: _prop_types2.default.string,
	  reloadPageAfterSubmit: _prop_types2.default.bool
	}, _class3.defaultProps = {
	  principal: null,
	  principalType: '',
	  resource: null,
	  resourceType: '',
	  title: null,
	  reloadPageAfterSubmit: false,
	  urlProps: {
	    principalsBaseUrl: '/wkm_acl_ui/principals',
	    potentialPrincipalsBaseUrl: '/wkm_acl_ui/principals/potential_principals',
	    principalsTypeBaseUrl: '/wkm_acl_ui/principals/types',
	    updatePermissionsBaseUrl: '/wkm_acl_ui/bulk_permissions',
	    principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions'

	  }
	}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleAddPrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleAddPrincipal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleRemovePrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleRemovePrincipal'), _class2.prototype)), _class2)) || _class);
	exports.default = AclModalsWrapper;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(5);

	var _i18n = __webpack_require__(7);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _extends({}, _react.PropTypes, {
	  localizedString: function localizedString(props, propName, componentName) {
	    var value = props[propName];
	    if (value === null || value === undefined || typeof value === "string" && value.length === 0) {
	      return null;
	    }

	    var translatedValue = _i18n2.default.t(value);
	    if (typeof value !== "string" || typeof translatedValue !== "string" || translatedValue.length === 0) {
	      return new Error('Property ' + propName + ' from ' + componentName + ' is not a localized string.');
	    }
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(8);

	var _lodash = __webpack_require__(14);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _ptBR = __webpack_require__(15);

	var _ptBR2 = _interopRequireDefault(_ptBR);

	var _en = __webpack_require__(16);

	var _en2 = _interopRequireDefault(_en);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(18);

	var _numeral = __webpack_require__(19);

	var _numeral2 = _interopRequireDefault(_numeral);

	var _ptBr = __webpack_require__(20);

	var _ptBr2 = _interopRequireDefault(_ptBr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var i18n = {
	  locales: {},
	  currentLocale: 'en',

	  registerLocale: function registerLocale(newLocaleObj, locale) {
	    if (!_lodash2.default.isPlainObject(newLocaleObj)) {
	      throw 'Invalid Locale Object.';
	    }

	    if (!locale) {
	      throw 'Invalid Locale Name.';
	    }

	    var currentLocaleObj = this.locales[locale] || {};
	    this.locales[locale] = _lodash2.default.merge(currentLocaleObj, newLocaleObj);
	  },

	  setLocale: function setLocale(locale) {
	    this.currentLocale = locale;
	    // TODO normalize the locale key names - neither lib follows the standards
	    _numeral2.default.language(locale.toLowerCase());
	    _moment2.default.locale(locale.toLowerCase());
	  },

	  translate: function translate(key, throwsException) {
	    if (throwsException === undefined) {
	      throwsException = false;
	    }

	    if (typeof key !== "string") {
	      if (throwsException) {
	        throw 'Key is not a string';
	      }

	      return '';
	    }

	    var currentLocale = this.currentLocale;
	    var localeObj = this.locales[currentLocale];

	    var translation = (0, _utils.getProp)(key, localeObj);
	    if (!translation) {
	      if (throwsException) {
	        throw 'Key not found in locale object';
	      }

	      translation = key;
	    }

	    return translation;
	  },

	  t: function t(key, throwsException) {
	    return this.translate(key, throwsException);
	  }
	};

	i18n.registerLocale(_en2.default, 'en');
	i18n.registerLocale(_ptBR2.default, 'pt-BR');
	// both numeral and moment load english by default
	_numeral2.default.language('pt-br', _ptBr2.default);

	i18n.setLocale(i18n.currentLocale);

	exports.default = i18n;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.decorators = exports.uuid = undefined;
	exports.getProp = getProp;

	var _uuid2 = __webpack_require__(9);

	var _uuid = _interopRequireWildcard(_uuid2);

	var _decorators2 = __webpack_require__(10);

	var _decorators = _interopRequireWildcard(_decorators2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.uuid = _uuid;
	exports.decorators = _decorators;
	function getProp(key, obj) {
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

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.v4 = v4;
	function v4() {
	  var d = new Date().getTime();

	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = (d + Math.random() * 16) % 16 | 0;
	    d = Math.floor(d / 16);
	    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
	  });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.autobind = exports.mixin = undefined;

	var _coreDecorators = __webpack_require__(11);

	Object.defineProperty(exports, 'autobind', {
	  enumerable: true,
	  get: function get() {
	    return _coreDecorators.autobind;
	  }
	});

	var _mixin2 = __webpack_require__(12);

	var _mixin3 = _interopRequireDefault(_mixin2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.mixin = _mixin3.default;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("core-decorators");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mixin;

	var _reactMixin = __webpack_require__(13);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function mixin() {
	  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	    mixins[_key] = arguments[_key];
	  }

	  return function (cls) {
	    return mixins.reduce(function (c, m) {
	      return _reactMixin2.default.onClass(c, m);
	    }, cls);
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("react-mixin");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
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
	    destroyConfirm: 'Tem certeza que deseja remover este item?',
	    selection: {
	      clear: 'limpar seleção',
	      selectAll: 'selecionar todos os :count itens',
	      select: {
	        singular: '1 item selecionado',
	        plural: ':count itens selecionados'
	      }
	    },

	    cell: {
	      formats: {
	        number: '0,0.[000]',
	        percentage: '0.00%',
	        currency: 'R$ 0,0.00',
	        date: 'DD/MM/YYYY',
	        datetime: 'DD/MM/YYYY HH:mm',
	        time: 'HH:mm'
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
	  },

	  notifications: {
	    buttons: {
	      noNotifications: "Sem notificações",
	      seeAll: "Ver Todas"
	    }
	  }

	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
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
	    destroyConfirm: 'Are you sure that you want to delete this item?',
	    selection: {
	      clear: 'clear selection',
	      selectAll: 'select all :count items',
	      select: {
	        singular: '1 item selected',
	        plural: ':count items selected'
	      }
	    },

	    cell: {
	      formats: {
	        number: '0,0.[000]',
	        percentage: '0.00%',
	        currency: '$ 0,0.00',
	        date: 'MM/DD/YYYY',
	        datetime: 'MM/DD/YYYY HH:mm',
	        time: 'HH:mm:ss'
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
	  },

	  notifications: {
	    buttons: {
	      noNotifications: "No notifications",
	      seeAll: "See all"
	    }
	  }

	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("moment/locale/pt-br");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("numeral");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("numeral/languages/pt-br");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UtilsMixin = exports.TooltipMixin = exports.RestActionsMixin = exports.RequestHandlerMixin = exports.ModalRendererMixin = exports.LocalizedResourceFieldMixin = exports.CssClassMixin = exports.ContainerMixin = undefined;

	var _form = __webpack_require__(23);

	Object.keys(_form).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _form[key];
	    }
	  });
	});

	var _grid = __webpack_require__(36);

	Object.keys(_grid).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _grid[key];
	    }
	  });
	});

	var _input = __webpack_require__(40);

	Object.keys(_input).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _input[key];
	    }
	  });
	});

	var _container_mixin = __webpack_require__(51);

	var _container_mixin2 = _interopRequireDefault(_container_mixin);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	var _localized_resource_field_mixin = __webpack_require__(54);

	var _localized_resource_field_mixin2 = _interopRequireDefault(_localized_resource_field_mixin);

	var _modal_renderer_mixin = __webpack_require__(55);

	var _modal_renderer_mixin2 = _interopRequireDefault(_modal_renderer_mixin);

	var _request_handler_mixin = __webpack_require__(56);

	var _request_handler_mixin2 = _interopRequireDefault(_request_handler_mixin);

	var _rest_actions_mixin = __webpack_require__(57);

	var _rest_actions_mixin2 = _interopRequireDefault(_rest_actions_mixin);

	var _tooltip_mixin = __webpack_require__(61);

	var _tooltip_mixin2 = _interopRequireDefault(_tooltip_mixin);

	var _utils_mixin = __webpack_require__(62);

	var _utils_mixin2 = _interopRequireDefault(_utils_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ContainerMixin = _container_mixin2.default;
	exports.CssClassMixin = _css_class_mixin2.default;
	exports.LocalizedResourceFieldMixin = _localized_resource_field_mixin2.default;
	exports.ModalRendererMixin = _modal_renderer_mixin2.default;
	exports.RequestHandlerMixin = _request_handler_mixin2.default;
	exports.RestActionsMixin = _rest_actions_mixin2.default;
	exports.TooltipMixin = _tooltip_mixin2.default;
	exports.UtilsMixin = _utils_mixin2.default;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FormSuccessHandlerMixin = exports.FormErrorHandlerMixin = exports.FormContainerMixin = exports.FormActionsListenerMixin = undefined;

	var _form_actions_listener_mixin = __webpack_require__(24);

	var _form_actions_listener_mixin2 = _interopRequireDefault(_form_actions_listener_mixin);

	var _form_container_mixin = __webpack_require__(29);

	var _form_container_mixin2 = _interopRequireDefault(_form_container_mixin);

	var _form_error_handler_mixin = __webpack_require__(34);

	var _form_error_handler_mixin2 = _interopRequireDefault(_form_error_handler_mixin);

	var _form_success_handler_mixin = __webpack_require__(35);

	var _form_success_handler_mixin2 = _interopRequireDefault(_form_success_handler_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FormActionsListenerMixin = _form_actions_listener_mixin2.default;
	exports.FormContainerMixin = _form_container_mixin2.default;
	exports.FormErrorHandlerMixin = _form_error_handler_mixin2.default;
	exports.FormSuccessHandlerMixin = _form_success_handler_mixin2.default;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _form_store = __webpack_require__(25);

	var _form_store2 = _interopRequireDefault(_form_store);

	var _capitalize = __webpack_require__(28);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    onFormSubmit: _prop_types2.default.func,
	    onFormSuccess: _prop_types2.default.func,
	    onFormError: _prop_types2.default.func,
	    onFormReset: _prop_types2.default.func
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
	    _form_store2.default.listen(this.formActionListener);
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
	    var propListenerName = "onForm" + (0, _capitalize2.default)(formAction);
	    var propListener = this.props[propListenerName];

	    if (typeof propListener == "function") {
	      propListener.apply(this, this.formActionParameters(formState));
	    } else {
	      throw 'Prop form listener not defined';
	    }
	  },

	  executeComponentListener: function executeComponentListener(formState) {
	    var formAction = formState.action;
	    var componentListenerName = "handleForm" + (0, _capitalize2.default)(formAction);
	    var componentListener = this[componentListenerName];

	    if (typeof componentListener == "function") {
	      componentListener.apply(this, this.formActionParameters(formState));
	    }
	  },

	  formActionParameters: function formActionParameters(formState) {
	    var formActionData = formState.actionData;
	    var formId = formState.formId;

	    var formActionParameters = _jquery2.default.map(formActionData, function (value, index) {
	      return [value];
	    });

	    formActionParameters.unshift(formId);
	    return formActionParameters;
	  }

	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reflux = __webpack_require__(26);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _form_actions = __webpack_require__(27);

	var _form_actions2 = _interopRequireDefault(_form_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reflux2.default.createStore({
	  listenables: [_form_actions2.default],
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

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("reflux");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reflux = __webpack_require__(26);

	var _reflux2 = _interopRequireDefault(_reflux);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reflux2.default.createActions(["submit", "success", "error", "reset"]);

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("lodash/capitalize");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _theme = __webpack_require__(30);

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    errors: _prop_types2.default.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
	    errorThemeClassKey: _prop_types2.default.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      errors: {}
	    };
	  },
	  formContainerClassName: function formContainerClassName() {
	    var className = this.className();
	    if (this.inputChildrenHaveErrors() || !!this.props.errors && !_jquery2.default.isEmptyObject(this.props.errors)) {
	      className += ' ' + _theme2.default.getCssClass(this.props.errorThemeClassKey);
	    }

	    return className;
	  },
	  inputChildrenHaveErrors: function inputChildrenHaveErrors() {
	    var errorIds = _jquery2.default.map(this.props.errors, function (error, errorId) {
	      return errorId;
	    });

	    return this.checkInputChildrenForErrors(errorIds, this.props.children);
	  },
	  checkInputChildrenForErrors: function checkInputChildrenForErrors(errorIds, children) {
	    var inputChildrenHaveErrors = false;

	    _react2.default.Children.forEach(children, function (child) {
	      if (child.type == Input && _jquery2.default.inArray(child.props.id, errorIds) >= 0) {
	        inputChildrenHaveErrors = true;
	      } else if (child.type == InputGroup) {
	        inputChildrenHaveErrors = this.checkInputGroupForErrors(errorIds, child);
	      } else if (_react2.default.Children.count(child.children) > 0) {
	        inputChildrenHaveErrors = this.checkInputChildrenForErrors(errorIds, child.children);
	      }

	      if (inputChildrenHaveErrors) {
	        return false;
	      }
	    }.bind(this));

	    return inputChildrenHaveErrors;
	  },
	  checkInputGroupForErrors: function checkInputGroupForErrors(errorIds, inputGroup) {
	    var inputGroupHaveErrors = false;
	    var inputsIds = _jquery2.default.map(inputGroup.props.inputs, function (inputProps) {
	      return inputProps.id;
	    });

	    _jquery2.default.each(inputsIds, function (i, inputId) {
	      if (_jquery2.default.inArray(inputId, errorIds) >= 0) {
	        inputGroupHaveErrors = true;
	        return false;
	      }
	    });

	    return inputGroupHaveErrors;
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _theme = __webpack_require__(31);

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _theme2.default;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(14);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _utils = __webpack_require__(8);

	var _default = __webpack_require__(32);

	var _default2 = _interopRequireDefault(_default);

	var _materialize = __webpack_require__(33);

	var _materialize2 = _interopRequireDefault(_materialize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var themes = {
	  themes: {},
	  defaultTheme: 'default',
	  currentTheme: 'materialize',

	  registerTheme: function registerTheme(newThemeObj, theme) {
	    if (!_lodash2.default.isPlainObject(newThemeObj)) {
	      throw 'Invalid Theme Object.';
	    }

	    if (!theme) {
	      throw 'Invalid Theme Name.';
	    }

	    var currentThemeObj = this.themes[theme] || {};
	    this.themes[theme] = _lodash2.default.merge({}, currentThemeObj, newThemeObj);
	  },
	  getCurrent: function getCurrent() {
	    var defaultThemeObj = this.themes[this.defaultTheme];
	    var currentThemeObj = this.themes[this.currentTheme];

	    return $.extend({}, defaultThemeObj, currentThemeObj);
	  },
	  getProp: function getProp(key) {
	    if (!key) {
	      return '';
	    }

	    var currentTheme = this.getCurrent();
	    return (0, _utils.getProp)(key, currentTheme);
	  },
	  getCssClass: function getCssClass(keys) {
	    var keysArr = keys.split(' ');
	    var themeClass = "";

	    while (keysArr.length > 0) {
	      var key = keysArr.shift();
	      var classKey = key + '.cssClass';

	      themeClass += this.getProp(classKey) + ' ';
	    }

	    return themeClass.trim();
	  }
	};

	themes.registerTheme(_default2.default, 'default');
	themes.registerTheme(_materialize2.default, 'materialize');

	exports.default = themes;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
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

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
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

	    },

	    colorpicker: {
	      cssClass: 'colorpicker__input',

	      wrapper: {
	        cssClass: 'colorpicker__wrapper'
	      },

	      display: {
	        cssClass: 'colorpicker__display'
	      }
	    },

	    gridform: {
	      cssClass: 'input-gridForm',

	      label: {
	        cssClass: 'input-gridForm__label'
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

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    errorMessage: _prop_types2.default.string,
	    baseErrorParam: _prop_types2.default.string,
	    onError: _prop_types2.default.func,
	    mapping: _prop_types2.default.bool
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
	    if (_jquery2.default.isEmptyObject(this.state.errors)) {
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

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    onSuccess: _prop_types2.default.func,
	    successMessage: _prop_types2.default.string
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

	    return React.createElement(_components.Flash, { type: 'success', message: this.props.successMessage, dismissed: false });
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

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GridActionsMixin = undefined;

	var _grid_actions_mixin = __webpack_require__(37);

	var _grid_actions_mixin2 = _interopRequireDefault(_grid_actions_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GridActionsMixin = _grid_actions_mixin2.default;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _mergeWith = __webpack_require__(38);

	var _mergeWith2 = _interopRequireDefault(_mergeWith);

	var _isArray = __webpack_require__(39);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    actionButtons: _prop_types2.default.object,
	    rowHref: _prop_types2.default.string,
	    haveShowAction: _prop_types2.default.bool,

	    createActionButton: _prop_types2.default.object,
	    showActionButton: _prop_types2.default.object,
	    editActionButton: _prop_types2.default.object,
	    destroyActionButton: _prop_types2.default.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      actionButtons: {},
	      rowHref: null,
	      haveShowAction: false,
	      createActionButton: {},
	      showActionButton: {},
	      editActionButton: {},
	      destroyActionButton: {}
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
	    return (0, _mergeWith2.default)(this.getDefaultActionButtonsObject(), this.props.actionButtons, this.mergeActionButtons.bind(this));
	  },

	  mergeActionButtons: function mergeActionButtons(defaultObject, propsObject) {
	    var propsActionButtons = this.props.actionButtons;
	    var propsExtend = propsActionButtons.extend;
	    var extendActionButtons = typeof propsExtend == "boolean" ? propsExtend : false;

	    if (extendActionButtons && (0, _isArray2.default)(propsObject) && (0, _isArray2.default)(defaultObject)) {
	      return propsObject.concat(defaultObject);
	    } else {
	      return propsObject;
	    }
	  },
	  getDefaultActionButtonsObject: function getDefaultActionButtonsObject() {
	    return {
	      extend: true,
	      member: this.getDefaultMemberActionButtons(),
	      collection: this.getDefaultCollectionActionButtons()
	    };
	  },
	  getDefaultMemberActionButtons: function getDefaultMemberActionButtons() {
	    var actions = [this.getDefaultEditActionProps(), this.getDefaultDestroyActionProps()];

	    if (this.props.haveShowAction) {
	      actions.unshift(this.getDefaultShowActionProps());
	    }

	    return actions;
	  },
	  getDefaultCollectionActionButtons: function getDefaultCollectionActionButtons() {
	    return [this.getDefaultCreateActionProps()];
	  },
	  getDefaultCreateActionProps: function getDefaultCreateActionProps() {
	    return _jquery2.default.extend({}, {
	      name: 'actions.new',
	      context: 'none',
	      href: this.getRestActionUrl('add')
	    }, this.props.createActionButton);
	  },
	  getDefaultShowActionProps: function getDefaultShowActionProps() {
	    return _jquery2.default.extend({}, {
	      icon: 'search',
	      href: this.getRestActionUrl('show')
	    }, this.props.showActionButton);
	  },
	  getDefaultEditActionProps: function getDefaultEditActionProps() {
	    return _jquery2.default.extend({}, {
	      icon: 'edit',
	      href: this.getRestActionUrl('edit')
	    }, this.props.editActionButton);
	  },
	  getDefaultDestroyActionProps: function getDefaultDestroyActionProps() {
	    return _jquery2.default.extend({}, {
	      icon: 'destroy',
	      method: this.getRestActionMethod('destroy'),
	      actionUrl: this.getRestActionUrl('destroy'),
	      confirmsWith: this.props.destroyConfirm
	    }, this.props.destroyActionButton);
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("lodash/mergeWith");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("lodash/isArray");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SelectComponentMixin = exports.MaterializeSelectMixin = exports.InputSelectActionsListenerMixin = exports.InputComponentMixin = exports.CheckboxComponentMixin = undefined;

	var _checkbox_component_mixin = __webpack_require__(41);

	var _checkbox_component_mixin2 = _interopRequireDefault(_checkbox_component_mixin);

	var _input_component_mixin = __webpack_require__(43);

	var _input_component_mixin2 = _interopRequireDefault(_input_component_mixin);

	var _input_select_actions_listener_mixin = __webpack_require__(45);

	var _input_select_actions_listener_mixin2 = _interopRequireDefault(_input_select_actions_listener_mixin);

	var _materialize_select_mixin = __webpack_require__(48);

	var _materialize_select_mixin2 = _interopRequireDefault(_materialize_select_mixin);

	var _select_component_mixin = __webpack_require__(49);

	var _select_component_mixin2 = _interopRequireDefault(_select_component_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.CheckboxComponentMixin = _checkbox_component_mixin2.default;
	exports.InputComponentMixin = _input_component_mixin2.default;
	exports.InputSelectActionsListenerMixin = _input_select_actions_listener_mixin2.default;
	exports.MaterializeSelectMixin = _materialize_select_mixin2.default;
	exports.SelectComponentMixin = _select_component_mixin2.default;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    checked: _prop_types2.default.bool,
	    renderAsIndeterminate: _prop_types2.default.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      renderAsIndeterminate: false,
	      value: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      checked: this.getInitialChecked()
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var inputNode = _reactDom2.default.findDOMNode(this.refs.input);
	    inputNode.indeterminate = this.props.renderAsIndeterminate;

	    var $form = (0, _jquery2.default)(inputNode.form);
	    $form.on('reset', this._handleCheckboxReset);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var inputNode = _reactDom2.default.findDOMNode(this.refs.input);
	    var $form = (0, _jquery2.default)(inputNode.form);
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
	    var newCheckedValue = event.target.checked;
	    this.props.onChange(event, newCheckedValue, this);

	    if (!event.isDefaultPrevented()) {
	      var newState = { checked: newCheckedValue };
	      if (this.valueIsBoolean()) {
	        newState.value = newCheckedValue;
	      }

	      this.setState(newState);
	    }
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _theme = __webpack_require__(30);

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    id: _prop_types2.default.string,
	    name: _prop_types2.default.string,
	    value: _prop_types2.default.any,
	    disabled: _prop_types2.default.bool,
	    readOnly: _prop_types2.default.bool,
	    placeholder: _prop_types2.default.localizedString,
	    errors: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.array]),
	    onChange: _prop_types2.default.func,
	    onFocus: _prop_types2.default.func
	  },

	  defaultProps: function defaultProps() {
	    return {
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
	    var $form = (0, _jquery2.default)(this.getInputFormNode());
	    $form.on('reset', this._handleReset);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var $form = (0, _jquery2.default)(this.getInputFormNode());
	    $form.off('reset', this._handleReset);
	  },

	  getInputFormNode: function getInputFormNode() {
	    var inputRef = this.refs.input;
	    if (!!inputRef) {
	      return _reactDom2.default.findDOMNode(inputRef).form;
	    }

	    return null;
	  },

	  _handleReset: function _handleReset(event) {
	    if (this.isMounted() && !this.inputNodeIsCheckbox()) {
	      this.setState({
	        value: null
	      });
	    }
	  },

	  _handleChange: function _handleChange(event) {
	    var newValue = event.target.value;
	    this.props.onChange(event, newValue, this);

	    if (!event.isDefaultPrevented()) {
	      this.setState({ value: newValue });
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
	      className += ' ' + _theme2.default.getCssClass('input.error');
	    }

	    return className;
	  },

	  getPlaceholder: function getPlaceholder() {
	    var placeholder = _i18n2.default.t(this.props.placeholder);
	    if (typeof placeholder !== "string" || placeholder.length === 0) {
	      return null;
	    }

	    return placeholder;
	  },

	  inputNodeIsCheckbox: function inputNodeIsCheckbox() {
	    var inputNode = _reactDom2.default.findDOMNode(this.refs.input);
	    return !!inputNode && inputNode.type === "checkbox";
	  },

	  /* Serializer functions */

	  getValue: function getValue() {
	    var componentGetValue = this._getValue;

	    // workaround para o problema de não ser possível sobrescrever funções de mixins.
	    if (!!componentGetValue && typeof componentGetValue == "function") {
	      return componentGetValue();
	    } else {
	      return this.state.value;
	    }
	  }

	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _i18n = __webpack_require__(7);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _i18n2.default;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _input_select_store = __webpack_require__(46);

	var _input_select_store2 = _interopRequireDefault(_input_select_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  componentDidMount: function componentDidMount() {
	    _input_select_store2.default.listen(this.inputSelectActionListener);
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
	      throw new Error(_i18n2.default.t("errors.invalidAction"));
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
	    if ((typeof selectedOption === 'undefined' ? 'undefined' : _typeof(selectedOption)) != "object" || !selectedOption.name || !selectedOption.value) {
	      throw new Error(_i18n2.default.t("errors.inputSelect.invalidOption"));
	    }
	  },

	  cacheSelectedOption: function cacheSelectedOption(selectedOption) {
	    if (typeof this.cacheOptions == "function") {
	      return this.cacheOptions([selectedOption]);
	    }
	    return this.state.optionsCache;
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reflux = __webpack_require__(26);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _input_select_actions = __webpack_require__(47);

	var _input_select_actions2 = _interopRequireDefault(_input_select_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reflux2.default.createStore({
	  listenables: [_input_select_actions2.default],

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

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reflux = __webpack_require__(26);

	var _reflux2 = _interopRequireDefault(_reflux);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reflux2.default.createActions(['select', 'selectSearchValue']);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  componentDidMount: function componentDidMount() {
	    this.applyMaterialize(true);
	  },

	  componentDidUpdate: function componentDidUpdate(previousProps, previousState) {
	    if (this.state.options != previousState.options) {
	      this.applyMaterialize();
	    }
	  },

	  applyMaterialize: function applyMaterialize(onMount) {
	    var selectElement = _reactDom2.default.findDOMNode(this.refs.select);
	    (0, _jquery2.default)(selectElement).material_select(this.handleChangeMaterialize.bind(this, selectElement));

	    if (!onMount) {
	      this.handleChangeMaterialize(selectElement);
	    }
	  },

	  handleChangeMaterialize: function handleChangeMaterialize(selectElement) {
	    var $selectElement = (0, _jquery2.default)(selectElement);
	    var newValue = this.ensureIsArray(selectElement.value);
	    var fakeEvent = {
	      currentTarget: selectElement,
	      target: selectElement
	    };

	    //Implementação que resolve o seguinte bug do Materialize: https://github.com/Dogfalo/materialize/issues/1570
	    $selectElement.parent().parent().find('> .caret').remove();

	    this.setState({
	      value: newValue
	    }, this.triggerDependableChanged);

	    this.props.onChange(fakeEvent, newValue, this);
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _desc, _value, _obj;

	var _utils = __webpack_require__(8);

	var _decorators = __webpack_require__(10);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _map = __webpack_require__(50);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	exports.default = (_obj = {
	  propTypes: {
	    options: _prop_types2.default.array,
	    dependsOn: _prop_types2.default.object,
	    optionsUrl: _prop_types2.default.string,
	    optionsParam: _prop_types2.default.string,
	    nameField: _prop_types2.default.string,
	    valueField: _prop_types2.default.string,
	    multiple: _prop_types2.default.bool,
	    onLoad: _prop_types2.default.func,
	    onLoadError: _prop_types2.default.func,
	    onSelect: _prop_types2.default.func,
	    requestTimeout: _prop_types2.default.number
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
	      },
	      requestTimeout: 300
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      options: this.props.options,
	      optionsCache: this.props.options,
	      disabled: this.props.disabled,
	      mustDisable: false,
	      loadParams: {},
	      loadData: [],
	      hasPendingRequest: false
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
	        this.loadDependentOptions(null, true);
	      } else {
	        this.loadOptions();
	      }
	    }

	    var value = this.ensureIsArray(this.state.value);
	    if (value.length > 0) {
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
	    var value = this.ensureIsArray(this.state.value);
	    var selectedOptions = [];

	    $.each(this.state.optionsCache, function (i, option) {
	      if (value.indexOf(option.value) >= 0) {
	        selectedOptions.push(option);
	      }
	    }.bind(this));

	    return selectedOptions;
	  },
	  loadOptions: function loadOptions() {
	    this.state.hasPendingRequest = true;
	    var requestTime = new Date().getTime();
	    var timeout = 0;

	    if (!!this.state.xhr && this.state.xhr.readyState != 4) this.state.xhr.abort();

	    if (!!this.state.lastXhrRequestTime) timeout = this.props.requestTimeout;

	    if (!!this.state.lastXhrRequestTime && this.state.lastXhrRequestTime + timeout > requestTime) clearTimeout(this.state.xhrTimer);

	    var context = this;
	    this.state.xhrTimer = setTimeout(function () {
	      context.state.xhr = $.ajax({
	        url: context.props.optionsUrl,
	        method: 'GET',
	        dataType: 'json',
	        data: context.state.loadParams,
	        success: context.handleLoad.bind(this),
	        error: context.handleLoadError.bind(this)
	      });
	    }.bind(this), timeout);

	    this.state.lastXhrRequestTime = requestTime;
	  },
	  handleLoad: function handleLoad(data) {
	    var options = [];
	    var optionsParam = this.props.optionsParam;
	    if (!!optionsParam) {
	      data = (0, _utils.getProp)(optionsParam, data);
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

	    this.state.hasPendingRequest = false;
	    this.props.onLoad(data);
	  },
	  handleLoadError: function handleLoadError(xhr, status, error) {
	    this.state.hasPendingRequest = false;
	    this.props.onLoadError(xhr, status, error);
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
	    this.loadDependentOptions(dependableValue, false);
	  },
	  loadDependentOptions: function loadDependentOptions(dependableValue, keepValue) {
	    if (!dependableValue) {
	      dependableValue = this.getDependableNode().val();
	    }

	    if (!dependableValue || dependableValue.length === 0) {
	      this.emptyAndDisable(keepValue);
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
	    var $valuesElement = $(_reactDom2.default.findDOMNode(this.refs.select));
	    var optionValues = this.ensureIsArray(this.state.value);

	    $valuesElement.trigger('dependable_changed', [optionValues]);
	  },

	  emptyAndDisable: function emptyAndDisable(keepValue) {
	    var newState = {
	      options: [],
	      optionsCache: [],
	      mustDisable: true
	    };

	    if (!keepValue) {
	      newState.value = [];
	    }

	    this.setState(newState);
	  },
	  isDisabled: function isDisabled() {
	    return this.state.disabled || this.state.mustDisable;
	  },


	  /* Serializer functions */

	  getDisplayValues: function getDisplayValues() {
	    return (0, _map2.default)(this.selectedOptions(), function (selectedOption) {
	      return selectedOption[this.props.nameField];
	    }.bind(this));
	  },
	  serialize: function serialize() {
	    var serializedInput = {};
	    serializedInput[this.props.name] = this.getValue();
	    serializedInput[this.props.name + "Display"] = this.getDisplayValues();

	    return serializedInput;
	  }
	}, (_applyDecoratedDescriptor(_obj, 'onDependableChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_obj, 'onDependableChange'), _obj), _applyDecoratedDescriptor(_obj, 'loadDependentOptions', [_decorators.autobind], Object.getOwnPropertyDescriptor(_obj, 'loadDependentOptions'), _obj)), _obj);

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("lodash/map");

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _isEqual = __webpack_require__(52);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    forwardedProps: _prop_types2.default.object
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
	    _react2.default.Children.map(this.props.children, function (child) {
	      if (!!child && child.type == childType) {
	        result.push(child);
	      }
	    });

	    return result;
	  },
	  cloneChildrenWithProps: function cloneChildrenWithProps(options) {
	    var props = this.buildPropsToForward();

	    if (!!options && !!options.childrenType) {
	      return _react2.default.Children.map(this.filterChildren(options.childrenType), function (child) {
	        var forwardedProps = _jquery2.default.extend({}, this.props.forwardedProps, props);
	        if (!child || !child.type) {
	          return null;
	        }

	        return _react2.default.cloneElement(child, _jquery2.default.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
	      }.bind(this));
	    } else {
	      return _react2.default.Children.map(this.props.children, function (child) {
	        var forwardedProps = _jquery2.default.extend({}, this.props.forwardedProps, props);
	        if (!child || !child.type) {
	          return null;
	        }

	        return _react2.default.cloneElement(child, _jquery2.default.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
	      }.bind(this));
	    }
	  },
	  buildChildPropsToKeep: function buildChildPropsToKeep(child) {
	    var defaultChildProps = {};
	    var keepProps = [];

	    if (!!child.type.getDefaultProps) defaultChildProps = child.type.getDefaultProps();

	    if (_jquery2.default.isArray(child.props['ignoreForwarded'])) keepProps = child.props['ignoreForwarded'];

	    var newProps = {};

	    for (var k in child.props) {
	      if (this.childPropValueIsNotDefault(child.props[k], defaultChildProps[k]) || this.shouldKeepChildPropValueAnyway(k, keepProps)) newProps[k] = child.props[k];
	    }
	    return newProps;
	  },
	  childPropValueIsNotDefault: function childPropValueIsNotDefault(propValue, defaultPropValue) {
	    return !(0, _isEqual2.default)(propValue, defaultPropValue);
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

	    return _jquery2.default.extend(props, forwardMapping);
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("lodash/isEqual");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _theme = __webpack_require__(30);

	var _theme2 = _interopRequireDefault(_theme);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    clearTheme: _prop_types2.default.bool,
	    className: _prop_types2.default.string,
	    themeClassKey: _prop_types2.default.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      clearTheme: false
	    };
	  },
	  themedClassName: function themedClassName(themeClassKey, className) {
	    var themedClassName = '';

	    if (!this.props.clearTheme && !!themeClassKey) {
	      themedClassName += _theme2.default.getCssClass(themeClassKey);
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
	    var props = _jquery2.default.extend({}, this.props);
	    _jquery2.default.each(cssProps, function (i, cssProp) {
	      delete props[cssProp];
	    }.bind(this));

	    return props;
	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _i18n = __webpack_require__(7);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    resource: _prop_types2.default.string,
	    name: _prop_types2.default.string
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

	    var resourceKey = void 0;
	    try {
	      resourceKey = 'resources.' + resource + '.fields.' + name;
	      return _i18n2.default.t(resourceKey, true);
	    } catch (err) {
	      resourceKey = 'resources.defaults.fields.' + name;
	      try {
	        return _i18n2.default.t(resourceKey, true);
	      } catch (err) {
	        return name;
	      }
	    }
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    modalContainerId: _prop_types2.default.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      modalContainerId: "modal-container"
	    };
	  },

	  renderModalHtml: function renderModalHtml(modalHtml) {
	    var modalContainerId = this.props.modalContainerId;

	    var $modalContainer = (0, _jquery2.default)("#" + modalContainerId);
	    if ($modalContainer.length === 0) {
	      $modalContainer = (0, _jquery2.default)("<div id='" + modalContainerId + "'></div>");
	      (0, _jquery2.default)("body").append($modalContainer);
	    }

	    $modalContainer.html(modalHtml);
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    onRequest: _prop_types2.default.func,
	    onSuccess: _prop_types2.default.func,
	    onError: _prop_types2.default.func,
	    onComplete: _prop_types2.default.func
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
	      success: this.successCallback.bind(this),
	      error: this.errorCallback.bind(this),
	      complete: this.completeCallback.bind(this)
	    };

	    if (!!dataType) {
	      requestOptions.dataType = dataType;
	    }

	    this.cancelPendingRequest();
	    this.requestCallback(requestData, url);
	    this.current_xhr = _jquery2.default.ajax(requestOptions);
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

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _merge = __webpack_require__(58);

	var _merge2 = _interopRequireDefault(_merge);

	var _realize = __webpack_require__(59);

	var _realize2 = _interopRequireDefault(_realize);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    actionUrls: _prop_types2.default.object,
	    actionMethods: _prop_types2.default.object,
	    destroyConfirm: _prop_types2.default.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      actionUrls: {},
	      actionMethods: null,
	      destroyConfirm: _i18n2.default.t('table.destroyConfirm')
	    };
	  },
	  getRestActionUrl: function getRestActionUrl(action, id) {
	    var actionUrls = (0, _merge2.default)(_realize2.default.config.restUrls, this.props.actionUrls);
	    var actionUrl = actionUrls[action];
	    var actionBaseUrl = this.getActionBaseUrl();
	    var actionQueryString = this.getActionQueryString();

	    actionUrl = actionUrl.replace(/:url/, actionBaseUrl);
	    if (!!id) {
	      actionUrl = actionUrl.replace(/:id/, id);
	    }

	    return actionUrl + actionQueryString;
	  },
	  getRestActionMethod: function getRestActionMethod(action) {
	    var actionMethods = (0, _merge2.default)(_realize2.default.config.restMethods, this.props.actionMethods);
	    return actionMethods[action];
	  },
	  getActionBaseUrl: function getActionBaseUrl() {
	    var baseUrlMatches = this.props.url.match(/^(.*)\?/);
	    if (!!baseUrlMatches) {
	      return baseUrlMatches[1];
	    } else {
	      return this.props.url;
	    }
	  },
	  getActionQueryString: function getActionQueryString() {
	    var queryStringMatches = this.props.url.match(/\?.*$/);
	    if (!!queryStringMatches) {
	      return queryStringMatches[0];
	    } else {
	      return "";
	    }
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("lodash/merge");

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Realize = undefined;

	var _config = __webpack_require__(60);

	var _config2 = _interopRequireDefault(_config);

	var _theme = __webpack_require__(31);

	var _theme2 = _interopRequireDefault(_theme);

	var _i18n = __webpack_require__(7);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _merge = __webpack_require__(58);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Realize = exports.Realize = {
	  config: _config2.default,
	  themes: _theme2.default,
	  i18n: _i18n2.default,

	  setConfig: function setConfig(newConfig) {
	    (0, _merge2.default)(this.config, newConfig);
	  }
	};

	exports.default = Realize;

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
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
	      window: 4,
	      type: 'default',
	      perPageOptions: [{ name: '10', value: 10 }, { name: '20', value: 20 }, { name: '50', value: 50 }]
	    },
	    sort: {
	      param: 's',
	      directionParam: 's_dir',
	      fieldValueFormat: '%{field}'
	    }
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  propTypes: {
	    tooltipDelay: _prop_types2.default.number,
	    tooltipText: _prop_types2.default.string,
	    tooltipPosition: _prop_types2.default.oneOf(['bottom', 'top', 'left', 'right'])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      tooltipDelay: 10,
	      tooltipPosition: 'top',
	      tooltipText: null
	    };
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.initializeTooltip();
	  },
	  componentDidMount: function componentDidMount() {
	    this.initializeTooltip();
	  },
	  initializeTooltip: function initializeTooltip() {
	    if (!!this.props.tooltipText) {
	      $('.tooltipped').tooltip();
	    }
	  },
	  getTooltipClassName: function getTooltipClassName() {
	    var className = this.className();
	    if (!!this.props.tooltipText) className += ' tooltipped';

	    return className;
	  },
	  tooltipAttributes: function tooltipAttributes() {
	    return {
	      'data-position': this.props.tooltipPosition,
	      'data-delay': this.props.tooltipDelay,
	      'data-tooltip': this.props.tooltipText
	    };
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// TODO: refatorar para módulo
	exports.default = {
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

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var AddPrincipalsModal = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
	  _inherits(AddPrincipalsModal, _Component);

	  function AddPrincipalsModal() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, AddPrincipalsModal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AddPrincipalsModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      selectedPrincipal: null,
	      potentialPrincipals: [],
	      principalType: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(AddPrincipalsModal, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      _jquery2.default.ajax({
	        url: this.props.principalsTypeBaseUrl,
	        method: 'GET',
	        dataType: 'json',
	        success: function success(data) {
	          _this2.setState({
	            principalType: data[0].name
	          });
	        }
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.refs.grid.backToInitialState();
	    }
	  }, {
	    key: 'getData',
	    value: function getData() {
	      return {
	        dataRows: this.state.potentialPrincipals,
	        count: this.state.potentialPrincipals.length
	      };
	    }
	  }, {
	    key: 'getSelectedDatas',
	    value: function getSelectedDatas() {
	      var selectedRowsIds = this.refs.grid.state.selectedRowIds;
	      var dataRows = this.refs.grid.state.dataRows;
	      var selectedDatas = [];

	      selectedRowsIds.forEach(function (rowId) {
	        dataRows.forEach(function (data) {
	          if (data.id === rowId) {
	            selectedDatas.push({
	              principal_id: data.id,
	              principal_type: data.principal_type
	            });
	          }
	        });
	      });

	      return selectedDatas;
	    }
	  }, {
	    key: 'addPrincipal',
	    value: function addPrincipal(selectedDatas) {
	      this.props.handleAddPrincipal(selectedDatas);
	    }
	  }, {
	    key: 'filters',
	    value: function filters() {
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
	    }
	  }, {
	    key: 'handleSelectPrincipal',
	    value: function handleSelectPrincipal(event, data) {
	      this.setState({
	        selectedPrincipal: data
	      });
	    }
	  }, {
	    key: 'handleAddPrincipal',
	    value: function handleAddPrincipal() {
	      var selectedDatas = this.getSelectedDatas();
	      if (selectedDatas.length === 0) {
	        alert('Necessário selecionar alguém para adicionar');
	      } else {
	        this.addPrincipal(selectedDatas);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _components.Modal,
	        {
	          id: this.props.modalId,
	          style: { 'z-index': '9000' },
	          className: this.props.className,
	          headerSize: this.props.headerSize,
	          ref: 'add-principals-modal'
	        },
	        _react2.default.createElement(
	          _components.ModalHeader,
	          null,
	          _react2.default.createElement(
	            'h5',
	            null,
	            'Selecionar Usuário/Grupo'
	          )
	        ),
	        _react2.default.createElement(
	          _components.ModalContent,
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'principal-modal-content' },
	            _react2.default.createElement(_components.Grid, _extends({
	              ref: 'grid'
	            }, this.props.gridProps, {
	              url: this.props.potentialPrincipalsBaseUrl,
	              filter: this.filters(),
	              eagerLoad: true,
	              onClickRow: this.handleSelectPrincipal
	            }))
	          )
	        ),
	        _react2.default.createElement(
	          _components.ModalFooter,
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-footer', style: { float: 'right' } },
	            _react2.default.createElement(_components.CloseModalButton, { modalId: this.props.modalId }),
	            _react2.default.createElement(_components.Button, {
	              name: 'Adicionar',
	              element: 'a',
	              onClick: this.handleAddPrincipal
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return AddPrincipalsModal;
	}(_react.Component), _class3.propTypes = {
	  resource: _prop_types2.default.object,
	  resourceType: _prop_types2.default.string,
	  className: _prop_types2.default.string,
	  modalId: _prop_types2.default.string,
	  potentialPrincipalsBaseUrl: _prop_types2.default.string,
	  principalsTypeBaseUrl: _prop_types2.default.string
	}, _class3.defaultProps = {
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
	}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleSelectPrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelectPrincipal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleAddPrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleAddPrincipal'), _class2.prototype)), _class2)) || _class);
	exports.default = AddPrincipalsModal;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CloseModalButton = (_class = (_temp = _class2 = function (_Component) {
	  _inherits(CloseModalButton, _Component);

	  function CloseModalButton() {
	    _classCallCheck(this, CloseModalButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CloseModalButton).apply(this, arguments));
	  }

	  _createClass(CloseModalButton, [{
	    key: 'closeModal',
	    value: function closeModal() {
	      if (!!this.props.modalId) {
	        (0, _jquery2.default)('#' + this.props.modalId).closeModal();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_components.Button, _extends({}, this.props, { onClick: this.closeModal }));
	    }
	  }]);

	  return CloseModalButton;
	}(_react.Component), _class2.propTypes = {
	  name: _prop_types2.default.string,
	  className: _prop_types2.default.string,
	  clearTheme: _prop_types2.default.bool,
	  element: _prop_types2.default.string,
	  modalId: _prop_types2.default.string
	}, _class2.defaultProps = {
	  name: 'Fechar',
	  className: 'btn waves-effect waves-light close-button grey lighten-4',
	  clearTheme: true,
	  element: 'a'
	}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'closeModal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'closeModal'), _class.prototype)), _class);
	exports.default = CloseModalButton;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _difference = __webpack_require__(66);

	var _difference2 = _interopRequireDefault(_difference);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var PermissionManagerModal = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
	  _inherits(PermissionManagerModal, _Component);

	  function PermissionManagerModal() {
	    _classCallCheck(this, PermissionManagerModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PermissionManagerModal).apply(this, arguments));
	  }

	  _createClass(PermissionManagerModal, [{
	    key: 'onSuccess',
	    value: function onSuccess() {
	      (0, _jquery2.default)('#' + this.props.modalId).closeModal();
	      if (this.props.reloadPageAfterSubmit) window.location.reload();
	    }
	  }, {
	    key: 'getPostData',
	    value: function getPostData() {
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
	          permissions = (0, _difference2.default)(permissions, implies);

	          postData.push({
	            principal_id: principalPermissions[i].principal_id,
	            principal_type: principalPermissions[i].principal_type,
	            permissions: permissions
	          });
	        }
	      }

	      return {
	        resource_id: this.props.resource.id,
	        resource_type: this.props.resourceType,
	        permissions_by_principal: postData
	      };
	    }
	  }, {
	    key: 'loadPrincipalsPermissions',
	    value: function loadPrincipalsPermissions(selectedDatas) {
	      this.refs.permissionManager.createPrincipalsPermissions(selectedDatas);
	    }
	  }, {
	    key: 'handleUpdatePermissions',
	    value: function handleUpdatePermissions() {
	      var url = this.props.updatePermissionsBaseUrl;
	      var postData = this.getPostData();
	      var method = 'PUT';
	      this.performRequest(url, postData, method);
	    }
	  }, {
	    key: 'renderTitle',
	    value: function renderTitle() {
	      var component = [];
	      var title = !!this.props.title ? this.props.title : this.props.resource.name;

	      component.push(_react2.default.createElement(
	        'h5',
	        null,
	        'Gerenciar Permissões - ',
	        title
	      ));

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _components.Modal,
	        {
	          id: this.props.modalId,
	          className: this.props.className,
	          headerSize: this.props.headerSize,
	          opened: true,
	          ref: 'modal'
	        },
	        _react2.default.createElement(
	          _components.ModalHeader,
	          null,
	          _react2.default.createElement(
	            'h5',
	            null,
	            'Gerenciar Permissões - ',
	            this.props.resource.name
	          )
	        ),
	        _react2.default.createElement(
	          _components.ModalContent,
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'permissions-modal-content' },
	            _react2.default.createElement(_components.PermissionManager, {
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
	        _react2.default.createElement(
	          _components.ModalFooter,
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-footer', style: { float: 'right' } },
	            _react2.default.createElement(_components.CloseModalButton, { modalId: this.props.modalId }),
	            _react2.default.createElement(_components.UpdatePermissionsButton, { handleUpdatePermissions: this.handleUpdatePermissions })
	          )
	        )
	      );
	    }
	  }]);

	  return PermissionManagerModal;
	}(_react.Component), _class3.propTypes = {
	  permissionManagerInModal: _prop_types2.default.bool,
	  principal: _prop_types2.default.object,
	  principalType: _prop_types2.default.string,
	  resource: _prop_types2.default.object,
	  resourceType: _prop_types2.default.string,
	  className: _prop_types2.default.string,
	  modalId: _prop_types2.default.string,
	  updatePermissionsBaseUrl: _prop_types2.default.string,
	  principalsBaseUrl: _prop_types2.default.string,
	  principalsPermissionsBaseUrl: _prop_types2.default.string,
	  title: _prop_types2.default.string,
	  reloadPageAfterSubmit: _prop_types2.default.bool
	}, _class3.defaultProps = {
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
	  principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions',
	  reloadPageAfterSubmit: false
	}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'onSuccess', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'onSuccess'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleUpdatePermissions', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleUpdatePermissions'), _class2.prototype)), _class2)) || _class);
	exports.default = PermissionManagerModal;

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("lodash/difference");

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _utils = __webpack_require__(8);

	var _input = __webpack_require__(68);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var EditPermissions = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
	  _inherits(EditPermissions, _Component);

	  function EditPermissions() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, EditPermissions);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EditPermissions)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      permissions: [],
	      permissionsChecked: _this.initialPrincipalPermissions()
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(EditPermissions, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.getPermissions();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        permissionsChecked: nextProps.principalPermission
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      (0, _jquery2.default)('.permission-manager-modal').resize();
	    }
	  }, {
	    key: 'initialPrincipalPermissions',
	    value: function initialPrincipalPermissions() {
	      return !!this.props.principalPermissions ? this.props.principalPermissions : [];
	    }
	  }, {
	    key: 'checked',
	    value: function checked(permission) {
	      var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
	      var checked = false;

	      if (!!permissionsChecked) {
	        for (var i = 0; i < permissionsChecked.length; i++) {
	          var permissions = permissionsChecked[i].permission;
	          var implies = permissionsChecked[i].implies;

	          if (!_jquery2.default.isArray(permissions)) {
	            permissions = [permissions];
	          }

	          if (permissions.indexOf(permission) !== -1 || implies.indexOf(permission) !== -1) {
	            checked = true;
	          }
	        }
	      }

	      return checked;
	    }
	  }, {
	    key: 'disabled',
	    value: function disabled(permission) {
	      var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
	      var disabled = false;

	      if (!!permissionsChecked) {
	        for (var i = 0; i < permissionsChecked.length; i++) {
	          var permissionName = permissionsChecked[i].permission;
	          var implies = permissionsChecked[i].implies;
	          var inherited = permissionsChecked[i].inherited;
	          if (implies.indexOf(permission) !== -1 || permissionName === permission && inherited === true) {
	            disabled = true;
	          }
	        }
	      }

	      return disabled;
	    }
	  }, {
	    key: 'grantPermission',
	    value: function grantPermission(permission) {
	      var url = this.props.permissionsBaseUrl;
	      var data = {
	        principal_id: this.props.principal.id,
	        principal_type: this.props.principalType,
	        resource_id: this.props.resource.id,
	        resourceType: this.props.resourceType,
	        permissions: [permission]
	      };

	      this.performRequest(url, data, 'POST', 'json');
	    }
	  }, {
	    key: 'revokePermission',
	    value: function revokePermission(permission) {
	      var url = this.props.permissionsBaseUrl + '/' + this.props.principal.id;
	      var data = {
	        principal_id: this.props.principal.id,
	        principal_type: this.props.principalType,
	        resource_id: this.props.resource.id,
	        resource_type: this.props.resourceType,
	        permissions: [permission]
	      };

	      this.performRequest(url, data, 'DELETE', 'json');
	    }
	  }, {
	    key: 'getPermissions',
	    value: function getPermissions() {
	      var _this2 = this;

	      var context = this;

	      _jquery2.default.ajax({
	        url: this.props.permissionsBaseUrl + '/' + this.props.principal.id,
	        method: 'GET',
	        dataType: 'json',
	        data: {
	          principal_type: this.props.principalType,
	          principal_id: this.props.principal.id,
	          resource_id: this.props.resource.id,
	          resource_type: this.props.resourceType
	        },
	        success: function success(data) {
	          _this2.setState({
	            permissions: data.permissions
	          }, function () {
	            context.props.afterCreateEntry();
	          });
	        }
	      });
	    }
	  }, {
	    key: 'onSuccess',
	    value: function onSuccess() {
	      this.getPermissions();
	    }
	  }, {
	    key: 'addPermissionChecked',
	    value: function addPermissionChecked(permission) {
	      this.props.handleAddPermissionChecked(permission);
	    }
	  }, {
	    key: 'removePermissionChecked',
	    value: function removePermissionChecked(permission) {
	      this.props.handleRemovePermissionChecked(permission);
	    }
	  }, {
	    key: 'belongsToPermissionsChecked',
	    value: function belongsToPermissionsChecked(permission) {
	      var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
	      var belongs = false;

	      for (var i = 0; i < permissionsChecked.length; i++) {
	        if (permissionsChecked[i].permissions === permission) {
	          belongs = true;
	        }
	      }

	      return belongs;
	    }
	  }, {
	    key: 'checkboxId',
	    value: function checkboxId(permission) {
	      return 'permissions_' + permission + '_';
	    }
	  }, {
	    key: 'checkboxName',
	    value: function checkboxName() {
	      return 'permissions[]';
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(permission) {
	      var _this3 = this;

	      return function () {
	        var checkbox = _reactDom2.default.findDOMNode(_this3.refs['checkbox_' + permission]);
	        var checked = (0, _jquery2.default)((0, _jquery2.default)(checkbox).find('input')).is(':checked');
	        if (!!_this3.props.saveOnSelect) {
	          if (checked) {
	            _this3.grantPermission(permission);
	          } else {
	            _this3.revokePermission(permission);
	          }
	        } else {
	          if (checked) {
	            if (!_this3.belongsToPermissionsChecked(permission)) {
	              _this3.addPermissionChecked(permission);
	            }
	          } else {
	            _this3.removePermissionChecked(permission);
	          }
	        }
	      };
	    }
	  }, {
	    key: 'renderPermissionGroup',
	    value: function renderPermissionGroup() {
	      var _this4 = this;

	      var component = [];
	      var permissions = this.state.permissions;

	      if (!!permissions) {
	        permissions.forEach(function (permission) {
	          component.push(_react2.default.createElement(_input.Input, {
	            key: _utils.uuid.v4(),
	            component: 'checkbox',
	            ref: 'checkbox_' + permission,
	            label: I18n.t('permissions.' + permission),
	            value: permission,
	            checked: _this4.checked(permission),
	            disabled: _this4.disabled(permission),
	            onChange: _this4.handleChange.bind(_this4, permission),
	            id: _this4.checkboxId(permission),
	            name: _this4.checkboxName(),
	            className: 'col s12'
	          }));
	        });
	      }

	      return component;
	    }
	  }, {
	    key: 'renderTitle',
	    value: function renderTitle() {
	      var component = [];
	      if (!!this.props.title) {
	        component.push(_react2.default.createElement(
	          'h3',
	          null,
	          this.props.title
	        ));
	      }

	      return component;
	    }
	  }, {
	    key: 'renderHiddenInputs',
	    value: function renderHiddenInputs() {
	      var component = [];
	      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: '_method', value: 'put' }));
	      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: 'resource_type', value: this.props.resourceType }));
	      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: 'resource_id', value: this.props.resource.id }));
	      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: 'principal_type', value: this.props.principalType }));
	      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: 'principal_id', value: this.props.principal.id }));

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'row permissions-manager' },
	        this.renderTitle(),
	        _react2.default.createElement(
	          'div',
	          { className: 'box-edit-permissions' },
	          this.renderHiddenInputs(),
	          this.renderPermissionGroup()
	        )
	      );
	    }
	  }]);

	  return EditPermissions;
	}(_react.Component), _class3.propTypes = {
	  principal: _prop_types2.default.object,
	  principalType: _prop_types2.default.string,
	  resource: _prop_types2.default.object,
	  resourceType: _prop_types2.default.string,
	  title: _prop_types2.default.string,
	  saveOnSelect: _prop_types2.default.bool,
	  principalPermissions: _prop_types2.default.object,
	  permissionsBaseUrl: _prop_types2.default.permissionsBaseUrl
	}, _class3.defaultProps = {
	  principal: null,
	  principalType: '',
	  resource: null,
	  resourceType: null,
	  title: '',
	  saveOnSelect: false,
	  principalPermissions: null,
	  permissionsBaseUrl: '/wkm_acl_ui/permissions'
	}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class);
	exports.default = EditPermissions;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputTextarea = exports.InputText = exports.InputSwitch = exports.InputPassword = exports.InputNumber = exports.InputMasked = exports.InputHidden = exports.InputFile = exports.InputError = exports.InputDatepicker = exports.InputColorpicker = exports.InputBase = exports.Input = undefined;

	var _autocomplete = __webpack_require__(69);

	Object.keys(_autocomplete).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _autocomplete[key];
	    }
	  });
	});

	var _checkbox = __webpack_require__(76);

	Object.keys(_checkbox).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _checkbox[key];
	    }
	  });
	});

	var _datefilter = __webpack_require__(79);

	Object.keys(_datefilter).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _datefilter[key];
	    }
	  });
	});

	var _grid_form = __webpack_require__(83);

	Object.keys(_grid_form).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _grid_form[key];
	    }
	  });
	});

	var _radiobutton = __webpack_require__(87);

	Object.keys(_radiobutton).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _radiobutton[key];
	    }
	  });
	});

	var _select = __webpack_require__(89);

	Object.keys(_select).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _select[key];
	    }
	  });
	});

	var _input = __webpack_require__(92);

	var _input2 = _interopRequireDefault(_input);

	var _input_base = __webpack_require__(93);

	var _input_base2 = _interopRequireDefault(_input_base);

	var _input_colorpicker = __webpack_require__(94);

	var _input_colorpicker2 = _interopRequireDefault(_input_colorpicker);

	var _input_datepicker = __webpack_require__(96);

	var _input_datepicker2 = _interopRequireDefault(_input_datepicker);

	var _input_error = __webpack_require__(97);

	var _input_error2 = _interopRequireDefault(_input_error);

	var _input_file = __webpack_require__(98);

	var _input_file2 = _interopRequireDefault(_input_file);

	var _input_hidden = __webpack_require__(99);

	var _input_hidden2 = _interopRequireDefault(_input_hidden);

	var _input_masked = __webpack_require__(100);

	var _input_masked2 = _interopRequireDefault(_input_masked);

	var _input_number = __webpack_require__(101);

	var _input_number2 = _interopRequireDefault(_input_number);

	var _input_password = __webpack_require__(102);

	var _input_password2 = _interopRequireDefault(_input_password);

	var _input_switch = __webpack_require__(103);

	var _input_switch2 = _interopRequireDefault(_input_switch);

	var _input_text = __webpack_require__(104);

	var _input_text2 = _interopRequireDefault(_input_text);

	var _input_textarea = __webpack_require__(105);

	var _input_textarea2 = _interopRequireDefault(_input_textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Input = _input2.default;
	exports.InputBase = _input_base2.default;
	exports.InputColorpicker = _input_colorpicker2.default;
	exports.InputDatepicker = _input_datepicker2.default;
	exports.InputError = _input_error2.default;
	exports.InputFile = _input_file2.default;
	exports.InputHidden = _input_hidden2.default;
	exports.InputMasked = _input_masked2.default;
	exports.InputNumber = _input_number2.default;
	exports.InputPassword = _input_password2.default;
	exports.InputSwitch = _input_switch2.default;
	exports.InputText = _input_text2.default;
	exports.InputTextarea = _input_textarea2.default;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputAutocomplete = exports.InputAutocompleteValues = exports.InputAutocompleteSelect = exports.InputAutocompleteResult = exports.InputAutocompleteOption = exports.InputAutocompleteList = undefined;

	var _input_autocomplete_list = __webpack_require__(70);

	var _input_autocomplete_list2 = _interopRequireDefault(_input_autocomplete_list);

	var _input_autocomplete_option = __webpack_require__(71);

	var _input_autocomplete_option2 = _interopRequireDefault(_input_autocomplete_option);

	var _input_autocomplete_result = __webpack_require__(72);

	var _input_autocomplete_result2 = _interopRequireDefault(_input_autocomplete_result);

	var _input_autocomplete_select = __webpack_require__(73);

	var _input_autocomplete_select2 = _interopRequireDefault(_input_autocomplete_select);

	var _input_autocomplete_values = __webpack_require__(74);

	var _input_autocomplete_values2 = _interopRequireDefault(_input_autocomplete_values);

	var _input_autocomplete = __webpack_require__(75);

	var _input_autocomplete2 = _interopRequireDefault(_input_autocomplete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.InputAutocompleteList = _input_autocomplete_list2.default;
	exports.InputAutocompleteOption = _input_autocomplete_option2.default;
	exports.InputAutocompleteResult = _input_autocomplete_result2.default;
	exports.InputAutocompleteSelect = _input_autocomplete_select2.default;
	exports.InputAutocompleteValues = _input_autocomplete_values2.default;
	exports.InputAutocomplete = _input_autocomplete2.default;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputAutocompleteList = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputAutocompleteList, _Component);

	  function InputAutocompleteList() {
	    _classCallCheck(this, InputAutocompleteList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputAutocompleteList).apply(this, arguments));
	  }

	  _createClass(InputAutocompleteList, [{
	    key: 'onTopSelectedOptions',
	    value: function onTopSelectedOptions() {
	      var selectedOptions = _jquery2.default.map(this.props.selectedOptions, function (selectedOption) {
	        var option = _jquery2.default.extend({}, selectedOption);

	        option.selected = true;
	        return option;
	      });

	      return _jquery2.default.grep(selectedOptions, function (option) {
	        return !!option.showOnTop;
	      });
	    }
	  }, {
	    key: 'otherOptions',
	    value: function otherOptions() {
	      var _this2 = this;

	      var otherOptions = _jquery2.default.map(this.props.options, function (option) {
	        var otherOption = _jquery2.default.extend({}, option);
	        var relatedSelectedOption = _jquery2.default.grep(_this2.props.selectedOptions, function (selectedOption) {
	          return selectedOption.value === otherOption.value;
	        })[0];

	        if (!!relatedSelectedOption) {
	          otherOption.selected = true;
	          otherOption.showOnTop = relatedSelectedOption.showOnTop;
	        }

	        return otherOption;
	      });

	      return _jquery2.default.grep(otherOptions, function (option) {
	        return !option.showOnTop;
	      });
	    }
	  }, {
	    key: 'renderOptions',
	    value: function renderOptions() {
	      var options = [].concat(this.onTopSelectedOptions(), this.otherOptions());
	      var listOptions = [];

	      for (var i = 0; i < options.length; i++) {
	        var optionProps = options[i];
	        listOptions.push(_react2.default.createElement(_components.InputAutocompleteOption, _extends({}, optionProps, {
	          onSelect: this.props.onSelect,
	          onOptionMouseEnter: this.props.onOptionMouseEnter,
	          position: i,
	          isActive: i === this.props.active,
	          id: this.props.id,
	          key: optionProps.name,
	          ref: 'option_' + i
	        })));
	      }

	      return listOptions;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        { className: this.className() },
	        this.renderOptions()
	      );
	    }
	  }]);

	  return InputAutocompleteList;
	}(_react.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  selectedOptions: _prop_types2.default.array,
	  options: _prop_types2.default.array,
	  active: _prop_types2.default.number,
	  onSelect: _prop_types2.default.func,
	  onOptionMouseEnter: _prop_types2.default.func
	}, _class2.defaultProps = {
	  themeClassKey: 'input.autocomplete.list',
	  options: [],
	  selectedOptions: [],
	  onSelect: function onSelect() {
	    return true;
	  },
	  onOptionMouseEnter: function onOptionMouseEnter() {
	    return true;
	  }
	}, _temp)) || _class);
	exports.default = InputAutocompleteList;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _utils = __webpack_require__(8);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var InputAutocompleteOption = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
	  _inherits(InputAutocompleteOption, _Component);

	  function InputAutocompleteOption() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputAutocompleteOption);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputAutocompleteOption)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      themeClassKey: _this.parseThemeClassKey(_this.props.isActive)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputAutocompleteOption, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        themeClassKey: this.parseThemeClassKey(nextProps.isActive)
	      });
	    }
	  }, {
	    key: 'parseThemeClassKey',
	    value: function parseThemeClassKey(isActive) {
	      var themeClassKey = 'input.autocomplete.option';
	      if (isActive) {
	        themeClassKey += ' input.autocomplete.option.active';
	      }

	      return themeClassKey;
	    }
	  }, {
	    key: 'disableEvent',
	    value: function disableEvent(event) {
	      event.stopPropagation();
	      event.preventDefault();
	    }
	  }, {
	    key: 'parseOptionId',
	    value: function parseOptionId() {
	      return 'autocomplete_option_' + this.props.id + '_' + this.props.value;
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(event) {
	      var option = {
	        name: this.props.name,
	        value: this.props.value,
	        showOnTop: false
	      };

	      this.props.onSelect(event, option);
	      event.stopPropagation();
	    }
	  }, {
	    key: 'handleMouseEnter',
	    value: function handleMouseEnter() {
	      this.props.onOptionMouseEnter(this.props.position);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        {
	          className: this.className(),
	          onClick: this.handleSelect,
	          onMouseEnter: this.handleMouseEnter
	        },
	        _react2.default.createElement(_components.InputCheckbox, {
	          id: this.parseOptionId(),
	          checked: this.props.selected,
	          onChange: this.disableEvent,
	          onClick: this.disableEvent,
	          key: _utils.uuid.v4()
	        }),
	        _react2.default.createElement(_components.Label, { id: this.parseOptionId(), name: this.props.name })
	      );
	    }
	  }]);

	  return InputAutocompleteOption;
	}(_react.Component), _class3.propTypes = {
	  id: _prop_types2.default.string,
	  name: _prop_types2.default.string,
	  value: _prop_types2.default.node,
	  selected: _prop_types2.default.bool,
	  position: _prop_types2.default.number,
	  isActive: _prop_types2.default.bool,
	  onSelect: _prop_types2.default.func,
	  onOptionMouseEnter: _prop_types2.default.func
	}, _class3.defaultProps = {
	  selected: false,
	  onSelect: function onSelect() {
	    return true;
	  },
	  onOptionMouseEnter: function onOptionMouseEnter() {
	    return true;
	  }
	}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'parseOptionId', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'parseOptionId'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSelect', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelect'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseEnter', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseEnter'), _class2.prototype)), _class2)) || _class);
	exports.default = InputAutocompleteOption;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputAutocompleteResult = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputAutocompleteResult, _Component);

	  function InputAutocompleteResult() {
	    _classCallCheck(this, InputAutocompleteResult);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputAutocompleteResult).apply(this, arguments));
	  }

	  _createClass(InputAutocompleteResult, [{
	    key: 'renderSearchInput',
	    value: function renderSearchInput() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-autocomplete__search' },
	        _react2.default.createElement(_components.Icon, { type: 'search', className: 'prefix' }),
	        _react2.default.createElement(_components.InputText, {
	          onKeyDown: this.props.onKeyDown,
	          value: this.props.searchValue,
	          onChange: this.props.onChange,
	          autoComplete: 'off'
	        })
	      );
	    }
	  }, {
	    key: 'renderClearButton',
	    value: function renderClearButton() {
	      return _react2.default.createElement(
	        'a',
	        {
	          href: '#!',
	          className: 'input-autocomplete__clear-button',
	          onClick: this.props.onClear
	        },
	        _i18n2.default.t('inputs.autocomplete.clear')
	      );
	    }
	  }, {
	    key: 'renderResult',
	    value: function renderResult() {
	      var options = this.props.options;


	      if (options.length > 0) {
	        return this.renderList();
	      }

	      return this.renderEmptyMessage();
	    }
	  }, {
	    key: 'renderList',
	    value: function renderList() {
	      return _react2.default.createElement(_components.InputAutocompleteList, {
	        id: this.props.id,
	        selectedOptions: this.props.selectedOptions,
	        options: this.props.options,
	        active: this.props.active,
	        onSelect: this.props.onSelect,
	        onOptionMouseEnter: this.props.onOptionMouseEnter,
	        ref: 'list'
	      });
	    }
	  }, {
	    key: 'renderEmptyMessage',
	    value: function renderEmptyMessage() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-autocomplete__empty-message' },
	        _i18n2.default.t('inputs.autocomplete.emptyResult')
	      );
	    }
	  }, {
	    key: 'renderActionButtons',
	    value: function renderActionButtons() {
	      var actionButtons = [];
	      var actionButtonsProps = this.props.actionButtons;

	      for (var i = 0; i < actionButtonsProps.length; i++) {
	        var actionButtonProps = actionButtonsProps[i];
	        actionButtons.push(this.renderActionButton(actionButtonProps, i));
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'input-autocomplete__action-buttons' },
	        actionButtons
	      );
	    }
	  }, {
	    key: 'renderActionButton',
	    value: function renderActionButton(actionButtonProps, i) {
	      var buttonComponent = actionButtonProps.component || 'Button';
	      var buttonProps = _extends({}, actionButtonProps, {
	        themeClassKey: 'input.autocomplete.actionButton',
	        element: 'a',
	        key: 'action_' + i
	      });

	      return _react2.default.createElement(eval(buttonComponent), buttonProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        this.renderSearchInput(),
	        this.renderClearButton(),
	        this.renderResult(),
	        this.renderActionButtons()
	      );
	    }
	  }]);

	  return InputAutocompleteResult;
	}(_react.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  options: _prop_types2.default.array,
	  selectedOptions: _prop_types2.default.array,
	  active: _prop_types2.default.number,
	  searchValue: _prop_types2.default.string,
	  actionButtons: _prop_types2.default.array,
	  onKeyDown: _prop_types2.default.func,
	  onChange: _prop_types2.default.func,
	  onSelect: _prop_types2.default.func,
	  onClear: _prop_types2.default.func,
	  onOptionMouseEnter: _prop_types2.default.func
	}, _class2.defaultProps = {
	  themeClassKey: 'input.autocomplete.result',
	  options: [],
	  selectedOptions: []
	}, _temp)) || _class);
	exports.default = InputAutocompleteResult;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _utils = __webpack_require__(8);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputAutocompleteSelect = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(InputAutocompleteSelect, _Component);

	  function InputAutocompleteSelect() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputAutocompleteSelect);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputAutocompleteSelect)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      options: []
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputAutocompleteSelect, [{
	    key: 'selectId',
	    value: function selectId() {
	      return 'autocomplete_select_' + this.props.id;
	    }
	  }, {
	    key: 'focusSelect',
	    value: function focusSelect() {
	      var selectInput = _reactDom2.default.findDOMNode(this.refs.select);
	      selectInput.focus();
	    }
	  }, {
	    key: 'renderSelectedOptions',
	    value: function renderSelectedOptions() {
	      var options = this.props.selectedOptions;

	      return _jquery2.default.map(options, function (option) {
	        return option.name;
	      }).join(', ');
	    }

	    // TODO: este e um componente do materialize. Tornar este componente generico.

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: this.className() },
	          _react2.default.createElement(
	            'span',
	            { className: 'caret', onClick: this.focusSelect },
	            '▼'
	          ),
	          _react2.default.createElement(_components.InputText, {
	            id: this.selectId(),
	            value: this.renderSelectedOptions(),
	            disabled: this.props.disabled,
	            placeholder: this.props.placeholder,
	            onFocus: this.props.onFocus,
	            errors: this.props.errors,
	            ref: 'select',
	            key: 'autocomplete_select_' + _utils.uuid.v4()
	          })
	        ),
	        _react2.default.createElement(_components.Label, _extends({}, this.propsWithoutCSS(), { id: this.selectId() }))
	      );
	    }
	  }]);

	  return InputAutocompleteSelect;
	}(_react.Component), _class2.propTypes = {
	  selectedOptions: _prop_types2.default.array
	}, _class2.defaultProps = {
	  selectedOptions: [],
	  themeClassKey: 'input.autocomplete.select',
	  placeholder: 'select'
	}, _temp2)) || _class);
	exports.default = InputAutocompleteSelect;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputAutocompleteValues = (_temp = _class = function (_Component) {
	  _inherits(InputAutocompleteValues, _Component);

	  function InputAutocompleteValues() {
	    _classCallCheck(this, InputAutocompleteValues);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputAutocompleteValues).apply(this, arguments));
	  }

	  _createClass(InputAutocompleteValues, [{
	    key: 'selectedOptionsValues',
	    value: function selectedOptionsValues() {
	      return _jquery2.default.map(this.props.selectedOptions, function (selectedOption) {
	        return selectedOption.value;
	      });
	    }
	  }, {
	    key: 'valueInputName',
	    value: function valueInputName() {
	      var inputName = this.props.name;

	      if (this.props.multiple) {
	        inputName += '[]';
	      }

	      return inputName;
	    }
	  }, {
	    key: 'renderValueInputs',
	    value: function renderValueInputs() {
	      var valueInputs = [];
	      var selectedOptions = this.props.selectedOptions;

	      for (var i = 0; i < selectedOptions.length; i++) {
	        var option = selectedOptions[i];
	        valueInputs.push(_react2.default.createElement('option', { value: option.value, key: option.name }));
	      }

	      return valueInputs;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'select',
	        {
	          multiple: true,
	          id: this.props.id,
	          name: this.valueInputName(),
	          value: this.selectedOptionsValues(),
	          readOnly: true,
	          style: { display: 'none' }
	        },
	        this.renderValueInputs()
	      );
	    }
	  }]);

	  return InputAutocompleteValues;
	}(_react.Component), _class.propTypes = {
	  id: _prop_types2.default.string,
	  name: _prop_types2.default.string,
	  multiple: _prop_types2.default.bool,
	  selectedOptions: _prop_types2.default.array
	}, _class.defaultProps = {
	  multiple: false,
	  selectedOptions: []
	}, _temp);
	exports.default = InputAutocompleteValues;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _autocomplete = __webpack_require__(69);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var InputAutocomplete = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin, _mixins.SelectComponentMixin, _mixins.InputSelectActionsListenerMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
	  _inherits(InputAutocomplete, _Component);

	  function InputAutocomplete() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputAutocomplete);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputAutocomplete)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      active: 0,
	      searchValue: '',
	      value: []
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputAutocomplete, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var valuesSelect = _reactDom2.default.findDOMNode(this.refs.select);
	      var $form = (0, _jquery2.default)(valuesSelect.form);
	      $form.on('reset', this.clearSelection);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var valuesSelect = _reactDom2.default.findDOMNode(this.refs.select);
	      var $form = (0, _jquery2.default)(valuesSelect.form);
	      $form.off('reset', this.clearSelection);
	    }
	  }, {
	    key: 'getResultComponent',
	    value: function getResultComponent() {
	      return this.refs.result;
	    }
	  }, {
	    key: 'hideResult',
	    value: function hideResult() {
	      (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
	      var $resultNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.getResultComponent()));
	      var $searchInput = $resultNode.find('input[type=text]');
	      $resultNode.hide();
	      $searchInput.val('');

	      this.state.loadParams[this.props.searchParam] = '';
	      this.setState({
	        active: 0
	      });
	    }
	  }, {
	    key: 'showResult',
	    value: function showResult(event) {
	      if (this.state.disabled || this.props.readOnly) {
	        var selectInput = event.currentTarget;
	        selectInput.blur();

	        return;
	      }

	      (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
	      var $resultNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.getResultComponent()));
	      var searchInput = $resultNode.find('input[type=text]')[0];

	      $resultNode.show();
	      searchInput.focus();
	    }
	  }, {
	    key: 'searchOptions',
	    value: function searchOptions(event) {
	      var $searchInput = (0, _jquery2.default)(event.currentTarget);
	      var searchValue = $searchInput.val();

	      this.state.searchValue = searchValue;
	      this.state.loadParams[this.props.searchParam] = searchValue;
	      this.loadOptions();

	      if (typeof this.props.onSearchValueChange === 'function') {
	        this.props.onSearchValueChange(searchValue);
	      }
	    }
	  }, {
	    key: 'moveActiveUp',
	    value: function moveActiveUp() {
	      this.setState({
	        active: Math.max(0, this.state.active - 1)
	      });
	    }
	  }, {
	    key: 'moveActiveDown',
	    value: function moveActiveDown() {
	      var $resultNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.getResultComponent()));
	      var resultListCount = $resultNode.find('li').length;

	      this.setState({
	        active: Math.min(resultListCount - 1, this.state.active + 1)
	      });
	    }
	  }, {
	    key: 'selectOption',
	    value: function selectOption() {
	      var resultRef = this.getResultComponent();
	      var resultListRef = resultRef.refs.list;
	      if (!resultListRef) {
	        return;
	      }

	      var activeOptionRef = resultListRef.refs['option_' + this.state.active];

	      this.handleSelect(null, {
	        name: activeOptionRef.props.name,
	        value: activeOptionRef.props.value,
	        showOnTop: false
	      });
	    }
	  }, {
	    key: 'clearSelection',
	    value: function clearSelection() {
	      this.setState({
	        value: []
	      }, this.triggerDependableChanged);

	      if (!!this.props.onSelect) {
	        this.props.onSelect(this.props.id, [], []);
	      }
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(event) {
	      var $resultNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.getResultComponent()));
	      var $containerNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.container));
	      var searchInput = $resultNode.find('input[type=text]')[0];

	      if ($containerNode.find(event.target).length === 0) {
	        this.hideResult();
	      } else {
	        searchInput.focus();
	      }
	    }
	  }, {
	    key: 'handleSearchNavigation',
	    value: function handleSearchNavigation(event) {
	      if (!!this.props.onKeyDown) {
	        this.props.onKeyDown(event);
	        return;
	      }
	      var keyCode = event.keyCode;

	      if (keyCode === 38) {
	        this.moveActiveUp();
	      } else if (keyCode === 40) {
	        this.moveActiveDown();
	      } else if (keyCode === 13) {
	        event.preventDefault();
	        this.selectOption();
	      } else if (keyCode === 27 || keyCode === 9) {
	        this.hideResult();
	      }
	    }
	  }, {
	    key: 'handleOptionMouseEnter',
	    value: function handleOptionMouseEnter(position) {
	      this.setState({
	        active: position
	      });
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(event, option) {
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

	      this.props.onChange(event, this.state.value, this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className(), ref: 'container' },
	        _react2.default.createElement(_autocomplete.InputAutocompleteSelect, _extends({}, this.propsWithoutCSS(), {
	          disabled: this.isDisabled(),
	          selectedOptions: this.selectedOptions(),
	          onFocus: this.showResult
	        })),
	        _react2.default.createElement(_autocomplete.InputAutocompleteResult, {
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
	        _react2.default.createElement(_autocomplete.InputAutocompleteValues, {
	          id: this.props.id,
	          name: this.props.name,
	          multiple: this.props.multiple,
	          selectedOptions: this.selectedOptions(),
	          ref: 'select'
	        })
	      );
	    }
	  }]);

	  return InputAutocomplete;
	}(_react.Component), _class3.propTypes = {
	  maxOptions: _prop_types2.default.number,
	  maxOptionsParam: _prop_types2.default.string,
	  searchParam: _prop_types2.default.string,
	  actionButtons: _prop_types2.default.array,
	  onSearchValueChange: _prop_types2.default.func
	}, _class3.defaultProps = {
	  maxOptions: 99,
	  maxOptionsParam: 'limit',
	  searchParam: 'query',
	  themeClassKey: 'input.autocomplete',
	  actionButtons: []
	}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleDocumentClick', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleDocumentClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSearchNavigation', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSearchNavigation'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleOptionMouseEnter', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleOptionMouseEnter'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSelect', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelect'), _class2.prototype)), _class2)) || _class);
	exports.default = InputAutocomplete;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputCheckbox = exports.InputCheckboxGroup = undefined;

	var _input_checkbox_group = __webpack_require__(77);

	var _input_checkbox_group2 = _interopRequireDefault(_input_checkbox_group);

	var _input_checkbox = __webpack_require__(78);

	var _input_checkbox2 = _interopRequireDefault(_input_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.InputCheckboxGroup = _input_checkbox_group2.default;
	exports.InputCheckbox = _input_checkbox2.default;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputCheckboxGroup = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin, _mixins.SelectComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputCheckboxGroup, _Component);

	  function InputCheckboxGroup(props) {
	    _classCallCheck(this, InputCheckboxGroup);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputCheckboxGroup).call(this, props));

	    _this.state = {
	      currentValues: _this.props.currentValues
	    };
	    return _this;
	  }

	  _createClass(InputCheckboxGroup, [{
	    key: 'renderChildItems',
	    value: function renderChildItems() {
	      var items = _react2.default.Children.map(this.props.children, function (item) {
	        if (item !== null && item.props.children[0].type.displayName == "input") return item;
	      });
	      return items;
	    }
	  }, {
	    key: 'renderPropItems',
	    value: function renderPropItems() {
	      var selectOptions = [];
	      var options = this.state.options;

	      for (var i = 0; i < options.length; i++) {
	        var optionProps = options[i];

	        var filledClass = optionProps.filled ? 'filled-in' : '';
	        optionProps.id = this.props.id + '_' + i;

	        selectOptions.push(_react2.default.createElement(
	          'p',
	          { key: 'p_input' + i },
	          _react2.default.createElement(_components.InputCheckbox, _extends({}, optionProps, { name: this.props.name, className: filledClass, checked: this.isChecked(optionProps) })),
	          _react2.default.createElement(_components.Label, optionProps)
	        ));
	      }
	      return selectOptions;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-checkbox-group align-' + this.props.align },
	        this.renderChildItems(),
	        this.renderPropItems()
	      );
	    }
	  }, {
	    key: 'isChecked',
	    value: function isChecked(item) {
	      var currentValues = this.state.currentValues;
	      if (!$.isArray(currentValues)) currentValues = [currentValues];
	      return $.inArray(item.value, currentValues) !== -1;
	    }
	  }]);

	  return InputCheckboxGroup;
	}(_react.Component), _class2.propTypes = {
	  align: _react2.default.PropTypes.oneOf(['vertical', 'horizontal']),
	  currentValues: _react2.default.PropTypes.string
	}, _class2.defaultProps = {
	  themeClassKey: 'input.checkbox',
	  name: '',
	  align: 'vertical'
	}, _temp)) || _class);
	exports.default = InputCheckboxGroup;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputCheckbox = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin, _mixins.CheckboxComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputCheckbox, _Component);

	  function InputCheckbox() {
	    _classCallCheck(this, InputCheckbox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputCheckbox).apply(this, arguments));
	  }

	  _createClass(InputCheckbox, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', _extends({}, this.props, {
	        checked: this.state.checked,
	        className: this.inputClassName(),
	        onChange: this._handleCheckboxChange,
	        type: 'checkbox',
	        ref: 'input'
	      }));
	    }
	  }]);

	  return InputCheckbox;
	}(_react.Component), _class2.propTypes = {}, _class2.defaultProps = {
	  themeClassKey: 'input.checkbox'
	}, _temp)) || _class);
	exports.default = InputCheckbox;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputDateFilter = exports.InputDateFilterSelect = exports.InputDateFilterBody = undefined;

	var _input_datefilter_body = __webpack_require__(80);

	var _input_datefilter_body2 = _interopRequireDefault(_input_datefilter_body);

	var _input_datefilter_select = __webpack_require__(81);

	var _input_datefilter_select2 = _interopRequireDefault(_input_datefilter_select);

	var _input_datefilter = __webpack_require__(82);

	var _input_datefilter2 = _interopRequireDefault(_input_datefilter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.InputDateFilterBody = _input_datefilter_body2.default;
	exports.InputDateFilterSelect = _input_datefilter_select2.default;
	exports.InputDateFilter = _input_datefilter2.default;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var InputDatefilterBody = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
	  _inherits(InputDatefilterBody, _Component);

	  function InputDatefilterBody() {
	    _classCallCheck(this, InputDatefilterBody);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputDatefilterBody).apply(this, arguments));
	  }

	  _createClass(InputDatefilterBody, [{
	    key: 'getFilterInputId',
	    value: function getFilterInputId(filterType) {
	      var inputId = this.props.id;
	      if (!!inputId) {
	        return inputId + '_' + filterType;
	      }

	      return null;
	    }
	  }, {
	    key: 'getFilterInputName',
	    value: function getFilterInputName(filterType) {
	      var inputName = this.props.name;
	      if (!!inputName) {
	        return inputName + '_' + filterType;
	      }

	      return null;
	    }
	  }, {
	    key: 'getFilterInputLabel',
	    value: function getFilterInputLabel(filterType) {
	      return _i18n2.default.t('inputs.datefilter.' + filterType);
	    }
	  }, {
	    key: 'selectDate',
	    value: function selectDate() {
	      var $fromInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.fromInput)).find('input');
	      var $toInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.toInput)).find('input');
	      var selectedDates = _jquery2.default.grep([$fromInput.val(), $toInput.val()], function (date) {
	        return !!date;
	      });

	      this.props.onSelectDate(selectedDates);
	    }
	  }, {
	    key: 'filterInputProps',
	    value: function filterInputProps(filterType) {
	      var inputProps = {
	        formStyle: 'oneLine',
	        resource: this.props.resource,
	        id: this.getFilterInputId(filterType),
	        name: this.getFilterInputName(filterType),
	        label: this.getFilterInputLabel(filterType)
	      };

	      _jquery2.default.extend(inputProps, this.props[filterType + 'FilterInput']);
	      return inputProps;
	    }
	  }, {
	    key: 'fromInputProps',
	    value: function fromInputProps() {
	      return this.filterInputProps('from');
	    }
	  }, {
	    key: 'toInputProps',
	    value: function toInputProps() {
	      return this.filterInputProps('to');
	    }
	  }, {
	    key: 'handleFilterBodyClick',
	    value: function handleFilterBodyClick(event) {
	      var filterBody = _reactDom2.default.findDOMNode(this.refs.filterBody);
	      var fromInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.fromInput)).find('input')[0];

	      if (event.target === filterBody) {
	        fromInput.focus();
	      }
	    }
	  }, {
	    key: 'handleInputKeypress',
	    value: function handleInputKeypress(event) {
	      var keyCode = event.keyCode;

	      if (keyCode === 13 || keyCode === 9) {
	        this.handleInputTabKeypress(event);
	      } else if (keyCode === 27) {
	        event.preventDefault();
	        this.selectDate();
	      }
	    }
	  }, {
	    key: 'handleInputTabKeypress',
	    value: function handleInputTabKeypress(event) {
	      event.preventDefault();
	      var fromInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.fromInput)).find('input')[0];
	      var toInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.toInput)).find('input')[0];

	      if (event.target === fromInput) {
	        toInput.focus();
	      } else {
	        this.selectDate();
	      }
	    }
	  }, {
	    key: 'renderUpdateButton',
	    value: function renderUpdateButton() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-datefilter__button' },
	        _react2.default.createElement(_components.Button, _extends({}, this.props.okButton, {
	          element: 'a',
	          onClick: this.selectDate
	        }))
	      );
	    }
	  }, {
	    key: 'renderFromInput',
	    value: function renderFromInput() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-datefilter__filter' },
	        _react2.default.createElement(_components.Input, _extends({}, this.fromInputProps(), {
	          onKeyDown: this.handleInputKeypress,
	          component: 'datepicker',
	          ref: 'fromInput'
	        }))
	      );
	    }
	  }, {
	    key: 'renderToInput',
	    value: function renderToInput() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-datefilter__filter' },
	        _react2.default.createElement(_components.Input, _extends({}, this.toInputProps(), {
	          onKeyDown: this.handleInputKeypress,
	          component: 'datepicker',
	          ref: 'toInput'
	        }))
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className(), onClick: this.handleFilterBodyClick, ref: 'filterBody' },
	        this.renderFromInput(),
	        this.renderToInput(),
	        this.renderUpdateButton()
	      );
	    }
	  }]);

	  return InputDatefilterBody;
	}(_react.Component), _class3.propTypes = {
	  id: _prop_types2.default.string,
	  name: _prop_types2.default.string,
	  fromFilterInput: _prop_types2.default.object,
	  toFilterInput: _prop_types2.default.object,
	  okButton: _prop_types2.default.object
	}, _class3.defaultProps = {
	  themeClassKey: 'input.datefilter.body',
	  id: null,
	  name: null,
	  resource: null,
	  fromFilterInput: {},
	  toFilterInput: {},
	  okButton: {
	    name: 'ok'
	  }
	}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleFilterBodyClick', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleFilterBodyClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleInputKeypress', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleInputKeypress'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleInputTabKeypress', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleInputTabKeypress'), _class2.prototype)), _class2)) || _class);
	exports.default = InputDatefilterBody;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _utils = __webpack_require__(8);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputDatefilterSelect = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputDatefilterSelect, _Component);

	  function InputDatefilterSelect() {
	    _classCallCheck(this, InputDatefilterSelect);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputDatefilterSelect).apply(this, arguments));
	  }

	  _createClass(InputDatefilterSelect, [{
	    key: 'focusSelect',
	    value: function focusSelect() {
	      var selectInput = _reactDom2.default.findDOMNode(this.refs.select);
	      selectInput.focus();
	    }
	  }, {
	    key: 'selectId',
	    value: function selectId() {
	      return 'datefilter_select_' + this.props.id;
	    }
	  }, {
	    key: 'renderSelectedDates',
	    value: function renderSelectedDates() {
	      var dates = this.props.selectedDates;
	      return dates.join(' - ');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: this.className() },
	          _react2.default.createElement(
	            'span',
	            { className: 'caret', onClick: this.focusSelect },
	            '▼'
	          ),
	          _react2.default.createElement(_components.InputText, {
	            id: this.selectId(),
	            value: this.renderSelectedDates(),
	            disabled: this.props.disabled,
	            placeholder: this.props.placeholder,
	            onFocus: this.props.onFocus,
	            errors: this.props.errors,
	            ref: 'select',
	            key: 'datefilter_select_' + _utils.uuid.v4()
	          })
	        ),
	        _react2.default.createElement(_components.Label, _extends({}, this.propsWithoutCSS(), { id: this.selectId() }))
	      );
	    }
	  }]);

	  return InputDatefilterSelect;
	}(_react.Component), _class2.propTypes = {
	  selectedDates: _prop_types2.default.array,
	  onBlur: _prop_types2.default.func
	}, _class2.defaultProps = {
	  selectedDates: [],
	  themeClassKey: 'input.datefilter.select',
	  placeholder: 'select'
	}, _temp)) || _class);
	exports.default = InputDatefilterSelect;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var InputDatefilter = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
	  _inherits(InputDatefilter, _Component);

	  function InputDatefilter() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputDatefilter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputDatefilter)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      selectedDates: []
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputDatefilter, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var $containerNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.container));
	      var $form = (0, _jquery2.default)($containerNode.find('input')[0].form);
	      $form.on('reset', this.clearSelection);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var $containerNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.container));
	      var $form = (0, _jquery2.default)($containerNode.find('input')[0].form);
	      $form.off('reset', this.clearSelection);
	    }
	  }, {
	    key: 'clearSelection',
	    value: function clearSelection() {
	      this.setState({
	        selectedDates: []
	      });
	    }
	  }, {
	    key: 'showFilterBody',
	    value: function showFilterBody() {
	      if (this.props.disabled) {
	        return;
	      }

	      (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
	      var $bodyNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.body));
	      var firstFilterInput = $bodyNode.find('input[type=text]')[0];

	      $bodyNode.show();
	      firstFilterInput.focus();
	    }
	  }, {
	    key: 'hideFilterBody',
	    value: function hideFilterBody() {
	      (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
	      var $bodyNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.body));
	      $bodyNode.hide();
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(event) {
	      var $containerNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.container));
	      if ($containerNode.find(event.target).length === 0) {
	        this.hideFilterBody();
	      }
	    }
	  }, {
	    key: 'handleSelectDate',
	    value: function handleSelectDate(selectedDates) {
	      this.setState({
	        selectedDates: selectedDates
	      });

	      this.hideFilterBody();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className(), ref: 'container' },
	        _react2.default.createElement(_components.InputDatefilterSelect, _extends({}, this.propsWithoutCSS(), {
	          selectedDates: this.state.selectedDates,
	          onFocus: this.showFilterBody
	        })),
	        _react2.default.createElement(_components.InputDatefilterBody, _extends({}, this.propsWithoutCSS(), {
	          id: this.props.originalId,
	          name: this.props.originalName,
	          onSelectDate: this.handleSelectDate,
	          ref: 'body'
	        }))
	      );
	    }
	  }]);

	  return InputDatefilter;
	}(_react.Component), _class3.propTypes = {
	  originalId: _prop_types2.default.string,
	  originalName: _prop_types2.default.string,
	  resource: _prop_types2.default.string,
	  fromFilterInput: _prop_types2.default.object,
	  toFilterInput: _prop_types2.default.object,
	  okButton: _prop_types2.default.object
	}, _class3.defaultProps = {
	  themeClassKey: 'input.datefilter'
	}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleDocumentClick', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleDocumentClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSelectDate', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelectDate'), _class2.prototype)), _class2)) || _class);
	exports.default = InputDatefilter;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputGridForm = exports.InputGridFormFields = undefined;

	var _input_grid_form_fields = __webpack_require__(84);

	var _input_grid_form_fields2 = _interopRequireDefault(_input_grid_form_fields);

	var _input_grid_form = __webpack_require__(85);

	var _input_grid_form2 = _interopRequireDefault(_input_grid_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.InputGridFormFields = _input_grid_form_fields2.default;
	exports.InputGridForm = _input_grid_form2.default;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputGridFormFields = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(InputGridFormFields, _Component);

	  function InputGridFormFields() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputGridFormFields);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputGridFormFields)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      errors: _this.props.errors
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputGridFormFields, [{
	    key: 'submitFormFields',
	    value: function submitFormFields(event) {
	      var inputGroupRef = this.refs.inputGroup;
	      var fieldsData = inputGroupRef.serialize();

	      this.props.onSubmit(event, fieldsData);
	      this.clearErrors();
	    }
	  }, {
	    key: 'clearErrors',
	    value: function clearErrors() {
	      //TODO implementar uma forma de limpar os errors do form nos campos do gridform.
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      console.log('reset!');
	    }
	  }, {
	    key: 'renderInputs',
	    value: function renderInputs() {
	      if (!this.props.inputs || _jquery2.default.isEmptyObject(this.props.inputs)) {
	        return [];
	      }

	      return _react2.default.createElement(_components.InputGroup, _extends({}, this.propsWithoutCSS(), {
	        errors: this.state.errors,
	        formStyle: this.props.style,
	        ref: 'inputGroup'
	      }));
	    }
	  }, {
	    key: 'renderButtons',
	    value: function renderButtons() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.themedClassName('form.buttonGroup') },
	        this.renderOtherButtons(),
	        this.renderSubmitButton()
	      );
	    }
	  }, {
	    key: 'renderOtherButtons',
	    value: function renderOtherButtons() {
	      var otherButtonsProps = this.props.otherButtons;
	      var otherButtons = [];

	      for (var i = 0; i < otherButtonsProps.length; i++) {
	        var otherButtonProps = otherButtonsProps[i];
	        otherButtons.push(_react2.default.createElement(_components.Button, _extends({}, otherButtonProps, {
	          element: 'a',
	          key: otherButtonProps.name
	        })));
	      }

	      return otherButtons;
	    }
	  }, {
	    key: 'renderSubmitButton',
	    value: function renderSubmitButton() {
	      if (!this.props.submitButton) {
	        return [];
	      }

	      return _react2.default.createElement(_components.Button, _extends({}, this.props.submitButton, {
	        element: 'a',
	        onClick: this.submitFormFields
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: this.props.id, className: this.className(), ref: 'form' },
	        this.renderInputs(),
	        this.renderButtons()
	      );
	    }
	  }]);

	  return InputGridFormFields;
	}(_react.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  inputs: _prop_types2.default.object,
	  data: _prop_types2.default.object,
	  style: _prop_types2.default.string,
	  resource: _prop_types2.default.string,
	  disabled: _prop_types2.default.bool,
	  readOnly: _prop_types2.default.bool,
	  submitButton: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.bool]),
	  otherButtons: _prop_types2.default.array,
	  onSubmit: _prop_types2.default.func,
	  onReset: _prop_types2.default.func
	}, _class2.defaultProps = {
	  themeClassKey: 'form',
	  id: null,
	  inputs: {},
	  data: {},
	  style: 'default',
	  resource: null,
	  disabled: false,
	  readOnly: false,
	  submitButton: {
	    name: 'actions.send',
	    icon: 'send'
	  },
	  otherButtons: [],
	  onSubmit: function onSubmit() {},
	  onReset: function onReset() {}
	}, _temp2)) || _class);
	exports.default = InputGridFormFields;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _merge = __webpack_require__(58);

	var _merge2 = _interopRequireDefault(_merge);

	var _mapValues = __webpack_require__(86);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputGridForm = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputGridForm, _Component);

	  function InputGridForm() {
	    _classCallCheck(this, InputGridForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputGridForm).apply(this, arguments));
	  }

	  _createClass(InputGridForm, [{
	    key: 'getDefaultFormProps',
	    value: function getDefaultFormProps() {
	      return {
	        formStyle: 'filter',
	        inputWrapperComponent: this.props.inputWrapperComponent
	      };
	    }
	  }, {
	    key: 'getColumnName',
	    value: function getColumnName(column, columnKey) {
	      var columnName = column.name || columnKey;
	      if (this.columnHaveDisplayValueKey(columnName)) {
	        columnName += 'Display';
	      }

	      return columnName;
	    }
	  }, {
	    key: 'getSerializedValue',
	    value: function getSerializedValue() {
	      return JSON.stringify(this.state.value);
	    }
	  }, {
	    key: 'parseFormProp',
	    value: function parseFormProp() {
	      var formProp = (0, _merge2.default)(this.getDefaultFormProps(), this.props.form);
	      var fieldsProp = (0, _merge2.default)({}, this.props.fields);
	      formProp.inputs = (0, _mapValues2.default)(fieldsProp, function (field) {
	        delete field.format;
	        return field;
	      });

	      return formProp;
	    }
	  }, {
	    key: 'parseColumnsProp',
	    value: function parseColumnsProp() {
	      var _this2 = this;

	      var columnsProp = (0, _merge2.default)({}, this.props.fields);
	      columnsProp = (0, _mapValues2.default)(columnsProp, function (column, columnKey) {
	        delete column.component;
	        delete column.className;
	        delete column.value;
	        column.name = _this2.getColumnName(column, columnKey);
	        return column;
	      });

	      return columnsProp;
	    }
	  }, {
	    key: 'columnHaveDisplayValueKey',
	    value: function columnHaveDisplayValueKey(columnName) {
	      var value = this.state.value;
	      var firstValueRow = value == null ? null : value[0];
	      if (firstValueRow == null) {
	        return false;
	      }

	      var valueKeys = Object.keys(firstValueRow);
	      return valueKeys.indexOf(columnName + 'Display') >= 0;
	    }

	    /* GridForm Result serializer */

	  }, {
	    key: 'serializeGridForm',
	    value: function serializeGridForm() {
	      var gridFormRef = this.refs.gridForm;
	      this.setState({
	        value: gridFormRef.serialize()
	      });
	    }
	  }, {
	    key: '_getValue',
	    value: function _getValue() {
	      return JSON.stringify(this.state.value);
	    }

	    /* Event handling functions */

	  }, {
	    key: 'handleOnSuccess',
	    value: function handleOnSuccess() {
	      var gridFormValue = this.refs.gridForm.serialize();

	      this.props.onSuccess(gridFormValue);
	      this.serializeGridForm();
	    }
	  }, {
	    key: 'handleOnDestroySuccess',
	    value: function handleOnDestroySuccess() {
	      var gridFormValue = this.refs.gridForm.serialize();

	      this.props.onDestroySuccess(gridFormValue);
	      this.serializeGridForm();
	    }

	    /* Renderers */

	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      var label = this.props.label;
	      if (typeof label === 'boolean' && !label) {
	        return [];
	      }

	      return _react2.default.createElement(
	        'h3',
	        { className: this.themedClassName('input.gridForm.label') },
	        label
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        this.renderLabel(),
	        _react2.default.createElement(_components.GridForm, _extends({}, this.propsWithoutCSS(), {
	          formComponent: _components.InputGridFormFields,
	          form: this.parseFormProp(),
	          columns: this.parseColumnsProp(),
	          onSuccess: this.handleOnSuccess,
	          onDestroySuccess: this.handleOnDestroySuccess,
	          errors: this.props.errors,
	          ref: 'gridForm'
	        })),
	        _react2.default.createElement(_components.InputHidden, _extends({}, this.propsWithoutCSS(), {
	          value: this.getSerializedValue(),
	          ref: 'input'
	        }))
	      );
	    }
	  }]);

	  return InputGridForm;
	}(_react.Component), _class2.propTypes = {
	  label: _prop_types2.default.oneOfType([_prop_types2.default.string, _prop_types2.default.bool]),
	  fields: _prop_types2.default.object,
	  form: _prop_types2.default.object,
	  clientSide: _prop_types2.default.bool,
	  inputWrapperComponent: _prop_types2.default.oneOfType([_prop_types2.default.func, _prop_types2.default.element, _prop_types2.default.string]),
	  onSuccess: _prop_types2.default.func,
	  onDestroySuccess: _prop_types2.default.func
	}, _class2.defaultProps = {
	  themeClassKey: 'input.gridForm',
	  className: '',
	  fields: {},
	  form: {},
	  clientSide: true,
	  inputWrapperComponent: null,
	  onSuccess: function onSuccess() {},
	  onDestroySuccess: function onDestroySuccess() {}
	}, _temp)) || _class);
	exports.default = InputGridForm;

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("lodash/mapValues");

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputRadioGroup = undefined;

	var _input_radio_group = __webpack_require__(88);

	var _input_radio_group2 = _interopRequireDefault(_input_radio_group);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.InputRadioGroup = _input_radio_group2.default;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputRadioGroup = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin, _mixins.SelectComponentMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(InputRadioGroup, _Component);

	  function InputRadioGroup() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputRadioGroup);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputRadioGroup)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      currentValue: _this.props.currentValue
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputRadioGroup, [{
	    key: 'renderOptions',
	    value: function renderOptions() {
	      var selectOptions = [];
	      var options = this.state.options;

	      for (var i = 0; i < options.length; i++) {
	        var optionProps = options[i];
	        optionProps.id = this.props.name + '_' + i;
	        optionProps.type = 'radio';

	        if (this.state.currentValue === optionProps.value) {
	          optionProps.defaultChecked = optionProps.value;
	        }

	        if (this.props.withGap) {
	          optionProps.className = 'with-gap';
	        }

	        selectOptions.push(_react2.default.createElement(
	          'p',
	          { key: 'p_input_' + i, id: 'input_' + optionProps.value },
	          _react2.default.createElement('input', _extends({}, optionProps, {
	            name: this.props.name,
	            onChange: this._handleChange
	          })),
	          _react2.default.createElement(_components.Label, { id: optionProps.id, label: optionProps.name })
	        ));
	      }
	      return selectOptions;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'input-checkbox-group align-' + this.props.align,
	          ref: 'radioGroup'
	        },
	        this.renderOptions()
	      );
	    }
	  }]);

	  return InputRadioGroup;
	}(_react.Component), _class2.propTypes = {
	  align: _prop_types2.default.oneOf(['vertical', 'horizontal']),
	  currentValue: _prop_types2.default.string,
	  withGap: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  name: '',
	  align: 'vertical',
	  currentValue: null,
	  withGap: false
	}, _temp2)) || _class);
	exports.default = InputRadioGroup;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputSelect = exports.InputSelectOption = undefined;

	var _input_select_option = __webpack_require__(90);

	var _input_select_option2 = _interopRequireDefault(_input_select_option);

	var _input_select = __webpack_require__(91);

	var _input_select2 = _interopRequireDefault(_input_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.InputSelectOption = _input_select_option2.default;
	exports.InputSelect = _input_select2.default;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputSelectOption = (_temp = _class = function (_Component) {
	  _inherits(InputSelectOption, _Component);

	  function InputSelectOption() {
	    _classCallCheck(this, InputSelectOption);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputSelectOption).apply(this, arguments));
	  }

	  _createClass(InputSelectOption, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'option',
	        { value: this.props.value },
	        this.props.name
	      );
	    }
	  }]);

	  return InputSelectOption;
	}(_react.Component), _class.propTypes = {
	  name: _prop_types2.default.string,
	  value: _prop_types2.default.node
	}, _temp);
	exports.default = InputSelectOption;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var InputSelect = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin, _mixins.SelectComponentMixin, _mixins.InputSelectActionsListenerMixin, _mixins.MaterializeSelectMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
	  _inherits(InputSelect, _Component);

	  function InputSelect() {
	    _classCallCheck(this, InputSelect);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputSelect).apply(this, arguments));
	  }

	  _createClass(InputSelect, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var valuesSelect = _reactDom2.default.findDOMNode(this.refs.select);
	      var $form = (0, _jquery2.default)(valuesSelect.form);
	      $form.on('reset', this.clearSelection);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var valuesSelect = _reactDom2.default.findDOMNode(this.refs.select);
	      var $form = (0, _jquery2.default)(valuesSelect.form);
	      $form.off('reset', this.clearSelection);
	    }
	  }, {
	    key: 'clearSelection',
	    value: function clearSelection() {
	      this.setState({
	        value: []
	      }, this.triggerDependableChanged);
	    }
	  }, {
	    key: 'selectedValue',
	    value: function selectedValue() {
	      var value = this.state.value;
	      if (!this.props.multiple) {
	        value = value[0];
	      }

	      return value;
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var selectElement = _reactDom2.default.findDOMNode(this.refs.select);
	      var newValue = this.ensureIsArray(selectElement.value);
	      this.props.onChange(event, newValue, this);

	      if (!event.isDefaultPrevented()) {
	        this.setState({
	          value: newValue
	        }, this.triggerDependableChanged);
	      }
	    }
	  }, {
	    key: 'renderOptions',
	    value: function renderOptions() {
	      var selectOptions = [];
	      var options = this.state.options;

	      if (this.props.includeBlank) {
	        selectOptions.push(_react2.default.createElement(_components.InputSelectOption, {
	          name: _i18n2.default.t(this.props.blankText),
	          value: '',
	          key: 'empty_option'
	        }));
	      }

	      for (var i = 0; i < options.length; i++) {
	        var optionProps = options[i];
	        selectOptions.push(_react2.default.createElement(_components.InputSelectOption, _extends({}, optionProps, { key: optionProps.name })));
	      }

	      return selectOptions;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'select',
	        {
	          id: this.props.id,
	          name: this.props.name,
	          value: this.selectedValue(),
	          onChange: this.handleChange,
	          disabled: this.isDisabled() || this.props.readOnly,
	          className: this.className(),
	          ref: 'select'
	        },
	        this.renderOptions()
	      );
	    }
	  }]);

	  return InputSelect;
	}(_react.Component), _class3.propTypes = {
	  includeBlank: _prop_types2.default.bool,
	  blankText: _prop_types2.default.localizedString
	}, _class3.defaultProps = {
	  includeBlank: true,
	  themeClassKey: 'input.select',
	  blankText: 'select'
	}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class);
	exports.default = InputSelect;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _capitalize = __webpack_require__(28);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	var _input = __webpack_require__(68);

	var InputComponents = _interopRequireWildcard(_input);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input(props) {
	    _classCallCheck(this, Input);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

	    _this.state = {
	      value: _this.props.value
	    };
	    return _this;
	  }

	  _createClass(Input, [{
	    key: 'renderInput',
	    value: function renderInput() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.inputClassName(), id: this.getInputContainerId() },
	        this.renderComponentInput(),
	        this.renderLabel(),
	        this.renderInputErrors()
	      );
	    }
	  }, {
	    key: 'renderInputWithoutLabel',
	    value: function renderInputWithoutLabel() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.inputClassName(), id: this.getInputContainerId() },
	        this.renderComponentInput(),
	        this.renderInputErrors()
	      );
	    }
	  }, {
	    key: 'renderAutocompleteInput',
	    value: function renderAutocompleteInput() {
	      return this.renderInputWithoutLabel();
	    }
	  }, {
	    key: 'renderDatefilterInput',
	    value: function renderDatefilterInput() {
	      return this.renderInputWithoutLabel();
	    }
	  }, {
	    key: 'renderDatepickerInput',
	    value: function renderDatepickerInput() {
	      return this.renderInputWithoutLabel();
	    }
	  }, {
	    key: 'renderNumberInput',
	    value: function renderNumberInput() {
	      return this.renderInputWithoutLabel();
	    }
	  }, {
	    key: 'renderSwitchInput',
	    value: function renderSwitchInput() {
	      return this.renderInputWithoutLabel();
	    }
	  }, {
	    key: 'renderFileInput',
	    value: function renderFileInput() {
	      return this.renderInputWithoutLabel();
	    }
	  }, {
	    key: 'renderColorpickerInput',
	    value: function renderColorpickerInput() {
	      return this.renderInputWithoutLabel();
	    }
	  }, {
	    key: 'renderGridformInput',
	    value: function renderGridformInput() {
	      return this.renderInputWithoutLabel();
	    }
	  }, {
	    key: 'renderHiddenInput',
	    value: function renderHiddenInput() {
	      return this.renderComponentInput();
	    }
	  }, {
	    key: 'renderComponentInput',
	    value: function renderComponentInput() {
	      var componentInputClass = this.getInputComponentClass(this.props.component);
	      var isGrid = componentInputClass === InputGridForm;

	      var componentInputProps = _react2.default.__spread(this.propsWithoutCSS(), {
	        originalId: this.props.id,
	        originalName: this.props.name,
	        id: this.getInputComponentId(),
	        name: this.getInputComponentName(),
	        errors: isGrid ? this.props.errors : this.getInputErrors(),
	        value: this.getInputComponentValue(),
	        maxLength: this.getMaxLength(),
	        ref: "inputComponent"
	      });

	      return _react2.default.createElement(componentInputClass, componentInputProps);
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      var inputValue = this.getInputComponentValue();
	      var isActive = this.labelIsActive(inputValue);

	      return _react2.default.createElement(_components.Label, _extends({}, this.propsWithoutCSS(), { id: this.getInputComponentId(), active: isActive }));
	    }
	  }, {
	    key: 'labelIsActive',
	    value: function labelIsActive(inputValue) {
	      if (this.props.component === 'checkbox') return false;

	      return inputValue !== null && inputValue !== undefined && String(inputValue).length > 0;
	    }
	  }, {
	    key: 'renderInputErrors',
	    value: function renderInputErrors() {
	      return _react2.default.createElement(InputComponents.InputError, { errors: this.getInputErrors() });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var renderFunction = 'render' + (0, _capitalize2.default)(this.props.component) + 'Input';
	      var renderLabel = this.props.renderLabel;

	      if (this.hasOwnProperty(renderFunction)) {
	        return this[renderFunction]();
	      } else if (!renderLabel) {
	        return this.renderInputWithoutLabel();
	      } else {
	        return this.renderInput();
	      }
	    }
	  }, {
	    key: 'inputClassName',
	    value: function inputClassName() {
	      var className = this.className();
	      if (!this.props.className) {
	        className += ' ' + Realize.themes.getCssClass('input.grid.' + this.props.formStyle);
	      }

	      return className;
	    }
	  }, {
	    key: 'getInputContainerId',
	    value: function getInputContainerId() {
	      return "input__" + this.props.id;
	    }
	  }, {
	    key: 'getInputComponentClass',
	    value: function getInputComponentClass(component) {
	      var mapping = {
	        text: InputComponents.InputText,
	        autocomplete: InputComponents.InputAutocomplete,
	        checkbox: InputComponents.InputCheckbox,
	        colorpicker: InputComponents.InputColorpicker,
	        datefilter: InputComponents.InputDatefilter,
	        datepicker: InputComponents.InputDatepicker,
	        number: InputComponents.InputNumber,
	        file: InputComponents.InputFile,
	        gridform: InputComponents.InputGridForm,
	        hidden: InputComponents.InputHidden,
	        password: InputComponents.InputPassword,
	        select: InputComponents.InputSelect,
	        switch: InputComponents.InputSwitch,
	        textarea: InputComponents.InputTextarea,
	        checkbox_group: InputComponents.InputCheckboxGroup,
	        radio_group: InputComponents.InputRadioGroup,
	        masked: InputComponents.InputMasked
	      };

	      return mapping[component] || window[component] || component;
	    }
	  }, {
	    key: 'getInputComponentId',
	    value: function getInputComponentId() {
	      var inputId = this.props.id;
	      if (this.props.resource !== null && this.props.scope === "resource") {
	        inputId = this.props.resource + '_' + inputId;
	      }

	      return inputId;
	    }
	  }, {
	    key: 'getInputComponentName',
	    value: function getInputComponentName() {
	      var inputName = this.props.name || this.props.id;
	      if (this.props.resource !== null && this.props.scope === "resource") {
	        inputName = this.props.resource + '[' + inputName + ']';
	      }

	      return inputName;
	    }
	  }, {
	    key: 'getInputComponentValue',
	    value: function getInputComponentValue() {
	      if (!!this.props.value) {
	        return this.props.value;
	      }

	      var data = this.props.data || {};
	      var dataValue = data[this.props.id];

	      if (typeof dataValue === 'boolean') {
	        dataValue = dataValue ? 1 : 0;
	      }

	      return dataValue;
	    }
	  }, {
	    key: 'getMaxLength',
	    value: function getMaxLength() {
	      var acceptComponents = ['text', 'masked', 'number', 'textarea'];

	      if (!!this.props.maxLength && acceptComponents.indexOf(this.props.component) != -1) {
	        return this.props.maxLength;
	      }
	    }
	  }, {
	    key: 'getInputErrors',
	    value: function getInputErrors() {
	      if (this.props.errors[this.props.resource] && this.props.errors[this.props.resource][this.props.id]) return this.props.errors[this.props.resource][this.props.id];
	      return this.props.errors[this.props.id];
	    }

	    /* Serializer functions */

	  }, {
	    key: 'getName',
	    value: function getName() {
	      return this.getInputComponentName();
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      var inputComponentRef = this.refs.inputComponent;
	      if (typeof inputComponentRef.getValue == "function") {
	        return inputComponentRef.getValue();
	      } else {
	        return this.getInputComponentValue();
	      }
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      var inputComponentRef = this.refs.inputComponent;
	      if (typeof inputComponentRef.serialize == "function") {
	        return inputComponentRef.serialize();
	      }

	      var serializedInput = {};
	      serializedInput[this.getName()] = this.getValue();
	      return serializedInput;
	    }
	  }]);

	  return Input;
	}(_react2.default.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  name: _prop_types2.default.string,
	  label: _prop_types2.default.oneOfType([_prop_types2.default.string, _prop_types2.default.bool]),
	  value: _prop_types2.default.any,
	  component: _prop_types2.default.string,
	  formStyle: _prop_types2.default.oneOf(['default', 'filter', 'oneLine']),
	  data: _prop_types2.default.object,
	  errors: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.array]),
	  resource: _prop_types2.default.string,
	  scope: _prop_types2.default.oneOf(['resource', 'global']),
	  maxLength: _prop_types2.default.number,
	  renderLabel: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  themeClassKey: 'input',
	  value: null,
	  component: 'text',
	  formStyle: 'default',
	  data: {},
	  errors: {},
	  resource: null,
	  scope: 'resource',
	  maxLength: null,
	  renderLabel: true
	}, _temp)) || _class);
	exports.default = Input;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _theme = __webpack_require__(30);

	var _theme2 = _interopRequireDefault(_theme);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _decorators = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var InputBase = (_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(InputBase, _Component);

	  function InputBase() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputBase);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputBase)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      value: _this.props.value
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputBase, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var $form = (0, _jquery2.default)(this.getInputFormNode());
	      $form.on('reset', this.handleReset);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var $form = (0, _jquery2.default)(this.getInputFormNode());
	      $form.off('reset', this.handleReset);
	    }
	  }, {
	    key: 'getInputFormNode',
	    value: function getInputFormNode() {
	      var inputRef = this.refs.input;
	      if (!!inputRef) {
	        return _reactDom2.default.findDOMNode(inputRef).form;
	      }

	      return null;
	    }
	  }, {
	    key: 'getPlaceholder',
	    value: function getPlaceholder() {
	      var placeholder = _i18n2.default.t(this.props.placeholder);
	      if (typeof placeholder !== 'string' || placeholder.length === 0) {
	        return null;
	      }

	      return placeholder;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.state.value;
	    }
	  }, {
	    key: 'inputClassName',
	    value: function inputClassName() {
	      var className = this.className();
	      var errors = this.props.errors;

	      if (!!errors && errors.length > 0) {
	        className += ' ' + _theme2.default.getCssClass('input.error');
	      }

	      return className;
	    }
	  }, {
	    key: 'inputNodeIsCheckbox',
	    value: function inputNodeIsCheckbox() {
	      var inputNode = _reactDom2.default.findDOMNode(this.refs.input);
	      return !!inputNode && inputNode.type === 'checkbox';
	    }
	  }, {
	    key: 'handleReset',
	    value: function handleReset() {
	      console.log(this.isMounted());

	      if (this.isMounted() && !this.inputNodeIsCheckbox()) {
	        this.setState({
	          value: null
	        });
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.props.onChange(event);

	      if (!event.isDefaultPrevented()) {
	        var value = event.target.value;
	        this.setState({ value: value });
	      }
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(event) {
	      this.props.onFocus(event);

	      if (this.props.readOnly) {
	        var inputNode = event.currentTarget;
	        inputNode.blur();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return InputBase;
	}(_react.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  name: _prop_types2.default.string,
	  value: _prop_types2.default.any,
	  disabled: _prop_types2.default.bool,
	  readOnly: _prop_types2.default.bool,
	  placeholder: _prop_types2.default.localizedString,
	  errors: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.array]),
	  onChange: _prop_types2.default.func,
	  onFocus: _prop_types2.default.func
	}, _class2.defaultProps = {
	  value: null,
	  disabled: false,
	  readOnly: false,
	  onChange: function onChange() {
	    return true;
	  },
	  onFocus: function onFocus() {
	    return true;
	  },
	  errors: []
	}, _temp2), (_applyDecoratedDescriptor(_class.prototype, 'handleReset', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleReset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleFocus', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleFocus'), _class.prototype)), _class);
	exports.default = InputBase;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _reactColor = __webpack_require__(95);

	var _reactColor2 = _interopRequireDefault(_reactColor);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputColorpicker = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(InputColorpicker, _Component);

	  function InputColorpicker() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputColorpicker);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputColorpicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      displayColorPicker: _this.props.display,
	      color: {}
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputColorpicker, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var value = this.props.value;
	      if (!value) {
	        this.setState({
	          value: this.props.defaultColor
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.themedClassName(this.props.wrapperThemeClassKey) },
	        _react2.default.createElement('input', {
	          id: 'colorpicker_input',
	          placeholder: '',
	          className: this.inputClassName(),
	          readOnly: true,
	          type: 'text',
	          ref: 'input'
	        }),
	        _react2.default.createElement(_components.Label, _extends({}, this.propsWithoutCSS(), { id: 'colorpicker_input', active: true })),
	        _react2.default.createElement('div', {
	          className: this.themedClassName(this.props.displayThemeClassKey),
	          style: this.displayBackgroundStyle(),
	          onClick: this.showColorPicker
	        }),
	        _react2.default.createElement(_reactColor2.default, _extends({}, this.props, {
	          color: this.state.value,
	          display: this.state.displayColorPicker,
	          onChangeComplete: this.onColorSelect
	        })),
	        _react2.default.createElement(_components.InputHidden, _extends({}, this.propsWithoutCSS(), {
	          value: this.state.value
	        }))
	      );
	    }
	  }, {
	    key: 'displayBackgroundStyle',
	    value: function displayBackgroundStyle() {
	      var colorHex = this.state.value || this.props.defaultColor;

	      return {
	        backgroundColor: '#' + colorHex
	      };
	    }
	  }, {
	    key: 'showColorPicker',
	    value: function showColorPicker() {
	      this.setState({
	        displayColorPicker: true
	      });
	    }
	  }, {
	    key: 'onColorSelect',
	    value: function onColorSelect(color) {
	      this.setState({
	        color: color,
	        value: color.hex
	      });
	    }
	  }]);

	  return InputColorpicker;
	}(_react.Component), _class2.propTypes = {
	  type: _react2.default.PropTypes.string
	}, _class2.defaultProps = {
	  wrapperThemeClassKey: 'input.colorpicker.wrapper',
	  displayThemeClassKey: 'input.colorpicker.display',
	  themeClassKey: 'input.colorpicker',
	  defaultColor: 'EEE',
	  type: 'sketch',
	  position: 'below',
	  display: false,
	  positionCSS: {
	    marginTop: '0'
	  }
	}, _temp2)) || _class);
	exports.default = InputColorpicker;

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("react-color");

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _i18n = __webpack_require__(7);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _utils = __webpack_require__(8);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputDatepicker = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(InputDatepicker, _Component);

	  function InputDatepicker() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputDatepicker);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputDatepicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      inputMaskedKey: _utils.uuid.v4()
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputDatepicker, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setPickadatePlugin();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(InputMasked, _extends({}, this.props, {
	          value: this.getFormattedDateValue(),
	          className: this.className(),
	          onChange: this._handleChange,
	          onIncomplete: this.handleMaskIncomplete,
	          key: this.state.inputMaskedKey,
	          ref: 'input'
	        })),
	        _react2.default.createElement(Label, _extends({}, this.propsWithoutCSS(), { active: this.labelIsActive() })),
	        _react2.default.createElement(Button, {
	          disabled: this.props.disabled || this.props.readOnly,
	          icon: { type: "calendar" },
	          className: 'input-datepicker__button prefix',
	          onClick: this.handleCalendarClick,
	          type: 'button',
	          ref: 'button'
	        })
	      );
	    }
	  }, {
	    key: 'getDateFormat',
	    value: function getDateFormat() {
	      return this.props.format || Realize.i18n.t('date.formats.date');
	    }
	  }, {
	    key: 'getFormattedDateValue',
	    value: function getFormattedDateValue() {
	      var date = _moment2.default.utc(this.state.value, _moment2.default.ISO_8601);
	      if (date.isValid()) {
	        return date.format(this.getDateFormat());
	      }

	      return this.state.value;
	    }
	  }, {
	    key: 'labelIsActive',
	    value: function labelIsActive() {
	      var inputValue = this.state.value;

	      return inputValue != null && String(inputValue).length > 0;
	    }
	  }, {
	    key: 'setPickadatePlugin',
	    value: function setPickadatePlugin() {
	      var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
	      $inputNode.pickadate({
	        editable: true,
	        selectMonths: true,
	        selectYears: true,
	        format: this.getDateFormat().toLowerCase(),
	        onSet: this.handlePickadateSet
	      });

	      var picker = $inputNode.pickadate('picker');
	      picker.on('close', this.props.onChange);
	    }
	  }, {
	    key: 'handleCalendarClick',
	    value: function handleCalendarClick(event) {
	      var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
	      var picker = $inputNode.pickadate('picker');

	      // TODO: should close on date click - materialize currently broke it
	      if (picker.get('open')) {
	        picker.close();
	      } else {
	        picker.open();
	      }

	      event.stopPropagation();
	    }
	  }, {
	    key: 'handlePickadateSet',
	    value: function handlePickadateSet(pickadateObject) {
	      var selectedDate = (0, _moment2.default)(pickadateObject.select).format();
	      this.props.onChange(null, this.getFormattedDateValue(), this);

	      this.setState({
	        value: selectedDate,
	        inputMaskedKey: _utils.uuid.v4()
	      }, this.setPickadatePlugin);
	    }
	  }, {
	    key: 'handleMaskIncomplete',
	    value: function handleMaskIncomplete(event) {
	      this.setState({ value: null });
	    }
	  }, {
	    key: '_getValue',
	    value: function _getValue() {
	      return this.getFormattedDateValue();
	    }
	  }]);

	  return InputDatepicker;
	}(_react.Component), _class2.propTypes = {
	  mask: _prop_types2.default.string
	}, _class2.defaultProps = {
	  themeClassKey: 'input.datepicker',
	  mask: null,
	  format: null,
	  maskType: 'date'
	}, _temp2)) || _class);
	exports.default = InputDatepicker;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputError = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputError, _Component);

	  function InputError() {
	    _classCallCheck(this, InputError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputError).apply(this, arguments));
	  }

	  _createClass(InputError, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        { className: this.className() },
	        this.errorMessages()
	      );
	    }
	  }, {
	    key: 'errorMessages',
	    value: function errorMessages() {
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
	  }]);

	  return InputError;
	}(_react.Component), _class2.propTypes = {
	  errors: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array])
	}, _class2.defaultProps = {
	  errors: [],
	  themeClassKey: 'input.error.hint'
	}, _temp)) || _class);
	exports.default = InputError;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var InputFile = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
	  _inherits(InputFile, _Component);

	  function InputFile() {
	    _classCallCheck(this, InputFile);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputFile).apply(this, arguments));
	  }

	  _createClass(InputFile, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setFilePathValue();
	    }
	  }, {
	    key: 'getButtonName',
	    value: function getButtonName() {
	      if (!!this.props.buttonIcon) {
	        var component = [];
	        component.push(_react2.default.createElement(
	          'i',
	          { className: 'material-icons', key: 'inputFileIcon' },
	          this.props.buttonIcon
	        ));

	        return component;
	      }

	      return _i18n2.default.t(this.props.buttonName);
	    }
	  }, {
	    key: 'getLabelName',
	    value: function getLabelName() {
	      return this.props.label || this.props.name;
	    }
	  }, {
	    key: 'getFilePathField',
	    value: function getFilePathField() {
	      var filePathField = this.props.filePathField;
	      if (!filePathField) {
	        filePathField = this.props.id + '_file_name';
	      }

	      return filePathField;
	    }
	  }, {
	    key: 'setFilePathValue',
	    value: function setFilePathValue() {
	      var filePathNode = _reactDom2.default.findDOMNode(this.refs.filePath);
	      var filePathField = this.getFilePathField();

	      if (!!filePathField) {
	        var filePath = this.props.data[filePathField];
	        if (!!filePath) {
	          filePathNode.value = filePath;
	        }
	      }
	    }
	  }, {
	    key: 'filePathWrapperClassName',
	    value: function filePathWrapperClassName() {
	      return this.themedClassName('input.file.filePathWrapper', this.props.filePathWrapperClassName);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this._handleChange(event);

	      var fileInput = _reactDom2.default.findDOMNode(this.refs.input);
	      var filePathInput = _reactDom2.default.findDOMNode(this.refs.filePath);

	      (0, _jquery2.default)(filePathInput).val(fileInput.files[0].name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.wrapperClassName },
	        _react2.default.createElement(
	          'div',
	          { className: this.buttonClassName() },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.getButtonName()
	          ),
	          _react2.default.createElement('input', _extends({}, this.props, {
	            value: this.state.value,
	            onChange: this.handleChange,
	            disabled: this.props.disabled || this.props.readOnly,
	            type: 'file',
	            ref: 'input'
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.filePathWrapperClassName() },
	          _react2.default.createElement('input', {
	            className: this.inputClassName(),
	            placeholder: this.getLabelName(),
	            onFocus: this._handleFocus,
	            type: 'text',
	            ref: 'filePath'
	          })
	        )
	      );
	    }
	  }]);

	  return InputFile;
	}(_react.Component), _class3.propTypes = {
	  wrapperClassName: _prop_types2.default.string,
	  buttonClassName: _prop_types2.default.string,
	  buttonName: _prop_types2.default.localizedString,
	  buttonIcon: _prop_types2.default.string,
	  filePathWrapperClassName: _prop_types2.default.string,
	  filePathField: _prop_types2.default.string,
	  data: _prop_types2.default.object
	}, _class3.defaultProps = {
	  themeClassKey: 'input.file',
	  buttonName: 'inputs.file.buttonName',
	  filePathField: null,
	  data: {}
	}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class);
	exports.default = InputFile;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputHidden = (_dec = (0, _decorators.mixin)(_mixins.InputComponentMixin), _dec(_class = function (_Component) {
	  _inherits(InputHidden, _Component);

	  function InputHidden() {
	    _classCallCheck(this, InputHidden);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputHidden).apply(this, arguments));
	  }

	  _createClass(InputHidden, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', _extends({}, this.props, { type: 'hidden', ref: 'input' }));
	    }
	  }]);

	  return InputHidden;
	}(_react.Component)) || _class);
	exports.default = InputHidden;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var InputMasked = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
	  _inherits(InputMasked, _Component);

	  function InputMasked() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InputMasked);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputMasked)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      placeholder: _this.getPlaceholder(),
	      applyMask: true
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InputMasked, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var appliedMask = this.applyMask();
	      this.setMaskPlaceholder(appliedMask);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.state.applyMask) {
	        this.applyMask();
	      }
	    }
	  }, {
	    key: 'getInputElement',
	    value: function getInputElement() {
	      return _reactDom2.default.findDOMNode(this.refs.input);
	    }
	  }, {
	    key: 'setMaskPlaceholder',
	    value: function setMaskPlaceholder(appliedMaskOptions) {
	      var appliedPlaceholder = appliedMaskOptions.placeholder;

	      if (!!appliedPlaceholder) {
	        this.setState({
	          placeholder: appliedPlaceholder,
	          applyMask: true
	        });
	      }
	    }
	  }, {
	    key: 'parseMaskOptions',
	    value: function parseMaskOptions() {
	      var maskOptions = _jquery2.default.extend({
	        showMaskOnHover: false,
	        clearIncomplete: true
	      }, this.filterMaskOptionProps());

	      maskOptions.oncomplete = this.handleComplete;
	      maskOptions.onincomplete = this.handleIncomplete;
	      maskOptions.oncleared = this.props.onCleared;

	      return maskOptions;
	    }
	  }, {
	    key: 'filterMaskOptionProps',
	    value: function filterMaskOptionProps() {
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
	    }
	  }, {
	    key: 'predefinedMasks',
	    value: function predefinedMasks() {
	      var localeMasks = _i18n2.default.t('masks');
	      var predefinedMasks = {};

	      for (var maskName in localeMasks) {
	        if (localeMasks.hasOwnProperty(maskName)) {
	          var mask = localeMasks[maskName];
	          if (typeof mask === 'string') {
	            predefinedMasks[maskName] = { mask: mask };
	          } else if ((typeof mask === 'undefined' ? 'undefined' : _typeof(mask)) === 'object') {
	            predefinedMasks[maskName] = mask;
	          }
	        }
	      }

	      return predefinedMasks;
	    }
	  }, {
	    key: 'applyMask',
	    value: function applyMask() {
	      var appliedMask = {};
	      if (!!this.props.regex) {
	        appliedMask = this.applyRegexMask();
	      } else {
	        appliedMask = this.applyBaseMask();
	      }

	      return appliedMask;
	    }
	  }, {
	    key: 'applyRegexMask',
	    value: function applyRegexMask() {
	      var $input = (0, _jquery2.default)(this.getInputElement());
	      var maskOptions = this.parseMaskOptions();

	      $input.inputmask('Regex', maskOptions);
	      return maskOptions;
	    }
	  }, {
	    key: 'applyBaseMask',
	    value: function applyBaseMask() {
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
	    }
	  }, {
	    key: 'applyPredefinedMask',
	    value: function applyPredefinedMask(predefinedMask) {
	      var $input = (0, _jquery2.default)(this.getInputElement());
	      var predefinedMaskOptions = _jquery2.default.extend({}, this.parseMaskOptions(), predefinedMask);

	      $input.inputmask(predefinedMaskOptions);
	      return predefinedMaskOptions;
	    }
	  }, {
	    key: 'applyCustomMask',
	    value: function applyCustomMask() {
	      var $input = (0, _jquery2.default)(this.getInputElement());
	      var maskOptions = this.parseMaskOptions();

	      console.log(maskOptions);
	      $input.inputmask(maskOptions);
	      this.setMaskPlaceholder(maskOptions);
	      return maskOptions;
	    }
	  }, {
	    key: 'updateValue',
	    value: function updateValue(value) {
	      this.setState({
	        value: value,
	        applyMask: false
	      });
	    }
	  }, {
	    key: 'handleComplete',
	    value: function handleComplete(event) {
	      this.props.onComplete(event);
	      this.updateValue(event.target.value);
	    }
	  }, {
	    key: 'handleIncomplete',
	    value: function handleIncomplete(event) {
	      this.props.onIncomplete(event);
	      this.updateValue(null);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var newValue = event.target.value;
	      this.props.onChange(event, newValue, this);

	      if (!event.isDefaultPrevented()) {
	        this.updateValue(newValue);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'input',
	        _extends({}, this.props, {
	          value: this.state.value,
	          placeholder: this.state.placeholder,
	          className: this.inputClassName(),
	          onKeyUp: this.handleChange,
	          onFocus: this._handleFocus,
	          ref: 'input'
	        }),
	        this.props.children
	      );
	    }
	  }]);

	  return InputMasked;
	}(_react.Component), _class3.propTypes = {
	  type: _prop_types2.default.string,
	  mask: _prop_types2.default.string,
	  maskType: _prop_types2.default.string,
	  regex: _prop_types2.default.string,
	  autoUnmask: _prop_types2.default.bool,
	  onComplete: _prop_types2.default.func,
	  onIncomplete: _prop_types2.default.func,
	  onCleared: _prop_types2.default.func
	}, _class3.defaultProps = {
	  themeClassKey: 'input.text',
	  type: 'text',
	  mask: null,
	  maskType: null,
	  regex: null,
	  autoUnmask: false,
	  onComplete: function onComplete() {},
	  onIncomplete: function onIncomplete() {},
	  onCleared: function onCleared() {}
	}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleComplete', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleComplete'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleIncomplete', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleIncomplete'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class);
	exports.default = InputMasked;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputNumber = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputNumber, _Component);

	  function InputNumber() {
	    _classCallCheck(this, InputNumber);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputNumber).apply(this, arguments));
	  }

	  _createClass(InputNumber, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(_components.InputMasked, _extends({}, this.props, {
	          className: this.className(),
	          onChange: this._handleChange,
	          onFocus: this._handleFocus,
	          type: 'text',
	          ref: 'input'
	        })),
	        _react2.default.createElement(_components.Label, this.propsWithoutCSS())
	      );
	    }
	  }]);

	  return InputNumber;
	}(_react.Component), _class2.defaultProps = {
	  themeClassKey: 'input.number',
	  maskType: 'integer'
	}, _temp)) || _class);
	exports.default = InputNumber;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputPassword = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputPassword, _Component);

	  function InputPassword() {
	    _classCallCheck(this, InputPassword);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputPassword).apply(this, arguments));
	  }

	  _createClass(InputPassword, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', _extends({}, this.props, {
	        value: this.state.value,
	        placeholder: this.getPlaceholder(),
	        className: this.inputClassName(),
	        onChange: this._handleChange,
	        onFocus: this._handleFocus,
	        type: 'password', ref: 'input'
	      }));
	    }
	  }]);

	  return InputPassword;
	}(_react.Component), _class2.propTypes = {
	  confirms: _prop_types2.default.string
	}, _class2.defaultProps = {
	  themeClassKey: 'input.text'
	}, _temp)) || _class);
	exports.default = InputPassword;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputSwitch = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin, _mixins.CheckboxComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputSwitch, _Component);

	  function InputSwitch() {
	    _classCallCheck(this, InputSwitch);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputSwitch).apply(this, arguments));
	  }

	  _createClass(InputSwitch, [{
	    key: 'checkboxProps',
	    value: function checkboxProps() {
	      if (this.valueIsBoolean()) {
	        return {};
	      }

	      return this.props;
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      if (!this.props.label) {
	        return null;
	      }

	      return _react2.default.createElement(_components.Label, { name: this.props.label, active: true });
	    }
	  }, {
	    key: 'renderInputHidden',
	    value: function renderInputHidden() {
	      if (this.valueIsBoolean()) {
	        return _react2.default.createElement(_components.InputHidden, _extends({}, this.props, { value: this.state.value }));
	      }

	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: this.className() },
	          _react2.default.createElement(
	            'label',
	            null,
	            _i18n2.default.t(this.props.offLabel),
	            _react2.default.createElement('input', _extends({}, this.checkboxProps(), {
	              checked: this.state.checked,
	              value: this.state.value,
	              disabled: this.props.disabled || this.props.readOnly,
	              className: this.inputClassName(),
	              onChange: this._handleCheckboxChange,
	              type: 'checkbox',
	              ref: 'input'
	            })),
	            _react2.default.createElement('span', { className: 'lever' }),
	            _i18n2.default.t(this.props.onLabel)
	          ),
	          this.renderInputHidden()
	        ),
	        this.renderLabel()
	      );
	    }
	  }]);

	  return InputSwitch;
	}(_react.Component), _class2.propTypes = {
	  label: _prop_types2.default.string,
	  offLabel: _prop_types2.default.localizedString,
	  onLabel: _prop_types2.default.localizedString
	}, _class2.defaultProps = {
	  themeClassKey: 'input.switch',
	  offLabel: 'false',
	  onLabel: 'true',
	  label: null
	}, _temp)) || _class);
	exports.default = InputSwitch;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _input_base = __webpack_require__(93);

	var _input_base2 = _interopRequireDefault(_input_base);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputText = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_InputBase) {
	  _inherits(InputText, _InputBase);

	  function InputText() {
	    _classCallCheck(this, InputText);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputText).apply(this, arguments));
	  }

	  _createClass(InputText, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', _extends({}, this.props, {
	        value: this.state.value,
	        placeholder: this.getPlaceholder(),
	        className: this.inputClassName(),
	        onChange: this.handleChange,
	        onFocus: this.handleFocus,
	        ref: 'input'
	      }));
	    }
	  }]);

	  return InputText;
	}(_input_base2.default), _class2.propTypes = _extends({}, _input_base2.default.propTypes, {
	  type: _prop_types2.default.string
	}), _class2.defaultProps = _extends({}, _input_base2.default.defaultProps, {
	  type: 'text',
	  themeClassKey: 'input.text'
	}), _temp)) || _class);
	exports.default = InputText;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputTextarea = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputTextarea, _Component);

	  function InputTextarea() {
	    _classCallCheck(this, InputTextarea);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputTextarea).apply(this, arguments));
	  }

	  _createClass(InputTextarea, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('textarea', _extends({}, this.props, {
	        value: this.state.value,
	        placeholder: this.getPlaceholder(),
	        className: this.inputClassName(),
	        onChange: this._handleChange,
	        onFocus: this._handleFocus,
	        ref: 'input'
	      }));
	    }
	  }]);

	  return InputTextarea;
	}(_react.Component), _class2.propTypes = {
	  rows: _prop_types2.default.number
	}, _class2.defaultProps = {
	  rows: 4,
	  themeClassKey: 'input.textarea'
	}, _temp)) || _class);
	exports.default = InputTextarea;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var IndexPermissions = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin, _mixins.ModalRendererMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
	  _inherits(IndexPermissions, _Component);

	  function IndexPermissions() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, IndexPermissions);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(IndexPermissions)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hasResource: true
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(IndexPermissions, [{
	    key: 'onSuccess',
	    value: function onSuccess(responseData) {
	      this.renderModalHtml(responseData);
	    }
	  }, {
	    key: 'onLoadSuccess',
	    value: function onLoadSuccess() {
	      var dataRows = this.refs.grid.state.dataRows;
	      if (dataRows.length === 0) {
	        this.setState({
	          hasResource: false
	        });
	      }
	    }
	  }, {
	    key: 'getActionButtons',
	    value: function getActionButtons() {
	      var gridProps = this.props.gridProps;

	      if (!!gridProps.actionButtons) {
	        return gridProps.actionButtons;
	      }

	      return {
	        member: [{
	          icon: 'edit',
	          onClick: this.openEditPermission
	        }],
	        collection: []
	      };
	    }
	  }, {
	    key: 'getColumns',
	    value: function getColumns() {
	      var gridProps = this.props.gridProps;

	      if (!!gridProps.columns) {
	        return gridProps.columns;
	      }

	      var resourceType = this.props.resourceType;
	      return this.defaultColumns(resourceType);
	    }
	  }, {
	    key: 'defaultColumns',
	    value: function defaultColumns(resourceType) {
	      return {
	        resource_name: {
	          label: I18n.t('models.' + resourceType)
	        },
	        permission: {
	          label: 'Permissão',
	          component: 'LabelPermission'
	        }
	      };
	    }
	  }, {
	    key: 'filters',
	    value: function filters() {
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
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var hasResource = this.state.hasResource;
	      var display = hasResource ? 'block' : 'none';

	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className, style: { display: display } },
	        _react2.default.createElement(_components.Grid, _extends({}, this.props.gridProps, {
	          ref: 'grid',
	          columns: this.getColumns(),
	          filter: this.filters(),
	          onLoadSuccess: this.onLoadSuccess,
	          actionButtons: this.getActionButtons()
	        }))
	      );
	    }
	  }]);

	  return IndexPermissions;
	}(_react.Component), _class3.propTypes = {
	  principal: _prop_types2.default.object,
	  resourceType: _prop_types2.default.string,
	  gridProps: _prop_types2.default.object,
	  className: _prop_types2.default.string,
	  editPermissionBaseUrl: _prop_types2.default.object
	}, _class3.defaultProps = {
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
	}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'onLoadSuccess', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'onLoadSuccess'), _class2.prototype)), _class2)) || _class);
	exports.default = IndexPermissions;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LabelPermission = (_temp = _class = function (_Component) {
	  _inherits(LabelPermission, _Component);

	  function LabelPermission() {
	    _classCallCheck(this, LabelPermission);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LabelPermission).apply(this, arguments));
	  }

	  _createClass(LabelPermission, [{
	    key: 'renderLabel',
	    value: function renderLabel() {
	      var component = [];
	      var permissions = this.props.value;

	      if (permissions.length === 0) {
	        component.push(_react2.default.createElement(
	          'div',
	          null,
	          ' - '
	        ));
	      } else {
	        permissions.forEach(function (permission) {
	          component.push(_react2.default.createElement(
	            'div',
	            null,
	            I18n.t('permissions.' + permission)
	          ));
	        });
	      }

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className },
	        this.renderLabel()
	      );
	    }
	  }]);

	  return LabelPermission;
	}(_react.Component), _class.propTypes = {
	  className: _prop_types2.default.string
	}, _class.defaultProps = {
	  className: ''
	}, _temp);
	exports.default = LabelPermission;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _desc, _value, _class2, _class3, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _utils = __webpack_require__(8);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var PermissionManager = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
	  _inherits(PermissionManager, _Component);

	  function PermissionManager() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PermissionManager);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PermissionManager)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      principalsPermissions: {},
	      selectedPrincipal: _this.props.principal,
	      principals: []
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PermissionManager, [{
	    key: 'getSelectedPrincipal',
	    value: function getSelectedPrincipal() {
	      return !!this.state.selectedPrincipal ? this.state.selectedPrincipal : this.props.principal;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadPrincipals();
	      this.loadPrincipalsPermissions();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.loadPrincipals();
	    }
	  }, {
	    key: 'addPermissionChecked',
	    value: function addPermissionChecked(permissions) {
	      var principalsPermissions = this.state.principalsPermissions;
	      var selectedPrincipal = this.getSelectedPrincipal();

	      for (var i = 0; i < principalsPermissions.length; i++) {
	        if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
	          principalsPermissions[i].permissions.push(permissions);
	          principalsPermissions[i].changed = true;
	        }
	      }

	      if (principalsPermissions.length === 0) {
	        principalsPermissions.push({
	          principal_id: selectedPrincipal.id,
	          principal_type: this.props.principalType,
	          permissions: [permissions],
	          changed: true
	        });
	      }

	      this.setState({
	        principalsPermissions: principalsPermissions
	      });
	    }
	  }, {
	    key: 'switchPrincipalPermissions',
	    value: function switchPrincipalPermissions(principalPermission) {
	      var principalsPermissions = this.state.principalsPermissions;
	      var selectedPrincipal = this.getSelectedPrincipal();

	      for (var i = 0; i < principalsPermissions.length; i++) {
	        if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
	          principalsPermissions.splice(i, 1);
	        }
	      }

	      principalsPermissions.push(principalPermission);
	      return principalsPermissions;
	    }
	  }, {
	    key: 'createPrincipalsPermissions',
	    value: function createPrincipalsPermissions(principals) {
	      var principalsPermissions = this.state.principalsPermissions;

	      for (var i = 0; i < principals.length; i++) {
	        if (!this.alreadyExistPrincipalPermissions(principals[i])) {
	          principalsPermissions.push({
	            principal_id: principals[i].principal_id,
	            principal_type: principals[i].principal_type,
	            permissions: []
	          });
	        }
	      }

	      this.setState({
	        principalsPermissions: principalsPermissions
	      });
	    }
	  }, {
	    key: 'alreadyExistPrincipalPermissions',
	    value: function alreadyExistPrincipalPermissions(principal) {
	      var principalsPermissions = this.state.principalsPermissions;
	      var belongs = false;

	      for (var i = 0; i < principalsPermissions.length; i++) {
	        if (principalsPermissions[i].principal_id === principal.id) {
	          belongs = true;
	          break;
	        }
	      }

	      return belongs;
	    }
	  }, {
	    key: 'loadPrincipals',
	    value: function loadPrincipals() {
	      var _this2 = this;

	      _jquery2.default.ajax({
	        url: this.props.principalsBaseUrl,
	        dataType: 'json',
	        async: false,
	        data: {
	          resource_id: this.props.resource.id,
	          resource_type: this.props.resourceType
	        },
	        success: function success(data) {
	          _this2.setState({
	            principals: data.principals,
	            selectedPrincipal: _this2.getSelectedPrincipal() || data.principals[0]
	          });
	        }
	      });
	    }
	  }, {
	    key: 'loadPrincipalsPermissions',
	    value: function loadPrincipalsPermissions() {
	      var _this3 = this;

	      _jquery2.default.ajax({
	        url: this.props.principalsPermissionsBaseUrl,
	        dataType: 'json',
	        async: false,
	        data: {
	          resource_id: this.props.resource.id,
	          resource_type: this.props.resourceType
	        },
	        success: function success(data) {
	          _this3.setState({
	            principalsPermissions: data.principals
	          });
	        }
	      });
	    }
	  }, {
	    key: 'principalPermission',
	    value: function principalPermission() {
	      var principalsPermissions = this.state.principalsPermissions;
	      var selectedPrincipal = this.getSelectedPrincipal();

	      var principalPermissions = null;
	      for (var i = 0; i < principalsPermissions.length; i++) {
	        if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
	          principalPermissions = principalsPermissions[i];
	        }
	      }

	      return principalPermissions;
	    }
	  }, {
	    key: 'rowCssClass',
	    value: function rowCssClass(data) {
	      var selectedPrincipal = this.state.selectedPrincipal;

	      if (!!data && !!selectedPrincipal) {
	        if (data.id === selectedPrincipal.id) {
	          return 'row-selected';
	        }
	      }

	      return undefined;
	    }
	  }, {
	    key: 'dataGridPrincipals',
	    value: function dataGridPrincipals() {
	      return {
	        dataRows: this.state.principals,
	        count: 10
	      };
	    }
	  }, {
	    key: 'handleSelectPrincipal',
	    value: function handleSelectPrincipal(event, data) {
	      this.setState({
	        selectedPrincipal: data
	      });
	    }
	  }, {
	    key: 'handleRemovePrincipal',
	    value: function handleRemovePrincipal() {
	      this.props.handleRemovePrincipal(this.state.selectedPrincipal);
	    }
	  }, {
	    key: 'handleOpenPrincipalModal',
	    value: function handleOpenPrincipalModal() {
	      (0, _jquery2.default)('#add-principals-modal').openModal();
	      (0, _jquery2.default)(window).resize();
	    }
	  }, {
	    key: 'handleRemovePermissionChecked',
	    value: function handleRemovePermissionChecked(permission) {
	      var principalPermission = this.principalPermission();
	      var permissions = principalPermission.permissions;

	      for (var i = 0; i < permissions.length; i++) {
	        if (permissions[i].permission === permission) {
	          permissions.splice(i, 1);
	        }
	      }

	      principalPermission.permissions = permissions;
	      principalPermission.changed = true;
	      var principalsPermissions = this.switchPrincipalPermissions(principalPermission);

	      this.setState({
	        principalsPermissions: principalsPermissions
	      });
	    }
	  }, {
	    key: 'handleAddPermissionChecked',
	    value: function handleAddPermissionChecked(permission) {
	      var _this4 = this;

	      var selectedPrincipal = this.getSelectedPrincipal();
	      var principalId = selectedPrincipal.id;

	      _jquery2.default.ajax({
	        url: this.props.impliesPermissionBaseUrl,
	        method: 'GET',
	        dataType: 'json',
	        data: {
	          principal_id: principalId,
	          principal_type: this.props.principalType,
	          resource_id: this.props.resource.id,
	          resource_type: this.props.resourceType,
	          permission: permission
	        },
	        success: function success(data) {
	          _this4.addPermissionChecked(data.permissions);
	        }
	      });
	    }
	  }, {
	    key: 'renderPrincipalsGrid',
	    value: function renderPrincipalsGrid() {
	      var component = [];
	      var principal = this.props.principal;

	      if (!principal) {
	        component.push(_react2.default.createElement(
	          'h5',
	          null,
	          'Usuários/Grupo:'
	        ));
	        component.push(_react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'principal-grid' },
	            _react2.default.createElement(_components.Grid, _extends({
	              ref: 'grid'
	            }, this.props.PrincipalGridProps, {
	              key: Math.random(),
	              onClickRow: this.handleSelectPrincipal,
	              tableRowCssClass: this.rowCssClass,
	              data: this.dataGridPrincipals(),
	              url: this.props.principalsBaseUrl
	            }))
	          ),
	          this.renderActionButtons()
	        ));
	      }

	      return component;
	    }
	  }, {
	    key: 'renderActionButtons',
	    value: function renderActionButtons() {
	      var component = [];

	      component.push(_react2.default.createElement(_components.PrincipalActionButtons, {
	        handleRemovePrincipal: this.handleRemovePrincipal,
	        handleOpenPrincipalModal: this.handleOpenPrincipalModal,
	        modalContainerId: 'principals-modal'
	      }));

	      return component;
	    }
	  }, {
	    key: 'renderEditPermission',
	    value: function renderEditPermission() {
	      var component = [];
	      var selectedPrincipal = this.getSelectedPrincipal();
	      var principalType = !!this.state.selectedPrincipal ? selectedPrincipal.principal_type : this.props.principalType;

	      if (!!selectedPrincipal) {
	        if (!selectedPrincipal.principal_type) principalType = this.props.principalType;

	        component.push(_react2.default.createElement(
	          'h5',
	          null,
	          'Permissões de ',
	          selectedPrincipal.name,
	          ':'
	        ));
	        component.push(_react2.default.createElement(EditPermissions, {
	          principal: selectedPrincipal,
	          principalType: principalType,
	          principalPermission: this.principalPermission(),
	          resource: this.props.resource,
	          resourceType: this.props.resourceType,
	          handleRemovePermissionChecked: this.handleRemovePermissionChecked,
	          handleAddPermissionChecked: this.handleAddPermissionChecked,
	          afterCreateEntry: this.forceUpdate
	        }));
	      }

	      return component;
	    }
	  }, {
	    key: 'renderAddPrincipalsModal',
	    value: function renderAddPrincipalsModal() {
	      if (!this.props.permissionManagerInModal) {
	        return [_react2.default.createElement(IndexPrincipal, { handleAddPrincipal: this.handleAddPrincipal })];
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.renderPrincipalsGrid(),
	        this.renderEditPermission(),
	        this.renderAddPrincipalsModal()
	      );
	    }
	  }]);

	  return PermissionManager;
	}(_react.Component), _class3.propTypes = {
	  principal: _prop_types2.default.object,
	  principalType: _prop_types2.default.string,
	  resource: _prop_types2.default.object,
	  resourceType: _prop_types2.default.string,
	  PrincipalGridProps: _prop_types2.default.object,
	  permissionManagerInModal: _prop_types2.default.bool,
	  principalsBaseUrl: _prop_types2.default.string,
	  principalsPermissionsBaseUrl: _prop_types2.default.string,
	  impliesPermissionBaseUrl: _prop_types2.default.string,
	  permissionsBaseUrl: _prop_types2.default.string
	}, _class3.defaultProps = {
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
	}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleSelectPrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelectPrincipal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleRemovePrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleRemovePrincipal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleOpenPrincipalModal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleOpenPrincipalModal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleRemovePermissionChecked', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleRemovePermissionChecked'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleAddPermissionChecked', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleAddPermissionChecked'), _class2.prototype)), _class2)) || _class);
	exports.default = PermissionManager;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PrincipalActionButtons = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin, _mixins.ModalRendererMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(PrincipalActionButtons, _Component);

	  function PrincipalActionButtons() {
	    _classCallCheck(this, PrincipalActionButtons);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PrincipalActionButtons).apply(this, arguments));
	  }

	  _createClass(PrincipalActionButtons, [{
	    key: 'renderRemovePrincipalButton',
	    value: function renderRemovePrincipalButton() {
	      var component = [];
	      component.push(_react2.default.createElement(_components.Button, {
	        name: 'Remover',
	        onClick: this.props.handleRemovePrincipal
	      }));

	      return component;
	    }
	  }, {
	    key: 'renderAddPrincipalButton',
	    value: function renderAddPrincipalButton() {
	      var component = [];
	      component.push(_react2.default.createElement(_components.Button, {
	        name: 'Adicionar',
	        onClick: this.props.handleOpenPrincipalModal
	      }));

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className },
	        this.renderAddPrincipalButton(),
	        this.renderRemovePrincipalButton(),
	        _react2.default.createElement('div', { style: { clear: 'both' } })
	      );
	    }
	  }]);

	  return PrincipalActionButtons;
	}(_react.Component), _class2.propTypes = {
	  className: _prop_types2.default.string,
	  handleOpenPrincipalModal: _prop_types2.default.func,
	  handleRemovePrincipal: _prop_types2.default.func
	}, _class2.defaultProps = {
	  className: 'principal-action-buttons',
	  handleAddPrincipal: null,
	  handleRemovePrincipal: null
	}, _temp)) || _class);
	exports.default = PrincipalActionButtons;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UpdatePermissionButton = (_temp = _class = function (_Component) {
	  _inherits(UpdatePermissionButton, _Component);

	  function UpdatePermissionButton() {
	    _classCallCheck(this, UpdatePermissionButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePermissionButton).apply(this, arguments));
	  }

	  _createClass(UpdatePermissionButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_components.Button, _extends({}, this.props, {
	        onClick: this.props.handleUpdatePermissions
	      }));
	    }
	  }]);

	  return UpdatePermissionButton;
	}(_react.Component), _class.propTypes = {
	  name: _prop_types2.default.string,
	  className: _prop_types2.default.string,
	  clearTheme: _prop_types2.default.bool,
	  element: _prop_types2.default.string,
	  handleUpdatePermissions: _prop_types2.default.func
	}, _class.defaultProps = {
	  name: 'Atualizar',
	  className: 'btn waves-effect waves-grey button-modal ',
	  clearTheme: true,
	  element: 'a',
	  handleUpdatePermissions: function handleUpdatePermissions() {
	    return null;
	  }
	}, _temp);
	exports.default = UpdatePermissionButton;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ButtonGroup = exports.Button = undefined;

	var _button = __webpack_require__(112);

	var _button2 = _interopRequireDefault(_button);

	var _button_group = __webpack_require__(113);

	var _button_group2 = _interopRequireDefault(_button_group);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Button = _button2.default;
	exports.ButtonGroup = _button_group2.default;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _i18n = __webpack_require__(7);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	var _request_handler_mixin = __webpack_require__(56);

	var _request_handler_mixin2 = _interopRequireDefault(_request_handler_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default, _request_handler_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Button, _Component);

	  function Button(props) {
	    _classCallCheck(this, Button);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

	    _this.handleClick = function (event) {
	      var buttonOnClick = _this.props.onClick;
	      var buttonAction = _this.props.actionUrl;

	      if (_jquery2.default.isFunction(buttonOnClick)) {
	        _this.props.onClick(event);
	      } else if (!!buttonAction) {
	        var actionData = _this.props.actionData;
	        _this.performRequest(buttonAction, actionData, _this.getMethod() || 'POST');
	      }
	    };

	    _this.state = {
	      themeClassKey: _this.getButtonThemeClassKey() + _this.getStyleThemeClassKey()
	    };
	    return _this;
	  }

	  _createClass(Button, [{
	    key: 'getButtonThemeClassKey',
	    value: function getButtonThemeClassKey() {
	      var themeClassKey = this.props.themeClassKey;

	      if (!this.props.name || this.props.name.length === 0) {
	        themeClassKey += ' button.iconOnly';
	      }

	      return themeClassKey;
	    }
	  }, {
	    key: 'getStyleThemeClassKey',
	    value: function getStyleThemeClassKey() {
	      if (!this.props.style) {
	        return '';
	      }

	      return ' button.' + this.props.style;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var content = '';
	      if (this.props.isLoading) {
	        content = this.renderLoadingIndicator();
	      } else {
	        content = this.renderContent();
	      }

	      return _react2.default.createElement(this.props.element, {
	        className: this.getClassName(),
	        type: this.props.type,
	        hidden: this.props.hidden,
	        visible: this.props.visible,
	        disabled: this.props.disabled || this.props.isLoading,
	        href: this.getHref(),
	        onClick: this.handleClick,
	        'data-method': this.getMethod(),
	        'data-confirm': this.getConfirmsWith()
	      }, content);
	    }
	  }, {
	    key: 'getClassName',
	    value: function getClassName() {
	      var className = this.className();
	      if (this.props.disabled && this.props.element === 'a') className = 'button btn-flat disable-action-button';

	      return className;
	    }
	  }, {
	    key: 'getHref',
	    value: function getHref() {
	      if (this.props.disabled && this.props.element === 'a') return 'javascript:void(0)';
	      return this.props.href;
	    }
	  }, {
	    key: 'getMethod',
	    value: function getMethod() {
	      if (!!this.props.method) {
	        return this.props.method;
	      }

	      return null;
	    }
	  }, {
	    key: 'getConfirmsWith',
	    value: function getConfirmsWith() {
	      if (!!this.props.confirmsWith) {
	        return _i18n2.default.t(this.props.confirmsWith);
	      }

	      return null;
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent() {
	      return [_i18n2.default.t(this.props.name), this.renderIcon()];
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      if (!this.props.icon) {
	        return '';
	      }

	      var iconProps = null;
	      if (_jquery2.default.isPlainObject(this.props.icon)) {
	        iconProps = this.props.icon;
	      } else {
	        iconProps = { type: this.props.icon };
	      }

	      return _react2.default.createElement(Icon, _extends({ className: this.getIconClassName() }, iconProps, { key: 'icon' }));
	    }
	  }, {
	    key: 'renderLoadingIndicator',
	    value: function renderLoadingIndicator() {
	      return _i18n2.default.t(this.props.disableWith);
	    }
	  }, {
	    key: 'getIconClassName',
	    value: function getIconClassName() {
	      if (!this.props.name || this.props.name.length === 0) {
	        return '';
	      } else {
	        return 'right';
	      }
	    }
	  }]);

	  return Button;
	}(_react.Component), _class2.propTypes = {
	  name: _prop_types2.default.localizedString,
	  type: _prop_types2.default.string,
	  icon: _prop_types2.default.oneOfType([_prop_types2.default.string, _prop_types2.default.object]),
	  style: _prop_types2.default.oneOf(['danger', 'primary', 'warning', 'cancel']),
	  disabled: _prop_types2.default.bool,
	  href: _prop_types2.default.string,
	  onClick: _prop_types2.default.func,
	  actionUrl: _prop_types2.default.string,
	  actionData: _prop_types2.default.object,
	  isLoading: _prop_types2.default.bool,
	  disableWith: _prop_types2.default.localizedString,
	  confirmsWith: _prop_types2.default.localizedString,
	  element: _prop_types2.default.oneOf(['button', 'a']),
	  target: _prop_types2.default.string,
	  method: _prop_types2.default.string
	}, _class2.defaultProps = {
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
	}, _temp)) || _class);
	exports.default = Button;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	var _button = __webpack_require__(112);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonGroup = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ButtonGroup, _Component);

	  function ButtonGroup() {
	    _classCallCheck(this, ButtonGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroup).apply(this, arguments));
	  }

	  _createClass(ButtonGroup, [{
	    key: 'renderButtons',
	    value: function renderButtons() {
	      var buttonsProps = this.props.buttons;
	      var buttons = [];

	      for (var i = 0; i < buttonsProps.length; i++) {
	        var buttonProps = buttonsProps[i];

	        buttons.push(_react2.default.createElement(_button2.default, _extends({}, buttonProps, { key: "button_" + i })));
	      }

	      return buttons;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        this.renderButtons()
	      );
	    }
	  }]);

	  return ButtonGroup;
	}(_react.Component), _class2.propTypes = {
	  buttons: _prop_types2.default.array
	}, _class2.defaultProps = {
	  themeClassKey: 'button.group',
	  buttons: []
	}, _temp)) || _class);
	exports.default = ButtonGroup;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = undefined;

	var _container = __webpack_require__(115);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Container = _container2.default;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _container_mixin = __webpack_require__(51);

	var _container_mixin2 = _interopRequireDefault(_container_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = (_dec = (0, _decorators.mixin)(_container_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Container, _Component);

	  function Container() {
	    _classCallCheck(this, Container);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
	  }

	  _createClass(Container, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className },
	        this.renderChildren()
	      );
	    }
	  }]);

	  return Container;
	}(_react.Component), _class2.propTypes = {
	  className: _prop_types2.default.string
	}, _class2.defaultProps = {
	  className: 'row'
	}, _temp)) || _class);
	exports.default = Container;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Flash = exports.FlashDismiss = exports.FlashContent = undefined;

	var _flash_content = __webpack_require__(117);

	var _flash_content2 = _interopRequireDefault(_flash_content);

	var _flash_dismiss = __webpack_require__(118);

	var _flash_dismiss2 = _interopRequireDefault(_flash_dismiss);

	var _flash = __webpack_require__(120);

	var _flash2 = _interopRequireDefault(_flash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FlashContent = _flash_content2.default;
	exports.FlashDismiss = _flash_dismiss2.default;
	exports.Flash = _flash2.default;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FlashContent = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(FlashContent, _Component);

	  function FlashContent(props) {
	    _classCallCheck(this, FlashContent);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlashContent).call(this, props));

	    _this.state = {
	      themeClassKey: 'flash.content flash.' + _this.props.type + '.content'
	    };
	    return _this;
	  }

	  _createClass(FlashContent, [{
	    key: 'renderMessages',
	    value: function renderMessages() {
	      var isArray = Array.isArray(this.props.message);
	      var messages = !isArray ? [this.props.message] : this.props.message;
	      return messages.map(function (message, index) {
	        return typeof message == "string" ? _react2.default.createElement(
	          'p',
	          { key: "flash_content_" + index },
	          message
	        ) : message;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        this.renderMessages()
	      );
	    }
	  }]);

	  return FlashContent;
	}(_react.Component), _class2.propTypes = {
	  type: _prop_types2.default.string,
	  message: _prop_types2.default.oneOfType([_prop_types2.default.element, _prop_types2.default.string, _prop_types2.default.array])
	}, _temp)) || _class);
	exports.default = FlashContent;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	var _icon = __webpack_require__(119);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FlashDismiss = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(FlashDismiss, _Component);

	  function FlashDismiss(props) {
	    _classCallCheck(this, FlashDismiss);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlashDismiss).call(this, props));

	    _this.state = {
	      themeClassKey: 'flash.dismiss flash.' + _this.props.type + '.content'
	    };
	    return _this;
	  }

	  _createClass(FlashDismiss, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className(), onClick: this.props.onClick },
	        _react2.default.createElement(_icon2.default, { type: 'close' })
	      );
	    }
	  }]);

	  return FlashDismiss;
	}(_react.Component), _class2.propTypes = {
	  type: _prop_types2.default.string,
	  text: _prop_types2.default.string,
	  onClick: _prop_types2.default.func
	}, _temp)) || _class);
	exports.default = FlashDismiss;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _theme = __webpack_require__(31);

	var _theme2 = _interopRequireDefault(_theme);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	var _tooltip_mixin = __webpack_require__(61);

	var _tooltip_mixin2 = _interopRequireDefault(_tooltip_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Icon = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default, _tooltip_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Icon, _Component);

	  function Icon(props) {
	    _classCallCheck(this, Icon);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this, props));

	    _this.state = {
	      themeClassKey: 'icon'
	    };
	    return _this;
	  }

	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'i',
	        _extends({ className: this.getTooltipClassName()
	        }, this.tooltipAttributes(), this.propsWithoutCSS()),
	        this.iconType()
	      );
	    }
	  }, {
	    key: 'iconType',
	    value: function iconType() {
	      var iconType = _theme2.default.getProp('icon.' + this.props.type);
	      if (!iconType) {
	        iconType = this.props.type;
	      }

	      return iconType;
	    }
	  }]);

	  return Icon;
	}(_react.Component), _class2.propTypes = {
	  type: _prop_types2.default.string
	}, _class2.defaultProps = {
	  type: ''
	}, _temp)) || _class);
	exports.default = Icon;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _reactAddonsCssTransitionGroup = __webpack_require__(121);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	var _flash_content = __webpack_require__(117);

	var _flash_content2 = _interopRequireDefault(_flash_content);

	var _flash_dismiss = __webpack_require__(118);

	var _flash_dismiss2 = _interopRequireDefault(_flash_dismiss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Flash = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Flash, _Component);

	  function Flash(props) {
	    _classCallCheck(this, Flash);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Flash).call(this, props));

	    _this.dismiss = function () {
	      _this.setState({ dismissed: true });
	      _this.props.onDismiss();
	    };

	    _this.state = {
	      themeClassKey: 'flash flash.' + _this.props.type,
	      dismissed: _this.props.dismissed
	    };
	    return _this;
	  }

	  _createClass(Flash, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({ dismissed: nextProps.dismissed });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.dismissTimeout > 0) {
	        this.setDismissTimeout();
	      }
	    }
	  }, {
	    key: 'renderFlash',
	    value: function renderFlash() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className(), ref: 'flash' },
	        _react2.default.createElement(_flash_content2.default, this.props),
	        this.props.canDismiss ? _react2.default.createElement(FlashDismiss, _extends({}, this.props, { onClick: this.dismiss })) : ''
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          transitionName: 'dismiss',
	          transitionAppear: true,
	          transitionAppearTimeout: 500,
	          transitionEnterTimeout: 500,
	          transitionLeaveTimeout: 500
	        },
	        this.state.dismissed ? '' : this.renderFlash()
	      );
	    }
	  }, {
	    key: 'setDismissTimeout',
	    value: function setDismissTimeout() {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.dismiss();
	      }, this.props.dismissTimeout);
	    }
	  }]);

	  return Flash;
	}(_react.Component), _class2.propTypes = {
	  type: _prop_types2.default.oneOf(['info', 'warning', 'error', 'success']),
	  message: _prop_types2.default.node,
	  dismissTimeout: _prop_types2.default.number,
	  canDismiss: _prop_types2.default.bool,
	  onDismiss: _prop_types2.default.func,
	  dismissed: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  type: 'info',
	  dismissTimeout: -1,
	  canDismiss: true,
	  dismissed: false,
	  message: '',
	  onDismiss: function onDismiss() {
	    return true;
	  }
	}, _temp)) || _class);
	exports.default = Flash;

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputGroup = exports.FormButtonGroup = exports.Form = exports.BulkEditForm = undefined;

	var _bulk_edit_form = __webpack_require__(123);

	var _bulk_edit_form2 = _interopRequireDefault(_bulk_edit_form);

	var _form = __webpack_require__(124);

	var _form2 = _interopRequireDefault(_form);

	var _form_button_group = __webpack_require__(125);

	var _form_button_group2 = _interopRequireDefault(_form_button_group);

	var _input_group = __webpack_require__(127);

	var _input_group2 = _interopRequireDefault(_input_group);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BulkEditForm = _bulk_edit_form2.default;
	exports.Form = _form2.default;
	exports.FormButtonGroup = _form_button_group2.default;
	exports.InputGroup = _input_group2.default;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _utils = __webpack_require__(8);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BulkEditForm = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(BulkEditForm, _Component);

	  function BulkEditForm(props) {
	    _classCallCheck(this, BulkEditForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BulkEditForm).call(this, props));

	    var disabled = [];
	    for (var i = 0; i < _this.props.inputGroups.length; i++) {
	      var inputs = _this.props.inputGroups[i].inputs;
	      for (var inputId in inputs) {
	        disabled.push(inputId);
	      }
	    }

	    _this.state = {
	      disabled: disabled,
	      inputKeys: _this.generateInputIds()
	    };
	    return _this;
	  }

	  _createClass(BulkEditForm, [{
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var inputComponents = [];

	      for (var i = 0; i < this.props.inputGroups.length; i++) {
	        var inputGroup = this.props.inputGroups[i];
	        this.generateInputs(inputComponents, inputGroup, i);
	      }

	      return inputComponents;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var formProps = _jquery2.default.extend({}, this.props);
	      delete formProps.inputGroups;

	      return _react2.default.createElement(
	        _components.Form,
	        formProps,
	        this.renderChildren()
	      );
	    }
	  }, {
	    key: 'generateInputIds',
	    value: function generateInputIds() {
	      var idsMap = {};
	      for (var i = 0; i < this.props.inputGroups.length; i++) {
	        var inputs = this.props.inputGroups[i].inputs;
	        for (var inputId in inputs) {
	          idsMap[inputId] = "input_" + inputId + _utils.uuid.v4();
	        }
	      }

	      return idsMap;
	    }
	  }, {
	    key: 'generateInputs',
	    value: function generateInputs(inputComponents, inputGroup, i) {
	      var inputIndex = 0;
	      var inputsProps = inputGroup.inputs;

	      inputComponents.push(_react2.default.createElement(
	        'h5',
	        { key: "header_" + i },
	        inputGroup.label
	      ));

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
	            inputComponents.push(_react2.default.createElement(_components.Input, _extends({}, inputProps, {
	              disabled: false,
	              data: this.props.data,
	              resource: inputGroup.resource || this.props.resource,
	              className: 'col m7 s10',
	              key: "value_" + inputId,
	              ref: "input_" + inputId,
	              component: 'hidden'
	            })));
	          } else {
	            inputComponents.push(_react2.default.createElement(
	              _components.Container,
	              { className: 'row', key: "container_" + inputId },
	              _react2.default.createElement(InputSwitch, {
	                id: switchId,
	                name: switchName,
	                onChange: this.handleSwitchChange,
	                className: 'switch col l3 m3 s2',
	                offLabel: '',
	                onLabel: '',
	                key: "switch_" + inputId
	              }),
	              _react2.default.createElement(_components.Input, _extends({}, inputProps, {
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
	    }
	  }, {
	    key: 'handleSwitchChange',
	    value: function handleSwitchChange(event) {
	      var sw = event.target;
	      var inputId = sw.id.replace(/^enable_/, '');

	      if (sw.name.indexOf('[') !== -1) {
	        inputId = sw.name.split('[').pop().replace(']', '');
	      }

	      var disabled = _jquery2.default.extend([], this.state.disabled);

	      if (!sw.checked) {
	        disabled.push(inputId);
	      } else {
	        disabled.splice(disabled.indexOf(inputId), 1);
	      }

	      var inputKeys = this.state.inputKeys;
	      inputKeys[inputId] = "input_" + inputId + _utils.uuid.v4();
	      this.setState({ disabled: disabled, inputKeys: inputKeys });
	    }
	  }]);

	  return BulkEditForm;
	}(_react.Component), _class2.propTypes = {
	  inputs: _prop_types2.default.object,
	  data: _prop_types2.default.object,
	  action: _prop_types2.default.string,
	  method: _prop_types2.default.string,
	  dataType: _prop_types2.default.string,
	  contentType: _prop_types2.default.string,
	  style: _prop_types2.default.string,
	  resource: _prop_types2.default.string,
	  submitButton: _prop_types2.default.object,
	  otherButtons: _prop_types2.default.array,
	  isLoading: _prop_types2.default.bool,
	  onSubmit: _prop_types2.default.func,
	  onReset: _prop_types2.default.func
	}, _class2.defaultProps = {
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
	}, _temp)) || _class);
	exports.default = BulkEditForm;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.ContainerMixin, _mixins.FormErrorHandlerMixin, _mixins.FormSuccessHandlerMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(Form, _Component);

	  function Form() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Form);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      isLoading: null
	    }, _this.handleSubmit = function (event) {
	      event.nativeEvent.preventDefault();
	      var postData = _this.serialize();
	      _this.props.onSubmit(event, postData);
	      FormActions.submit(_this.props.id, event, postData);

	      if (!event.isDefaultPrevented()) {
	        _this.setState({ isLoading: true, errors: [], showSuccessFlash: false });
	        _this.submit(postData);
	      }
	    }, _this.handleReset = function (event) {
	      _this.props.onReset(event);
	      FormActions.reset(_this.props.id, event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Form, [{
	    key: 'renderMethodTag',
	    value: function renderMethodTag() {
	      return _react2.default.createElement('input', { name: '_method', type: 'hidden', value: this.props.method });
	    }
	  }, {
	    key: 'renderInputs',
	    value: function renderInputs() {
	      if (!this.props.inputs || _jquery2.default.isEmptyObject(this.props.inputs)) {
	        return [];
	      }

	      return _react2.default.createElement(_components.InputGroup, _extends({}, this.propsWithoutCSS(), { formStyle: this.props.style, errors: this.state.errors, ref: 'inputGroup' }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { action: this.props.action,
	          method: this.props.method == 'PUT' && !this.props.ajaxSubmit ? 'POST' : this.props.method,
	          encType: this.parseFormEncType(),
	          id: this.props.id,
	          onSubmit: this.handleSubmit,
	          onReset: this.handleReset,
	          className: this.className(),
	          hidden: this.props.hidden,
	          visible: this.props.visible,
	          ref: 'form' },
	        this.renderFlashErrors(),
	        this.renderFlashSuccess(),
	        this.renderInputs(),
	        this.renderMethodTag(),
	        this.renderChildren(),
	        _react2.default.createElement(_components.FormButtonGroup, _extends({}, this.propsWithoutCSS(), { isLoading: this.isLoading() }))
	      );
	    }
	  }, {
	    key: 'propsToForward',
	    value: function propsToForward() {
	      return ['resource', 'data', 'readOnly', 'disabled'];
	    }
	  }, {
	    key: 'parseFormEncType',
	    value: function parseFormEncType() {
	      if (!!this.props.multipart) {
	        return "multipart/form-data";
	      } else {
	        return "application/x-www-form-urlencoded";
	      }
	    }
	  }, {
	    key: 'propsToForwardMapping',
	    value: function propsToForwardMapping() {
	      return {
	        errors: this.state.errors,
	        formStyle: this.props.style
	      };
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      var form = ReactDOM.findDOMNode(this.refs.form);
	      return (0, _jquery2.default)(form).serializeObject();
	    }
	  }, {
	    key: 'submit',
	    value: function submit(postData) {
	      if (!!this.props.ajaxSubmit) {
	        this.ajaxSubmit(postData);
	      } else {
	        this.formSubmit();
	      }
	    }
	  }, {
	    key: 'ajaxSubmit',
	    value: function ajaxSubmit(postData) {
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
	        submitOptions = _jquery2.default.extend({}, submitOptions, multipartOptions);
	      }

	      _jquery2.default.ajax(submitOptions);
	    }
	  }, {
	    key: 'formSubmit',
	    value: function formSubmit() {
	      var formNode = ReactDOM.findDOMNode(this.refs.form);
	      formNode.submit();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var formNode = ReactDOM.findDOMNode(this.refs.form);
	      formNode.reset();
	    }
	  }, {
	    key: 'haveNativeReset',
	    value: function haveNativeReset() {
	      return true;
	    }
	  }, {
	    key: 'isLoading',
	    value: function isLoading() {
	      var isLoading = this.state.isLoading;
	      if (isLoading === null) {
	        isLoading = this.props.isLoading;
	      }

	      return isLoading;
	    }
	  }]);

	  return Form;
	}(_react.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  inputs: _prop_types2.default.object,
	  data: _prop_types2.default.object,
	  action: _prop_types2.default.string,
	  method: _prop_types2.default.string,
	  dataType: _prop_types2.default.string,
	  contentType: _prop_types2.default.string,
	  multipart: _prop_types2.default.bool,
	  style: _prop_types2.default.string,
	  resource: _prop_types2.default.string,
	  ajaxSubmit: _prop_types2.default.bool,
	  isLoading: _prop_types2.default.bool,
	  disabled: _prop_types2.default.bool,
	  readOnly: _prop_types2.default.bool,
	  inputWrapperComponent: _prop_types2.default.oneOfType([_prop_types2.default.func, _prop_types2.default.element, _prop_types2.default.string]),
	  submitButton: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.bool]),
	  otherButtons: _prop_types2.default.array,
	  onSubmit: _prop_types2.default.func,
	  onReset: _prop_types2.default.func
	}, _class2.defaultProps = {
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
	  inputWrapperComponent: null,
	  submitButton: {
	    name: 'actions.send',
	    icon: 'send'
	  },
	  otherButtons: [],
	  onSubmit: function onSubmit(event, postData) {},
	  onReset: function onReset(event) {}
	}, _temp2)) || _class);
	exports.default = Form;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _isEmpty = __webpack_require__(126);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormButtonGroup = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(FormButtonGroup, _Component);

	  function FormButtonGroup() {
	    _classCallCheck(this, FormButtonGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FormButtonGroup).apply(this, arguments));
	  }

	  _createClass(FormButtonGroup, [{
	    key: 'renderOtherButtons',
	    value: function renderOtherButtons() {
	      if (!(0, _isEmpty2.default)(this.props.inputs) && this.isAllInputsHidden()) {
	        return '';
	      }

	      var otherButtonsProps = this.props.otherButtons;
	      var otherButtons = [];

	      for (var i = 0; i < otherButtonsProps.length; i++) {
	        var otherButtonProps = otherButtonsProps[i];
	        otherButtons.push(_react2.default.createElement(_components.Button, _extends({}, otherButtonProps, { key: otherButtonProps.name })));
	      }

	      return otherButtons;
	    }
	  }, {
	    key: 'renderSubmitButton',
	    value: function renderSubmitButton() {
	      if (!(0, _isEmpty2.default)(this.props.inputs) && this.isAllInputsHidden() || !this.props.submitButton) {
	        return '';
	      }

	      var submitButton = [];
	      submitButton.push(_react2.default.createElement(_components.Button, _extends({}, this.submitButtonProps(), { ref: 'submitButton', key: 'submit_button' })));
	      return submitButton;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        this.renderOtherButtons(),
	        this.renderSubmitButton()
	      );
	    }
	  }, {
	    key: 'isAllInputsHidden',
	    value: function isAllInputsHidden() {
	      var allHidden = true;
	      var inputs = this.props.inputs;

	      for (var property in inputs) {
	        if (inputs.hasOwnProperty(property)) {
	          var input = inputs[property];
	          if (input.component !== 'hidden') return allHidden = false;
	        }
	      }

	      return allHidden;
	    }
	  }, {
	    key: 'submitButtonProps',
	    value: function submitButtonProps() {
	      var isLoading = this.props.isLoading;
	      return _jquery2.default.extend({}, this.props.submitButton, {
	        type: "submit",
	        disabled: isLoading,
	        isLoading: isLoading
	      });
	    }
	  }]);

	  return FormButtonGroup;
	}(_react.Component), _class2.propTypes = {
	  inputs: _prop_types2.default.object,
	  submitButton: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.bool]),
	  otherButtons: _prop_types2.default.array,
	  isLoading: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  themeClassKey: 'form.buttonGroup',
	  inputs: {},
	  submitButton: {
	    name: 'actions.send',
	    icon: 'send'
	  },
	  otherButtons: [],
	  isLoading: false
	}, _temp)) || _class);
	exports.default = FormButtonGroup;

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = require("lodash/isEmpty");

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _filter = __webpack_require__(128);

	var _filter2 = _interopRequireDefault(_filter);

	var _merge = __webpack_require__(58);

	var _merge2 = _interopRequireDefault(_merge);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputGroup = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(InputGroup, _Component);

	  function InputGroup() {
	    _classCallCheck(this, InputGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputGroup).apply(this, arguments));
	  }

	  _createClass(InputGroup, [{
	    key: 'renderInputs',
	    value: function renderInputs() {
	      var inputsProps = this.props.inputs;
	      var inputComponents = [];
	      var inputIndex = 0;
	      var InputWrapperComponent = this.getInputWrapperComponent();

	      for (var inputId in inputsProps) {
	        if (inputsProps.hasOwnProperty(inputId)) {
	          var inputProps = inputsProps[inputId];
	          if (!inputProps.id) {
	            inputProps.id = inputId;
	          }

	          inputComponents.push(_react2.default.createElement(InputWrapperComponent, _extends({
	            disabled: this.props.disabled,
	            readOnly: this.props.readOnly,
	            formStyle: this.props.formStyle,
	            inputWrapperComponent: this.props.inputWrapperComponent,
	            key: "input_" + inputIndex
	          }, inputProps, {
	            data: this.props.data,
	            errors: this.props.errors,
	            resource: this.props.resource,
	            ref: "input_" + inputIndex
	          })));

	          inputIndex++;
	        }
	      }

	      return inputComponents;
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      if (this.props.label === null) {
	        return '';
	      }

	      return _react2.default.createElement(
	        'h5',
	        null,
	        this.props.label
	      );
	    }
	  }, {
	    key: 'renderDivider',
	    value: function renderDivider() {
	      if (!this.props.separator) {
	        return '';
	      }

	      //TODO: refatorar para um componente
	      var className = Realize.themes.getCssClass('form.inputGroup.divider');
	      return _react2.default.createElement(
	        'div',
	        { className: className },
	        _react2.default.createElement('hr', null)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.wrapperClassName },
	        _react2.default.createElement(
	          'div',
	          { className: this.inputGroupClassName() },
	          this.renderLabel(),
	          this.renderInputs(),
	          this.props.children
	        ),
	        this.renderDivider()
	      );
	    }
	  }, {
	    key: 'inputGroupClassName',
	    value: function inputGroupClassName() {
	      var className = this.className();
	      if (this.props.label !== null) {
	        className += ' ' + Realize.themes.getCssClass('form.inputGroup.section');
	      }

	      return className;
	    }
	  }, {
	    key: 'getInputWrapperComponent',
	    value: function getInputWrapperComponent() {
	      var inputWrapperComponent = this.props.inputWrapperComponent;
	      if (typeof inputWrapperComponent == "string") {
	        return window[inputWrapperComponent];
	      } else if (typeof inputWrapperComponent == "function") {
	        return inputWrapperComponent;
	      } else {
	        return window.Input;
	      }
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      var inputRefs = (0, _filter2.default)(this.refs, function (ref, refName) {
	        return refName.match(/^input_/);
	      });

	      var inputValues = {};
	      inputRefs.forEach(function (inputRef) {
	        (0, _merge2.default)(inputValues, inputRef.serialize());
	      });

	      return inputValues;
	    }
	  }]);

	  return InputGroup;
	}(_react.Component), _class2.propTypes = {
	  inputs: _prop_types2.default.object,
	  data: _prop_types2.default.object,
	  errors: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.array]),
	  resource: _prop_types2.default.string,
	  disabled: _prop_types2.default.bool,
	  readOnly: _prop_types2.default.bool,
	  label: _prop_types2.default.string,
	  separator: _prop_types2.default.bool,
	  formStyle: _prop_types2.default.string,
	  wrapperClassName: _prop_types2.default.string,
	  inputWrapperComponent: _prop_types2.default.oneOfType([_prop_types2.default.func, _prop_types2.default.element, _prop_types2.default.string])
	}, _class2.defaultProps = {
	  inputs: {},
	  data: {},
	  errors: {},
	  formStyle: 'default',
	  label: null,
	  separator: false,
	  disabled: false,
	  readOnly: false,
	  themeClassKey: 'form.inputGroup',
	  wrapperClassName: 'wrapper_input_group',
	  inputWrapperComponent: null
	}, _temp)) || _class);
	exports.default = InputGroup;

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = require("lodash/filter");

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Grid = exports.GridTable = exports.GridPagination = exports.GridFilter = undefined;

	var _grid_filter = __webpack_require__(130);

	var _grid_filter2 = _interopRequireDefault(_grid_filter);

	var _grid_pagination = __webpack_require__(131);

	var _grid_pagination2 = _interopRequireDefault(_grid_pagination);

	var _grid_table = __webpack_require__(132);

	var _grid_table2 = _interopRequireDefault(_grid_table);

	var _grid = __webpack_require__(133);

	var _grid2 = _interopRequireDefault(_grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GridFilter = _grid_filter2.default;
	exports.GridPagination = _grid_pagination2.default;
	exports.GridTable = _grid_table2.default;
	exports.Grid = _grid2.default;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GridFilter = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(GridFilter, _Component);

	  function GridFilter(props) {
	    _classCallCheck(this, GridFilter);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GridFilter).call(this, props));

	    _this.state = {
	      themeClassKey: 'grid.filter.wrapper'
	    };
	    return _this;
	  }

	  _createClass(GridFilter, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var collapsible = ReactDOM.findDOMNode(this.refs.collapsible);
	      if (!!collapsible) {
	        $(collapsible).collapsible();
	      }
	    }
	  }, {
	    key: 'renderFilters',
	    value: function renderFilters() {
	      if (this.props.collapsible) {
	        return this.renderCollapsibleFilter();
	      } else {
	        return this.renderFormFilters();
	      }
	    }
	  }, {
	    key: 'renderCollapsibleFilter',
	    value: function renderCollapsibleFilter() {
	      var component = [];

	      component.push(_react2.default.createElement(
	        'ul',
	        { className: 'collapsible', 'data-collapsible': 'accordion', ref: 'collapsible', key: 'collapsible_form' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'collapsible-header' },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Filtrar'
	            ),
	            _react2.default.createElement(
	              'i',
	              { className: 'material-icons' },
	              'filter_list'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'collapsible-body' },
	            this.renderFormFilters()
	          )
	        )
	      ));

	      return component;
	    }
	  }, {
	    key: 'renderFormFilters',
	    value: function renderFormFilters() {
	      return _react2.default.createElement(_components.Form, _extends({}, this.props, { otherButtons: [this.props.clearButton], style: 'filter', ref: 'form' }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        this.renderFilters()
	      );
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      return this.refs.form.serialize();
	    }
	  }]);

	  return GridFilter;
	}(_react.Component), _class2.propTypes = {
	  inputs: _prop_types2.default.object,
	  action: _prop_types2.default.string,
	  method: _prop_types2.default.string,
	  submitButton: _prop_types2.default.object,
	  clearButton: _prop_types2.default.object,
	  onSuccess: _prop_types2.default.func,
	  onError: _prop_types2.default.func,
	  onSubmit: _prop_types2.default.func,
	  onReset: _prop_types2.default.func,
	  isLoading: _prop_types2.default.bool,
	  collapsible: _prop_types2.default.bool
	}, _class2.defaultProps = {
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
	}, _temp)) || _class);
	exports.default = GridFilter;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GridPagination = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(GridPagination, _Component);

	  function GridPagination() {
	    _classCallCheck(this, GridPagination);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridPagination).apply(this, arguments));
	  }

	  _createClass(GridPagination, [{
	    key: 'renderRangePagination',
	    value: function renderRangePagination() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'range_pagination' },
	        _react2.default.createElement(
	          'span',
	          null,
	          this.rangePaginationText()
	        )
	      );
	    }
	  }, {
	    key: 'renderPerPage',
	    value: function renderPerPage() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'per_page' },
	        _react2.default.createElement(_components.Input, { value: this.props.perPage, component: 'select',
	          includeBlank: false, clearTheme: true,
	          className: 'form__input input-field',
	          options: this.props.perPageOptions,
	          onChange: this.changePerPage
	        })
	      );
	    }
	  }, {
	    key: 'renderPagination',
	    value: function renderPagination() {
	      var totalRowsCount = this.props.count;
	      var pageRowsCount = this.props.pageRowsCount;
	      if (totalRowsCount <= pageRowsCount) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_components.Pagination, {
	          page: this.props.page,
	          count: this.props.count,
	          perPage: this.props.perPage,
	          window: this.props.window,
	          onPagination: this.props.onPagination,
	          type: this.props.type
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        this.renderPagination(),
	        this.renderRangePagination(),
	        this.renderPerPage()
	      );
	    }
	  }, {
	    key: 'changePerPage',
	    value: function changePerPage(event) {
	      var perPage = parseInt(event.currentTarget.value);
	      this.props.onChangePerPage(perPage);
	    }
	  }, {
	    key: 'rangePaginationText',
	    value: function rangePaginationText() {
	      var perPage = this.props.perPage;
	      var page = this.props.page;
	      var pageRowsCount = this.props.pageRowsCount;

	      var firstElement = perPage * page - (perPage - 1);
	      var lastElement = pageRowsCount < perPage ? this.props.count : perPage * page;
	      var totalElement = this.props.count;

	      return firstElement + ' - ' + lastElement + ' de ' + totalElement;
	    }
	  }]);

	  return GridPagination;
	}(_react.Component), _class2.propTypes = {
	  count: _prop_types2.default.number,
	  page: _prop_types2.default.number,
	  perPage: _prop_types2.default.number,
	  window: _prop_types2.default.number,
	  onPagination: _prop_types2.default.func,
	  onChangePerPage: _prop_types2.default.func,
	  pageRowsCount: _prop_types2.default.number,
	  type: _prop_types2.default.string,
	  perPageOptions: _prop_types2.default.array
	}, _class2.defaultProps = {
	  themeClassKey: 'grid.pagination',
	  onPagination: function onPagination(page) {
	    return true;
	  },
	  onChangePerPage: function onChangePerPage(perPage) {
	    return true;
	  }
	}, _temp)) || _class);
	exports.default = GridPagination;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GridTable = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(GridTable, _Component);

	  function GridTable() {
	    _classCallCheck(this, GridTable);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridTable).apply(this, arguments));
	  }

	  _createClass(GridTable, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        _react2.default.createElement(_components.Table, _extends({}, this.propsWithoutCSS(), { className: this.props.tableClassName, clearTheme: this.props.clearThemeTable }))
	      );
	    }
	  }]);

	  return GridTable;
	}(_react.Component), _class2.propTypes = {}, _class2.defaultProps = {
	  themeClassKey: 'grid.table'
	}, _temp)) || _class);
	exports.default = GridTable;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _realize = __webpack_require__(59);

	var _realize2 = _interopRequireDefault(_realize);

	var _utils = __webpack_require__(8);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Grid = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RequestHandlerMixin, _mixins.RestActionsMixin, _mixins.GridActionsMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Grid, _Component);

	  function Grid(props) {
	    _classCallCheck(this, Grid);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props));

	    _this.onPagination = function (page) {
	      _this.state.page = page;
	      if (_this.state.allSelected) {
	        _this.state.selectedRowIds = [];
	      }

	      _this.state.allSelected = false;
	      _this.loadData();
	    };

	    _this.onChangePerPage = function (perPage) {
	      _this.state.perPage = perPage;
	      _this.paginationConfigs().perPage = perPage;

	      if (_this.state.allSelected) _this.state.selectedRowIds = [];

	      _this.state.allSelected = false;
	      _this.loadData();
	    };

	    _this.onFilterSubmit = function (event, postData) {
	      _this.props.onFilterSubmit(event, postData);

	      if (!event.isDefaultPrevented()) {
	        event.preventDefault();

	        _this.state.selectedRowIds = [];
	        _this.state.allSelected = false;
	        _this.state.filterData = postData;
	        _this.state.page = 1;
	        _this.loadData();
	      }
	    };

	    _this.onSort = function (sortData) {
	      _this.state.sortData = sortData;
	      _this.state.page = 1;
	      _this.loadData();
	    };

	    _this.handleLoad = function (data) {
	      var dataRows = (0, _utils.getProp)(_this.props.dataRowsParam, data);
	      var count = (0, _utils.getProp)(_this.props.countParam, data);

	      _this.setState({
	        gridIsLoading: false,
	        dataRows: dataRows,
	        count: count
	      }, function () {
	        this.props.onLoadSuccess(data);
	      }.bind(_this));
	    };

	    _this.handleLoadError = function (xhr, status, error) {
	      _this.props.onLoadError(xhr, status, error);
	      _this.setState({ gridIsLoading: false });
	      console.log('Grid Load Error:' + error);
	    };

	    _this.selectDataRows = function (event, selectedRowIds, selectedData) {
	      _this.props.onSelectDataRow(event, selectedRowIds);
	      if (!event.isDefaultPrevented()) {
	        event.preventDefault();

	        var nextState = _this.getSelectDataRowsState(selectedRowIds, selectedData);
	        _this.setState(nextState);
	      }
	    };

	    _this.getSelectDataRowsState = function (selectedRowIds, selectedData) {
	      var nextState = { selectedRowIds: selectedRowIds, allSelected: false };

	      if (!!selectedData && _this.props.selectable === 'one') nextState.selectedData = selectedData;

	      return nextState;
	    };

	    _this.removeSelection = function (event) {
	      _this.props.onRemoveSelection(event);
	      if (!event.isDefaultPrevented()) {
	        event.preventDefault();

	        _this.setState({
	          selectedRowIds: [],
	          allSelected: false
	        });
	      }
	    };

	    _this.selectAllRows = function (event) {
	      _this.props.onSelectAllRows(event);
	      if (!event.isDefaultPrevented()) {
	        event.preventDefault();

	        _this.setState({
	          allSelected: true
	        });
	      }
	    };

	    _this.state = {
	      dataRows: _this.props.data.dataRows,
	      selectedData: {},
	      selectedRowIds: [],
	      allSelected: false,
	      count: _this.props.data.count,
	      page: 1,
	      perPage: _this.initialPerPage(),
	      filterData: {},
	      sortData: _this.props.sortData,
	      gridIsLoading: _this.props.isLoading
	    };
	    return _this;
	  }

	  _createClass(Grid, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({
	        filterData: this.getInitialFilterData()
	      }, function () {
	        if (!!this.props.eagerLoad) {
	          this.loadData();
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'renderPaginationOnTop',
	    value: function renderPaginationOnTop() {
	      if (!!this.props.paginationOnTop) return this.renderPagination();
	    }
	  }, {
	    key: 'renderFilter',
	    value: function renderFilter() {
	      if (_jquery2.default.isEmptyObject(this.props.filter)) {
	        return '';
	      }

	      return _react2.default.createElement(_components.GridFilter, _extends({
	        action: this.props.url
	      }, this.props.filter, {
	        isLoading: this.state.gridIsLoading,
	        onSubmit: this.onFilterSubmit,
	        ref: 'filter'
	      }));
	    }
	  }, {
	    key: 'renderTable',
	    value: function renderTable() {
	      return _react2.default.createElement(_components.GridTable, {
	        resource: this.props.resource,
	        columns: this.props.columns,
	        sortConfigs: this.sortConfigs(),
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
	        clearThemeTable: this.props.clearThemeTable,
	        emptyMessage: this.props.emptyMessage
	      });
	    }
	  }, {
	    key: 'renderPagination',
	    value: function renderPagination() {
	      if (this.props.pagination) {
	        return _react2.default.createElement(_components.GridPagination, _extends({}, this.paginationConfigs(), {
	          perPage: this.state.perPage,
	          page: this.state.page,
	          count: this.state.count,
	          onPagination: this.onPagination,
	          onChangePerPage: this.onChangePerPage,
	          pageRowsCount: this.state.dataRows.length
	        }));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.gridClassName(), ref: 'grid' },
	        this.renderFilter(),
	        this.renderPaginationOnTop(),
	        this.renderTable(),
	        this.renderPagination()
	      );
	    }
	  }, {
	    key: 'backToInitialState',
	    value: function backToInitialState() {
	      this.setState({
	        selectedRowIds: [],
	        allSelected: false,
	        page: 1
	      });

	      this.setState({
	        filterData: this.getInitialFilterData()
	      }, function () {
	        this.loadData();
	      }.bind(this));
	    }
	  }, {
	    key: 'initialPerPage',
	    value: function initialPerPage() {
	      return this.paginationConfigs().perPage;
	    }
	  }, {
	    key: 'gridClassName',
	    value: function gridClassName() {
	      var className = this.className();
	      if (this.state.gridIsLoading) {
	        className += ' loading';
	      }

	      return className;
	    }
	  }, {
	    key: 'paginationConfigs',
	    value: function paginationConfigs() {
	      return _jquery2.default.extend({}, _realize2.default.config.grid.pagination, this.props.paginationConfigs);
	    }
	  }, {
	    key: 'sortConfigs',
	    value: function sortConfigs() {
	      return _jquery2.default.extend({}, _realize2.default.config.grid.sort, this.props.sortConfigs);
	    }
	  }, {
	    key: 'getInitialFilterData',
	    value: function getInitialFilterData() {
	      var gridFilterNode = ReactDOM.findDOMNode(this.refs.filter);
	      var filterForm = (0, _jquery2.default)(gridFilterNode).find('form');

	      return filterForm.serializeObject();
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData() {
	      this.setState({ gridIsLoading: true });
	      var postData = this.buildPostData();
	      var filterProps = this.props.filter;
	      var filterMethod = filterProps.method || 'GET';
	      var filterDataType = filterProps.dataType || 'json';

	      _jquery2.default.ajax({
	        url: this.getRestActionUrl('index'),
	        method: filterMethod,
	        dataType: filterDataType,
	        data: postData,
	        success: this.handleLoad,
	        error: this.handleLoadError
	      });
	    }
	  }, {
	    key: 'buildPostData',
	    value: function buildPostData() {
	      var postData = _jquery2.default.extend({}, this.state.filterData);

	      _jquery2.default.extend(postData, this.buildPaginationPostData());
	      if (!_jquery2.default.isEmptyObject(this.state.sortData)) {
	        _jquery2.default.extend(postData, this.buildSortPostData());
	      }

	      return postData;
	    }
	  }, {
	    key: 'buildPaginationPostData',
	    value: function buildPaginationPostData() {
	      var paginationPostData = {};

	      var paginationParam = this.paginationConfigs().param;
	      var paginationParamPerPage = 'per_page';

	      paginationPostData[paginationParam] = this.state.page;
	      paginationPostData[paginationParamPerPage] = this.state.perPage;

	      return paginationPostData;
	    }
	  }, {
	    key: 'buildSortPostData',
	    value: function buildSortPostData() {
	      var sortConfigs = this.sortConfigs();

	      var sortParam = sortConfigs.param;
	      var sortDirectionParam = sortConfigs.directionParam;
	      var sortPostData = {};
	      sortPostData[sortParam] = this.parseSortPostDataValue();
	      sortPostData[sortDirectionParam] = this.state.sortData.direction;

	      return sortPostData;
	    }
	  }, {
	    key: 'parseSortPostDataValue',
	    value: function parseSortPostDataValue() {
	      var sortValueFormat = this.sortConfigs().fieldValueFormat;
	      var field = this.state.sortData.field;
	      var direction = this.state.sortData.direction;

	      if (!sortValueFormat) {
	        return field;
	      }

	      return sortValueFormat.replace(/%\{field}/, field).replace(/%\{direction}/, direction);
	    }

	    /* Selection handlers */

	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      return this.state.dataRows;
	    }
	  }]);

	  return Grid;
	}(_react.Component), _class2.propTypes = {
	  url: _prop_types2.default.string,
	  eagerLoad: _prop_types2.default.bool,
	  resource: _prop_types2.default.string,
	  paginationConfigs: _prop_types2.default.object,
	  sortConfigs: _prop_types2.default.object,
	  sortData: _prop_types2.default.object,
	  filter: _prop_types2.default.object,
	  columns: _prop_types2.default.object,
	  data: _prop_types2.default.object,
	  emptyMessage: _prop_types2.default.localizedString,
	  dataRowsParam: _prop_types2.default.string,
	  countParam: _prop_types2.default.string,
	  selectedRowIdsParam: _prop_types2.default.string,
	  dataRowIdField: _prop_types2.default.string,
	  isLoading: _prop_types2.default.bool,
	  selectable: _prop_types2.default.oneOf(['multiple', 'none', 'one']),
	  tableClassName: _prop_types2.default.string,
	  onLoadSuccess: _prop_types2.default.func,
	  onLoadError: _prop_types2.default.func,
	  rowSelectableFilter: _prop_types2.default.func,
	  customTableHeader: _prop_types2.default.string,
	  forceShowSelectAllButton: _prop_types2.default.bool,
	  onClickRow: _prop_types2.default.func,
	  tableRowCssClass: _prop_types2.default.func,
	  paginationOnTop: _prop_types2.default.bool,
	  clearThemeTable: _prop_types2.default.bool,
	  pagination: _prop_types2.default.bool,
	  perPageOptions: _prop_types2.default.array,
	  onFilterSubmit: _prop_types2.default.func,
	  onSelectDataRow: _prop_types2.default.func,
	  onRemoveSelection: _prop_types2.default.func,
	  onSelectAllRows: _prop_types2.default.func
	}, _class2.defaultProps = {
	  themeClassKey: 'grid',
	  eagerLoad: false,
	  paginationConfigs: {},
	  sortConfigs: {},
	  sortData: {},
	  filter: {},
	  columns: {},
	  dataRowsParam: 'data',
	  countParam: 'count',
	  selectedRowIdsParam: 'rowIds',
	  dataRowIdField: 'id',
	  isLoading: false,
	  selectable: 'multiple',
	  rowSelectableFilter: null,
	  customTableHeader: null,
	  forceShowSelectAllButton: false,
	  onClickRow: null,
	  tableRowCssClass: null,
	  paginationOnTop: true,
	  clearThemeTable: false,
	  pagination: true,
	  onLoadSuccess: function onLoadSuccess(data) {},
	  onLoadError: function onLoadError(xhr, status, error) {},
	  onFilterSubmit: function onFilterSubmit(event, postData) {},
	  onSelectDataRow: function onSelectDataRow(event, selectedRowIds) {},
	  onRemoveSelection: function onRemoveSelection(event) {},
	  onSelectAllRows: function onSelectAllRows(event) {},
	  data: {
	    dataRows: [],
	    count: 0
	  }
	}, _temp)) || _class);
	exports.default = Grid;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GridForm = undefined;

	var _grid_form = __webpack_require__(135);

	var _grid_form2 = _interopRequireDefault(_grid_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GridForm = _grid_form2.default;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _merge = __webpack_require__(58);

	var _merge2 = _interopRequireDefault(_merge);

	var _findIndex2 = __webpack_require__(136);

	var _findIndex3 = _interopRequireDefault(_findIndex2);

	var _utils = __webpack_require__(8);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GridForm = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RestActionsMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(GridForm, _Component);

	  function GridForm() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, GridForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(GridForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      formAction: 'create',
	      selectedDataRow: null,
	      selectedRowId: null,
	      isLoading: _this.props.isLoading,
	      clientSideData: []
	    }, _this.handleResetClick = function (event) {
	      var formRef = _this.refs.form;
	      if (!(typeof formRef.haveNativeReset == "function" && !!formRef.haveNativeReset())) {
	        _this.onReset(event);
	      }
	    }, _this.handleDestroy = function (data, status, xhr) {
	      _this.props.onDestroySuccess(data, status, xhr);
	      _this.loadGridData();
	    }, _this.handleDestroyError = function (xhr, status, error) {
	      _this.setState({ isLoading: false });
	      _this.props.onDestroyError(xhr, status, error);
	    }, _this.handleClientSideSubmit = function (event, postData) {
	      event.preventDefault();

	      var submittedDataRow = (0, _merge2.default)({}, postData);
	      var submittedDataRowIndex = _this.findClientSideDataIndex(submittedDataRow[_this.props.clientSideIdField]);

	      if (submittedDataRowIndex >= 0) {
	        _this.state.clientSideData.splice(submittedDataRowIndex, 1, submittedDataRow);
	      } else {
	        submittedDataRow[_this.props.clientSideIdField] = _utils.uuid.v4();
	        _this.state.clientSideData.push(submittedDataRow);
	      }

	      _this.setState({
	        formAction: 'create',
	        selectedRowId: null,
	        selectedDataRow: null
	      }, _this.props.onSuccess);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(GridForm, [{
	    key: 'renderForm',
	    value: function renderForm() {
	      if (this.props.readOnly) {
	        return;
	      }

	      var formProps = (0, _merge2.default)({ style: 'filter' }, this.props.form, {
	        action: this.getFormAction(),
	        data: this.state.selectedDataRow,
	        method: this.getFormMethod(),
	        resource: !!this.props.clientSide ? null : this.props.form.resource,
	        inputs: this.getFormInputs(),
	        errors: this.props.errors,
	        submitButton: this.getFormSubmitButton(),
	        otherButtons: this.getFormOtherButtons(),
	        onSubmit: this.onSubmit,
	        onReset: this.onReset,
	        onSuccess: this.onSuccess,
	        onError: this.onError,
	        key: "form_" + _utils.uuid.v4(),
	        ref: "form"
	      });

	      return _react2.default.createElement(this.props.formComponent, formProps, null);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        _react2.default.createElement(
	          'div',
	          { className: this.className() + "__form" },
	          this.renderForm()
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.className() + "__grid" },
	          _react2.default.createElement(Grid, _extends({}, this.getGridProps(), {
	            actionButtons: this.getActionButtons(),
	            ref: 'grid'
	          }))
	        )
	      );
	    }
	  }, {
	    key: 'getFormAction',
	    value: function getFormAction() {
	      if (!!this.props.clientSide) {
	        return null;
	      }

	      return this.getRestActionUrl(this.state.formAction, this.state.selectedRowId);
	    }
	  }, {
	    key: 'getFormMethod',
	    value: function getFormMethod() {
	      return this.getRestActionMethod(this.state.formAction);
	    }
	  }, {
	    key: 'getFormSubmitButton',
	    value: function getFormSubmitButton() {
	      if (this.state.formAction == 'create') {
	        return this.props.createButton;
	      } else if (this.state.formAction == 'update') {
	        return this.props.updateButton;
	      }

	      return '';
	    }
	  }, {
	    key: 'getFormOtherButtons',
	    value: function getFormOtherButtons() {
	      if (this.state.formAction == 'update') {
	        var cancelButtonProps = _jquery2.default.extend({}, this.props.cancelButton, {
	          type: "reset",
	          onClick: this.handleResetClick
	        });

	        return [cancelButtonProps];
	      }

	      return [];
	    }
	  }, {
	    key: 'getFormInputs',
	    value: function getFormInputs() {
	      var formInputs = this.props.form.inputs;
	      if (!!this.props.clientSide) {
	        formInputs[this.props.clientSideIdField] = { component: 'hidden' };
	      }

	      return formInputs;
	    }
	  }, {
	    key: 'getActionButtons',
	    value: function getActionButtons() {
	      var actionButtons = this.props.actionButtons || {};

	      if (!actionButtons.member) {
	        actionButtons.member = this.getDefaultMemberActionButtons();
	      }

	      if (!actionButtons.collection) {
	        actionButtons.collection = this.getDefaultCollectionActionButtons();
	      }

	      return actionButtons;
	    }
	  }, {
	    key: 'getDefaultMemberActionButtons',
	    value: function getDefaultMemberActionButtons() {
	      if (this.props.readOnly) {
	        return [];
	      }

	      return [this.getDefaultEditActionProps(), this.getDefaultDestroyActionProps()];
	    }
	  }, {
	    key: 'getDefaultCollectionActionButtons',
	    value: function getDefaultCollectionActionButtons() {
	      return [];
	    }
	  }, {
	    key: 'getDefaultEditActionProps',
	    value: function getDefaultEditActionProps() {
	      return _jquery2.default.extend({}, {
	        icon: 'edit',
	        onClick: this.editAction
	      }, this.props.editActionButton);
	    }
	  }, {
	    key: 'getDefaultDestroyActionProps',
	    value: function getDefaultDestroyActionProps() {
	      return _jquery2.default.extend({}, {
	        icon: 'destroy',
	        onClick: this.destroyAction
	      }, this.props.destroyActionButton);
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(event, postData) {
	      this.props.onSubmit(event, postData);
	      if (!!this.props.clientSide) {
	        this.handleClientSideSubmit(event, postData);
	      }
	    }
	  }, {
	    key: 'onSuccess',
	    value: function onSuccess(data, status, xhr) {
	      if (this.props.onSuccess(data, status, xhr)) {
	        this.loadGridData();
	        this.resetForm();
	      }
	    }
	  }, {
	    key: 'onError',
	    value: function onError(xhr, status, error) {
	      return this.props.onError(xhr, status, error);
	    }
	  }, {
	    key: 'onReset',
	    value: function onReset(event) {
	      this.setState({
	        formAction: 'create',
	        selectedRowId: null,
	        selectedDataRow: null
	      });

	      this.clearFormErrors();
	      this.props.onReset(event);
	    }
	  }, {
	    key: 'resetForm',
	    value: function resetForm() {
	      var formRef = this.refs.form;
	      if (typeof formRef.reset == "function") {
	        formRef.reset();
	      }
	    }
	  }, {
	    key: 'editAction',
	    value: function editAction(event, id, data) {
	      this.setState({
	        formAction: 'update',
	        selectedRowId: id,
	        selectedDataRow: data
	      });

	      this.clearFormErrors();
	    }
	  }, {
	    key: 'destroyAction',
	    value: function destroyAction(event, id) {
	      if (!!this.props.clientSide) {
	        this.destroyActionClientSide(event, id);
	      } else {
	        this.destroyActionServerSide(event, id);
	      }
	    }
	  }, {
	    key: 'destroyActionServerSide',
	    value: function destroyActionServerSide(event, id) {
	      var destroyUrl = this.getRestActionUrl('destroy', id);
	      var destroyMethod = this.getRestActionMethod('destroy');

	      if (!this.props.destroyConfirm || confirm(this.props.destroyConfirm)) {
	        this.setState({ isLoading: true });
	        this.resetForm();

	        _jquery2.default.ajax({
	          url: destroyUrl,
	          method: destroyMethod,
	          success: this.handleDestroy,
	          error: this.handleDestroyError
	        });
	      }
	    }
	  }, {
	    key: 'getGridProps',
	    value: function getGridProps() {
	      var gridProps = (0, _merge2.default)({}, this.propsWithoutCSS());
	      if (!!this.props.clientSide) {
	        (0, _merge2.default)(gridProps, {
	          url: '',
	          pagination: false,
	          selectable: 'none',
	          eagerLoad: false,
	          key: _utils.uuid.v4(),
	          dataRowIdField: this.props.clientSideIdField,
	          data: {
	            dataRows: this.state.clientSideData
	          },
	          sortConfigs: {
	            sortable: false
	          }
	        });
	      }

	      return gridProps;
	    }
	  }, {
	    key: 'destroyActionClientSide',
	    value: function destroyActionClientSide(event, id) {
	      var itemIndex = this.findClientSideDataIndex(id);

	      this.state.clientSideData.splice(itemIndex, 1);
	      this.forceUpdate(this.props.onDestroySuccess);
	    }
	  }, {
	    key: 'findClientSideDataIndex',
	    value: function findClientSideDataIndex(id) {
	      return _findIndex(this.state.clientSideData, function (item) {
	        return item[this.props.clientSideIdField] == id;
	      }.bind(this));
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      var gridRef = this.refs.grid;
	      return gridRef.serialize();
	    }
	  }, {
	    key: 'loadGridData',
	    value: function loadGridData() {
	      var gridRef = this.refs.grid;
	      gridRef.loadData();
	    }
	  }, {
	    key: 'clearFormErrors',
	    value: function clearFormErrors() {
	      var formRef = this.refs.form;
	      if (typeof formRef.clearErrors == "function") {
	        formRef.clearErrors();
	      }
	    }
	  }]);

	  return GridForm;
	}(_react.Component), _class2.propTypes = {
	  clientSide: _prop_types2.default.bool,
	  clientSideIdField: _prop_types2.default.string,
	  url: _prop_types2.default.string,
	  paginationConfigs: _prop_types2.default.object,
	  sortConfigs: _prop_types2.default.object,
	  sortData: _prop_types2.default.object,
	  filter: _prop_types2.default.object,
	  columns: _prop_types2.default.object,
	  data: _prop_types2.default.object,
	  dataRowsParam: _prop_types2.default.string,
	  countParam: _prop_types2.default.string,
	  actionButtons: _prop_types2.default.object,
	  form: _prop_types2.default.object,
	  createButton: _prop_types2.default.object,
	  updateButton: _prop_types2.default.object,
	  cancelButton: _prop_types2.default.object,
	  isLoading: _prop_types2.default.bool,
	  selectable: _prop_types2.default.oneOf(['multiple', 'none', 'one']),
	  eagerLoad: _prop_types2.default.bool,
	  readOnly: _prop_types2.default.bool,
	  formComponent: _prop_types2.default.func,
	  onSubmit: _prop_types2.default.func,
	  onReset: _prop_types2.default.func,
	  onSuccess: _prop_types2.default.func,
	  onError: _prop_types2.default.func,
	  onLoadSuccess: _prop_types2.default.func,
	  onLoadError: _prop_types2.default.func,
	  onDestroySuccess: _prop_types2.default.func,
	  onDestroyError: _prop_types2.default.func
	}, _class2.defaultProps = {
	  clientSide: false,
	  clientSideIdField: '_clientSideId',
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
	  selectable: 'multiple',
	  eagerLoad: true,
	  readOnly: false,
	  formComponent: _components.Form,
	  onSubmit: function onSubmit(event, postData) {},
	  onReset: function onReset(event) {},
	  onSuccess: function onSuccess(data, status, xhr) {
	    return true;
	  },
	  onError: function onError(xhr, status, error) {
	    return true;
	  },
	  onLoadSuccess: function onLoadSuccess(data) {},
	  onLoadError: function onLoadError(xhr, status, error) {},
	  onDestroySuccess: function onDestroySuccess(data) {},
	  onDestroyError: function onDestroyError(xhr, status, error) {}
	}, _temp2)) || _class);
	exports.default = GridForm;

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = require("lodash/findIndex");

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Header = exports.HeaderSection = exports.HeaderMenu = exports.HeaderButton = undefined;

	var _header_button = __webpack_require__(138);

	var _header_button2 = _interopRequireDefault(_header_button);

	var _header_menu = __webpack_require__(139);

	var _header_menu2 = _interopRequireDefault(_header_menu);

	var _header_section = __webpack_require__(142);

	var _header_section2 = _interopRequireDefault(_header_section);

	var _header = __webpack_require__(143);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.HeaderButton = _header_button2.default;
	exports.HeaderMenu = _header_menu2.default;
	exports.HeaderSection = _header_section2.default;
	exports.Header = _header2.default;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderButton = (_temp = _class = function (_Component) {
	  _inherits(HeaderButton, _Component);

	  function HeaderButton() {
	    _classCallCheck(this, HeaderButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderButton).apply(this, arguments));
	  }

	  _createClass(HeaderButton, [{
	    key: 'renderButton',
	    value: function renderButton() {
	      return _react2.default.createElement(
	        'a',
	        { href: this.props.href, ref: this.props.ref, onClick: this.props.onClick, target: this.props.target },
	        _react2.default.createElement(
	          'i',
	          { className: 'material-icons ' + this.props.iconAlign },
	          this.props.icon
	        ),
	        this.props.text
	      );
	    }
	  }, {
	    key: 'renderImage',
	    value: function renderImage() {
	      return _react2.default.createElement(
	        'a',
	        { className: 'brand-logo', href: this.props.href },
	        _react2.default.createElement('img', { src: this.props.imgSrc, alt: this.props.imgAlt })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var button = '';
	      if (this.props.imgSrc) button = this.renderImage();else button = this.renderButton();

	      return button;
	    }
	  }]);

	  return HeaderButton;
	}(_react.Component), _class.propTypes = {
	  imgSrc: _prop_types2.default.string,
	  imgAlt: _prop_types2.default.string,
	  icon: _prop_types2.default.string,
	  iconAlign: _prop_types2.default.string,
	  text: _prop_types2.default.string,
	  href: _prop_types2.default.string,
	  target: _prop_types2.default.string,
	  onClick: _prop_types2.default.func,
	  ref: _prop_types2.default.string
	}, _class.defaultProps = {
	  iconAlign: ' '
	}, _temp);
	exports.default = HeaderButton;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _menu = __webpack_require__(140);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderMenu = (_temp = _class = function (_Component) {
	  _inherits(HeaderMenu, _Component);

	  function HeaderMenu() {
	    _classCallCheck(this, HeaderMenu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderMenu).apply(this, arguments));
	  }

	  _createClass(HeaderMenu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.readerMenu)).dropdown();
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      return _react2.default.createElement(
	        _menu2.default,
	        { ref_id: this.props.ref_id, className: 'dropdown-content', items: this.props.items },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var leftIcon = this.props.leftIcon !== '' ? _react2.default.createElement(
	        'i',
	        { className: 'material-icons left' },
	        this.props.leftIcon
	      ) : '';
	      var rightIcon = this.props.rightIcon !== '' ? _react2.default.createElement(
	        'i',
	        { className: 'material-icons right' },
	        this.props.rightIcon
	      ) : '';

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: this.props.href, ref: 'readerMenu', onClick: this.props.onClick, target: this.props.target, 'data-activates': this.props.ref_id },
	          leftIcon,
	          this.props.text,
	          rightIcon
	        ),
	        this.renderMenu()
	      );
	    }
	  }]);

	  return HeaderMenu;
	}(_react.Component), _class.propTypes = {
	  items: _prop_types2.default.array,
	  leftIcon: _prop_types2.default.string,
	  rightIcon: _prop_types2.default.string,
	  text: _prop_types2.default.string,
	  href: _prop_types2.default.string,
	  ref_id: _prop_types2.default.string
	}, _class.defaultProps = {
	  items: [],
	  leftIcon: '',
	  rightIcon: '',
	  ref_id: 'headerMenu'
	}, _temp);
	exports.default = HeaderMenu;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _menu_item = __webpack_require__(141);

	var _menu_item2 = _interopRequireDefault(_menu_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// TODO: [DEPRECATION] Prop ref_id is deprecated, remember to remove it.
	var Menu = (_temp = _class = function (_Component) {
	  _inherits(Menu, _Component);

	  function Menu() {
	    _classCallCheck(this, Menu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
	  }

	  _createClass(Menu, [{
	    key: 'renderPropItems',
	    value: function renderPropItems() {
	      var menuItems = this.props.items.map(function (item, i) {
	        return _react2.default.createElement(_menu_item2.default, _extends({}, item, { key: 'menu_' + i }));
	      }, this);
	      return menuItems;
	    }
	  }, {
	    key: 'renderChildItems',
	    value: function renderChildItems() {
	      var menuItems = _react2.default.Children.map(this.props.children, function (item) {
	        if (item && item.type && (item.type.displayName || item.type.name) === 'MenuItem') return item;
	      });
	      return menuItems;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console && console.warn && console.warn('[Realize] Menu prop ref_id will be removed, use id instead!');
	      var id = this.props.ref_id || (typeof this.props.id !== 'string' ? '' : this.props.id);

	      return _react2.default.createElement(
	        'ul',
	        { id: id, className: this.props.className },
	        this.renderPropItems(),
	        this.renderChildItems()
	      );
	    }
	  }]);

	  return Menu;
	}(_react.Component), _class.propTypes = {
	  ref_id: _prop_types2.default.string,
	  id: _prop_types2.default.string,
	  items: _prop_types2.default.array
	}, _class.defaultProps = {
	  ref_id: '',
	  id: '',
	  items: []
	}, _temp);
	exports.default = Menu;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _button = __webpack_require__(112);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuItem = (_temp = _class = function (_Component) {
	  _inherits(MenuItem, _Component);

	  function MenuItem() {
	    _classCallCheck(this, MenuItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).apply(this, arguments));
	  }

	  _createClass(MenuItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(_button2.default, _extends({}, this.props, { clearTheme: true, name: this.props.text }))
	      );
	    }
	  }]);

	  return MenuItem;
	}(_react.Component), _class.propTypes = {
	  icon: _prop_types2.default.string,
	  iconAlign: _prop_types2.default.string,
	  href: _prop_types2.default.string,
	  target: _prop_types2.default.string,
	  onClick: _prop_types2.default.object,
	  className: _prop_types2.default.string,
	  method: _prop_types2.default.string,
	  element: _prop_types2.default.string
	}, _class.defaultProps = {
	  iconAlign: 'left',
	  method: 'get',
	  element: 'a'
	}, _temp);
	exports.default = MenuItem;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderSection = (_temp = _class = function (_Component) {
	  _inherits(HeaderSection, _Component);

	  function HeaderSection() {
	    _classCallCheck(this, HeaderSection);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderSection).apply(this, arguments));
	  }

	  _createClass(HeaderSection, [{
	    key: 'renderChildren',
	    value: function renderChildren() {
	      return _react2.default.Children.map(this.props.children, function (child, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: "item_" + i },
	          child
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        { className: this.props.className + ' ' + this.props.align, id: this.props.id },
	        this.renderChildren()
	      );
	    }
	  }]);

	  return HeaderSection;
	}(_react.Component), _class.propTypes = {
	  align: _prop_types2.default.string,
	  id: _prop_types2.default.string
	}, _class.defaultProps = {
	  align: 'left',
	  className: 'hide-on-med-and-down'
	}, _temp);
	exports.default = HeaderSection;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Header, _Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	  }

	  _createClass(Header, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _jquery2.default)(".button-collapse").sideNav({
	        edge: 'right',
	        closeOnClick: true
	      });
	      (0, _jquery2.default)('.collapsible').collapsible();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'nav',
	        { className: this.className(), role: 'navigation' },
	        _react2.default.createElement(
	          'div',
	          { className: this.props.wrapperClassName },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Header;
	}(_react.Component), _class2.defaultProps = {
	  themeClassKey: 'header',
	  wrapperClassName: 'nav-wrapper container'
	}, _temp)) || _class);
	exports.default = Header;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Icon = undefined;

	var _icon = __webpack_require__(119);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Icon = _icon2.default;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Spinner = undefined;

	var _spinner = __webpack_require__(146);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Spinner = _spinner2.default;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Spinner = (_temp = _class = function (_Component) {
	  _inherits(Spinner, _Component);

	  function Spinner() {
	    _classCallCheck(this, Spinner);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
	  }

	  _createClass(Spinner, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.wrapperClassName() },
	        _react2.default.createElement(
	          'div',
	          { className: this.layerClassName() },
	          _react2.default.createElement(
	            'div',
	            { className: 'circle-clipper left' },
	            _react2.default.createElement('div', { className: 'circle' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'gap-patch' },
	            _react2.default.createElement('div', { className: 'circle' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'circle-clipper right' },
	            _react2.default.createElement('div', { className: 'circle' })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'wrapperClassName',
	    value: function wrapperClassName() {
	      var className = "spinner preloader-wrapper " + this.props.size;
	      if (this.props.active) {
	        className += " active";
	      }

	      className += " " + this.props.className;
	      return className;
	    }
	  }, {
	    key: 'layerClassName',
	    value: function layerClassName() {
	      var className = "spinner-layer spinner-" + this.props.color + "-only";

	      return className;
	    }
	  }]);

	  return Spinner;
	}(_react.Component), _class.propTypes = {
	  size: _prop_types2.default.string,
	  color: _prop_types2.default.string,
	  active: _prop_types2.default.bool,
	  className: _prop_types2.default.string
	}, _class.defaultProps = {
	  size: 'small',
	  color: 'green',
	  active: true,
	  className: ''
	}, _temp);
	exports.default = Spinner;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Label = undefined;

	var _label = __webpack_require__(148);

	var _label2 = _interopRequireDefault(_label);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Label = _label2.default;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Label = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Label, _Component);

	  function Label(props) {
	    _classCallCheck(this, Label);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Label).call(this, props));

	    _this.state = {
	      themeClassKey: _this.getLabelThemeClassKey(_this.props)
	    };
	    return _this;
	  }

	  _createClass(Label, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        themeClassKey: this.getLabelThemeClassKey(nextProps)
	      });
	    }
	  }, {
	    key: 'getLabelThemeClassKey',
	    value: function getLabelThemeClassKey(props) {
	      var themeClassKey = props.themeClassKey;
	      if (props.active) {
	        themeClassKey += ' label.active';
	      }

	      return themeClassKey;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var labelProp = this.props.label;
	      if (typeof labelProp == "boolean" && !labelProp) {
	        return _react2.default.createElement('span', null);
	      }

	      return _react2.default.createElement(
	        'label',
	        { htmlFor: this.props.id, onClick: this.props.onClick, className: this.className() },
	        labelProp || this.props.name
	      );
	    }
	  }]);

	  return Label;
	}(_react.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  name: _prop_types2.default.string,
	  label: _prop_types2.default.oneOfType([_prop_types2.default.string, _prop_types2.default.bool]),
	  active: _prop_types2.default.bool,
	  onClick: _prop_types2.default.func
	}, _class2.defaultProps = {
	  active: false,
	  name: '',
	  label: '',
	  themeClassKey: 'label'
	}, _temp)) || _class);
	exports.default = Label;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Menu = exports.MenuItem = undefined;

	var _menu_item = __webpack_require__(141);

	var _menu_item2 = _interopRequireDefault(_menu_item);

	var _menu = __webpack_require__(140);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.MenuItem = _menu_item2.default;
	exports.Menu = _menu2.default;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalHeader = exports.ModalForm = exports.ModalFooter = exports.ModalContent = exports.ModalButton = exports.Modal = undefined;

	var _modal = __webpack_require__(151);

	var _modal2 = _interopRequireDefault(_modal);

	var _modal_button = __webpack_require__(158);

	var _modal_button2 = _interopRequireDefault(_modal_button);

	var _modal_content = __webpack_require__(153);

	var _modal_content2 = _interopRequireDefault(_modal_content);

	var _modal_footer = __webpack_require__(154);

	var _modal_footer2 = _interopRequireDefault(_modal_footer);

	var _modal_form = __webpack_require__(159);

	var _modal_form2 = _interopRequireDefault(_modal_form);

	var _modal_header = __webpack_require__(152);

	var _modal_header2 = _interopRequireDefault(_modal_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Modal = _modal2.default;
	exports.ModalButton = _modal_button2.default;
	exports.ModalContent = _modal_content2.default;
	exports.ModalFooter = _modal_footer2.default;
	exports.ModalForm = _modal_form2.default;
	exports.ModalHeader = _modal_header2.default;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reflux = __webpack_require__(26);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _modal_header = __webpack_require__(152);

	var _modal_header2 = _interopRequireDefault(_modal_header);

	var _modal_content = __webpack_require__(153);

	var _modal_content2 = _interopRequireDefault(_modal_content);

	var _modal_footer = __webpack_require__(154);

	var _modal_footer2 = _interopRequireDefault(_modal_footer);

	var _mixins = __webpack_require__(22);

	var _stores = __webpack_require__(155);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = (_dec = (0, _decorators.mixin)(_reflux2.default.connect(_stores.ModalStore, 'modalStore'), _mixins.CssClassMixin, _mixins.ContainerMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(Modal, _Component);

	  function Modal() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Modal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Modal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      modalStore: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.resizeContent();
	      (0, _jquery2.default)(window).on('resize', this.resizeContent);

	      if (!!this.props.opened) {
	        this.open();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _jquery2.default)(window).off('resize', this.resizeContent);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.resizeContent();
	      if (!!this.state.opened) {
	        this.open();
	      }

	      if (this.state.modalStore) {
	        this.handleModalStoreState();
	      }
	    }
	  }, {
	    key: 'renderHeader',
	    value: function renderHeader() {
	      return _react2.default.createElement(
	        'div',
	        { ref: 'headerContainer', className: 'modal-header-container' },
	        this.filterChildren(_modal_header2.default)
	      );
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent() {
	      return _react2.default.createElement(
	        'div',
	        { ref: 'contentContainer', className: 'modal-content-container' },
	        this.filterChildren(_modal_content2.default)
	      );
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter() {
	      return _react2.default.createElement(
	        'div',
	        { ref: 'footerContainer', className: 'modal-footer-container' },
	        this.filterChildren(_modal_footer2.default)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var header = this.filterChildren(_modal_header2.default) ? this.renderHeader() : '';
	      var content = this.filterChildren(_modal_content2.default) ? this.renderContent() : '';
	      var footer = this.filterChildren(_modal_footer2.default) ? this.renderFooter() : '';

	      if (header == '' && content == '' && footer == '') content = _react2.default.createElement(
	        _modal_content2.default,
	        this.props,
	        this.props.children
	      );

	      return _react2.default.createElement(
	        'div',
	        { id: this.props.id, className: this.className(), ref: 'modal' },
	        header,
	        content,
	        footer
	      );
	    }
	  }, {
	    key: 'handleModalStoreState',
	    value: function handleModalStoreState() {
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
	    }
	  }, {
	    key: 'open',
	    value: function open(options) {
	      var $modal = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.modal));

	      $modal.openModal({
	        dismissible: this.props.dismissible, // Modal can be dismissed by clicking outside of the modal
	        opacity: this.props.opacity, // Opacity of modal background
	        inDuration: this.props.inDuration, // Transition in duration
	        outDuration: this.props.outDuration, // Transition out duration
	        ready: this.handleReady, // Callback for Modal open
	        complete: this.props.complete // Callback for Modal close
	      });
	    }
	  }, {
	    key: 'handleReady',
	    value: function handleReady() {
	      this.resizeContent();
	      ModalActions.openFinished();

	      if (typeof this.props.ready === "function") {
	        this.props.ready();
	      }
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      var $modal = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.modal));

	      $modal.closeModal();
	    }
	  }, {
	    key: 'resizeContent',
	    value: function resizeContent() {
	      var modal = _reactDom2.default.findDOMNode(this.refs.modal);
	      var contentContainer = _reactDom2.default.findDOMNode(this.refs.contentContainer);

	      (0, _jquery2.default)(modal).css("max-height", (0, _jquery2.default)(window).height() - this.props.marginHeaderFooter);
	      (0, _jquery2.default)(modal).css("width", this.props.width);

	      var availableHeight = this.getAvailableHeight();
	      var contentHeight = this.getContentHeight();
	      var containerHeight = 0;
	      if (!!this.props.useAvailableHeight) {
	        containerHeight = availableHeight;
	      } else {
	        containerHeight = Math.min(availableHeight, contentHeight);
	      }

	      (0, _jquery2.default)(contentContainer).css("height", containerHeight);
	    }
	  }, {
	    key: 'getAvailableHeight',
	    value: function getAvailableHeight() {
	      var headerContainer = _reactDom2.default.findDOMNode(this.refs.headerContainer);
	      var footerContainer = _reactDom2.default.findDOMNode(this.refs.footerContainer);

	      return (0, _jquery2.default)(window).height() - this.props.marginHeaderFooter - ((0, _jquery2.default)(headerContainer).height() + (0, _jquery2.default)(footerContainer).height());
	    }
	  }, {
	    key: 'getContentHeight',
	    value: function getContentHeight() {
	      var contentContainer = _reactDom2.default.findDOMNode(this.refs.contentContainer);
	      var minContentHeight = this.props.minContentHeight;
	      var contentHeight = 0;

	      (0, _jquery2.default)(contentContainer).find("> *").each(function (i, content) {
	        contentHeight += (0, _jquery2.default)(content).outerHeight();
	      });

	      return Math.max(minContentHeight, contentHeight);
	    }
	  }]);

	  return Modal;
	}(_react.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  opened: _prop_types2.default.bool,
	  marginHeaderFooter: _prop_types2.default.number,
	  width: _prop_types2.default.string,
	  minContentHeight: _prop_types2.default.number,
	  useAvailableHeight: _prop_types2.default.bool,

	  dismissible: _prop_types2.default.bool,
	  opacity: _prop_types2.default.number,
	  inDuration: _prop_types2.default.number,
	  outDuration: _prop_types2.default.number,
	  ready: _prop_types2.default.func,
	  complete: _prop_types2.default.func
	}, _class2.defaultProps = {
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
	}, _temp2)) || _class);
	exports.default = Modal;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _theme = __webpack_require__(30);

	var _theme2 = _interopRequireDefault(_theme);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalHeader = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ModalHeader, _Component);

	  function ModalHeader() {
	    _classCallCheck(this, ModalHeader);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalHeader).apply(this, arguments));
	  }

	  _createClass(ModalHeader, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.getClassName() },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'getClassName',
	    value: function getClassName() {
	      var className = _theme2.default.getCssClass(this.props.themeClassKey);
	      if (!this.props.clearTheme && this.props.withTitle) {
	        className += ' ' + _theme2.default.getCssClass('modal.header.withTitle');
	      }

	      return className;
	    }
	  }]);

	  return ModalHeader;
	}(_react.Component), _class2.propTypes = {
	  withTitle: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  themeClassKey: 'modal.header',
	  withTitle: true
	}, _temp)) || _class);
	exports.default = ModalHeader;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalContent = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ModalContent, _Component);

	  function ModalContent() {
	    _classCallCheck(this, ModalContent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalContent).apply(this, arguments));
	  }

	  _createClass(ModalContent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        this.props.children
	      );
	    }
	  }]);

	  return ModalContent;
	}(_react.Component), _class2.defaultProps = {
	  themeClassKey: 'modal.content'
	}, _temp)) || _class);
	exports.default = ModalContent;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _theme = __webpack_require__(30);

	var _theme2 = _interopRequireDefault(_theme);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalFooter = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ModalFooter, _Component);

	  function ModalFooter() {
	    _classCallCheck(this, ModalFooter);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFooter).apply(this, arguments));
	  }

	  _createClass(ModalFooter, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.footerClassName() },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'footerClassName',
	    value: function footerClassName() {
	      var className = this.className();
	      if (this.props.withSeparator) {
	        className += " " + _theme2.default.getCssClass(this.props.separatorThemeClassKey);
	      }

	      return className;
	    }
	  }]);

	  return ModalFooter;
	}(_react.Component), _class2.propTypes = {
	  separatorThemeClassKey: _prop_types2.default.string,
	  withSeparator: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  themeClassKey: 'modal.footer',
	  separatorThemeClassKey: 'modal.footer.withSeparator',
	  withSeparator: true
	}, _temp)) || _class);
	exports.default = ModalFooter;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalStore = exports.InputSelectStore = exports.FormStore = undefined;

	var _form_store = __webpack_require__(25);

	var _form_store2 = _interopRequireDefault(_form_store);

	var _input_select_store = __webpack_require__(46);

	var _input_select_store2 = _interopRequireDefault(_input_select_store);

	var _modal_store = __webpack_require__(156);

	var _modal_store2 = _interopRequireDefault(_modal_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FormStore = _form_store2.default;
	exports.InputSelectStore = _input_select_store2.default;
	exports.ModalStore = _modal_store2.default;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reflux = __webpack_require__(26);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _modal_actions = __webpack_require__(157);

	var _modal_actions2 = _interopRequireDefault(_modal_actions);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reflux2.default.createStore({
	  listenables: [_modal_actions2.default],
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
	    this.options = _jquery2.default.grep(props, function (prop) {
	      return this.optionProps.indexOf(prop) > 0;
	    }.bind(this));

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

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reflux = __webpack_require__(26);

	var _reflux2 = _interopRequireDefault(_reflux);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reflux2.default.createActions(['open', 'openFinished', 'close']);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalButton = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ModalButton, _Component);

	  function ModalButton() {
	    _classCallCheck(this, ModalButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalButton).apply(this, arguments));
	  }

	  _createClass(ModalButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_components.Button, _extends({}, this.props, {
	        className: this.getClassName(),
	        onClick: this.openModal,
	        ref: 'modalButton' }));
	    }
	  }, {
	    key: 'getClassName',
	    value: function getClassName() {
	      var className = this.className();
	      if (this.props.disabled && this.props.element === 'a') className = 'button btn-flat disable-action-button';

	      return className;
	    }
	  }, {
	    key: 'openModal',
	    value: function openModal(event) {
	      event.nativeEvent.preventDefault();
	      event.stopPropagation();
	      event.preventDefault();

	      ModalActions.open(this.props);
	    }
	  }]);

	  return ModalButton;
	}(_react.Component), _class2.propTypes = {
	  modalId: _prop_types2.default.string,
	  openerId: _prop_types2.default.string
	}, _class2.defaultProps = {
	  modalId: '',
	  openerId: ''
	}, _temp)) || _class);
	exports.default = ModalButton;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _components = __webpack_require__(1);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalForm = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.ContainerMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(ModalForm, _Component);

	  function ModalForm() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ModalForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ModalForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      isLoading: false
	    }, _this.handleSubmitSuccess = function (data, status, xhr) {
	      var onSuccessCallback = _this.props.form.onSuccess;
	      if (typeof onSuccessCallback == "function") {
	        _this.props.onSuccess(data, status, xhr);
	      }

	      _this.setState({
	        isLoading: false
	      });

	      return true;
	    }, _this.handleSubmitError = function (xhr, status, error) {
	      var onErrorCallback = _this.props.form.onError;
	      if (typeof onErrorCallback == "function") {
	        _this.props.onError(xhr, status, error);
	      }

	      _this.setState({
	        isLoading: false
	      });

	      return true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ModalForm, [{
	    key: 'renderHeader',
	    value: function renderHeader() {
	      var modalHeader = this.filterChildren(_components.ModalHeader);
	      if (!modalHeader || modalHeader.length == 0) {
	        modalHeader.push(_react2.default.createElement(
	          _components.ModalHeader,
	          { key: 'modal-header' },
	          _react2.default.createElement(
	            'h5',
	            null,
	            this.props.title
	          )
	        ));
	      }

	      return modalHeader;
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent() {
	      return _react2.default.createElement(
	        _components.ModalContent,
	        null,
	        _react2.default.createElement(
	          _components.Form,
	          _extends({}, this.props.form, {
	            submitButton: false,
	            otherButtons: [],
	            onError: this.handleSubmitError,
	            onSuccess: this.handleSubmitSuccess,
	            ref: 'form' }),
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter() {
	      return _react2.default.createElement(
	        _components.ModalFooter,
	        null,
	        _react2.default.createElement(_components.FormButtonGroup, _extends({}, this.props.form, { submitButton: this.submitButtonProps(), isLoading: this.state.isLoading }))
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _components.Modal,
	        this.props,
	        this.renderHeader(),
	        this.renderContent(),
	        this.renderFooter()
	      );
	    }
	  }, {
	    key: 'submitButtonProps',
	    value: function submitButtonProps() {
	      var submitButtonProps = this.props.form.submitButton || this.defaultSubmitButtonProps();
	      submitButtonProps.onClick = this.submitForm;

	      return submitButtonProps;
	    }
	  }, {
	    key: 'defaultSubmitButtonProps',
	    value: function defaultSubmitButtonProps() {
	      return {
	        name: 'actions.send',
	        icon: 'send'
	      };
	    }
	  }, {
	    key: 'submitForm',
	    value: function submitForm(event) {
	      var formRef = this.refs.form;

	      formRef.handleSubmit(event);
	      this.setState({
	        isLoading: true
	      });
	    }
	  }]);

	  return ModalForm;
	}(_react.Component), _class2.propTypes = {
	  title: _prop_types2.default.string,
	  form: _prop_types2.default.object
	}, _class2.defaultProps = {
	  title: "",
	  form: {}
	}, _temp2)) || _class);
	exports.default = ModalForm;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotificationsList = exports.NotificationNumber = exports.HeaderNotifications = undefined;

	var _header_notifications = __webpack_require__(161);

	var _header_notifications2 = _interopRequireDefault(_header_notifications);

	var _notification_number = __webpack_require__(162);

	var _notification_number2 = _interopRequireDefault(_notification_number);

	var _notifications_list = __webpack_require__(163);

	var _notifications_list2 = _interopRequireDefault(_notifications_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.HeaderNotifications = _header_notifications2.default;
	exports.NotificationNumber = _notification_number2.default;
	exports.NotificationsList = _notifications_list2.default;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _notification = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderNotifications = (_temp2 = _class = function (_Component) {
	  _inherits(HeaderNotifications, _Component);

	  function HeaderNotifications() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, HeaderNotifications);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HeaderNotifications)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      count: 0,
	      active: false
	    }, _this.handleClick = function () {
	      var list = _reactDom2.default.findDOMNode(_this.refs.notificationsList);
	      (0, _jquery2.default)(list).slideDown();
	      _this.state.active = !_this.state.active;
	      _this.forceUpdate();
	    }, _this.handleClickItem = function (responseData) {
	      _jquery2.default.ajax({
	        url: _this.props.baseUrl,
	        dataType: 'json',
	        data: {
	          per_page: 50,
	          q: {
	            s: 'created_at desc'
	          }
	        },
	        success: function (data) {
	          this.setState({
	            notifications: data.notifications,
	            count: data.not_read_count
	          });
	        }.bind(_this)
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(HeaderNotifications, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //TODO: alterar estes event handlers para o React.
	      (0, _jquery2.default)('html').on('click', this.closeList);

	      (0, _jquery2.default)('.notifications-list').mouseover(function () {
	        (0, _jquery2.default)('body').addClass('noscroll');
	      });

	      (0, _jquery2.default)('.notifications-list').mouseout(function () {
	        (0, _jquery2.default)('body').removeClass('noscroll');
	      });

	      this.loadNotifications();
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      var component = [];

	      if (this.state.count > 0) {
	        component.push(_react2.default.createElement(
	          'i',
	          { className: 'material-icons', key: 'notification_icon' },
	          'notifications'
	        ));
	      } else {
	        component.push(_react2.default.createElement(
	          'i',
	          { className: 'material-icons', key: 'notification_icon' },
	          'notifications_none'
	        ));
	      }

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className },
	        _react2.default.createElement(
	          'a',
	          { onClick: this.handleClick },
	          this.renderIcon(),
	          _react2.default.createElement(_notification.NotificationNumber, { count: this.state.count })
	        ),
	        _react2.default.createElement(NotificationsList, { ref: 'notificationsList',
	          active: this.state.active,
	          baseUrl: this.props.baseUrl,
	          handleClickItem: this.handleClickItem,
	          notifications: this.state.notifications
	        })
	      );
	    }
	  }, {
	    key: 'closeList',
	    value: function closeList() {
	      this.setState({
	        active: false
	      });
	    }
	  }, {
	    key: 'loadNotifications',
	    value: function loadNotifications() {
	      _jquery2.default.ajax({
	        url: this.props.baseUrl,
	        dataType: 'json',
	        data: {
	          per_page: 50,
	          ou_slug: this.props.ouSlug,
	          q: {
	            s: 'created_at desc'
	          }
	        },
	        success: function (data) {
	          this.setState({
	            notifications: data.notifications,
	            count: data.unread_count
	          });
	        }.bind(this)
	      });
	    }
	  }]);

	  return HeaderNotifications;
	}(_react.Component), _class.propTypes = {
	  ouSlug: _prop_types2.default.string,
	  className: _prop_types2.default.string,
	  text: _prop_types2.default.string,
	  icon: _prop_types2.default.string,
	  baseUrl: _prop_types2.default.string
	}, _class.defaultProps = {
	  ouSlug: null,
	  className: 'notifications',
	  icon: 'add_alert',
	  text: '',
	  baseUrl: '/notifications'
	}, _temp2);
	exports.default = HeaderNotifications;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotificationNumber = (_temp = _class = function (_Component) {
	  _inherits(NotificationNumber, _Component);

	  function NotificationNumber() {
	    _classCallCheck(this, NotificationNumber);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotificationNumber).apply(this, arguments));
	  }

	  _createClass(NotificationNumber, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        { className: 'jewelCount' },
	        this.unreadNotificationNumber()
	      );
	    }
	  }, {
	    key: 'unreadNotificationNumber',
	    value: function unreadNotificationNumber() {
	      var component = [];
	      if (!!this.props.count && this.props.count > 0) component.push(_react2.default.createElement(
	        'span',
	        { className: this.props.className, key: 'notification_count' },
	        this.props.count
	      ));
	      return component;
	    }
	  }]);

	  return NotificationNumber;
	}(_react.Component), _class.propTypes = {
	  className: _prop_types2.default.string,
	  count: _prop_types2.default.number
	}, _class.defaultProps = {
	  className: 'notification-number',
	  count: 0
	}, _temp);
	exports.default = NotificationNumber;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _i18n = __webpack_require__(7);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotificationsList = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin, _mixins.ModalRendererMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(NotificationsList, _Component);

	  function NotificationsList() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, NotificationsList);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(NotificationsList)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event, id) {
	      var url = _this.props.baseUrl + '/' + id;
	      _this.performRequest(url);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(NotificationsList, [{
	    key: 'renderNotification',
	    value: function renderNotification() {
	      var component = [];
	      var notifications = this.props.notifications;

	      for (var i = 0; i < notifications.length; i++) {
	        var notification = notifications[i];
	        var liClass = !!notification.read_by_user ? '' : 'not-read';

	        component.push(_react2.default.createElement(
	          'li',
	          { className: liClass, key: "notification_item_" + i },
	          _react2.default.createElement(
	            'a',
	            { onClick: this.handleClick.bind(this, event, notification.id) },
	            _react2.default.createElement(
	              'span',
	              null,
	              notification.message
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'created_at-notification' },
	              'Criado em: ',
	              _moment2.default.utc(notification.created_at).format("DD/MM/YYYY HH:mm")
	            )
	          )
	        ));
	      }

	      return component;
	    }
	  }, {
	    key: 'renderSeeAll',
	    value: function renderSeeAll() {
	      var component = [];

	      if (this.props.notifications.length === 0) {
	        component.push(_react2.default.createElement(
	          'div',
	          { className: 'box-see-all', key: 'notification_see_all' },
	          _react2.default.createElement('div', { className: 'divider' }),
	          _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              null,
	              _i18n2.default.t('buttons.noNotifications')
	            )
	          )
	        ));
	      } else {
	        component.push(_react2.default.createElement(
	          'div',
	          { className: 'box-see-all', key: 'notification_see_all' },
	          _react2.default.createElement('div', { className: 'divider' }),
	          _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '/notifications' },
	              _i18n2.default.t('buttons.seeAll')
	            )
	          )
	        ));
	      }

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var display = this.props.active ? 'block' : 'none';
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className, style: { display: display } },
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.renderNotification()
	        ),
	        this.renderSeeAll()
	      );
	    }
	  }, {
	    key: 'onSuccess',
	    value: function onSuccess(responseData) {
	      this.renderModalHtml(responseData);
	      this.props.handleClickItem(responseData);
	    }
	  }]);

	  return NotificationsList;
	}(_react.Component), _class2.propTypes = {
	  className: _prop_types2.default.string,
	  active: _prop_types2.default.bool,
	  notifications: _prop_types2.default.array,
	  handleClickItem: _prop_types2.default.func,
	  baseUrl: _prop_types2.default.string
	}, _class2.defaultProps = {
	  className: 'notifications-list z-depth-1',
	  active: false,
	  notifications: [],
	  baseUrl: '/notifications',
	  handleClickItem: function handleClickItem(data) {}
	}, _temp2)) || _class);
	exports.default = NotificationsList;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Pagination = exports.PaginationItem = undefined;

	var _pagination_item = __webpack_require__(165);

	var _pagination_item2 = _interopRequireDefault(_pagination_item);

	var _pagination = __webpack_require__(166);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.PaginationItem = _pagination_item2.default;
	exports.Pagination = _pagination2.default;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PaginationItem = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(PaginationItem, _Component);

	  function PaginationItem(props) {
	    _classCallCheck(this, PaginationItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PaginationItem).call(this, props));

	    _this.handleClick = function () {
	      if (!_this.props.disabled) {
	        _this.props.onClick();
	      }
	    };

	    _this.state = {
	      themeClassKey: _this.buildThemeClassKey()
	    };
	    return _this;
	  }

	  _createClass(PaginationItem, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        themeClassKey: this.buildThemeClassKey(nextProps)
	      });
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      return _react2.default.createElement(_components.Icon, { type: this.props.iconType });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        { className: this.className(), onClick: this.handleClick },
	        _react2.default.createElement(
	          'a',
	          { href: '#!' },
	          this.props.text,
	          !!this.props.iconType ? this.renderIcon() : ''
	        )
	      );
	    }
	  }, {
	    key: 'buildThemeClassKey',
	    value: function buildThemeClassKey(props) {
	      props = props || this.props;
	      var themeClassKey = 'pagination.item';
	      if (props.disabled) {
	        themeClassKey += ' pagination.item.disabled';
	      }

	      if (props.active) {
	        themeClassKey += ' pagination.item.active';
	      }

	      return themeClassKey;
	    }
	  }]);

	  return PaginationItem;
	}(_react.Component), _class2.propTypes = {
	  disabled: _prop_types2.default.bool,
	  active: _prop_types2.default.bool,
	  iconType: _prop_types2.default.string,
	  text: _prop_types2.default.string,
	  onClick: _prop_types2.default.func
	}, _class2.defaultProps = {
	  disabled: false,
	  active: false,
	  iconType: null,
	  text: '',
	  onClick: function onClick(event) {
	    return true;
	  }
	}, _temp)) || _class);
	exports.default = PaginationItem;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pagination = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(Pagination, _Component);

	  function Pagination() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Pagination);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Pagination)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.navigateToPrevious = function () {
	      var pageToNavigate = Math.max(1, _this.props.page - 1);
	      _this.navigateTo(pageToNavigate);
	    }, _this.navigateToNext = function () {
	      var pageToNavigate = Math.min(_this.lastPage(), _this.props.page + 1);
	      _this.navigateTo(pageToNavigate);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Pagination, [{
	    key: 'renderPaginationByType',
	    value: function renderPaginationByType() {
	      if (this.props.type == 'default') return _react2.default.createElement(
	        'span',
	        null,
	        this.renderFirstButton(),
	        this.renderPageButtons(),
	        this.renderLastButton()
	      );else if (this.props.type == 'input') return _react2.default.createElement(
	        'span',
	        null,
	        this.renderPageInput()
	      );
	    }
	  }, {
	    key: 'renderPreviousButton',
	    value: function renderPreviousButton() {
	      var disabled = this.props.page <= 1;

	      return _react2.default.createElement(_components.PaginationItem, { disabled: disabled, iconType: 'left', onClick: this.navigateToPrevious });
	    }
	  }, {
	    key: 'renderFirstButton',
	    value: function renderFirstButton() {
	      if (this.firstWindowPage() <= 1) {
	        return '';
	      }

	      return _react2.default.createElement(_components.PaginationItem, { text: '...', onClick: this.navigateTo.bind(this, 1) });
	    }
	  }, {
	    key: 'renderNextButton',
	    value: function renderNextButton() {
	      var disabled = this.props.page >= this.lastPage();

	      return _react2.default.createElement(_components.PaginationItem, { disabled: disabled, iconType: 'right', onClick: this.navigateToNext });
	    }
	  }, {
	    key: 'renderLastButton',
	    value: function renderLastButton() {
	      var lastPage = this.lastPage();
	      if (this.lastWindowPage() >= lastPage) {
	        return '';
	      }

	      return _react2.default.createElement(_components.PaginationItem, { text: '...', onClick: this.navigateTo.bind(this, lastPage) });
	    }
	  }, {
	    key: 'renderPageButtons',
	    value: function renderPageButtons() {
	      var pageButtons = [];
	      for (var i = this.firstWindowPage(); i <= this.lastWindowPage(); i++) {
	        pageButtons.push(this.renderPageButton(i));
	      }

	      return pageButtons;
	    }
	  }, {
	    key: 'renderPageButton',
	    value: function renderPageButton(page) {
	      var active = this.props.page === page;

	      return _react2.default.createElement(_components.PaginationItem, { active: active, text: String(page), onClick: this.navigateTo.bind(this, page), key: "page_" + page });
	    }
	  }, {
	    key: 'renderPageInput',
	    value: function renderPageInput() {
	      var page = this.props.page;
	      return _react2.default.createElement(_components.Input, { value: page, clearTheme: true, className: 'form__input input-field col s3' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        { className: this.className() },
	        this.renderPreviousButton(),
	        this.renderPaginationByType(),
	        this.renderNextButton()
	      );
	    }
	  }, {
	    key: 'lastPage',
	    value: function lastPage() {
	      return Math.ceil(this.props.count / this.props.perPage);
	    }
	  }, {
	    key: 'firstWindowPage',
	    value: function firstWindowPage() {
	      return Math.max(1, this.props.page - this.props.window);
	    }
	  }, {
	    key: 'lastWindowPage',
	    value: function lastWindowPage() {
	      return Math.min(this.lastPage(), this.props.page + this.props.window);
	    }
	  }, {
	    key: 'navigateTo',
	    value: function navigateTo(page) {
	      this.props.onPagination(page);
	    }
	  }]);

	  return Pagination;
	}(_react.Component), _class2.propTypes = {
	  count: _prop_types2.default.number,
	  page: _prop_types2.default.number,
	  perPage: _prop_types2.default.number,
	  window: _prop_types2.default.number,
	  onPagination: _prop_types2.default.func,
	  type: _prop_types2.default.string
	}, _class2.defaultProps = {
	  themeClassKey: 'pagination',
	  page: 1,
	  perPage: 20,
	  window: 4,
	  onPagination: function onPagination(page) {
	    return true;
	  }
	}, _temp2)) || _class);
	exports.default = Pagination;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SideNav = undefined;

	var _sidenav = __webpack_require__(168);

	var _sidenav2 = _interopRequireDefault(_sidenav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SideNav = _sidenav2.default;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	var _menu = __webpack_require__(140);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SideNav = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(SideNav, _Component);

	  function SideNav() {
	    _classCallCheck(this, SideNav);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SideNav).apply(this, arguments));
	  }

	  _createClass(SideNav, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.sideNav)).sideNav();
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      return _react2.default.createElement(
	        _menu2.default,
	        {
	          ref_id: this.props.ref_id,
	          className: 'side-nav full',
	          items: this.props.items },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var iconAlign = this.props.text ? 'left' : '';

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: this.props.href, className: this.className(), ref: 'sideNav', onClick: this.props.onClick, target: this.props.target, 'data-activates': this.props.ref_id },
	          _react2.default.createElement(
	            'i',
	            { className: 'material-icons ' + iconAlign },
	            this.props.icon
	          ),
	          this.props.text
	        ),
	        this.renderMenu()
	      );
	    }
	  }]);

	  return SideNav;
	}(_react.Component), _class2.propTypes = {
	  items: _prop_types2.default.array,
	  icon: _prop_types2.default.string,
	  iconAlign: _prop_types2.default.string,
	  text: _prop_types2.default.string,
	  ref_id: _prop_types2.default.string
	}, _class2.defaultProps = {
	  themeClassKey: 'sidenav.button',
	  items: [],
	  icon: 'view_headline',
	  iconAlign: '',
	  ref_id: 'sideNav',
	  text: ''
	}, _temp)) || _class);
	exports.default = SideNav;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Table = exports.TableSelectionIndicator = exports.TableSelectCell = exports.TableRow = exports.TableRowActions = exports.TableRowActionButton = exports.TableHeader = exports.TableCell = exports.TableActions = exports.TableActionButton = undefined;

	var _table_action_button = __webpack_require__(170);

	var _table_action_button2 = _interopRequireDefault(_table_action_button);

	var _table_actions = __webpack_require__(171);

	var _table_actions2 = _interopRequireDefault(_table_actions);

	var _table_cell = __webpack_require__(172);

	var _table_cell2 = _interopRequireDefault(_table_cell);

	var _table_header = __webpack_require__(173);

	var _table_header2 = _interopRequireDefault(_table_header);

	var _table_row_action_button = __webpack_require__(174);

	var _table_row_action_button2 = _interopRequireDefault(_table_row_action_button);

	var _table_row_actions = __webpack_require__(175);

	var _table_row_actions2 = _interopRequireDefault(_table_row_actions);

	var _table_row = __webpack_require__(176);

	var _table_row2 = _interopRequireDefault(_table_row);

	var _table_select_cell = __webpack_require__(177);

	var _table_select_cell2 = _interopRequireDefault(_table_select_cell);

	var _table_selection_indicator = __webpack_require__(178);

	var _table_selection_indicator2 = _interopRequireDefault(_table_selection_indicator);

	var _table = __webpack_require__(179);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.TableActionButton = _table_action_button2.default;
	exports.TableActions = _table_actions2.default;
	exports.TableCell = _table_cell2.default;
	exports.TableHeader = _table_header2.default;
	exports.TableRowActionButton = _table_row_action_button2.default;
	exports.TableRowActions = _table_row_actions2.default;
	exports.TableRow = _table_row2.default;
	exports.TableSelectCell = _table_select_cell2.default;
	exports.TableSelectionIndicator = _table_selection_indicator2.default;
	exports.Table = _table2.default;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableActionButton = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RequestHandlerMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(TableActionButton, _Component);

	  function TableActionButton() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, TableActionButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableActionButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.actionButtonClick = function (event) {
	      if (_this.isDisabled()) {
	        return;
	      }

	      var buttonOnClick = _this.props.onClick;
	      var buttonAction = _this.props.actionUrl;
	      var selectedData = _this.getSelectedData();

	      if ($.isFunction(buttonOnClick)) {
	        buttonOnClick(event, selectedData);
	      } else if (!!buttonAction) {
	        _this.performRequest(buttonAction, selectedData, _this.props.method);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(TableActionButton, [{
	    key: 'renderButton',
	    value: function renderButton() {
	      var component = [];
	      if (!this.props.conditionToShowActionButton(this.props.conditionParams)) {
	        return component;
	      }

	      var buttonProps = _react2.default.__spread({}, this.props, {
	        isLoading: this.state.isLoading,
	        disabled: this.isDisabled(),
	        method: this.actionButtonMethod(),
	        href: this.actionButtonHref(),
	        onClick: this.actionButtonClick,
	        key: this.props.name
	      });

	      var buttonComponent = _react2.default.createElement(eval(this.props.component), buttonProps);
	      component.push(buttonComponent);

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        this.renderButton()
	      );
	    }
	  }, {
	    key: 'isDisabled',
	    value: function isDisabled() {
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
	    }
	  }, {
	    key: 'actionButtonMethod',
	    value: function actionButtonMethod() {
	      var buttonHref = this.props.href;
	      if (!buttonHref) {
	        return null;
	      }

	      return this.props.method;
	    }
	  }, {
	    key: 'actionButtonHref',
	    value: function actionButtonHref() {
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
	    }
	  }, {
	    key: 'getSelectedData',
	    value: function getSelectedData() {
	      var selectedData = {};
	      if (this.props.allSelected && !!this.props.allSelectedData && !$.isEmptyObject(this.props.allSelectedData)) {
	        selectedData = this.props.allSelectedData;
	      } else {
	        selectedData[this.props.selectedRowIdsParam] = this.props.selectedRowIds;
	      }

	      return selectedData;
	    }
	  }]);

	  return TableActionButton;
	}(_react.Component), _class2.propTypes = {
	  selectedRowIds: _prop_types2.default.array,
	  selectedRowIdsParam: _prop_types2.default.string,
	  allSelected: _prop_types2.default.bool,
	  allSelectedData: _prop_types2.default.object,
	  count: _prop_types2.default.number,
	  actionUrl: _prop_types2.default.string,
	  method: _prop_types2.default.string,
	  disabled: _prop_types2.default.bool,
	  selectionContext: _prop_types2.default.oneOf(['none', 'atLeastOne']),
	  conditionToShowActionButton: _prop_types2.default.func,
	  component: _prop_types2.default.string,
	  params: _prop_types2.default.object
	}, _class2.defaultProps = {
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
	}, _temp2)) || _class);
	exports.default = TableActionButton;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	var _table_action_button = __webpack_require__(170);

	var _table_action_button2 = _interopRequireDefault(_table_action_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableActions = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(TableActions, _Component);

	  function TableActions() {
	    _classCallCheck(this, TableActions);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableActions).apply(this, arguments));
	  }

	  _createClass(TableActions, [{
	    key: 'renderButtons',
	    value: function renderButtons() {
	      var actionButtons = [];
	      var actionButtonsProps = this.props.actionButtons;

	      for (var i = 0; i < actionButtonsProps.length; i++) {
	        var actionButtonProps = actionButtonsProps[i];
	        actionButtons.push(_react2.default.createElement(_table_action_button2.default, _extends({}, actionButtonProps, this.propsWithoutCSS(), {
	          element: "a",
	          themeClassKey: "button.flat",
	          key: "action_" + i
	        })));
	      }

	      return actionButtons;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(TableSelectionIndicator, this.propsWithoutCSS()),
	          this.renderButtons()
	        )
	      );
	    }
	  }]);

	  return TableActions;
	}(_react.Component), _class2.propTypes = {
	  dataRows: _prop_types2.default.array,
	  selectable: _react2.default.PropTypes.oneOf(['multiple', 'none', 'one']),
	  selectedRowIds: _prop_types2.default.array,
	  selectedRowIdsParam: _prop_types2.default.string,
	  actionButtons: _prop_types2.default.array,
	  allSelected: _prop_types2.default.bool,
	  count: _prop_types2.default.number,
	  onRemoveSelection: _prop_types2.default.func,
	  onSelectAll: _prop_types2.default.func,
	  rowSelectableFilter: _prop_types2.default.func,
	  forceShowSelectAllButton: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  themeClassKey: 'table.actions',
	  actionButtons: [],
	  selectable: 'multiple',
	  selectedRowIds: [],
	  allSelected: false,
	  rowSelectableFilter: null,
	  forceShowSelectAllButton: false,
	  onRemoveSelection: function onRemoveSelection(event) {},
	  onSelectAll: function onSelectAll(event) {}
	}, _temp)) || _class);
	exports.default = TableActions;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _numeral = __webpack_require__(19);

	var _numeral2 = _interopRequireDefault(_numeral);

	var _i18n = __webpack_require__(7);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _css_class_mixin = __webpack_require__(53);

	var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableCell = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(TableCell, _Component);

	  function TableCell() {
	    _classCallCheck(this, TableCell);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableCell).apply(this, arguments));
	  }

	  _createClass(TableCell, [{
	    key: 'renderValue',
	    value: function renderValue() {
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
	        return _react2.default.createElement(eval(this.props.component), _jquery2.default.extend({}, this.props, { value: value }));
	      } else {
	        return value;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'td',
	        { className: this.cellClassName() },
	        this.renderValue()
	      );
	    }
	  }, {
	    key: 'cellClassName',
	    value: function cellClassName() {
	      var className = this.className();
	      if (!!this.props.format) {
	        className += ' table-cell--' + this.props.format;
	      }

	      if (!!this.props.name) {
	        className += ' table-cell--' + this.props.name;
	      }

	      return className;
	    }
	  }, {
	    key: 'textValue',
	    value: function textValue(value) {
	      return value;
	    }
	  }, {
	    key: 'numberValue',
	    value: function numberValue(value) {
	      value = parseFloat(value);
	      return (0, _numeral2.default)(value).format(this.getFormatString());
	    }
	  }, {
	    key: 'percentageValue',
	    value: function percentageValue(value) {
	      value = parseFloat(value);
	      if (value > 1.0 || value < -1.0) {
	        value = value / 100.0;
	      }

	      return (0, _numeral2.default)(value).format(this.getFormatString());
	    }
	  }, {
	    key: 'currencyValue',
	    value: function currencyValue(value) {
	      value = parseFloat(value);
	      return (0, _numeral2.default)(value).format(this.getFormatString());
	    }
	  }, {
	    key: 'booleanValue',
	    value: function booleanValue(value) {
	      return _i18n2.default.t(String(value));
	    }
	  }, {
	    key: 'dateValue',
	    value: function dateValue(value) {
	      var dateValue = _moment2.default.utc(value, _moment2.default.ISO_8601);
	      if (dateValue.isValid()) {
	        return dateValue.format(this.getFormatString());
	      }

	      return value;
	    }
	  }, {
	    key: 'datetimeValue',
	    value: function datetimeValue(value) {
	      var dateTimeValue = _moment2.default.utc(value, _moment2.default.ISO_8601);
	      if (dateTimeValue.isValid()) {
	        return dateTimeValue.format(this.getFormatString());
	      }

	      return value;
	    }
	  }, {
	    key: 'timeValue',
	    value: function timeValue(value) {
	      value = _moment2.default.utc(value);
	      return value.format(this.getFormatString());
	    }
	  }, {
	    key: 'getFormatString',
	    value: function getFormatString() {
	      var format = this.props.format;
	      var formatString = this.props.formatString;

	      return formatString || _i18n2.default.t('table.cell.formats.' + format);
	    }
	  }]);

	  return TableCell;
	}(_react.Component), _class2.propTypes = {
	  name: _prop_types2.default.string,
	  data: _prop_types2.default.object,
	  dataRowIdField: _prop_types2.default.string,
	  value: _prop_types2.default.func,
	  format: _prop_types2.default.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime', 'time']),
	  formatString: _prop_types2.default.string,
	  component: _prop_types2.default.string
	}, _class2.defaultProps = {
	  themeClassKey: 'table.cell',
	  data: {},
	  format: 'text',
	  formatString: null,
	  component: null
	}, _temp)) || _class);
	exports.default = TableCell;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableHeader = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.LocalizedResourceFieldMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(TableHeader, _Component);

	  function TableHeader() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, TableHeader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableHeader)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.sortColumn = function () {
	      if (!_this.props.sortable) {
	        return null;
	      }

	      var sortData = _this.buildSortData();
	      _this.props.onSort(sortData);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(TableHeader, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'th',
	        { className: this.headerClassName() },
	        _react2.default.createElement(
	          'span',
	          { onClick: this.sortColumn, className: this.labelClassName() },
	          this.getLabel()
	        )
	      );
	    }
	  }, {
	    key: 'headerClassName',
	    value: function headerClassName() {
	      var className = this.className();
	      if (!!this.props.format) {
	        className += ' table-header--' + this.props.format;
	      }

	      return className;
	    }
	  }, {
	    key: 'getLabel',
	    value: function getLabel() {
	      if (!!this.props.label && this.props.label.length > 0) {
	        return Realize.i18n.t(this.props.label);
	      }

	      return this.localizeResourceField();
	    }
	  }, {
	    key: 'labelClassName',
	    value: function labelClassName() {
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
	    }
	  }, {
	    key: 'buildSortData',
	    value: function buildSortData() {
	      var sortField = this.getSortFieldName();
	      var sortDirection = this.getSortDirection();

	      return {
	        field: sortField,
	        direction: sortDirection
	      };
	    }
	  }, {
	    key: 'getSortFieldName',
	    value: function getSortFieldName() {
	      return this.props.sortFieldName || this.props.name;
	    }
	  }, {
	    key: 'getSortDirection',
	    value: function getSortDirection() {
	      var currentSortDirection = this.props.sortDirection;
	      if (currentSortDirection === null || currentSortDirection == 'desc') {
	        return 'asc';
	      } else if (currentSortDirection == 'asc') {
	        return 'desc';
	      }
	    }
	  }]);

	  return TableHeader;
	}(_react.Component), _class2.propTypes = {
	  label: _prop_types2.default.localizedString,
	  format: _prop_types2.default.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime', 'time']),
	  sortable: _prop_types2.default.bool,
	  sortDirection: _prop_types2.default.string,
	  sortFieldName: _prop_types2.default.string,
	  onSort: _prop_types2.default.func
	}, _class2.defaultProps = {
	  themeClassKey: 'table.header',
	  sortable: true,
	  sortDirection: null,
	  sortFieldName: null,
	  onSort: function onSort(sortData) {
	    return true;
	  }
	}, _temp2)) || _class);
	exports.default = TableHeader;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _button = __webpack_require__(112);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableRowActionButton = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RequestHandlerMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(TableRowActionButton, _Component);

	  function TableRowActionButton() {
	    _classCallCheck(this, TableRowActionButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableRowActionButton).apply(this, arguments));
	  }

	  _createClass(TableRowActionButton, [{
	    key: 'renderButton',
	    value: function renderButton() {
	      var component = [];
	      if (!this.props.conditionToShowActionButton(this.props.data)) {
	        return component;
	      }

	      if (!!this.props.component) {
	        return _react2.default.createElement(eval(this.props.component), this.props);
	      } else {
	        component.push(_react2.default.createElement(_button2.default, _extends({}, this.props, {
	          method: this.actionButtonMethod(),
	          href: this.actionButtonHref(),
	          onClick: this.actionButtonClick,
	          key: 'button'
	        })));
	      }

	      return component;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        this.renderButton()
	      );
	    }
	  }, {
	    key: 'actionButtonMethod',
	    value: function actionButtonMethod() {
	      var buttonHref = this.props.href;
	      if (!buttonHref) {
	        return null;
	      }

	      return this.props.method;
	    }
	  }, {
	    key: 'actionButtonHref',
	    value: function actionButtonHref() {
	      var buttonHref = this.props.href;
	      if (!!buttonHref) {
	        var dataRowId = this.props.data[this.props.dataRowIdField];
	        buttonHref = buttonHref.replace(/:id/, dataRowId);
	      }

	      return buttonHref;
	    }
	  }, {
	    key: 'actionButtonUrl',
	    value: function actionButtonUrl() {
	      var buttonActionUrl = this.props.actionUrl;
	      if (!!buttonActionUrl) {
	        var dataRowId = this.props.data[this.props.dataRowIdField];
	        buttonActionUrl = buttonActionUrl.replace(/:id/, dataRowId);
	      }

	      return buttonActionUrl;
	    }
	  }, {
	    key: 'actionButtonClick',
	    value: function actionButtonClick(event) {
	      var buttonOnClick = this.props.onClick;
	      var buttonAction = this.actionButtonUrl();

	      if (_jquery2.default.isFunction(buttonOnClick)) {
	        var dataRowId = this.props.data[this.props.dataRowIdField];
	        buttonOnClick(event, dataRowId, this.props.data);
	      } else if (!!buttonAction) {
	        var actionData = this.getActionData(this.props);
	        this.performRequest(buttonAction, actionData, this.props.method || 'POST');
	      }

	      event.stopPropagation();
	    }
	  }, {
	    key: 'getActionData',
	    value: function getActionData() {
	      var dataIdParam = this.props.dataIdParam || 'id';
	      var dataRowId = this.props.data[this.props.dataRowIdField];
	      var actionData = {};

	      actionData[dataIdParam] = dataRowId;
	      return actionData;
	    }
	  }]);

	  return TableRowActionButton;
	}(_react.Component), _class2.propTypes = {
	  data: _prop_types2.default.object,
	  dataRowIdField: _prop_types2.default.string,
	  count: _prop_types2.default.number,
	  actionUrl: _prop_types2.default.string,
	  method: _prop_types2.default.string,
	  disabled: _prop_types2.default.bool,
	  conditionToShowActionButton: _prop_types2.default.func,
	  component: _prop_types2.default.string,
	  element: _prop_types2.default.string
	}, _class2.defaultProps = {
	  data: {},
	  dataRowIdField: 'id',
	  method: null,
	  disabled: false,
	  component: null,
	  element: 'a',
	  themeClassKey: 'button.flat',
	  conditionToShowActionButton: function conditionToShowActionButton(data) {
	    return true;
	  }
	}, _temp)) || _class);
	exports.default = TableRowActionButton;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _table_row_action_button = __webpack_require__(174);

	var _table_row_action_button2 = _interopRequireDefault(_table_row_action_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableRowActions = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RequestHandlerMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(TableRowActions, _Component);

	  function TableRowActions() {
	    _classCallCheck(this, TableRowActions);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableRowActions).apply(this, arguments));
	  }

	  _createClass(TableRowActions, [{
	    key: 'renderButtons',
	    value: function renderButtons() {
	      var actionButtons = [];
	      var actionButtonsProps = this.props.actionButtons;

	      for (var i = 0; i < actionButtonsProps.length; i++) {
	        var actionButtonProps = actionButtonsProps[i];

	        if (!!actionButtonProps.component) {
	          return _react2.default.createElement(eval(actionButtonProps.component), _jquery2.default.extend({}, this.props, actionButtonProps.paramsToComponent));
	        } else {
	          actionButtons.push(_react2.default.createElement(_table_row_action_button2.default, _extends({ key: "action_" + i }, actionButtonProps, { dataRowIdField: this.props.dataRowIdField, data: this.props.data })));
	        }
	      }

	      return actionButtons;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'td',
	        { className: this.className() },
	        this.renderButtons()
	      );
	    }
	  }]);

	  return TableRowActions;
	}(_react.Component), _class2.propTypes = {
	  data: _prop_types2.default.object,
	  dataRowIdField: _prop_types2.default.string,
	  actionButtons: _prop_types2.default.array,
	  conditionParams: _prop_types2.default.object,
	  component: _prop_types2.default.string,
	  paramsToComponent: _prop_types2.default.object
	}, _class2.defaultProps = {
	  data: {},
	  dataRowIdField: 'id',
	  actionButtons: [],
	  themeClassKey: 'table.row.actions',
	  conditionParams: {},
	  component: null,
	  paramsToComponent: {}
	}, _temp)) || _class);
	exports.default = TableRowActions;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _table_select_cell = __webpack_require__(177);

	var _table_select_cell2 = _interopRequireDefault(_table_select_cell);

	var _table_cell = __webpack_require__(172);

	var _table_cell2 = _interopRequireDefault(_table_cell);

	var _table_row_actions = __webpack_require__(175);

	var _table_row_actions2 = _interopRequireDefault(_table_row_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableRow = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(TableRow, _Component);

	  function TableRow() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, TableRow);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableRow)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.rowClick = function (event) {
	      if (event.isPropagationStopped()) {
	        return;
	      }

	      var onClickRow = _this.props.onClickRow;
	      var rowHref = _this.props.rowHref;

	      if (!!onClickRow && typeof onClickRow === "function") {
	        onClickRow(event, _this.props.data);
	      } else if (!!rowHref && typeof rowHref === "string") {
	        _this.goToRowHref(event);
	      }
	    }, _this.goToRowHref = function (event) {
	      var rowHref = _this.props.rowHref;
	      var dataRowId = _this.props.data[_this.props.dataRowIdField];

	      window.location.href = rowHref.replace(/:id/, dataRowId);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(TableRow, [{
	    key: 'renderSelectCell',
	    value: function renderSelectCell() {
	      if (this.props.selectable === 'none') {
	        return _react2.default.createElement('td', { className: "table-select" });
	      }

	      var rowSelectableFilter = this.props.rowSelectableFilter;
	      if (typeof rowSelectableFilter === "function" && !rowSelectableFilter(this.props.data)) {
	        return _react2.default.createElement('td', { className: "table-select" });
	      }

	      return _react2.default.createElement(_table_select_cell2.default, {
	        onSelectToggle: this.handleSelectToggle.bind(this),
	        dataRowIds: [this.getDataRowId()],
	        rowId: String(this.getDataRowId()),
	        selected: this.props.selected,
	        key: 'select'
	      });
	    }
	  }, {
	    key: 'handleSelectToggle',
	    value: function handleSelectToggle(e, dataRowsIds, selected) {
	      this.props.onSelectToggle(e, dataRowsIds, selected, this.props.data);
	    }
	  }, {
	    key: 'renderCells',
	    value: function renderCells() {
	      var columns = this.props.columns;
	      var cellComponents = [];

	      $.each(columns, function (columnKey, columnProps) {
	        var columnName = columnProps.name || columnKey;
	        cellComponents.push(_react2.default.createElement(_table_cell2.default, _extends({}, columnProps, this.propsWithoutCSS(), {
	          name: columnName,
	          key: columnName
	        })));
	      }.bind(this));

	      return cellComponents;
	    }
	  }, {
	    key: 'renderActionsCell',
	    value: function renderActionsCell() {
	      if (!$.isArray(this.props.actionButtons) || this.props.actionButtons.length === 0) {
	        return _react2.default.createElement('td', null);
	      }

	      return _react2.default.createElement(_table_row_actions2.default, _extends({}, this.propsWithoutCSS(), { ref: 'actions' }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'tr',
	        { className: this.getClassName(), ref: 'row', onClick: this.rowClick },
	        this.renderSelectCell(),
	        this.renderCells(),
	        this.renderActionsCell()
	      );
	    }
	  }, {
	    key: 'getClassName',
	    value: function getClassName() {
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
	    }
	  }, {
	    key: 'getDataRowId',
	    value: function getDataRowId() {
	      return this.props.data[this.props.dataRowIdField];
	    }
	  }]);

	  return TableRow;
	}(_react.Component), _class2.propTypes = {
	  columns: _prop_types2.default.object,
	  data: _prop_types2.default.object,
	  dataRowIdField: _prop_types2.default.string,
	  selectable: _react2.default.PropTypes.oneOf(['multiple', 'none', 'one']),
	  selected: _prop_types2.default.bool,
	  actionButtons: _prop_types2.default.array,
	  rowSelectableFilter: _prop_types2.default.func,
	  onSelectToggle: _prop_types2.default.func,
	  onClickRow: _prop_types2.default.func,
	  rowHref: _prop_types2.default.string,
	  tableRowCssClass: _prop_types2.default.func
	}, _class2.defaultProps = {
	  columns: {},
	  data: {},
	  dataRowIdField: 'id',
	  selectable: 'multiple',
	  selected: false,
	  actionButtons: [],
	  themeClassKey: 'table.row',
	  rowSelectableFilter: null,
	  onClickRow: null,
	  rowHref: null,
	  tableRowCssClass: null,
	  onSelectToggle: function onSelectToggle(event, dataRows, selected) {}
	}, _temp2)) || _class);
	exports.default = TableRow;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _utils = __webpack_require__(8);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _components = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableSelectCell = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(TableSelectCell, _Component);

	  function TableSelectCell() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, TableSelectCell);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableSelectCell)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleChange = function (event) {
	      _this.props.onSelectToggle(event, _this.props.dataRowIds, !_this.props.selected);
	      event.stopPropagation();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(TableSelectCell, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(this.props.cellElement, { className: this.className() }, [_react2.default.createElement(_components.InputCheckbox, { id: this.getCheckboxId(), checked: this.props.selected, key: _utils.uuid.v4() }), _react2.default.createElement(_components.Label, { id: this.getCheckboxId(), key: 'label', onClick: this.handleChange })]);
	    }
	  }, {
	    key: 'getCheckboxId',
	    value: function getCheckboxId() {
	      return "select_" + String(this.props.rowId);
	    }
	  }]);

	  return TableSelectCell;
	}(_react.Component), _class2.propTypes = {
	  rowId: _prop_types2.default.string,
	  cellElement: _prop_types2.default.string,
	  dataRowIds: _prop_types2.default.array,
	  selected: _prop_types2.default.bool,
	  onSelectToggle: _prop_types2.default.func
	}, _class2.defaultProps = {
	  themeClassKey: 'table.select',
	  className: 'table-select',
	  rowId: '',
	  cellElement: 'td',
	  dataRowIds: [],
	  selected: false,
	  onSelectToggle: function onSelectToggle(event, dataRows, selected) {}
	}, _temp2)) || _class);
	exports.default = TableSelectCell;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableSelectionIndicator = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(TableSelectionIndicator, _Component);

	  function TableSelectionIndicator() {
	    _classCallCheck(this, TableSelectionIndicator);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableSelectionIndicator).apply(this, arguments));
	  }

	  _createClass(TableSelectionIndicator, [{
	    key: 'renderMessage',
	    value: function renderMessage() {
	      var count = this.getSelectionCount();
	      if (count === 0) {
	        return '';
	      } else if (count === 1) {
	        return Realize.i18n.t(this.props.message.singular);
	      } else {
	        var message = Realize.i18n.t(this.props.message.plural);
	        return message.replace(/:count/, count);
	      }
	    }
	  }, {
	    key: 'renderActions',
	    value: function renderActions() {
	      var count = this.getSelectionCount();
	      if (count === 0 || this.props.selectable !== 'multiple') {
	        return '';
	      }

	      return _react2.default.createElement(
	        'span',
	        null,
	        '(',
	        this.renderRemoveSelectionButton(),
	        this.renderSelectAllButton(),
	        ')'
	      );
	    }
	  }, {
	    key: 'renderRemoveSelectionButton',
	    value: function renderRemoveSelectionButton() {
	      return _react2.default.createElement(
	        'a',
	        { href: '#!', onClick: this.props.onRemoveSelection },
	        Realize.i18n.t(this.props.removeSelectionButtonName)
	      );
	    }
	  }, {
	    key: 'renderSelectAllButton',
	    value: function renderSelectAllButton() {
	      if (typeof this.props.rowSelectableFilter === "function" || this.props.allSelected) {
	        if (!this.props.forceShowSelectAllButton) {
	          return '';
	        }
	      }

	      return _react2.default.createElement(
	        'span',
	        null,
	        ' | ',
	        _react2.default.createElement(
	          'a',
	          { href: '#!', onClick: this.props.onSelectAll },
	          this.getSelectAllButtonName()
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        _react2.default.createElement(
	          'span',
	          null,
	          this.renderMessage()
	        ),
	        ' ',
	        this.renderActions()
	      );
	    }
	  }, {
	    key: 'getSelectionCount',
	    value: function getSelectionCount() {
	      if (this.props.allSelected && !!this.props.count) {
	        return this.props.count;
	      } else {
	        return this.props.selectedRowIds.length;
	      }
	    }
	  }, {
	    key: 'getSelectAllButtonName',
	    value: function getSelectAllButtonName() {
	      var buttonName = Realize.i18n.t(this.props.selectAllButtonName);
	      var count = this.props.count || this.props.dataRows.length;

	      return buttonName.replace(/:count/, count);
	    }
	  }]);

	  return TableSelectionIndicator;
	}(_react.Component), _class2.propTypes = {
	  dataRows: _prop_types2.default.array,
	  selectedRowIds: _prop_types2.default.array,
	  actionButtons: _prop_types2.default.array,
	  message: _prop_types2.default.object,
	  removeSelectionButtonName: _prop_types2.default.localizedString,
	  selectable: _prop_types2.default.oneOf(['multiple', 'none', 'one']),
	  selectAllButtonName: _prop_types2.default.localizedString,
	  allSelected: _prop_types2.default.bool,
	  count: _prop_types2.default.number,
	  onRemoveSelection: _prop_types2.default.func,
	  onSelectAll: _prop_types2.default.func,
	  rowSelectableFilter: _prop_types2.default.func,
	  forceShowSelectAllButton: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  themeClassKey: 'table.selectionIndicator',
	  dataRows: [],
	  selectedRowIds: [],
	  actionButtons: [],
	  message: {
	    plural: 'table.selection.select.plural',
	    singular: 'table.selection.select.singular'
	  },
	  removeSelectionButtonName: 'table.selection.clear',
	  selectable: 'multiple',
	  selectAllButtonName: 'table.selection.selectAll',
	  allSelected: false,
	  rowSelectableFilter: null,
	  forceShowSelectAllButton: false,
	  onRemoveSelection: function onRemoveSelection(event) {},
	  onSelectAll: function onSelectAll(event) {}
	}, _temp)) || _class);
	exports.default = TableSelectionIndicator;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _realize = __webpack_require__(59);

	var _realize2 = _interopRequireDefault(_realize);

	var _i18n = __webpack_require__(44);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _theme = __webpack_require__(30);

	var _theme2 = _interopRequireDefault(_theme);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	var _table_actions = __webpack_require__(171);

	var _table_actions2 = _interopRequireDefault(_table_actions);

	var _table_select_cell = __webpack_require__(177);

	var _table_select_cell2 = _interopRequireDefault(_table_select_cell);

	var _table_header = __webpack_require__(173);

	var _table_header2 = _interopRequireDefault(_table_header);

	var _table_row = __webpack_require__(176);

	var _table_row2 = _interopRequireDefault(_table_row);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Table = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Table, _Component);

	  function Table(props) {
	    _classCallCheck(this, Table);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

	    _this.toggleDataRows = function (event, dataRowIds, selected, selectedData) {
	      var selectedRowIds = [];
	      if (selected) {
	        selectedRowIds = _this.getSelectedDataRows(dataRowIds);
	      } else {
	        selectedRowIds = _this.removeSelectedDataRows(dataRowIds);
	        selectedData = {};
	      }

	      _this.props.onSelect(event, selectedRowIds, selectedData);
	      if (!event.isDefaultPrevented()) {
	        _this.setState({
	          selectedRowIds: selectedRowIds,
	          allSelected: false
	        });
	      }
	    };

	    _this.removeSelection = function (event) {
	      _this.props.onRemoveSelection(event);

	      if (!event.isDefaultPrevented()) {
	        _this.setState({
	          selectedRowIds: [],
	          allSelected: false
	        });
	      }
	    };

	    _this.selectAllRows = function (event) {
	      _this.props.onSelectAll(event);

	      if (!event.isDefaultPrevented()) {
	        _this.setState({
	          allSelected: true
	        });
	      }
	    };

	    _this.state = {
	      selectedRowIds: _this.props.selectedRowIds || [],
	      allSelected: _this.props.allSelected
	    };
	    return _this;
	  }

	  _createClass(Table, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var selectedRowIds = nextProps.selectedRowIds;
	      var allSelected = nextProps.allSelected;

	      if (!!selectedRowIds && $.isArray(selectedRowIds)) {
	        this.setState({ selectedRowIds: selectedRowIds });
	      }

	      if (allSelected !== null && allSelected !== undefined) {
	        this.setState({ allSelected: allSelected });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.sortConfigs = $.extend({}, _realize2.default.config.grid.sort, this.props.sortConfigs);

	      if (!!this.props.customTableHeader) {
	        var $thead = $(ReactDOM.findDOMNode(this.refs.thead));
	        $thead.prepend(this.props.customTableHeader);
	      }
	    }
	  }, {
	    key: 'renderActions',
	    value: function renderActions() {
	      var collectionButtons = this.props.actionButtons.collection || [];
	      if (this.props.selectable === 'none' && collectionButtons.length == 0) {
	        return '';
	      }

	      return _react2.default.createElement(_table_actions2.default, {
	        dataRows: this.state.dataRows,
	        selectedRowIds: this.state.selectedRowIds,
	        selectedRowIdsParam: this.props.selectedRowIdsParam,
	        selectable: this.props.selectable,
	        allSelected: this.state.allSelected,
	        allSelectedData: this.props.allSelectedData,
	        count: this.props.count,
	        onRemoveSelection: this.removeSelection,
	        onSelectAll: this.selectAllRows,
	        actionButtons: this.props.actionButtons.collection || [],
	        rowSelectableFilter: this.props.rowSelectableFilter,
	        forceShowSelectAllButton: this.props.forceShowSelectAllButton
	      });
	    }
	  }, {
	    key: 'renderHeaderSelectCell',
	    value: function renderHeaderSelectCell() {
	      if (this.props.selectable === 'none' || this.props.selectable === 'one') {
	        return _react2.default.createElement('th', { className: "table-select" });
	      }

	      return _react2.default.createElement(_table_select_cell2.default, {
	        onSelectToggle: this.toggleDataRows,
	        dataRowIds: this.getDataRowIds(),
	        selected: this.isAllDataRowsSelected(),
	        rowId: "all",
	        cellElement: "th",
	        key: "header_select"
	      });
	    }
	  }, {
	    key: 'renderTableHeaders',
	    value: function renderTableHeaders() {
	      var columns = this.props.columns;
	      var headerComponents = [];

	      for (var columnName in columns) {
	        if (columns.hasOwnProperty(columnName)) {
	          var columnProps = columns[columnName];
	          headerComponents.push(_react2.default.createElement(_table_header2.default, _extends({}, columnProps, this.sortConfigs, {
	            name: columnName,
	            key: columnName,
	            sortDirection: this.sortDirectionForColumn(columnName, columnProps),
	            ref: "header_" + columnName,
	            resource: this.props.resource,
	            onSort: this.props.onSort,
	            clearTheme: this.props.clearTheme
	          })));
	        }
	      }

	      return headerComponents;
	    }
	  }, {
	    key: 'renderTableRows',
	    value: function renderTableRows() {
	      var rowComponents = [];
	      var dataRows = this.props.dataRows;

	      for (var i = 0; i < dataRows.length; i++) {
	        var dataRow = dataRows[i];
	        rowComponents.push(_react2.default.createElement(_table_row2.default, _extends({}, this.propsWithoutCSS(), {
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
	    }
	  }, {
	    key: 'renderEmptyMessage',
	    value: function renderEmptyMessage() {
	      var columnsCount = 1;
	      for (var key in this.props.columns) {
	        columnsCount++;
	      }

	      if (this.props.selectable === 'multiple') {
	        columnsCount++;
	      }

	      return _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { colSpan: columnsCount, className: 'empty-message' },
	          _i18n2.default.t(this.props.emptyMessage)
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.wrapperClassName() },
	        this.renderActions(),
	        _react2.default.createElement(
	          'table',
	          { className: this.className() },
	          _react2.default.createElement(
	            'thead',
	            { ref: 'thead' },
	            _react2.default.createElement(
	              'tr',
	              null,
	              this.renderHeaderSelectCell(),
	              this.renderTableHeaders()
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            this.props.dataRows.length > 0 ? this.renderTableRows() : this.renderEmptyMessage()
	          )
	        )
	      );
	    }
	  }, {
	    key: 'wrapperClassName',
	    value: function wrapperClassName() {
	      var wrapperClassName = '';
	      if (!this.props.clearTheme) {
	        wrapperClassName = _theme2.default.getCssClass('table.wrapper');
	      }

	      return wrapperClassName;
	    }
	  }, {
	    key: 'sortDirectionForColumn',
	    value: function sortDirectionForColumn(columnName, columnProps) {
	      var sortFieldName = columnProps.sortFieldName;
	      var sortField = sortFieldName || columnName;

	      var sortData = this.props.sortData;
	      if (!!sortData.field && sortData.field == sortField) {
	        return sortData.direction;
	      }

	      return null;
	    }
	  }, {
	    key: 'getDataRowIds',
	    value: function getDataRowIds() {
	      var rowSelectableFilter = this.props.rowSelectableFilter;
	      var selectableDataRows = $.grep(this.props.dataRows, function (dataRow) {
	        return !rowSelectableFilter || !!rowSelectableFilter(dataRow);
	      });

	      return $.map(selectableDataRows, function (dataRow) {
	        return dataRow[this.props.dataRowIdField];
	      }.bind(this));
	    }
	  }, {
	    key: 'getSelectedDataRows',
	    value: function getSelectedDataRows(dataRowId) {
	      if (this.props.selectable === 'one') return dataRowId;

	      return this.addSelectedDataRow(dataRowId);
	    }
	  }, {
	    key: 'addSelectedDataRow',
	    value: function addSelectedDataRow(dataRowId) {
	      var selectedRowIds = this.state.selectedRowIds.slice();

	      dataRowId.filter(function (dataRowId) {
	        return selectedRowIds.indexOf(dataRowId) < 0;
	      }).forEach(function (dataRowId) {
	        return selectedRowIds.push(dataRowId);
	      });

	      return selectedRowIds;
	    }
	  }, {
	    key: 'removeSelectedDataRows',
	    value: function removeSelectedDataRows(dataRowIds) {
	      return $.grep(this.state.selectedRowIds, function (dataRowId) {
	        return $.inArray(dataRowId, dataRowIds) < 0;
	      }.bind(this));
	    }
	  }, {
	    key: 'dataRowIsSelected',
	    value: function dataRowIsSelected(dataRow) {
	      var dataRowId = dataRow[this.props.dataRowIdField];
	      return $.inArray(dataRowId, this.state.selectedRowIds) >= 0 || this.props.allSelected;
	    }
	  }, {
	    key: 'isAllDataRowsSelected',
	    value: function isAllDataRowsSelected() {
	      var dataRowIds = this.getDataRowIds();
	      var selectedRowIdsInPage = $.grep(this.state.selectedRowIds, function (selectedDataRowId) {
	        return $.inArray(selectedDataRowId, dataRowIds) >= 0;
	      });

	      return dataRowIds.length > 0 && dataRowIds.length == selectedRowIdsInPage.length || this.props.allSelected;
	    }
	  }]);

	  return Table;
	}(_react.Component), _class2.propTypes = {
	  resource: _prop_types2.default.string,
	  columns: _prop_types2.default.object,
	  dataRowIdField: _prop_types2.default.string,
	  selectedRowIdsParam: _prop_types2.default.string,
	  selectable: _prop_types2.default.oneOf(['multiple', 'none', 'one']),
	  sortConfigs: _prop_types2.default.object,
	  sortData: _prop_types2.default.object,
	  dataRows: _prop_types2.default.array,
	  count: _prop_types2.default.number,
	  selectedRowIds: _prop_types2.default.array,
	  allSelected: _prop_types2.default.bool,
	  allSelectedData: _prop_types2.default.object,
	  emptyMessage: _prop_types2.default.localizedString,
	  actionButtons: _prop_types2.default.object,
	  onSort: _prop_types2.default.func,
	  onSelect: _prop_types2.default.func,
	  onRemoveSelection: _prop_types2.default.func,
	  onSelectAll: _prop_types2.default.func,
	  rowSelectableFilter: _prop_types2.default.func,
	  forceShowSelectAllButton: _prop_types2.default.bool,
	  onClickRow: _prop_types2.default.func,
	  rowHref: _prop_types2.default.string,
	  tableRowCssClass: _prop_types2.default.func
	}, _class2.defaultProps = {
	  themeClassKey: 'table',
	  columns: {},
	  dataRowIdField: 'id',
	  selectedRowIdsParam: 'rowIds',
	  selectable: 'multiple',
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
	}, _temp)) || _class);
	exports.default = Table;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tabs = exports.TabButton = exports.Tab = undefined;

	var _tab = __webpack_require__(181);

	var _tab2 = _interopRequireDefault(_tab);

	var _tab_button = __webpack_require__(182);

	var _tab_button2 = _interopRequireDefault(_tab_button);

	var _tabs = __webpack_require__(183);

	var _tabs2 = _interopRequireDefault(_tabs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Tab = _tab2.default;
	exports.TabButton = _tab_button2.default;
	exports.Tabs = _tabs2.default;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tab = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.ContainerMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Tab, _Component);

	  function Tab() {
	    _classCallCheck(this, Tab);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
	  }

	  _createClass(Tab, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: this.props.id, className: this.className() },
	        this.renderChildren()
	      );
	    }
	  }]);

	  return Tab;
	}(_react.Component), _class2.propTypes = {
	  id: _react2.default.PropTypes.string
	}, _temp)) || _class);
	exports.default = Tab;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TabButton = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.ContainerMixin, _mixins.FormContainerMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(TabButton, _Component);

	  function TabButton() {
	    _classCallCheck(this, TabButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TabButton).apply(this, arguments));
	  }

	  _createClass(TabButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        { className: this.formContainerClassName() },
	        _react2.default.createElement(
	          'a',
	          { href: '#' + this.props.id, className: this.props.active ? "active" : "" },
	          this.props.title
	        )
	      );
	    }
	  }]);

	  return TabButton;
	}(_react.Component), _class2.propTypes = {
	  id: _prop_types2.default.string,
	  title: _prop_types2.default.string,
	  active: _prop_types2.default.bool
	}, _class2.defaultProps = {
	  themeClassKey: 'tabs.tabButton',
	  errorThemeClassKey: 'tabs.tabButton.error',
	  className: 's1',
	  active: false
	}, _temp)) || _class);
	exports.default = TabButton;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _prop_types = __webpack_require__(6);

	var _prop_types2 = _interopRequireDefault(_prop_types);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _decorators = __webpack_require__(10);

	var _mixins = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tabs = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.ContainerMixin), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Tabs, _Component);

	  function Tabs() {
	    _classCallCheck(this, Tabs);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).apply(this, arguments));
	  }

	  _createClass(Tabs, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _jquery2.default)(ReactDOM.findDOMNode(this.refs.tabsContainer)).tabs();
	    }
	  }, {
	    key: 'renderTabButtons',
	    value: function renderTabButtons() {
	      var tabs = [];
	      var children = this.getChildren();

	      _react2.default.Children.forEach(children, function (child, i) {
	        var isActive = i === this.props.activeTab - 1;
	        tabs.push(_react2.default.createElement(TabButton, _extends({}, child.props, { active: isActive, key: "tab_" + i })));
	      }.bind(this));

	      return tabs;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.className() },
	        _react2.default.createElement(
	          'ul',
	          { className: 'tabs z-depth-1', ref: 'tabsContainer' },
	          this.renderTabButtons()
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.renderChildren()
	        )
	      );
	    }
	  }]);

	  return Tabs;
	}(_react.Component), _class2.propTypes = {
	  activeTab: _prop_types2.default.number
	}, _class2.defaultProps = {
	  themeClassKey: 'tabs',
	  activeTab: 1
	}, _temp)) || _class);
	exports.default = Tabs;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalActions = exports.InputSelectActions = exports.FormActions = undefined;

	var _form_actions = __webpack_require__(27);

	var _form_actions2 = _interopRequireDefault(_form_actions);

	var _input_select_actions = __webpack_require__(47);

	var _input_select_actions2 = _interopRequireDefault(_input_select_actions);

	var _modal_actions = __webpack_require__(157);

	var _modal_actions2 = _interopRequireDefault(_modal_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FormActions = _form_actions2.default;
	exports.InputSelectActions = _input_select_actions2.default;
	exports.ModalActions = _modal_actions2.default;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(186);

	__webpack_require__(187);

	__webpack_require__(189);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.jQuery = _jquery2.default;
	window.$ = _jquery2.default;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(188);

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = require("materialize-css");

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _formSerializer = __webpack_require__(190);

	var _formSerializer2 = _interopRequireDefault(_formSerializer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$.extend(_formSerializer2.default.patterns, {
	  validate: /^[a-z_][a-z0-9#_\.-]*(?:\[(?:\d*|[a-z0-9#_\.-]+)\])*$/i,
	  key: /[a-z0-9#_\.-]+|(?=\[\])/gi,
	  named: /^[a-z0-9#_\.-]+$/i
	});

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = require("form-serializer");

/***/ }
/******/ ]);
