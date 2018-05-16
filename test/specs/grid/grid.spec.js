import React from 'react';
import Realize from 'realize';

import { Grid, GridPagination, GridFilter, GridTable } from 'components/grid';
import { mount, shallow } from 'enzyme';

import { Chance } from 'chance';

describe('<Grid/>', () => {
  const dummyUrl = '';
  const chance = new Chance();
  let sandbox;

  beforeEach(() => sandbox = sinon.sandbox.create());
  afterEach(() => sandbox.restore());

  describe('#constructor', () => {
    it('is a component', () => expect(Grid).to.be.a.reactComponent);
  });

  describe('#componentDidMount', () => {
    it('calls loadData when the props eagerLoad is true', () => {
      const loadData = sinon.stub(Grid.prototype, 'loadData');
      const withEagerLoad = mount(<Grid url={dummyUrl} eagerLoad />);

      expect(withEagerLoad).to.be.ok;
      expect(loadData).to.have.been.calledOnce;

      loadData.reset();
      const withoutEagerLoad = mount(<Grid url={dummyUrl} />);

      expect(withoutEagerLoad).to.be.ok;
      expect(loadData).to.not.have.been.called;

      Grid.prototype.loadData.restore();
    });
  });

  describe('#backToInitialState', () => {
    let loadData, setState;

    beforeEach(() => {
      loadData = sinon.stub(Grid.prototype, 'loadData');
      setState = sinon.stub(Grid.prototype, 'setState');
    });

    afterEach(() => {
      Grid.prototype.loadData.restore();
      Grid.prototype.setState.restore();
    });

    it('returns a promise', () => {
      const instance = shallow(<Grid url={dummyUrl} />).instance();
      const result = instance.backToInitialState();

      expect(result).to.be.instanceof(Promise);
    });

    it('restores to initial state', (done) => {
      const defaultState = {
        selectedRowIds: [],
        allSelected: false,
        page: 1,
        filterData: {}
      };

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      const promise = instance.backToInitialState();

      setState.callArg(1);

      promise.then(() => {
        expect(setState).to.have.been.calledWith(defaultState);
        expect(loadData).to.have.been.called;
        done();
      });
    });
  });

  describe('#initialPerPage', () => {
    it('returns the pagination config perPage', () => {
      const perPage = Math.random() * 10000 | 0;

      const paginationConfigs = sinon.stub(Grid.prototype, 'paginationConfigs').returns({ perPage });

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      const result = instance.initialPerPage();

      expect(result).to.be.eql(perPage);

      instance.paginationConfigs.restore();
    });
  });

  describe('#paginationConfigs', () => {
    it('uses pagination config from realize', () => {
      const expectedPaginationConfigs = Realize.config.grid.pagination;

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      const result = instance.paginationConfigs();

      expect(result).to.be.eql(expectedPaginationConfigs);
    });

    it('accept pagination config from props', () => {
      const defaultPaginationConfigs = Realize.config.grid.pagination;
      const customPaginationConfigs = {customProp: Math.random() * 1000 | 0};
      const expectedPaginationConfigs = {...defaultPaginationConfigs, ...customPaginationConfigs};

      const instance = shallow(<Grid url={dummyUrl} paginationConfigs={customPaginationConfigs} />).instance();
      const result = instance.paginationConfigs();

      expect(result).to.be.eql(expectedPaginationConfigs);
    });
  });

  describe('#sortConfigs', () => {
    it('uses sort config from realize', () => {
      const expectedSortConfigs = Realize.config.grid.sort;

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      const result = instance.sortConfigs();

      expect(result).to.be.eql(expectedSortConfigs);
    });

    it('accept sort config from props', () => {
      const defaultSortConfigs = Realize.config.grid.sort;
      const customSortConfigs = {customProp: Math.random() * 1000 | 0};
      const expectedSortConfigs = {...defaultSortConfigs, ...customSortConfigs};

      const instance = shallow(<Grid url={dummyUrl} sortConfigs={expectedSortConfigs} />).instance();
      const result = instance.sortConfigs();

      expect(result).to.be.eql(expectedSortConfigs);
    });
  });

  describe('#loadData', () => {
    let instance, setStatePromise, buildPostData, restClientIndex, handleLoad, handleLoadError;
    let postData, dataType, method;

    beforeEach(() => {
      postData = chance.hash();
      dataType = chance.hash();
      method = chance.hash();

      instance = shallow(<Grid url={dummyUrl} filter={{method, dataType}} />).instance();
      setStatePromise = sandbox.stub(instance, 'setStatePromise');
      buildPostData = sandbox.stub(instance, 'buildPostData');
      restClientIndex = sandbox.stub(instance.restClient, 'index');
      handleLoad = sandbox.stub(instance, 'handleLoad');
      handleLoadError = sandbox.stub(instance, 'handleLoadError');
    });

    it('sets a loading state', function(done) {
      const p = Promise.resolve();
      const _setStatePromise = setStatePromise.withArgs({ gridIsLoading: true }).returns(p);

      instance
        .loadData()
        .then(() => {
          expect(_setStatePromise).to.be.calledOnce;
          done();
        })
        .catch(done);
    });

    it('calls the RestClient', function(done) {
      const p = Promise.resolve();
      setStatePromise.returns(p);

      const _buildPostData = buildPostData.returns(postData);
      const _restClientIndex = restClientIndex.withArgs(postData, { dataType, method });

      instance
        .loadData()
        .then(() => {
          expect(_buildPostData).to.be.calledOnce;
          expect(_restClientIndex).to.be.calledOnce;
          done();
        })
        .catch(done);
    });

    it('calls the handleLoad when success', function(done) {
      const p = Promise.resolve();
      setStatePromise.returns(p);

      instance
        .loadData()
        .then(() => {
          expect(handleLoad).to.be.calledOnce;
          expect(handleLoadError).to.not.be.called;
          done();
        })
        .catch(done);
    });

    it('calls the handleLoadError when error', function(done) {
      const p = Promise.reject();
      setStatePromise.returns(p);

      instance
        .loadData()
        .then(() => {
          expect(handleLoad).to.not.be.called;
          expect(handleLoadError).to.be.calledOnce;
          done();
        })
        .catch(done);
    });
  });

  describe('#handleLoad', () => {
    it('sets state to laoded data and calls onLoadSuccess', (done) => {
      const dataRowsParam = chance.guid();
      const countParam = chance.guid();

      const resource = chance.hash();
      const dataRows = [resource];
      const count = chance.d100();
      const data = { [dataRowsParam]: dataRows, [countParam]: count };

      const state = {
        gridIsLoading: false,
        dataRows: dataRows,
        count: count
      };

      const p = Promise.resolve();
      const onLoadSuccess = sinon.stub();
      onLoadSuccess.withArgs(data);

      const instance = shallow(<Grid
        url={dummyUrl}
        dataRowsParam={dataRowsParam}
        countParam={countParam}
        onLoadSuccess={onLoadSuccess}
      />).instance();

      const setStatePromise = sandbox.stub(instance, 'setStatePromise');
      setStatePromise.withArgs(state).returns(p);

      instance
        .handleLoad(data)
        .then(() => {
          expect(setStatePromise).to.be.calledOnce;
          expect(onLoadSuccess).to.be.calledOnce;
          done();
        })
        .catch(done);
    });
  });

  describe('#handleLoadError', () => {
    it('sets state loading to false and calls onLoadError', (done) => {
      const xhr = {};
      const status = {};
      const error = chance.sentence();

      const state = { gridIsLoading: false };

      const onLoadError = sinon.stub();
      onLoadError.withArgs(xhr, status, error);

      const instance = shallow(<Grid url={dummyUrl} onLoadError={onLoadError} />).instance();

      const p = Promise.resolve();
      const setStatePromise = sandbox.stub(instance, 'setStatePromise');
      setStatePromise.withArgs(state).returns(p);

      instance
        .handleLoadError(xhr, status, error)
        .then(() => {
          expect(setStatePromise).to.be.calledOnce;
          expect(onLoadError).to.be.calledOnce;
          done();
        })
        .catch(done);
    });
  });

  describe('#buildPostData', () => {
    it('returns fiter/pagination/sort data', () => {
      const filterData = { filterDataSomeProp: chance.hash() };

      const paginationDataBuilt = { builtPaginationSomeProp: chance.hash() };
      const sortDataBuilt = { buildSortDataSomeProp: chance.hash() };

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.filterData = filterData;

      const buildPaginationPostData = sandbox.stub(instance, 'buildPaginationPostData');
      buildPaginationPostData.returns(paginationDataBuilt);

      const buildSortPostData = sandbox.stub(instance, 'buildSortPostData');
      buildSortPostData.returns(sortDataBuilt);

      const postData = { ...filterData, ...paginationDataBuilt, ...sortDataBuilt };

      expect(instance.buildPostData()).to.be.eql(postData);
      expect(buildPaginationPostData).to.have.been.calledOnce;
      expect(buildSortPostData).to.have.been.calledOnce;
    });
  });

  describe('#buildPaginationPostData', () => {
    it('returns pagination params', () => {
      const paginationConfigs = { param: chance.word(), perPageParam: chance.word() }
      const page = chance.d100();
      const perPage = chance.d100();

      const expectedValue = {
        [paginationConfigs.param]: page,
        [paginationConfigs.perPageParam]: perPage
      };

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state = { page, perPage };

      const paginationConfigsStub = sandbox.stub(instance, 'paginationConfigs');
      paginationConfigsStub.returns(paginationConfigs);

      expect(instance.buildPaginationPostData()).to.be.eql(expectedValue);
      expect(paginationConfigsStub).to.have.been.calledOnce;
    });
  });

  describe('#buildSortPostData', () => {
    it('returns sort params', () => {
      const sortData = { field: chance.word(), direction: chance.word() };
      const sortConfigs = { param: chance.word(), directionParam: chance.word() };

      const expectedValue = {
        [sortConfigs.param]: sortData.field,
        [sortConfigs.directionParam]: sortData.direction
      };

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.sortData = sortData;

      const sortConfigsStub = sandbox.stub(instance, 'sortConfigs');
      sortConfigsStub.returns(sortConfigs);

      const parseSortPostDataValueStub = sandbox.stub(instance, 'parseSortPostDataValue');
      parseSortPostDataValueStub.returns(sortData.field);

      expect(instance.buildSortPostData()).to.be.eql(expectedValue);
      expect(sortConfigsStub).to.have.been.calledOnce;
      expect(parseSortPostDataValueStub).to.have.been.calledOnce;
    });
  });

  describe('#parseSortPostDataValue', () => {
    it('returns field when no fieldValueFormat config', () => {
      const sortConfigs = {};
      const sortData = { field: chance.word() };
      const expectedValue = sortData.field;

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.sortData = sortData;

      expect(instance.parseSortPostDataValue(sortConfigs)).to.be.eql(expectedValue);
    });

    it('returns formatted field when fieldValueFormat config', () => {
      const sortConfigs = {
        fieldValueFormat: '%{field %{field} :field field direction ${direction} %{direction} }',
      };

      const sortData = { field: chance.word(), direction: chance.word() };

      const expectedValue = sortConfigs.fieldValueFormat
        .replace(/%\{field}/, sortData.field)
        .replace(/%\{direction}/, sortData.direction);

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.sortData = sortData;

      expect(instance.parseSortPostDataValue(sortConfigs)).to.be.eql(expectedValue);
    });
  });

  describe('#buildGridClassName', () => {
    it('returns the className', () => {
      const className = chance.word();

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      const classNameStub = sinon.stub(instance, 'className');
      classNameStub.returns(className);

      expect(instance.buildGridClassName()).to.be.equal(className);
    });

    it('appends class loading when grid is loading', () => {
      const className = chance.word();
      const expectedValue = `${className} loading`;

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.gridIsLoading = true;

      const classNameStub = sinon.stub(instance, 'className');
      classNameStub.returns(className);

      expect(instance.buildGridClassName()).to.be.equal(expectedValue);
    });
  });

  describe('#serialize', () => {
    it('returns dataRows in state', () => {
      const dataRows = [chance.hash()];

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.dataRows = dataRows;

      expect(instance.serialize()).to.be.equal(dataRows);
    });
  });

  describe('#reconfigureGrid', () => {
    it('sets config to state', (done) => {
      const configKey = chance.word();
      const configValue = chance.hash();
      const config = { [configKey]: configValue };

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      sandbox.stub(instance, 'loadData');

      instance
        .reconfigureGrid(config)
        .then(() => {
          expect(instance.state[configKey]).to.be.equal(config[configKey]);
          done();
        })
        .catch(done);
    });

    it('resets selection when resetSelection is true', (done) => {
      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.allSelected = true;
      instance.state.selectedRowIds = [chance.d100()];

      sandbox.stub(instance, 'loadData');

      instance
        .reconfigureGrid({}, true)
        .then(() => {
          expect(instance.state.allSelected).to.be.false;
          expect(instance.state.selectedRowIds).to.be.eql([]);
          done();
        })
        .catch(done);
    });

    it('keeps selection when resetSelection is false', (done) => {
      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.allSelected = true;
      instance.state.selectedRowIds = [chance.d100()];

      sandbox.stub(instance, 'loadData');

      instance
        .reconfigureGrid({})
        .then(() => {
          expect(instance.state.allSelected).to.be.true;
          expect(instance.state.selectedRowIds).to.be.eql(instance.state.selectedRowIds);
          done();
        })
        .catch(done);
    });
  });

  describe('#handlePagination', () => {
    it('calls reconfigureGrid with page config', (done) => {
      const page = chance.d100();
      const allSelected = true;

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.allSelected = allSelected;
      sandbox.stub(instance, 'loadData');

      const p = Promise.resolve();
      const reconfigureGrid = sandbox.stub(instance, 'reconfigureGrid');
      reconfigureGrid.withArgs({ page }, allSelected).returns(p);

      instance
        .handlePagination(page)
        .then(() => {
          expect(reconfigureGrid).to.have.been.calledOnce;
          done();
        })
        .catch(done);
    });
  });

  describe('#handleChangePerPage', () => {
    it('calls reconfigureGrid with perPage config', (done) => {
      const perPage = chance.d100();
      const allSelected = true;

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      instance.state.allSelected = allSelected;
      sandbox.stub(instance, 'loadData');

      const p = Promise.resolve();
      const reconfigureGrid = sandbox.stub(instance, 'reconfigureGrid');
      reconfigureGrid.withArgs({ perPage }, allSelected).returns(p);

      instance
        .handleChangePerPage(perPage)
        .then(() => {
          expect(reconfigureGrid).to.have.been.calledOnce;
          done();
        })
        .catch(done);
    });
  });

  describe('#handleFilterSubmit', () => {
    let onFilterSubmit, event, postData;

    beforeEach(() => {
      onFilterSubmit = sinon.stub();
      event = { isDefaultPrevented: sinon.stub(), preventDefault: sinon.stub(), persist: () => {} };
      postData = { [chance.word()]: chance.hash() };
    });

    it('calls onFilterSubmit', (done) => {
      const instance = shallow(<Grid url={dummyUrl} onFilterSubmit={onFilterSubmit}/>).instance();
      sandbox.stub(instance, 'loadData');

      onFilterSubmit.withArgs(event, postData);

      instance.handleFilterSubmit(event, postData)
        .then(() => {
          expect(onFilterSubmit).to.have.been.calledOnce;
          done();
        })
        .catch(done);
    });

    it('reconfigures grid if not default prevented', (done) => {
      const instance = shallow(<Grid url={dummyUrl} onFilterSubmit={onFilterSubmit}/>).instance();
      sandbox.stub(instance, 'loadData');

      event.isDefaultPrevented.returns(false);

      instance.handleFilterSubmit(event, postData)
        .then(() => {
          expect(onFilterSubmit).to.have.been.calledOnce;
          expect(event.preventDefault).to.have.been.calledOnce;
          done();
        })
        .catch(done);
    });

    it('cancels event when default is prevented', (done) => {
      const instance = shallow(<Grid url={dummyUrl} onFilterSubmit={onFilterSubmit}/>).instance();
      sandbox.stub(instance, 'loadData');

      event.isDefaultPrevented.returns(true);

      instance.handleFilterSubmit(event, postData)
      .then(() => {
        expect(onFilterSubmit).to.have.been.calledOnce;
        expect(event.preventDefault).to.not.have.been.calledOnce;
        done();
      })
      .catch(done);
    });
  });

  describe('#handleSort', () => {
    it('reconfigures grid to firstPage and with sortData config', (done) => {
      const page = 1;
      const sortData = { field: chance.word() };

      const instance = shallow(<Grid url={dummyUrl} />).instance();
      sandbox.stub(instance, 'loadData');

      const p = Promise.resolve();
      const reconfigureGrid = sandbox.stub(instance, 'reconfigureGrid');
      reconfigureGrid.withArgs({ page, sortData }).returns(p);

      instance
        .handleSort(sortData)
        .then(() => {
          expect(reconfigureGrid).to.be.calledOnce;
          done();
        })
        .catch(done);
    });
  });

  describe('#handleSelectDataRows', () => {
    let promise, onSelectDataRow, event, selectedRowIds, selectedData, wrapper, instance, setStatePromise;

    beforeEach(() => {
      onSelectDataRow = sinon.stub();
      event = { isDefaultPrevented: sinon.stub(), preventDefault: sinon.stub(), persist: () => {} };
      selectedRowIds = [chance.d100()];
      selectedData = {[chance.word()]: chance.hash()};

      wrapper = shallow(<Grid url={dummyUrl} onSelectDataRow={onSelectDataRow}/>);
      instance = wrapper.instance();
      sandbox.stub(instance, 'loadData');

      promise = Promise.resolve();
      setStatePromise = sandbox.stub(instance, 'setStatePromise');

      onSelectDataRow.withArgs(event, selectedRowIds);
    });

    it('calls onSelectDataRow', (done) => {
      instance
        .handleSelectDataRows(event, selectedRowIds, selectedData)
        .then(() => {
          expect(onSelectDataRow).to.have.been.calledOnce;
          done();
        })
        .catch(done);
    });

    describe('when default event case', () => {
      beforeEach(() => {
        event.isDefaultPrevented.returns(false);
      });

      it('prevents default', (done) => {
        instance
          .handleSelectDataRows(event, selectedRowIds, selectedData)
          .then(() => {
            expect(event.preventDefault).to.have.been.calledOnce;
            done();
          })
          .catch(done);
      })

      it('sets selectedRowIds and removes allSelected', (done) => {
        const nextState = {
          selectedRowIds,
          selectedData,
          allSelected: false,
        };

        instance.state.selectedData = selectedData;
        setStatePromise = setStatePromise.withArgs(nextState).returns(promise);

        instance
          .handleSelectDataRows(event, selectedRowIds, selectedData)
          .then(() => {
            expect(setStatePromise).to.have.been.calledOnce;
            done();
          })
          .catch(done);
      });

      describe('when selectable is "one" and has selectedData', () => {
        beforeEach(() => {
          wrapper.setProps({ selectable: 'one' });
          instance = wrapper.instance();
        });

        it('sets selectedData in state', (done) => {
          const nextState = {
            selectedRowIds,
            selectedData,
            allSelected: false,
          };

          setStatePromise = setStatePromise.withArgs(nextState).returns(promise);

          instance
            .handleSelectDataRows(event, selectedRowIds, selectedData)
            .then(() => {
              expect(setStatePromise).to.have.been.calledOnce;
              done();
            })
            .catch(done);
        });
      });
    });
  });

  describe('#handleRemoveSelection', () => {
    let onRemoveSelection, event, wrapper, instance, reconfigureGrid;

    beforeEach(() => {
      onRemoveSelection = sinon.stub();
      event = { isDefaultPrevented: sinon.stub(), preventDefault: sinon.stub(), persist: () => {} };

      wrapper = shallow(<Grid url={dummyUrl} onRemoveSelection={onRemoveSelection}/>);
      instance = wrapper.instance();
      sandbox.stub(instance, 'loadData');

      onRemoveSelection.withArgs(event);

      reconfigureGrid = sandbox.stub(instance, 'reconfigureGrid');
    });

    it('calls onRemoveSelection', (done) => {
      instance
        .handleRemoveSelection(event)
        .then(() => {
          expect(onRemoveSelection).to.have.been.calledOnce;
          done();
        })
        .catch(done);
    });

    describe('when default event case', () => {
      beforeEach(() => {
        event.isDefaultPrevented.returns(false);
      });

      it('prevents default', (done) => {
        instance
          .handleRemoveSelection(event)
          .then(() => {
            expect(event.preventDefault).to.have.been.calledOnce;
            done();
          })
          .catch(done);
      });

      it('resets selection', (done) => {
        const p = Promise.resolve();
        reconfigureGrid = reconfigureGrid.withArgs({}, true).returns(p);

        instance
          .handleRemoveSelection(event)
          .then(() => {
            expect(reconfigureGrid).to.be.calledOnce;
            done();
          })
          .catch(done);
      });
    });
  });

  describe('#handleSelectAllRows', () => {
    let onSelectAllRows, event, wrapper, instance, setStatePromise;

    beforeEach(() => {
      onSelectAllRows = sinon.stub();
      event = { isDefaultPrevented: sinon.stub(), preventDefault: sinon.stub(), persist: () => {} };

      wrapper = shallow(<Grid url={dummyUrl} onSelectAllRows={onSelectAllRows}/>);
      instance = wrapper.instance();
      sandbox.stub(instance, 'loadData');

      onSelectAllRows.withArgs(event);

      setStatePromise = sandbox.stub(instance, 'setStatePromise');
    });

    it('calls onSelectAllRows', (done) => {
      instance
        .handleSelectAllRows(event)
        .then(() => {
          expect(onSelectAllRows).to.have.been.calledOnce;
          done();
        })
        .catch(done);
    });

    describe('when default event case', () => {
      beforeEach(() => {
        event.isDefaultPrevented.returns(false);
      });

      it('prevents default', (done) => {
        instance
          .handleSelectAllRows(event)
          .then(() => {
            expect(event.preventDefault).to.have.been.calledOnce;
            done();
          })
          .catch(done);
      });

      it('sets allSelected to true', (done) => {
        const p = Promise.resolve();
        setStatePromise = setStatePromise.withArgs({ allSelected: true }).returns(p);

        instance
          .handleSelectAllRows(event)
          .then(() => {
            expect(setStatePromise).to.be.calledOnce;
            done();
          })
          .catch(done);
      });
    });
  });

  describe('#renderFilter', () => {
    it('renders a GridFilter', () => {
      const onSubmit = sinon.stub();

      const props = {
        url: dummyUrl,
        filter: {[chance.word()]: chance.hash()},
      };

      const state = {
        gridIsLoading: chance.bool()
      };

      const extraProps = {[chance.word()]: chance.hash()};

      const wrapper = shallow(<Grid url={dummyUrl} {...props} />);
      const instance = wrapper.instance();

      instance.state = state;
      instance.handleFilterSubmit = onSubmit;

      const result = instance.renderFilter(extraProps);
      const { ref, ...resultProps } = result.props;
      expect(result.type).to.be.eql(GridFilter);
      expect(resultProps).to.be.eql({
        ...GridFilter.defaultProps,
        action: props.url,
        ...props.filter,
        isLoading: state.gridIsLoading,
        onSubmit: onSubmit,
        ...extraProps,
      })
    });
  });

  describe('#renderTable', () => {
    it('renders a GridTable', () => {
      const props = {
        resource: chance.hash(),
        columns: {},
        selectable: ["multiple", "none", "one"][chance.integer({ min: 0, max: 2})],
        selectedRowIdsParam: chance.hash(),
        dataRowIdField: chance.hash(),
        tableClassName: chance.hash(),
        rowSelectableFilter: () => {},
        customTableHeader: chance.hash(),
        forceShowSelectAllButton: chance.bool(),
        onClickRow: () => {},
        tableRowCssClass: () => {},
        clearThemeTable: chance.bool(),
        emptyMessage: chance.hash()
      };

      const state = {
        sortData: chance.hash(),
        dataRows: chance.hash(),
        selectedRowIds: chance.hash(),
        allSelected: chance.hash(),
        filterData: chance.hash(),
        count: chance.hash(),
      };

      const sortConfigsResult = chance.hash();
      const getActionButtonsResult = chance.hash();
      const getRowHrefResult = chance.hash();

      const handleSort = chance.hash();
      const handleSelectDataRows = chance.hash();
      const handleRemoveSelection = chance.hash();
      const handleSelectAllRows = chance.hash();

      const expected = <GridTable
        resource={props.resource}
        columns={props.columns}
        sortConfigs={sortConfigsResult}
        sortData={state.sortData}
        dataRows={state.dataRows}
        selectable={props.selectable}
        selectedRowIds={state.selectedRowIds}
        selectedRowIdsParam={props.selectedRowIdsParam}
        dataRowIdField={props.dataRowIdField}
        allSelected={state.allSelected}
        allSelectedData={state.filterData}
        count={state.count}
        actionButtons={getActionButtonsResult}
        tableClassName={props.tableClassName}
        onSort={handleSort}
        onSelect={handleSelectDataRows}
        onRemoveSelection={handleRemoveSelection}
        onSelectAll={handleSelectAllRows}
        rowSelectableFilter={props.rowSelectableFilter}
        customTableHeader={props.customTableHeader}
        forceShowSelectAllButton={props.forceShowSelectAllButton}
        onClickRow={props.onClickRow}
        rowHref={getRowHrefResult}
        tableRowCssClass={props.tableRowCssClass}
        clearThemeTable={props.clearThemeTable}
        emptyMessage={props.emptyMessage}
      />;

      const wrapper = shallow(<Grid url={dummyUrl} {...props} />);
      const instance = wrapper.instance();
      instance.state = state;

      sandbox.stub(instance, 'sortConfigs').returns(sortConfigsResult);
      sandbox.stub(instance, 'getActionButtons').returns(getActionButtonsResult);
      sandbox.stub(instance, 'getRowHref').returns(getRowHrefResult);

      instance.handleSort = handleSort;
      instance.handleSelectDataRows = handleSelectDataRows;
      instance.handleRemoveSelection = handleRemoveSelection;
      instance.handleSelectAllRows = handleSelectAllRows;

      const result = instance.renderTable();
      expect(result).to.be.eql(expected);
    });
  });

  describe('#renderPagination', () => {
    it('renders a GridPagination', () => {
      const props = { url: dummyUrl, pagination: true };
      const state = {
        perPage: chance.integer(),
        page: chance.integer(),
        count: chance.integer(),
        dataRows: { length: chance.integer() }
      };

      const paginationConfigsResult = { [chance.word()]: chance.hash() };
      const handlePagination = () => {};
      const handleChangePerPage = () => {};

      const extraProps = {[chance.word]: chance.hash()};

      const expected = <GridPagination
        {...paginationConfigsResult}
        perPage={state.perPage}
        page={state.page}
        count={state.count}
        onPagination={handlePagination}
        onChangePerPage={handleChangePerPage}
        pageRowsCount={state.dataRows.length}
        {...extraProps}
      />;

      const wrapper = shallow(<Grid {...props} />);
      const instance = wrapper.instance();

      instance.state = state;
      instance.handlePagination = handlePagination;
      instance.handleChangePerPage = handleChangePerPage;

      sandbox.stub(instance, 'paginationConfigs').returns(paginationConfigsResult);

      const result = instance.renderPagination(extraProps);
      expect(result).to.be.eql(expected);
    });
  });

  describe('#render', () => {
    it('renders a div as root', () => {
      const builtClassName = chance.hash();

      sandbox.stub(Grid.prototype, 'buildGridClassName').returns(builtClassName);

      const wrapper = shallow(<Grid url={dummyUrl} />);

      expect(wrapper.is('div')).to.be.true;
      expect(wrapper.prop('className')).to.be.equal(builtClassName);
    });

    it('renders filter', () => {
      const wrapper = shallow(<Grid url={dummyUrl} filter={{[chance.word]: {}}} />);

      expect(wrapper.childAt(0).is(GridFilter)).to.be.true;
    });

    it('renders top pagination', () => {
      const wrapper = shallow(<Grid url={dummyUrl} />);

      expect(wrapper.childAt(1).is(GridPagination)).to.be.true;
    });

    it('renders table', () => {
      const wrapper = shallow(<Grid url={dummyUrl} />);

      expect(wrapper.childAt(2).is(GridTable)).to.be.true;
    });

    it('renders bottom pagination', () => {
      const wrapper = shallow(<Grid url={dummyUrl} />);

      expect(wrapper.childAt(3).is(GridPagination)).to.be.true;
    });

    it('pass hidden prop to top GridPagination when paginationOnTop is false', () => {
      const wrapper = shallow(<Grid url={dummyUrl} paginationOnTop={false} />);
      expect(wrapper.childAt(1).prop('hidden')).to.be.true;
    });

    it('pass hidden prop to both GridPagination elements when pagination is false', () => {
      const wrapper = shallow(<Grid url={dummyUrl} pagination={false} />);

      expect(wrapper.childAt(1).prop('hidden')).to.be.true;
      expect(wrapper.childAt(3).prop('hidden')).to.be.true;
    });
  });
});
