import React from 'react'
import $ from 'jquery'
import Realize from 'realize'
import {NotificationsList} from 'components/notification'
import {assert} from 'chai';
import {shallow} from 'enzyme';

describe('NotificationsList', () => {
  it('exists', () => {
    assert(NotificationsList);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <NotificationsList />
    );
    assert(content.find('NotificationsList'));
  });
});
