import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

Rx.Observable.interval(500)
    .take(5)
    .subscribe(createSubscriber("INTERVAL"));

Rx.Observable.timer(5000)
    .subscribe(createSubscriber("TIMER"));

Rx.Observable.timer(1000, 500)
    .take(5)
    .subscribe(createSubscriber("TIMER & INTERVAL"));

Rx.Observable.of("HELLO WORLD")
    .subscribe(createSubscriber("OF"));

Rx.Observable.of("Uno", "Due", "Tre")
    .subscribe(createSubscriber("OF with multiple arguments"));    

Rx.Observable.of(["Uno", "Due", "Tre"])
    .subscribe(createSubscriber("OF with an array"));        

Rx.Observable.from([1,2,3,4,5,6,7,8,9])    
    .subscribe(createSubscriber("FROM"));       

// Rx.Observable.throw(new Error("Kaputt!"))    
//    .subscribe(createSubscriber("THROW"));  

Rx.Observable.empty()    
    .subscribe(createSubscriber("EMPTY"));  

let sideEffect = 0;
const defer$ = Rx.Observable.defer(() => {
    sideEffect++;
    return Rx.Observable.of(sideEffect);
});

defer$.subscribe(createSubscriber("DEFER 1"));       
defer$.subscribe(createSubscriber("DEFER 2"));       
defer$.subscribe(createSubscriber("DEFER 3"));    

Rx.Observable.never()
   .subscribe(createSubscriber("NEVER"));

Rx.Observable.range(10, 30)  
    .subscribe(createSubscriber("RANGE")); 