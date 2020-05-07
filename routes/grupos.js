const express = require("express");
const router = express.Router();
const Grupo = require("../models/grupo");

router.get("/", async (req, res) => {
  try {
    const grupos = await Grupo.find();
    res.json(grupos);
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const grupo = await Grupo.findById(req.params.id);
    res.json(grupo);
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/:id/reactivos", async (req, res) => {
  try {
    const grupo = await Grupo.findById(req.params.id);
    res.json(grupo.reactivos);
  } catch (err) {
    res.json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const grupo = new Grupo({
    nombre: req.body.nombre,
  });
  try {
    const result = await grupo.save();
    res.json(result);
  } catch (err) {
    res.json({ error: err });
  }
});

router.post("/:id/reactivos", async (req, res) => {
  try {
    const grupo = await Grupo.findById(req.params.id);
    grupo.reactivos.push({ reactivo: req.body.reactivo });
    const result = await grupo.save();
    res.json(result);
  } catch (err) {
    res.json({ error: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const grupo = await Grupo.updateOne(
      { _id: req.params.id },
      { $set: { nombre: req.body.nombre } }
    );
    res.json(grupo);
  } catch (err) {
    res.json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const grupo = await Grupo.deleteOne({ _id: req.params.id });
    res.json(grupo);
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;
