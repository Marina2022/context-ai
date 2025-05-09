import React from 'react';
import s from "./MeetContextHeader.module.scss";
import {Abhaya_Libre} from "next/font/google";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: "400"
});
const MeetContextHeader = () => {

  return (
    <div className={s.meetContextHeader}>
      <h2 className={`${abhayaLibre.className} ${s.mainTitle}`}>
        Meet Context, Your All-In-One Office Suite
      </h2>
      <p className={s.text}>
        Seamlessly collaborate, create, and communicate with enterprise-grade security.
      </p>
    </div>
  );
};

export default MeetContextHeader;