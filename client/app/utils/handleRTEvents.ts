import {Users} from "../../models/User";
import {ObjectId} from "mongodb";
import {Conversations} from "../../models/Conversation";
import {Messages} from "../../models/Message";
import {toast} from "sonner";

const handleEvent = ({type, data}: { type: string, data: any }, setUser: any, setActiveFriends: any, setChat:any) => {

  const handleUserOnline = () => {
    setActiveFriends((prev: string[]) => {
      if (prev.includes(data)) return prev;
      return [...prev, data]
    })

    console.log(data + " is online");
  }

  const handleUserOffline = () => {
    setActiveFriends((prev: string[]) => {
      return prev.filter((i: string) => i !== data)
    })
    console.log(data + " is offline");
  }
  const handleFriendRequest = () => {
    console.log(data + " sent you a friend request");
    setUser((prev: any) => {
      if (prev.invites.includes(data)) return prev;
      return {
        ...prev,
        invites: [...prev.invites, data]
      }
    })
    toast.success("New friend request")
  }

  const handleFriendRequestAccepted = () => {
    console.log(data.username + " accepted your friend request");
    setUser((prev: Users) => {
      if ((prev.invitesSent as ObjectId[]).includes(data)) return prev;
      return {
        ...prev,
        invitesSent: prev.invitesSent.filter((i: string) => i !== data)
      }
    })
  }

  const handleFriendRequestDeclined = () => {
    console.log(data.username + " declined your friend request");
    setUser((prev: Users) => {
      if ((prev.invitesSent as ObjectId[]).includes(data)) return prev;
      return {
        ...prev,
        invitesSent: prev.invitesSent.filter((i: string) => i !== data)
      }
    })
  }

  const handleMasaggeReceived = () => {
    setChat((prev: Conversations[]) => {
      return prev.map((chat: Conversations) => {
        if (chat._id == data.conversation) {
          if ((chat.messages as Messages[]).find((m) => m._id == data.messageID)) return chat
          const formattedData= {
            content: data.message,
            _id: data.messageID,
            author: data.sender,
            date: data.date
          }

          return {
            ...chat,
            messages: [...chat.messages, formattedData]
          }
        }
        return chat
      })
    })
  }

  const handleFriendRequestDeleted = () => {
    console.log(data.username + " deleted you from their friends");
    setUser((prev: Users) => {
      return {
        ...prev,
        friends: prev.friends.filter((f: { friend: Users }) => f.friend._id !== data)
      }
    })
  }

  console.log(type, data)
  switch (type) {
    case "USER_ONLINE":
      return handleUserOnline();
    case "USER_OFFLINE":
      return handleUserOffline();
    case "FRIEND_REQUEST":
      return handleFriendRequest();
    case "FRIEND_ACCEPTED":
      return handleFriendRequestAccepted();
    case "FRIEND_DECLINED":
      return handleFriendRequestDeclined();
    case "FRIEND_DELETE":
      return handleFriendRequestDeleted();
    case "MESSAGE_RECEIVED":
      return handleMasaggeReceived();
    default:
      return;
  }
}

export default handleEvent;