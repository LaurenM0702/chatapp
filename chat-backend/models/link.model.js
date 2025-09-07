import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    link: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    expiredAt: { type: Date },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const Link = mongoose.model("Link", linkSchema);

export default Link;
