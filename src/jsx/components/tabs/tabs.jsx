var Tabs = React.createClass({
  mixins: [
    CssClassMixin,
    ContainerMixin
  ],

  propTypes: {
    themeClassKey: React.PropTypes.string,
    className: React.PropTypes.string,
    activeTab: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'tabs',
      className: 's12',
      activeTab: 1
    };
  },

  componentDidMount: function () {
    $(React.findDOMNode(this.refs.tabsContainer)).tabs();
  },

  render: function () {
    return (
      <div className={this.className()}>
        <ul className="tabs z-depth-1" ref="tabsContainer">
          {this.renderTabButtons()}
        </ul>
        <div className="row">
          {this.renderChildren()}
        </div>
      </div>
    );
  },

  renderTabButtons: function () {
    var tabs = [];
    var children = this.getChildren();

    React.Children.forEach(children, function(child, i) {
      var isActive = (i === (this.props.activeTab - 1));
      tabs.push(<TabButton {...child.props} active={isActive} key={"tab_" + i} />);
    }.bind(this));

    return tabs;
  }
});