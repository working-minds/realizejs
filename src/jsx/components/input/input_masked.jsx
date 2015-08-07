var InputMasked = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  propTypes: {
    mask: React.PropTypes.string,
    typeMask: React.PropTypes.string,
    predefinedMasks: React.PropTypes.object,
    regex: React.PropTypes.string,
    showMaskOnHover: React.PropTypes.boolean
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text',
      mask:'',
      typeMask:'',
      regex:'',
      showMaskOnHover: false,
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
        datetime:{
          mask: 'datetime'
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
      <input {...this.props} className={this.className()} ref="inputMasked" type="text" />
    );
  },

  componentDidMount: function(){
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
    params['regex'] = this.props.regex;
    this.renderBaseMask('Regex',params);
  },
  renderCustomMask: function(){
    var params = {};
    if(this.props.mask!='')
      params['mask'] = this.props.mask;
    this.renderBaseMask(this.props.typeMask,params)
  },
  renderPredefinedMask: function(){
    var params = this.maskMapping(this.props.typeMask);
    this.stopPropagationProps();
    params = $.extend(params,this.props);
    this.renderBaseMask('',params)
  },
  renderBaseMask: function(type,params){
    if(type != undefined && type != '')
      $(React.findDOMNode(this.refs.inputMasked)).inputmask(type,params);
    else
      $(React.findDOMNode(this.refs.inputMasked)).inputmask(params);
  },

  maskMapping: function(type) {
    var typesMask = this.props.predefinedMasks;
    return typesMask[type] == undefined ? type : typesMask[type];
  },

  isAPredefinedMask: function(){
    return this.props.typeMask in this.props.predefinedMasks;
  },

  isRegexMask: function(){
    return this.props.regex != '';
  },

  stopPropagationProps: function(){
    delete this.props["predefinedMasks"];
    delete this.props["mask"];
    delete this.props["placeholder"];
  }

});

