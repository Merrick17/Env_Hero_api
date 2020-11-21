const Category = require("../models/category.model");

module.exports.addCategory = async (req, res) => {
  let name = req.body.name;

  let newCategory = new Category({
    name: name,
  });
  await newCategory.save();

  res.json({ msg: "Added..." });
};

module.exports.deleteCategory = async (req, res) => {
  let id = req.params.id;

  await Category.findByIdAndRemove(id);
  res.json({ msg: "Deleted..." });
};

module.exports.getAllCategories = async (req, res) => {
  let result = await Category.find();
  res.json({
    result: result,
  });
};

module.exports.updateCategory = async (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let result = await Category.findOneAndUpdate(
    { _id: id },
    {
      name: name,
    }
  );
  res.json({
    result: result,
  });
};
