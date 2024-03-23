import {checkRoom} from "../ioAds";
import {io} from "../server";
//TODO: REDO THIS

//EXAMPLE:     io.to(targetID).emit("userEvent", {type: "FRIEND_REQUEST", payload: {message: "", inviter}})

export const handleEvent = async (type: string, payload: object) => {
    try {
        console.log("handleEvent: " + type)
        switch (type) {
            case "MESSAGE_SEND":
                return handleMessageSend(payload);
            case "TYPING":
                return handleTyping(payload);
            case "INVITE_SEND":
                return handleInviteSend(payload);
            case "INVITE_ACCEPTED":
                return handleInviteAccepted(payload);
            case "INVITE_DECLINED":
                return handleInviteDeclined(payload);
            default:
                return;
        }
    } catch (e) {
        console.log(e)
    }
}

const handleMessageSend = async (payload: object) => {
    const {userID,targetID,  message} = payload as { userID: string,targetID: string, message: string };
    const isOnline = checkRoom(targetID)
    if (isOnline) {
        io.to(targetID).emit("userEvent", "MESSAGE_RECEIVED", {
            sender: userID,
            message: message
        })
    }
}

const handleTyping = async (payload: object) => {

}

const handleInviteSend = async (payload: object) => {
    const {userID, targetID} = payload as {userID: string, targetID: string}
    const isOnline = checkRoom(targetID)
    if (isOnline) {
        io.to(targetID).emit("userEvent", "INVITE_RECEIVED", {
            inviter: userID
        })
    }
}

const handleInviteAccepted = async (payload: object) => {
    const {userID, targetID} = payload as {userID: string, targetID: string}
    const isOnline = checkRoom(targetID)
    if (isOnline) {
        io.to(targetID).emit("userEvent", "INVITE_ACCEPTED", {
            inviter: userID
        })
    }

}

const handleInviteDeclined = async (payload: object) => {
    const {userID, targetID} = payload as {userID: string, targetID: string}
    const isOnline = checkRoom(targetID)
    if (isOnline) {
        io.to(targetID).emit("userEvent", "INVITE_DECLINED", {
            inviter: userID
        })
    }

}
