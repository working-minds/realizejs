var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var ContainerMixin = require('realize/mixins/container_mixin.jsx');

window.ModalForm = React.createClass({
  mixins: [
    CssClassMixin,
    ContainerMixin
  ],

  propTypes: {
    title: React.PropTypes.string,
    form: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      title: "",
      form: {}
    };
  },

  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  render: function() {
    return (
      <Modal {...this.props}>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </Modal>
    );
  },

  renderHeader: function() {
    var modalHeader = this.filterChildren(ModalHeader);
    if(!modalHeader || modalHeader.length == 0) {
      modalHeader.push(
        <ModalHeader key="modal-header">
          <h5>{this.props.title}</h5>
        </ModalHeader>
      );
    }

    return modalHeader;
  },

  renderContent: function() {
    return (
      <ModalContent>
        <Form
          {...this.props.form}
          submitButton={false}
          otherButtons={[]}
          onError={this.handleSubmitError}
          onSuccess={this.handleSubmitSuccess}
          ref="form">

          {this.props.children}
        </Form>
      </ModalContent>
    );
  },

  renderFooter: function() {
    return (
      <ModalFooter>
        <FormButtonGroup {...this.props.form} submitButton={this.submitButtonProps()} isLoading={this.state.isLoading} />
      </ModalFooter>
    );
  },

  submitButtonProps: function() {
    var submitButtonProps = this.props.form.submitButton || this.defaultSubmitButtonProps();
    submitButtonProps.onClick = this.submitForm;

    return submitButtonProps;
  },

  defaultSubmitButtonProps: function() {
    return {
      name: 'actions.send',
      icon: 'send'
    };
  },

  submitForm: function(event) {
    var formRef = this.refs.form;

    formRef.handleSubmit(event);
    this.setState({
      isLoading: true
    });
  },

  handleSubmitSuccess: function(data, status, xhr) {
    var onSuccessCallback = this.props.form.onSuccess;
    if(typeof onSuccessCallback == "function") {
      this.props.onSuccess(data, status, xhr);
    }

    this.setState({
      isLoading: false
    });

    return true;
  },

  handleSubmitError: function(xhr, status, error) {
    var onErrorCallback = this.props.form.onError;
    if(typeof onErrorCallback == "function") {
      this.props.onError(xhr, status, error);
    }

    this.setState({
      isLoading: false
    });

    return true;
  }
});