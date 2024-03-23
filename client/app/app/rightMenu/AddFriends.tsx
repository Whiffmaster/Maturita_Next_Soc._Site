import React, {useState} from "react";
import {useUserContext} from "../../utils/UserContext";
import {acceptInvite, searchUser, sentInvite} from "../../actions";
import {useSession} from "next-auth/react";
import {Users} from "../../../models/User";
import {
  Avatar,
  AvatarIcon,
  Button,
  ButtonGroup,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton
} from "@nextui-org/react";
import {BsPersonFillAdd} from "react-icons/bs";
import {ObjectId} from "mongoose";
import {MdDone} from "react-icons/md";
import {VscError} from "react-icons/vsc";
import {useIoContext} from "../../utils/IoContext";


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
      console.log(res)
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
                   className="flex bg-white/10 rounded-md items-center justify-center text-white flex-row h-[50px] shadow-md w-[80%] self-center">
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
                  className={`mx-auto rounded-md self-center w-[40px] h-[40px] hover:bg-black/20 p-2 ${disabled ? "hidden" : ""}`}
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
              <Popover showArrow placement={"top"} className={"w-full"}>
                <PopoverTrigger>
                  <div key={invite._id}
                       className="flex w-[80%] self-center cursor-pointer bg-white/10 rounded-md items-center justify-center text-white flex-row h-[50px] shadow-md">
                    <Avatar
                      icon={<AvatarIcon/>}
                      src={invite.image || ""}
                      classNames={{
                        base: "bg-white/10 mx-auto w-[40px]",
                        icon: "text-black/70"
                      }}
                    />
                    <h2 className=" w-[50%] font-semibold  self-center">{invite.name}</h2>
                  </div>
                </PopoverTrigger>
                <PopoverContent className={"m-0 p-0  bg-black"}>
                  <ButtonGroup>
                    <Button className={"bg-black"} variant="light" color={"success"}><MdDone
                      className={"w-full h-[80%]"} color={"green"} onClick={() => handleInvite(true, invite._id)}/>
                    </Button>
                    <Button className={"bg-black"} variant="light" color={"danger"}><VscError
                      className={"w-full h-[80%]"} color={"red"} onClick={() => handleInvite(false, invite._id)}/>
                    </Button>
                  </ButtonGroup>
                </PopoverContent>
              </Popover>
            )
          })}
        </>
        }
      </div>
    </div>
  )
}
export default AddFriends
