import mongoose, {ObjectId} from "mongoose";
import {Users} from "./User";

export interface Comments {
  _id: ObjectId;
  author: Users;
  content: string;
  likes: mongoose.Schema.Types.ObjectId[] | [];
}

const commentSchema = new mongoose.Schema<Comments>({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  }
})

export default  mongoose.models.Comment || mongoose.model<Comments>("Comment", commentSchema)