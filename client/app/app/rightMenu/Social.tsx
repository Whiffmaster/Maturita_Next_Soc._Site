"use client"
import {RiEmotionSadFill} from "react-icons/ri";
import {useUserContext} from "../../utils/UserContext";
import {
  Avatar,
  AvatarIcon,
  Popover, PopoverContent,
  PopoverTrigger
} from "@nextui-org/react";
import React from "react";
import {useChatContext} from "../../utils/ChatContext";
import {getConversation, removeFriend} from "../../actions";
import {ObjectId} from "mongoose";
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {Users} from "../../../models/User";
import {useIoContext} from "../../utils/IoContext";
import {RxCross2} from "react-icons/rx";

const Social = ({icon, activeFriends}: { icon: any, activeFriends: string[] }) => {
  const {user, setUser} = useUserContext()
  const {activeChats, setActiveChats, setTopChat} = useChatContext()
  const {socket} = useIoContext()

  const addChat = (conversation) => {
    if (activeChats.find((chat) => chat._id == conversation._id)) {
      console.log("load chat")
      setTopChat(conversation._id)
    } else {
      getConversation(conversation).then((res) => {
        console.log(res)
        setTopChat(conversation._id)
        setActiveChats([...activeChats, res])
      })
    }
  }
  const deleteFriend = (friendID) => {
    removeFriend(friendID).then((res) => {
      if (res) {
        setUser({...user, friends: user.friends.filter((f: { friend: Users }) => f.friend._id != friendID)})
        socket.emit("userEvent", {
          type: "FRIEND_DELETE",
          data: {
            userID: user._id,
            targetID: friendID,
          }
        })
      }
    })
  }

  return (
    <div className="flex flex-col w-full h-full">
      {user.friends.length != 0 ?
        user.friends.map((friend) => {
          const friendData = friend.friend
          return (
            <div key={friendData._id}
                 onClick={() =>
                   addChat(friend.conversation)
                 }
                 className="flex w-[80%] max-sm:w-[60%] self-center cursor-pointer mt-5 rounded-md items-center justify-center text-white flex-row h-[50px] shadow-md">
              <Avatar
                icon={<AvatarIcon/>}
                isBordered
                src={friendData.image || ""}
                color={activeFriends.find((id) => id == friend.friend._id) ? "success" : "default"}
                classNames={{
                  base: "bg-white/10 mx-auto w-[40px]",
                  icon: "text-black/70"
                }}
              />
              <h2 className=" w-[70%] text-center font-semibold  self-center">{friendData.name}</h2>
              <Popover placement={"left"} className={"w-full"}>
                <PopoverTrigger>
                  <div className={"w-10%"}>
                    <HiOutlineDotsHorizontal/>
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="text-danger p-2" color="danger"
                       onClick={() => deleteFriend(friendData._id)}>
                    Delete friend

                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )
        }) :
        <div className="text-white/20 font-bold self-center cursor-default items-center my-auto">
          <RiEmotionSadFill className="mx-auto" size={80}/>
          <h2 className={"text-xl mx-auto"}>No friends</h2>
        </div>
      }
    </div>
  )
}

export default Social