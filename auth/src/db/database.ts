import { Sequelize } from "sequelize-typescript";

import path from "path";

import dbConfig from "../configs/databaseConfig";

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASSWORD, {
  host: dbConfig.DB_HOST,
  dialect: dbConfig.DIALECT ?? "postgres",
  define: {
    timestamps: false,
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: false,
  models: [path.resolve(__dirname, "..", "models")],
});

// export const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   database: 'movies',
//   storage: ':memory:',
//   models: [__dirname + '/models']
// });

// sequelize.authenticate()
//   .then(() => console.log("Connection has been established successfully."))
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//     process.exit(1);
//   });

export default sequelize;
