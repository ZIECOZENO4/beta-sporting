import React from 'react'

function TopNews() {
  return (

    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-2 mx-auto">
            <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Top News</h1>
    
            <div className="mt-2 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-62 " src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/>
    
                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="text-sm text-blue-500 uppercase">category</p>
    
                    <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                        All the features you want to know
                    </a>
    
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>
    
                    <a href="#" className="inline-block mt-2 text-sky-500 underline hover:text-blue-400">Read more</a>
    
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopNews