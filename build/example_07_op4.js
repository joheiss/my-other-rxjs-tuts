"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.range(1, 10).reduce(function (acc, value) {
    return acc + value;
}).subscribe((0, _util.createSubscriber)("REDUCE"));

_Rx2.default.Observable.range(1, 10).scan(function (acc, value) {
    return acc + value;
}).subscribe((0, _util.createSubscriber)("SCAN"));