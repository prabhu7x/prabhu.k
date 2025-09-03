import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Projects from "./features/Projects";
import HomeLayout from "./layouts/HomeLayout";
import ScrollToTop from "./components/ScrollToTop";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "./components/Footer";
import {useTheme} from './hooks/useTheme'

function App() {
  const smoother = useRef();
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
  useTheme()

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });
  }, []);
  //
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {/* auto scroll to top when navigate to path */}
        <ScrollToTop smoother={smoother} />
        <Routes>
          <Route path="/" element={<HomeLayout smoother={smoother} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;