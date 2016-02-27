var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.Label = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
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
    var labelProp = this.props.label;
    if(typeof(labelProp) == "boolean" && !labelProp) {
      return <span />;
    }

    return (
      <label htmlFor={this.props.id} onClick={this.props.onClick} className={this.className()}>
        {(labelProp || this.props.name)}
      </label>
    );
  }
});
