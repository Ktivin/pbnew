"use client";

import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0, y = 28 }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Float({ children, className = "", delay = 0, distance = 14, duration = 6 }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollFloat({
  children,
  className = "",
  delay = 0,
  distance = 12,
  duration = 6,
  yRange = [0, -80],
  xRange = [0, 0],
  rotateRange = [0, 0],
}) {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], yRange);
  const x = useTransform(scrollY, [0, 1200], xRange);
  const rotate = useTransform(scrollY, [0, 1200], rotateRange);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} style={{ x, y, rotate }}>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -distance, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function AnimatedCounter({ value, suffix = "", duration = 1.6 }) {
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId;
    const startTime = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [duration, isInView, reducedMotion, value]);

  const output = value % 1 === 0 ? Math.round(displayValue).toLocaleString("uk-UA") : displayValue.toFixed(1);

  return (
    <span ref={ref}>
      {output}
      {suffix}
    </span>
  );
}
