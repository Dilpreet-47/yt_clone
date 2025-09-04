import earth from "../../assets/video/earth.mp4";

const playvideo = () => {
    return(
        <div>
            <video src={earth} controls className="w-auto h-auto"></video>
        </div>
    )
}

export default playvideo;