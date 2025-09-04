// import earth from "../../assets/video/earth.mp4";
// import Navbar from "../navbar/navbar";

// const playvideo = () => {
//     return (
//         <div className="flex w-full h-full m-2">
//             <Navbar/>
//             <div className="flex flex-col ">
//                 <video src={earth} controls autoPlay className="w-auto h-auto rounded-2xl"></video>
//                 <h1 className="text-xl">How Earth Looks in Animation</h1>
//             </div>
//             <div>

//             </div>
//         </div>

//     )
// }

// export default playvideo;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Playvideo = () => {
  const { id } = useParams(); // Get the video ID from the URL
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/videos/${id}`);
        setVideo(response.data);
      } catch (err) {
        console.error("Error fetching video:", err);
      }
    };
    fetchVideo();
  }, [id]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full h-full m-2">
      <div className="flex flex-col">
        <video 
          src={video.videoUrl} 
          controls 
          autoPlay 
          className="w-auto h-auto rounded-2xl"
        ></video>
        <h1 className="text-xl">{video.title}</h1>
        <p className="text-gray-600">{video.views} views</p>
      </div>
      <div>
        {/* Related videos or comments section */}
      </div>
    </div>
  );
};

export default Playvideo;