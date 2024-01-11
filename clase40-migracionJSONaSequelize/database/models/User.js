module.exports = (sequelize, DataTypes) => {
  let alias = 'User'
  let colums = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    countryId: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }
  let configuration = {
    tableName: 'users',
    timestamp: true,
    paranoid: true
  }

  const User = sequelize.define(alias, colums, configuration)

  //Asociacion 
  User.associate = (models) => {
    User.belongsTo(models.Country, { as: 'country' })
  }

  return User
}