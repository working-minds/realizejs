import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {Form} from 'components/form'
import {assert} from 'chai';
import {shallow} from 'enzyme';

describe('Form', () => {
  it('exists', () => {
    assert.ok(Form);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <Form />
    );
    assert.ok(content.find('Form'));
  });
  it('renders with isLoading', () => {
    const content = shallow(
      <Form
            isLoading
      />
    );
    assert.ok(content.find('isLoading'));
  });
  it('renders with otherButtons', () => {
    const content = shallow(
      <Form
           otherButtons= {[
               {
                   name: 'actions.clear',
                   icon: 'delete',
                   element: 'button',
                   type: 'reset'
               }
           ]}
       />
    );
    assert.ok(content.find('otherButtons'));
  });
  it('renders with onSubmit', () => {
    const content = shallow(
      <Form
        onSubmit={function(){
         alert('Product Created')
         }}
       />
    );
    assert.ok(content.find('onSubmit'));
  });
});
