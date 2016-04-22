const testsContext = require.context('./specs', true, /\.(js|jsx)$/);
testsContext.keys().forEach(testsContext);

// const componentsContext = require.context('../src/js/components/input', false, /(input|input_text)\.jsx/);///.*[^(\.spec)]\.(js|jsx)$/);
// componentsContext.keys().forEach(componentsContext);
