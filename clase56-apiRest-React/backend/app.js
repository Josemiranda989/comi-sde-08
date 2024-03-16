const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

// Routers
const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const gameRoutes = require("./routes/gameRoutes");

app.use("/", mainRoutes);
app.use("/api/users", userRoutes);
app.use("/api/games", gameRoutes);

// const db = require("./database/models");
app.listen(port, async () => {
  console.log("Servidor levantado en el puerto http://localhost:" + port);
  // await db.sequelize.sync({ force: true });
});
