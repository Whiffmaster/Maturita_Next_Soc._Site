import React, {useCallback, useState} from "react";
import {useUserContext} from "../../utils/UserContext";
import {Users} from "../../../models/User";

const Settings = (props: { icon: any }) => {
  const {user, setUser} = useUserContext()
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>("")
  const [privacy, setPrivacy] = useState<Users["settings"]["privacy"]>()
  const [reqsSend, setReqsSend] = useState<number>(0)
  const [needsAuth, setNeedsAuth] = useState<boolean>(false)
  const [authPass, setAuthPass] = useState<string>("")


  const InputItem = useCallback(({title, value, setValue, needsAuth}: {
    title: string,
    value?: string,
    setValue(e: string): void,
    needsAuth?: boolean
  }) => {
    const [val, setVal] = useState(value ? value : "")

    return (
      <div className="h-[50px] w-5/6 self-center bg-gray-800 px-4 rounded-xl py-3 flex justify-between flex-row">
        <h2 className="text-xl"> {title} </h2>
        <div className="w-1/2 flex flex-row ">
          <input className="rounded-md bg-gray-700 px-3 w-full h-full" value={val} onChange={(e) => {
            setValue(e.target.value)
            setVal(e.target.value)
            needsAuth && e.target.value != "" ? setNeedsAuth(true) : null
          }}/>
        </div>
      </div>
    )
  }, [reqsSend])

  const PrivacyInputItem = ({title, value, setValue, content}: {
    title: string,
    value: string,
    setValue: any,
    content?: Array<string>
  }) => {
    return (
      <div className="h-fit w-full self-center flex justify-between flex-row">
        <h2 className="ml-3 self-center"> {title} </h2>
        <div className="w-1/2 h-[40px] flex flex-row">
          <select
            className="rounded-md outline-none px-3 bg-gray-700 appearance-none border-none w-full self-center h-[30px]"
            value={value} onChange={(e) => {
            setValue(e.target.value)
          }}>
            {content ? content.map((item) => <option className="hover:bg-cyan-700/50" key={item}
                                                     value={item}>{item}</option>) :
              <>
                <option className="hover:bg-cyan-700/50" value="public">public</option>
                <option className="hover:bg-cyan-700/50" value="private">private</option>
                <option className="hover:bg-cyan-700/50" value="friends">friends</option>
              </>}
          </select>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col py-5 space-y-3">

      <InputItem title={"username"} value={username} setValue={setUsername}/>
      <InputItem title={"email"} value={email} setValue={setEmail} needsAuth/>
      <InputItem title={"password"} setValue={setPassword} needsAuth/>
      <div className="h-fit w-5/6 self-center bg-gray-800 px-4 rounded-xl py-3 flex justify-between flex-row">
        <h2 className="self-center text-xl"> privacy </h2>
        <div className="w-2/3 flex flex-col divide-y  ">

          <PrivacyInputItem title={"Profile"} value={privacy.profile}
                            setValue={(e: Users["settings"]["privacy"]["profile"]) => setPrivacy((prev) => {
                              return {...prev, profile: e}
                              }
                            )}/>
          <PrivacyInputItem title={"Posts"} value={privacy.posts ? "public" : "friends"} content={["public", "friends"]}
                            setValue={(e: Users["settings"]["privacy"]["posts"]) => setPrivacy((prev: any) => {
                              return {...prev, posts: e == "public"}
                              }
                            )}/>
        </div>
      </div>

      {user.settings.privacy != privacy || user.name != username || user.email != email || password != "" ?
        <div className="flex flex-col items-center justify-center w-full h-full">
          <button disabled={!needsAuth && authPass == ""}
                  className="w-1/2 self-center border-amber-300 border-4"
                  onClick={() => {
                    if (password == "") return setNeedsAuth(false)
                    if (password != "" && (password.length < 3 || password.length > 20)) return

                    setUser({...user, name:username, email, settings: {privacy: {...user.settings.privacy, ...privacy}}})
/*
                    axios.post("http://localhost:5000/user/update", {
                      _id: data._id,
                      username,
                      email,
                      password: password != "" ? (encrypt(password, config.CRYPT_KEY) as string) : undefined,
                      settings: {
                        privacy
                      },
                      auth: encrypt(authPass, config.CRYPT_KEY)
                    }, {
                      headers: {
                        "authorization": Cookies.get("token")
                      }
                    }).then((res) => {
                      setNeedsAuth(false)
                      setPassword("")
                      setAuthPass("")
                      showSuccess("Settings saved")
                      setReqsSend((prev) => prev + 1)
                    }).catch((err) => {
                      console.log(err)
                    })

 */
                  }}>save
          </button>
          {needsAuth && <input className="" type={"password"} placeholder={"password needed"} value={authPass}
                               onChange={(e) => setAuthPass(e.target.value)}/>}
        </div>
        : null}

    </div>
  )
}

export default Settings