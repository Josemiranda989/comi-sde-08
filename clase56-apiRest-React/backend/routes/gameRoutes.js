const express = require("express");
const router = express.Router();

const { list, detail } = require("../controllers/gameController");

// Get Request http://localhost:3000/api/games
router.get("/", list);

// http://localhost:3000/api/games/detail?id=1
// http:localhost:3000/api/games/detail/1
router.get("/detail/:id?", detail);

module.exports = router;
