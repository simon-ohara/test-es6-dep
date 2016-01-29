'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = exports.app = undefined;

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'Test App',
    DESCRIPTION = 'An application to be used as a dependency in the transpiled ES6 import test';

var app = new _App3.default(NAME, DESCRIPTION);

exports.app = app;
exports.App = _App3.default;