(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "foo"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("foo"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.foo);
    global.actual = mod.exports;
  }
})(this, function (_exports, _foo) {
  "use strict";

  _exports.__esModule = true;
  _exports.bar = _exports.foo = void 0;
  _exports.foo = _foo.foo;
  _exports.bar = _foo.bar;
});
