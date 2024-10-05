const supertest = require('supertest');
const app = require('../../../index');
const getUser = require('../../../lib/user/getUser');
const createToken = require('../../../lib/tokens/createToken');


describe('testing for creating profile',()=>{

  let token="";
  // creating user and getting token
  test('it should return 200',async()=>{
    const response=await supertest(app).post('/createUser').send({email:"testingProfile@gmail.com",password:"testingProfile"});
   
 if(response.statusCode===500 || response.statusCode==400){
    const user = await getUser("testingProfile@gmail.com");
    token = createToken(user);

 }
 else{
  token=response.body.token;
 }


  });
  



  
  // sending unauthenticated request
  test('it should return 401',async()=>{
    const response = await supertest(app).post('/createProfile');
    expect(response.statusCode).toBe(401);
  });
  // sending authenticated request but no data
  test('it shoud return 400',async()=>{
    const response = await supertest(app).post('/createProfile').set('Authorization',`jwt ${token}`).send({
      name:"",
      imageUrl:""
    });
    expect(response.statusCode).toBe(400);
  })
  // sending authenticated request with data
  test('it should return 200',async()=>{
    const response = await supertest(app).post('/createProfile').set('Authorization',`jwt ${token}`).send({
      name:"test",
      imageUrl:"test"
    });
    expect(response.statusCode).toBe(200 || 400);
  })
  // updateing profile unatuhticated request
  test('it should return 401',async()=>{
    const response = await supertest(app).patch('/updateProfile');
    expect(response.statusCode).toBe(401);
  });
  // updating profile with no data
  test('it should return 400',async()=>{
    const response = await supertest(app).patch('/updateProfile').set('Authorization',`jwt ${token}`).send({
      name:"",
      imageUrl:""
    });
    expect(response.statusCode).toBe(400);
  });
  // updating profile with data
  test('it should return 200',async()=>{
    const response = await supertest(app).patch('/updateProfile').set('Authorization',`jwt ${token}`).send({
      name:"test1",
      imageUrl:"tes1"
    });
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.responseData.userProfile.name).toBe("test1");
    expect(response.body.responseData.userProfile.imageUrl).toBe("tes1");
  });
  test('Deleting the user',async()=>{
    console.log(token);
    const response=await supertest(app).delete('/deleteProfile').set('Authorization',`jwt ${token}`);
    expect(response.statusCode).toBe(200);
  })

});
