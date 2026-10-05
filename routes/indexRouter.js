const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { author, message } = req.body;

  messages.push({
    text: message,
    user: author,
    added: new Date(),
  });

  res.redirect("/");
});

router.get("/message/:index", (req, res) => {
  const message = messages[req.params.index];

  res.render("message", { message });
});

module.exports = router;
