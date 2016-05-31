import PropTypes from '../../prop_types';
import $ from 'jquery';

import FormStore from '../../stores/form_store';
import capitalize from 'lodash/capitalize'

export default {
  propTypes: {
    onFormSubmit: PropTypes.func,
    onFormSuccess: PropTypes.func,
    onFormError: PropTypes.func,
    onFormReset: PropTypes.func
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
    var propListenerName = "onForm" + capitalize(formAction);
    var propListener = this.props[propListenerName];

    if(typeof propListener == "function") {
      propListener.apply(this, this.formActionParameters(formState));
    } else {
      throw 'Prop form listener not defined';
    }
  },

  executeComponentListener: function(formState) {
    var formAction = formState.action;
    var componentListenerName = "handleForm" + capitalize(formAction);
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

}
