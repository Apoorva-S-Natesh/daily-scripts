import { apiKey } from "./util.js"; //shloud have used tupe="module" while linking this script in html
//import apiKey from "./util.js"; -When impoting a default export no need of {} but still needs a name
//import { apiKey, anotherKey } from "./util.js" // multiple not default imports or 
//import * as util from "./util.js" // could create a javascript object, everything that util gives is grouped into util.
//import {apiKey, anotherKey as key} from "./util.js"

console.log(apiKey);
//console.log(util.apiKey); - when importing multiple things that are grouped using javascript object
