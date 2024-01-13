import React from "react";
import Image from "next/image";
import { client, urlFor } from "../../../utils/sanity/client" 

async function getAdvertData() {
const query = `
* [_type == "advert"] | order( _createdAt desc)
{
  _createdAt,
    adverttitle,
    advertbody,
    "currentSlug":slug.current,
    mainImage
}`;

const data = await client.fetch(query);
return data;
}

export default async function Featured () {
  const data = await getAdvertData()
  console.log(data);
  return (
    <div className="my-2 md:my-4">
  <h1 className=" text-xl  md:text-2xl font-heading text-slate-50">Short Advert</h1>
   {data.map((post, idx) => (
  <div className="mt-8 md:pr-5 p-3 " key={idx}>
 <div className="mt-8 flex flex-col justify-center md:flex-row  items-center gap-12">
   <div className="flex-1 relative h-full w-full">
     <Image src={urlFor(post.mainImage).url()} alt="" height={328} width={528} className="" />
   </div>
   <div className="flex-1 flex flex-col gap-5">
     <h1 className="text-4xl text-slate-300">{post.adverttitle}</h1>
     <p className="text-lg font-light text-gray-500">
     {post.advertbody}
     </p>
     <button className="px-5 py-4 bg-gradient-to-r from-red-500 to-orange-500text-white rounded-md self-start">Read More</button>
   </div>
 </div>
</div>
   ))}
    </div>

  );
};

