'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _appMaker = require('./app-maker');

var _MyComponent = require('./MyComponent');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (node) {
  _reactDom2.default.render(_react2.default.createElement(_MyComponent2.default, null), node);
};