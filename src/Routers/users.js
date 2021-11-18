const express = require("express");
const router = new express.Router();
const User = require('../models/users');
const auth = require('../middleware/auth');
//to add new user
router.post("/users", async (req, res) => {
    try {
      const person = new User(req.body);
      const createPerson = await person.save();
      res.status(201).send(createPerson);
    } catch (e) {
      res.status(400).send(e);
    }
  })
  //to get details
  router.get("/users", async (req, res) => {
    try {
      const usersData = await User.find(res.send(usersData));
    } catch (e) {
      res.send(e);
    }
  });
  //to get details by id
  router.get("/users/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const userData = await User.findById(_id);
      if (!userData) {
        return res.status(404).send();
      } else {
        res.send(userData);
      }
      res.send(userData);
    } catch (e) {
      res.status(500).send(e);
    }
  })
  //updating
  router.patch("/users/:id", async (req, res) => {
      try {
        const _id = req.params.id;
        const updateData = await User.findByIdAndUpdate(_id, req.body,{new:true});
      
        res.send(updateData);
      } catch (e) {
        res.status(404).send(e);
      }
    })
    //delete
    router.delete("/users/:id", async (req, res) => {
      try {
        const _id = req.params.id;
        const deleteData = await User.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
          return res.status(400).send();
        } 
        res.send(deleteData);
      } catch (e) {
        res.status(500).send(e);
      }
    })
module.exports = router;