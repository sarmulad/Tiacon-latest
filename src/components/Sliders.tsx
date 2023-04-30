import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';



interface SlidersProps {
  title?: string;
  description?: string;
}

const Sliders: React.FC<SlidersProps> = ({ title, description }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

    </Swiper>
    
  );
};

export default Sliders;
