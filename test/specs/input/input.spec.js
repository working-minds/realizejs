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
});
