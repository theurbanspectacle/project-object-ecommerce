const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      Product
    ],
  }).then((response) => {
    res.json(response);
  }).catch((error) => {
    res.status(500).json(error);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    include: [
      Product
    ],
    where: {
      id: req.params.id,
    },
  }).then((response) => {
    res.json(response);
  }).catch((error) => {
    res.status(500).json(error);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then((response) => {
  res.json(response);
}).catch((error) => {
  res.status(500).json(error);
});
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send('');
  }).catch((error) => {
    res.status(500).json(error);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send('');
  }).catch((error) => {
    res.status(500).json(error);
  });
});

module.exports = router;
