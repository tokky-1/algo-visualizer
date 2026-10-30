import { useState, useRef, useEffect } from "react";

export function useVisualizer(algorithm, initialArray) {
  const [step, setStep] = useState({ array: initialArray, highlight: [], type: "idle" });
  const [playing, setPlaying] = useState(false);
  const [delay, setDelay] = useState(300);
  const genRef = useRef(null);

  function stepOnce() {
    if (genRef.current == null) {
      genRef.current = algorithm(initialArray);
    }

    const result = genRef.current.next();
    if (result.done) {
      setPlaying(false);
    } else {
      setStep(result.value);
    }
  }

  function reset() {
    setPlaying(false);
    genRef.current = null;
    setStep({ array: initialArray, highlight: [], type: "idle" });
  }

  useEffect(() => {
    if (!playing) return;

    const intervalId = setInterval(stepOnce, delay);
    return () => clearInterval(intervalId);
  }, [playing, delay]);

  return { step, playing, delay, setDelay, play: () => setPlaying(true), pause: () => setPlaying(false), stepOnce, reset };
}