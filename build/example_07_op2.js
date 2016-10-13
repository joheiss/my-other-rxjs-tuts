"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Rx.Observable.interval(1000)
    .merge(Rx.Observable.interval(500))
     .take(3)
    .subscribe(createSubscriber("MERGE 1"));
*/

/*
Rx.Observable.merge(
    Rx.Observable.interval(1000).map(i => `${i} seconds`),
    Rx.Observable.interval(500).map(i => `${i} half seconds`)
)
.take(5)
.subscribe(createSubscriber("MERGE 2"));
*/

_Rx2.default.Observable.range(1, 5).concat(_Rx2.default.Observable.range(10, 5)).subscribe((0, _util.createSubscriber)("CONTACT 1"));