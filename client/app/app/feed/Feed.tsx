"use client"

import React, {ReactDOM, useEffect, useRef, useState} from "react";

import {getFeed} from "../../actions";
import {useSession} from "next-auth/react";
import {useFeedContext} from "../../utils/FeedContext";
import {EmptyPost, FeedPost} from "./FeedPost";
import {Button, ScrollShadow} from "@nextui-org/react";
import {Posts} from "../../../models/Post";
import {toast} from "sonner";

export const Feed = ({setActive}: { setActive: any }) => {
  const {feed, setFeed} = useFeedContext()
  const {data} = useSession()


  const loadMore = () => {
    getFeed(data.user.id, feed.map((f)=>f._id)).then((r: Posts[]) => {
      if (r.length == 0) {
        toast.info("No more posts to load")
      }
      setFeed(feed => ([...feed, ...r] as Posts[]))
    })

  }


  useEffect(() => {
    if (feed[0]._id as undefined as number == -1) {
      getFeed(data.user.id).then((r: Posts[]) => {
        if (r.length == 0) return
        console.log(r)
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
        <div className="w-full h-fit flex flex-col">
          {feed.map((post, index: number) => {
            return <FeedPost key={index} setFeed={setFeed} post={post} setActive={setActive}/>
          })}
          <Button
            className={`${feed.length <20 ?"hidden":""} w-[30%] mx-auto bg-white/5 hover:bg-grad transition-all self-center text-center`}
            onClick={loadMore}>Load more
          </Button>
        </div>
        : <EmptyPost/>}
    </ScrollShadow>
  )
    ;
}