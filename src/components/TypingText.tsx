import { motion, HTMLMotionProps } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingTextProps extends HTMLMotionProps<"h1"> {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, ...rest }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = (index: number) => {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        if (index < text.length) {
          type(index + 1);
        }
      }, 100);
    };

    type(0);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <motion.h1 {...rest}
    className="font-bold text-[38px] h-[150px]  md:h-[220px] md:text-[60px] leading-[51px] md:leading-[73px]  text-left md:mt-[60px] mb-[32px] md:mb-[0px] animated-text"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 0.5,0.8, 1] }}
        transition={{ duration: 0.3, repeat: Infinity }}
      >
      </motion.span>
    </motion.h1>
  );
};

export default TypingText;
