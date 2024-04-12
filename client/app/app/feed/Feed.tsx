"use client"

import React, {ReactDOM, useEffect, useRef, useState} from "react";

import {getFeed} from "../../actions";
import {useSession} from "next-auth/react";
import {useFeedContext} from "../../utils/FeedContext";
import {EmptyPost, FeedPost} from "./FeedPost";
import {ScrollShadow} from "@nextui-org/react";
import {Posts} from "../../../models/Post";

export const Feed = ({setActive}: { setActive: any }) => {
  const {feed, setFeed} = useFeedContext()
  const {data} = useSession()


  const loadMore = () => {
    getFeed(data.user.id).then((r: Posts[]) => {
      setFeed(feed => ([...feed, ...r] as Posts[]))
    })

  }


  useEffect(() => {
    if (feed[0]._id as undefined as number == -1) {
      getFeed(data.user.id).then((r: Posts[]) => {
        if (r.length == 0) return
        setFeed(r)
      })
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <ScrollShadow hideScrollBar
                  className={`w-full h-full flex ${feed && feed[0]._id as undefined as number != -1 ? "flex-col" : "items-center"}`}>
      {feed && feed[0]._id as undefined as number != -1 ?
        <div className="w-full h-fit pt-10">
          {feed.map((post, index: number) => {
            return <FeedPost key={index} setFeed={setFeed} post={post} setActive={setActive}/>
          })}
          <button
            className={(feed.length > 1 ? " " : "hidden ") + " w-[30%] ml-[35%] px-2 py-1 h-12 bg-slate-300/50 transition-colors hover:bg-green-300/75 self-center my-4 rounded-xl text-center"}
            onClick={loadMore}>Load more
          </button>
        </div>
        : <EmptyPost/>}
    </ScrollShadow>
  )
    ;
}