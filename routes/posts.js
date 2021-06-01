const express = require("express");
const router = express.Router();
const Post = require('../models/Post')




router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch (error) {
    res.json({ message: error})
  }
});

router.post('/', async (req, res) => {
    const post = new Post({
       ...req.body
     });
    try {
     const savedPost = await post.save();
    res.json(savedPost); 
    } catch (error) {
      res.json({ message: error})
    }  
});

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post)
  } catch (error) {
    res.json({ message: error})
  }
})

router.delete('/:postId', async (req,res) => {
  try {
    const removedPost = await Post.deleteOne({_id: req.params.postId})
    res.json(removedPost)
  } catch (error) {
    res.json({ message: error})
  }
  
})

router.patch('/:postId', async (req,res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId }, 
      { $set : {title: req.body.title } }
    );
    res.json(updatedPost)
  } catch (error) {
    res.json({ message: error})
  }
  
})

module.exports = router;