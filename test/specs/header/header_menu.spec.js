import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {HeaderMenu} from 'components/header'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<HeaderMenu/>', () => {
  it('exists', () => {
    assert.ok(HeaderMenu);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <HeaderMenu
      />
    );
    assert.ok(HeaderMenu);
  });
});
