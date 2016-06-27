import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {Input} from 'components'
import {assert} from 'chai';
import {shallow} from 'enzyme';

describe('Input', () => {
  it('exists', () => {
    assert.ok(Input);
  });
  it('renders a input field', () => {
    const content = shallow(
      <Input id="login" data={ {login: 'me2'} } component="text" />
    );
    assert.equal(content.find('InputText').get(0).props.value, "me2");
  })
  it('renders a input datepicker', () => {
    const content = shallow(
      <Input
             label= 'Date'
             component= 'datepicker'
     />
    );
    assert.ok('InputDatepicker');
  })
  it('renders a input TextArea', () => {
    const content = shallow(
      <Input
             id="texto"
             data={ {texto: 'me2'} }
             label= 'Text Area'
             component= 'textarea'
     />
    );
    assert.equal(content.find('InputTextarea').get(0).props.value, "me2");
  })
  it('renders a input Number', () => {
    const content = shallow(
      <Input
             id="numero"
             data={ {numero: '1'} }
             label= 'Number Field'
             component= 'number'
     />
    );
    assert.equal(content.find('InputNumber').get(0).props.value, "1");
  })
  it('renders a input password', () => {
    const content = shallow(
      <Input
             id="senha"
             data={ {senha: '1234'} }
             label= 'Password'
             component= 'password'
     />
    );
    assert.equal(content.find('InputPassword').get(0).props.value, "1234");
  })
  it('renders a input switch', () => {
    const content = shallow(
      <Input
            label= 'The switch'
            component= 'switch'
     />
    );
    assert.ok('InputSwitch');
  })
  it('renders a input file', () => {
    const content = shallow(
      <Input
          label= 'Upload File'
          component= 'file'
     />
    );
    assert.ok('InputFile');
  })
  it('renders a input masked', () => {
    const content = shallow(
      <Input
              id="product"
             name='Product'
             component= 'masked'
             maskType= 'currency'
             value= '1.85'
     />
    );
    assert.equal(content.find('InputMasked').get(0).props.value, "1.85");
  })
});
