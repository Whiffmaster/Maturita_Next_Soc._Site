"use client"
import React, {useEffect, useState} from "react";
import {FaHashtag, FaUserCircle} from "react-icons/fa";
import {Button, Input, ScrollShadow} from "@nextui-org/react";
import {useFeedContext} from "../../utils/FeedContext";
import {getMemory, searchPostsByTag, searchPostsByUsername, updateMemory} from "../../actions";
import {toast} from "sonner";
import Post, {Posts} from "../../../models/Post";
import {FeedPost} from "../feed/FeedPost";
import {BsSearch} from "react-icons/bs";


const SearchContent = (props: { setActive: any, search: string, setSearch: any }) => {

  const [value, setValue] = useState<string>("")
  const [searchFeed, setSearchFeed] = useState<Posts[]>([])
  const memory = []

  useEffect(() => {
    getMemory().then(r => {
      memory.push(r)
    })
  }, []);

  const handleSearch = (arg?: string) => {
    const val = arg ? arg : value
    if (val.length === 0) return
    props.setSearch(val)
    updateMemory(val).then(
      r => {
        console.log(r)
      }
    )
    if (val.includes("#")) {
      searchPostsByTag(20, val)
        .then(r => {
          console.log(r)
          if (r.length > 0) setSearchFeed(r)
        }).catch(e => {
        toast.error("No results found")
      })
    } else {
      searchPostsByUsername(20, val)
        .then(r => {
          console.log(r)
          if (r.length > 0) setSearchFeed(r)
        }).catch(e => {
        toast.error("No results found")
      })
    }
  }

    return (
      <div className="flex row h-full w-full">
        <div className="relative flex flex-col h-full w-full mx-auto">
          <Input
            className={"w-[90%] mx-auto py-4"}
            placeholder="for users, or #Tags"
            label="Search"
            variant="bordered"
            onKeyDown={(e) => {
              if (e.key === "Enter" && value.length > 3 && value.length < 20) handleSearch()
            }}
            value={value} onChange={(e) => {
            setValue(e.target.value)
          }}/>
          <Button className={"sm:hidden bg-grad w-[70%] mx-auto"} onClick={()=>handleSearch()}>Search</Button>
          {memory.length > 0 ? memory.reverse().slice(0, 5).map((value, index) =>
            <div
              key={index}
              className={"cursor-pointer my-[2px] text-sm hover:underline"}
              onClick={() => handleSearch(value as string)}>{(value as string).includes("#") ?
              <div className="flex flex-row"><FaHashtag size={20}/><h4
                className="mx-2">{(value as string).replace("#", "")}</h4></div> :
              <div className="flex flex-row"><FaUserCircle size={20}/><h4
                className="mx-2 text-md">{value as string}</h4>
              </div>}</div>
          ) : null
          }
          <ScrollShadow hideScrollBar>
            {searchFeed.length > 0 ? searchFeed.map((post, index) => {
              return <FeedPost key={index} post={post} setActive={props.setActive} setFeed={setSearchFeed}/>
            }) : null}
          </ScrollShadow>
        </div>
      </div>
    )
  }

  export default SearchContent