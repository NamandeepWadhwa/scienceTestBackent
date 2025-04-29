const { Server } = require("socket.io");


function setUpSocket(server)
{
  const io=new Server(server,{
  cors:"*",
  methods:['GET','POST']
  });
  io.on("connection",(socket)=>{
    console.log(socket);
    console.log(socket.id);
  })
}
module.exports=setUpSocket;
