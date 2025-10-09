import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const document = dom.window.document;
console.log("chegou document",document); 

// Alternar tema claro/escuro
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
console.log("chegou themeToggle",themeToggle);
themeToggle.addEventListener("click", () => {
  console.log('Tema alternado!');
  // body.classList.toggle("dark");
  // themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
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