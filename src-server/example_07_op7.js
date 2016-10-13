import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

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

const USERIDS = [
    { id: 1, username: "hadampf" },
    { id: 2, username: "rarauch" },
    { id: 3, username: "ququalm" }
];

const USER_ASSIGNED_ROLES = [
    { id: 1, rolename: "simple" },
    { id: 1, rolename: "power"},
    { id: 1, rolename: "admin"},
    { id: 2, rolename: "simple" },
    { id: 3, rolename: "simple" },
    { id: 3, rolename: "power"},
    { id: 3, rolename: "admin"},
];

const getAssignedRoles = (id) => {
    return USER_ASSIGNED_ROLES.filter(ass => ass.id === id);
};

const getAssignedRoles$ = (id) => {
    return Rx.Observable.of(USER_ASSIGNED_ROLES.filter(ass => ass.id === id));
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

Rx.Observable.from(USERIDS)
    .map(userid => {
        const user = {
            id: userid.id,
            username: userid.username,
            roles: []
        };
        return user;
    })
    .withLatestFrom(user => {
        const roles = getAssignedRoles(user.id);
        roles.forEach(role => user.roles.push(role.rolename));
        return user;
    })
    .subscribe(createSubscriber("WITH LATEST FROM"));

