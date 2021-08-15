"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var html_to_text_1 = require("html-to-text");
var convert = html_to_text_1.compile({ wordwrap: null });
function writeFiles() {
    var files = fs_1.default.readdirSync(path_1.default.join(__dirname, "../../assets/OEBPS/Text"));
    var title = files.find(function (a) { return a.includes("Title."); });
    if (title !== undefined) {
        var startInd = files.indexOf(title) + 1;
        files = files.slice(startInd);
    }
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var html = fs_1.default.readFileSync(path_1.default.join(__dirname, "../../assets/OEBPS/Text/" + file), "utf8");
        var text = convert(html);
        if (!text.includes("[.")) {
            fs_1.default.writeFileSync(path_1.default.join(__dirname, "../../assets/converts/" + file.replace(".html", "") + ".txt"), text);
        }
    }
}
writeFiles();
//# sourceMappingURL=utils.js.map