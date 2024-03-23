"use client"
import {RiEmotionSadFill} from "react-icons/ri";
import {useUserContext} from "../../utils/UserContext";
import {Avatar, AvatarIcon} from "@nextui-org/react";
import React from "react";

const Social = (children: { icon: any }) => {
    const {user, setUser} = useUserContext()


    return (
        <div className="flex flex-col w-full h-full">
            {user.friends.length != 0 ?
                user.friends.map((friend) => {
                    const friendData= friend.friend
                    return (
                      <div key={friendData._id}
                           className="flex w-[80%] self-center cursor-pointer pt-10 rounded-md items-center justify-center text-white flex-row h-[50px] shadow-md">
                          <Avatar
                            icon={<AvatarIcon/>}
                            src={friendData.image || ""}
                            classNames={{
                                base: "bg-white/10 mx-auto w-[40px]",
                                icon: "text-black/70"
                            }}
                          />
                          <h2 className=" w-[50%] font-semibold  self-center">{friendData.name}</h2>
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