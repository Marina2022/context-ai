'use client'

import React from 'react';
import s from '../AiWorkspaceSlider/AiWorkspaceSlider.module.scss'
import Image from 'next/image';
import slideImage from '@/assets/img/megaMenuPage/slider/slide3.png'
import slideImageMobile from '@/assets/img/megaMenuPage/slider/slide3Mobile.png'
import useTabletScreen from "@/hooks/useTabletScreen";

const Slide3 = () => {

  const isTablet = useTabletScreen()
  return (
    <div className={s.slideContent}>

      <h3 className={s.slideTitle}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M4.16667 2.5C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H10.4398C8.68075 15.5368 8.74458 12.5177 10.6312 10.6311C12.5177 8.7445 15.5368 8.68075 17.5 10.4397V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H4.16667ZM8.44967 5.79353C8.81783 6.06967 8.8925 6.59202 8.61633 6.9602L7.05662 9.03983C6.79126 9.39358 6.29571 9.4785 5.92771 9.23317L4.99021 8.60817C4.60727 8.35292 4.50379 7.83548 4.75908 7.45254C5.01438 7.0696 5.53177 6.96612 5.91471 7.22142L6.19629 7.40913L7.28299 5.9602C7.55913 5.59202 8.08147 5.51739 8.44967 5.79353ZM10.8816 7.5C10.8816 7.03977 11.2548 6.66667 11.7149 6.66667H13.3816C13.8418 6.66667 14.2149 7.03977 14.2149 7.5C14.2149 7.96023 13.8418 8.33333 13.3816 8.33333H11.7149C11.2548 8.33333 10.8816 7.96023 10.8816 7.5ZM8.44967 10.7945C8.81783 11.0706 8.8925 11.5929 8.61633 11.9612L7.05662 14.0407C6.79126 14.3946 6.29571 14.4794 5.92771 14.2341L4.99021 13.6091C4.60727 13.3538 4.50379 12.8364 4.75908 12.4535C5.01438 12.0706 5.53177 11.9671 5.91471 12.2223L6.19629 12.4101L7.28299 10.9612C7.55913 10.5929 8.08147 10.5183 8.44967 10.7945Z"
                fill="#151517" fillOpacity="0.88"/>
          <path fillRule="evenodd" clipRule="evenodd"
                d="M15.3452 12.9882C14.6944 12.3373 13.639 12.3373 12.9882 12.9882C12.3373 13.6391 12.3373 14.6943 12.9882 15.3452C13.639 15.9961 14.6944 15.9961 15.3452 15.3452C15.9961 14.6943 15.9961 13.6391 15.3452 12.9882ZM11.8097 11.8096C13.1114 10.5079 15.2219 10.5079 16.5237 11.8096C17.622 12.908 17.7937 14.582 17.0387 15.8602L18.0893 16.9108C18.4147 17.2362 18.4147 17.7639 18.0893 18.0893C17.7639 18.4147 17.2362 18.4147 16.9108 18.0893L15.8602 17.0387C14.5819 17.7936 12.9079 17.622 11.8097 16.5237C10.5079 15.222 10.5079 13.1114 11.8097 11.8096Z"
                fill="#151517" fillOpacity="0.88"/>
        </svg>

        <span>
          Research & Insights at Your Fingertips.  
        </span>
      </h3>

      <p className={s.slideText}>
        Context searches, summarizes, and organizes research from both your data and verified internet sources,
        delivering the right insights exactly when you need them.
      </p>
      <Image className={s.slideImg} src={isTablet ? slideImageMobile : slideImage} alt="img"/>
    </div>
  );
};

export default Slide3;