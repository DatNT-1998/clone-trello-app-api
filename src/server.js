import express from "express";
import { connectDB } from "./config/mongodb";
import { env } from "./config/enviroment";

const app = express();

connectDB().catch(console.log());

app.get("/", (req, res) => {
  res.end("<h1>Hello World</h1>");
});

app.listen(env.PORT, env.HOST_NAME, () => {
  console.log(`Example app listening at http://localhost:${env.PORT}`);
});
