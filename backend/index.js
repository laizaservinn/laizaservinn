const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

let posts = [];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { title = '', content = '' } = req.body;
  const newPost = { id: String(Date.now()), title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const idx = posts.findIndex(p => String(p.id) === String(id) || String(p._id) === String(id));
  if (idx === -1) return res.status(404).json({ error: 'Post não encontrado' });
  posts[idx] = { ...posts[idx], ...req.body };
  res.json(posts[idx]);
});


app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const beforeLen = posts.length;
  posts = posts.filter(p => String(p.id) !== String(id) && String(p._id) !== String(id));
  if (posts.length === beforeLen) return res.status(404).json({ error: 'Post não encontrado' });
  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
