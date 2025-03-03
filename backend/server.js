import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import initDB from "./database/initDB";
import Fours from "./database/fours";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/fours", async (req, res) => {
  const fours = await Fours.findAll();
  res.status(200).send(fours);
});

app.get("/fours/:id", async (req, res) => {
  const { id } = req.params;
  const fours = await Fours.findByPk(id);

  if (!fours) {
    res.status(404).send("Fours not found");
  }

  res.status(200).send(fours);
});

app.post("/fours", async (req, res) => {
  const { data } = req.body;

  try {
    const fours = await Fours.create({ data });
    res.status(201).send(fours.id.toString());
  } catch (error) {
    res.status(400).send;
  }
});

const initServer = async () => {
  await initDB();
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
};

initServer();
