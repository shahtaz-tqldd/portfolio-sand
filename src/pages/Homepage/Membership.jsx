import { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { BsArrowDownCircle } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeader from '../../components/Typography/SectionHeader';
import { members } from '../../assets/data/members';
import moment from 'moment/moment';

const Membership = () => {
  const [swiperRef, setSwiperRef] = useState()

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev()
  }, [swiperRef])

  const handleNext = useCallback(() => {
    swiperRef?.slideNext()
  }, [swiperRef])
  return (
    <div id="5" className='bg-[#FA9579] pb-20 z-10 relative'>
      <SectionHeader>Membership</SectionHeader>
      <div className='max-w-[1200px] mx-auto w-full xl:px-0 lg:px-4 md:px-4 px-4'>
        <div className='flex gap-4 justify-end mb-6'>
          <button onClick={handlePrevious}><BsArrowDownCircle className='text-3xl text-gray-200 hover:text-white transition duration-300 rotate-90' /></button>
          <button onClick={handleNext}><BsArrowDownCircle className='text-3xl text-gray-200 hover:text-white transition duration-300 -rotate-90' /></button>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
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
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
        >
          {
            members?.map(({ img, name, designation, comment, startDate }, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={`${150 * (index + 1)}`}
                  className='rounded-2xl px-6 py-8 flex flex-col items-center bg-gray-100'>
                  <img src={img} alt="" className='h-28 w-28 object-cover rounded-full mb-1' />
                  <h2 className='text-lg font-bold text-slate-700 mt-3 text-center'>{name}</h2>
                  <h2 className='text-lg font-medium text-orange-600 uppercase'>{designation}</h2>
                  <p className='text-gray-500 text-sm'>From {moment(startDate).format("DD MMM YYYY")}</p>
                  <p className='text-sm text-gray-700 text-justify mt-4'>{comment}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Membership
