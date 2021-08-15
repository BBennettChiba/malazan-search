// require("dotenv").config();
import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../../build")));

app.get("/", (_, res) => {
  console.log("ello");
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

app.get("/search", async (req, res) => {
  const query = req.query.q?.toString();
  const files = fs.readdirSync(path.join(__dirname, "../../assets/converts"));
  const result = [];
  for (const fileName of files) {
    const file = fs.readFileSync(
      path.join(__dirname, `../../assets/converts/${fileName}`),
      "utf8"
    );
    if (query !== undefined && file.includes(query)) {
      result.push(file);
    }
  }
  res.send(result);
});

app.listen(4000, () => {
  console.log(`app is listening on port ${4000}`);
});
