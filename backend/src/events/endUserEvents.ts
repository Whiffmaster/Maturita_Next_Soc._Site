import {checkRoom} from "../ioAds";
import {io} from "../server";
import conversation from "../../../client/models/Conversation";
//TODO: REDO THIS

//EXAMPLE:     io.to(targetID).emit("userEvent", {type: "FRIEND_REQUEST", data: {message: "", inviter}})

export const handleEvent = async (req: { type: string, data: object }) => {
  try {
    switch (req.type) {
      case "MESSAGE_SEND":
        return handleMessageSend(req.data);
      case "TYPING":
        return handleTyping(req.data);
      case "INVITE_SEND":
        return handleInviteSend(req.data);
      case "INVITE_ACCEPTED":
        return handleInviteAccepted(req.data);
      case "INVITE_DECLINED":
        return handleInviteDeclined(req.data);
        case "FRIEND_REQUEST":
        return handleFriendRequest(req.data);
      case "FRIEND_ACCEPTED":
        return handleFriendAccepted(req.data);
      case "FRIEND_DECLINED":
        return handleFriendDeclined(req.data);
      case "FRIEND_DELETE":
        return handleFriendDelete(req.data);
      default:
        return;
    }
  } catch (e) {
  }
}

const handleMessageSend = async (data: object) => {
  const {userID, targetID, message, date, conversationID, messageID} = data as {
    userID: string,
    targetID: string,
    message: string,
    date: number,
    conversationID: string
    messageID: string
  }
  io.to([userID, targetID]).emit("userEvent", {
    type: "MESSAGE_RECEIVED", data: {
      sender: userID,
      message: message,
      conversation: conversationID,
      date,
      messageID
    }
  })
}

const handleTyping = async (data: object) => {

}

const handleInviteSend = async (data: object) => {
  const {userID, targetID} = data as { userID: string, targetID: string }
  const isOnline = checkRoom(targetID)
  if (isOnline) {
    io.to(targetID).emit("userEvent", "INVITE_RECEIVED", {
      inviter: userID
    })
  }
}

const handleInviteAccepted = async (data: object) => {
  const {userID, targetID} = data as { userID: string, targetID: string }
  const isOnline = checkRoom(targetID)
  if (isOnline) {
    io.to(targetID).emit("userEvent", "INVITE_ACCEPTED", {
      inviter: userID
    })
  }

}

const handleInviteDeclined = async (data: object) => {
  const {userID, targetID} = data as { userID: string, targetID: string }
  const isOnline = checkRoom(targetID)
  if (isOnline) {
    io.to(targetID).emit("userEvent", "INVITE_DECLINED", {
      inviter: userID
    })
  }

}
const handleFriendRequest = async (data: object) => {
  const {userID, targetID} = data as { userID: string, targetID: string }
  const isOnline = checkRoom(targetID)
  if (isOnline) {
    io.to(targetID).emit("userEvent", "FRIEND_REQUEST", {
      userID
    })
  }
}

const handleFriendAccepted = async (data: object) => {
  const {userID, targetID} = data as { userID: string, targetID: string }
  const isOnline = checkRoom(targetID)
  if (isOnline) {
    io.to(targetID).emit("userEvent", "FRIEND_ACCEPTED", {
      userID
    })
  }
}

const handleFriendDeclined = async (data: object) => {
  const {userID, targetID} = data as { userID: string, targetID: string }
  const isOnline = checkRoom(targetID)
  if (isOnline) {
    io.to(targetID).emit("userEvent", "FRIEND_DECLINED", {
      userID
    })
  }
}

const handleFriendDelete = async (data: object) => {
  const {userID, targetID} = data as { userID: string, targetID: string }
  const isOnline = checkRoom(targetID)
  if (isOnline) {
    io.to(targetID).emit("userEvent", "FRIEND_DELETE", {
      userID
    })
  }
}
