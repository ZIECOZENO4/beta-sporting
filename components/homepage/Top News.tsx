import Link from 'next/link'
import React from 'react'

function TopNews() {
  return (

    <section className="">
        <div className="container px-6 py-2 mx-auto">
            <h1 className="text-xl font-semibold text-gray-400 capitalize lg:text-4xl ">Top News</h1>
    
            <div className="mt-2 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-62 " src="/images/xb.png"alt=""/>
    
                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="text-sm text-blue-500 uppercase">category</p>
    
                    <Link href="#" className="block mt-2 text-xl font-semibold text-gray-200 hover:underline  md:text-3xl">
                        Happy Christmas From Beta Sporting
                    </Link>
    
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                       The entire Beta Sporting team wishes everybody Happy and Merry 
                        christmas and a prosperous new year, we expect to see everybody in the year 2024.</p>
    
                    <a href="#" className="inline-block mt-2 text-sky-500 underline hover:text-blue-400">Read more</a>
    
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopNews