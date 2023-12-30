import { filterLeague } from '../../api'
import LeagueTable from "../../../components/football component/LeagueTable"

const Championship = async () => {
  const getChampionship = await filterLeague('Championship')
  return (
    <div className='w-[100vw] px-4 md:px-0 md:w-[650px]'>
      {getChampionship.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Championship