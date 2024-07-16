import React from 'react';
import { useState,useEffect } from 'react';
import '../../src/App.css';
import logo from '../images/logo.png';
import darklogo from '../images/darklogo.png';
import { Link } from 'react-router-dom';


import animateCircles from '../Custom-JS/custom-mouse/mouse';
import AnimatedHamburgerButton from '../Custom-JS/AnimatedHamburger/HamurgerAnim';




function App() {
    
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
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


                <section id="about" className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
                    <div className="max-w-3xl px-6 py-52">
                        <div className="text-center dark:text-darkhero">
                            <h2 className="text-4xl font-bold text-left dark:text-darkhero">Hey, I'm Anand, an upcoming full-stack developer and ML Engineer that <strong>doesn't</strong> drink coffee.</h2>
                            <p className="mt-12 text-xl text-left">
                                I love building complex projects and solving problems, a key strength of mine. Whether it's within my tech stack or from a different area of computer science, I never shy away from a challenge and always find a solution.
                            </p>
                            <p className="mt-12 text-xl text-left">
                                My love for technology and computer science began in junior high school when my friend and I ventured into freelance development for Discord and Telegram bots. These platforms had huge potential at the time and still do! We soon started receiving numerous orders and our efforts were recognized by Fiverr, where we were designated as rising talent. This boosted our sales by a huge margin and over several months we were able to sell over a hundred bots. Throughout this period, we developed numerous bots for various clients, including a chatbot for the notable RuneScape game. This era marked my "Golden period" in tech exploration, where I had the chance to study APIs, databases, Cloud, and more.
                            </p>
                            <p className="mt-12 text-xl text-left">
                            After graduating high school, I joined college as a freshman and developed a keen interest in AI and ML. Despite my busy schedule, I dedicated time to learning about these fields and participated in hackathons, winning several, including the prestigious IITR-Hackathon. Throughout my first year in college, I managed to juggle my studies, personal interests in AI, frontend/backend development, and hackathons, all of which kept me engaged and fulfilled.

                            </p>

                            <p className="mt-12 text-xl text-left">
                            Throughout my time as a freshman, I've learned numerous valuable lessons some of which are:
                                <br /> 
                                 - Teamwork is truly important and quite powerful.
                                 <br />
                                - It's quite simple to learn new things if you love what you do.
                                <br />
                                - Competition is key for success allowing you to level up your own game.
                                <br />
                                - Persistence and a willingness to face challenges head-on are essential for growth and success.

                            </p>

                            <p className="mt-12 text-xl text-left">
                            Well, what's next for me?  The tech world is vast and there's still a ton left to explore , and I'm looking forward to it 😉! and besides I have 3 more years of college , plenty of time to get some new skills and to use them too.
                            <br />
                            You can also expect some more amazing wins from me and my team in hackathons and tech events.
                            </p>

                            <p className="mt-12 text-xl text-left">
                            New ideas and inspirations always get me into a frenzy. I'm always open to new opportunities, collaborations, and work, so if you have a project in mind or just want to chat, feel free to reach out to me!                      
                                  </p>

                        </div>
                    </div>
                </section>





            </div>

        </>

    );
}

export default App;