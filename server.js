require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");
const { compile } = require("html-to-text");
const convert = compile({ wordwrap: null });

const { PORT } = process.env;
console.log(process.env.port);
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/search", async (req, res) => {
  const file = fs.readFileSync(
    path.join(
      __dirname,
      "../assets/OEBPS/Text",
      "Gardens_of_the_Moon_016_Epigraphs.html"
    )
  );
  const text = convert(file);
  fs.writeFileSync("../assets/converts/file.txt", text, "UTF-8",)
  res.send(text);
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
