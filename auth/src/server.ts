import express, { Express, Request, Response } from "express";

import bodyParser from "body-parser";
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
  };

  setupRoutes = () => {
    this.app.get("/", (_req: Request, res: Response) => res.send("Hello world!"));
    this.app.use("/", authRoute);
    this.app.use("*", async (_req: Request, res: Response) => {
      res.status(404).json({
        status: false,
        message: "Route not found",
      });
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.app.use((err: any, _req: Request, res: Response) => {
      res.status(err.status || 500).json({
        status: false,
        message: err.message,
      });
    });
  };

  listen = async (port: number) => {
    // TODO: utilizar migration e seeds ao invés de data sync
    await database.sync({ force: true });

    this.app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  };
}

export default Server;
