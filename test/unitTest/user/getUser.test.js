const supertest = require("supertest");
const app = require("../../../index");
let token="";

describe("testing the get user for normal email and password",()=>{
  test("creating a user and it should return 200", async () => {
    const response = await supertest(app)
      .post("/createUser")
      .send({ email: "test123@gmail.com", password: "testingPassword" });
    token = response.body.token;
    expect(response.statusCode).toBe(200);
  });
    test(
      "getting user without with wrong password it should return 400",
      async () => {
        const response = await supertest(app)
          .post("/getUser")
          .send({ email: "test123@gmail.com", password: "jhluoure" });
        expect(response.statusCode).toBe(400);
      }
    );
    test("not sending andy eamil it should return with status 400",async()=>{
      const response=await await supertest(app).post("/getUser").send({password:"hksehre"})
      expect(response.status).toBe(400)
    });
    test("not sending andy eamil it should return with status 400", async () => {
      const response = await await supertest(app)
        .post("/getUser")
        .send({ email: "hksehre" });
      expect(response.status).toBe(400);
    });
    test("sending correct email and password status should be 200", async () => {
      const response = await await supertest(app)
        .post("/getUser")
        .send({ email: "test123@gmail.com", password: "testingPassword" });
      expect(response.status).toBe(200);
    });
    test("deleting existing user", async () => {
      const response = await supertest(app)
        .delete("/deleteUser")
        .set("Authorization", `jwt ${token}`);
      expect(response.statusCode).toBe(200);
    });
})