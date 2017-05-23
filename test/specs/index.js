require("init");

chai.use(function(_chai, utils) {
    const React = require("react");

    utils.addProperty(chai.Assertion.prototype, 'reactComponent', function () {
        this.assert(
            this._obj.prototype instanceof React.Component
            , 'expected #{this} to be a ReactComponent'
            , 'expected #{this} to not be a ReactComponent'
        );
    });
});

const testsContext = require.context('.', true, /\.spec\.jsx?$/);
testsContext.keys().forEach(testsContext);
