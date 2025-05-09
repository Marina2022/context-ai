import s from './MeetContext.module.scss';
import {Abhaya_Libre} from "next/font/google";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: "400"
});
const MeetContext = () => {
  return (
    <div className='container'>
      <div className={s.meetContext}>
        <h2 className={`${abhayaLibre.className} ${s.mainTitle}`}>
          Meet Context, Your All-In-One Office Suite
        </h2>

        <p className={s.text}>
          Seamlessly collaborate, create, and communicate with enterprise-grade security.
        </p>
      </div>
    </div>
  );
};

export default MeetContext;

