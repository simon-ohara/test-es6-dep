"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App(name, description) {
  _classCallCheck(this, App);

  this.name = name;
  this.description = description;
  this.id = Date.now();
};

exports.default = App;