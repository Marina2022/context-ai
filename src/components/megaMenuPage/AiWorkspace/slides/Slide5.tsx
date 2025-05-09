'use client'

import React from 'react';
import s from '../AiWorkspaceSlider/AiWorkspaceSlider.module.scss'
import Image from 'next/image';
import slideImage from '@/assets/img/megaMenuPage/slider/slide5.png'
import slideImageMobile from '@/assets/img/megaMenuPage/slider/slide5Mobile.png'
import useTabletScreen from "@/hooks/useTabletScreen";

const Slide5 = () => {

  const isTablet = useTabletScreen()
  return (
    <div className={s.slideContent}>
      <h3 className={s.slideTitle}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667ZM8.92258 7.32741C9.248 7.65285 9.248 8.18048 8.92258 8.50592L7.42851 10L8.92258 11.4941C9.248 11.8195 9.248 12.3472 8.92258 12.6726C8.59717 12.998 8.06952 12.998 7.74407 12.6726L6.25 11.1785C5.59912 10.5277 5.59912 9.47233 6.25 8.8215L7.74407 7.32741C8.06952 7.00197 8.59717 7.00197 8.92258 7.32741ZM12.2559 7.32741C11.9305 7.00197 11.4028 7.00197 11.0774 7.32741C10.752 7.65285 10.752 8.18048 11.0774 8.50592L12.5715 10L11.0774 11.4941C10.752 11.8195 10.752 12.3472 11.0774 12.6726C11.4028 12.998 11.9305 12.998 12.2559 12.6726L13.75 11.1785C14.4008 10.5277 14.4008 9.47233 13.75 8.8215L12.2559 7.32741Z"
                fill="#151517" fillOpacity="0.88"/>
        </svg>

        <span>
          Code & Data Visualization.
        </span>
      </h3>
      <p className={s.slideText}>
        Easily create stunning visualizations and process large datasets with a built-in, AI-powered coding
        environment—perfect for analysts, engineers, and researchers.
      </p>
      <Image className={`${s.slideImg} ${s.slideImg2and5}`} src={isTablet ? slideImageMobile : slideImage} alt="img"/>
    </div>
  );
};

export default Slide5;