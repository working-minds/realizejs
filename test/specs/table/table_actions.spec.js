import React from 'react';
import { TableActions } from 'components/table';
import { assert } from 'chai';
import { mount } from 'enzyme';

describe('<TableActions/>', () => {
  it('exists', () => {
    assert(TableActions);
  });

  it('renders with the default props', () => {
    const renderedTableActions = mount(<TableActions />);
    assert(renderedTableActions.find('TableActions'));
  });
});
