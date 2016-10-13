"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --- turn a COLD observable in a HOT one 
var interval$ = _Rx2.default.Observable.interval(1000).take(10).share(); // make it HOT

/*
setTimeout(() => {
    interval$.connect();
}, 5000);    
*/

setTimeout(function () {
    interval$.subscribe((0, _util.createSubscriber)("COLD 1"));
}, 1500);

setTimeout(function () {
    interval$.subscribe((0, _util.createSubscriber)("COLD 2"));
}, 3000);