const express = require("express");
const router = express.Router();

// Controller
const { list, profile } = require("../controllers/userController");

// Get Request http://localhost:3000/api/users
router.get("/", list);

// http://localhost:3000/api/users/detail?id=1
// http:localhost:3000/api/users/detail/1
router.get("/profile/:id?", profile);

module.exports = router;
