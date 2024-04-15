"use client"
import {Badge, Card} from "@nextui-org/react";
import React, {JSX, useEffect, useState} from "react";
import {IoIosArrowBack} from "react-icons/io";
import {useUserContext} from "../../utils/UserContext";
import {useChatContext} from "../../utils/ChatContext";
import MobileChat from "./MobileChat";
import {Users} from "../../../models/User";


const MobileSocial = ({activeFriends, children}: { activeFriends: string[], children: JSX.Element[] }) => {
  const [active, setActive] = useState<React.JSX.Element>(children[0])
  const {user, setUser} = useUserContext()
  const [rolled, setRolled] = useState<boolean>(false)
  const {activeChats, setActiveChats, topChat, setTopChat} = useChatContext()
  useEffect(() => {
    if (!topChat) return
    let AC = activeChats.find((chat) => chat._id == topChat)
    if (!AC) return
    let friend = (AC.members as Users[]).find((u) => u._id != user._id)
    setActive(<MobileChat key={friend.name} friend={friend} user={user}/>)
  }, [topChat]);

  return (
    <div
      className={`w-screen h-[92%] bottom-[60px] absolute z-20 bg-black sm:hidden flex flex-col items-center  transition-all ${rolled ? "left-0" : "left-[100%]"}`}>
      <div
        className="w-[80%] h-[50px] flex flex-row rounded-md cursor-pointer text-[23px] transition max-sm:hover:bg-white/5"
        onClick={() => {
          setActive(undefined)
          setTopChat(undefined)
        }}>
        {active && <IoIosArrowBack className={""} size={40}/>}
        <div className="h-[50px] justify-center flex flex-col mx-auto">
          <h2 className="font-bold text-xl text-grad">{active?.key || "Social"}</h2>
        </div>
      </div>

      {!active ? children.map((child) => {
        return (
          <div key={child.key}
               className={`w-[80%] rounded-md h-[50px] text-[23px] transition flex flex-row`}
               onClick={() => setActive(child)}>
            <div className="ml-10 -mr-5 w-1/3 h-full flex flex-col justify-center">
              {child.props.icon}
            </div>
            <div className="w-2/3 h-full flex flex-col justify-center">
              <Badge content={user.invites.length}
                     className={user.invites.length == 0 || child.key != "Add Friends" ? "hidden" : ""}
                     color="danger">
                <h2 className="text-xl">{child.key}</h2>
              </Badge>
            </div>
          </div>
        )
      }) : active
      }
      {rolled ? <div className={"w-[20px] h-[50px] absolute my-auto bg-white/10 left-0 rounded-r bottom-[70px]"}
                     onClick={() => setRolled(false)}></div> :
        <div className={"w-[20px] h-[50px] absolute my-auto bg-white/10 -left-[20px] rounded-l bottom-[70px]"}
             onClick={() => setRolled(true)}></div>
      }
    </div>
  );
}

export default MobileSocial;