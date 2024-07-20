const request = require("supertest");
const app = require("../app");
const chai = require("chai");
const expect = chai.expect;

describe("POST /api/auth", () => {
  it("should return 'token'", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        username: "admin",
        password: "hi!12345",
      })
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response.body).to.have.property("token");
  });

  it("should return 'Validation error: Invalid format.'", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        username: "admin",
        password: "1",
      })
      .expect(422);
  });

  it("should return 'Unexpected error!'", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        username: "admin",
        password: "admin!12345",
      })
      .expect(403);

    expect(response.body).to.deep.equal({
      message: "Unexpected error!",
      details: {
        message: "Login or password error, such user does not exist",
        code: "router",
      },
    });
  });
});
