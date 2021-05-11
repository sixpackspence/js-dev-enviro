//this file is not transpiled so use commonjs and es5

//first register babel to transpile before our tests run
require('@babel/register')();

//disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
