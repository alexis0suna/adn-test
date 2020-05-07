const mongoose = require("mongoose");

const reactivoSchema = mongoose.Schema({
  reactivo: {
    type: String,
    required: true,
  },
});

const grupoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  reactivos: [reactivoSchema],
});

module.exports = mongoose.model("Grupo", grupoSchema);
