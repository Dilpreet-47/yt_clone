import dbz from "../../assets/video_banners/dbz.jpg"
import apple from "../../assets/video_banners/apple.jpg"
import road from "../../assets/video_banners/road.jpg"
import sagar from "../../assets/video_banners/sagar.jpg"
import techburner from "../../assets/video_banners/techburner.jpg"
import vscode from "../../assets/video_banners/vscode.jpg"
import logo1 from "../../assets/video_banners/logo1.jpg"
import logo2 from "../../assets/video_banners/logo2.jpg"
import logo3 from "../../assets/video_banners/logo3.jpg"

const Feed = () => {
    return (
        <div className="w-[85%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 m-8">
            {/* Card 1 */}
            <div className="flex flex-col gap-2">
                {/* Thumbnail */}
                <img src={dbz} alt="Dragon Ball" className="rounded-2xl w-full h-48 object-cover" />

                {/* Channel + Title */}
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Channel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Dragon Ball Theme Song</h1>
                </div>

                {/* Views + Time */}
                <p className="text-sm text-gray-600">12M views • 8 months ago</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-2">
                <img src={techburner} alt="Tech Burner" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo2} alt="Channel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Tech Burner Unboxing</h1>
                </div>
                <p className="text-sm text-gray-600">1.2M views • 2 weeks ago</p>
            </div>
            

            {/* Add more cards the same way... */}
        </div>

    )
}

export default Feed;