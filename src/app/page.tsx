'use client'
import LogosBlock from "@/components/megaMenuPage/LogosBlock/LogosBlock";
import MeetContext from "@/components/megaMenuPage/MeetContext/MeetContext";
import YourWork from "@/components/megaMenuPage/YourWork/YourWork";
import React from "react";
import AiWorkspace from "@/components/megaMenuPage/AiWorkspace/AiWorkspace";


export default function Home() {
  return (
    <div>
      <LogosBlock/>
      <MeetContext/>
      <YourWork />
      <AiWorkspace />
    </div>
  );
}
