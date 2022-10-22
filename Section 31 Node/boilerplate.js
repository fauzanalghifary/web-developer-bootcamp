const fs = require("fs");
// console.log(fs);
// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("IN THE CALLBACK");
//   if (err) throw err;
// });
// console.log("AFTER MKDIR");

// fs.mkdirSync("Cats");
// console.log("AFTER MKDIR CATS");

try {
  const folderName = process.argv[2] || "Project";
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
  console.log(e);
}
