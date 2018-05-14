import React from 'react';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import themes from '../../theme';

export default {
  propTypes: {
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    errorThemeClassKey: PropTypes.string
  },

  getDefaultProps () {
    return {
      errors: {}
    };
  },

  formContainerClassName () {
    var className = this.className();
    if(this.inputChildrenHaveErrors() || (!!this.props.errors && !$.isEmptyObject(this.props.errors))) {
      className += ' ' + themes.getCssClass(this.props.errorThemeClassKey);
    }

    return className;
  },

  inputChildrenHaveErrors () {
    var errorIds = $.map(this.props.errors, function(error, errorId) {
      return errorId;
    });

    return this.checkInputChildrenForErrors(errorIds, this.props.children);
  },

  checkInputChildrenForErrors (errorIds, children) {
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

  checkInputGroupForErrors (errorIds, inputGroup) {
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

}
