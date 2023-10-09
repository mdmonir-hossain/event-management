import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="https://i.ibb.co/kBZFRKt/Anniversary.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/q7vSqV4/Baby-Shower.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/zZJJkBY/birthday.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/B4JLtTb/Engagement.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/4pP9b2M/Retirement.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/hLpzK62/Wedding.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
