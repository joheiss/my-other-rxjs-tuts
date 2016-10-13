import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// -----------
// Promise
// -----------
const promise = new Promise((resolve, reject) => {
    console.log("IN PROMISE");
    resolve("Gotcha!");
});

promise.then(item => console.log(item));

// -----------
// Observable
// -----------
const simple$ = new Rx.Observable(observer => {
    console.log("Generating obervables ...");
    setTimeout(() => {
        observer.next("item 1");
        setTimeout(() => {
            observer.next("item 2");
            observer.complete();
        }, 1000);
    }, 1000);
});

simple$.subscribe(
    next => console.log(`one.next ${next}`),
    error => console.log(`one.error ${error}`),
    () => console.log("one.complete")
);

setTimeout(() => {
    simple$.subscribe({
        next: next => console.log(`two.next ${next}`),
        error(error) {
            console.log(`two.error ${error}`);
        },
        complete: function() {
            console.log("two.complete")
        }
    });
}, 3000);

const error$ = new Rx.Observable(observer => {
    observer.error(new Error("kaputt!"))
});

error$.subscribe(
    next => console.log(`error.next ${next}`),
    error => console.log(`error.error ${error.stack}`),
    () => console.log("error.complete")
);

// ----------------
// Helper functions
// ----------------
function createInterval$(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`);
            observer.next(index++);
        }, time);

        return () => {
            clearInterval(interval);
        };
    });
}

// ---------------
// Part 2
// ---------------
function take$(source$, amount) {
    return new Rx.Observable(observer => {
        let count = 0;
        const subscription = source$.subscribe(
            next => {
                observer.next(next);
                if (++count >= amount) observer.complete();
            },
            error => observer.error(error),
            () => observer.complete()
        );
        return () => subscription.unsubscribe();
    });
}

const everySecond$ = createInterval$(1000);
const first5Seconds$ = take$(everySecond$, 5);
const subscription = first5Seconds$.subscribe(createSubscriber("ONE"));

/*
setTimeout(() => {
    subscription.unsubscribe();
}, 5000);
*/