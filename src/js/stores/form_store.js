var FormActions = require('realize/actions/form_actions.js');

var FormStore = Reflux.createStore({
  listenables: [FormActions],
  formId: '',
  action: '',
  actionData: {},

  onSubmit: function(formId, event, postData) {
    this.formId = formId;
    this.action = 'submit';
    this.actionData = {
      event: event,
      postData: postData
    };

    this.trigger(this);
  },

  onSuccess: function(formId, responseData, status, xhr) {
    this.formId = formId;
    this.action = 'success';
    this.actionData = {
      responseData: responseData,
      status: status,
      xhr: xhr
    };

    this.trigger(this);
  },

  onError: function(formId, xhr, status, error) {
    this.formId = formId;
    this.action = 'error';
    this.actionData = {
      xhr: xhr,
      status: status,
      error: error
    };

    this.trigger(this);
  },

  onReset: function(formId, event) {
    this.formId = formId;
    this.action = 'reset';
    this.actionData = {
      event: event
    };

    this.trigger(this);
  }

});

module.exports = FormStore;
window.FormStore = FormStore;