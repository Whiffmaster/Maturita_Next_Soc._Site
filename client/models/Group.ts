import mongoose from "mongoose";
import {Users} from "./User";
import {Messages} from "./Message";

export interface Groups extends mongoose.Document {
  name: string;
  owner: mongoose.Schema.Types.ObjectId | Users;
  members: mongoose.Schema.Types.ObjectId[] | Users[] | [];
  messages: mongoose.Schema.Types.ObjectId[]  | Messages[] | [];
  settings: object;

}

const GroupSchema = new mongoose.Schema<Groups>({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  messages: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Message",
    default: [],
  },
  settings: {
    type: Object,
    default: {},
  }
});

export default mongoose.models.Group || mongoose.model<Groups>("Group", GroupSchema);