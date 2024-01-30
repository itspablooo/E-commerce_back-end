const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({ include: Product });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const selectedTag = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: Product,
    });
    res.status(200).json(selectedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  const newTag = await Tag.create(req.body);
  return res.json(newTag);
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  const updatedTag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  return res.status(200).json(updatedTag)
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  const deletedTag = await Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  return res.status(200).json(deletedTag);
});

module.exports = router;