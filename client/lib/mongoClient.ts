// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import {MongoClient} from "mongodb"
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise: Promise<MongoClient>
mongoose.connect(uri, options).then(() => console.log("Mongoose connected to MongoDB"))

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise