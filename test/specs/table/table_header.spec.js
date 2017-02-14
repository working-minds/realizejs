import React from 'react';
import { TableHeader } from 'components/table';
import { assert } from 'chai';
import { mount } from 'enzyme';

describe('<TableHeader/>', () => {
  it('exists', () => {
    assert(TableHeader);
  });

  it('renders with the default props', () => {
    const renderedTableHeader = mount(
      <table>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
      </table>
    );
    assert(renderedTableHeader.find('TableHeader'));
  });
});
