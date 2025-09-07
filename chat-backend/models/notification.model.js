import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }],
    content: { type: String, required: true },
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
    messageId: { type: mongoose.Schema.Types.ObjectId, ref: "Message", required: true },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
