var InputAutocompleteValues = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    selectedOptions: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      multiple: false,
      selectedOptions: []
    };
  },

  render: function() {
    return (
      <select name={this.valueInputName()} style={{display: "none"}} multiple="true">
        {this.renderValueInputs()}
      </select>
    );
  },

  renderValueInputs: function() {
    var valueInputs = [];
    var selectedOptions = this.props.selectedOptions;

    for(var i = 0; i < selectedOptions.length; i++) {
      var option = selectedOptions[i];
      valueInputs.push(<option value={option.value} key={option.name} selected="true" />);
    }

    return valueInputs;
  },

  valueInputName: function() {
    var inputName = this.props.name;
    if(this.props.multiple) {
      inputName += '[]';
    }

    return inputName;
  }
});
