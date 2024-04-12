"use client"
import React, {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react';
import {Conversations} from "../../models/Conversation";
import {Card, CardBody, CardHeader, Divider, Input, ScrollShadow, Tab, Tabs} from "@nextui-org/react";
import {Users} from "../../models/User";
import {useUserContext} from "./UserContext";
import {ObjectId} from "mongoose";
import {Messages} from "../../models/Message";
import {useIoContext} from "./IoContext";
import {sendMessage} from "../actions";
import {FaArrowDown} from "react-icons/fa";


interface ChatContextValue {
  activeChats: Conversations[];
  setActiveChats: React.Dispatch<React.SetStateAction<Conversations[]>>
  topChat: string | undefined;
  setTopChat: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Context = createContext<ChatContextValue | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatContextProvider');
  }
  return context;
};

export const ChatContext = ({children}: { children: ReactNode }) => {
  const {user, setUser} = useUserContext()
  const {socket} = useIoContext()
  const [activeChats, setActiveChats] = useState<Conversations[]>([]);
  const [topChat, setTopChat] = useState<string | undefined>();

  const ChatWindow = () => {
    const [newMessage, setNewMessage] = useState<string>("");
    const shownChat = activeChats.find((chat) => chat._id == topChat)
    const friend = (shownChat.members as Users[]).find((u) => u._id != user._id)
    const messagesEndRef = useRef(null);

    useEffect(() => {
      messagesEndRef.current?.scrollIntoView();
    }, [shownChat.messages]);


    const postNewMessage = () => {
      if (newMessage.length == 0) return
      sendMessage(newMessage, user._id, shownChat._id).then((res) => {
        const date = Date.now().toString()
        socket.emit("userEvent", {
          type: "MESSAGE_SEND",
          data: {
            message: newMessage,
            userID: user._id,
            targetID: friend._id,
            date,
            conversationID: shownChat._id,
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
      <div className={"w-full h-full flex flex-col"}>
        {shownChat.messages.length > 0 ?
          <ScrollShadow className="w-full h-full pb-5 my-auto flex-col-reverse" hideScrollBar>
            {(shownChat.messages).map((message) => {
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
        <Input className={"rounded-full mb-5"} variant={"bordered"} value={newMessage}
               onValueChange={e => setNewMessage(e)} onKeyDown={(e) => {
          if (e.key === "Enter") postNewMessage()
        }}/>
      </div>
    )
  }

  return (
    <Context.Provider value={{activeChats, setActiveChats, topChat, setTopChat}}>
      {children}
      {(activeChats.length > 0) &&
          <Card
              className={`w-[25%] h-[50%] max-sm:hidden absolute transition-all rounded-b-none right-5 ${topChat ? "bottom-0" : "-bottom-[47%]"}`}>
              <CardHeader>
                  <div className={"absolute left-[42%] top-0 bg-white/5 w-[60px] h-[25px] cursor-pointer rounded-b"}
                       onClick={() => setTopChat(topChat? undefined: activeChats[0]._id)}><FaArrowDown className={`mx-auto my-1 ${!topChat && "rotate-180"}`}/></div>
                  <Tabs variant={"underlined"}>
                    {topChat && activeChats.map((chat) => {
                      const friend = (chat.members as Users[]).find((u) => u._id != user._id)
                      return (
                        <Tab key={chat._id} title={friend.name}/>
                      )
                    })}
                  </Tabs>
              </CardHeader>
              <Divider/>
            {topChat &&
                <CardBody>
                    <ChatWindow/>
                </CardBody>}
          </Card>}
    </Context.Provider>
  );
};