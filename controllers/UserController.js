//const { response } = require("express");
const Users = require("../models/UserModel");

//show the list of user
const index = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

//Show one user
const show = (req, res, next) => {
  let UserID = req.body.UserID;
  UserID.findByID(UserID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

// add new user
const store = (req, res, next) => {
  let User = new Users({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });
  User.save()
    .then((response) => {
      res.json({
        message: "User Added Succefully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

//update the user

const update = (req, res, next) => {
  let UserID = req.body.UserID;

  let updatedData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };
  User.findByIdAndUpdate(UserID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "User updated Succefully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured",
      });
    });
};

//delete the user
const destroy = (req, res, next) => {
  let UserID = req.body.UserID;
  User.findByIDAndRemove(UserID)
    .then(() => {
      req.json({
        message: "User Deleted",
      });
    })
    .catch((error) => {
      req.json({
        message: "An error Occured",
      });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
