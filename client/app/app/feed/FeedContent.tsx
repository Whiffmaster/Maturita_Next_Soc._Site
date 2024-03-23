"use client"

import {Posts} from "../../../models/Post";
import {useFeedContext} from "../../utils/FeedContext";
import {cookies} from "next/headers";
import {searchPosts} from "../../actions";
import {toast} from "sonner";

export const FeedPost = ({post, setActive, search, setSearch}: {
  post: Posts,
  setActive: any,
  search: string,
  setSearch: any
}) => {
  const date = new Date(Number(post.date)).toLocaleDateString()
  const {feed, setFeed} = useFeedContext()

  if (feed[0]._id == "-1") return <Empty content={post.content}/>

  const handleClick = (tag: string) => {
    cookies().get("memory") ? cookies().set("memory", JSON.stringify([...JSON.parse(cookies().get("memory")!.value), tag])) :
      cookies().set("memory", JSON.stringify([tag]))

    searchPosts(20, tag).then(r => {
      setActive("Feed")
      console.log(r)
      if (r.length > 0){
        setFeed(r)
        setSearch(tag)
      }
    }).catch(e => {
      toast.error("No results found")
    })
  }
  return (
    <div/>
  )
  /*
  return (
    <div>
      <div className={"w-4/5 h-20 flex flex-row mx-auto mt-6"}>
        <h2 className={"mt-8 ml-4 text-md cursor-pointer"}>{(post.author as User).name}</h2>
        <h3 className={"my-auto ml-auto text-sm"}>{date}</h3>
      </div>
      <div className={"relative w-4/5 h-full flex flex-col mx-auto mb-8"}>
        <p className={"break-words"}>{post.content}</p>
        <div className={"flex flex-row w-full h-fit"}>
          {post.tags ? post.tags.map((tag) => <h4
            key={tag}
            onClick={() => handleClick(tag)}
            className={"my-4 mx-1 cursor-pointer hover:bg-zinc-400 bg-zinc-300 shadow-inner  rounded-xl w-fit h-fit px-1 py-0.5"}>{tag}</h4>) : null}
        </div>
      </div>
      <FeedPost post={post}/>
      <div className={"relative h-1.5 w-[76%] mt-2 ml-[11%] self-center bg-slate-400 rounded-full"}></div>
    </div>
  )
   */
}

const Empty = ({content}: { content: string }) => {
  return (
    <div className={"w-full h-full flex"}>
      <h2 className={"self-center mx-auto"}>{content}</h2>
    </div>
  )
}