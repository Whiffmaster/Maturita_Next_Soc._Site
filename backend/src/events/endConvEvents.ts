export const handleEvent = (type: string, payload: object) => {
    switch (type) {
        case "CONV_UPDATED":
        return handleConvUpdated(payload);
        case "CONV_DELETED":
        return handleConvDeleted(payload);
        case "CONV_MEMBER_JOINED":
        return handleConvMemberJoined(payload);
        case "CONV_MEMBER_LEFT":
        return handleConvMemberLeft(payload);
        case "CONV_MEMBER_UPDATED":
        return handleConvMemberUpdated(payload);
        case "CONV_MESSAGE_SEND":
        return handleConvMessageSend(payload);
        case "CONV_MESSAGE_RECEIVED":
        return handleConvMessageReceived(payload);
        case "CONV_TYPING":
        return handleConvTyping(payload);
        default:
        return;
    }
}
//TODO: all

const handleConvMemberJoined=(payload: object)=>{
    //TODO: check invite, add to conv, add to user, alert users
}

const handleConvMemberLeft=(payload: object)=>{
    //TODO: remove from conv, remove from user, alert users
}

const handleConvMemberUpdated=(payload: object)=>{
    //TODO: alert users,
}

const handleConvMessageSend=(payload: object)=>{
    //TODO: add to conv, alert users,
}

const handleConvMessageReceived=(payload: object)=>{
    //TODO: update conv, alert users,
}

const handleConvTyping=(payload: object)=>{
    //TODO: alert users,
}

const handleConvUpdated=(payload: object)=>{
    //TODO: update conv, alert users,
}

const handleConvDeleted=(payload: object)=>{
    //TODO: remove from user, alert users, remove from conv (itself),
}

