import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import { GridForm } from 'components/grid_form'
import { assert } from 'chai';
import { shallow } from 'enzyme';


describe('GridForm', () => {
  it('exists', () => {
    assert(GridForm);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <GridForm
        url=''
      />
    );
    assert(GridForm);
  });
});
