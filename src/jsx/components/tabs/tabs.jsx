var Tabs = React.createClass({
  mixins: [
    CssClassMixin,
    ContainerMixin
  ],

  getDefaultProps: function() {
    return {
      themeClassKey: 'tabs',
      className: 's12'
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
      var isActive = (i === 0);
      tabs.push(<TabButton {...child.props} active={isActive} key={"tab_" + i} />);
    }.bind(this));

    return tabs;
  }
});