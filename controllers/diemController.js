const Diem = require("../model/model");

const diemController = {
  //ADD DIEM
  addDiem: async (req, res) => {
    try {
      const newDiem = new Diem(req.body);
      const savedDiem = await newDiem.save();
      res.status(200).json(savedDiem);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET ALL DIEM
  getAllDiem: async (req, res) => {
    try {
      const diems = await Diem.find();
      res.status(200).json(diems);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A DIEM
  getADiem: async (req, res) => {
    try {
      const diems = await Diem.findById(req.params.id);
      res.status(200).json(diems);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE DIEM
  updateDiem: async (req, res) => {
    try {
      const diems = await Diem.findById(req.params.id);
      await diems.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE DIEM
  deleteDiem: async (req, res) => {
    try {
      await Diem.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      res.status(500).json(err);
    }
  },
};

module.exports = diemController;
