import { filterLeague} from "../../api"
import LeagueTable from "../../../components/football component/LeagueTable"

const English = async () => {
  const getEnglishLeague = await filterLeague('Premier League')

  return (
    <div className='w-[100vw] px-4 md:px-0 md:w-[650px]'>
      {getEnglishLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default English