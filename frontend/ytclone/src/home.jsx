import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Feed from "./components/feed/feed";

const Home = () => {

  const [side, setSidebar] = useState(true);

  const toggleSidebar = () => setSidebar(prev => !prev);

  return (
    <div className="flex flex-col bg-white h-screen w-screen overflow-hidden">
      {/* Navbar stays on top */}
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

      {/* Sidebar + Feed side by side */}
      <div className="flex flex-1">
        <Sidebar side={side} />
        <Feed />
      </div>

    </div>

  )
}

export default Home;