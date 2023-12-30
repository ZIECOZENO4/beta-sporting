import { filterLeague } from "../../api"
import LeagueTable from "../../../components/football component/LeagueTable"


const Ligue1 = async () => {
  const getLigue1 = await filterLeague('Ligue 1')
  return (
    <div className='w-[100vw] px-4 md:px-0 md:w-[650px]'>
      {getLigue1.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Ligue1