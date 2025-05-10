'use client'

import s from './AiWorkspace.module.scss';
import AiWorkspaceSlider from "@/components/megaMenuPage/AiWorkspace/AiWorkspaceSlider/AiWorkspaceSlider";
import AiWorkspaceMobile from "@/components/megaMenuPage/AiWorkspace/AiWorkspaceMobile/AiWorkspaceMobile";
import useTabletScreen from "@/hooks/useTabletScreen";

const AiWorkspace = () => {

  const isTablet = useTabletScreen()
  
  return (
    <>
      <div className="container">
        <h2 className={s.title}>
          An AI-native workspace <br/>built for the future.
        </h2>
        <p className={s.text}>
          A smarter way to work with AI-powered tools for writing, research, data, and visualization.
        </p>
        <div className={s.outerWrapper}>
          {
            !isTablet && <AiWorkspaceSlider/>
          }
          {
            isTablet && <AiWorkspaceMobile/>
          }          
        </div>
      </div>
    </>
  );
};

export default AiWorkspace;