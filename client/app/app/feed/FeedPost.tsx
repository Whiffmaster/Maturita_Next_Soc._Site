"use client"


import React, {useEffect, useState} from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  ScrollShadow, useDisclosure
} from "@nextui-org/react";
import {useUserContext} from "../../utils/UserContext";
import {Posts} from "../../../models/Post";
import {ObjectId} from "mongoose";
import {FaRegHeart} from "react-icons/fa";
import {createComment, dislikePost, handleFollow, likeComment, likePost, updateMemory} from "../../actions";
import CommentPopover from "./CommentPopover";

export const FeedPost = ({post, setActive, setFeed}: { post: Posts, setActive: any, setFeed: any }) => {
  const {user, setUser} = useUserContext()
  const [isFollowed, setIsFollowed] = useState<boolean>((user.following as ObjectId[]).includes(post.author._id) || user.friends.map((friend) => friend.friend._id).includes(post.author._id))
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleLike = () => {
    if ((user.likes as ObjectId[]).includes(post._id)) {
      console.log("unlike")
      setUser({...user, likes: user.likes.filter((id) => id !== post._id)})
      dislikePost(post._id, user._id)
    } else {
      console.log("like")
      setUser({...user, likes: [...user.likes, post._id]})
      likePost(post._id, user._id)

    }
  }
  const HashtagText = () => {
    let text = post.content
    const segments = text.split(/(\s+)/).map(segment =>
      segment.includes('#') ?
        segment.split(/(#[\w]+)/).map(part =>
          part.startsWith('#') ?
            <Link className={"cursor-pointer"} onClick={()=>{
              updateMemory(part)
              setActive("Search")
            }} key={part}>
              {part}
            </Link> : part
        ) : segment
    );

    return <p>{segments}</p>;
  };

  const handleFollowAction = (targetID: ObjectId, userID: ObjectId, follow: boolean) => {
    if (follow) {
      setUser({
        ...user,
        following: [...user.following, targetID]
      })
    } else {
      setUser({
        ...user,
        following: user.following.filter((follower) => follower !== targetID)
      })
    }
    handleFollow(follow, userID, targetID).then((res) => {
        console.log(res)
      }
    )
  }

  useEffect(() => {
    console.log(user.friends.map((friend) => friend.friend._id).includes(post.author._id))
  }, []);

  return (
    <Card className="w-[80%] max-sm:w-[95%] mx-auto my-4 bg-white/5 ">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={post.author.image || ""}/>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{post.author.name}</h4>
          </div>
        </div>
        <Button
          className={`${isFollowed ? "bg-transparent text-foreground border-default-200" : ""} ${user._id === post.author._id || user.friends.map((friend) => friend.friend._id).includes(post.author._id) ? "hidden" : ""}`}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onClick={() => {
            setIsFollowed(!isFollowed)
            handleFollowAction(post.author._id, user._id, !isFollowed)
          }}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <ScrollShadow className={"max-h-[200px]"}>
          {HashtagText()}
        </ScrollShadow>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{post.author.following.length || 0}</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{post.author.followers.length || 0}</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
        <div className="flex gap-1">
          <Link onClick={onOpen} className={"self-center text-nowrap cursor-pointer text-small"}>
            <p
              className={"text-blue-600"}>{post.comments.length > 0 ? post.comments.length + " Comments" : "Comments"}</p>
          </Link>
        </div>
        <div className={"w-full h-fit mx-2 flex justify-end"}>
          <Button variant={"bordered"} isIconOnly size={"sm"} className={"border-none hover:bg-white/5"}
                  onClick={handleLike}>
            <FaRegHeart
              className={`w-[20px] h-[20px] transition ${(user.likes as ObjectId[]).includes(post._id) ? "text-red-600 " : ""}}`}/>
          </Button>
        </div>
        <CommentPopover isOpen={isOpen} post={post} onOpenChange={onOpenChange} setFeed={setFeed}/>
      </CardFooter>
    </Card>
  )
}


export const EmptyPost = () => {

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <h1 className="text-2xl font-bold text-grad">No posts found</h1>
      <h2 className="text-lg font-semibold text-white/60">Try searching for something else</h2>
    </div>
  )
}