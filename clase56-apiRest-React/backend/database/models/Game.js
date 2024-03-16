module.exports = (sequelize, DataTypes) => {
  let alias = "Game";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    awards: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  };
  let configuration = {
    tableName: "games",
    timestamps: true,
    paranoid: true,
  };

  const Game = sequelize.define(alias, columns, configuration);

  return Game;
};
