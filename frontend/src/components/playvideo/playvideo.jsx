import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Playvideo = () => {
  const { id } = useParams();
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
          // The src attribute needs the full path to the video file
          src={`http://localhost:5000${video.videoUrl}`} 
          controls 
          autoPlay 
          className="w-auto h-auto rounded-2xl"
        ></video>
        <h1 className="text-xl">{video.title}</h1>
      </div>
      <div>
        {/* Your other components for comments/details */}
      </div>
    </div>
  );
};

export default Playvideo;