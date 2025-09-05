import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Feed from "./components/feed/feed";

const Home = () => {
  const [side, setSidebar] = useState(true);

  const toggleSidebar = () => setSidebar(prev => !prev);

  return (
    <div className="flex flex-col bg-white h-screen w-screen overflow-hidden">
      {/* Navbar fixed height */}

      <Navbar toggleSidebar={toggleSidebar} />  


      {/* Sidebar + Feed side by side */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar side={side} />
      
      <div className="flex-1 h-full overflow-y-auto">
        <Feed side={side} />
      </div>
    </div>
    </div>
  );
};

export default Home;
