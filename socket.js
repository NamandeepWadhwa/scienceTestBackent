const { Server } = require("socket.io");
const jwt=require("jsonwebtoken");
const { emit } = require(".");
const { hashEmail } = require("./lib/hashing/hash");


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
    
    console.log(socket.id);
  })
}
module.exports=setUpSocket;
