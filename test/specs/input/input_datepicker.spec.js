import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {InputDatepicker} from 'components/input'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<InputDatepicker/>', () => {
  it('exists', () => {
    expect(InputDatepicker).to.exists;
  });
});
