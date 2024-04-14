"use client"
import React, {useEffect, useRef, useState} from "react";
import {Users} from "../../../models/User";
import {sendMessage} from "../../actions";
import {Button, Input, ScrollShadow} from "@nextui-org/react";
import {useIoContext} from "../../utils/IoContext";
import {Conversations} from "../../../models/Conversation";
import {IoMdSend} from "react-icons/io";
import {useChatContext} from "../../utils/ChatContext";

const MobileChat = ({friend,  user}:{friend:Users, user:Users}) => {
  const {socket} = useIoContext()
  const {activeChats, setTopChat, topChat} = useChatContext()
  const AC = activeChats.find((chat) => chat._id == topChat)
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [AC.messages]);


  const postNewMessage = () => {
    if (newMessage.length == 0) return
    sendMessage(newMessage, user._id, AC._id).then((res) => {
      const date = Date.now().toString()
      socket.emit("userEvent", {
        type: "MESSAGE_SEND",
        data: {
          message: newMessage,
          userID: user._id,
          targetID: friend._id,
          date,
          conversationID: AC._id,
          messageID: res
        }
      })
    })
    setNewMessage("")
  }


  const getTimeDifference = (dateString: string) => {
    const now = Date.now();
    const differenceInMilliseconds = now - Number(dateString);

    const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    if (days > 0) {
      return `${days} days old`;
    } else if (hours > 0) {
      return `${hours} hours old`;
    } else if (minutes == 0) {
      return `now`;
    } else {
      return `${minutes} minutes old`;
    }
  }

  return (
    <div className={"w-full max-sm:w-[90%] mt-5 h-full flex flex-col"}>
      {AC.messages.length > 0 ?
        <ScrollShadow className="w-full h-full pb-5 my-auto flex-col-reverse" hideScrollBar>
          {(AC.messages).map((message) => {
            const isMe = message.author == user._id
            return (
              <div key={message._id} className={`w-full flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                <div
                  className={`w-fit font-semibold px-4 rounded-full py-1  ${isMe ? "bg-grad rounded-br-none" : "bg-white/5 rounded-bl-none"}`}>
                  <h2>{message.content}</h2>
                </div>
                <h3
                  className={`text-small text-white/10 mx-1 ${!isMe && "self-start"}`}>{getTimeDifference(message.date)}</h3>
              </div>
            )
          })}
          <div ref={messagesEndRef}/>
        </ScrollShadow> :
        <div className={"w-full h-full flex flex-row items-center"}>
          <h1 className={"text-center text-white/20 mx-auto"}>No messages yet</h1>
        </div>}
      <div className={"flex flex-row w-full gap-1"}>
      <Input className={"rounded-full w-[80%] mb-5"} variant={"bordered"} value={newMessage}
             onValueChange={e => setNewMessage(e)}/>
        <Button className={"w-fit items-center"}  variant="faded" onClick={postNewMessage}> <IoMdSend className={"w-[20px] h-[20px]"}/>
        </Button>
      </div>
    </div>
  )
}

export default MobileChat;