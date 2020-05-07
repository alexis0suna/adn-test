const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Empresa = require("../models/empresa");
const Form = require("../models/form");

router.get("/", async (req, res) => {
  try {
    const empresas = await Empresa.find();
    res.json(empresas);
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const empresas = await Empresa.findById(req.params.id);
    res.json(empresas);
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/:id/forms", async (req, res) => {
  try {
    const form = await Form.find({
      empresa: req.params.id,
    });
    res.json(form);
  } catch (err) {
    res.json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const empresa = new Empresa({
    nombre: req.body.nombre,
  });
  try {
    const result = await empresa.save();
    res.json(result);
  } catch (err) {
    res.json({ error: err });
  }
});

router.post("/:id/forms", async (req, res) => {
  const form = new Form({ ...req.body, empresa: req.params.id });
  const empresa = await Empresa.findById(req.params.id);
  empresa.forms.push(form);
  await empresa.save();
  try {
    const result = await form.save();
    res.json(result);
  } catch (err) {
    res.json({ error: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const empresa = await Empresa.updateOne(
      { _id: req.params.id },
      { $set: { nombre: req.body.nombre } }
    );
    res.json(empresa);
  } catch (err) {
    res.json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const empresa = await Empresa.deleteOne({ _id: req.params.id });
    res.json(empresa);
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;
