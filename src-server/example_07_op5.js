import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";


Rx.Observable.range(1, 100)
    .bufferCount(101)
    .subscribe(createSubscriber("BUFFER COUNT"));

/*
Rx.Observable.interval(500)
    .take(20)
    .bufferTime(2000)
    .subscribe(createSubscriber("BUFFER TIME"));

Rx.Observable.interval(500)
    .take(20)
    .buffer(Rx.Observable.interval(1000))
    .subscribe(createSubscriber("BUFFER"));
*/

Rx.Observable.range(1,10)
    .toArray()
    .subscribe(createSubscriber("TO ARRAY"));