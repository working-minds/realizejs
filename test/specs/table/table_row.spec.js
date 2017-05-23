import React from 'react';
import { TableRow } from 'components/table';
import { assert } from 'chai';
import { mount } from 'enzyme';

describe('<TableRow/>', () => {
  it('exists', () => {
    assert(TableRow);
  });

  it('renders with the default props', () => {
    const renderedTableRow = mount(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    );
    assert(renderedTableRow.find('TableRow'));
  });
});
