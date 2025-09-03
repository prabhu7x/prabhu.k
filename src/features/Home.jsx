import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ThemeToggle from "../components/themeToggle";

function Home() {
  const textRef = useRef();
  const helloRef = useRef();
  const h2Ref = useRef();
  const anchorRef = useRef();

  const text = "I'm Prabhu .k";

  gsap.registerPlugin(ScrollToPlugin);

  // Smooth scroll to about section
  const scrollToAbout = () => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: "#about",
      ease: "power2.inOut",
    });
  };

  // Create all spans immediately during render
  const characters = text.split("").map((char, i) => (
    <span className="name" key={i}>
      {char}
    </span>
  ));

 useGSAP(() => {
  requestAnimationFrame(() => {
   const tl = gsap.timeline();

   tl.from(helloRef.current, {
     duration: 0.6,
     opacity: 0,
     x: "-100%",
    //  ease: "power3.out",
    ease: "expo"
   })
   .to(textRef.current.children, {
     opacity: 1,
     duration: 0.05,
     stagger: 0.05,
     ease: "power1.in",
   }, "+=0.3")
   .fromTo(h2Ref.current, { opacity: 0 }, {
     opacity: 1,
     duration: 1,
     ease: "power2.in",
   }, "-=0.2")
   .fromTo(anchorRef.current, { opacity: 0 }, {
     opacity: 1,
     duration: 1,
     ease: "power2.in",
   });
 });
}, []);

  //
  //
  return (
    <section id="home">
      <ThemeToggle />
      <h1 ref={textRef} style={{ whiteSpace: "pre-wrap" }}>
        <span ref={helloRef}>Hello, </span> {characters}
      </h1>
      <h2 ref={h2Ref}>
        <span>Frontend Developer </span> — turning ideas into seamless user experiences
      </h2>
      <button
        className="gt-about-btn btn-animation"
        onClick={scrollToAbout}
        ref={anchorRef}
      >
        About Me
      </button>
    </section>
  );
}

export default Home;