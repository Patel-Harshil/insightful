var express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

async function checkEmail(req, res, next) {
  var emailX = req.body.Email;
  try {
    const data = await userModel.findOne({ email: emailX });
    if (data) {
      return res.status(200).json({
        msg: "Email Already Exits",
        results: data,
      });
    }
    next();
  } catch (error) {
    throw error;
  }
}

// GET users listing------------------------
router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome to backend" });
});

// ----------------REGISTER-----------------------------------
router.post("/register", checkEmail, function (req, res, next) {
  bcrypt.hash(req.body.Password, 10, function (err, hash) {
    if (err) {
      res.status(400).json({
        msg: "Something Wrong, Try Later!",
        results: err,
      });
    } else {
      var userDetails = new userModel({
        name: req.body.Name,
        email: req.body.Email,
        password: hash,
        role: "author"
      });

      userDetails
        .save()
        .then((resResult) => {
          res.status(201).json({
            msg: "Inserted Successfully",
            results: resResult,
          });
        })
        .catch((err) => {
          res.json(err);
        });
    }
  });
});

module.exports = router;

// -----------------LOGIN ----------------------------------
router.post("/login", function (req, res, next) {
  var email = req.body.Email;
  userModel
    .find({ email: email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        res.status(200).json({
          msg: "Auth Failed",
          UserData: "",
          status: "error",
        });
      } else {
        bcrypt.compare(
          req.body.Password,
          user[0].password,
          function (err, result) {
            if (err) {
              res.json({
                msg: "Auth Failed",
                UserData: "",
                status: "error",
              });
            }
            if (result) {
              res.status(200).json({
                msg: "User Login Successfully",
                UserData: user,
                status: "success",
              });
            } else {
              res.json({
                msg: "Wrong password",
                UserData: "",
                status: "error",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
});
