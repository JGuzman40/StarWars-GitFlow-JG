import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index";
import { ICustomError } from "./Interfaces/ICustomError";

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

server.use("/api", routes)

server.use((err: ICustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({ error: err.message });
})

export default server;