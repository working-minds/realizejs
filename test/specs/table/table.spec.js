import React from 'react';
import { Table } from 'components/table';
import { shallow } from 'enzyme';

describe('<Table/>', () => {
  it('exists', () => {
    assert(Table);
  });

  it('renders with the default props', () => {
    const renderedTable = shallow(<Table />);
    assert(renderedTable.find('Table'));
  });
});
