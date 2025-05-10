'use client'

import { useEffect, useState } from "react";

const useTabletScreen = () => {

  const [isMobileScreen, setIsMobileScreen] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 1046);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobileScreen;
};

export default useTabletScreen;
