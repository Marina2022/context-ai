'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import s from './AiWorkspaceSlider.module.scss';
import Slide1 from "@/components/megaMenuPage/AiWorkspace/slides/Slide1";
import Slide2 from "@/components/megaMenuPage/AiWorkspace/slides/Slide2";
import Slide3 from "@/components/megaMenuPage/AiWorkspace/slides/Slide3";
import Slide4 from "@/components/megaMenuPage/AiWorkspace/slides/Slide4";
import Slide5 from "@/components/megaMenuPage/AiWorkspace/slides/Slide5";
import {useRef, useState} from "react";
const AiWorkspaceSlider = () => {

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
        
  return (
    <div className={s.outer}>
      <div className={s.navButtons}>
        <button ref={prevRef} className={s.navButton}>
          <svg width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.27539 1.09766L3.31055 6.0625H18.1592V7.5625H3.31055L8.27539 12.5273L7.21484 13.5879L0.969727 7.34277V6.28223L7.21484 0.0371094L8.27539 1.09766Z"
            />
          </svg>
        </button>        
        <button disabled={activeIndex === 3}
                ref={nextRef} className={s.navButton}>
          <svg width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.8105 6.0625H18.25V7.5625H17.8105L11.7852 13.5879L10.7246 12.5273L15.6895 7.5625H0.839844V6.0625H15.6895L10.7246 1.09766L11.7852 0.0371094L17.8105 6.0625Z"
            />
          </svg>
        </button>
      </div>

      <div className={s.sliderWrapper}>
        <Swiper
          modules={[Navigation]}
          className={s.swiper}
          spaceBetween={32}
          slidesPerView="auto"
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}

          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}


        >
          <SwiperSlide className={s.slide}>
            <Slide1/>
          </SwiperSlide>

          <SwiperSlide className={s.slide}>
            <Slide2/>
          </SwiperSlide>

          <SwiperSlide className={s.slide}>
            <Slide3/>
          </SwiperSlide>

          <SwiperSlide className={s.slide}>
            <Slide4/>
          </SwiperSlide>

          <SwiperSlide className={s.slide}>
            <Slide5/>
          </SwiperSlide>

          <SwiperSlide className={s.slide}>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AiWorkspaceSlider;