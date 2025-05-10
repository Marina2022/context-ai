'use client'

import React from 'react';
import s from '../AiWorkspaceSlider/AiWorkspaceSlider.module.scss'
import Image from 'next/image';
import slideImage from '@/assets/img/megaMenuPage/slider/slide1.png'
import slideImageMobile from '@/assets/img/megaMenuPage/slider/slide1Mobile.png'
import useTabletScreen from "@/hooks/useTabletScreen";

const Slide1 = () => {

  const isTablet = useTabletScreen()
  return (
    <div className={s.slideContent}>
      <h3 className={s.slideTitle}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M0.833344 3.86995C0.833344 3.40972 1.20644 3.03662 1.66668 3.03662H18.3333C18.7936 3.03662 19.1667 3.40972 19.1667 3.86995C19.1667 4.33019 18.7936 4.70329 18.3333 4.70329H17.5V13.87C17.5 14.7905 16.7538 15.5366 15.8333 15.5366H11.5571L12.3601 16.741C12.6153 17.124 12.5118 17.6414 12.1289 17.8967C11.746 18.152 11.2286 18.0485 10.9733 17.6655L10 16.2056L9.02676 17.6655C8.77143 18.0485 8.25404 18.152 7.87109 17.8967C7.48815 17.6414 7.38468 17.124 7.63997 16.741L8.44293 15.5366H4.16668C3.2462 15.5366 2.50001 14.7905 2.50001 13.87V4.70329H1.66668C1.20644 4.70329 0.833344 4.33019 0.833344 3.86995ZM10.8333 7.20329C10.8333 6.74305 10.4603 6.36995 10 6.36995C9.53976 6.36995 9.16668 6.74305 9.16668 7.20329V11.37C9.16668 11.8302 9.53976 12.2033 10 12.2033C10.4603 12.2033 10.8333 11.8302 10.8333 11.37V7.20329ZM14.1667 8.86995C14.1667 8.40972 13.7936 8.03662 13.3333 8.03662C12.8731 8.03662 12.5 8.40972 12.5 8.86995V11.37C12.5 11.8302 12.8731 12.2033 13.3333 12.2033C13.7936 12.2033 14.1667 11.8302 14.1667 11.37V8.86995ZM7.50001 10.5366C7.50001 10.0764 7.12691 9.70329 6.66668 9.70329C6.20644 9.70329 5.83334 10.0764 5.83334 10.5366V11.37C5.83334 11.8302 6.20644 12.2033 6.66668 12.2033C7.12691 12.2033 7.50001 11.8302 7.50001 11.37V10.5366Z"
                fill="#151517" fillOpacity="0.88"/>
        </svg>
        <span>
          AI-Powered Presentations.
        </span>
      </h3>
      <p className={s.slideText}>
        Generate, edit, and refine slides instantly. Context structures your ideas, formats them professionally, and
        ensures your presentations are ready to impress.
      </p>
      <Image className={s.slideImg} src={isTablet ? slideImageMobile : slideImage} alt="img"/>
    </div>
  );
};

export default Slide1;