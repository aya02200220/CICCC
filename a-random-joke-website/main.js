const jokeSetup = document.querySelector(".setup");
const jokePunchline = document.querySelector(".punchline");
const newJokeButton = document.getElementById("btn");

// const newJokeButton = document.getElementById("new-joke-button");

const url = "https://official-joke-api.appspot.com/random_joke";

window.addEventListener("load", () => {
  getJoke();
  newJokeButton.addEventListener("click", getJoke);
});

const getJoke = () => {
  axios.get(url).then((response) => {
    console.log(response);
    jokeSetup.innerHTML = response.data.setup;
    jokePunchline.innerHTML = response.data.punchline;
  });
};
