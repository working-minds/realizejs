import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {Table} from 'components/table'
import {assert} from 'chai';
import {shallow, mount} from 'enzyme';

describe('Table', () => {
  it('exists', () => {
    assert.ok(Table);
  });
});
