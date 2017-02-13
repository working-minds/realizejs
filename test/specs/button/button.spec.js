import React from 'react';
import { Button } from 'components';
import { assert } from 'chai';
import { shallow } from 'enzyme';

describe('Button', () => {
  it('exists', () => {
    assert(Button);
  });

  it('renders with the default props', () => {
    const content = shallow(
      <Button />
    );
    assert(content.find('Button'));
  });

  it('renders a button with a link', () => {
    const content = shallow(
      <Button
        name='Go to Google!'
        element='a'
        href='http://www.google.com.br'
      />
    );
    assert.equal(content.find('a').text(), "Go to Google!");
  })
});
