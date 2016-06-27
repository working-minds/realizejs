import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {ButtonGroup} from 'components'
import {assert} from 'chai';
import {shallow, mount} from 'enzyme';

describe('ButtonGroup', () => {
  it('exists', () => {
    assert.ok(ButtonGroup);
  });
  it('renders more than one button in a group', () => {
    const content = mount(
      <ButtonGroup
        buttons={ [
          { name: 'Button 1', element: 'a', href:'#' },
          { name: 'Button 2', element: 'a', href:'#' }
          ]
        }
       />
    );
    assert.equal(content.find('Button').nodes.length, 2);
  });
});
