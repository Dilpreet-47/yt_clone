import earth from "../../assets/video/earth.mp4";
import Navbar from "../navbar/navbar";

const playvideo = () => {
    return (
        <div className="flex w-full h-full m-2">
            <Navbar/>
            <div className="flex flex-col ">
                <video src={earth} controls autoPlay className="w-auto h-auto rounded-2xl"></video>
                <h1 className="text-xl">How Earth Looks in Animation</h1>
            </div>
            <div>

            </div>
        </div>

    )
}

export default playvideo;