
import { FC,} from "react";

import Featured from  './featured/Featured'
import Hero from "./hero";
import Hit from "./blogssections/hit";
import RecentPost from "./blogssections/favorite post";
import SomeoneSay from "./blogssections/someonesay";
import LivelyShorts from "./blogssections/shorts";
import CategoryList from './categoryList/CategoryList';
import Menu from './Menu/Menu'



const BlogPage: FC = () => {


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



