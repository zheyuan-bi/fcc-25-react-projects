import { useLayoutEffect, useState } from "react";

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  function handleResize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
