import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Magnetic button — leans toward cursor within a pull radius
export default function MagneticButton({ children, className = "", as = "button", strength = 0.4, ...props }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };
  const reset = () => setOffset({ x: 0, y: 0 });

  const MotionTag = motion[as] || motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}