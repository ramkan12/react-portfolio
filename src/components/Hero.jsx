import { motion, useReducedMotion } from "framer-motion";
import { HERO_TAGLINE, HERO_SUBTEXT, HERO_LOCATION } from "../constants";
import Typewriter from "./Typewriter";
import profilePic from "../assets/me-web.jpg";

const fadeUp = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const variants = (delay) => (shouldReduceMotion ? {} : fadeUp(delay));
  const motionProps = shouldReduceMotion ? {} : { initial: "hidden", animate: "visible" };

  return (
    <section id="hero" className="border-b border-term-border pb-16 pt-4 scroll-mt-24">
      <div className="overflow-hidden rounded-lg border border-term-border bg-term-panel shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-term-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-term-muted">riham@portfolio — zsh</span>
        </div>

        <div className="px-6 py-10 sm:px-10 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <motion.p variants={variants(0)} {...motionProps} className="font-mono text-sm text-term-muted">
                <span className="text-term-green">$</span> whoami
              </motion.p>

              <motion.h1
                variants={variants(0.15)}
                {...motionProps}
                className="mt-3 text-4xl font-bold text-term-text sm:text-6xl"
              >
                Riham Khan
              </motion.h1>

              <motion.p
                variants={variants(0.3)}
                {...motionProps}
                className="mt-2 text-xl font-semibold text-term-green sm:text-2xl"
              >
                Agentic AI Engineer
              </motion.p>

              <motion.p
                variants={variants(0.45)}
                {...motionProps}
                className="mt-6 max-w-2xl font-mono text-base text-term-text sm:text-lg"
              >
                <span className="text-term-cyan">{"> "}</span>
                <Typewriter text={HERO_TAGLINE} startDelay={700} />
              </motion.p>

              <motion.p variants={variants(0.6)} {...motionProps} className="mt-4 max-w-2xl leading-relaxed text-term-muted">
                {HERO_SUBTEXT}
              </motion.p>

              <motion.div variants={variants(0.75)} {...motionProps} className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded border border-term-green px-4 py-2 font-mono text-sm text-term-green transition-colors hover:bg-term-green hover:text-term-bg"
                >
                  View Projects
                </a>
                <a
                  href="https://github.com/ramkan12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-term-border px-4 py-2 font-mono text-sm text-term-text transition-colors hover:border-term-cyan hover:text-term-cyan"
                >
                  GitHub
                </a>
                <a
                  href="/resume.pdf"
                  className="rounded border border-term-border px-4 py-2 font-mono text-sm text-term-text transition-colors hover:border-term-cyan hover:text-term-cyan"
                >
                  Download Résumé
                </a>
                <a
                  href="#contact"
                  className="rounded border border-term-border px-4 py-2 font-mono text-sm text-term-text transition-colors hover:border-term-cyan hover:text-term-cyan"
                >
                  Contact
                </a>
              </motion.div>

              <motion.p variants={variants(0.9)} {...motionProps} className="mt-8 font-mono text-xs text-term-muted">
                {HERO_LOCATION}
              </motion.p>
            </div>

            <motion.div
              variants={variants(0.3)}
              {...motionProps}
              className="mx-auto w-full max-w-sm flex-shrink-0 lg:mx-0 lg:w-96"
            >
              <div className="overflow-hidden rounded-lg border border-term-border bg-term-bg">
                <div className="flex items-center gap-2 border-b border-term-border px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-mono text-xs text-term-muted">me.jpg</span>
                </div>
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={profilePic} alt="Riham Khan" className="h-full w-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
