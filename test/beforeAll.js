const prismaInstance = require('../prismaInstance');
const createToken = require('../lib/tokens/createToken');
const getUser = require('../lib/user/getUser');
const createUser = require('../lib/user/createUser');
let token="" ;
let user={};


beforeAll( () => {
 return  createUser("testBeforeAll@gmail.com","newTestPassword").then((data)=>{
    user=data;
    token=createToken(user);
    console.log(token);
  }).catch((err)=>{
    console.log(err);
  });
});

afterAll(async () => {
  try{

    await prismaInstance.user.delete({
      where:{
        id:user.id
      }
    });
}
catch(err)
{
  console.log(err);
}

});

module.exports = {
  token,
  user,
};