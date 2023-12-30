import { getMatchesfootball, getMatchesfootballFinished } from "../../app/api/index"
import Status from "./Status"




export default async function FootballPage() {
  const getDatas =  await getMatchesfootball()
  const getDatasFinished = await getMatchesfootballFinished()

  const matchesDatas = getDatas?.matches
  const matchesDatasFinished = getDatasFinished?.matches

  const nd = new Date()
  const dateConvert = nd.toDateString()

  return (
    <section className="px-2 md:px-4 md:py-6 md:w-[670px] ">
       <div className="flex flex-col justify-center  items-center mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl text-teal-400 font-heading font-bold py-2 md:py-0">MATCHES ON BETA</h1>
        <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-[15px] md:text-xl text-white ">
          <p>{`${dateConvert}`}</p>
        </div>
        <div className=" bg-slate-600  mt-2">
  </div>   
      </div>
      <Status matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} />
    </section>
  )
}
