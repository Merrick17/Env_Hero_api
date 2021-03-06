const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/category.controller");
router.get("/", CategoryController.getAllCategories);
router.post("/add", CategoryController.addCategory);
router.put("/update/:id", CategoryController.updateCategory);
router.delete("/delete/:id", CategoryController.deleteCategory);


module.exports = router ; 