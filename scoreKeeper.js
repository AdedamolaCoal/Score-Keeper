//Logic 1

// const p1button = document.querySelector('#p1button');
// const p1Display = document.querySelector('#p1Display');
// const p2button = document.querySelector('#p2button');
// const p2Display = document.querySelector('#p2Display');
// const resetButton = document.querySelector('#reset');
// const select = document.querySelector('#playTo');

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3;
// let isGameOver = false;

// p1button.addEventListener('click', () => {
//     if (!isGameOver) {
//         p1Score += 1;
//         if (p1Score === winningScore) {
//             isGameOver = true;
//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//             p1button.disabled = true;
//             p2button.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// })
// p2button.addEventListener('click', () => {
//     if (!isGameOver) {
//         p2Score += 1;
//         if (p2Score === winningScore) {
//             isGameOver = true;
//             p2Display.classList.add('has-text-success');
//             p1Display.classList.add('has-text-danger');
//             p1button.disabled = true;
//             p2button.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// })

// select.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset);

// function reset() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = p1Score;
//     p2Display.textContent = p2Score;
//     p1Display.classList.remove('has-text-success', 'has-text-danger');
//     p2Display.classList.remove('has-text-success', 'has-text-danger');
//     p1button.disabled = false;
//     p2button.disabled = false;
// }

//Logic 2

const p1 = {
  button: document.querySelector("#p1button"),
  display: document.querySelector("#p1Display"),
  score: 0,
};
const p2 = {
  button: document.querySelector("#p2button"),
  display: document.querySelector("#p2Display"),
  score: 0,
};

const resetButton = document.querySelector("#reset");
const select = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
  player.display.textContent = player.score;
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("has-text-success");
    p.display.classList.remove("has-text-danger");
    p.button.disabled = false;
  }
}
resetButton.addEventListener("click", reset);

select.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
