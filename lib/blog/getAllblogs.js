const prismaInstance = require("../../prismaInstance");

module.exports = async function getBlogs(
  latest = "newest",
  byUpvotes = "true",
  cursorId = null,
  tag = null
) {
  
  try {
    const queryOptions = {
      take: 10,
      orderBy:
      [
        { upvotes: byUpvotes === "true" ? "desc" : "asc" },
        { createdAt: latest === "newest" ? "desc" : "asc" },
        
    ],
      where: tag ? { tags: { has: tag } } : {},
      select:{
        id:true,
        title:true,
        tags:true,
        createdAt:true,
        upvotes:true,
        userId:true,
        
      },
    };

    if (cursorId) {
      queryOptions.skip = 1;
      queryOptions.cursor = { id: cursorId };
    }

    const blogs = await prismaInstance.Blog.findMany(queryOptions);
    return blogs;
  } catch (error) {
    console.error(error);
    throw new Error("Error in getting blogs");
  }
};
