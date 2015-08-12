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
      <div className={this.className()} >
        <ul className="tabs z-depth-1" ref="tabsContainer">
          {this.renderTabs()}
        </ul>
        <div class="row">
          {this.renderChildren()}
        </div>
      </div>
    );
  },

  renderTabs: function () {
    var tabs = [];
    for (var i = 0; i < this.props.children.length; i++) {
      var isActive = i === 0 ? "active" : "";
      tabs[i] = (
        <li className="tab col s1">
          <a href={'#' + this.props.children[i].props.id} className={isActive}>
            {this.props.children[i].props.title}
          </a>
        </li>
      );
    }

    return tabs;
  }

});