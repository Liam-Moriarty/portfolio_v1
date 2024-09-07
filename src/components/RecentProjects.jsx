import React from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import { cards } from "../data/focusGridData";

const RecentProjects = () => {
  return (
    <div className="py-20 cursor-pointer">
      <div className="lg:my-[5rem] my-[2rem] md:my-[3rem]">
        <h1 className="text-center text-text-white md:tracking-wide font-semibold text-4xl ">
          A Small Selection of{" "}
          <span className="text-text-purple">Recent Projects</span>
        </h1>
        <p className="text-center text-base font-normal tracking-wide">
          Click images to see{" "}
          <span className="text-text-purple">brief description</span>
        </p>
      </div>

      <div id="recentProjects" className="h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
};

export default RecentProjects;
