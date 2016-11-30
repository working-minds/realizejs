import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {ModalHeader} from 'components/modal'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('< Modal Header/>', () => {
  it('exists', () => {
    assert.ok(ModalHeader);
  });
});
