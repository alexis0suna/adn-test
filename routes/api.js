const express = require("express");
const router = express.Router();

const gruposRoute = require("./grupos");
const empresasRoute = require("./empresas");

router.use("/grupos", gruposRoute);
router.use("/empresas", empresasRoute);

router.get("/", (req, res) => {
  res.send("Api");
});

module.exports = router;
