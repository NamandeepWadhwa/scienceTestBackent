const prismaInstance = require("../../prismaInstance");
module.exports=async(chatId,cursorId)=>{
  try{
    let queryOptions={};
    queryOptions.where={chatId:chatId};
    queryOptions.orderBy={createdAt:'desc'};
    queryOptions.take=10;
    if(cursorId)
    {
      queryOptions.cursor={id:cursorId};
      queryOptions.skip=1;
    }
    const messages = await prismaInstance.Message.findMany(queryOptions);
    return messages;
  }
  catch(err)
  {
    console.error(err);
    throw new Error("Error in getting messages");
  }

}