const { body, validationResult } = require("express-validator");
const User = require("../../models/users");

exports.validateRegister = [
  body("email")
    .notEmpty().withMessage("Email wajib diisi")
    .isEmail().withMessage("Format email tidak valid")
    .custom(async (value) => {
      const existingUser  = await User.findOne({ where: { email : value } });
      if (existingUser ) {
        throw new Error("Email sudah terdaftar");
      }
      return true;
    }),
  body("nama").notEmpty().withMessage("Nama wajib diisi"),
  body("password").isLength({ min: 6 }).withMessage("Password minimal 6 karakter"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// validasi data login
exports.validateLogin = [
  body("email").notEmpty().withMessage("Email wajib diisi").isEmail().withMessage("Format email tidak valid"),
  body("password").notEmpty().withMessage("Password wajib diisi"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
