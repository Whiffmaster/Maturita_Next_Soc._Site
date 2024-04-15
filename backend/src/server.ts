import {Server} from "socket.io";
import {createServer} from "http"
import express from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: "https://maturita-production.up.railway.app",
  methods: ["GET", "POST"],
  credentials: true
}));
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://maturita-production.up.railway.app",
    methods: ["GET", "POST"],
    credentials: true
  }
})


export {app, server, io};