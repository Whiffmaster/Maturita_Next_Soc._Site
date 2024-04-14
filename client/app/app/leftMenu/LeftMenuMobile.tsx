"use client"
import {useRouter} from "next/navigation";
import {useUserContext} from "../../utils/UserContext";
import {CgLogOut} from "react-icons/cg";
import {signOut, useSession} from "next-auth/react";
import {Avatar, AvatarIcon, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import React from "react";
import {IoSettingsOutline} from "react-icons/io5";

const LeftMenuMobile = (props: {
  active?: string,
  setActive: any,
  routes: Map<string, { component: JSX.Element, icon?: JSX.Element }>
}) => {
  const {user, setUser} = useUserContext()
  const {data} = useSession()


  return (
    <div
      className="relative sm:hidden w-full h-[60px] items-center gap-1 self-center justify-around flex bottom-0 flex-row border-t border-t-white/60 text-white">

      {props.active && Array.from(props.routes.values()).map((child) => {
          if (!child.icon) return undefined
          return (
            <div key={child.component.key}
                 className={`w-[50px] h-[50px] text-[23px] transition flex flex-row`}
                 onClick={() => props.setActive(child.component.key)}>
              <div className="w-fit h-full mx-auto flex flex-col justify-center">
                {child.icon}
              </div>
            </div>
          )
        }
      )}

      <Popover placement={"top"} className={"w-full"}>
        <PopoverTrigger>

          <div
            className="rounded-xl p-2 flex flex-row justify-around">
            <Avatar
              size={"sm"}
              icon={<AvatarIcon/>}
              src={data.user.image || ""}
              classNames={{
                base: "bg-grad",
                icon: "text-black/70"
              }}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className={" py-3"}>
          <div className={"flex flex-col gap-1 items-center w-[150px]"}>
            <div  onClick={() => {
              props.setActive("Settings")
            }}
                  className={"flex items-center w-[80%] h-[40px] rounded-md justify-around"}>
              <IoSettingsOutline className={"w-1/3"}
                                 size={25}/>
              <h2 className={"w-2/3 text-medium"}>{"Settings"}</h2>
            </div>
            <div onClick={() => signOut()}
                 className={"flex items-center w-[80%] h-[40px] rounded-md justify-around"}>
              <CgLogOut className={"w-1/3"} size={25}/>
              <h2 className={"w-2/3 text-medium"}>{"Log out"}</h2>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>

  )
}

export default LeftMenuMobile