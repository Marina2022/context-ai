'use client'

import { useEffect, useState } from "react";

const useMobileScreen = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false); // сначала false

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 960);
    };

    checkScreenSize(); // сразу вызвать при монтировании
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobileScreen;
};

export default useMobileScreen;
