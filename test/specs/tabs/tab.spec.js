import React from 'react';
import { Tab } from 'components';
import { assert } from 'chai';
import { shallow } from 'enzyme';

describe('<Tab/>', () => {
  it('exists', () => {
    assert(Tab);
  });

  it('accepts an id', () => {
    const myId = 'my-id';
    const wrapper = shallow(<Tab id={myId} />);

    assert.equal(wrapper.prop('id'), myId);
  });

  it('renders children', () => {
    const myId = 'my-id';
    const myClass = 'my-class-name';

    const wrapper = shallow(
      <Tab id={myId}>
        <div className={myClass}></div>
      </Tab>
    );

    assert(wrapper.find(`.${myClass}`));
  })
});
