import React from 'react'
import { TabButton } from 'components'
import { assert } from 'chai';
import { shallow } from 'enzyme';

describe('<TabButton/>', () => {
  it('exists', () => {
    assert(TabButton);
  });

  it('accepts an id prop', () => {
    const myId = 'my-id';
    const wrapper = shallow(<TabButton id={myId} />);

    assert.equal(wrapper.find('a').props().href, `#${myId}`);
  });

  it('accepts a title prop', () => {
    const myTitle = 'my-title';
    const wrapper = shallow(<TabButton title={myTitle} />);

    assert.equal(wrapper.find('a').children().text(), myTitle);
  });

  it('accepts an active prop', () => {
    const active = true;
    const wrapper = shallow(<TabButton active={active} />);

    assert.equal(wrapper.find('a').hasClass('active'), true);
  });
});
