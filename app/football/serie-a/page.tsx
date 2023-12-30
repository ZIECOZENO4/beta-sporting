import { filterLeague } from '../../api'
import LeagueTable from "../../../components/football component/LeagueTable"

const SerieA= async () => {
  const getSerieA= await filterLeague('Serie A')
  return (
    <div className='w-[100vw] px-4 md:px-0 md:w-[650px]'>
      {getSerieA.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default SerieA