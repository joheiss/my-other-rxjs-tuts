import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

/*
Rx.Observable.range(1,10)
    .first()
    .subscribe(createSubscriber("FIRST"));

Rx.Observable.range(1,10)
    .last()
    .subscribe(createSubscriber("LAST"));    

Rx.Observable.range(1,10)
    .single()
    .subscribe(createSubscriber("SINGLE"));        

Rx.Observable.range(1,10)
    .take(5)
    .subscribe(createSubscriber("TAKE"));       

Rx.Observable.range(1,10)
    .skip(5)
    .subscribe(createSubscriber("SKIP"));   
*/

/*
Rx.Observable.interval(500)
    .skipWhile(i => i < 4)
    .takeWhile(i => i < 10)
    .subscribe(createSubscriber("SKIP WHILE & TAKE WHILE")); 
*/

Rx.Observable.interval(500)
    .skipUntil(Rx.Observable.timer(2000))
    .takeUntil(Rx.Observable.timer(3000))
    .subscribe(createSubscriber("SKIP UNTIL & TAKE UNTIL")); 