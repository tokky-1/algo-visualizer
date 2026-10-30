import { bubbleSort } from "./algorithms/bubblesort.js";
import { Bars } from "./components/Bars.jsx";
import { useVisualizer } from "./hooks/useVisualizer.js";

import './App.css'

const INITIAL = [5, 2, 9, 1, 7, 3, 8, 4];

function App() {
  const { step, play, pause, stepOnce, reset, delay, setDelay } =
    useVisualizer(bubbleSort, INITIAL);

  return (
    <>
    <Bars {...step} />
    <button onClick={play}> Play </button>
    <button  onClick={pause}> Pause </button>
    <button  onClick={stepOnce}> Step </button>
    <button  onClick={reset}> Reset </button>
    <input type="range" min="50" max="1000" value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
    </>
  );
}

export default App
