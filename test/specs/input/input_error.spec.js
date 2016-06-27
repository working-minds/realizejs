import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {InputError} from 'components/input'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<InputError/>', () => {
  it('exists', () => {
    expect(InputError).to.exists;
  });
});
