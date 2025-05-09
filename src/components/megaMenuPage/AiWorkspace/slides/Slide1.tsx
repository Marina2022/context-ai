'use client'

import React from 'react';
import s from '../AiWorkspaceSlider/AiWorkspaceSlider.module.scss'
import Image from 'next/image';
import slideImage from '@/assets/img/megaMenuPage/slider/slide1.png'
import slideImageMobile from '@/assets/img/megaMenuPage/slider/slide1Mobile.png'
import useMobileScreen from "@/hooks/useMobileScreen";
const Slide2 = () => {
  
  const isMobile = useMobileScreen()
  return (
    <div className={s.slideContent}>

      <h3 className={s.slideTitle}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M0.5 2.06706C0.5 1.14658 1.24619 0.400391 2.16667 0.400391H13.8333C14.7538 0.400391 15.5 1.14658 15.5 2.06706V13.7337C15.5 14.6542 14.7538 15.4004 13.8333 15.4004H2.16667C1.24619 15.4004 0.5 14.6542 0.5 13.7337V2.06706ZM6.92258 5.2278C7.248 5.55324 7.248 6.08087 6.92258 6.40631L5.42851 7.90039L6.92258 9.39447C7.248 9.71989 7.248 10.2476 6.92258 10.573C6.59717 10.8984 6.06952 10.8984 5.74407 10.573L4.25 9.07889C3.59912 8.42806 3.59912 7.37272 4.25 6.72189L5.74407 5.2278C6.06952 4.90237 6.59717 4.90237 6.92258 5.2278ZM10.2559 5.2278C9.9305 4.90237 9.40283 4.90237 9.07742 5.2278C8.752 5.55324 8.752 6.08087 9.07742 6.40631L10.5715 7.90039L9.07742 9.39447C8.752 9.71989 8.752 10.2476 9.07742 10.573C9.40283 10.8984 9.9305 10.8984 10.2559 10.573L11.75 9.07889C12.4008 8.42806 12.4008 7.37272 11.75 6.72189L10.2559 5.2278Z"
                fill="#151517" fillOpacity="0.88"/>
        </svg>

        <span>
          Code & Data Visualization.  
        </span>
      </h3>
      
      <p className={s.slideText}>
        Easily create stunning visualizations and process large datasets with a built-in, AI-powered coding environment—perfect for analysts, engineers, and researchers.
      </p>
      <Image className={s.slideImg} src={isMobile ? slideImageMobile : slideImage} alt="img"/>
    </div>
  );
};

export default Slide2;