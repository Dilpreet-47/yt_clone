import React from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {
  return (
    <div className="flex flex-col bg-white h-screen w-screen p-4 overflow-x-hidden gap-6">
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App;