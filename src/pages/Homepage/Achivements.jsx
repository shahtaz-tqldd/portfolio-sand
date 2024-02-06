import { awards } from '../../assets/data/awards'
import SectionHeader from '../../components/Typography/SectionHeader'

const Achivements = () => {
  return (
    <div id="6" className='bg-[#DFD7BF]'>
      <SectionHeader>Awards</SectionHeader>
      <div className='grid md:grid-cols-2 grid-cols-1 '>
        {
          awards?.slice(0, 2)?.map(({ img, award}, i) => (
            <div key={i} className='grid grid-cols-2 h-[360px]'>
              <img src={img} alt="" className='h-[360px] w-full object-cover' />
              <div className='flex flex-col items-center justify-center p-6 bg-white'>
                <p className='text-base text-gray-500 mb-2'>Awarded with</p>
                <h2 className='text-xl font-medium text-gray-800 uppercase text-center'>{award}</h2>
                <button className='mt-10 text-orange-600 hover:text-orange-500 transition duration-300'>Read more</button>
              </div>
            </div>
          ))
        }
        {
          awards?.slice(2, 4)?.map(({ img, award }, i) => (
            <div key={i} className='grid grid-cols-2 h-[360px]'>
              <div className='flex flex-col items-center justify-center p-6 bg-white'>
                <p className='text-base text-gray-500 mb-2'>Awarded with</p>
                <h2 className='text-xl font-medium text-gray-800 uppercase text-center'>{award}</h2>
                <button className='mt-10 text-orange-600 hover:text-orange-500 transition duration-300'>Read more</button>
              </div>
              <img src={img} alt="" className='h-[360px] w-full object-cover' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Achivements
