import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Feed = () => {
    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // This call gets all the video data from your backend
                const response = await axios.get('http://localhost:5000/api/videos');
                setVideos(response.data);
            } catch (err) {
                console.error("Error fetching videos:", err);
            }
        };
        fetchVideos();
    }, []);

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <img src="/uploads/my_thumbnail.jpg" alt="Video 1" />
            <img src="/uploads/my_thumbnail.jpg" alt="Video 2" />
            <img src="/uploads/my_thumbnail.jpg" alt="Video 3" />
            <img src="/uploads/my_thumbnail.jpg" alt="Video 4" />
        </div>

    )
}

export default Feed;