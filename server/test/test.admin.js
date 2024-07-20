// test.js
const request = require("supertest");
const app = require("../app");
const { expect } = require("chai");

describe("Authenticated endpoints", () => {
  let token;

  // Step 1: Get the token
  before(async () => {
    const response = await request(app).post("/api/auth/login").send({ username: "admin", password: "hi!12345" }).expect(200);
    token = response.body.token;
  });

  // Step 2: Test protected route
  it("should access the protected route with valid token", async () => {
    const response = await request(app).get("/api/admin/countries").set("Authorization", `Bearer ${token}`).expect("Content-Type", /json/).expect(200);
    expect(response.body.countries.length).to.equal(246);
  });

  // Optional: Test protected route with invalid token
  it("should not access the protected route with invalid token", async () => {
    const response = await request(app).get("/api/admin/countries").set("Authorization", "").expect(401); 
    expect(response.text).to.equal("Invalid token");
  });
});
