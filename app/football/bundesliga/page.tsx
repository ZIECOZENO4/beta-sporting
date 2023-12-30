import { filterLeague } from "../../api"
import LeagueTable from "../../../components/football component/LeagueTable"


const Bundesliga = async () => {
  const getBundesliga = await filterLeague('Bundesliga')
  return (
    <div className='w-[100vw] px-4 md:px-0 md:w-[650px]'>
      {getBundesliga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Bundesliga