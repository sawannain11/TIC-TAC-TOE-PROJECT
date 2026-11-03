
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const statusText = document.querySelector("#status");

let turn0 = true;
let gameOver = false;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        // Stop if the game is over or box is filled
        if (gameOver || box.innerText !== "") {
            return;
        }

        if (turn0) {
            box.innerText = "O";
            statusText.innerText = "Player X's Turn";
        } else {
            box.innerText = "X";
            statusText.innerText = "Player X's Turn";
        }

        box.disabled = true;
        turn0 = !turn0;

        checkWinner();
    });
});

function checkWinner() {
    for (const pattern of winPattern) {
        const [a, b, c] = pattern;

        const val1 = boxes[a].innerText;
        const val2 = boxes[b].innerText;
        const val3 = boxes[c].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            statusText.innerText = `Player ${val1} Wins!`;
            gameOver = true;

            boxes.forEach((box) => {
                box.disabled = true;
            });

            return;
        }
    }

    // Check for a draw
    const isDraw = [...boxes].every(
        (box) => box.innerText !== ""
    );

    if (isDraw) {
        statusText.innerText = "Game Draw!";
        gameOver = true;
    }
}

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turn0 = true;
    gameOver = false;
    statusText.innerText = "Player O's Turn";
}

resetBtn.addEventListener("click", resetGame);
