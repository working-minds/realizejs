import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {assert} from 'chai';
import {shallow} from 'enzyme';

describe('Relize', () => {
  it('exists', () => {
    assert.ok(Realize);
  });
  it('has a config', () => {
    assert.ok(Realize.config);
  });
});
