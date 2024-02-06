import { socialLink } from '../../assets/data/socialLink'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "https://static.vecteezy.com/system/resources/previews/029/771/969/large_2x/portrait-of-a-handsome-businessman-in-modern-office-asian-manager-looking-at-camera-and-smiling-confident-male-ceo-planning-and-managing-company-strategy-free-photo.jpeg",
  "https://static.vecteezy.com/system/resources/previews/007/485/981/large_2x/elegant-businessman-in-formal-stylish-wear-traveling-in-luxury-car-free-photo.JPG",
  "https://static.vecteezy.com/system/resources/previews/023/012/462/large_2x/close-up-view-of-young-professional-businessman-analysis-graph-and-chart-while-using-laptop-in-the-office-room-free-photo.jpg"
];

const Banner = () => {
  return (
    <div id="7" className='grid grid-cols-5'>
      <div className='col-span-2 bg-[#7C93C3] h-full justify-center flex flex-col'>
        <div className='absolute z-10 max-w-[650px] lg:left-20 md:left-10 left-6'>
          <h2
            className='text-5xl uppercase font-bold text-gray-200'
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            HI! THIS IS AM AMINUL RASHED
          </h2>
          <p
            className='mt-10 text-gray-100'
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Welcome to my professional portfolio! I am a dedicated and results-oriented business professional with a passion for driving organizational success through strategic vision and effective leadership.
          </p>
          <div className="flex items-center gap-8 text-white mt-10">
            {
              socialLink?.map((link, index) => (
                <a key={index} href={link?.link} target="_blank" rel="noreferrer" className="hover:text-red-500 transition duration-300" ><link.icon className="text-xl" /></a>
              ))
            }
          </div>
        </div>
      </div>
      <div className='col-span-3 relative'>
        <div className='w-full'>
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
          >
            {
              images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className='absolute top-0 left-0 bottom-0 right-1/3 bg-gradient-to-r from-[#7C93C3] to-transparent'></div>
                  <img src={img} alt='' className='h-[600px] w-full object-cover' />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Banner
