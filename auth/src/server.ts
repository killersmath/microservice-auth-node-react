import express, { Express } from "express";

import bodyParser from "body-parser";
import errorhandler from "strong-error-handler";
import cors from "cors";

import authRoute from "./routes/authRoute";

import database from "./db/database";

class Server {
  private app: Express;

  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  setupMiddlewares = () => {
    this.app.use(
      cors({
        origin: "*",
      }),
    );
    this.app.use(bodyParser.json({ limit: "5mb" }));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(
      errorhandler({
        debug: process.env.ENV !== "prod",
        log: true,
      }),
    );
  };

  setupRoutes = () => {
    this.app.get("/", (_req, res) => res.json({
      message: "Hello world!"
    }));
    this.app.use(authRoute);
  };

  listen = async (port: number) => {
    await database.sync({ force: true });

    this.app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  };
}

export default Server;
