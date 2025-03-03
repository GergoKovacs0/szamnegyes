import sequelize from "../database";

const Fours = sequelize.define("fours", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    unique: true,
  },
});

export default Fours;
