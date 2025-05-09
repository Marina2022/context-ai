import s from './TwoFeatures.module.scss';
import featureOneImg from '@/assets/img/megaMenuPage/meetContext/feature-one.png'
import featureTwoImg from '@/assets/img/megaMenuPage/meetContext/feature-two.png'
import Image from 'next/image'
const TwoFeatures = () => {
  return (
    <div className={s.twoFeaturesWrapper}>
      <div className={s.featureBlock}>
        <h3 className={s.subTitle}>
          <img src="/img/icons/people.svg" alt="icon"/>
          <span>Built for Teams, Designed for Collaboration.</span>
        </h3>
        <p className={s.text}>
          Collaborate in real time—comment, edit, and share documents effortlessly. Context keeps everyone on the same
          page and accelerates decision-making.
        </p>

        <Image width={424}  className={s.img} src={featureOneImg} alt="screenshot" />
        


      </div>
      <div className={s.featureBlock}>
        <h3 className={s.subTitle}>
          <img src="/img/icons/trusted.svg" alt="icon"/>
          <span>Trusted, Transparent, and Reliable.</span>
        </h3>
        <p className={s.text}>
          Context combines your data with verified sources, delivering accurate, traceable insights with enterprise security for your critical information.
        </p>
        <Image width={424} height={284} className={s.img} src={featureTwoImg} alt="screenshot" />

      </div>
    </div>
  );
};

export default TwoFeatures;