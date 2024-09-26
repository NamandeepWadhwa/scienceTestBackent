const supertest = require('supertest');
const app = require('../../../index');

describe('testing sendOtp and verify opt ', () => {

  // sending otp to the email
  let otp="" ;
  test("it should return 200",async()=>{
    const response = await supertest(app).post('/sendOtp').send({email:"test23156@gmail.com"});
    
    expect(response.body.data.otp.length).toBe(6);
    expect(response.statusCode).toBe(200);
    const response2=await supertest(app).post('/sendOtp').send({email:"test23156@gmail.com"});
    expect(response2.statusCode).toBe(200);
    otp = response2.body.data.otp;
    
  })
  // sending otp to the invaild emal, it should return 500
  test('it should return 500', async () => {
    const response = await supertest(app).post('/sendOtp').send({email:"test23156"});
    expect(response.statusCode).toBe(500);
  });
  //sending emapty eamil address 
  test('it should return 400',async()=>{
    const response = await supertest(app).post('/sendOtp').send({email:""});
    expect(response.statusCode).toBe(400);
  });
  //verifying otp
  test('it should return 200', async () => {
    const response3 = await supertest(app)
      .post("/verifyOtp")
      .send({ email: "test23156@gmail.com", otp: otp });
    expect(response3.statusCode).toBe(200);
  });
  // sending invalid otp
  test('it should return 400', async () => {
    const response = await supertest(app)
      .post("/verifyOtp")
      .send({ email: "test23156@gmail.com", otp: "123"});
      expect(response.statusCode).toBe(400);
  });
  // sending email address that is not in the database
  test('it should return 400', async () => {
    const response = await supertest(app)
      .post("/verifyOtp")
      .send({ email: "idontnsjeoreo", otp: "123"});
      expect(response.statusCode).toBe(400);
  });
 

});