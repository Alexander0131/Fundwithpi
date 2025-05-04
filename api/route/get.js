const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const router = express.Router();

// Import your Mongoose model (assuming it's named `Post`)
const Post = require("../models/Post");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET posts by search (title, category, desc, content)
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const posts = await Post.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { desc: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
      ],
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET posts by category
router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await Post.find({ category: { $regex: category, $options: "i" } });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET posts by search and category
router.get("/search-category", async (req, res) => {
  try {
    const { query, category } = req.query;
    if (!query || !category) {
      return res.status(400).json({ message: "Both search query and category are required" });
    }

    const posts = await Post.find({
      category: { $regex: category, $options: "i" },
      $or: [
        { title: { $regex: query, $options: "i" } },
        { desc: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
      ],
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;