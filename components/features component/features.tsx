import Feature1 from "./feature1";
import Feature2 from "./feature2";
import Footer2 from "./footer2";
import Image from "next/image";

export default function Features() {
    return (
      <div className=' w-[100vw] m-0 p-0 '>
        <div className="w-full h-[50vh] z-10 px-6 relative md:h-[100vh]">
  <Image 
layout="fill"
  src='/images/rrn.png'
  alt="main section"
  />
  </div>
        <Feature1 />
        <Feature2 />
        <div className=" justify-center align-middle flex items-center">
        <Footer2 />
        </div>

      </div>
  
    )
  }
  