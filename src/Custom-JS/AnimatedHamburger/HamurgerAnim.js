import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import './AnimatedTitle.css'; 
import ProfileImage from "../../images/self.png";

import { Link } from 'react-router-dom';



const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);

  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
    overlay: {
      open: {
        opacity: 1,
        display: "block",
      },
      closed: {
        opacity: 0,
        transitionEnd: {
          display: "none",
        },
      },
    },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors cursor-pointer z-30"
      >
        <motion.span
          variants={VARIANTS.top}
          className={`absolute h-1 w-10 ${active ? "lines-active" : "lines-default"} z-40`}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={`absolute h-1 w-10 ${active ? "lines-active" : "lines-default"} z-40`}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
      </motion.button>
      <motion.div
        className="fixed inset-0 bg-white z-20 flex items-center justify-end pr-10 dark:bg-black"
        variants={VARIANTS.overlay}
        initial="closed"
        animate={active ? "open" : "closed"}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="absolute left-0 flex items-center sm:left-20 sm:top-32">
            <img className="h-96 w-96 rounded-full object-cover ml-40 sm:h-56 sm:w-56 sm:ml-0" src={ProfileImage}  alt="Profile"></img>
          </div>
          <div className="animated-title">
            <div className="text-top cursor-pointer">
              <div>
                <span><a href="/about">ABOUT</a></span>
                <span><Link to="/projects">PROJECTS</Link></span>
              </div>
            </div>
            <div className="text-bottom cursor-pointer">
              <div><Link to="/contact">CONTACT</Link></div>
            </div>
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default AnimatedHamburgerButton;