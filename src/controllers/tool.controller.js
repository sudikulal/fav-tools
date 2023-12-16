const Tool = require("../models/tool.model.js");

class BookClass {
  async addTool(req, res) {
    try {
      const { name, link, type, description } = req.body;

      if (!name || !link || !type)
        res.status(400).json({ message: "name/link/type cannot be empty" });

      const existingTool = await Tool.findOne({ link });

      if (existingTool)
        return res.status(400).json({
          message: "A Tool already exists",
        });

      const newTool = await Tool.create({
        name,
        link,
        type,
        description: description ?? "empty",
      });

      res
        .status(201)
        .json({ message: "tool added successfully", tool: newTool });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error adding the tool" });
    }
  }

  async getAllTools(req, res) {
    try {
      const tools = await Tool.find();
      res.json({ message: "success", tools });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching books" });
    }
  }
 
  async getToolByType(req, res) {
    try {
      const tool = await Tool.find({ type: req.params.type });
      if (!tool) return res.status(404).json({ message: "tool not found" });

      res.json({ message: "success", tool });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching the tool" });
    }
  }

  async updateTool(req, res) {
    try {
      const updatedTool = await Tool.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!updatedTool)
        return res.status(404).json({ message: "tool not found" });

      res.json({ message: "tool updated successfully", tool: updatedTool });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating the book" });
    }
  }

  async deleteTool(req, res) {
    try {
      const deletedTool = await Tool.findByIdAndRemove(req.params.id);
      if (!deletedTool)
        return res.status(404).json({ message: "Tool not found" });

      res.json({ message: "Tool deleted successfully", book: deletedTool });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting the book" });
    }
  }
}

module.exports = new BookClass();
