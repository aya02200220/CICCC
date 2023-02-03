const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateJokes);

async function generateJokes() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");

  const data = await res.json();
  console.log(data.punchline);
  console.log(data.setup);

  setup.innerText = data.setup;
  punchline.innerText = data.punchline;
}
