"use server"

import {ObjectId} from "mongoose";
import {cookies} from "next/headers";
import User, {Users} from "../models/User";
import Post, {Posts} from "../models/Post";
import Conversation from "../models/Conversation";
import Comment from "../models/Comment";

const getFeed = async (_id: ObjectId | string) => {
  const user = await User.findById(_id).populate("friends.friend", "name image").populate("friends.conversation").exec()
  if (user) {
    const friends = user.friends.map((friend) => friend.friend._id)
    const posts = await Post.find({
      author: {$in: [user.following, friends]}
    }).populate("author", "name image following followers")
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "name image"
        }
      })
      .exec();
    if (posts) {
      return JSON.parse(JSON.stringify(posts))
    }
  }
  throw new Error("Feed not found")
}
const searchPostsByUsername = async (amount: number, searchString: string) => {
  const user = await User.findOne({name: {$regex: searchString}}).exec()
  const posts = await Post.find({author: user._id}).limit(amount).populate("author", "name image following followers")
    .populate({
      path: "comments",
      populate: {
        path: "author",
        select: "name image"
      }
    })
    .exec();
  if (posts) {
    return JSON.parse(JSON.stringify(posts))
  }
}
const searchPostsByTag = async (amount: number, searchString: string) => {
  const posts = await Post.find({tags: {$regex: searchString}}).populate("author", "name image following followers")
    .populate({
      path: "comments",
      populate: {
        path: "author",
        select: "name image"
      }
    })
    .limit(amount).exec()
  if (posts) {
    return JSON.parse(JSON.stringify(posts))
  }

}

const sentPost = async (author: ObjectId, content: string, tags: string[], visibility: string) => {
  Post.create({author, content, tags, visibility}).then((res) => {
    return {status: "ok", message: "Post sent"}
  }).catch((e) => {
    throw new Error("Post not sent")
  })
}
const getUser = async (id: string): Promise<Users> => {
  const user = await User.findById(id).populate("invites", ["name", "image"]).populate({
    path: 'friends.friend',
    select: 'name image'
  }).populate({
    path: 'friends.conversation',
  }).exec()
  if (user)
    return JSON.parse(JSON.stringify(user))

  throw new Error("User not found")
}

const updateMemory = async (val: string) => {
  const memory = await getMemory()
  memory && memory.length > 0 ? cookies().set("memory", JSON.stringify([...memory, val])) :
    cookies().set("memory", JSON.stringify([val]))
  return {status: "ok", message: "Memory updated"}
}
const getMemory = async (): Promise<[] | string[]> => {
  return cookies().get("memory") ? JSON.parse(cookies().get("memory")!.value) : []
}

const searchUser = async (searchString: string, userID: string) => {
  const users = await User.find({
    name: {$regex: searchString},
    _id: {$ne: userID}
  }).select(["_id", "name", "image"]).limit(5)
  if (users) {
    return JSON.parse(JSON.stringify(users))
  }
  throw new Error("User not found")
}

const acceptInvite = async (accept: boolean, inviterID: string, userID: string) => {

  const user = await User.findById(userID)
  const inviter = await User.findById(inviterID)
  if (user) {
    if (accept) {
      const conv = await Conversation.create({members: [userID, inviterID]})
      user.friends.push({friend: inviterID, conversation: conv._id})
      inviter.friends.push({friend: userID, conversation: conv._id})

    }
    user.invites = user.invites.filter((invite) => invite._id != inviterID)
    inviter.invitesSent = inviter.invitesSent.filter((invite) => invite != userID)
    await user.save()
    await inviter.save()
  }
  return {status: "ok", message: "Invite " + (accept ? "accepted" : "rejected")}
}

const sentInvite = async (inviteeID: string, userID: string) => {
  const user = await User.findById(userID).exec()
  const invitee = await User.findById(inviteeID).exec()
  if (user && invitee) {
    user.invitesSent.push(inviteeID)
    invitee.invites.push(userID)
    await user.save()
    await invitee.save()
    return {status: "ok", message: "Invite sent"}
  }
  throw new Error("Invite failed")
}

const register = async (username: string, email: string, password: string) => {
  const user = await User.create({name: username, email, password})
  if (user) {
    return {status: "ok", message: "User created"}
  }
  throw new Error("User not created")
}
const likePost = async (postID: ObjectId, userID: ObjectId) => {
  const post = await Post.findById(postID)
  const user = await User.findById(userID)
  if (post && user) {
    post.likes.push(user._id)
    user.likes.push(post._id)
    await post.save()
    await user.save()
    return {status: "ok", message: "Post liked"}
  }
}


const dislikePost = async (postID: ObjectId, userID: ObjectId) => {
  const post = await Post.findById(postID).exec()
  const user = await User.findById(userID).exec()
  if (post && user) {
    user.likes = user.likes.filter((id) => !id.equals(post._id));
    post.likes = post.likes.filter((id) => !id.equals(user._id));

    await post.save()
    await user.save()
    return {status: "ok", message: "Post disliked"}
  }
}
const createComment = async (content: string, userID: ObjectId, postID: ObjectId) => {
  const user = await User.findById(userID).exec()
  const post = await Post.findById(postID).exec()
  if (user && post) {
    const comment = await Comment.create({author: user._id, content})
    post.comments.push(comment._id)
    await post.save()
    return {status: "ok", message: "Comment created"}
  }
}
const likeComment = async (commentID: ObjectId, userID: ObjectId) => {
  const comment = await Comment.findById(commentID).exec()
  const user = await User.findById(userID).exec()
  if (comment && user) {
    console.log(comment._id, user._id)
    comment.likes.push(user._id)
    await comment.save()
    return {status: "ok", message: "Comment liked"}
  }
}

const getActiveFriends = async (friends: string[]):Promise<any[]> => {
  const res = await fetch("http://localhost:5000/getFriends", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({friends})
  })
  return await res.json()
}


export {
  getActiveFriends,
  getFeed,
  searchPostsByTag,
  searchPostsByUsername,
  sentPost,
  updateMemory,
  getMemory,
  getUser,
  searchUser,
  acceptInvite,
  sentInvite,
  register,
  likePost,
  dislikePost,
  createComment,
  likeComment
}