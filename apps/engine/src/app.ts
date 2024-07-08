import express from "express";
import http from "http";
import cors from "cors";
import routes from "./routes";
// import { startWebSocketServer } from "./websocket";
// import { getPort } from "./config";

// const port = getPort();

const app = express();
const server = http.createServer(app);

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", routes);

app.get("/api", (_, res) => {
  res.status(200).json({ message: "ok!" });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


// startWebSocketServer(server);
