const express = require("express");
const Menu = require("../models/Menu");
const MenuItem = require("../models/MenuItem");

const router = express.Router();

// Create a Menu
router.post("/menus", async (req, res) => {
  const { name, description } = req.body;
  const menu = new Menu({ name, description });
  await menu.save();
  res.json(menu);
});

// Get All Menus
router.get("/menus", async (req, res) => {
  const menus = await Menu.find().populate("items");
  res.json(menus);
});

// Get Menu by ID with Items
router.get("/menus/:id", async (req, res) => {
  const menu = await Menu.findById(req.params.id).populate("items");
  res.json(menu);
});

// Add Item to Menu
router.post("/menus/:id/items", async (req, res) => {
  const { name, description, price } = req.body;
  const menuItem = new MenuItem({ name, description, price, menuId: req.params.id });
  await menuItem.save();

  await Menu.findByIdAndUpdate(req.params.id, { $push: { items: menuItem._id } });
  res.json(menuItem);
});

// Delete a Menu
router.delete("/menus/:id", async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting menu", error });
  }
});

// Delete a Menu Item
router.delete("/menus/:menuId/items/:itemId", async (req, res) => {
  try {
    const { menuId, itemId } = req.params;

    // Remove the item from MenuItem collection
    const menuItem = await MenuItem.findByIdAndDelete(itemId);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    // Remove the item from the Menu's items array
    await Menu.findByIdAndUpdate(menuId, { $pull: { items: itemId } });

    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting menu item", error });
  }
});

// Update a Menu Item
router.put("/menus/:menuId/items/:itemId", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.itemId, 
      { name, description, price }, 
      { new: true } // Returns the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating menu item", error });
  }
});



module.exports = router;
