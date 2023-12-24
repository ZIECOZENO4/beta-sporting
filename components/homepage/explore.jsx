
'use client';
import { useState} from 'react';
import { motion } from "framer-motion";
import styles from './index';
import {TitleText, TypingText} from './customTexts'
import {staggerContainer} from '../../libs/motion';
import {exploreWorlds} from '../../constants/index'
import ExploreCard from './ExploreCard'
const Explore = () =>{ 
  const [active, setActive] = useState('world-2')
  return(
  <section className={`${styles.paddings}`} id='explore'>
  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView='show'
  viewport={{once: false, amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex flex-col`}
  
  >
  <TypingText
  title='PLACE YOUR BET HERE'
  textStyles='text-center'
  />
  <TitleText 
  title={<p>ASSURED WIN<span className=' md:block hidden text-center align-middle'>ON BETA SPORTING</span></p>}
  textStyles='text-center'
  />
<div className=' mt-[50px] flex md:flex-row flex-col min-h-[70vh] md:min-h-[50vh] gap-5'>
{exploreWorlds.map((world, index) => (
  <ExploreCard 
  key={world.id}
  {...world}
  index={index} 
  active={active}
  handleClick={setActive}
  
  />
))}
</div>



  </motion.div>
  </section>
  )};

export default Explore;
