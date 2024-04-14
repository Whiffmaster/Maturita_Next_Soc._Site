import {
  Avatar,
  Button, Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Textarea, useDisclosure
} from "@nextui-org/react";
import {FaRegHeart} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useUserContext} from "../../utils/UserContext";
import {createComment, likeComment, unlikeComment} from "../../actions";
import {Posts} from "../../../models/Post";

const CommentPopover = ({isOpen, onOpenChange, post, setFeed}) => {
  const {user, setUser} = useUserContext()
  const [commentContent, setCommentContent] = useState<string>("")
  const [comments, setComments] = useState([])


  useEffect(() => {
    console.log(post.comments)
  }, [post.comments]);


  const sentComment = () => {
    createComment(commentContent, user._id, post._id).then((res) => {
      setCommentContent("")
      setFeed((feed: Posts[]) => {
        let newFeed = feed
        newFeed.map((p: Posts) => {
          if (p._id === post._id) {
            (p.comments as { author: any, likes: string[], content: any }[]).push({
              author: user,
              likes: [],
              content: commentContent
            })
          }
        })
        return newFeed
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  const handleLikeComment = (comment) => {
    const updateCommentLikes = (comments, updateFn) => comments.map(c => {
      if (c._id === comment._id) {
        return { ...c, likes: updateFn(c.likes) };
      }
      return c;
    });

    const updateFn = comment.likes.includes(user._id) ?
      (likes) => likes.filter(id => id !== user._id) :
      (likes) => [...likes, user._id];

    const action = comment.likes.includes(user._id) ? unlikeComment : likeComment;

    action(comment._id, user._id).then(() => {
      setFeed(feed => feed.map(p => {
        if (p._id === post._id) {
          return { ...p, comments: updateCommentLikes(p.comments, updateFn) };
        }
        return p;
      }));
    }).catch((err) => {
      console.log(err);
    });
  };


  return (
    <Modal className={"h-[600px]"} isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex text-grad font-bold text-xl flex-col gap-1">Comments</ModalHeader>
            <ModalBody>
              <ScrollShadow hideScrollBar>
                <div className="flex flex-col  gap-3">
                  <div className={"flex flex-col"}>
                    <Textarea className={""} variant={"bordered"} maxLength={100} minLength={5}
                              onValueChange={setCommentContent}
                              value={commentContent}
                              placeholder={"New comment"}/>
                    <Button size={"sm"} className={"w-[40px] self-end mt-5"} color="default" onClick={sentComment}>
                      Send
                    </Button>
                  </div>
                  <div className="flex w-[95%] mx-auto h-fit flex-col gap-2">
                    {post.comments.map((comment, index) => (
                      <div key={index}
                           className="relative cursor-default flex hover:bg-white/10 m-1 rounded-2xl  w-full gap-5 group">
                        <div className={"m-2"}>
                          <Avatar isBordered radius="full" size="md" src={comment.author.image || ""}/>
                        </div>
                        <div className="flex flex-col w-full gap-1 items-start justify-center">
                          <h4
                            className="text-small font-semibold leading-none text-default-600">{comment.author.name}</h4>
                          <p className="text-default-400 text-small">{comment.content}</p>
                        </div>
                        <div
                          className={`absolute inset-y-0 right-0 flex items-center pr-3 opacity-0 group-hover:opacity-100`}>
                          <FaRegHeart
                            className={`cursor-pointer ${comment.likes.includes(user._id) ? "text-red-600" : ""} ${comment.author._id == user._id ? "hidden" : ""}`}
                            onClick={() => handleLikeComment(comment)}/>
                        </div>
                      </div>
                    ))}
                    {post.comments.length === 0 && (
                      <div className="flex flex-col gap-3 items-center self-center w-full h-[300px] justify-center">
                        <h1 className="text-2xl font-bold text-grad">No comments found</h1>
                        <h2 className="text-lg font-semibold text-white/60">Be the first to comment</h2>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollShadow>
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}


export default CommentPopover