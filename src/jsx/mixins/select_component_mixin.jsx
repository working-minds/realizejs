var SelectComponentMixin = {
  propTypes: {
    options: React.PropTypes.array,
    dependsOn: React.PropTypes.object,
    optionsUrl: React.PropTypes.string,
    nameField: React.PropTypes.string,
    valueField: React.PropTypes.string,
    onLoad: React.PropTypes.func,
    onLoadError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      dependsOn: null,
      nameField: 'name',
      valueField: 'id',
      onLoad: function(data) {
        return true;
      },
      onLoadError: function(xhr, status, error) {
        console.log('Select Load error:' + error);
      }
    };
  },

  getInitialState: function() {
    return {
      options: this.props.options,
      disabled: this.props.disabled,
      loadParams: {}
    };
  },

  componentWillMount: function() {
    if(!!this.props.dependsOn) {
      this.state.disabled = true;
    }
  },

  componentDidMount: function() {
    if(this.props.optionsUrl) {
      if(!!this.props.dependsOn) {
        this.listenToDependableChange();
      } else {
        this.loadOptions();
      }
    }
  },

  handleChange: function(event) {
    var selectElement = React.findDOMNode(this.refs.select);
    var $selectElement = $(selectElement);

    $selectElement.trigger('dependable_changed', [selectElement.value]);
    this.props.onChange(event);
  },

  loadOptions: function() {
    $.ajax({
      url: this.props.optionsUrl,
      method: 'GET',
      dataType: 'json',
      data: this.state.loadParams,
      success: this.handleLoad,
      error: this.onLoadError
    });
  },

  handleLoad: function(data) {
    var options = [];

    for(var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var option = {
        name: String(dataItem[this.props.nameField]),
        value: String(dataItem[this.props.valueField])
      };

      options.push(option);
    }

    this.setState({
      options: options,
      disabled: (!!this.props.dependsOn && options.length <= 0)
    });

    this.props.onLoad(data);
  },

  listenToDependableChange: function() {
    var dependsOnObj = this.props.dependsOn;
    var dependableId = dependsOnObj.dependableId;
    var paramName = dependsOnObj.param || dependableId;
    var dependable = document.getElementById(dependableId);

    $(dependable).on('dependable_changed', function(event, dependableValue) {
      if(!dependableValue) {
        this.emptyAndDisable();
        return false;
      }

      this.state.loadParams[paramName] = dependableValue;
      this.loadOptions();
    }.bind(this));
  },

  emptyAndDisable: function() {
    this.setState({
      options: [],
      disabled: true
    });
  }
};