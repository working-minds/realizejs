import React from 'react';
import { Table } from 'components/table';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';

describe('<Table/>', () => {
  it('exists', () => {
    assert(Table);
  });

  it('renders with the default props', () => {
    const renderedTable = mount(<Table />);
    assert(renderedTable.find('Table'));
  });
});
