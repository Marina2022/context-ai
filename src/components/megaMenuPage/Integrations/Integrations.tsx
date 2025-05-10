'use client'

import s from './Integrations.module.scss';
import Image from 'next/image'
import integrationsImage from '@/assets/img/megaMenuPage/integrations/integrations.png'
import integrationsMobile from '@/assets/img/megaMenuPage/integrations/integrationsMobile.png'
import useMobileScreen from "@/hooks/useMobileScreen";

const Integrations = () => {

  const isMobile = useMobileScreen()

  return (
    <div className='container'>
      <h2 className={s.title}>Integrations.</h2>
      <p className={s.text}>
        Connect Context with 300+ integrations so you can research, analyze, and create without switching between
        platforms.
      </p>
      <button className={s.integrationsBtn}>
        <span>View all integrations</span>
        <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666687 6.70345L2.62622 4.74392C3.01675 4.35338 3.01675 3.72018 2.62622 3.32965L0.666687 1.37012"
                stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <Image className={s.image} src={isMobile ? integrationsMobile : integrationsImage} alt="integrations"/>
    </div>
  );
};

export default Integrations;