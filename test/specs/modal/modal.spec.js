import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {Modal} from 'components/modal'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('Modal', () => {
  it('exists', () => {
    assert(Modal);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <Modal
      />
    );
    assert(content.find('Modal'));
  });
});
