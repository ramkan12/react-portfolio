import { motion, useReducedMotion } from "framer-motion";

const OFFSETS = {
  up: { y: 40, x: 0 },
  left: { y: 0, x: -60 },
  right: { y: 0, x: 60 },
  none: { y: 0, x: 0 },
};

const Reveal = ({ children, direction = "up", delay = 0, className = "", as = "div" }) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = OFFSETS[direction] ?? OFFSETS.up;
  const Motion = motion[as] ?? motion.div;

  if (shouldReduceMotion) {
    return <Motion className={className}>{children}</Motion>;
  }

  return (
    <Motion
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </Motion>
  );
};

export default Reveal;
