const supertest = require('supertest');
const app = require('../../../index');

describe('creating an auth user which does not require any password',()=>{
  // not sending eamil address
  test('', async () =>{
    const response = await supertest(app).post("/createAuthUser");
    expect(response.statusCode).toBe(400);
  })
  // sending  valid email address
  test('', async () =>{
    const response = await supertest(app).post("/createAuthUser").send({email:"testAuthUser@gmail.com"});
    expect(response.statusCode).toBe(200);
  });
  // sending email that is already in the database
  test('', async () =>{
    const response = await supertest(app).post("/createAuthUser").send({email:"testAuthUser@gmail.com"});
    expect(response.statusCode).toBe(400);
  });
})