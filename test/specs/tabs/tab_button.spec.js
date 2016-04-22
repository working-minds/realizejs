import React from 'react'
import Realize from 'realize'
import {TabButton} from 'components'
import {expect} from 'chai';
import {shallow} from 'enzyme';

describe('<TabButton/>', () => {
  it('exists', () => {
    expect(TabButton).to.exist;
  })

  it('accepts an id prop', () => {
    const myId = 'my-id';
    const wrapper = shallow(<TabButton id={myId} />);

    expect(wrapper.find('a').props().href).to.be.equal(`#${myId}`);
  });

  it('accepts a title prop', () => {
    const myTitle = 'my-title'
    const wrapper = shallow(<TabButton title={myTitle} />);

    expect(wrapper.find('a').children().text()).to.be.equal(myTitle);
  })

  it('accepts an active prop', () => {
    const active = true;
    const wrapper = shallow(<TabButton active={active} />);

    expect(wrapper.find('a').hasClass('active')).to.be.true;
  })
});
