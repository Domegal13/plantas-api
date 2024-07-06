import express from "express";
import platasRouter from "./routes/platasRouter.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Estas en el home");
});

app.use("/api/v1/plantas", platasRouter);

export default app;
