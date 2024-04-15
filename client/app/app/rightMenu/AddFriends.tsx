"use client"
import React, {useState} from "react";
import {useUserContext} from "../../utils/UserContext";
import {acceptInvite, searchUser, sentInvite} from "../../actions";
import {useSession} from "next-auth/react";
import {
  Avatar,
  AvatarIcon,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import {BsPersonFillAdd} from "react-icons/bs";
import {MdDone} from "react-icons/md";
import {VscError} from "react-icons/vsc";
import {useIoContext} from "../../utils/IoContext";
import {HiOutlineDotsHorizontal} from "react-icons/hi";


const AddFriends = ({icon}: { icon: any }) => {
  const [searchString, setSearchString] = useState<string>("")
  const {socket} = useIoContext()
  const [searchResults, setSearchResults] = useState<{
    image: string,
    name: string,
    _id: string,
  }[] | []>([])
  const {user, setUser} = useUserContext()
  const {data} = useSession()
  const search = (str: string) => {
    if (str.length <= 3 || str.length >= 15) return setSearchResults([])
    searchUser(str, data.user.id).then((res) => {
      setSearchResults(res)
    }).catch((e) => {
      setSearchResults([])
    })
  }

  const handleInvite = (accept: boolean, inviteID) => {
    acceptInvite(accept, inviteID, data.user.id).then((res) => {
      setUser({
        ...user,
        invites: user.invites.filter((invite: { _id: string, name: string }) => invite._id !== inviteID)
      })
      accept ? socket.emit("INVITE_ACCEPTED", inviteID) : socket.emit("friendRequestDeclined", inviteID)
    }).catch((e) => {
      console.log(e)
    })
  }
  const handleSentInvite = (userID: string) => {
    sentInvite(userID, data.user.id).then((res) => {
      // @ts-ignore
      setUser({...user, invitesSent: [...user.invitesSent, userID]})

    }).catch((e) => {
      console.log(e)
    })
  }

  return (
    <div className="w-full h-full flex -ml-2.5 flex-col">
      <div className="flex flex-col justify-self-end">
      </div>
      <div className="w-[90%] h-fit flex flex-col  self-center mx-auto rounded-md my-2 transition-all">
        <Input
          className={"w-full mx-auto px-2 text-xl mb-5"}
          type={"text"} value={searchString}
          variant="bordered"
          placeholder={"search"}
          onValueChange={(e) => {
            setSearchString(e)
            search(e)
          }}/>
        {searchResults.map((userInv) => {
            const disabled = (user.invitesSent as {
              _id: string,
              name: string,
              image: string
            }[]).includes(userInv._id) || (user.friends.map((user) => user.friend._id) as string[]).includes(userInv._id)

            return (
              <div key={userInv._id}
                   className="flex rounded-md items-center justify-center text-white flex-row h-[50px] shadow-md w-[80%] self-center">
                <Avatar
                  icon={<AvatarIcon/>}
                  src={userInv.image || ""}
                  classNames={{
                    base: "bg-white/10 mx-auto w-[40px]",
                    icon: "text-black/70"
                  }}
                />
                <h2 className="w-[50%] mx-auto font-semibold text-center self-center">{userInv.name}</h2>
                <BsPersonFillAdd
                  className={`mx-auto rounded-md self-center w-[40px] h-[40px] cursor-pointer hover:bg-black/20 p-2 ${disabled ? "hidden" : ""}`}
                  color={"purple"}
                  onClick={() => handleSentInvite(userInv._id)}/>
              </div>
            )
          }
        )}
        {user.invites.length > 0 && <>
            <h2 className={"text-xl mx-auto text-grad p-2"}>Friend requests</h2>

          {user.invites.map((invite) => {
            return (
              <div key={invite._id}
                   className="flex w-[80%] self-center cursor-pointer rounded-md items-center justify-center text-white flex-row h-[50px] shadow-md">
                <Avatar
                  icon={<AvatarIcon/>}
                  src={invite.image || ""}
                  classNames={{
                    base: "bg-white/10 mx-auto w-[40px]",
                    icon: "text-black/70"
                  }}
                />
                <h2 className=" w-[50%] font-semibold  self-center">{invite.name}</h2>
                  <Popover showArrow placement={"left"} className={"w-full"}>
                    <PopoverTrigger>
                      <div>
                        <HiOutlineDotsHorizontal/>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className={"w-fit"}>
                      <div className="text-success rounded hover:bg-white/5 flex flex-row w-[100px] p-1 m-1 justify-center cursor-pointer" color="success"
                           onClick={() => handleInvite(true, invite._id)}>
                        <p className={"ml-1"}>Accept </p>
                        <MdDone className={"my-auto mx-2"}/>
                      </div>
                      <div className="text-danger rounded hover:bg-white/5 flex flex-row w-[100px] justify-center p-1 m-1 cursor-pointer" color="danger"
                           onClick={() => handleInvite(false, invite._id)}>
                        <p className={"ml-1"}>Reject </p>
                        <VscError className={"my-auto mx-2"}/>
                      </div>
                    </PopoverContent>
                  </Popover>
              </div>

            )
          })}
        </>
        }
      </div>
    </div>
  )
}
export default AddFriends
