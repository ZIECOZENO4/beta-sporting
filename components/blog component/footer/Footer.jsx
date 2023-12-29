import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterBlog  = () => {
  return (
    <div className="mt-12 px-10 bg-no-repeat bg-cover bg-footer flex flex-col gap-20 md:flex-row md:gap-0 sm:items-center justify-between text-gray-600">
      <div className="flex-1 flex flex-col gap-1 sm:gap-2 lg:gap-5">
        <div className="flex items-center gap-4">
          <Image src="/images/bsi.png" alt="Beta Sporting" className=" rounded-full" width={50} height={50} />
          <h1 className="text-2xl font-heading bg-clip-text text-transparent bg-gradient-to-tr from-slate-900 via-zinc-900 to-zinc-900">Beta  Blog</h1>

        </div>
        <p className="font-light bg-clip-text text-transparent bg-gradient-to-tr from-slate-900 via-zinc-900 to-zinc-900">
        Welcome to the Beta Sporting community where we discuss sports in its full details and glory. 
        It is also where we allow people to donate their own predictions and also earn hugely from  it.
        It is also where we get to know each other and have some debates and challenges in the world of sports.
        It is also where we advice and help people to place their bets wisely and secure a higher chance of winning games in Beta Sporting.
        Finally the entire Beta Sporting team is happy to have you here and we hope we gave the best sports service ever, if you have any complaints or corrections or even spam please kindly 
        communicate with the Zeno Web Team or the Beta Sporting Team.
        Welcome to the home of Sports.
        </p>
        <div className="hidden md:mt-2 md:flex md:gap-4 md:mb-5">
          <Image src="/images/fb.png" alt="" width={26} height={26} />
          <Image src="/images/in.png" alt="" width={26} height={26} />
          <Image src="/images/xb.png" alt="" width={26} height={26} />
          <Image src="/images/yo.png" alt="" width={26} height={26} />
        </div>
      </div>
      <div className="flex-1 flex flex-col sm:flex-row sm:gap-10 md:justify-end lg:gap-16 py-8">
        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-5 font-light bg-clip-text text-transparent bg-gradient-to-tr from-slate-900 via-zinc-900 to-zinc-900  hover:text-blue mb-5 md:mb-0">
          <span className="font-bold hover:text-xl hover:text-green-600 font-heading">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Features</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-5 font-light bg-clip-text text-transparent bg-gradient-to-tr from-slate-900 via-zinc-900 to-zinc-900 mb-5 md:mb-0 hover:text-blue">
          <span className="font-bold hover:text-xl hover:text-green-600 font-heading">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-5 font-light bg-clip-text text-transparent bg-gradient-to-tr from-slate-900 via-zinc-900 to-zinc-900 mb-5 md:mb-0 hover:text-blue ">
          <span className="font-bold hover:text-xl hover:text-green-600 font-heading">Sponsors</span>
          <Link href="/">Beta Sporting</Link>
          <Link href="/">Zeno Web</Link>
          <Link href="/">X-BIT</Link>
          <Link href="/">Crypto Camp</Link>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-5 font-light bg-clip-text text-transparent bg-gradient-to-tr from-slate-900 via-zinc-900 to-zinc-900 mb-5 md:mb-0 hover:text-blue">
          <span className="font-bold hover:text-xl hover:text-green-600 font-heading">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
      <div className="md:hidden mt-2 flex md:gap-4 gap-6 mb-[80px] pb-[80px] md:mb-0">
          <Image src="/images/fb.png" alt="" width={26} height={26} />
          <Image src="/images/in.png" alt="" width={26} height={26} />
          <Image src="/images/xb.png" alt="" width={26} height={26} />
          <Image src="/images/yo.png" alt="" width={26} height={26} />
        </div>
    </div>
  );
};

export default FooterBlog ;

