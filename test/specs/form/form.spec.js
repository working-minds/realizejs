import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import Form from 'components/form/form';
import InputGroup from 'components/form/input_group';
import Input from 'components/input/input';
import {assert} from 'chai';
import {shallow, mount} from 'enzyme';
import Chance from 'chance';

const chance = new Chance();

describe('<Form/>', () => {
  it('renders a form', () => {
    const content = shallow(<Form />);
    expect(content.find('form').exists()).to.be.true;
  });

  describe('validation', function() {
    beforeEach(function() {
      this.sandbox = sinon.sandbox.create();

      this.inputName = chance.md5();
      this.inputErrors = [chance.md5()];
      this.postData = { [this.inputName]: chance.md5() };
      this.validationErrors = { [this.inputName]: this.inputErrors };

      this.validationCallback = sinon.spy();
      this.submitCallback = sinon.spy();

      this.event = {
        nativeEvent: { preventDefault: sinon.spy() },
        preventDefault: sinon.spy(),
        persist: sinon.spy(),
      };
    });

    afterEach(function() {
      this.sandbox.restore();
    });

    it('applies validation when InputGroup is mounted', function() {
      this.sandbox
        .stub(InputGroup.prototype, 'validate')
        .returns(this.validationErrors);

      this.sandbox.stub(Form.prototype, 'submit');
      this.sandbox.stub(Form.prototype, 'serialize').returns(this.postData);

      const content = mount(
        <Form
          onValidationErrors={this.validationCallback}
          onSubmit={this.submitCallback}
          inputs={{ [this.inputName]: { component: 'text' } }}
        />
      );

      content.find('form').simulate('submit', this.event);

      expect(this.submitCallback).to.have.been.called;
      expect(this.event.preventDefault).to.have.been.called;
      expect(this.validationCallback).to.have.been.calledWith(this.validationErrors, this.postData);
    });

    it('ignores validation when InputGroup is not mounted', function() {
      this.sandbox.stub(Form.prototype, 'submit');
      this.sandbox.stub(Form.prototype, 'serialize').returns(this.postData);

      const content = mount(
        <Form
          onValidationErrors={this.validationCallback}
          onSubmit={this.submitCallback}
        >
          <Input component="text" name={this.inputName} />
        </Form>
      );

      content.find('form').simulate('submit', this.event);

      expect(this.submitCallback).to.have.been.called;
      expect(this.validationCallback).to.not.have.been.called;
    });
  });

});
