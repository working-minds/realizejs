import React from 'react'
import { Flash } from 'components/flash'
import { assert } from 'chai';
import { shallow } from 'enzyme';

describe('Flash', () => {
  it('exists', () => {
    assert(Flash);
  });

  it('renders a flash', () => {
    const content = shallow(
      <Flash
        message='Mensagem do Tipo info'
        type='info'
      />
    );
    assert.equal(content.find('FlashContent').props().message, "Mensagem do Tipo info");
  });
});
