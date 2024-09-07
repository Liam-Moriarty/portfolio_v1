import oorPlaylist from "/oorBanner.png";
import personalTaskMonitoring from "/personal-task-monitoring11.png";
import noSidebarBudgetTracker from "/noSidebarBudgetTracker.png";
import dashboardMain from "/dashboardMain.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-text-white">
        Multipage Website with Custom Playlist
      </p>
      <div className="flex gap-4 justify-start items-center">
        <p className="font-bold text-lg text-text-purple">Already Deploy</p>
        <span className="font-bold text-2xl text-text-purple">
          <IoCheckmarkDoneSharp />
        </span>
      </div>
      <p className="font-medium text-medium my-4 max-w-lg text-text-white">
        Design a multi-page website featuring a custom playlist with pagination
        and search functionality, ensuring full responsiveness for mobile and
        desktop
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-text-white">
        Personal Task Monitoring System
      </p>
      <div className="flex gap-4 justify-start items-center">
        <p className="font-bold text-lg text-text-purple">Pending Deploy</p>
        <span className="font-bold text-2xl text-text-purple">
          <MdOutlinePendingActions />
        </span>
      </div>
      <p className="font-medium text-medium my-4 max-w-lg text-text-white">
        Build a simple personal monitoring app using the MERN stack,
        incorporating Redux and RTK Query for state management and data
        fetching. Ensure responsiveness for both mobile and desktop, with
        features like task tracking and CRUD.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-text-white">
        Budget Tracker Application
      </p>
      <div className="flex gap-4 justify-start items-center">
        <p className="font-bold text-lg text-text-purple">Pending Deploy</p>
        <span className="font-bold text-2xl text-text-purple">
          <MdOutlinePendingActions />
        </span>
      </div>
      <p className="font-medium text-medium my-4 max-w-lg text-text-white">
        Create a budget tracker app using the MERN stack with Redux and RTK
        Query for managing state and fetching financial data. Ensure
        responsiveness across devices, featuring expense tracking, income
        tracking, and simple budget analytics
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-text-white">
        Sales Dashboard
      </p>
      <div className="flex gap-4 justify-start items-center">
        <p className="font-bold text-lg text-text-purple">Pending Deploy</p>
        <span className="font-bold text-2xl text-text-purple">
          <MdOutlinePendingActions />
        </span>
      </div>
      <p className="font-medium text-medium my-4 max-w-lg text-text-white">
        Currently developing a responsive dashboard using the MERN stack,
        leveraging Redux and RTK Query to display real-time sales and
        transaction data. Include features like data visualization, transaction
        history, and performance insights.
      </p>
    </div>
  );
};

export const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: oorPlaylist,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: personalTaskMonitoring,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: noSidebarBudgetTracker,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: dashboardMain,
  },
];
