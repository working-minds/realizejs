import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {Header} from 'components/header'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('Header', () => {
  it('exists', () => {
    assert.ok(Header);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <Header
      />
    );
    assert.ok(Header);
  });
});
