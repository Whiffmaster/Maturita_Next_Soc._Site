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
  useEffect(() => {
    getMemory().then(r => {
      if (r) {
        setValue(r)
        handleSearch(r)
        updateMemory()
      }
    })
  }, []);

  const handleSearch = (arg?: string) => {
    const val = arg ? arg : value
    if (val.length === 0) return
    props.setSearch(val)
    if (val.includes("#")) {
      searchPostsByTag(20, val)
        .then(r => {
          console.log(r)
          if (r.length > 0) setSearchFeed(r)
          else toast.error("No results found")
        }).catch(e => {
        toast.error("No results found")
      })
    } else {
      searchPostsByUsername(20, val)
        .then(r => {
          console.log(r)
          if (r.length > 0) setSearchFeed(r)
          else toast.error("No results found")
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
        <Button className={"sm:hidden bg-grad w-[70%] mx-auto"} onClick={() => handleSearch()}>Search</Button>
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