import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {HeaderButton} from 'components/header'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<HeaderButton/>', () => {
  it('exists', () => {
    assert.ok(HeaderButton);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <HeaderButton
      />
    );
    assert.ok(HeaderButton);
  });
  it('renders with Home icon', () => {
    const content = shallow(
      <HeaderButton
           text='Home'
           iconAlign='left'
           href='#home'
           icon='home'
      />
    );
    assert.ok(HeaderButton);
  });
});
