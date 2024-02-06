import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { works } from '../../assets/data/works';
import SectionHeader from '../../components/Typography/SectionHeader';
import '../../assets/styles/swiper.css'

const MyWork = () => {
  return (
    <div id='4' className='bg-gradient-to-tr from-slate-800 to-gray-700 pb-20'>
      <SectionHeader>Achievements</SectionHeader>
      <div className='w-full'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3500}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            }
          }}
        >
          {
            works?.map(({ icon, title, des }, index) => (
              <SwiperSlide key={index}>
                <div
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay={`${150 * (index + 1)}`}
                  className='rounded-2xl p-6 bg-slate-700'>

                  <div className='flex items-end gap-5'>
                    <img src={icon} alt="" className='h-14 w-14 object-contain mb-1' />
                    <div>
                      <h2 className='text-2xl font-bold text-orange-500 mt-3'>{title}</h2>
                      <p className='text-lg text-gray-300'>{title}</p>

                    </div>
                  </div>
                  <p className='text-sm text-white text-justify mt-6'>{des}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className='w-full mt-10 slide'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4500}
          freeMode
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            }
          }}
        >
          {
            works?.map(({ icon, title, des }, index) => (
              <SwiperSlide key={index}>
                <div
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay={`${150 * (index + 1)}`}
                  className='rounded-2xl p-5 bg-slate-700'>
                  <div className='flex items-end gap-5'>
                    <img src={icon} alt="" className='h-14 w-14 object-contain mb-1' />
                    <div>
                      <h2 className='text-2xl font-bold text-orange-500 mt-3'>{title}</h2>
                      <p className='text-lg text-gray-300'>{title}</p>

                    </div>
                  </div>
                  <p className='text-sm text-white text-justify mt-6'>{des}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

    </div >
  )
}

export default MyWork
