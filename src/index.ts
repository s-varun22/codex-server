import express, { Request, Response } from "express";
import cors from "cors";
import jsonServer from "json-server";
import auth from "json-server-auth";
import { rules } from "./authRules";
import { rewriter } from "json-server-auth/dist/guards";

const server = express();

// Port for the server to listen on
const PORT = 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
server.use(cors());

// json-server setup
const router = jsonServer.router("./data/db.json");

// Expose db
(server as any).db = (router as any).db;

// Mount API under a namespace so auth/rules apply only there
server.use(rewriter(rules));

// Auth routes: /register, /login, and protect routes via JWT
server.use(auth);

// Expose the file based REST API under the root path
// This allows access to the db.json file and its resources
server.use("/", router);

// Basic health check (public)
server.get("/health", (_req: Request, res: Response) => {
	res.status(200).json({ status: "ok" });
});

server.listen(PORT);
