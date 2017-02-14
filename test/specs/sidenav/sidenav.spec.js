import React from 'react'
import { SideNav } from 'components/sidenav';
import { Menu } from 'components/menu';
import { shallow } from 'enzyme';

describe('Sidenav', () => {
  it('exists', () => {
    assert(SideNav);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <SideNav />
    );
    assert(content.find('SideNav'));
  });
  it('renders with Menu', () => {
    const content = shallow(
      <SideNav>
         <Menu ref_id='1'>
         </Menu>
     </SideNav>
    );
    assert.equal(content.find('Menu').get(1).props.ref_id, "1");
  });

});
