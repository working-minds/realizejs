import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {InputSelect} from 'components/input'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<InputSelect/>', () => {
  it('exists', () => {
    expect(InputSelect).to.exists;
  });
});
