const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

// const User = require('../tools/User');
const { User } = require("../database/models");

const controller = {
  list: async (req, res) => {
    try {
      const users = await User.findAll({
        include: ["country"],
      });
      const response = {
        meta: {
          status: 200,
          message: "Games retrieved successfully",
          count: users.length,
        },
        data: users,
      };

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  },
  profile: async (req, res) => {
    try {
      // localhost/api/games/detail/1 || localhost/api/games?id=1
      const user = await User.findByPk(req.params.id || req.query.id, {
        include: ["country"],
      });
      let response;

      if (user) {
        response = {
          meta: {
            status: 200,
            message: "The user retrieved successfully",
          },
          data: user,
        };
      } else {
        response = {
          error: {
            message: "This user not exist",
          },
        };
      }

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controller;
