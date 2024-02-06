import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "https://static.vecteezy.com/system/resources/previews/029/771/969/large_2x/portrait-of-a-handsome-businessman-in-modern-office-asian-manager-looking-at-camera-and-smiling-confident-male-ceo-planning-and-managing-company-strategy-free-photo.jpeg",
  "https://static.vecteezy.com/system/resources/previews/007/485/981/large_2x/elegant-businessman-in-formal-stylish-wear-traveling-in-luxury-car-free-photo.JPG",
  "https://static.vecteezy.com/system/resources/previews/023/012/462/large_2x/close-up-view-of-young-professional-businessman-analysis-graph-and-chart-while-using-laptop-in-the-office-room-free-photo.jpg"
];

const Hero = () => {
  return (
    <div id="7" className='h-[600px] fixed inset-0 z-0'>
      <div className='w-full'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          // navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
        >
          {
            images?.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt='' className='h-[600px] w-full object-cover' />
              </SwiperSlide>

            ))
          }
        </Swiper>
      </div> 
    </div>
  );
}

export default Hero;
