const express = require("express");
const router = express.Router();
const toolController = require("../controllers/tool.controller");
const auth = require("../middleware/auth")

// Route to view a list of all tool
router.get("/tool/list", toolController.getAllTools);

// Route to add a tool
router.post("/tool/add",auth, toolController.addTool);

// Route to update a tool's details
router.put("/tool/:id",auth, toolController.updateTool);

// Route to delete a tool by its ID
router.delete("/tool/:id",auth,toolController.deleteTool);

// Route for searching tools
router.get("/tool/search", toolController.searchTool);

// Route to view details of a specific tool by its type
router.get("/tool/:type", toolController.getToolByType);


module.exports = router;
