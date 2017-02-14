import React from 'react';
import { Grid } from 'components/grid';
import { mount } from 'enzyme';

describe('Grid', () => {
  const loadDataSpy = sinon.spy(Grid.prototype, 'loadData');

  it('exists', () => {
    assert(Grid);
  });

  it('renders with the default props', () => {
    const content = mount(<Grid url=''/>);

    expect(content).to.be.ok;
    expect(loadDataSpy).to.not.have.been.calledOnce;
  });

  it('calls loadData when the state eagerLoad is true', () => {
    const content = mount(<Grid url='' eagerLoad={true} />);

    expect(content).to.be.ok;
    expect(loadDataSpy).to.have.been.calledOnce;
  });
});
