import { filterLeague } from "../../api"
import LeagueTable from "../../../components/football component/LeagueTable"


const CopaLibertadores = async () => {
  const getCopaLibertadores = await filterLeague('Copa Libertadores')
  return (
    <div className='w-[100vw] px-4 md:px-0 md:w-[650px]'>
      {getCopaLibertadores.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default CopaLibertadores