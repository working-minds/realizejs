import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {Modal} from 'components/modal'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('Modal', () => {
  it('exists', () => {
    assert.ok(Modal);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <Modal
      />
    );
    assert.ok(content.find('Modal'));
  });
});
