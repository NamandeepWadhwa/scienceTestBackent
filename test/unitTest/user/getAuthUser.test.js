const supertest = require("supertest");
const app = require("../../../index");
let token = "";
describe("getting the auth uses",()=>{
  test("getting unregistered auth user it should create a new user and return status code 201",async()=>{
    const response=await supertest(app).post("/getAuthUser").send({email:"testing@gmal.com"});
    token=response.body.token;
   
    expect(response.statusCode).toBe(201);
  });

  test("getting registered user it should return the staus 200", async () => {
    const response = await supertest(app)
      .post("/getAuthUser")
      .send({ email: "testing@gmal.com" });
    token = response.body.token;
    expect(response.statusCode).toBe(200);
  });

  test("not sending the email it should return the status 400", async () => {
    const response = await supertest(app)
      .post("/getAuthUser")
    

    expect(response.statusCode).toBe(400);
  });

  test("deleting existing user", async () => {
    const response = await supertest(app)
      .delete("/deleteUser")
      .set("Authorization", `jwt ${token}`);
    expect(response.statusCode).toBe(200);
  });
})