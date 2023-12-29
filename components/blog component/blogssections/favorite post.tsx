import Link from 'next/link'
import React from 'react'

function RecentPost() {
  return (
<main className="py-4 pr-[10px]">
  <div className="px-4">
    <h1 className=' mt-6 text-2xl md:text-3xl text-slate-300 '>Top Posts</h1>
    <div className=" md:flex flex flex-wrap gap-[60px] md:-mx-2">
      <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
        <div className="rounded-lg overflow-hidden shadow relative">
          <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80" alt=""/>
          <div className="p-4 h-auto md:h-40 lg:h-48">
            <Link href="#" className="block text-sky-500 hover:text-sky-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              Woman standing under blue sky
            </Link>
            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
            </div>
            <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#something</Link>
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#sky</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
        <div className=" rounded-lg overflow-hidden shadow relative">
          <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          <div className="p-4 h-auto md:h-40 lg:h-48">
            <Link href="#" className="block text-sky-500 hover:text-sky-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              Woman walking on pathway
            </Link>
            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum sit quasi. Alias quasi officiis blanditiis!
            </div>
            <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#pathway</Link>
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</Link>
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
        <div className=" rounded-lg overflow-hidden shadow relative">
          <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          <div className="p-4 h-auto md:h-40 lg:h-48">
            <Link href="#" className="block text-sky-500 hover:text-sky-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              Woman walking on pathway
            </Link>
            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum sit quasi. Alias quasi officiis blanditiis!
            </div>
            <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#pathway</Link>
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</Link>
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
        <div className=" rounded-lg overflow-hidden shadow relative">
          <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1467238307002-480ffdd260f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          <div className="p-4 h-auto md:h-40 lg:h-48">
            <Link href="#" className="block text-sky-500 hover:text-sky-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              Walking through a forest in the afternoon
            </Link>
            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo magni saepe cumque error quia quae sint ducimus, maiores doloremque.
            </div>
            <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#forest</Link>
              <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walk</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  )
}

export default RecentPost