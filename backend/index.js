// backend/index.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// se tiver posts.json na mesma pasta:
let posts = [];
try {
  posts = require('./posts.json').map((p, i) => ({ id: String(Date.now() + i), ...p }));
} catch (err) {
  posts = [];
}

// GET /posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// POST /posts
app.post('/posts', (req, res) => {
  const { title = '', content = '' } = req.body;
  const newPost = { id: String(Date.now()), title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id
app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const idx = posts.findIndex(p => String(p.id) === String(id) || String(p._id) === String(id));
  if (idx === -1) return res.status(404).json({ error: 'Post não encontrado' });
  posts[idx] = { ...posts[idx], ...req.body };
  res.json(posts[idx]);
});

// DELETE /posts/:id
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const beforeLen = posts.length;
  posts = posts.filter(p => String(p.id) !== String(id) && String(p._id) !== String(id));
  if (posts.length === beforeLen) return res.status(404).json({ error: 'Post não encontrado' });
  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
