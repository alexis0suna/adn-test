const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = Schema(
  {
    empresa: {
      type: Schema.Types.ObjectId,
      ref: "Empresa",
    },
  },
  { strict: false }
);

module.exports = mongoose.model("Form", formSchema);
