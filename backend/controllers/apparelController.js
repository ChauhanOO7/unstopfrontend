const Apparel = require('../models/Apparel');

// Add apparel submission
const addApparel = async (req, res) => {
  const { type, condition, action, user } = req.body;

  if (!type || !condition || !action || !user) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    const apparel = new Apparel({ type, condition, action, user });
    await apparel.save();
    res.status(201).json({ message: 'Apparel submitted', apparel });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all apparel submissions
const getAllApparel = async (req, res) => {
  try {
    const apparels = await Apparel.find().sort({ date: -1 });
    res.status(200).json(apparels);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { addApparel, getAllApparel };
