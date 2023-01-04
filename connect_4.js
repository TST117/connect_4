const board = document.querySelector(".game_board");
let board_spaces = document.querySelectorAll(".circle");

for (let i = 0; i < board_spaces.length; i++) {
    board_spaces[i].innerText = i;
}

//for top row only on hover for color of piece.

for (let i = 0; i < 7; i++) {
    board_spaces[i].addEventListener("mouseover", add_bg);
    board_spaces[i].addEventListener("mouseout", remove_bg);
}

function add_bg() {
    this.style.backgroundColor = "green";
}

function remove_bg() {
    this.style.backgroundColor = "white";
}
