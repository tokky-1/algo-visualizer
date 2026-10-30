import { bubbleSort } from "./algorithms/bubblesort.js";
import { binarySearch } from "./algorithms/binarySearch.js";
import { mergeSort } from "./algorithms/mergeSort.js";
import { useState } from "react";
import { Visualizer } from "./components/Visualizer.jsx";

import './App.css'

const INITIAL = [5, 2, 9, 1, 7, 3, 8, 4];
const SORTED = [1, 3, 4, 7, 9, 12, 15, 18];
const ALGORITHMS = {
  bubble: { label: "Bubble sort", run: bubbleSort, data: INITIAL },
  binary: { label: "Binary search (target 12)", run: (arr) => binarySearch(arr, 12), data: SORTED },
  merge: { label: "Merge sort", run: mergeSort, data: INITIAL },
};
function App() {
  const [which, setWhich] = useState("bubble");

  return (
    <>
      <select value={which} onChange={(e) => setWhich(e.target.value)}>
        {Object.entries(ALGORITHMS).map(([key, { label }]) => (
          <option key={key} value={key}>{label}</option>
        ))}
      </select>
      <Visualizer
        key={which}
        algorithm={ALGORITHMS[which].run}
        data={ALGORITHMS[which].data}
      />
    </>
  );
}

export default App
