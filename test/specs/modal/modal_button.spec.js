import React from 'react'
import { ModalButton } from 'components/modal'
import { assert } from 'chai';
import { shallow } from 'enzyme';


describe('<ModalButton/>', () => {
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
