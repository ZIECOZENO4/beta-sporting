import Image from 'next/image'
import { matchesType } from '../../types';

const Matches = ({data}:{data:matchesType}) => {
  const getDate = new Date(data?.utcDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className='grid grid-cols-3'>
      <div className='w-full flex flex-col pt-2 md:pt-0 md:flex-row justify-start items-center'>
        <div className='w-[60px] h-[60px] relative md:mr-2'>
          <Image src={data?.homeTeam?.crest!} alt={data?.homeTeam?.name!} fill className='object-cover md:h-[40px] md:w-[40px] h-[10px] w-[8px]' />
        </div>
        <p className='md:text-[18px] pl-2 md:pl-0 text-[12px] pt-2 md:pt-0 text-white'>{data?.homeTeam?.name}</p>
      </div> 
      <div className='px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md'>
        {data?.status == 'FINISHED' ? (
          <p className='py-1 text-teal-400 text-xs'>{data?.score?.fullTime.home} : {data.score?.fullTime.away}</p>
          ) : (
          <p className='py-1 text-teal-400 text-xs'>{getDate}</p>
        )}
      </div>
      <div className='w-full flex flex-col md:flex-row pt-2 md:pt-0 items-center justify-end'>
      <div className=' md:hidden w-[60px] h-[60px] relative ml-2'>
          <Image src={data?.awayTeam?.crest!} alt={data.awayTeam?.name!} fill className='object-cover md:h-[40px] md:w-[40px] h-[10px] w-[8px]' />
        </div>
        <p className=' text-right md:text-[18px] pr-2 pt-2 md:pt-0 md:pl-0 text-[12px] text-white'>{data.awayTeam?.name}</p>
        <div className='hidden md:flex md:w-[60px] md:h-[60px] md:relative md:ml-2'>
          <Image src={data?.awayTeam?.crest!} alt={data.awayTeam?.name!} fill className='object-cover md:h-[40px] md:w-[40px] h-[10px] w-[8px]' />
        </div>
      </div>
    </div>
  )
}

export default Matches