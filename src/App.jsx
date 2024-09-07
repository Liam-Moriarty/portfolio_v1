import React from "react";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import TimelineSection from "./components/TimelineSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative bg-purple-bg flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-text-white">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <TimelineSection />
        <Footer />
      </div>
    </main>
  );
};

export default App;
