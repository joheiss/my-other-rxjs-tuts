import $ from "jquery";
import Rx from "rxjs/Rx";

// getting the DOM elements
const $drag = $("#drag");
const $document = $(document);
const $dropAreas = $(".drop-area");


// helper functions
const moveDrag = (startEvent, moveEvent) => {
    $drag.css({
        left: moveEvent.clientX - startEvent.offsetX,
        top: moveEvent.clientY - startEvent.offsetY
    });
};

// preparing the event observables
const beginDrag$ = Rx.Observable.fromEvent($drag, "mousedown");
const endDrag$ = Rx.Observable.fromEvent($document, "mouseup");
const mouseMove$ = Rx.Observable.fromEvent($document, "mousemove");

const currentOverArea$ = Rx.Observable.merge(
    Rx.Observable.fromEvent($dropAreas, "mouseover").map(ev => $(ev.target)),
    Rx.Observable.fromEvent($dropAreas, "mouseout").map(ev => null),
);

// handle drag & drop
const drops$ = beginDrag$
    .do(ev => {
        ev.preventDefault();
        $drag.addClass("dragging");
    })
    .mergeMap(startEvent => {
        return mouseMove$
            .takeUntil(endDrag$)
            .do(moveEvent => moveDrag(startEvent, moveEvent))
            .last()
            .withLatestFrom(currentOverArea$, (_, $area) => $area);
    })
    .do(() => {
        $drag.removeClass("dragging")
            .animate({ top: 0, left: 0}, 250);
    });

drops$.subscribe($dropArea => {
    $dropAreas.removeClass("dropped");
    if ($dropArea) {
        $dropArea.addClass("dropped");
    }
});



