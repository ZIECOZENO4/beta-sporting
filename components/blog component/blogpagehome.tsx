
import { FC,} from "react";
// import { client } from "@/utils/sanity/client";
import Featured from  './featured/Featured'
import Hero from "./hero";
import Hit from "./blogssections/hit";
import RecentPost from "./blogssections/favorite post";
import SomeoneSay from "./blogssections/someonesay";
import LivelyShorts from "./blogssections/shorts";
import CategoryList from './categoryList/CategoryList';
import Menu from './Menu/Menu'

type Post = {
 _id: string;
 title?: string;
 post: string;
 slug?: {
   current: string;
 };
};

const BlogPage: FC = () => {
//  const [posts, setPosts] = useState<Post[]>([]);
//  const [loading, setLoading] = useState(true);

//  useEffect(() => {
//    const fetchPosts = async () => {
//      const allPosts = await client.fetch<Post[]>(`*[_type == "post"]`);
//      setPosts(allPosts);
//      setLoading(false);
//    };

//    fetchPosts();
//  }, []);

//  if (loading) {
//    return <div className=' flex justify-center align-middle items-center'><AppLoad /></div>;
//  }

 return (
  <div className=' '>
    <Hero />
      <div className=' gap-[10px] flex px-[6px] md:px-[15px]'>
        <div className=" flex flex-col w-full md:w-[65vw]">
      <Featured />
      <Hit />
      <RecentPost />
  <SomeoneSay />
  <LivelyShorts />      
        </div>
  <div className="hidden md:flex md:flex-col w-[30vw]">
  <CategoryList />
   {/* <CardList page={page}/> */}
    <Menu />
  </div>

  </div>
</div>
 );
};

export default BlogPage;





// interface Props {
//   posts: [Post];
// } 
// export default function Home({posts}: Props) {


//   return (
   
//   );
// }


// // export const getServerSideProps = async () =>{
// //   const query = `*[_type == "post"]{
// //     _id,
// //     title,
// //     author -> {
// //       name,
// //       image
// //     },
// //     description,
// //     mainImage,
// //     slug
// //   }`
// //   const posts =await sanityClient.fetch(query);
// //   return{
// //     props: {
// // posts,
// //     }
// //   }
// // }