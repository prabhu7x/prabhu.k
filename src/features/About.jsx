import data from '../assets/my-data.json';
import avatar from '../assets/images/avatar.webp';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import cv from '../assets/images/cv.webp'
import resume from '../assets/Prabhu-RESUME.pdf'

function About({smoother}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleText, setVisibleText] = useState("");
  const [charIndex, setCharIndex] = useState(163);
  const [typingDone, setTypingDone] = useState(false);

  const typingInterval = useRef(null);
  const aboutText = useRef();
  const sectionRef = useRef();

  const isLargeScreen = useMediaQuery("(min-width: 900px)");
  const fullText = data.about;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true
    })
    // refresh scrollTrigger after smoother is ready
    if(smoother?.current){
      ScrollTrigger.refresh()
    }
    // animation for about text
    gsap.fromTo(aboutText.current,{
      opacity: 0,
      y: 50
    },{
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current, // Use the section as trigger
          start: "top 40%",
          end: "bottom 30%",
          toggleActions: "play none none none",
          // markers: true,
          id: "about"
        }
    })

    // cleanup function 
    return ()=>{
      ScrollTrigger.getById('about')?.kill()
    }
  }, [smoother]);

  const startTyping = () => {
    if (typingInterval.current) return;

    setTypingDone(false); // reset flag

    typingInterval.current = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= fullText.length) {
          clearInterval(typingInterval.current);
          typingInterval.current = null;
          setTypingDone(true); //
          return prev;
        }
        return prev + 1;
      });
    }, 15);
  };

  const handleToggle = () => {
    if (isExpanded) {
      setCharIndex(163);
      setIsExpanded(false);
      setTypingDone(false);
    } else {
      startTyping();
      setIsExpanded(true);
    }
  };

  useEffect(() => {
    setVisibleText(fullText.slice(0, charIndex));
  }, [charIndex]);

  return (
    <section ref={sectionRef} id="about">
      <div className="hero">
      <div className="avatar-wrapper">

        <img src={avatar} alt="avatar" className='avatar' />
      </div>
        <div className="text-container">
          <p ref={aboutText}>
            {isLargeScreen ? fullText : visibleText}
            {!isLargeScreen && (
              <>
                {/*  Only show after typing finishes */}
                {!isExpanded && (
                  <button onClick={handleToggle}>...See More</button>
                )}
                {isExpanded && typingDone && (
                  <button onClick={handleToggle}>.See Less</button>
                )}
              </>
            )}
          </p>
          <div className="btn-cv">
          <Link id="gt-project-btn" className="btn-animation" to="/projects">
            Projects
          </Link>
          <a href={resume}>
            <span className='tooltip'>Download CV</span>
            <img src={cv} className='btn-animation' alt="download cv" /></a>
          </div>
        </div>
      </div>
      <div className="lang-icons">
        {data.languages.map((icon) => (
          <img key={icon} src={`assets/images/${icon}`} alt={icon} />
        ))}
      </div>
    </section>
  );
}

export default About;
