import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title }) => (
    <motion.h1
        variants={textContainer}
        className='font-bold uppercase text-2xl lg:text-5xl md:text-4xl sm:text-3xl py-4'>
            {Array.from(title).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                    {letter === '' ? '\u00A0' : letter}
                </motion.span>
            ))}
    </motion.h1>
);

export const TypingText2 = ({ title }) => (
    <motion.h1
        variants={textContainer}
        initial='hidden'
        whileInView='show'
        className='font-light text-black text-lg text-center md:text-2xl sm:text-xl py-4'>
            {Array.from(title).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                    {letter === '' ? '\u00A0' : letter}
                </motion.span>
            ))}
    </motion.h1>
);

export const TitleText = ({ title, textStyles }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`text-white font-bold uppercase text-2xl md:text-4xl xl:text-5xl ${textStyles}`}
    >
      {title}
    </motion.h2>
  );

export const EssenceText = ({ title }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className='text-black font-bold uppercase text-center text-2xl md:text-4xl'
    >
      {title}
    </motion.h2>
  );

export const TitleText2 = ({ title, textStyles, spanText }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`text-center md:text-2xl py-5 ${textStyles}`}
    >
      {title}<span className="text-[#3077CE] md:text-2xl">{spanText}</span>
    </motion.h2>

  );