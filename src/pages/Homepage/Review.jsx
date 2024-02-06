import { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { BsArrowDownCircle } from 'react-icons/bs'
import { MdFormatQuote } from 'react-icons/md'
import 'swiper/css';
import 'swiper/css/pagination';
import { reviews } from '../../assets/data/review';
import SectionHeader from '../../components/Typography/SectionHeader';
import '../../assets/styles/swiper2.css'

const Review = () => {
  const [swiperRef, setSwiperRef] = useState()

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev()
  }, [swiperRef])

  const handleNext = useCallback(() => {
    swiperRef?.slideNext()
  }, [swiperRef])

  return (
    <div id='5' className='bg-[#E5C3A6] pb-20 z-10 relative'>
      <SectionHeader>Testimonial</SectionHeader>
      <div className='max-w-[1200px] mx-auto w-full xl:px-0 lg:px-4 md:px-4 px-4'>
        <div className='flex gap-4 justify-end mb-6'>
          <button onClick={handlePrevious}><BsArrowDownCircle className='text-3xl text-orange-400 hover:text-red-500 transition duration-300 rotate-90' /></button>
          <button onClick={handleNext}><BsArrowDownCircle className='text-3xl text-orange-400 hover:text-red-500 transition duration-300 -rotate-90' /></button>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {
            reviews?.map(({ img, name, designation, comment }, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={`${150 * (index + 1)}`}
                  className='rounded-2xl px-8 py-10 flex flex-col items-center bg-gray-100'>
                  <img src={img} alt="" className='h-40 w-40 object-cover rounded-full mb-1' />
                  <h2 className='text-2xl font-bold text-slate-700 mt-3'>{name}</h2>
                  <h2 className='text-lg font-medium text-orange-500'>{designation}</h2>
                  <MdFormatQuote className='text-5xl rotate-180 text-gray-400' />
                  <p className='text-sm text-gray-700 text-justify mt-2'>{comment}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div >
  )
}

export default Review