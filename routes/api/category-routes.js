const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories with associated products 
router.get('/', async (req, res) => {
  try{
    const categoryData = await Catergory.findAll({
      include: {
        model: Product,
      }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find one category by its `id` value with associated products
router.get('/:id', async (req, res) => {
  try {
    const findCategory = await Category.findByPk(req.params.id, {
      include: {
        model: Product,
      },
    })
    res.status(200).json(findCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new category
router.post('/', async (req, res) => {
  const newCategory = await Category.create(req.body);
  return res.status(200).json(newCategory);
});

  // update a category by its `id` value
router.put('/:id', async (req, res) => {
  const updatedCategory = await Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  return res.status(200).json(updatedCategory);
});

  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  const deletedCategory = await Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  return res.status(200).json(deletedCategory);
});

module.exports = router;