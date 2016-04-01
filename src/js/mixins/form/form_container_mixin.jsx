window.FormContainerMixin = {
  propTypes: {
    errors: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    errorThemeClassKey: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      errors: {}
    };
  },

  formContainerClassName: function() {
    var className = this.className();
    if(this.inputChildrenHaveErrors() || (!!this.props.errors && !$.isEmptyObject(this.props.errors))) {
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

module.exports = FormContainerMixin;