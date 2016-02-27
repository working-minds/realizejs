var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');

window.TableRowActions = React.createClass({
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    conditionParams: React.PropTypes.object,
    component: React.PropTypes.string,
    paramsToComponent: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      data: {},
      dataRowIdField: 'id',
      actionButtons: [],
      themeClassKey: 'table.row.actions',
      conditionParams: {},
      component: null,
      paramsToComponent: {}
    };
  },

  render: function() {
    return (
      <td className={this.className()}>
        {this.renderButtons()}
      </td>
    );
  },

  renderButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];

      if(!!actionButtonProps.component) {
        return React.createElement(eval(actionButtonProps.component), $.extend({}, this.props, actionButtonProps.paramsToComponent))
      } else {
        actionButtons.push(
          <TableRowActionButton key={"action_" + i} {...actionButtonProps} dataRowIdField={this.props.dataRowIdField} data={this.props.data} />
        );
      }
    }

    return actionButtons;
  }
});
