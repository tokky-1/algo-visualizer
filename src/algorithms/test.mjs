import { mergeSort } from "./mergeSort.js";

const input = [5, 2, 9, 1, 7, 3, 8, 4];
const last = [...mergeSort(input)].at(-1).array;
const expected = [...input].sort((x, y) => x - y);
console.log(JSON.stringify(last) === JSON.stringify(expected)); 