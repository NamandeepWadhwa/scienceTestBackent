const { Server } = require("socket.io");
const jwt=require("jsonwebtoken");
const socketService = require("./service");



function setUpSocket(server) {
  const io = new Server(server, {
    cors: "*",
    methods: ["GET", "POST"],
  });

  socketService.init(io); 

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    
    if (!token) return next(new Error("Unauthorized"));
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      socket.user = {
        id: decoded.id,
        email: decoded.email,
      };
      next();
    } catch (err) {
      return next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket) => {
   
    socket.join(socket.user.id);
    socket.on("JOIN_CHAT", (chatId) => {
      socket.join(chatId);
      socket.join(socket.user.id);
      console.log(`User ${socket.user.id} joined chat ${chatId}`);
    });

    socket.on("LEAVE_CHAT", (chatId) => {
      socket.leave(chatId);
      console.log(`User ${socket.user.id} left chat ${chatId}`);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
}

module.exports = setUpSocket;