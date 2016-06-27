import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {InputMasked} from 'components/input'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<InputMasked/>', () => {
  it('exists', () => {
    expect(InputMasked).to.exists;
  });
});
