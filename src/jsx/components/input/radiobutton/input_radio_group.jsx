var InputRadioGroup = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    options: React.PropTypes.array,
    currentValue: React.PropTypes.string,
    url:React.PropTypes.string,
    url_key:React.PropTypes.string,
    url_value:React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      name:'',
      align: 'vertical',
      options: null,
      currentValue: null,
      url:null,
      url_key:'id',
      url_value:'name'
    };
  },

  getOptionsFromUrl: function(){
    var result=[];
    var context = this;
    $.ajax({
      type: 'GET',
      async: false,
      url: 'http://jsonstub.com/cities',
      contentType: 'application/json',
      beforeSend: function (request) {
        request.setRequestHeader('JsonStub-User-Key', '2e13daef-b39e-44c9-8159-af8c53d7f7f5');
        request.setRequestHeader('JsonStub-Project-Key', '46772881-8bbc-46e8-9c16-5062f73138a4');
      }
    }).done(function (data) {
      $.each(data,function(i,item){
        result.push({
          'value': item[context.props.url_key],
          'name': item[context.props.url_value]
        });
        context.props.options = result;
      });
    });
  },

  getInitialState: function() {
    return {
      currentValue: this.props.currentValue
    }
  },

  renderItems: function() {
    (this.props.url != '')? this.getOptionsFromUrl() : this.props.options;

    return this.props.options.map(function (item, i) {

      var optionsInput = {
        type:'radio',
        id: this.props.name + '_' + i,
        name: this.props.name,
        value: item.value
      };
      if (this.state.currentValue === item.value)
        optionsInput['defaultChecked'] = "checked";

      return (
        <p>
          <input {...optionsInput } />
          <Label id={optionsInput.id} label={item.name} />
        </p>
      );
    }, this);
  },

  render: function() {
    return (
      <div className={'input-checkbox-group align-' + this.props.align} ref="radioGroup">
        {this.renderItems()}
      </div>
    );
  },

  handleClick: function(event) {
    $label = $(event.currentTarget);
    $radio = $(React.findDOMNode(this.refs.radioGroup)).find("#"+$label.attr('for'));

    this.setState({currentValue: $radio.val()});

  }

});
