import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {InputFile} from 'components/input'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<InputFile/>', () => {
  it('exists', () => {
    expect(InputFile).to.exists;
  });
});
