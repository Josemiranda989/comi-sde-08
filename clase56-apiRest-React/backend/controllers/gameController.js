const { Game } = require("../database/models");

const controller = {
  list: async (req, res) => {
    try {
      const games = await Game.findAll();

      const response = {
        meta: {
          status: 200,
          message: "Games retrieved successfully",
          count: games.length,
        },
        data: games,
      };

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  },
  detail: async (req, res) => {
    try {
      // localhost/api/games/detail/1 || localhost/api/games?id=1
      const game = await Game.findByPk(req.params.id || req.query.id);

      const response = {
        meta: {
          status: 200,
          message: "Games retrieved successfully",
        },
        data: game,
      };

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controller;
