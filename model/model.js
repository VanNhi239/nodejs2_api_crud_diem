const mongoose = require("mongoose");

const diemSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  masv: {
    type: String,
    required: true,
  },
  mamonhoc: {
    type: String,
  },
  diem: {
    type: Number,
  },
});

let Diem = mongoose.model("Diem", diemSchema);
module.exports = Diem;
