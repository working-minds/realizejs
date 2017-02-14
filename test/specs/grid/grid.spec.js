import React from 'react';
import { Grid } from 'components/grid';
import { mount } from 'enzyme';

describe('Grid', () => {
  const dummyUrl = '';
  const loadDataSpy = sinon.spy(Grid.prototype, 'loadData');

  it('is a component', () => {
    expect(Grid).to.be.ok;
    expect(Grid.prototype).to.be.instanceof(React.Component);
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
