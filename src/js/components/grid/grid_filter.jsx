var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.GridFilter = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    inputs: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    clearButton: React.PropTypes.object,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    collapsible: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      method: "GET",
      collapsible: false,
      submitButton: {
        name: 'actions.filter',
        icon: 'search'
      },
      clearButton: {
        name: 'actions.clear',
        type: 'reset',
        style: 'cancel'
      },
      onSuccess: function(data) {
        return true;
      },
      onError: function(xhr, status, error) {
        return true;
      },
      onSubmit: function(event) {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'grid.filter.wrapper'
    };
  },

  render: function() {
    return(
      <div className={this.className()}>
        {this.renderFilters()}
      </div>
    );
  },

  renderFilters: function() {
    if(this.props.collapsible)  {
      return this.renderCollapsibleFilter();
    } else {
     return this.renderFormFilters();
    }
  },

  componentDidUpdate: function(){
    var collapsible = ReactDOM.findDOMNode(this.refs.collapsible);
    if (!!collapsible) {
      $(collapsible).collapsible();
    }
  },

  renderCollapsibleFilter: function() {
    var component = [];

    component.push(
      <ul className='collapsible' data-collapsible='accordion' ref='collapsible' key='collapsible_form'>
        <li>
          <div className='collapsible-header'>
            <span>Filtrar</span>
            <i className='material-icons'>filter_list</i>
          </div>
          <div className='collapsible-body'>
            {this.renderFormFilters()}
          </div>
        </li>
      </ul>
    );

    return component;
  },

  renderFormFilters: function() {
    return (
      <Form {...this.props} otherButtons={[this.props.clearButton]} style="filter" ref="form" />
    )
  },

  serialize: function() {
    return this.refs.form.serialize();
  }

});
