import React from 'react'
import Realize from 'realize'
import {assert} from 'chai';

describe('Realize', () => {
  it('exists', () => {
    assert(Realize);
  });
  it('has a config', () => {
    assert(Realize.config);
  });
});
