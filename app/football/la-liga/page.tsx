import { filterLeague } from "../../api"
import LeagueTable from "../../../components/football component/LeagueTable"


const LaLiga = async () => {
  const getLaLiga = await filterLeague('Primera Division')

  return (
    <div className='w-[100vw] px-4 md:px-0 md:w-[650px]'>
      {getLaLiga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default LaLiga