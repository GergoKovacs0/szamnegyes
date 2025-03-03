import Fours from "./fours";

const initDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database synced!");
  } catch (error) {
    console.error("Unable to sync the database:", error);
  }
};

export default initDB;
