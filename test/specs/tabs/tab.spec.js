import React from 'react'
import Realize from 'realize'
import {Tab} from 'components'
import {expect} from 'chai';
import {shallow} from 'enzyme';

describe('<Tab/>', () => {
  it('exists', () => {
    expect(Tab).to.exist;
  })

  it('accepts an id', () => {
    const myId = 'my-id';
    const wrapper = shallow(<Tab id={myId} />);

    expect(wrapper.prop('id')).to.be.equal(myId);
  });

  it('renders children', () => {
    const myId = 'my-id';
    const myClass = 'my-class-name';

    const wrapper = shallow(
      <Tab id={myId}>
        <div className={myClass}></div>
      </Tab>
    );

    expect(wrapper.find(`.${myClass}`)).to.exist;
  })
});
