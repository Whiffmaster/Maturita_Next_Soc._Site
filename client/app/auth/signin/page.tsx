"use client"
import {Button, Card, Divider, Input, Link, Table} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {FaDiscord} from "react-icons/fa";
import {getProviders, signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {register} from "../../actions";
import {toast} from "sonner";

const Signin = () => {
  const [active, setActive] = useState(null);
  const {status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == "authenticated") {
      router.replace("/app");
    }
  }, [status]);


  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <>
        <Input type="email" label="Email" variant="bordered" value={email} onValueChange={(e) => setEmail(e)}/>
        <Input type="password" label="Password" maxLength={50} minLength={8} variant="bordered" value={password}
               onValueChange={(e) => setPassword(e)}/>

        <Button className={"bg-white text-black font-bold text-xl hover:bg-opacity-80"}
                onClick={() => signIn("credentials", {
                    redirect: false,
                    callbackUrl: "/app",
                    email: email,
                    password: password
                  }
                ).then((r) => {
                  if (r?.error) {
                    toast.error(r.error, {})
                  }
                })}>Log In</Button>
      </>)
  }
  const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    return (
      <>
        <Input type="email" label="Email" maxLength={35} variant="bordered" value={email}
               onValueChange={(e) => setEmail(e)}/>
        <Input type="text" label="Username" maxLength={20} variant="bordered" className={""} value={username}
               onValueChange={(e) => setUsername(e)}/>
        <Input type="password" label="Password" maxLength={50} variant="bordered" value={password}
               onValueChange={(e) => setPassword(e)}/>
        <Button className={"bg-white text-black font-bold text-xl hover:bg-opacity-80"} onClick={() => {
          register(username, email, password).then((res) => {
            console.log(res)
            if (res) {
              if (res.status == "error") {
                toast.error(res.message, {})
                return
              }
              signIn("credentials", {
                redirect: false,
                callbackUrl: "/app",
                email: email,
                password: password
              }).catch((reason) => console.log(reason))
            }
          }).catch((reason) => {
            console.log(reason)

          })
        }}>Register</Button>
      </>)
  }
  const Landing = () => {
    return (
      <>
        <h1 className={"self-center text-3xl font-bold"}>Sign up</h1>
        <Button onClick={() => setActive("login")}
                className={"bg-zinc-900 border-zinc-700 border-1 text-lg hover:bg-opacity-80"}>Log In</Button>
        <Button onClick={() => setActive("register")}
                className={"bg-zinc-900 border-zinc-700 border-1 text-lg hover:bg-opacity-80"}>Register</Button>
        <Divider/>
        <Button className={"bg-blue-700 text-black font-bold text-xl hover:bg-opacity-80"}
                onClick={() => signIn("discord", {callbackUrl: "/app"})}>Continue with Discord <FaDiscord
          className={"text-black"}/></Button>
      </>)
  }

  return (
    <div className={"flex justify-center items-center w-screen h-screen"}>
      <div className={"flex flex-col w-[300px] gap-6"}>
        {!active ? <Landing/> :
          <>
            <h1 className={"self-center text-3xl font-bold"}>{active == "login" ? "Log in" : "Register"}</h1>
            {active == "login" ? <Login/> : <Register/>}
            <Link underline={"hover"} color={"primary"} className={"self-center cursor-pointer"}
                  onClick={() => setActive(null)}> Go back</Link>
          </>
        }
      </div>
    </div>
  );
}

export default Signin;


