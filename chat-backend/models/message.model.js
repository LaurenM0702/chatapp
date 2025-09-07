import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String },
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: "Media" }],
  replyTo: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
  isForwarded: { type: Boolean, default: false },
  forwardedFrom: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
  readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  deliveredTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  starredBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  isEdited: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
