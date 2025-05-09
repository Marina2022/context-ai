'use client'

import React from 'react';
import s from '../AiWorkspaceSlider/AiWorkspaceSlider.module.scss'
import Image from 'next/image';
import slideImage from '@/assets/img/megaMenuPage/slider/slide4.png'
import slideImageMobile from '@/assets/img/megaMenuPage/slider/slide4Mobile.png'
import useTabletScreen from "@/hooks/useTabletScreen";

const Slide4 = () => {

  const isTablet = useTabletScreen()
  return (
    <div className={s.slideContent}>

      <h3 className={s.slideTitle}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M10 1.66666H5.00004C4.07957 1.66666 3.33337 2.41286 3.33337 3.33333V16.6667C3.33337 17.5872 4.07957 18.3333 5.00004 18.3333H15C15.9205 18.3333 16.6667 17.5872 16.6667 16.6667V8.33333H11.6667C10.7462 8.33333 10 7.58714 10 6.66666V1.66666ZM6.66671 11.6667C6.66671 11.2064 7.03981 10.8333 7.50004 10.8333H10C10.4603 10.8333 10.8334 11.2064 10.8334 11.6667C10.8334 12.1269 10.4603 12.5 10 12.5H7.50004C7.03981 12.5 6.66671 12.1269 6.66671 11.6667ZM7.50004 14.1667C7.03981 14.1667 6.66671 14.5397 6.66671 15C6.66671 15.4602 7.03981 15.8333 7.50004 15.8333H12.9167C13.377 15.8333 13.75 15.4602 13.75 15C13.75 14.5397 13.377 14.1667 12.9167 14.1667H7.50004Z"
                fill="#151517" fillOpacity="0.88"/>
          <path d="M16.1785 6.66679L11.6666 2.15495V6.66679H16.1785Z" fill="#151517" fillOpacity="0.88"/>
        </svg>


        <span>
          Smart Document & Report Generation. 
        </span>
      </h3>

      <p className={s.slideText}>
        Draft reports, summaries, and business documents in seconds. Context extracts key insights, formats content, and
        ensures clarity and accuracy.
      </p>
      <Image className={s.slideImg} src={isTablet ? slideImageMobile : slideImage} alt="img"/>
    </div>
  );
};

export default Slide4