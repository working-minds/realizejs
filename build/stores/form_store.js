'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _form_actions = require('../actions/form_actions');

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