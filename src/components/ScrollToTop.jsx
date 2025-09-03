import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop({ smoother }) {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // 'PUSH', 'POP', 'REPLACE'

  useEffect(() => {
    if (navigationType === "PUSH") {
      // smoother.current.scrollTo(0, false); // true = animate scroll
      if (
        smoother &&
        smoother.current &&
        typeof smoother.current.scrollTo === "function"
      ) {
        // Use GSAP's smoother method
        smoother.current.scrollTo(0, false); // true = animate scroll
      } else {
        // Fallback in case smoother not ready
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
  }, [pathname]);

  return null;
}
