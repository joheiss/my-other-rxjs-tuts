import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

Rx.Observable.range(1,10)
    .reduce((acc, value) => acc + value)
    .subscribe(createSubscriber("REDUCE"));

Rx.Observable.range(1,10)
    .scan((acc, value) => acc + value)
    .subscribe(createSubscriber("SCAN"));    

    