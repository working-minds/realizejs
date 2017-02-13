import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {ModalButton} from 'components/modal'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('< Modal Button/>', () => {
  it('exists', () => {
    assert(ModalButton);
  });
  it('renders with Button', () => {
    const content = shallow(
      <ModalButton
          name='Modal Button'
          modalId='custom-modal'
      />
    );
    assert(ModalButton);
  });
});
