var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.FlashContent = React.createClass({
 mixins: [CssClassMixin],
 propTypes: {
   type: React.PropTypes.string,
   message: React.PropTypes.oneOfType([
     React.PropTypes.element,
     React.PropTypes.string,
     React.PropTypes.array
   ])
 },

 getInitialState: function () {
   return {
     themeClassKey: 'flash.content flash.' + this.props.type + '.content'
   };
 },

 render: function () {
   return (
     <div className={this.className()}>
       {this.renderMessages()}
     </div>
   );
 },

 renderMessages: function () {
   var isArray = Array.isArray(this.props.message);
   var messages = !isArray ? [this.props.message] : this.props.message;
   return messages.map(function(message) {
     return typeof message == "string" ? <p>{message}</p> : message;
   });
 }

});
