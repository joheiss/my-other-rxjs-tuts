import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

/*
// map
function arrayMap(array, projection) {
    const returnArray = [];
    for(let item of array) {
        const projected = projection(item);
        returnArray.push(projected);
    }
    return returnArray;
}

const newMap = arrayMap([1,2,3,4,5,6,7,8,9,10], x => `${x} mal`);
console.log("NEW MAP:", newMap);

Rx.Observable.range(1, 10)
    .map(x => `${x} mal`)
    .subscribe(createSubscriber("MAP"));

// mergeMap - selectMany
function arrayMergeMap(array, projection) {
    const returnArray = [];
    for (let item of array) {
        const projectedArray = projection(item);
        for (let projected of projectedArray) {
            returnArray.push(projected);
        }
    }
    return returnArray;
}
*/
const albums = [
    {id: 1, title: "Album A", tracks: [{id: 1, title: "Track 1"}, {id: 2, title: "Track 2"}]},
    {id: 2, title: "Album B", tracks: [{id: 1, title: "Track 1"}, {id: 2, title: "Track 2"}, {id: 3, title: "Track 3"}]},
    {id: 3, title: "Album C", tracks: [{id: 1, title: "Track 1"}]}
];

const artists = [
    {id: 1, firstname: "John", lastname: "Doe" },
    {id: 2, firstname: "Charlie", lastname: "Piff" },
    {id: 3, firstname: "Dolly", lastname: "Dummy" }
];

/*
const tracks = arrayMergeMap(albums, album => album.tracks);
console.log("TRACKS:", tracks);

Rx.Observable.range(1, 3)
    .mergeMap(i => Rx.Observable.timer(i * 2000).map(() => `After ${i * 2} seconds`))
    .subscribe(createSubscriber("MERGE MAP"));

Rx.Observable.fromPromise(getAlbums())
    .mergeMap(x => x)
    .map(x => x.title)
    .subscribe(createSubscriber("MERGE MAP 2"));

*/
console.log("//*********************************************//");

Rx.Observable.fromPromise(getAlbums())
    .mergeMap(x => x)
    .map(x => x.id)
    .subscribe(createSubscriber("MERGE MAP 2"));

Rx.Observable.fromPromise(getAlbums())

    .mergeMap( x => x)
    .mergeMap(x => getArtist(x.id))
    .map(a => a.firstname + " " + a.lastname)
    .subscribe(createSubscriber("MERGE MAP 3"));

function getAlbums() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(albums);
        }, 1000);
    });
}

function getArtist(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("in Promise:", id);
            resolve(artists.filter(artist => artist.id === id)[0]);
        }, 1000);
    });    
}    