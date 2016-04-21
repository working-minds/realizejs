var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.InputError = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    errors: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])
  },

  getDefaultProps: function() {
    return {
      errors: [],
      themeClassKey: 'input.error.hint'
    };
  },

  render: function() {
    return (
      <span className={this.className()}>
        {this.errorMessages()}
      </span>
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
