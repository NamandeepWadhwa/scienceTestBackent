const { connect } = require("../..");
const prismaInstance = require("../../prismaInstance");

module.exports=async function createBlog(data) {
  try{
    const blog=await prismaInstance.blog.create({
      data:{
      title:data.title,
      content:data.description,
      tags:data.tags,
      userId:data.userId
      }
  
    });
    console.log(blog);
  return blog;
  }
  catch(error){
    console.log(error);
    throw new Error("Error in creating blog");
  }
}
