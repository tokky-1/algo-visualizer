// test.mjs
import { bubbleSort } from "./bubblesort.js";

const input = [5, 2, 4, 1];
const steps = [...bubbleSort(input)];

console.log("input after run:", input);   // should still be [5, 2, 4, 1]
console.log("steps:", steps.length);
console.log("last step:", steps.at(-1));  // sorted, type "done"
