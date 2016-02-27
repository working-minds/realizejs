window.FormActionsListenerMixin = {
  propTypes: {
    onFormSubmit: React.PropTypes.func,
    onFormSuccess: React.PropTypes.func,
    onFormError: React.PropTypes.func,
    onFormReset: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      onFormSubmit: null,
      onFormSuccess: null,
      onFormError: null,
      onFormReset: null
    }
  },

  getInitialState: function() {
    return {
      formState: null
    }
  },

  componentDidMount: function() {
    FormStore.listen(this.formActionListener);
  },

  formActionListener: function(formState) {
    try {
      this.executePropListener(formState);
    } catch(e) {
      this.executeComponentListener(formState);
    }
  },

  executePropListener: function(formState) {
    var formAction = formState.action;
    var propListenerName = "onForm" + S(formAction).capitalize().s;
    var propListener = this.props[propListenerName];

    if(typeof propListener == "function") {
      propListener.apply(this, this.formActionParameters(formState));
    } else {
      throw 'Prop form listener not defined';
    }
  },

  executeComponentListener: function(formState) {
    var formAction = formState.action;
    var componentListenerName = "handleForm" + S(formAction).capitalize().s;
    var componentListener = this[componentListenerName];

    if(typeof componentListener == "function") {
      componentListener.apply(this, this.formActionParameters(formState));
    }
  },

  formActionParameters: function(formState) {
    var formActionData = formState.actionData;
    var formId = formState.formId;

    var formActionParameters = $.map(formActionData, function(value, index) {
      return [value];
    });

    formActionParameters.unshift(formId);
    return formActionParameters;
  }

};

module.exports = FormActionsListenerMixin;