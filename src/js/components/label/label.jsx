var Label = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      active: false,
      name: '',
      label: '',
      themeClassKey: 'label'
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.getLabelThemeClassKey(this.props)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.getLabelThemeClassKey(nextProps)
    });
  },

  getLabelThemeClassKey: function(props) {
    var themeClassKey = props.themeClassKey;
    if(props.active) {
      themeClassKey += ' label.active';
    }

    return themeClassKey;
  },

  render: function() {
    return (
      <label htmlFor={this.props.id} onClick={this.props.onClick} className={this.className()}>
        {(this.props.label || this.props.name)}
      </label>
    );
  }
});
