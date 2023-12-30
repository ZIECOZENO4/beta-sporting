import { filterLeague } from "../../api";
import LeagueTable from "../../../components/football component/LeagueTable";
import SmSidebar from "@/components/football component/smsidebar";

const Bundesliga = async () => {
 const getBundesliga = await filterLeague("Bundesliga");

 return (
   <div className="w-[100vw] px-4 md:px-0 md:w-[650px]">
     <SmSidebar />
     {getBundesliga.length > 0 ? (
       getBundesliga.map((data) => (
         <div key={data.id}>
           <LeagueTable data={data} />
         </div>
       ))
     ) : (
      <p className='  text-xl flex justify-center items-center align-middle md:text-2xl font-bold m-5 text-slate-300'>No fixtures</p>
      )}
   </div>
 );
};

export default Bundesliga;
