const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Look mama! I can code now yeah horrah!!");
});
const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "0178888888" },
  { id: 2, name: "aluvuna", email: "aluvuna@gmail.com", phone: "0178888888" },
  { id: 3, name: "saliaona", email: "suchona@gmail.com", phone: "0178888888" },
  { id: 4, name: "manna", email: "manna@gmail.com", phone: "0178888888" },
  { id: 5, name: "rahim", email: "rahim@gmail.com", phone: "0178888888" },
  { id: 6, name: "adil", email: "adil@gmail.com", phone: "0178888888" },
  { id: 7, name: "pabna", email: "pabna@gmail.com", phone: "0178888888" },
];
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});
app.get("/fruits", (req, res) => {
  res.send(["mango", "pine-apple", "blue-berry", "guava", "banana"]);
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
app.listen(port, () => {
  console.log("Listening to port", port);
  console.log("server is on", port);
});
