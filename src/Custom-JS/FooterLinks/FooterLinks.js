import React from "react";
import { motion } from "framer-motion";

const RevealLinks = () => {
  return (
    <section className="grid place-content-center gap-2 bg-white px-7 py-10 text-herogray text-right dark:bg-black">
      <FlipLink href="#">HOME</FlipLink>
      <FlipLink href="/about">ABOUT</FlipLink>
      <FlipLink href="https://github.com/AnandRajaM">GITHUB</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/anandrajam/">LINKEDIN</FlipLink>
    </section>
  );
};

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
      className="relative block overflow-hidden whitespace-nowrap text-xl font-black uppercase sm:text-xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
