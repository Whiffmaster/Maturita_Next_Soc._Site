"use client"
import React, {startTransition, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Loading from "./loading";
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

export default function HomePage() {
  const {status, data} = useSession({
    required: true,

  })
  const router = useRouter()
  const [active, setActive] = useState<string>("Feed")
  const [search, setSearch] = useState<string>("Explore")
  const {user, setUser} = useUserContext()
  const {socket, setSocket} = useIoContext()
  const [activeFriends, setActiveFriends] = useState<string[]>([])

  const routes = new Map<string, { component: JSX.Element, icon: JSX.Element }>([
    ["Feed", {component: <Feed key={"Feed"} setActive={setActive}/>, icon: <AiFillHome/>}],
    ["Search", {
      component: <Search key={"Search"} search={search} setSearch={setSearch} setActive={setActive}/>,
      icon: <BsSearch/>
    }],
    ["Post", {component: <Post key={"Post"}/>, icon: <MdAddComment/>}],
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
      handleRTEvents(data, setUser, setActiveFriends)
    })
  }, [socket]);


  if (status === "loading" || !user) return <Loading/>

  return (
    <div className="h-screen w-screen flex self-center justify-between">
      <LeftMenu active={active} setActive={setActive} routes={routes}/>

      <div className="relative h-4/5 w-[50vw] flex flex-col self-center overflow-hidden">
        {routes.get(active || "Feed").component}
      </div>

      <RightMenu>
        <Social key={"Friends"} icon={<BsFillPeopleFill/>}/>
        <AddFriends key={"Add Friends"} icon={<BsPersonFillAdd/>}/>
      </RightMenu>

    </div>

  )
}