import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {Header} from 'components/header'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('Header', () => {
  it('exists', () => {
    assert(Header);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <Header
      />
    );
    assert(Header);
  });
});
