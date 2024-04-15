import {app, server, io} from "./server";
import * as conv from "./events/endConvEvents";
import * as user from "./events/endUserEvents";
import {checkRoom} from "./ioAds";


io.on('connection', (socket) => {
  const userID = socket.handshake.auth.userID;
  socket.leave(socket.id)
  socket.join(userID);


  socket.on("convEvent", conv.handleEvent);
  socket.on("userEvent", user.handleEvent);
})

setInterval(() => {
  console.log(io.sockets.adapter.rooms.keys())
}, 20000)

app.post("/getFriends", (req, res) => {
  const {friends} = req.body;
  let status: string[] = [];
  friends.forEach((friend: string) => {
    const online = checkRoom(friend)
    if (online) status.push(friend);
  })
  res.send(status);
});

const start = async (): Promise<void> => {
  try {
    server.listen(5000);
    console.log("Server started on port 5000");

  } catch (e) {
    console.log(e);
    console.log("Retrying in 10 seconds");
    setTimeout(start, 10000);
  }
}

void start();