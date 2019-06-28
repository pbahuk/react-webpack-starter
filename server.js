import express from "express";
import path from "path";

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));
app.get("*", (req, res) => {
  res.send(HTML_FILE);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
