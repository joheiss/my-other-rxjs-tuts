"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
const simple$ = new Rx.Subject();
simple$.subscribe(createSubscriber("SUBJECT"));

simple$.next("Hallo");
simple$.next("Josef");
simple$.complete();
*/

/*
const interval$ = Rx.Observable.interval(1000)
    .take(5);
const intervalSubject$ = new Rx.Subject();
interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe(createSubscriber("SUB 1"));
intervalSubject$.subscribe(createSubscriber("SUB 2"));
intervalSubject$.subscribe(createSubscriber("SUB 3"));

setTimeout(() => {
    intervalSubject$.subscribe(createSubscriber("SUB 4"));
}, 3000);
*/

/*
const currentUser$ = new Rx.Subject();
const isLoggedIn$ = currentUser$.map(user => user.isLoggedIn);

isLoggedIn$.subscribe(createSubscriber("IS LOGGED IN"));

currentUser$.next({ isLoggedIn: false});

setTimeout(() => {
    currentUser$.next({ isLoggedIn: true, name: "joheiss"});
}, 3000);
*/

/*
const currentUser$ = new Rx.BehaviorSubject({isLoggedIn: false});
const isLoggedIn$ = currentUser$.map(user => user.isLoggedIn);

isLoggedIn$.subscribe(createSubscriber("IS LOGGED IN"));

// currentUser$.next({ isLoggedIn: false});

setTimeout(() => {
    currentUser$.next({ isLoggedIn: true, name: "joheiss"});
}, 3000);

setTimeout(() => {
    isLoggedIn$.subscribe(createSubscriber("LATE SUBSCRIBER"));
}, 4500);
*/

var apiCall$ = new _Rx2.default.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe((0, _util.createSubscriber)("ASYNC 1"));

apiCall$.next(2);
apiCall$.complete();

setTimeout(function () {
    apiCall$.subscribe((0, _util.createSubscriber)("ASYNC 2"));
}, 2000);