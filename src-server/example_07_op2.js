import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

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

Rx.Observable.range(1, 5)
    .concat(Rx.Observable.range(10, 5))
    .subscribe(createSubscriber("CONTACT 1"));