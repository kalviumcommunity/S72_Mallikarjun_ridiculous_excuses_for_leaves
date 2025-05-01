const excuses = []; // Temporary in-memory array

exports.createExcuse = (req, res) => {
  const excuse = { id: Date.now(), ...req.body };
  excuses.push(excuse);
  res.status(201).json(excuse);
};

exports.getAllExcuses = (req, res) => {
  res.json(excuses);
};

exports.getExcuseById = (req, res) => {
  const excuse = excuses.find(e => e.id == req.params.id);
  excuse ? res.json(excuse) : res.status(404).send('Not found');
};

exports.updateExcuse = (req, res) => {
  const index = excuses.findIndex(e => e.id == req.params.id);
  if (index !== -1) {
    excuses[index] = { ...excuses[index], ...req.body };
    res.json(excuses[index]);
  } else {
    res.status(404).send('Not found');
  }
};

exports.deleteExcuse = (req, res) => {
  const index = excuses.findIndex(e => e.id == req.params.id);
  if (index !== -1) {
    excuses.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Not found');
  }
};
