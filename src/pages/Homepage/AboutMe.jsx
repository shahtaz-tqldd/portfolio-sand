import { lessons } from '../../assets/data/lessons'
import imgAbout from '../../assets/images/about.png'

const AboutMe = () => {
  return (
    <div id='1' className="bg-gradient-to-r from-gray-50 to-sky-50 pt-20">
      <section className='grid grid-cols-5 gap-20 items-end md:px-0 px-4'>
        <div className='mx-auto col-span-2 md:block hidden'>
          <img src={imgAbout} alt="" className='w-full' />
        </div>
        <div className='md:col-span-3 col-span-5 mb-20'>
          <h2
            className='text-xl uppercase text-orange-600 tracking-widest'
          >
            About me
          </h2>
          <h2
            className='text-4xl font-bold text-slate-700 mt-3'
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            I am going to tech you some valuable lesson that I learnt
          </h2>

          <div className='grid grid-cols-2 gap-10 mt-14'>
            {
              lessons?.map(({ icon, title, des }, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={`${100 * (index + 1)}`}
                  key={index}
                >
                  <div className='flex gap-4 items-end'>
                    <img src={icon} alt="" className='md:h-10 h-8 md:w-10 w-8 object-contain mb-1' />
                    <h2 className='lg:text-2xl text-lg font-bold text-emerald-500'>{title}</h2>
                  </div>
                  <p className='md:text-sm text-xs mt-2 text-gray-700'>{des}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe
