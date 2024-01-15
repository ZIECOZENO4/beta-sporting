import React from 'react';
import { client, urlFor} from "../../../utils/sanity/client" 
import { Shorts } from "@/types";

async function getAdvertData() {
  const query = `
  * [_type == "shorts"] | order( _createdAt desc)
  {
      shortstitle,
      "currentSlug":slug.current,
      shortsImage
  }`;
  
  const data = await client.fetch(query);
  return data;
  }
  
  export default async function LivelyShorts () {
    const data:Shorts[] = await getAdvertData()
    console.log(data);
  return (
  <div className="div">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-300 md:mt-8 m-4">Lively Shorts On Beta</h2>
            {data.map((post, idx) => (
      <article key={idx}
      className="relative w-full  my-3 md:my-5 h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${urlFor(post.shortsImage).url()} )`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
      <div className="relative w-full  h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
        <h3 className="text-center">
          <a className="text-white text-xl font-bold text-center" href="#">
            <span className="absolute inset-0"></span>
          {post.shortstitle}
          </a>
        </h3>
      </div>
    </article>
       ))}
  </div>

  );
};

