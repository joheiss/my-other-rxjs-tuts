"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Rx.Observable.range(1, 10)
    .zip(Rx.Observable.interval(500), (left, right) => "" + left + right)
    .subscribe(createSubscriber("ZIP"));
*/

/*
Rx.Observable.interval(1000)
    .take(5)
    .withLatestFrom(Rx.Observable.interval(500))
    .subscribe(createSubscriber("WITH LATEST FROM"));    
*/

var USERIDS = [{ id: 1, username: "hadampf" }, { id: 2, username: "rarauch" }, { id: 3, username: "ququalm" }];

var USER_ASSIGNED_ROLES = [{ id: 1, rolename: "simple" }, { id: 1, rolename: "power" }, { id: 1, rolename: "admin" }, { id: 2, rolename: "simple" }, { id: 3, rolename: "simple" }, { id: 3, rolename: "power" }, { id: 3, rolename: "admin" }];

var getAssignedRoles = function getAssignedRoles(id) {
    return USER_ASSIGNED_ROLES.filter(function (ass) {
        return ass.id === id;
    });
};

var getAssignedRoles$ = function getAssignedRoles$(id) {
    return _Rx2.default.Observable.of(USER_ASSIGNED_ROLES.filter(function (ass) {
        return ass.id === id;
    }));
};

/*
Rx.Observable.from(USERIDS)
    .map(userid => {
        const user = {
            id: userid.id,
            username: userid.username,
            roles: []
        };
        return user;
    })
    .mergeMap(user => {
        return getAssignedRoles$(user.id)
            .map(roles => {
                roles.forEach(role => user.roles.push(role.rolename));
                return user;
            })
    })
    .subscribe(createSubscriber("MERGE MAP"));  
*/

_Rx2.default.Observable.from(USERIDS).map(function (userid) {
    var user = {
        id: userid.id,
        username: userid.username,
        roles: []
    };
    return user;
}).withLatestFrom(function (user) {
    var roles = getAssignedRoles(user.id);
    roles.forEach(function (role) {
        return user.roles.push(role.rolename);
    });
    return user;
}).subscribe((0, _util.createSubscriber)("WITH LATEST FROM"));