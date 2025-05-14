const sendMessage = require("../../lib/messages/createMessage");
const getChat = require("../../lib/messages/getChat");
const socketService = require("../../service");

module.exports = async (req, res) => {
  try {
    const { message, chatId } = req.body;
    const userId = req.user.id;

    if (!message || !chatId) {
      return res.status(400).json({ message: "Bad Request" });
    }

    const chat = await getChat(chatId);
    if (!chat) {
      return res.status(400).json({ message: "Chat not found" });
    }

    const io = socketService.getIO();
    if (!io) {
      return res.status(400).json({ message: "Socket not initialized" });
    }

    const messageData = await sendMessage(userId, chatId, message);
    

    const roomSockets = io.sockets.adapter.rooms.get(chatId) || new Set();
    const activeUsers = new Set();

    for (const socketId of roomSockets) {
      const socket = io.sockets.sockets.get(socketId);
      if (socket?.user?.id) {
        activeUsers.add(socket.user.id);
        if (socket.user.id !== userId) {
          socket.emit("NEW_MESSAGE", messageData);
        }
      }
    }

    for (const participant of chat.participants) {
      if (participant.id !== userId && !activeUsers.has(participant.id)) {
        io.to(participant.id).emit("UNREAD_MESSAGE", {
          chatId,
          message: messageData,
        });
      }
    }

    return res.status(200).json(messageData);
  } catch (err) {
    console.error("sendMessage error:", err);
    return res.status(500).json({ message: "Error occurred" });
  }
};
