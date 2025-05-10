import s from './YourWork.module.scss';
import Image from 'next/image'
import skeletonImg from '@/assets/img/megaMenuPage/yourWork/skeletonImg.png'
import YourWorkContentBlock
  from "@/components/megaMenuPage/YourWork/YourWorkContentBlock/YourWorkContentBlock";

const YourWork = () => {
  return (
    <div className='container'>
      <h2 className={s.title}>Your Work. Our AI. <br/>
        Better Together.</h2>
      <div className={s.yourWorkWrapper}>
        <div className={s.leftPart}>
          <YourWorkContentBlock/>
        </div>
        <div className={s.rightPart}>
          <Image className={s.image} src={skeletonImg} alt='placeholder'/>
        </div>
      </div>
    </div>
  );
};

export default YourWork;