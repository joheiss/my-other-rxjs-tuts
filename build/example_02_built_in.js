"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.interval(500).take(5).subscribe((0, _util.createSubscriber)("INTERVAL"));

_Rx2.default.Observable.timer(5000).subscribe((0, _util.createSubscriber)("TIMER"));

_Rx2.default.Observable.timer(1000, 500).take(5).subscribe((0, _util.createSubscriber)("TIMER & INTERVAL"));

_Rx2.default.Observable.of("HELLO WORLD").subscribe((0, _util.createSubscriber)("OF"));

_Rx2.default.Observable.of("Uno", "Due", "Tre").subscribe((0, _util.createSubscriber)("OF with multiple arguments"));

_Rx2.default.Observable.of(["Uno", "Due", "Tre"]).subscribe((0, _util.createSubscriber)("OF with an array"));

_Rx2.default.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).subscribe((0, _util.createSubscriber)("FROM"));

// Rx.Observable.throw(new Error("Kaputt!"))    
//    .subscribe(createSubscriber("THROW"));  

_Rx2.default.Observable.empty().subscribe((0, _util.createSubscriber)("EMPTY"));

var sideEffect = 0;
var defer$ = _Rx2.default.Observable.defer(function () {
    sideEffect++;
    return _Rx2.default.Observable.of(sideEffect);
});

defer$.subscribe((0, _util.createSubscriber)("DEFER 1"));
defer$.subscribe((0, _util.createSubscriber)("DEFER 2"));
defer$.subscribe((0, _util.createSubscriber)("DEFER 3"));

_Rx2.default.Observable.never().subscribe((0, _util.createSubscriber)("NEVER"));

_Rx2.default.Observable.range(10, 30).subscribe((0, _util.createSubscriber)("RANGE"));