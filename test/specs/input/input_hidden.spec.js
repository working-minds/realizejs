import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {InputHidden} from 'components/input'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<InputHidden/>', () => {
  it('exists', () => {
    expect(InputHidden).to.exists;
  });
});
