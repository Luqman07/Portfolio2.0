import { useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = () => {
  const [width, setWidth] = useState(true);
  useEffect(() => {
    const handleWindowResize = () => (window.innerWidth < 900 ? setWidth(false) : setWidth(true));

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return width
};
