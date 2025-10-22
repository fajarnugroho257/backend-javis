const express = require("express");
const router = express.Router();
const AuthController = require("../controller/authController");
const { validateRegister, validateLogin } = require("../middleware/validation/validation");

// route list
router.post("/", validateRegister, AuthController.addNewUser);
router.post("/login", validateLogin, AuthController.login);

module.exports = router;