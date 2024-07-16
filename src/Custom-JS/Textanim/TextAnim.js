import React, { useEffect, useRef, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import './TextAnim.css'

const TEXTS = ['Building Applications', 'Building Websites', 'Building Interfaces', 'Building APIs', 'Building Databases', 'Building Models'];

const TextAnim = () => {
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [delayComplete, setDelayComplete] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const delayTimeout = setTimeout(() => {
        setDelayComplete(true);
      }, 100); // 1 seconds delay
      return () => clearTimeout(delayTimeout);
    }
  }, [isVisible]);

  useEffect(() => {
    if (delayComplete && index < TEXTS.length) {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        1400 
      );
      return () => clearInterval(intervalId);
    } else if (index >= TEXTS.length) {
      setIsComplete(true);
    }
  }, [delayComplete, index]);

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center h-screen text-center">
      {isComplete ? (
        
        <>
          <div className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-quicksand text-6xl sm:text-2xl h-16 js-fade-animate sm:w-96
          dark:bg-gradient-to-r dark:from-lime-200 dark:via-lime-400 dark:to-blue-500">
            Building <strong>dreams</strong> and <strong>experiences</strong>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-quicksand text-6xl sm:text-2xl js-fade-animate
          dark:bg-gradient-to-r dark:from-lime-200 dark:via-lime-400 dark:to-blue-500">
            with passion and love.
          </div>
        </>
      ) : (
        <h1 className="text-heroblue font-quicksand text-6xl sm:text-2xl
        dark:text-darkhero">
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      )}
    </div>
  );
};

export default TextAnim;
