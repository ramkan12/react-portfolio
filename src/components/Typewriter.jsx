import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const Typewriter = ({ text, speed = 28, startDelay = 300, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? text.length : 0);
  const [done, setDone] = useState(shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, shouldReduceMotion]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block w-[0.55ch] translate-y-[0.1em] bg-term-green align-middle ${
          done && !shouldReduceMotion ? "animate-blink" : ""
        }`}
        style={{ height: "1em" }}
      />
    </span>
  );
};

export default Typewriter;
