// require("dotenv").config();
import express from "express";
import path from "path";
import fs from "fs";
import { compile } from "html-to-text";

const convert = compile({ wordwrap: null });

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/search", async (_, res) => {
  const files = fs.readdirSync(path.join(__dirname, "../../assets/OEBPS/Text"));
  console.log(files);
  for (const file of files) {
    const html = fs.readFileSync(
      path.join(__dirname, `../../assets/OEBPS/Text/${file}`),
      "utf8"
    );
    const text: string = convert(html);
    fs.writeFileSync(
      path.join(
        __dirname,
        `../../assets/converts/${file.replace(".html", "")}.txt`
      ),
      text
    );
  }
  res.send("hello");
});

app.listen(4000, () => {
  console.log(`app is listening on port ${4000}`);
});
