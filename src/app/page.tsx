'use client'
import LogosBlock from "@/components/megaMenuPage/LogosBlock/LogosBlock";
import MeetContext from "@/components/megaMenuPage/MeetContext/MeetContext";
import YourWork from "@/components/megaMenuPage/YourWork/YourWork";
import React from "react";
import AiWorkspace from "@/components/megaMenuPage/AiWorkspace/AiWorkspace";
import Integrations from "@/components/megaMenuPage/Integrations/Integrations";
import PutAiToWork from "@/components/megaMenuPage/PutAiToWork/PutAiToWork";

export default function Home() {
  return (
    <div>
      <LogosBlock/>
      <MeetContext/>
      <YourWork/>
      <AiWorkspace/>
      <Integrations/>
      <PutAiToWork/>
    </div>
  );
}
