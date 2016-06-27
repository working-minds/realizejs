import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {InputTextArea} from 'components/input'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<InputTextArea/>', () => {
  it('exists', () => {
    expect(InputTextArea).to.exists;
  });
});
