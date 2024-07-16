import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  const isInternalLink = href === "#";

  const linkProps = {
    href: isInternalLink ? window.location.pathname : href,
    target: isInternalLink ? "_self" : "_blank",
  };

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      {...linkProps}
      className="relative block overflow-hidden whitespace-nowrap text-xl font-black uppercase sm:text-5xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const RevealLinks = () => (
  <section className="grid place-content-center gap-2 bg-white px-7 py-10 text-herogray text-center dark:bg-black">
    <FlipLink href="/">HOME</FlipLink>
    <FlipLink href="/about">ABOUT</FlipLink>
    <FlipLink href="https://github.com/AnandRajaM">GITHUB</FlipLink>
    <FlipLink href="https://www.linkedin.com/in/anandrajam/">LINKEDIN</FlipLink>
  </section>
);

const Footer = () => (
  <section id="footer" className="h-hero flex flex-col justify-center items-center my-auto dark:bg-black text-center pt-32">
    
    
    <div className="text-5xl hover-grad-txt-2 h-14 sm:h-10
    sm:text-3xl">+91 7306769083</div>
    <div
      className="text-5xl hover-grad-txt-2 h-16 sm:h-10 cursor-pointer
      sm:text-3xl"
      onClick={() => { window.location.href = 'mailto:anandrmq@gmail.com'; }}
    >
      anandrmq@gmail.com
    </div>
    <div
      className="text-5xl hover-grad-txt-2 cursor-pointer
      sm:text-3xl"
      onClick={() => { window.location.href = 'mailto:anandrm@outlook.com'; }}
    >
      anandrm@outlook.com
    </div>
    <div className="mt-10">
      <RevealLinks />
    </div>
  </section>
);

export default Footer;
