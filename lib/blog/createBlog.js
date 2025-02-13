const prismaInstance = require("../../prismaInstance");

module.exports=async function createBlog(data) {
  try{
    // const blog=await prismaInstance.blog.create({
    //   userId:data.userId,
    //   title:data.title,
    //   content:data.content,
    //   tagas:data.tags
    // });
    console.log(data);
  return;
  }
  catch(error){
    console.log(error);
    throw new Error("Error in creating blog");
  }
}
