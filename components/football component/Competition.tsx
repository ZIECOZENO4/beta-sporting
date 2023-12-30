import { matchesType } from '../../types'
import Image from 'next/image'

const Competition = ({data}:{data:matchesType}) => {
  const nd = new Date(data?.utcDate)
  const dateConvert = nd.toDateString()
  return (
    <div className='md:mb-4 flex justify-between items-center md:px-4 py-1 bg-slate-600 hover:bg-slate-700 rounded-md'>
      <div className='flex space-x-4 pl-2 md:pl-0 py-2'>
        <Image src={data?.competition.emblem} alt={data?.competition.name} width={50} height={50} />
        <p className='font-heading text-[15px] flex justify-center pt-2 md:mt-0  font-bold md:text-[25px] text-teal-400'>{data?.competition.name}</p>
      </div>
      <p className='hidden md:flex md:text-xs md:text-sm md:text-white'>{dateConvert}</p>
    </div>
  )
}

export default Competition