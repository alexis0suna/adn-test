const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const empresaSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  forms: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resultado",
    },
  ],
});

module.exports = mongoose.model("Empresa", empresaSchema);
