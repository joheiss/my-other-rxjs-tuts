import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

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

const apiCall$ = new Rx.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe(createSubscriber("ASYNC 1"));

apiCall$.next(2);
apiCall$.complete();

setTimeout(() => {
    apiCall$.subscribe(createSubscriber("ASYNC 2"));
}, 2000);