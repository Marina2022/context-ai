import React from 'react';
import MeetContextHeader from "@/components/megaMenuPage/MeetContext/MeetContextHeader/MeetContextHeader";
import AllYourWork from "@/components/megaMenuPage/MeetContext/AllYourWork/AllYourWork";
import MeetContexQuotation from "@/components/megaMenuPage/MeetContext/MeetContexQuotation/MeetContexQuotation";
import TwoFeatures from "@/components/megaMenuPage/MeetContext/TwoFeatures/TwoFeatures";

const MeetContext = () => {
  return (
    <div className='container'>

      <MeetContextHeader/>
      <AllYourWork/>
      <MeetContexQuotation/>
      <TwoFeatures />
    </div>


  );
};

export default MeetContext;