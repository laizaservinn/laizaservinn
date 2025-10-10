import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [novoPost, setNovoPost] = useState({ title: "", content: "" });

  // Carrega posts da API
  useEffect(() => {
    axios.get("http://localhost:3001/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Adiciona novo post
  const addPost = async () => {
    try {
      const res = await axios.post("http://localhost:3001/posts", novoPost);
      setPosts([...posts, res.data]);
      setNovoPost({ title: "", content: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📋 Lista de Posts</h1>

      <input
        placeholder="Título"
        value={novoPost.title}
        onChange={(e) => setNovoPost({ ...novoPost, title: e.target.value })}
      />
      <input
        placeholder="Conteúdo"
        value={novoPost.content}
        onChange={(e) => setNovoPost({ ...novoPost, content: e.target.value })}
      />
      <button onClick={addPost}>Adicionar Post</button>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>: {p.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
