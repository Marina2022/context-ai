'use client'

import s from './LogosBlock.module.scss';
import Marquee from "react-fast-marquee";

const LogosBlock = () => {

  const logosArray = Array.from({length: 17}, (_, i) => i + 1)

  return (
    <div className='container'>
      <Marquee direction="left" speed={20}>        
        <ul className={s.logoWrapper}>
          {
            logosArray.map((logo, i) => {
              return <li key={i} className={s.item}><img src={`/img/megaMenuPage/logos/${logo}.svg`} alt={`logo-${logo}`}/></li>
            })
          }
        </ul>
      </Marquee>
    </div>
  );
};

export default LogosBlock;