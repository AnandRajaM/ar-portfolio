import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.refresh();
    }, []);

    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative min-h-screen">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl ">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const FrontendContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 ">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            My Experience in Frontend Development
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl dark:text-white dark:opacity-75">
                Despite being relatively new to frontend development, I possess a great passion to create pixel-perfect interfaces and experiences. I currently work with HTML, Tailwind CSS and React.js as my daily toolkit.
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl dark:text-white dark:opacity-75">
                I am currently exploring advanced animation libraries like GSAP and Framer Motion.
            </p>
            <a
                href="#backend-section"
                className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
            >
                About Me <FiArrowUpRight className="inline" />
            </a>
        </div>
    </div>
);

const BackendContent = () => (
    <div id="backend-section" className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            My work as a Backend Developer
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl dark:text-white dark:opacity-75">
                I mainly work with Python, particularly using Flask for web development. My expertise includes managing databases like MySQL, MongoDB, and Firebase, while leveraging cloud platforms such as AWS and Google Cloud. I'm also proficient in using FastAPI to create efficient and scalable web applications.
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl dark:text-white dark:opacity-75">
                Currently experimenting with new frameworks and serverless architectures.
            </p>
            <a
                href="#ml-section"
                className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
            >
                Know More <FiArrowUpRight className="inline" />
            </a>
        </div>
    </div>
);

const MLContent = () => (
    <div id="ml-section" className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            My Specialization in Machine Learning 
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl dark:text-white dark:opacity-75">
                An emerging Machine Learning expert with comprehensive experience in fundamental and advanced machine learning concepts. I have worked on various projects involving computer vision, natural language processing, and neural networks. I am proficient in using libraries like TensorFlow, PyTorch, and Scikit-learn to build and deploy machine learning models.
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl dark:text-white dark:opacity-75">
                I aim to build scalable and resilient ML pipelines and develop innovative software solutions.
            </p>
            <a
                href="#frontend-section"
                className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
            >
                About Me <FiArrowUpRight className="inline" />
            </a>
        </div>
    </div>
);

const TextParallaxContentExample = () => {
    return (
        <div className="bg-white dark:bg-black dark:text-darkhero">
            <TextParallaxContent
                id="frontend-section"
                imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Frontend Developer"
                heading="Building experiences."
            >
                <FrontendContent />
            </TextParallaxContent>
            <TextParallaxContent
                id="backend-section"
                imgUrl="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Backend Developer"
                heading="Empowering Data."
            >
                <BackendContent />
            </TextParallaxContent>
            <TextParallaxContent
                id="ml-section"
                imgUrl="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="ML Engineer"
                heading="Engineering Intelligence."
            >
                <MLContent />
            </TextParallaxContent>
        </div>
    );
};

export default TextParallaxContentExample;
