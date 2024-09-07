import React from "react";
import { Timeline } from "./ui/Timeline";
import { data } from "../data/timelineData";

const TimelineSection = () => {
  return (
    <div className="pb-20">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineSection;
