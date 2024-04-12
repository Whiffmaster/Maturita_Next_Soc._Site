"use client"
import React, {startTransition, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import {Badge, Button, Divider} from "@nextui-org/react";
import RightMenu from "./rightMenu/RightMenu";
import Social from "./rightMenu/Social";
import {BsFillPeopleFill, BsPersonFillAdd, BsSearch} from "react-icons/bs";
import {Feed} from "./feed/Feed";
import Search from "./leftMenu/Search";
import AddPost from "./leftMenu/Post";
import {MdAddComment} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";
import LeftMenu from "./leftMenu/LeftMenu";
import {useUserContext} from "../utils/UserContext";
import {getActiveFriends, getUser} from "../actions";
import Post from "./leftMenu/Post";
import AddFriends from "./rightMenu/AddFriends";
import {io, Socket} from "socket.io-client";
import handleRTEvents from "../utils/handleRTEvents";
import {useIoContext} from "../utils/IoContext";
import {useChatContext} from "../utils/ChatContext";
import Settings from "./leftMenu/Settings";
import LeftMenuMobile from "./leftMenu/LeftMenuMobile";
import MobileNav from "./navigations/MobileNav";
import Loading from "./loading";
import MobileSocial from "./social/MobileSocial";
export default function HomePage()  {
  const {status, data} = useSession({
    required: true,

  })
  const router = useRouter()
  const [active, setActive] = useState<string>("Feed")
  const [search, setSearch] = useState<string>("Explore")
  const {user, setUser} = useUserContext()
  const {setActiveChats} = useChatContext()
  const {socket, setSocket} = useIoContext()
  const [activeFriends, setActiveFriends] = useState<string[]>([])

  const routes = new Map<string, { component: JSX.Element, icon?: JSX.Element }>([
    ["Feed", {component: <Feed key={"Feed"} setActive={setActive}/>, icon: <AiFillHome/>}],
    ["Search", {
      component: <Search key={"Search"} search={search} setSearch={setSearch} setActive={setActive}/>,
      icon: <BsSearch/>
    }],
    ["Post", {component: <Post key={"Post"}/>, icon: <MdAddComment/>}],
    ["Settings", {component: <Settings key={"Settings"}/>}]
  ])
  useEffect(() => {
    if (!data) return
    getUser(data?.user?.id).then((res) => {
      console.log()
      setUser(res)
      getActiveFriends(res.friends.map(i => i.friend._id)).then((res) => {
        console.log(res)
        setActiveFriends(res)
      })
      setSocket(io("http://localhost:5000", {auth: {userID: data?.user?.id}}))
    }).catch((err) => {
      console.log(err)
      signOut()
      router.replace("/auth/signin")
    })
  }, [data]);


  useEffect(() => {
    if (!socket) return;
    socket.on("userEvent", (data) => {
      handleRTEvents(data, setUser, setActiveFriends, setActiveChats)
    })
  }, [socket]);


  if (status === "loading" || !user) return <Loading/>

  return (
    <div className="h-screen w-screen flex max-sm:flex-col self-center justify-between">
      <LeftMenu active={active} setActive={setActive} routes={routes}/>
      <MobileNav active={active}/>
      <MobileSocial/>

      <div className="relative h-4/5 w-[50vw] max-sm:w-full mx-auto flex flex-col self-center overflow-hidden">
        {routes.get(active || "Feed").component}
      </div>
      <LeftMenuMobile active={active} setActive={setActive} routes={routes}/>
      <RightMenu>
        <Social key={"Friends"} icon={<BsFillPeopleFill/>} activeFriends={activeFriends}/>
        <AddFriends key={"Add Friends"} icon={<BsPersonFillAdd/>}/>
      </RightMenu>

    </div>

  )
}