import React, {Suspense} from "react";
import Page from "./page";


export default function Layout({children}: { children: React.ReactNode; }) {
  return <section className={"overflow-hidden overscroll-none absolute"}>
      <Page/>
  </section>;
}
