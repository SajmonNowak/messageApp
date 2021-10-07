var express = require("express");
var router = express.Router();
const transformDate = require("../public/javascripts/transformDate");

const messages = [
  {
    title: "Amando are you joking?",
    text: "Why don't you just write things down on paper?",
    user: "Charles",
    added: transformDate(new Date(2021, 11, 12, 12, 24, 9)),
  },
  {
    title: "Hi there!",
    text: "I was desperately looking for such an app. This is amazing. Wow.",
    user: "Amando",
    added: transformDate(new Date(2021, 11, 10, 16, 46, 23)),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { messages, transformDate });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  if (!req.body.titleInput || !req.body.textInput || !req.body.nameInput) {
    res.status(400).redirect("/");
  } else {
    let messageObj = {
      title: req.body.titleInput,
      text: req.body.textInput,
      user: req.body.nameInput,
      added: transformDate(new Date()),
    };

    messages.unshift(messageObj);
    res.redirect("/");
  }
});

module.exports = router;
