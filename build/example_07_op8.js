"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.concat(_Rx2.default.Observable.of(42), _Rx2.default.Observable.throw(new Error("KAPUTT")), _Rx2.default.Observable.of(3)).catch(function (error) {
    return _Rx2.default.Observable.of(error);
}).subscribe((0, _util.createSubscriber)("CONCAT"));

var getApi$ = function getApi$() {
    return new _Rx2.default.Observable(function (observer) {
        console.log("Getting API ...");
        observer.next("Numero Uno");
        setTimeout(function () {
            observer.next("Numero Due");
            observer.error(new Error("KAPUTT"));
            observer.complete();
        }, 1000);
    });
};

getApi$().retry(3).catch(function (error) {
    return _Rx2.default.Observable.of(error);
}).do(function () {
    return console.log("API in progress ...");
}).subscribe((0, _util.createSubscriber)("CATCH"));