import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true }, // URL to the video file
  thumbnailUrl: { type: String },
  views: { type: Number, default: 0 },
});

export default mongoose.model('Video', VideoSchema);