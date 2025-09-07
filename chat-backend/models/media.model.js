import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String, enum: ["image", "video", "audio", "file"], default: "image" },
    url: { type: String },
    size: { type: Number },
    uploadedAt: { type: Date, default: Date.now },
});

const Media = mongoose.model("Media", mediaSchema);

export default Media;
