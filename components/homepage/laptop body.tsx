'use client'
import { motion } from 'framer-motion';
import styles from './index';
import { navVariants } from '../../libs/motion';


export default function Body1() {
  return (
    <div>
    <div className=" w-full p-5 flex flex-row bg-slate-600 bg-opacity-30 justify-center gap-3 text-center">
      <motion.h1 
        className="md:text-3xl text-[20px] font-bold text-red-500" 
        initial={{ opacity: 0, x: -1000 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
      >
        Welcome
      </motion.h1>
      <motion.h1 
        className="md:text-3xl text-[20px]  font-bold text-blue-500" 
        initial={{ opacity: 0, x: 1000 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
      >
        to
      </motion.h1>
      <motion.h1 
        className="md:text-3xl text-[20px]  font-bold text-green-500" 
        initial={{ opacity: 0, y: 1000 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        BETA SPORTING!
      </motion.h1>
      <motion.h1 
        className="md:text-3xl text-[25px]  font-bold text-yellow-500" 
        initial={{ opacity: 0, y: -1000 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Enjoy
      </motion.h1>
    </div>
     <motion.div
     variants={navVariants}
     initial="hidden"
     whileInView="show"
     className={`${styles.paddings} py-8 relative`}
   >
     <div className=" absolute w-[50%] inset-0 gradient-01  " />
     <div className={`${styles.innerWidth}  md:font-bold md:text-center md:mx-auto md:flex md:justify-center md:gap-8`}>
       <h2 className=" text-sm md:font-extrabold md:text-[15px] md:leading-[34px] text-red-400 "> BET ON BETA <span className=' md:text-[17px] text-green-600'>AND CLAIM EVERY CHANCE</span> </h2>
     </div>
   </motion.div>

    </div>

  );
}
