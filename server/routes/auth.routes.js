const { authRegistration, authLogin, checkUsername } = require("../controllers/auth.js");
const { loginSchema, registrationSchema } = require("../schema/auth.schema.js");
const { body } = require("uzdev/joi");

module.exports = function (app) {
  app.post("/auth/login", body(loginSchema), authLogin);
  app.post("/auth/registration", body(registrationSchema), authRegistration);
  app.get("/auth/check-username", checkUsername);
};
