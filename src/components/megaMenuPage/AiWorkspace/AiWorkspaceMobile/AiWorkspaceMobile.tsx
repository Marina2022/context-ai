import s from './AiWorkspaceMobile.module.scss';
import Slide1 from "@/components/megaMenuPage/AiWorkspace/slides/Slide1";

const AiWorkspaceMobile = () => {
  return (
    <ul className={s.cardsOnMobile}>
      <Slide1 />
      <Slide1 />
      <Slide1 />
      <Slide1 />
      <Slide1 />
    </ul>
  );
};

export default AiWorkspaceMobile;