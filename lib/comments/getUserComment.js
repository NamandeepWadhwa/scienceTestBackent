const prismaInstance = require("../../prismaInstance");

module.exports = async (userId, cursorId) => {
  try {
    const queryOptions = {
      take: 10,
      orderBy: [{ createdAt: "desc" }],
      where: { userId: userId },
    };

    if (cursorId) {
      queryOptions.cursor = { id: cursorId };
      queryOptions.skip = 1;
    }

    const comments = await prismaInstance.comments.findMany(queryOptions);
    return comments;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};
