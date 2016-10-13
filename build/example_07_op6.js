"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Rx.Observable.range(1,10)
    .first()
    .subscribe(createSubscriber("FIRST"));

Rx.Observable.range(1,10)
    .last()
    .subscribe(createSubscriber("LAST"));    

Rx.Observable.range(1,10)
    .single()
    .subscribe(createSubscriber("SINGLE"));        

Rx.Observable.range(1,10)
    .take(5)
    .subscribe(createSubscriber("TAKE"));       

Rx.Observable.range(1,10)
    .skip(5)
    .subscribe(createSubscriber("SKIP"));   
*/

/*
Rx.Observable.interval(500)
    .skipWhile(i => i < 4)
    .takeWhile(i => i < 10)
    .subscribe(createSubscriber("SKIP WHILE & TAKE WHILE")); 
*/

_Rx2.default.Observable.interval(500).skipUntil(_Rx2.default.Observable.timer(2000)).takeUntil(_Rx2.default.Observable.timer(3000)).subscribe((0, _util.createSubscriber)("SKIP UNTIL & TAKE UNTIL"));