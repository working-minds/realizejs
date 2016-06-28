import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {Menu} from 'components/menu'
import {MenuItem} from 'components/menu'
import {assert} from 'chai';
import {shallow, mount} from 'enzyme';

describe('Menu', () => {
  it('exists', () => {
    assert.ok(Menu);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <Menu>
      </Menu>
    );
    assert.ok(content.find('Menu'));
  });
  it('renders with MenuItem', () => {
    const items = [{
        text:'Google',
        href:'http://www.google.com.br'
    }]
    const content = shallow(
      <Menu items={items}>
        <MenuItem text='Child Item' href='#' />
      </Menu>
    );
    assert.equal(content.find('MenuItem').get(1).props.text, "Child Item");
  });
});
