'use client'

import s from './AllYourWork.module.scss';
import Image from 'next/image'
import meetContextTop from '@/assets/img/megaMenuPage/meetContext/meet-context-top.png'
import meetContextTopMobile from '@/assets/img/megaMenuPage/meetContext/meet-context-top-mobile.png'
import useMobileScreen from "@/hooks/useMobileScreen";

const AllYourWork = () => {

  const isMobile = useMobileScreen()

  return (
      <div className={s.allWorkInOnePlace}>
        <div className={s.allWorkInOnePlaceDescription}>
          <h3 className={s.allWorkInOnePlaceTitle}>
            <img src="/img/icons/bag.svg" alt="icon"/>
            <span>All Your Work In One Place.</span>
          </h3>
          <p className={s.allWorkInOnePlaceText}>
            Context isn’t just about integrating your apps — our AI can capture, organize, and contextualize your data,
            helping you work faster. It can gather feedback from emails, extract insights from Google Docs, consolidate
            customer details from Salesforce, and more.
          </p>
        </div>
        <div className={s.allWorkInOnePlaceImage}>
          <Image className={s.topImage} src={isMobile ? meetContextTopMobile : meetContextTop} alt='screenshot'/>
        </div>
      </div>   
  );
};

export default AllYourWork;

