import Turf from "../models/turf.js";

export const createTurf = async (req, res) => {
  try {
    const data = req.body;
    // Check if turf already exists with the provided email
    const existingTurf = await Turf.findOne({ email: data.email });
    if (existingTurf) {
      return res.status(403).send({ message: "Turf already exists" });
    }
    // Extract filenames from uploaded files and add to data
    const filenames = req.files.map((file) => file.originalname);
    data.imageUrl = filenames;
    // Create new turf and save to database
    const newTurf = new Turf(data);
    await newTurf.save();
    return res.status(201).send({ message: "Turf created successfully" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getTurfById = async (req, res) => {
  try {
    const { id } = req.params;
    // Find turf by ID
    const turf = await Turf.findById(id);
    if (!turf) {
      return res.status(404).send({ message: "Turf not found" });
    }
    return res.status(200).send(turf);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getAllTurfLocations = async (req, res) => {
  try {
    const turfs = await Turf.find();
    const uniqueCitiesSet = new Set(turfs.map((turf) => turf.city));
    const uniqueCities = Array.from(uniqueCitiesSet);
    return res.status(200).send(uniqueCities);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
