const express = require("express");
const router = express.Router();
const toolController = require("../controllers/tool.controller");

// Route to view a list of all tool
router.get("/tool/list", toolController.getAllTools);

// Route to view details of a specific book by its ID
router.get("/tool/:type", toolController.getToolByType);

// Route to update a tool's details
router.post("/tool/add", toolController.addTool);

// Route to update a tool's details
router.put("/tool/:id", toolController.updateTool);

// Route to delete a tool by its ID
router.delete("/tool/:id", toolController.deleteTool);

module.exports = router;
  