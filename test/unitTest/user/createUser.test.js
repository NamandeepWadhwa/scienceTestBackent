const supertest = require('supertest');
const app = require('../../../index');
let token='';

describe('testing for creating user',()=>{
  // not sending eamil address
  test('it should return 400',async()=>{
    const response = await supertest(app).post('/createUser');
    expect(response.statusCode).toBe(400);
  })
  // not sending password but sending eamil address
  test('it should return 400',async()=>{
    const response = await supertest(app).post('/createUser').send({email:"test23156@gmail.com"});
    expect(response.statusCode).toBe(400);
  });
  //sending email but not password
  test('it should return 400',async()=>{
    const response = await supertest(app).post('/createUser').send({password:"Hakaishin@1"});
    expect(response.statusCode).toBe(400);
  });
  // sending valid eamil and password
  test('it should return 200',async()=>{
    const response = await supertest(app).post('/createUser').send({email:"test123@gmail.com",password:"testingPassword"});
    token=response.body.token;
    expect(response.statusCode).toBe(200);
  });
  // sending email that is already in the database
  test('it should return 400',async()=>{
    const response = await supertest(app).post('/createUser').send({email:"test123@gmail.com",password:"testingPassword"});
    expect(response.statusCode).toBe(400);
  });
  test('deleting existing user',async()=>{
    const response = await supertest(app)
      .delete("/deleteUser")
      .set("Authorization", `jwt ${token}`);
      expect(response.statusCode).toBe(200);
  })
  
})