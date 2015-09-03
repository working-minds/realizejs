var InputMasked = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  propTypes: {
    mask: React.PropTypes.string,
    typeMask: React.PropTypes.string,
    predefinedMasks: React.PropTypes.object,
    regex: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text',
      mask:'',
      typeMask:'',
      regex:'',
      predefinedMasks: {
        cpf: {
          mask:'999.999.999-99'
        },
        cnpj:{
          mask: '99.999.999/9999-99'
        },
        phone:{
          mask: '(99) 9999[9]-9999'
        },
        cell_phone:{
          mask: '(99) 9999[9]-9999'
        },
        currency:{
          mask:'999.999.999,99',
          numericInput: true,
          rightAlign: true
        }
      }
    };
  },

  render: function() {
    return (
      <input {...this.props} {...this.props.field_params} value={this.state.value} className={this.inputClassName()} onChange={this._handleChange} ref="input" type="text" >
        {this.props.children}
      </input>
    );
  },

  componentDidMount: function() {
    if(this.isRegexMask())
      this.renderRegexMask();
    else{
      if(this.isAPredefinedMask())
        this.renderPredefinedMask();
      else
        this.renderCustomMask();
    }
  },

  renderRegexMask: function(){
    var params = {};
    params.regex = this.props.plugin_params.regex;
    this.renderBaseMask('Regex',params);
  },

  renderCustomMask: function(){
    var typeMask = this.props.plugin_params.typeMask;
    delete this.props.plugin_params.placeholder;
    delete this.props.plugin_params.typeMask;

    if(typeMask)
      this.renderBaseMask(typeMask, this.props.plugin_params);
    else
      this.renderBaseMask('', this.props.plugin_params);
  },

  renderPredefinedMask: function(){
    var params = this.maskMapping(this.props.plugin_params.mask);
    var typeMask = this.props.plugin_params.typeMask;
    delete this.props.plugin_params.mask;
    delete this.props.plugin_params.placeholder;
    delete this.props.plugin_params.typeMask;

    params = $.extend(params, this.props.plugin_params);
    this.renderBaseMask(typeMask, params);
  },

  renderBaseMask: function(type, params){
    if(type !== undefined && type !== '')
      $(React.findDOMNode(this.refs.input)).inputmask(type, params);
    else
      $(React.findDOMNode(this.refs.input)).inputmask(params);
  },

  maskMapping: function(type) {
    var typesMask = this.props.predefinedMasks;
    return typesMask[type] === undefined ? type : typesMask[type];
  },

  isAPredefinedMask: function(){
    return this.props.plugin_params.mask in this.props.predefinedMasks;
  },

  isRegexMask: function(){
    return (this.props.plugin_params != null) && ('regex' in this.props.plugin_params)
  }

});