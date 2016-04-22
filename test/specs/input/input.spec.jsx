import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {Input} from 'components/components'
import {assert} from 'chai';
import {shallow} from 'enzyme';

describe('Relize', () => {
  it('exists', () => {
    assert.ok(Realize);
  });
  it('has a config', () => {
    assert.ok(Realize.config);
  });
  it('has a Input', () => {
    assert.ok(Input);
  });
  it('renders a input field', () => {
    const content = shallow(
      <Input id="login" data={ {login: 'me2'} } component="text" />
    );
    assert.equal(content.find('InputText').get(0).props.value, "me2");
  })
});

