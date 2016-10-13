import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

Rx.Observable.concat(
    Rx.Observable.of(42),
    Rx.Observable.throw(new Error("KAPUTT")),
    Rx.Observable.of(3)
)
.catch(error => Rx.Observable.of(error))
.subscribe(createSubscriber("CONCAT"));

const getApi$ = () => {
    return new Rx.Observable(observer => {
        console.log("Getting API ...");
        observer.next("Numero Uno");
        setTimeout(() => {
            observer.next("Numero Due");
            observer.error(new Error("KAPUTT"));
            observer.complete();
        }, 1000);
    });
}

getApi$()
    .retry(3)
    .catch(error => Rx.Observable.of(error))
    .do(() => console.log("API in progress ..."))
    .subscribe(createSubscriber("CATCH"));