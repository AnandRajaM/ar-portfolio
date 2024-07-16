import React, { useEffect, useRef } from "react";

const ScreenFitText = () => {
  const containerRef = useRef(null);
  const developerRef = useRef(null);
  const designerRef = useRef(null);
  const explorerRef = useRef(null);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const developer = developerRef.current;
      const designer = designerRef.current;
      const explorer = explorerRef.current;

      if (!container || !developer || !designer || !explorer) {
        return;
      }

      const containerWidth = container.offsetWidth;

      const resizeSingleText = (textRef) => {
        let min = 1;
        let max = 2500;

        while (min <= max) {
          const mid = Math.floor((min + max) / 2);
          textRef.current.style.fontSize = mid + "px";

          if (textRef.current.offsetWidth <= containerWidth) {
            min = mid + 1;
          } else {
            max = mid - 1;
          }
        }

        textRef.current.style.fontSize = max + "px";
      };

      resizeSingleText(developerRef);
      resizeSingleText(designerRef);
      resizeSingleText(explorerRef);
    };

    resizeText();
    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      <span
        className="absolute left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-gray-500 opacity-hero pb-hero js-fade-up z-0
       dark:text-darkhero dark:opacity-10"
        ref={developerRef}
      >
        DEVELOPER
      </span>
      <span
        className="absolute top-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-gray-500 opacity-hero mt-11 js-fade-up-sp z-0
        sm:top-16 
        dark:text-darkhero dark:opacity-10"
        ref={designerRef}
      >
        DESIGNER
      </span>
      <span
        className="absolute bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-gray-500 opacity-hero pb-10 js-fade-up z-0
        sm:top-40 
        dark:text-darkhero dark:opacity-10"
        ref={explorerRef}
      >
        EXPLORER
      </span>
      <div className="absolute inset-0 w-full h-full" ref={containerRef}></div>
    </div>
  );
};

export default ScreenFitText;