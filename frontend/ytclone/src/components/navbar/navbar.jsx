import React from "react";
import menu_logo from "../../assets/menu-icon-24.png";
import ytlogo from "../../assets/yt_logo.jpg";
import profile from "../../assets/Cropped_Image.png";
import yt from "../../assets/yt.webp";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-14 w-full max-w-screen-3xl ">
            <div className="flex gap-4 justify-center items-center">
                <button className="flex justify-center items-center h-12 w-12 border border-none rounded-full hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div className="flex gap-2">
                    <img src={yt} alt="" className="w-12"/>
                    <p className="text-2xl font-semiboldbold">YouTube</p>
                </div>
            </div>
            <div className="flex w-full max-w-xl justify-center">
                <input type="text" placeholder="Search" className="flex-grow px-4 py-2 text-black rounded-l-full p-6 border border-gray-400 focus: outline-none" />
                <button className="flex items-center justify-center w-14 border border-gray-400 rounded-r-full border-l-0 bg-gray-100 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </button>
                <button className="flex mx-4 justify-center items-center h-12 w-12 border border-gray-200 rounded-full hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>

                </button>
            </div>

            <div className="flex justify-center items-center gap-4 ">

                <button className="flex justify-center items-center border border-gray-300 rounded-full px-4 py-2 gap-2 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                    <p className="">Create</p>
                </button>

                <button className="flex w-[40px]">
                    <svg className="w-[50px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </button>

                <button className="flex w-14 h-14 border border-black rounded-full">
                    <img src={profile} alt="profile" className="rounded-full w-14 h-14" />
                </button>

            </div>

        </nav>
    )
}

export default Navbar;