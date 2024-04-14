import React, {Suspense} from "react";
import HomePage from "./page";
import {FeedContext} from "../utils/FeedContext";
import {UserContext} from "../utils/UserContext";
import {IoContext} from "../utils/IoContext";
import {ChatContext} from "../utils/ChatContext";

export default function Layout({children}: { children: React.ReactNode; }) {
  return <section className={"overflow-hidden overscroll-none absolute"}>
    <Contexts>
      <HomePage/>
    </Contexts>
  </section>;
}

const Contexts = ({children}: { children: React.ReactNode }) => {
  return (
    <UserContext>
      <FeedContext>
        <IoContext>
          <ChatContext>
          {children}
          </ChatContext>
        </IoContext>
      </FeedContext>
    </UserContext>
  )
}