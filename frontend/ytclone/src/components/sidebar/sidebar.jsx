import shorts from "../../assets/Youtube_shorts_icon.svg.png"
import harry from "../../assets/codeharry.jpg"
import wwe from "../../assets/wwe.webp"
import shubh from "../../assets/shubh.jpg"
import hernan from "../../assets/Cropped_Image.png"

const Sidebar = () => {
    return (
        <div className="flex flex-col h-full w-[14%]   ">
            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
                <p className="text-xl ">Home</p>
            </button>

            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <img src={shorts} alt="" className=" w-5" />
                <p className="text-xl ">Shorts</p>
            </button>
            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>

                <p className="text-xl ">Subscriptions</p>
            </button>

            <hr className="m-4" />
            <h1 className="font-semibold mb-4 ml-2">You</h1>

            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="text-xl ">History</p>
            </button>

            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>
                <p className="text-xl ">Playlists</p>
            </button>

            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>
                <p className="text-xl ">Your Videos</p>
            </button>

            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <p className="text-xl ">Your Courses</p>
            </button>

            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="text-xl ">Watch Later</p>
            </button>

            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
                <p className="text-xl ">Liked Videos</p>
            </button>

            <hr className="m-4" />
            <h1 className="font-semibold mb-4 ml-2">Subscriptions</h1>

            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <img src={harry} alt="" className="w-7"/>
                <p className="text-xl ">Code with Harry</p>
            </button>
            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <img src={wwe} alt="" className="w-7 rounded-full"/>
                <p className="text-xl ">WWE</p>
            </button>
            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <img src={shubh} alt="" className="w-7 rounded-full"/>
                <p className="text-xl ">Shubh</p>
            </button>
            <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-200 w-full">
                <img src={hernan} alt="" className="w-7 rounded-full"/>
                <p className="text-xl ">Hernan</p>
            </button>
        </div>
    )
}

export default Sidebar;