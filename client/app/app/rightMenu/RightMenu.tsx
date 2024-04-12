import React, {JSX, useState} from "react";
import {IoIosArrowBack} from "react-icons/io";
import {useSession} from "next-auth/react";
import {Badge} from "@nextui-org/react";
import {useUserContext} from "../../utils/UserContext";


const RightMenu = (props: { children: JSX.Element[] }) => {
  const {data} = useSession()
  const [active, setActive] = useState<any>()
  const {user, setUser} = useUserContext()


  return (
    <div
      className="relative max-sm:hidden w-[20vw] h-[85vh] my-auto max-w-[300px] items-center gap-1 self-center flex flex-col border-l border-l-white/60 py-5 text-white">
      <div className="w-full h-full flex flex-col items-center">
        {!active ? props.children.map((child) => {
            return (
              <div key={child.key}
                   className={`w-[80%] min-w-[210px] rounded-md cursor-pointer h-[50px] text-[23px] transition flex flex-row hover:bg-white/5`}
                   onClick={() => setActive(child)}>
                <div className="ml-10 -mr-5 w-1/3 h-full flex flex-col justify-center">
                  {child.props.icon}
                </div>
                <div className="w-2/3 h-full flex flex-col justify-center">
                  <Badge content={user.invites.length} className={user.invites.length ==0 || child.key != "Add Friends" ? "hidden":""} color="danger">
                  <h2 className="text-xl">{child.key}</h2>
                  </Badge>
                </div>
              </div>
            )
          }) :
          <>
            <div
              className="w-[80%] min-w-[210px] justify-center  h-[50px] flex flex-row items-center rounded-md cursor-pointer text-[23px] transition hover:bg-white/5"
              onClick={() => setActive(undefined)}>
              <IoIosArrowBack className={"mr-5 -ml-10"} size={40}/>
              <div className="h-full flex flex-col justify-center">
                <h2 className="font-bold text-xl text-grad">{active.key}</h2>
              </div>
            </div>
            {active}
          </>
        }
      </div>

    </div>
  )
}
export default RightMenu