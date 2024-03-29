'use client';
import { motion } from "framer-motion";
import { fadeIn } from "../../libs/motion";
import Image from "next/image";
import Link from "next/link";



const ExploreCard = ({ id, imgUrl, link, title, index, active, handleClick }) => (
  <motion.div
  variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
  className={`relative ${
    active === id ? 'md:flex-[3.5] flex-[1.5]' : 'md:flex-[0.5] flex-[2]'
  } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  onClick={()=> handleClick(id)}
  >
<Image
src={imgUrl}
alt={title}
className=" absolute md:w-[60vw] md:h-[70vh] h-full w-full object-cover rounded-[24px] md:flex md:flex-row md:h-[900] md:w-[900]"
height={600}
width={700}
/>

{active !== id? (
  <h3 className=" text-white sm:font-semi-bold sm:text-[10px] text-[12px] font-bold  z-0 md:rotate-[-90deg] md:origin-[0,0] sticky md:text-[20px] md:font-bold">
  {title}
  </h3>
) : (

    <Link href={link} className=" bg-black opacity-60 rounded-b-[24px] md:mt-[205px] md:h-[35vh]  mt-16 w-full ">
  <div className=' flex justify-center md:mt-5 mt-2'>
  <Image
  src="/assets/bet.svg"
  className="w-[32px] h-[24px] md:w-[60px] md:h-[60px] object-contain"
  height={240}
  width={240}
  alt="headset"
  />
  </div>
  <p className=" text-white uppercase flex justify-center align-middle ml-2 mt-1 ">Betting made easy, we dey win.</p>
  <h2 className=" text-green-300 uppercase flex justify-center align-middle m-4 text-3xl font-bold md:text-3xl  md:m-2">{title}</h2>
  </Link>


)}
  </motion.div>
);

export default ExploreCard;

