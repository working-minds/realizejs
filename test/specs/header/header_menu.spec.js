import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {HeaderMenu} from 'components/header'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<HeaderMenu/>', () => {
  it('exists', () => {
    assert(HeaderMenu);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <HeaderMenu
      />
    );
    assert(HeaderMenu);
  });
});
