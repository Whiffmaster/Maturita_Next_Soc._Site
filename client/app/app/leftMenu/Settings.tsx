import React, {useCallback, useEffect, useState} from "react";
import {useUserContext} from "../../utils/UserContext";
import {Users} from "../../../models/User";
import {Button, Card, CardBody, Divider, Input, Select, SelectItem} from "@nextui-org/react";
import {updateSettings} from "../../actions";

const Settings = () => {
  const {user, setUser} = useUserContext()
  const [username, setUsername] = useState<string>(user.name)
  const [privacy, setPrivacy] = useState<Users["settings"]["privacy"]>(user.settings.privacy)
  const [change, setChange] = useState<boolean>(false)
  const postOptions = ["public", "friends"]
  const profileOptions = ["public", "private", "friends"]

  useEffect(() => {
      setChange(user.settings.privacy != privacy || user.name != username)
  }, [privacy,username]);


  if (!privacy) return null

  return (
    <div className="w-full max-sm:w-[80%] mx-auto h-full flex flex-col py-5 space-y-3">
      <h2 className="self-center mt-5 text-xl text-grad font-semibold"> user </h2>

      <Input className={"mb-10"} value={username} label={"Username"} variant={"bordered"} onValueChange={e => {
        setUsername(e)
      }}/>
      <h2 className="self-center text-xl text-grad font-semibold"> privacy </h2>
      <Select label={"Posts"} variant={"bordered"}
              className={"my-5"}
              disallowEmptySelection
              onChange={e => setPrivacy({...privacy, posts: e.target.value as "public" | "friends"})}
              selectedKeys={[privacy.posts]}>
        {postOptions.map((item) =>
          <SelectItem className={""} key={item}
                      value={item}>{item}</SelectItem>
        )}
      </Select>
      <Select label={"Profile"} variant={"bordered"}
              className={"my-5"}
              disallowEmptySelection
              selectedKeys={[privacy.profile]}
              onChange={e => setPrivacy({...privacy, profile: e.target.value as "public" | "private" | "friends"})}>
        {profileOptions.map((item) =>
          <SelectItem className={""} key={item}
                      value={item}>{item}</SelectItem>
        )}
      </Select>

      {change &&
          <Button
              className={"w-[50%] self-center font-semibold bg-grad border-none transition rounded-full drop-shadow-lg"}
              onClick={() => {
                setChange(false)
                setUser({
                  ...user,
                  name: username,
                  settings: {privacy: {...user.settings.privacy, ...privacy}}
                })

                updateSettings(user._id, {name: username, settings: {privacy: privacy}})
              }}>save
          </Button>
      }

    </div>
  )
}

export default Settings