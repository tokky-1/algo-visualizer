import { Bars } from "./Bars.jsx";
import { useVisualizer } from "../hooks/useVisualizer.js";


export function Visualizer({ algorithm, data }) {
  const { step, play, pause, stepOnce, reset, delay, setDelay } =
    useVisualizer(algorithm, data);
  return (   <>
      <Bars {...step} />
      <button onClick={play}> Play </button>
      <button  onClick={pause}> Pause </button>
      <button  onClick={stepOnce}> Step </button>
      <button  onClick={reset}> Reset </button>
      <input type="range" min="50" max="1000" value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
      </>);
}