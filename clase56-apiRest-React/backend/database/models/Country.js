module.exports = (sequelize, DataTypes) => {
  let alias = "Country";
  let colums = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
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
    tableName: "countries",
    timestamp: true,
    paranoid: true,
  };

  const Country = sequelize.define(alias, colums, configuration);

  //Asociacion
  Country.associate = (models) => {
    Country.hasMany(models.User, { as: "users", foreignKey: "countryId" });
  };
  return Country;
};
