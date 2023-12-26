import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/assets/designs.svg'

export default function Feature1() {
  return (
    <div>
<div className="w-[100vw]">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             What Is Better Than Beta
            </h2>
            <p className="text-white text-base md:text-lg"> So awesome, what is better than BETA SPORTING. we give you 80% win rate, we update you in the world of sports and you can also place a bet, and so on. just get started to enjoy all these features.
            </p>
          </div>
          <div className="flex items-center space-x-3">
          <Link href="/">
            <div
      className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black"
    >
       &nbsp;&nbsp;<Image  alt="google auth logo" width="25" height={80} src="/images/bsi.png" />&nbsp;&nbsp; Get Started On Beta
    </div>
    </Link>
          </div>
        </div>
            <Image alt="logo" width={450} height={450} src="/images/add2.jpeg" />
      </div>
    </div>



    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        
      <Image alt="logo" width={450} height={450} src="/images/feat1.jpeg" />


        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          
          <div className="max-w-xl mb-6">
            
            <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             Designs : The Zeno Design Team
            </h2>
            <p className="text-white text-base md:text-lg">Zeno design team give all type of designs, music album design, web ui designs, card designs and so on. You contact them for awesome designs and ui 
            </p>
          </div>
          <div className="flex items-center space-x-3">
          <Link href="#">
            <div
      className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white  border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black"
    >
       &nbsp;&nbsp;<Image alt="logo" width="25" height={80} src={Logo} />&nbsp;&nbsp; Get Started
    </div>
    </Link>
          </div>
        </div>
      </div>
    </div>



    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             X-BIT : The Powerful Social Network.
            </h2>
            <p className="text-white text-base md:text-lg">
            X-BIT is currently the highest and most powerful social network buy  the Zeno web team. Join to have a Taste.
            </p>
          </div>
          <div className="flex items-center space-x-3">
          <Link href="/">
            <div
      className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black"
    >
       &nbsp;&nbsp;<Image alt="logo" width={20} height={20} src="/images/xb.png" />&nbsp;&nbsp; Get Started on X-BIT
    </div>
    </Link>
          </div>
        </div>
        <Image alt="logo" width={450} height={450} src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </div>
    </div>


    <div className="sm:px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-3xl   lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <Image
            width="50"
            height="50"
            src="/images/zeno web.png"
            alt="mobile app"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>




        <div className="flex flex-col justify-center p-8 bg-black lg:p-16 lg:pl-10 lg:w-1/2">
         
          <h5 className="mb-3 text-3xl text-white font-extrabold leading-none sm:text-4xl">
           Connect With Beta Sporting
          </h5>
          <p className="mb-8 text-blue-400 font-black">
          </p>
          <div className="flex items-left">
          <Link href="/">
           <div
           className="flex hover:border-2 hover:shadow-xl items-center text-white border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black"
           >
           &nbsp;&nbsp;<Image width="25" height={50} alt="xb logo" src="/images/xb.png" />&nbsp;&nbsp; Contact Us
           </div>
           </Link>
          </div>
        </div>
      </div>
    </div>
  
          </div>

    </div>
  );}