import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {ModalHeader} from 'components/modal'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('< Modal Header/>', () => {
  it('exists', () => {
    assert.ok(ModalHeader);
  });
});
