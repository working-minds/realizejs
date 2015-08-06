var InputMasked = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  propTypes: {
    mask: React.PropTypes.string,
    typeMask: React.PropTypes.string,
    predefinedMasks: React.PropTypes.object,
    regex:React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text',
      mask:'',
      typeMask:'',
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
    if(this.isRegexMask())
      this.renderRegexMask();
    if(this.isAPredefinedMask())
      this.renderPredefinedMask();
    else
      this.renderCustomMask();
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
    var params = {};
    params['mask'] = this.maskMapping(this.props.mask);

    this.renderBaseMask(this.props.typeMask,params);
  },

  renderBaseMask: function(type,params){
    if(type != undefined && type != '')
      $(React.findDOMNode(this.refs.inputMasked)).inputmask(type,params);
    else
      $(React.findDOMNode(this.refs.inputMasked)).inputmask(params);
  },

  maskMapping: function(type) {
    var maskTypes = this.props.predefinedMasks;
    return maskTypes[type] == undefined ? type : maskTypes[type];
  },

  isAPredefinedMask: function(){
    return this.props.mask in this.props.predefinedMasks;
  },

  isRegexMask: function(){
    return this.props.regex != '';
  }

});

