"use client"
import {Button, Card, Divider, Input, Link, Table} from "@nextui-org/react";
import {white} from "next/dist/lib/picocolors";
import React, {useEffect, useState} from "react";
import {FaArrowLeftLong} from "react-icons/fa6";
import {FaDiscord} from "react-icons/fa";
import {getProviders, signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {log} from "next/dist/server/typescript/utils";
import User from "../../../models/User";
import {register} from "../../actions";

const signin = () => {
  const [active, setActive] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const {status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == "authenticated") {
      router.replace("/app");
    }
  }, [status]);


  const Login = () => {
    return (
      <>
        <Input type="email" label="Email" variant="bordered"/>
        <Input type="password" label="Password" maxLength={50} minLength={8} variant="bordered" className={""}/>

        <Button className={"bg-white text-black font-bold text-xl hover:bg-opacity-80"}
                onClick={() => signIn("credentials", {callbackUrl: "/app"}, {
                  email,
                  password
                }).catch((reason) => log(reason))}>Log In</Button>
      </>)
  }
  const Register = () => {
    return (
      <>
        <Input type="email" label="Email" maxLength={25} minLength={4} variant="bordered" className={""}/>
        <Input type="text" label="Username" maxLength={12} variant="bordered" className={""}/>
        <Input type="password" label="Password" maxLength={50} minLength={8} variant="bordered" className={""}/>
        <Button className={"bg-white text-black font-bold text-xl hover:bg-opacity-80"} onClick={() => {
          register(username, email, password).then((res) => {
            if (res) {
              signIn("credentials", {callbackUrl: "/app"}, {
                email,
                password
              }).catch((reason) => log(reason))
            }
          }).catch((reason) => log(reason))
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

export default signin;


