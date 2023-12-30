module.exports = {
  HOST: "localhost:3306",
  USER: "willitek_root",
  PASSWORD: "V2Rz8viXPLk4K9sNBxFm",
  DB: "willitek_TestDB",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
