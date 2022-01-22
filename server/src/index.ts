// import { config } from "dotenv";
import express from "express";
import path from "path";
import fs from "fs";
// import cors from "cors";

const app = express();
// config();

app.use(express.json());
// app.use(cors());
app.use(express.static(path.join(__dirname, "../../front/build")));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../../front/build/index.html"));
});

app.get("/search", async (req, res) => {
  const query = req.query["q"]?.toString();
  if(!query) return res.status(400).send("No query provided");
  const files = fs.readdirSync(path.join(__dirname, "../../assets/converts"));
  const result = [];
  for (const fileName of files) {
    const file = fs.readFileSync(
      path.join(__dirname, `../../assets/converts/${fileName}`),
      "utf8"
    );
    if (file.includes(query)) {
      const separatedByBreak = file.split("\n");
      const included = separatedByBreak.filter((a) => a.includes(query));
      result.push(included);
    }
  }
  res.send(result);
});

app.listen(4000, () => {
  console.log(`app is listening on port ${4000}`);
});
