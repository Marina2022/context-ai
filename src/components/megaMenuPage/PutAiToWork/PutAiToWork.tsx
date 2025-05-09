'use client'

import s from './PutAiToWork.module.scss';
import putAiToWork from '@/assets/img/megaMenuPage/putAiToWork/putAiToWork.png'
import putAiToWorkMobile from '@/assets/img/megaMenuPage/putAiToWork/putAiToWorkMobile.png'
import Image from 'next/image'
import useMobileScreen from "@/hooks/useMobileScreen";
const PutAiToWork = () => {
  
  const isMobile = useMobileScreen()
  return (
    <div className='container'>
      <div className={s.wrapper}>
        <div className={s.content}>
          <h2 className={s.title}>Put AI to work.</h2>
          <p className={s.text}>Empower your team with AI that enhances research, automates workflows, and accelerates
            decision-making—secure, scalable, and built for enterprise.</p>
          <button className={s.btn}>Talk to Sales</button>
        </div>
        <Image className={isMobile ? s.imgMobile : s.img} src={isMobile ? putAiToWorkMobile :putAiToWork} alt="banner"></Image>
      </div>
    </div>
  );
};

export default PutAiToWork;