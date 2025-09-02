import React from "react";
import menu_logo from "../../assets/menu-icon-24.png";
import ytlogo from "../../assets/yt_logo.jpg";
import create from "../../assets/plus."

const Navbar = () => {
    return (
        <nav className="flex justify">
            <div className="flex gap-4">
                <button className="h-8 w-8 ">
                    <img src={menu_logo} alt="menulogo" />
                </button>
                <img src={ytlogo} alt="ytlogo" className="w-28 h-10"/>
            </div>
            <div className="flex ">
                <input type="text" placeholder="Search" className="text-black" />
            </div>
            <div>

            </div>

        </nav>
    )
}

export default Navbar;