const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

router.get("/", async (req, res) => res.json(await Task.find()));
router.post("/", async (req, res) => res.json(await Task.create(req.body)));
router.get("/:id", async (req, res) => res.json(await Task.findById(req.params.id)));
router.put("/:id", async (req, res) => res.json(await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })));
router.delete("/:id", async (req, res) => res.json(await Task.findByIdAndDelete(req.params.id)));

module.exports = router;
