var Tabs = React.createClass({

  render: function(){
    return (
        <span>
          <ul className="tabs" ref="tabsContainer">
            {this.renderTabs()}
          </ul>
          <div class="row">
            {this.props.children}
          </div>
        </span>
    );
  },

  componentDidMount: function(){
    $(React.findDOMNode(this.refs.tabsContainer)).tabs();
  },

  renderTabs: function() {
    var tabs = [];
    for(var i = 0; i < this.props.children.length; i++) {
      var isActive = i === 0 ? "active" : "";
      tabs[i] = (
          <li className="tab col s1">
            <a href={'#'+this.props.children[i].props.id} className={isActive}>
              {this.props.children[i].props.title}
            </a>
          </li>
      );
    }

    return tabs;
  }

});

var Tab = React.createClass({
  render: function(){
    return(
        <div id={this.props.id}>
			    {this.props.children}
        </div>
    );
  }
});