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
      <h2 className={s.title}>Integrations</h2>
      <p className={s.text}>
        Connect Context with 300+ integrations so you can research, analyze, and create without switching between
        platforms.
      </p>
      <Image className={s.image} src={isMobile ? integrationsMobile : integrationsImage} alt="integrations"/>
    </div>
  );
};

export default Integrations;