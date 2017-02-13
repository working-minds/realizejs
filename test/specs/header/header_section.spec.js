import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {HeaderSection} from 'components/header'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<HeaderSection/>', () => {
  it('exists', () => {
    assert(HeaderSection);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <HeaderSection
      />
    );
    assert(HeaderSection);
  });
});
