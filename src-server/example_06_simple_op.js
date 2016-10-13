import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

Rx.Observable.range(1, 10)
    .do(x => console.log(`Value generated by range is ${x}`))
    .map(x => x * x)
    .subscribe(createSubscriber("DO"));

Rx.Observable.range(1, 10)
    .finally(() => console.log(`Sequence is completed!`))
    .map(x => x * 2)
    .subscribe(createSubscriber("FINALLY"));    

Rx.Observable.range(1, 10)
    .filter(x => x < 2 || x > 5)
    .map(x => x * 1)
    .subscribe(createSubscriber("FILTER"));    

Rx.Observable.interval(1000)
    .startWith(-1)
    .subscribe(createSubscriber("STARTWITH"));        