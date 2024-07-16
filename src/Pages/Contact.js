import React from 'react';
import { useState,useEffect } from 'react';
import '../../src/App.css';
import logo from '../images/logo.png';
import darklogo from '../images/darklogo.png';
import { Link } from 'react-router-dom';


import animateCircles from '../Custom-JS/custom-mouse/mouse';
import AnimatedHamburgerButton from '../Custom-JS/AnimatedHamburger/HamurgerAnim';
import ContactSection from '../Custom-JS/Contact/Contact';



function App() {
    
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


    React.useEffect(() => {
        animateCircles();
    }, []);




    return (
        <>
            <div className="fade-in-fast">
                {/* Mouse Cursor */}
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>
                <div class="circle sm:opacity-0"></div>



                {/* Nav Bar */}
                <div className="w-full flex justify-around h-32 items-center top-0  fixed z-20 dark:bg-black 
          sm:h-20">
                    <div className="w-36 relative 
            sm:mt-3 sm:w-24">
                        <img src={darkMode ? darklogo : logo}
                            alt="Logo"
                            className="image relative cursor-pointer z-50"
                            onClick={toggleDarkMode} />


                    </div>
                    <div className="font-quicksand text-4xl mt-4 mx-56 hover-grad-txt cursor-pointer
            sm:text-2xl sm:mx-auto sm:h-10 sm:pt-1 z-50 
            "
                    >
                        <Link to="/">anand raja</Link>
                    </div>



                    <div className="w-40 mt-5 
            sm:w-24 sm:mt-9">
                        <AnimatedHamburgerButton />
                    </div>
                </div>


                <section id="about" className="bg-white dark:bg-black">
                <ContactSection />
                </section>



                




            </div>

        </>

    );
}

export default App;