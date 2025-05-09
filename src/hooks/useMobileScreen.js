'use client'

import { useEffect, useState } from "react";

const useMobileScreen = () => {
  
  const [isMobileScreen, setIsMobileScreen] = useState(false); 

  useEffect(() => {   
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobileScreen;
};

export default useMobileScreen;
