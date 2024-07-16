import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import logo from './images/logo.png';
import darklogo from './images/darklogo.png';

import PreLoader from './Custom-JS/preloader/preloader';
import animateCircles from './Custom-JS/custom-mouse/mouse';
import ScreenFitText from './Custom-JS/ScreenFit/ScreenFit';
import TextAnim from './Custom-JS/Textanim/TextAnim';
import ScreenHello from './Custom-JS/ScreenFitHello/ScreenHello';

import AnimatedHamburgerButton from './Custom-JS/AnimatedHamburger/HamurgerAnim';
import TextParallaxContentExample from './Custom-JS/Parallax-section/ParallaxSection';
import RevealLinks from './Custom-JS/FooterLinks/FooterLinks';


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
      <PreLoader />

      <div>
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
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>
            
          
          anand raja
          </div>



          <div className="w-40 mt-5 
          sm:w-24 sm:mt-9">
            <AnimatedHamburgerButton />
          </div>
        </div>




        {/* HOME */}
        <section id="home">
          <div className="mt-28 relative w-full h-screen overflow-hidden
          sm:mt-20">
            <ScreenFitText />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">

              <p className="mb-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-hero font-sans js-fade-down
              sm:text-7xl dark:bg-gradient-to-r dark:from-lime-200 dark:via-lime-400 dark:to-blue-500">
                NAMASTE
              </p>

            </div>
          </div>
        </section>






        {/* QUOTE */}
        <section id="quote">
          <div className="w-full h-hero bg-hero bg-cover bg-center flex items-center justify-center dark:bg-black">
            <div className="flex flex-col items-center justify-center
            ">
              <TextAnim />
            </div>
          </div>
        </section>




        <section>
          <div >
            <TextParallaxContentExample />
          </div>
        </section>


        <section id="life">
          <div className="w-full h-secondary bg-hero bg-cover bg-center flex items-center justify-center relative
          sm:w-screen dark:bg-black ">
            <div className="w-hero absolute right-0 mt-16 sm:w-screen">
              <p className="text-2xl font-quicksand text-left hover-grad-txt-2  
              sm:text-xl sm:px-10"> In my free time, I love to listen to music, read a good book, and, most importantly, travel.
                <br /> <br />
                One of my lifelong goals is to go on a world tour, exploring new traditions and cultures, enjoying breathtaking sceneries, sunsets, and beaches, and savoring stunning food.
              </p>

            </div>
          </div>
        </section>




        <section id="hi" >
          <div className="w-full h-hero flex relative items-center justify-center my-0
          dark:bg-black">
            <ScreenHello />

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 mt-12 ">
              <button className="hover-grad-txt-3 shadow-2xl w-auto h-auto text-secondary bg-white text-herogray font-bold px-32 py-10 rounded-full border
             border-herogray cursor-pointer
             sm:text-4xl sm:px-16 sm:py-5">
                Say hi
              </button>
            </div>

          </div>
        </section>


        <section id="footer">
          <div className="h-28 dark:bg-black"></div>
          <div className="h-footer relative dark:bg-black ">
            <div className="grid gap-2 absolute left-10 top-0 text-herogray pl-7
              sm:gap-1 sm:left-0 sm:mt-5 dark:bg-black">
              <div className="text-9xl sm:text-4xl hover-grad-txt-2">anand</div>
              <div className="text-5xl sm:text-sm hover-grad-txt-2 h-16
              sm:h-4">+91 7306769083</div>
              <div
                className="text-5xl sm:text-sm hover-grad-txt-2 h-16
                sm:h-4"
                onClick={() => { window.location.href = 'mailto:anandrmq@gmail.com'; }}
                style={{ cursor: 'pointer' }}
              >
                anandrmq@gmail.com
              </div>

              <div
                className="text-5xl sm:text-sm hover-grad-txt-2 dark:bg-black"
                onClick={() => { window.location.href = 'mailto:anandrm@outlook.com'; }}
                style={{ cursor: 'pointer' }}
              >
                anandrm@outlook.com
              </div>

            </div>



            <div className="absolute right-10 top-0 dark:bg-black">
              <RevealLinks />
            </div>
          </div>
        </section>






      </div>

    </>

  );
}

export default App;