import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/db.js";
import routes from "./routes/route.js";

const app = express();

// Db connection
dbConnection();

dotenv.config();

const Port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Connected successfully");
});

app.listen(Port, () =>
  console.log(`The server connected in local host : ${Port}`)
);
