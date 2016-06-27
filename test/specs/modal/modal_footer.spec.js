import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {ModalFooter} from 'components/modal'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('< Modal Footer/>', () => {
  it('exists', () => {
    assert.ok(ModalFooter);
  });
});
