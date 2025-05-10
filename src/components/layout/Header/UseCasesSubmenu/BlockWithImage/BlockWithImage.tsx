import s from './BlockWithImage.module.scss';
import casesMenuPicture from "@/assets/img/header/casesMenuPicture.png";
import Image from "next/image";

const BlockWithImage = () => {
  return (
    <div>
      <div className={s.header}>
        <div>
          <div className={s.title}>Introduction to Context</div>
          <div className={s.period}>Fall 2025</div>
        </div>
        <button className={s.comingBtn}>Coming soon</button>
      </div>
      <Image src={casesMenuPicture} alt="introduction"/>
      <div className={s.bottomBlock}>
        <div>
          <div className={s.learnHow}>Learn how to —</div>
          <div className={s.getStarted}>Get started with Context.</div>
        </div>
        <button className={s.playBtn}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.02037 0.161295C1.35399 -0.24478 0.5 0.234875 0.5 1.01523V8.9848C0.5 9.7652 1.35399 10.2448 2.02037 9.83875L8.5595 5.85395C9.199 5.46425 9.199 4.5358 8.5595 4.1461L2.02037 0.161295Z"
              fill="#151517" fillOpacity="0.4"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlockWithImage;