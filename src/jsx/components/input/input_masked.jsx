var InputMasked = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  propTypes: {
    mask: React.PropTypes.string,
    predefinedMasks: React.PropTypes.object,
    regex:React.PropTypes.string,
    //Base properties Plugin
    clearmaskonlostfocus: React.PropTypes.boolean,
    clearIncomplete: React.PropTypes.boolean,
    showMaskOnHover: React.PropTypes.boolean,
    showMaskOnFocus: React.PropTypes.boolean
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text',
      mask:'',
      clearmaskonlostfocus: true,
      clearIncomplete:false,
      showMaskOnHover: false,
      showMaskOnFocus: false,
      regex:'',
      predefinedMasks: {
        cpf: '999.999.999-99',
        cnpj: '99.999.999/9999-99',
        phone: '(99) 9999[9]-9999',
        cell_phone: '(99) 9999[9]-9999',
        date: '99/99/9999',
        date_time: '99/99/9999 [99:99:99]'
      }
    };
  },

  render: function() {
    return (
      <input {...this.props} className={this.className()} ref="inputMasked" type="text" />
    );
  },

  componentDidMount: function(){
    if(this.props.regex != '')
      this.renderRegexMask();
    if(this.isAPredefinedMask(this.props.mask))
      this.renderPredefinedMask();
    else
      this.renderCustomMask();
  },

  renderRegexMask: function(){
    var params = this.getDefaultConfigPlugin();
    params['regex'] = this.props.regex;
    this.renderBaseMask('Regex',params);
  },
  renderCustomMask: function(){
    var params = this.getDefaultConfigPlugin();
    params['mask'] = this.props.mask;

    this.renderBaseMask(params)
  },
  renderPredefinedMask: function(){
    var params = this.getDefaultConfigPlugin();
    params['mask'] = this.maskMapping(this.props.mask);

    this.renderBaseMask(params);
  },

  renderBaseMask: function(type,params){
    if(type != undefined)
      $(React.findDOMNode(this.refs.inputMasked)).inputmask(type,params);
    else
      $(React.findDOMNode(this.refs.inputMasked)).inputmask(params);
  },

  //Functions Utils
  getDefaultConfigPlugin : function(){
    return {
      clearIncomplete: this.props.clearIncomplete,
      showMaskOnHover: this.props.showMaskOnHover,
      showMaskOnFocus: this.props.showMaskOnFocus
    }
  },

  maskMapping: function(type) {
    var maskTypes = this.props.predefinedMasks;
    return maskTypes[type] == undefined ? type : maskTypes[type];
  },

  isAPredefinedMask: function(value){
    return value in this.props.predefinedMasks
  }

});

