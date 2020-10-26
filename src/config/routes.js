const express = require('express');
const routes = express.Router();

// Importing controllers and setting corresponding routes
const Post = require('../controllers/Post');
routes.get('/posts', Post.getAll); // Retrieve all posts
routes.get('/posts/:id', Post.get); // Retrieve a single post by its ID
routes.post('/posts', Post.create); // Create a new post
routes.patch('/posts/:id', Post.update); // Update a single post by its ID
routes.delete('/posts/:id', Post.delete); // Delete a single post by its ID

module.exports = routes;
