const { Server } = require("socket.io");
const jwt=require("jsonwebtoken");


function setUpSocket(server)
{
  const io=new Server(server,{
  cors:"*",
  methods:['GET','POST']
  });
  io.use((socket,next)=>{
    const token=socket.handshake.auth.token;
    if(!token) throw new Error("Unauthorized");
    try{
    const decoded=jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded) throw new Error("Unauthorized");
    socket.user={
      id:decoded.id,
      email:decoded.email
    };
    console.log(socket.user);
    next();
  }
  catch(err){
    console.log(err);
    next(new Error("Eror in token"));
  }

  })
  io.on("connection",(socket)=>{
    // Join chat room
    socket.on("JOIN_CHAT", (chatId) => {
      socket.join(chatId);
      console.log(`User ${socket.user.id} joined chat ${chatId}`);
    });

    // Leave chat room
    socket.on("LEAVE_CHAT", (chatId) => {
      socket.leave(chatId);
      console.log(`User ${socket.user.id} left chat ${chatId}`);
    });

    // Handle disconnect
    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
  
}
module.exports=setUpSocket;
