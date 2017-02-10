const testsContext = require.context('.', true, /\.spec\.(js|jsx)$/);
testsContext.keys().forEach(testsContext);