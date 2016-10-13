"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.range(1, 100).bufferCount(101).subscribe((0, _util.createSubscriber)("BUFFER COUNT"));

/*
Rx.Observable.interval(500)
    .take(20)
    .bufferTime(2000)
    .subscribe(createSubscriber("BUFFER TIME"));

Rx.Observable.interval(500)
    .take(20)
    .buffer(Rx.Observable.interval(1000))
    .subscribe(createSubscriber("BUFFER"));
*/

_Rx2.default.Observable.range(1, 10).toArray().subscribe((0, _util.createSubscriber)("TO ARRAY"));