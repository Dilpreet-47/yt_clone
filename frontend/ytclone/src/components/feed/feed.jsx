import dbz from "../../assets/video_banners/dbz.jpg"
import apple from "../../assets/video_banners/apple.jpg"
import hqdefault from "../../assets/video_banners/road.jpg"
import road from "../../assets/video_banners/hqdefault.jpg"
import keyboard from "../../assets/video_banners/keyboard.jpg"
import techsagarlogo from "../../assets/video_banners/techsagarlogo.jpg"
import sagar from "../../assets/video_banners/sagar.jpg"
import techburner from "../../assets/video_banners/techburner.jpg"
import vscode from "../../assets/video_banners/vscode.jpg"
import logo1 from "../../assets/video_banners/logo1.jpg"
import logo2 from "../../assets/video_banners/logo2.jpg"
import logo3 from "../../assets/video_banners/logo3.jpg"
import { Link } from "react-router-dom";

const Feed = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 m-8">

            {/* Card 1 */}
            <Link to="/video" className="flex flex-col gap-2">
                <img src={dbz} alt="Dragon Ball" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Channel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Dragon Ball Theme Song</h1>
                </div>
                <p className="text-sm text-gray-600">12M views • 8 months ago</p>
            </Link>

            {/* Card 2 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={apple} alt="Apple Event" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo2} alt="Apple Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Apple iPhone Event Highlights</h1>
                </div>
                <p className="text-sm text-gray-600">5M views • 2 weeks ago</p>
            </a>

            {/* Card 3 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={hqdefault} alt="Road Trip" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo3} alt="Travel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Epic Road Trip Journey</h1>
                </div>
                <p className="text-sm text-gray-600">800K views • 1 month ago</p>
            </a>

            {/* Card 4 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={keyboard} alt="Keyboard Review" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={techsagarlogo} alt="Tech Sagar" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Mechanical Keyboard Review</h1>
                </div>
                <p className="text-sm text-gray-600">2M views • 3 weeks ago</p>
            </a>

            {/* Card 5 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={techburner} alt="Tech Burner" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={sagar} alt="Sagar" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Tech Burner Crazy Gadgets</h1>
                </div>
                <p className="text-sm text-gray-600">3.1M views • 5 days ago</p>
            </a>

            {/* Card 6 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={vscode} alt="VSCode Tips" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Code Channel" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Top VSCode Tips & Tricks</h1>
                </div>
                <p className="text-sm text-gray-600">950K views • 4 weeks ago</p>
            </a>

            <a href="/" className="flex flex-col gap-2">
                <img src={dbz} alt="Dragon Ball" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Channel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Dragon Ball Theme Song</h1>
                </div>
                <p className="text-sm text-gray-600">12M views • 8 months ago</p>
            </a>

            {/* Card 2 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={apple} alt="Apple Event" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo2} alt="Apple Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Apple iPhone Event Highlights</h1>
                </div>
                <p className="text-sm text-gray-600">5M views • 2 weeks ago</p>
            </a>

            {/* Card 3 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={hqdefault} alt="Road Trip" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo3} alt="Travel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Epic Road Trip Journey</h1>
                </div>
                <p className="text-sm text-gray-600">800K views • 1 month ago</p>
            </a>

            {/* Card 4 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={keyboard} alt="Keyboard Review" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={techsagarlogo} alt="Tech Sagar" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Mechanical Keyboard Review</h1>
                </div>
                <p className="text-sm text-gray-600">2M views • 3 weeks ago</p>
            </a>

            {/* Card 5 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={techburner} alt="Tech Burner" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={sagar} alt="Sagar" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Tech Burner Crazy Gadgets</h1>
                </div>
                <p className="text-sm text-gray-600">3.1M views • 5 days ago</p>
            </a>

            {/* Card 6 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={vscode} alt="VSCode Tips" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Code Channel" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Top VSCode Tips & Tricks</h1>
                </div>
                <p className="text-sm text-gray-600">950K views • 4 weeks ago</p>
            </a>
            <a href="/" className="flex flex-col gap-2">
                <img src={dbz} alt="Dragon Ball" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Channel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Dragon Ball Theme Song</h1>
                </div>
                <p className="text-sm text-gray-600">12M views • 8 months ago</p>
            </a>

            {/* Card 2 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={apple} alt="Apple Event" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo2} alt="Apple Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Apple iPhone Event Highlights</h1>
                </div>
                <p className="text-sm text-gray-600">5M views • 2 weeks ago</p>
            </a>

            {/* Card 3 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={hqdefault} alt="Road Trip" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo3} alt="Travel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Epic Road Trip Journey</h1>
                </div>
                <p className="text-sm text-gray-600">800K views • 1 month ago</p>
            </a>

            {/* Card 4 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={keyboard} alt="Keyboard Review" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={techsagarlogo} alt="Tech Sagar" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Mechanical Keyboard Review</h1>
                </div>
                <p className="text-sm text-gray-600">2M views • 3 weeks ago</p>
            </a>

            {/* Card 5 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={techburner} alt="Tech Burner" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={sagar} alt="Sagar" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Tech Burner Crazy Gadgets</h1>
                </div>
                <p className="text-sm text-gray-600">3.1M views • 5 days ago</p>
            </a>

            {/* Card 6 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={vscode} alt="VSCode Tips" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Code Channel" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Top VSCode Tips & Tricks</h1>
                </div>
                <p className="text-sm text-gray-600">950K views • 4 weeks ago</p>
            </a>

            <a href="/" className="flex flex-col gap-2">
                <img src={dbz} alt="Dragon Ball" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Channel Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Dragon Ball Theme Song</h1>
                </div>
                <p className="text-sm text-gray-600">12M views • 8 months ago</p>
            </a>

            {/* Card 2 */}
            <a href="/" className="flex flex-col gap-2">
                <img src={apple} alt="Apple Event" className="rounded-2xl w-full h-48 object-cover" />
                <div className="flex items-center gap-2">
                    <img src={logo2} alt="Apple Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-sm font-semibold">Apple iPhone Event Highlights</h1>
                </div>
                <p className="text-sm text-gray-600">5M views • 2 weeks ago</p>
            </a>


        </div>
    )
}

export default Feed;
