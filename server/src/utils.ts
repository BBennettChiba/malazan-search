import fs from "fs";
import path from "path";
import { compile } from "html-to-text";

const convert = compile({ wordwrap: null });

function writeFiles(): void {
  let files: string[] = fs.readdirSync(
    path.join(__dirname, "../../assets/OEBPS/Text")
  );
  const title = files.find((a): boolean => a.includes("Title."));
  if (title !== undefined) {
    const startInd: number = files.indexOf(title) + 1;
    files = files.slice(startInd);
  }
  for (const file of files) {
    const html = fs.readFileSync(
      path.join(__dirname, `../../assets/OEBPS/Text/${file}`),
      "utf8"
    );
    const text: string = convert(html);
    if (!text.includes("[.")) {
      fs.writeFileSync(
        path.join(
          __dirname,
          `../../assets/converts/${file.replace(".html", "")}.txt`
        ),
        text
      );
    }
  }
}

writeFiles();
