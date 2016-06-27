import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {InputPassword} from 'components/input'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('<InputPassword/>', () => {
  it('exists', () => {
    expect(InputPassword).to.exists;
  });
});
