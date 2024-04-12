import mongoose, {ObjectId} from "mongoose";
import {Posts} from "./Post";
import {Groups} from "./Group";
import {Conversations} from "./Conversation";

export interface Users {
  _id: ObjectId;
  name: string;
  email: string;
  image: string;
  password?: string;
  following: mongoose.Schema.Types.ObjectId[] | Users[] | [];
  followers: mongoose.Schema.Types.ObjectId[] | Users[] | [];
  friends: {
    friend: mongoose.Schema.Types.ObjectId | Users,
    conversation: mongoose.Schema.Types.ObjectId | Conversations,
  }[] | [];
  groups: mongoose.Schema.Types.ObjectId[] | Groups[] | [];
  invites: mongoose.Schema.Types.ObjectId[] | Users[] | [];
  invitesSent: mongoose.Schema.Types.ObjectId[] | Users[] | [];
  likes: mongoose.Schema.Types.ObjectId[] | [];
  settings: {
    privacy: {
      posts: "public" | "friends"
      profile: "public" | "private" | "friends",
    },
  } | undefined;
}

const PrivacySchema = new mongoose.Schema<Users["settings"]["privacy"]>({
  posts: {
    type: String,
    enum: ["public", "friends"],
  },
  profile: {
    type: String,
    enum: ["public", "private", "friends"],
  },
});
const UserSchema = new mongoose.Schema<Users>({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  friends: {
    type: [{
      friend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
      }
    }],
    default: [],
  },
  groups: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Group",
    default: [],
  },
  invites: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  invitesSent: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  settings: {
    type: {
      privacy: PrivacySchema
    },
    default: {
      privacy: {
        posts: "public",
        profile: "public",
      }
    },
  },
  image: {
    type: String,
    default: "",
  },
  following: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  followers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Post",
    default: [],
  },
});


export default mongoose.models.User || mongoose.model<Users>("User", UserSchema);

