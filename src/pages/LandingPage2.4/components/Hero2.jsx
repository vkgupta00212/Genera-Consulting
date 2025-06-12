import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Big from '../../../assets/BigImage.svg';
import Small from '../../../assets/SmallImage.svg';

const Hero2 = () => {
  const { scrollY } = useViewportScroll();

  // Delay the enlargement: scale stays at 0.5 until scrollY reaches 300px, then scales to 1 at 600px.
  const scale = useTransform(scrollY, [300, 600], [0.5, 1]);

  return (
    <div className="px-[20px] md:px-[40px] py-[50px] bg-black overflow-hidden">
      {/* Mobile View: Always shows the small image */}
      <div className="lg:hidden">
        <img src={Small} alt="Small hero" className="w-full h-full object-cover" />
      </div>

      {/* Desktop View: Use Framer Motion to animate scaling */}
      <div className="hidden lg:block">
        <motion.div
          className="w-full h-full flex justify-center items-center"
          style={{ scale, originX: 0.5, originY: 0.5 }}
        >
          <img src={Big} alt="Big hero" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;
