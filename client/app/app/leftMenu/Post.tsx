"use client"
import {useEffect, useState} from "react";
import {Button, ButtonGroup, Switch, Textarea} from "@nextui-org/react";
import {toast} from "sonner";
import {sentPost} from "../../actions";
import {useSession} from "next-auth/react";
import {useUserContext} from "../../utils/UserContext";


const Post = () => {
  const [content, setContent] = useState<string>("")
  const [tags, setTags] = useState<string>("")
  const [isPublic, setIsPublic] = useState<string>("")
  const {user, setUser} = useUserContext()
  const {data} = useSession()

  useEffect(() => {
    setIsPublic(user.settings.privacy.posts)
    console.log()
  }, []);

  const post = () => {
    let splitTags: Array<string> = []
    tags.split(" ").forEach((tag, index) => {
      if (tag[0] !== "#") {
        splitTags[index] = "#" + tag
      } else {
        splitTags[index] = tag
      }
    })
    splitTags = splitTags.filter((tag) => tag.length > 3)
    sentPost(user._id, content, splitTags, isPublic).then(
      (res) => {
        console.log(res)
        setContent("")
        setTags("")
        toast.success("Post sent")
      }
    ).catch((err) => {
      toast.error("Post failed")
    })
  }

  return (
    <div className={"w-full max-sm:w-[90%] max-sm:py-5 h-fit mx-auto self-center flex flex-col"}>
      <Textarea
        className={"w-full  text-white h-fit mb-10"}
        variant="bordered"
        size={"lg"}
        placeholder="There is always something to say" value={content} maxLength={350} minLength={30}
        onValueChange={setContent}/>

      <div className={"flex flex-row w-full justify-around"}>
        <ButtonGroup>
          <Button onClick={()=>setIsPublic("friends")} className={isPublic=="friends"? "bg-grad":"bg-white/10"}>Friends</Button>
          <Button onClick={()=>setIsPublic("public")} className={isPublic=="public"? "bg-grad":"bg-white/10"}>Public</Button>
        </ButtonGroup>
        <Button variant={"ghost"} className={"bg-grad border-none transition font-bold rounded-full drop-shadow-lg"}
                onClick={post}>Post</Button>
      </div>
    </div>
  )
}

export default Post
