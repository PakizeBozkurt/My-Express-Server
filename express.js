const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


//Path examples Get, Post, Put, Delete...

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

//Route parameters

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

//Examples

app
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send("Add a book");
  })
  .put((req, res) => {
    res.send("Update the book");
  });

  //express.Router
  const express = require("express");
  const router = express.Router();

  // middleware that is specific to this router
  router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  });
  // define the home page route
  router.get("/", (req, res) => {
    res.send("Birds home page");
  });
  // define the about route
  router.get("/about", (req, res) => {
    res.send("About birds");
  });

  module.exports = router;