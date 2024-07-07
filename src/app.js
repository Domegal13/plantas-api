import cors from "cors";
import express from "express";
import platasRouter from "./routes/platasRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<h1> ---------   Inicio Proyecto Codo a Codo Plantas-Api ------------- </h1>"
  );
});

app.use("/api/v1/plantas", platasRouter);

export default app;
