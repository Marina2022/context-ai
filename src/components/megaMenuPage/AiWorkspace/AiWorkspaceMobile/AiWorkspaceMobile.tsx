import s from './AiWorkspaceMobile.module.scss';
import Slide1 from "@/components/megaMenuPage/AiWorkspace/slides/Slide1";
import Slide2 from "@/components/megaMenuPage/AiWorkspace/slides/Slide2";
import Slide3 from "@/components/megaMenuPage/AiWorkspace/slides/Slide3";
import Slide4 from "@/components/megaMenuPage/AiWorkspace/slides/Slide4";
import Slide5 from "@/components/megaMenuPage/AiWorkspace/slides/Slide5";

const AiWorkspaceMobile = () => {
  return (
    <ul className={s.cardsOnMobile}>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
    </ul>
  );
};

export default AiWorkspaceMobile;