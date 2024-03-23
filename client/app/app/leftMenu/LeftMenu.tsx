"use client"
import {useRouter} from "next/navigation";
import {useUserContext} from "../../utils/UserContext";
import {CgLogOut} from "react-icons/cg";
import {signOut, useSession} from "next-auth/react";
import {Avatar, AvatarIcon, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import React from "react";
import {IoSettingsOutline} from "react-icons/io5";

const LeftMenu = (props: {
  active?: string,
  setActive: any,
  routes: Map<string, { component: JSX.Element, icon: JSX.Element }>
}) => {
  const {user, setUser} = useUserContext()
  const {data} = useSession()
  const nav = useRouter()


  return (
    <div
      className="relative w-[20vw] h-[85vh] my-auto  max-w-[300px] items-center gap-1 self-center flex flex-col border-r border-r-white/60 py-5 text-white">

      {props.active && Array.from(props.routes.values()).map((child) => {
          return (
            <div key={child.component.key}
                 className={`w-[80%] min-w-[210px] rounded-md cursor-pointer h-[50px] text-[23px] transition flex flex-row hover:bg-white/5`}
                 onClick={() => props.setActive(child.component.key)}>
              <div className="ml-10 -mr-5 w-1/3 h-full flex flex-col justify-center">
                {child.icon}
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center">
                <h2
                  className={child.component.key == props.active ? " font-bold text-grad" : ""}>{child.component.key}</h2>
              </div>
            </div>
          )
        }
      )}
      <Popover placement={"top"} className={"w-full"}>
        <PopoverTrigger>

          <div
            className="absolute min-w-[190px] bottom-0 hover:bg-white/5 transition cursor-pointer w-[70%] self-center h-fit rounded-xl p-2 flex flex-row justify-around">

            <Avatar
              icon={<AvatarIcon/>}
              src={data.user.image || ""}
              classNames={{
                base: "bg-grad",
                icon: "text-black/70"
              }}
            />
            <h2 className="self-center font-semibold text-xl">{user.name || ""}</h2>

          </div>
        </PopoverTrigger>
        <PopoverContent className={"bg-white/5 py-3"}>
          <div className={"flex flex-col gap-1 items-center w-[12vw]"}>
            <div  onClick={() => {

            }}
              className={"flex items-center w-[80%] h-[40px] rounded-md justify-around hover:bg-white/10 cursor-pointer"}>
              <IoSettingsOutline className={"w-1/3"}
                                 size={25}/>
              <h2 className={"w-2/3 text-medium"}>{"Settings"}</h2>
            </div>
            <div onClick={() => signOut()}
                 className={"flex items-center w-[80%] h-[40px] rounded-md justify-around hover:bg-white/10 cursor-pointer"}>
              <CgLogOut className={"w-1/3"} size={25}/>
              <h2 className={"w-2/3 text-medium"}>{"Log out"}</h2>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>

  )
}

export default LeftMenu