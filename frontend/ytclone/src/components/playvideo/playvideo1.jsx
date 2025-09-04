import earth from "../../assets/video/earth.mp4";

const playvideo = () => {
    return(
        <div>
            <h1>Its how Earth rotates</h1>
            <video src={earth} controls autoPlay className="w-auto h-auto"></video>
        </div>
    )
}

export default playvideo;