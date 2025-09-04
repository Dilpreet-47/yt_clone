import mongoose from "mongoose";
import dotenv from "dotenv";
import Video from "./src/models/Video.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // Insert sample video
    const video = await Video.create({  
      title: "My First Video",
      description: "A description of my first video.",
      videoUrl: "/uploads/my_video.mp4",
      thumbnailUrl: "/uploads/my_thumbnail.jpg",
      views: 0,
    });

    console.log("🎬 Sample video inserted:", video);
    process.exit(); // exit script
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seed();
