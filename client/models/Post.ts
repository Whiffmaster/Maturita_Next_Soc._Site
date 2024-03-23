import mongoose, {ObjectId} from "mongoose";
import {Users} from "./User";

export interface Posts {
  _id: ObjectId;
  author: Users;
  content: string;
  tags: string[];
  likes: mongoose.Schema.Types.ObjectId[] | [];
  views: mongoose.Schema.Types.ObjectId[] | [];
  reposts: mongoose.Schema.Types.ObjectId[] | [];
  comments: mongoose.Schema.Types.ObjectId[] | Comment[] | [];
  visibility: string;
  date: string;
}


const postSchema = new mongoose.Schema<Posts>({

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  views: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  reposts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Comment",
    default: [],
  },
  visibility: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.UTC(Date.now()).toString(),
  },
});

export default mongoose.models.Post || mongoose.model<Posts>("Post", postSchema);
