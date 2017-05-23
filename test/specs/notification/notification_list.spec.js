import React from 'react';
import { NotificationsList } from 'components/notification'
import { shallow } from 'enzyme';

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
