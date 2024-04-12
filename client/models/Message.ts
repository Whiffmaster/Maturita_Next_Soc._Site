import mongoose from "mongoose";
import {Users} from "./User";

export interface Messages extends mongoose.Document {
  content: string;
  author: mongoose.Schema.Types.ObjectId | Users;
  read: mongoose.Schema.Types.ObjectId[] | Users[] | [];
  date: string;
}

const messageSchema = new mongoose.Schema<Messages>({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  read: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  date: {
    type: String,
    default: undefined,
  }
});

export default mongoose.models.Message || mongoose.model<Messages>("Message", messageSchema);