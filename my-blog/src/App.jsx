import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("click", () => {
    console.log('Tema alternado!');
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // Filtro de posts
  const searchInput = document.getElementById("search");
  const posts = document.querySelectorAll(".post");

  searchInput.addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase();
    posts.forEach((post) => {
      const texto = post.textContent.toLowerCase();
      post.style.display = texto.includes(termo) ? "block" : "none";
    });
  });

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React laiza</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <h1>Blog Estático </h1>
      <nav>
        <div class="actions">
          <input type="text" id="search" placeholder="Buscar post..."></input>
          <button id="theme-toggle">  Alternar Tema</button>
        </div>
      </nav>
      <main>
        <section id="sobre">
          <h2>Sobre</h2>
          <p>Sejam bem vindos! Aqui trago algumas ideias, tutoriais e curiosidades sobre o desenvolvimento web e tecnologia.</p>
        </section>

        <section id="posts">
          <h2>Posts Recentes</h2>
          <div class="post-grid">
            <article class="post">
              <h3>Aprendendo o HTML</h3>
              <p>HTML é uma base de toda página web. Entenda seu conceito e de como usá-la corretamente.</p>
            </article>
            <article class="post">
              <h3>Estilos com CSS</h3>
              <p>O CSS da uma vida ao visual do site. Como criar layout modernos cheio de cores.</p>
            </article>
            <article class="post">
              <h3>Programando com o JavaScript</h3>
              <p>JavaScript traz um comando com as páginas. Veja como criar scripts úteis e simples.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Meu Blog Estático. Desenvolvido por Láiza.</p>
      </footer>
    </>
  )
}

export default App
