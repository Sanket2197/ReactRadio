const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  answers: [
    {
      _id:false,
      
      key: {
        type: String,
      },
      value: {
        type: String,
      },
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("patient", PatientSchema);
