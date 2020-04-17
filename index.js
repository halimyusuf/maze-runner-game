document.querySelector(".easy").addEventListener("click", (event) => {
  document.querySelector(".home").classList.add("hidden");
  document.querySelector("#maze-game").classList.remove("hidden");
  mazeGame(10, 10);
});

document.querySelector(".medium").addEventListener("click", () => {
  document.querySelector(".home").classList.add("hidden");
  document.querySelector("#maze-game").classList.remove("hidden");
  mazeGame(20, 20);
});

document.querySelector(".hard").addEventListener("click", () => {
  document.querySelector(".home").classList.add("hidden");
  document.querySelector("#maze-game").classList.remove("hidden");
  mazeGame(30, 30);
});

document.querySelector(".expert").addEventListener("click", () => {
  document.querySelector(".home").classList.add("hidden");
  document.querySelector("#maze-game").classList.remove("hidden");
  mazeGame(40, 40);
});

document.querySelector("#home").addEventListener("click", () => {
  document.querySelector(".reload").classList.remove("hidden");
});

document.querySelector("#restart").addEventListener("click", () => {
  document.querySelector(".reload").classList.remove("hidden");
});
// document.querySelector(".resta")
