const prismaInstance = require("../../prismaInstance");

module.exports = async (userId, cursorId) => {
  try {
    
    const queryOptions = {
      take: 10,
      orderBy: [{ createdAt: "desc" }, { id: "asc" }],
      where: { userId: userId },
    };

   if (cursorId) {
     queryOptions.skip = 1;
     queryOptions.cursor = { id: cursorId };
   }
  


    const comments = await prismaInstance.Comment.findMany(queryOptions);

    return comments;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};
