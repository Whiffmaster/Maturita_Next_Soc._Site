import React, {Suspense} from "react";
import Page from "./page";
import Loading from "./loading";
import HomePage from "./page";
import {FeedContext} from "../utils/FeedContext";
import {UserContext} from "../utils/UserContext";
import {IoContext} from "../utils/IoContext";

export default function Layout({children}: { children: React.ReactNode; }) {
  return <section>
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
          {children}
        </IoContext>
      </FeedContext>
    </UserContext>
  )
}