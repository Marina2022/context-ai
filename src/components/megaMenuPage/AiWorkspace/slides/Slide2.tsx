'use client'

import React from 'react';
import s from '../AiWorkspaceSlider/AiWorkspaceSlider.module.scss'
import Image from 'next/image';
import slideImage from '@/assets/img/megaMenuPage/slider/slide2.png'
import slideImageMobile from '@/assets/img/megaMenuPage/slider/slide2Mobile.png'
import useMobileScreen from "@/hooks/useMobileScreen";
const Slide2 = () => {
  
  const isMobile = useMobileScreen()
  return (
    <div className={s.slideContent}>
      <h3 className={s.slideTitle}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.7701 10.4899C17.0282 10.3158 17.262 10.1275 17.4658 9.92462C17.9701 9.42262 18.3334 8.78389 18.3334 8.03654C18.3334 7.28919 17.9701 6.65047 17.4658 6.14846C16.9647 5.64962 16.2818 5.23871 15.5047 4.91149C13.947 4.25562 11.853 3.86987 9.58338 3.86987C7.83022 3.86987 6.18185 4.10004 4.8045 4.50707L16.7701 10.4899Z"
            fill="#151517" fillOpacity="0.88"/>
          <path
            d="M2.76745 5.35205C2.36005 5.58713 1.9984 5.85234 1.70085 6.14854C1.19657 6.65055 0.833313 7.28927 0.833313 8.03662C0.833313 8.78397 1.19657 9.4227 1.70085 9.9247C2.20197 10.4235 2.88486 10.8345 3.662 11.1617C5.21968 11.8175 7.3137 12.2033 9.58331 12.2033C11.5578 12.2033 13.3994 11.9114 14.8705 11.4036L2.76745 5.35205Z"
            fill="#151517" fillOpacity="0.88"/>
          <path
            d="M0.833313 11.3911C1.4786 11.9474 2.24341 12.3727 3.01524 12.6976C4.82301 13.4588 7.14674 13.8699 9.58331 13.8699C12.0199 13.8699 14.3436 13.4588 16.1514 12.6976C16.9232 12.3727 17.6881 11.9474 18.3333 11.3911V13.0366C18.3333 13.7839 17.9701 14.4226 17.4657 14.9246C16.9646 15.4235 16.2817 15.8344 15.5046 16.1616C13.947 16.8174 11.8529 17.2032 9.58331 17.2032C7.3137 17.2032 5.21968 16.8174 3.662 16.1616C2.88486 15.8344 2.20197 15.4235 1.70085 14.9246C1.19657 14.4226 0.833313 13.7839 0.833313 13.0366V11.3911Z"
            fill="#151517" fillOpacity="0.88"/>
        </svg>
        <span>
          Data Analysis & Spreadsheets. 
        </span>
      </h3>
      <p className={s.slideText}>
        Analyze financial models, trends and datasets. Automate calculations, generate insights, and visualize data instantly.
      </p>
      <Image className={`${s.slideImg} ${s.slideImg2and5}`} src={isMobile ? slideImageMobile : slideImage} alt="img"/>
    </div>
  );
};

export default Slide2;