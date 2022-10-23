const express = require("express");
const app = express();
// console.dir(app);

// app.use((req, res) => {
//   console.log("We Got A New Req");
//   //   res.send("HELLO, WE GOT YOU");
//   res.send({ name: "fauzan" });
// });

app.get("/", (req, res) => {
  res.send("THIS IS HOMEPAGE");
});

app.get("/r/:subreddit", (req, res) => {
  //   console.log(req.params);
  const { subreddit } = req.params;
  res.send(`this is ${subreddit} sub`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  //   console.log(req.params);
  const { subreddit, postId } = req.params;
  res.send(`this is ${subreddit} sub for postID ${postId}`);
});

app.get("/search", (req, res) => {
  //   console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("NOTHING IS FOUND");
  }
  res.send(`Query result for ${q}`);
});

app.get("/cats", (req, res) => {
  res.send("CAT REQUESTS");
});

app.post("/cats", (req, res) => {
  res.send("MIOW");
});

app.get("/dog", (req, res) => {
  res.send("DOG REQUESTS");
});

app.get("*", (req, res) => {
  res.send("INVALID URL");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
