'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import s from './AiWorkspaceSlider.module.scss';
import Slide1 from "@/components/megaMenuPage/AiWorkspace/slides/Slide1";
import Slide2 from "@/components/megaMenuPage/AiWorkspace/slides/Slide2";

const AiWorkspaceSlider = () => {
  return (
    <div className={s.sliderWrapper}>
      <Swiper
        className={s.swiper}
        spaceBetween={32}
        slidesPerView="auto"
      >
        <SwiperSlide className={s.slide}>
          <Slide1/>
        </SwiperSlide>

        <SwiperSlide className={s.slide}>
          <Slide2/>
        </SwiperSlide>

        <SwiperSlide className={s.slide}>
          <Slide1/>
        </SwiperSlide>

        <SwiperSlide className={s.slide}>
          <Slide1/>
        </SwiperSlide>

        <SwiperSlide className={s.slide}>
          <Slide1/>
        </SwiperSlide>


        <SwiperSlide className={s.slide}>

        </SwiperSlide>


        {/*))}*/}
      </Swiper>
    </div>
  );
};

export default AiWorkspaceSlider;