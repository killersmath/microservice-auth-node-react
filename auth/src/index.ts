import dotenv from "dotenv";
import Server from "./server";

dotenv.config();

const server = new Server();
const port = process.env.SERVICE_PORT;

server.listen(Number(port || 3000));
