'use client'
import { motion, useAnimationControls } from "framer-motion";
import { FC } from "react";

const MyComponent: FC = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    // Reset to 0 before starting the animation to 100
    controls.set({ x: 0 });
    controls.start({ x: 100 });
  };

  return (
    <div>
      <motion.div
        animate={controls} // Attach animation controls
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
        }}
      />
      <button onClick={handleClick}>Animate</button>
    </div>
  );
};

export default MyComponent;
