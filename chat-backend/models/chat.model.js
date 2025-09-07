import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  isGroupChat: { type: Boolean, default: false },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  previousParticipants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      leftAt: { type: Date },
      action: { type: String, enum: ["left", "kicked"], default: "left" },
      actionBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: function() {
          return this.action === "kicked";
        },
      },
    },
  ],
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  chatName: { type: String, default: "" },
  description: { type: String, default: "" },
  chatImage: { type: String, default: "" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
  deleted: {
    isDeleted: { type: Boolean, default: false },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    deletedAt: { type: Date },
  },
  pinnedMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  settings: {
    muteUntil: { type: Date },
    disappearingMessages: {
      enabled: { type: Boolean, default: false },
      time: { type: Number, default: 0 },
    },
  },
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
