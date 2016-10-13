import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// --- turn a COLD observable in a HOT one 
const interval$ = Rx.Observable.interval(1000)
    .take(10)
    .share(); // make it HOT

/*
setTimeout(() => {
    interval$.connect();
}, 5000);    
*/

setTimeout(() => {
    interval$.subscribe(createSubscriber("COLD 1"))
}, 1500);    

setTimeout(() => {
    interval$.subscribe(createSubscriber("COLD 2"))
}, 3000);    

