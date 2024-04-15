import {Server} from "socket.io";
import {createServer} from "http"
import express from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: ["uppity-pig-production.up.railway.app", "http://localhost:3000"]
}))
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["uppity-pig-production.up.railway.app", "http://localhost:3000"]
  }
})


export {app, server, io};