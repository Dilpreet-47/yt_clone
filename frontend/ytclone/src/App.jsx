import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {

  const[side, setSidebar] = useState(true);

  const toggleSidebar = () => setSidebar(prev => !prev);

  return (
    <div className="flex flex-col bg-white h-screen w-screen overflow-hidden gap-2">
      <Navbar toggleSidebar= {toggleSidebar} />
      <Sidebar side = {side} />
    </div>
  )
}

export default App;