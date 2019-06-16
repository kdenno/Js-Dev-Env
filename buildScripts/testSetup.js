// Require babel to transpile before our tests run
require('babel-register');

// disable webpack features that mocha doesnt understand in this case the .css extension on the import in index.js
require.extensions['.css'] = function() {}
