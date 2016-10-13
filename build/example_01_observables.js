"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -----------
// Promise
// -----------
var promise = new Promise(function (resolve, reject) {
    console.log("IN PROMISE");
    resolve("Gotcha!");
});

promise.then(function (item) {
    return console.log(item);
});

// -----------
// Observable
// -----------
var simple$ = new _Rx2.default.Observable(function (observer) {
    console.log("Generating obervables ...");
    setTimeout(function () {
        observer.next("item 1");
        setTimeout(function () {
            observer.next("item 2");
            observer.complete();
        }, 1000);
    }, 1000);
});

simple$.subscribe(function (next) {
    return console.log("one.next " + next);
}, function (error) {
    return console.log("one.error " + error);
}, function () {
    return console.log("one.complete");
});

setTimeout(function () {
    simple$.subscribe({
        next: function next(_next) {
            return console.log("two.next " + _next);
        },
        error: function error(_error) {
            console.log("two.error " + _error);
        },

        complete: function complete() {
            console.log("two.complete");
        }
    });
}, 3000);

var error$ = new _Rx2.default.Observable(function (observer) {
    observer.error(new Error("kaputt!"));
});

error$.subscribe(function (next) {
    return console.log("error.next " + next);
}, function (error) {
    return console.log("error.error " + error.stack);
}, function () {
    return console.log("error.complete");
});

// ----------------
// Helper functions
// ----------------
function createInterval$(time) {
    return new _Rx2.default.Observable(function (observer) {
        var index = 0;
        var interval = setInterval(function () {
            console.log("Generating " + index);
            observer.next(index++);
        }, time);

        return function () {
            clearInterval(interval);
        };
    });
}

// ---------------
// Part 2
// ---------------
function take$(source$, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var count = 0;
        var subscription = source$.subscribe(function (next) {
            observer.next(next);
            if (++count >= amount) observer.complete();
        }, function (error) {
            return observer.error(error);
        }, function () {
            return observer.complete();
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}

var everySecond$ = createInterval$(1000);
var first5Seconds$ = take$(everySecond$, 5);
var subscription = first5Seconds$.subscribe((0, _util.createSubscriber)("ONE"));

/*
setTimeout(() => {
    subscription.unsubscribe();
}, 5000);
*/