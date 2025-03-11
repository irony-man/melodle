"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

const MotionButton = motion('button');
const Button = ({className, children, tooltip, ...props}) => {
  return (
    <MotionButton
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      className={`rounded-full flex items-center justify-center text-foreground custom-bg relative px-4 pt-3 pb-4 ${className}`}
      {...props}
    >
        {children}

        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          {tooltip}
        </span>
    </MotionButton>
  );
};

export default Button;
