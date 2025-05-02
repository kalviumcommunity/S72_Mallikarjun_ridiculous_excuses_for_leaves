const Entity = require('../models/Entity');

const getEntities = async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getEntities };
