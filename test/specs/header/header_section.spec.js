import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {HeaderSection} from 'components/header'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<HeaderSection/>', () => {
  it('exists', () => {
    assert.ok(HeaderSection);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <HeaderSection
      />
    );
    assert.ok(HeaderSection);
  });
});
