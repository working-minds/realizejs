import React from 'react'
import { InputText } from 'components'
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('<InputText/>', () => {
  it('exists', () => {
    assert(InputText);
  });

  // it('handles the change event', () => {
  //   const onChange = sinon.spy();
  //   const wrapper = shallow(<InputText onChange={onChange}/>);
  //
  //   const event = {
  //     target: { value: 'changed' },
  //     currentTarget: { value: 'changed' },
  //     isDefaultPrevented: () => false
  //   };
  //
  //   wrapper.simulate('change', event);
  //
  //   expect(onChange.calledOnce).to.be.true;
  //   expect(wrapper.props().value).to.be.equal(event.target.value);
  // })
});
