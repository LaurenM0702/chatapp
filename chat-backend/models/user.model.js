import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true, sparse: true},
    password: {type: String, required: true},
    phoneNumber: {type: String, unique: true, sparse: true},
    authProvider: {
        type: String,
        enum: ["local", "google", "phone"],
        required: true,
        default: "local",
    },
    googleId: {type: String, unique: true, sparse: true},
    profilePicture: {type: String, default: ""},
    status: {type: String, default: "Available"},
    isOnline: {type: Boolean, default: false},
    lastSeen: {type: Date},
    contacts: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    blockedUsers: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    starredChats: [{type: mongoose.Schema.Types.ObjectId, ref: "Chat"}],
    srarredMessages: [{type: mongoose.Schema.Types.ObjectId, ref: "Message"}],
    settings: {
        theme: {type: String, enum: ["light", "dark"], default: "light"},
        notifications: {type: Boolean, default: true},
        privacy: {
            lastSeen: {type: String, enum: ["everyone", "contacts", "nobody"], default: "everyone"},
            profilePicture: {type: String, enum: ["everyone", "contacts", "nobody"], default: "everyone"},
            status: {type: String, enum: ["everyone", "contacts", "nobody"], default: "everyone"},
        }
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const User = mongoose.model("User", userSchema);

export default User;
