import {Users} from "../../models/User";
import {ObjectId} from "mongodb";

const handleEvent = ({type, payload}: { type: string, payload: any }, setUser: any, setActiveFriends: any) => {

  const handleUserOnline = () => {
    setActiveFriends((prev: string[]) => {
      if (prev.includes(payload)) return prev;
      return [...prev, payload]
    })

    console.log(payload + " is online");
  }

  const handleUserOffline = () => {
    setActiveFriends((prev: string[]) => {
      return prev.filter((i: string) => i !== payload)
    })
    console.log(payload + " is offline");
  }
  const handleFriendRequest = () => {
    console.log(payload + " sent you a friend request");
    setUser((prev: any) => {
      if (prev.invites.includes(payload)) return prev;
      return {
        ...prev,
        invites: [...prev.invites, payload]
      }
    })
  }

  const handleFriendRequestAccepted = () => {
    console.log(payload.username + " accepted your friend request");
    setUser((prev: Users) => {
      if ((prev.invitesSent as ObjectId[]).includes(payload)) return prev;
      return {
        ...prev,
        invitesSent: prev.invitesSent.filter((i: string) => i !== payload)
      }
    })
  }

  const handleFriendRequestDeclined = () => {
    console.log(payload.username + " declined your friend request");
    setUser((prev: Users) => {
      if ((prev.invitesSent as ObjectId[]).includes(payload)) return prev;
      return {
        ...prev,
        invitesSent: prev.invitesSent.filter((i: string) => i !== payload)
      }
    })
  }

  const handleMasaggeReceived = () => {


  }


  switch (type) {
    case "USER_ONLINE":
      return handleUserOnline();
    case "USER_OFFLINE":
      return handleUserOffline();
    case "FRIEND_REQUEST":
      return handleFriendRequest();
    case "FRIEND_REQUEST_ACCEPTED":
      return handleFriendRequestAccepted();
    case "FRIEND_REQUEST_DECLINED":
      return handleFriendRequestDeclined();
    case "MESSAGE_RECEIVED":
      return handleMasaggeReceived();
    default:
      return;
  }
}

export default handleEvent;