"use client"
import {useEffect} from "react";
import Loading from "./app/loading";

export default function Home() {

  useEffect(() => {
    window.location.href = "/auth/signin";
  }, []);

  return (
    <Loading/>
  );
}
