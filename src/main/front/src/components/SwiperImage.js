import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';



const SwiperImage = () => {
    return (
        <>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide><img src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png" /></SwiperSlide>
            <SwiperSlide><img src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png" /></SwiperSlide>
            <SwiperSlide><img src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png" /></SwiperSlide>
          </Swiper>
        </>
      );
}

export default SwiperImage;