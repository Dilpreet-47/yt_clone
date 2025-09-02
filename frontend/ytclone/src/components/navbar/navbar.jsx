import React from "react";
import menu_logo from "../../assets/menu-icon-24.png";
import ytlogo from "../../assets/yt_logo.jpg";
import create from "../../assets/plus.jpg"
import search from "../../assets/search.jpg"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-14 w-full max-w-screen-2xl ">
            <div className="flex gap-4 items-center">
                <button className="h-8 w-8 ">
                    <img src={menu_logo} alt="menulogo" />
                </button>
                <img src={ytlogo} alt="ytlogo" className="w-28 h-10" />
            </div>
            <div className="flex w-full max-w-xl justify-center">
                <input type="text" placeholder="Search" className="flex-grow px-4 py-2 text-black rounded-l-full p-6 border border-gray-400 focus: outline-none" />
                <button className="flex items-center justify-center w-14 border border-gray-400 rounded-r-full border-l-0 bg-gray-100 hover:bg-gray-200">
                    <img src={search} alt="search logo" className=" w-5 h-5 " />
                </button>
            </div>
    
            <div className="flex justify-center">
                <button className="flex justify-center items-center w-8">
                    <img src={create} alt="create" className="" />
                    <p>Create</p>
                </button>
            </div>

        </nav>
    )
}

export default Navbar;