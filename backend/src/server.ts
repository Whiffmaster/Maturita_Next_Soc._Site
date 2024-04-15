import {Server} from "socket.io";
import {createServer} from "http"
import express from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin:['http://localhost:3000', "maturita.railway.internal","https://maturita.railway.internal", "https://maturita-production.up.railway.app"],
  credentials: true
}));
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin:['http://localhost:3000', "maturita.railway.internal","https://maturita.railway.internal","https://maturita-production.up.railway.app"],
    credentials: true
  }
})


export {app, server, io};