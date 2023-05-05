import React from 'react'
// import { ReactComponent as TextSVG } from '../assets/HeroSVG.svg'
import { motion } from 'framer-motion'
import {  textVariant, staggerContainer } from '../utils/motion';
import Icon from '../components/HeroSVG';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => {
    const delay = 1 + i * 1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "tween", duration: 3, bounce: 0, repeat: Infinity, repeatType: "mirror", repeatDelay: 0.5 },
        opacity: { delay, duration: 0.5},
        ease: "easeInOut"
      }
    };
  }
};

// const container = {
//   hidden: { x: 400 },
//   show: {
//     x: 0,
//     transition: {
//       duration: 0.8,
//       delayChildren: 0.2,
//       staggerChildren: 0.5
//     }
//   }
// }

// const item = {
//   hidden: { opacity: 0},
//   show: { opacity: 1 }
// }

const Hero = () => {
  return (
    <div className='max-w-[1920px] h-screen mt-[-80px] mb-0 flex mx-auto items-center snap-start'>
      <motion.div 
        variants={staggerContainer(0.3,0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='container h-[80vh] overflow-hidden relative lg:mt-[80px] 2xl:mt-0 flex items-center justify-center mx-auto'>
        <div className='h-full w-[1920px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute clip-svg -z-10'>
          <motion.svg preserveAspectRatio='none' viewBox="0 0 1292 685"fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.g  custom={1} id="1">
                <motion.path variants={draw} custom={1} id="Vector" d="M7.45962 267.648L-60.6213 228.076L-128.702 267.648V346.817L-60.6213 386.468L7.45962 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_2" d="M75.5406 148.907L7.45962 109.335L-60.6213 148.907V228.076L7.45962 267.648L75.5406 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={3} id="Vector_3" d="M143.621 109.335V30.0876L75.5406 -9.48404L7.45962 30.0876V109.335L75.5406 148.907L143.621 109.335Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_4" d="M7.45962 30.0876L-60.6213 -9.48404L-128.702 30.0876V109.257L-60.6213 148.907L7.45962 109.335V30.0876Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g> 
              <motion.g  custom={2} id="2">
                <motion.path variants={draw} custom={4} id="Vector_5" d="M211.676 148.907L143.621 109.335L75.5406 148.907V228.076L143.621 267.648L211.676 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_6" d="M143.621 267.648L75.5406 228.076L7.45962 267.648V346.87L75.5406 386.468L143.621 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={3} id="Vector_7" d="M75.5406 386.468L7.45962 346.87L-60.6213 386.468V465.611L7.45962 505.209L75.5406 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_8" d="M7.45962 505.209L-60.6213 465.611L-128.702 505.209V584.352L-60.6213 624.028L7.45962 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g> 
              <motion.g  custom={3} id="3">
                <motion.path variants={draw} custom={5} id="Vector_9" d="M347.838 148.907L279.757 109.335L211.676 148.907V228.076L279.757 267.648L347.838 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_10" d="M279.757 267.648L211.676 228.076L143.621 267.648V346.87L211.676 386.468L279.757 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={3} id="Vector_11" d="M211.676 386.468L143.621 346.87L75.5406 386.468V465.611L143.621 505.209L211.676 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_12" d="M143.621 505.209L75.5406 465.611L7.45962 505.209V584.43L75.5406 624.028L143.621 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_13" d="M75.5406 624.028L7.45962 584.43L-60.6213 624.028V703.171L7.45962 742.743L75.5406 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g> 
              <motion.g  custom={4} id="4">
                <motion.path variants={draw} custom={5} id="Vector_14" d="M484 148.907L415.919 109.335L347.838 148.907V228.076L415.919 267.648L484 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_15" d="M415.919 267.648L347.838 228.076L279.757 267.648V346.87L347.838 386.468L415.919 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={3} id="Vector_16" d="M347.838 386.468L279.757 346.87L211.676 386.468V465.611L279.757 505.209L347.838 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_17" d="M279.757 505.209L211.676 465.611L143.621 505.209V584.43L211.676 624.028L279.757 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_18" d="M211.676 624.028L143.621 584.43L75.5406 624.028V703.171L143.621 742.743L211.676 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g> 
              <motion.g  custom={5} id="5 ">
                <motion.path variants={draw} custom={5} id="Vector_19" d="M688.243 30.0876L620.162 -9.48404L552.081 30.0876V109.335L620.162 148.907L688.243 109.335V30.0876Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_20" d="M620.162 148.907L552.081 109.335L484 148.907V228.076L552.081 267.648L620.162 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={3} id="Vector_21" d="M552.081 267.648L484 228.076L415.919 267.648V346.87L484 386.468L552.081 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_22" d="M484 386.468L415.919 346.87L347.838 386.468V465.611L415.919 505.209L484 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_23" d="M415.919 505.209L347.838 465.611L279.757 505.209V584.43L347.838 624.028L415.919 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={6} id="Vector_24" d="M347.838 624.028L279.757 584.43L211.676 624.028V703.171L279.757 742.743L347.838 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g> 
              <motion.g  custom={6} id="6">
                <motion.path variants={draw} custom={1} id="Vector_25" d="M824.379 30.0876L756.298 -9.48404L688.243 30.0876V109.335L756.298 148.907L824.379 109.335V30.0876Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_26" d="M756.298 148.907L688.243 109.335L620.162 148.907V228.076L688.243 267.648L756.298 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_27" d="M688.243 267.648L620.162 228.076L552.081 267.648V346.87L620.162 386.468L688.243 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={3} id="Vector_28" d="M620.162 386.468L552.081 346.87L484 386.468V465.611L552.081 505.209L620.162 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={5} id="Vector_29" d="M552.081 505.209L484 465.611L415.919 505.209V584.43L484 624.028L552.081 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={6} id="Vector_30" d="M484 624.028L415.919 584.43L347.838 624.028V703.171L415.919 742.743L484 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g> 
              <motion.g  custom={7} id="7">
                <motion.path variants={draw} custom={3} id="Vector_31" d="M960.541 30.0876L892.46 -9.48404L824.379 30.0876V109.335L892.46 148.907L960.541 109.335V30.0876Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={6} id="Vector_32" d="M892.46 148.907L824.379 109.335L756.298 148.907V228.076L824.379 267.648L892.46 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_33" d="M824.379 267.648L756.298 228.076L688.243 267.648V346.87L756.298 386.468L824.379 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={5} id="Vector_34" d="M756.298 386.468L688.243 346.87L620.162 386.468V465.611L688.243 505.209L756.298 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_35" d="M688.243 505.209L620.162 465.611L552.081 505.209V584.43L620.162 624.028L688.243 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_36" d="M620.162 624.028L552.081 584.43L484 624.028V703.171L552.081 742.743L620.162 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g> 
              <motion.g  custom={8} id="8">
                <motion.path variants={draw} custom={6} id="Vector_37" d="M1096.7 30.0876L1028.62 -9.48404L960.541 30.0876V109.335L1028.62 148.907L1096.7 109.335V30.0876Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={3} id="Vector_38" d="M1028.62 148.907L960.541 109.335L892.46 148.907V228.076L960.541 267.648L1028.62 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_39" d="M960.541 267.648L892.46 228.076L824.379 267.648V346.87L892.46 386.468L960.541 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_40" d="M892.46 386.468L824.379 346.87L756.298 386.468V465.611L824.379 505.209L892.46 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={5} id="Vector_41" d="M824.379 505.209L756.298 465.611L688.243 505.209V584.43L756.298 624.028L824.379 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_42" d="M756.298 624.028L688.243 584.43L620.162 624.028V703.171L688.243 742.743L756.298 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g> 
              <motion.g  custom={9} id="9">
                <motion.path variants={draw} custom={3} id="Vector_43" d="M1232.86 30.0876L1164.78 -9.48404L1096.7 30.0876V109.335L1164.78 148.907L1232.86 109.335V30.0876Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_44" d="M1164.78 148.907L1096.7 109.335L1028.62 148.907V228.076L1096.7 267.648L1164.78 228.076V148.907Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_45" d="M1096.7 267.648L1028.62 228.076L960.541 267.648V346.87L1028.62 386.468L1096.7 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={6} id="Vector_46" d="M1028.62 386.468L960.541 346.87L892.46 386.468V465.611L960.541 505.209L1028.62 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_47" d="M960.541 505.209L892.46 465.611L824.379 505.209V584.43L892.46 624.028L960.541 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={5} id="Vector_48" d="M892.46 624.028L824.379 584.43L756.298 624.028V703.171L824.379 742.743L892.46 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g>
              <motion.g  custom={10} id="10">
                <motion.path variants={draw} custom={2} id="Vector_49" d="M1295.7 -6.45212L1232.86 30.0876V109.257L1295.7 145.797V-6.45212Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_50" d="M1295.7 145.875L1232.86 109.335L1164.78 148.907V228.076L1232.86 267.648L1295.7 231.108V145.875Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={6} id="Vector_51" d="M1232.86 267.648L1164.78 228.076L1096.7 267.648V346.87L1164.78 386.468L1232.86 346.87V267.648Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={3} id="Vector_52" d="M1164.78 386.468L1096.7 346.87L1028.62 386.468V465.611L1096.7 505.209L1164.78 465.611V386.468Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={7} id="Vector_53" d="M1096.7 505.209L1028.62 465.611L960.541 505.209V584.43L1028.62 624.028L1096.7 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={5} id="Vector_54" d="M1028.62 624.028L960.541 584.43L892.46 624.028V703.171L960.541 742.743L1028.62 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_55" d="M1028.62 624.028L960.541 584.43L892.46 624.028V703.171L960.541 742.743L1028.62 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g>
              <motion.g  custom={11} id="11">
                <motion.path variants={draw} custom={3} id="Vector_56" d="M1295.7 231.108L1232.86 267.648V346.817L1295.7 383.331V231.108Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_57" d="M1295.7 383.409L1232.86 346.87L1164.78 386.468V465.611L1232.86 505.209L1295.7 468.669V383.409Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={4} id="Vector_58" d="M1232.86 505.209L1164.78 465.611L1096.7 505.209V584.43L1164.78 624.028L1232.86 584.43V505.209Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={2} id="Vector_59" d="M1164.78 624.028L1096.7 584.43L1028.62 624.028V703.171L1096.7 742.743L1164.78 703.171V624.028Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g>
              <motion.g  custom={12} id="12">
                <motion.path variants={draw} custom={2} id="Vector_60" d="M1295.7 468.669L1232.86 505.209V584.352L1295.7 620.892V468.669Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
                <motion.path variants={draw} custom={1} id="Vector_61" d="M1295.7 620.97L1232.86 584.43L1164.78 624.028V703.171L1232.86 742.743L1295.7 706.229V620.97Z" stroke="#DCDCDC" strokeMiterlimit="10"/>
              </motion.g>
          </motion.svg>
        </div>
        <motion.div 

          className='flex w-full h-full flex-col md:flex-row justify-evenly items-center px-8'>
          <div className='uppercase text-center md:text-left leading-normal md:leading-snug font-light text-[2.5rem] md:text-5xl md:w-[25rem] w-[20rem]'>  
            <motion.span className='bg-[#F9B9FF] p-1 rounded-2xl' variants={textVariant(1.1)}>Transform</motion.span>
            <motion.span variants={textVariant(1.2)}> data into maps and</motion.span>
            <motion.span className='font-semibold uppercase' variants={textVariant(1.3)}> actionable information</motion.span>
          </div>
          {/* <motion.div variants={fadeIn('left', 'tween', 0.8, 1)}>
            <TextSVG className='hidden lg:flex 2xl:w-[512px] 2xl:h-[529px]' />
          </motion.div> */}
          <Icon  />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero