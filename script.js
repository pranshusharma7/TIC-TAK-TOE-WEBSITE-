console.log("Welcome to Tic Tac Toe");

// Sound effects
let music = new Audio("mix1.mp3");      // Background music (optional)
let turnAudio = new Audio("mix3.mp3");  // Sound on each turn
let gameOverAudio = new Audio("mix4.mp3"); // Sound on game over

let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => (turn === "X" ? "O" : "X");

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText !== '' &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
        ) {
            document.getElementById("turn-info").innerText = boxtexts[e[0]].innerText + " Wins!";
            isGameOver = true;
        }
    });
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isGameOver) {
            boxtext.innerText = turn;
            checkWin();
            if (!isGameOver) {
                turn = changeTurn();
                document.getElementById("turn-info").innerText = "Turn For " + turn;
            }
        }
    });
});

// Reset Game
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementById("turn-info").innerText = "Turn For " + turn;
});

// Optional: Play background music
// music.loop = true;
// music.play();
