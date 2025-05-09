import s from './MeetContexQuotation.module.scss';
const MeetContexQuotation = () => {
  return (
    <div className={s.quotationWrapper}>
      <p className={s.text}>“Context has completely changed how our team handles research and documentation. The ability to quickly
        retrieve and reference past work has cut our meeting times in half. The integration with our existing tools was
        surprisingly smooth. Worth every penny.”</p>
      
      <div className={s.bottomPart}>
        <div className={s.author}>
          <img className={s.avatar} src="/img/avatar.png" alt="avatar"/>
          <span >Sara Chen</span>
        </div>
        <div className={s.position}>
          Director&nbsp;&nbsp;/&nbsp;&nbsp;Nexus labs
        </div>
      </div>
    </div>
  );
};

export default MeetContexQuotation;