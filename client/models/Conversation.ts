import mongoose from "mongoose";
import {Users} from "./User";
import {Messages} from "./Message";

export interface Conversations extends mongoose.Document {
  members: mongoose.Schema.Types.ObjectId[] | Users[] | [];
  messages: mongoose.Schema.Types.ObjectId[] | Messages[] | [];
}

const conversationSchema = new mongoose.Schema<Conversations>({
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  messages: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Message",
    default: [],
  }

});

export default mongoose.models.Conversation || mongoose.model<Conversations>("Conversation", conversationSchema);