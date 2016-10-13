import $ from "jquery";
import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

const $title = $("#title");
const $results = $("#results");

// get key ups from input box
Rx.Observable.fromEvent($title, "keyup")
    .map(ev => ev.target.value)
    .distinctUntilChanged()
    .debounceTime(500)
    .switchMap(query => getItems(query))
    .subscribe(items => {
        $results.empty();
        $results.append(items.map(item => $(`<li />`).text(item)));
    });

/* ------------------------------------------------------
const keyUps$ = Rx.Observable.fromEvent($title, "keyup");
const queries$ = keyUps$
    // only get the value - not the whole event
    .map(ev => ev.target.value)
    // only react on changes
    .distinctUntilChanged()
    // throttle by 0.5 seconds
    .debounceTime(500)
    // merge items into the stream
    //.mergeMap(query => getItems(query)); // flatMap / selectMany
    // merge items into the stream - only the final query
    .switchMap(query => getItems(query)); // flatMapLatest

queries$.subscribe(items => {
    $results.empty();
    $results.append(items.map(r => $(`<li />`).text(r)));
});
---------------------------------------------------------*/

// ----------------------------
// library
// ----------------------------
function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 200));
    });
}

