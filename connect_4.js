let player = 1;
let column_array = [35, 36, 37, 38, 39, 40, 41];
let game_array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
];

const board = document.querySelector(".game_board");
let board_spaces = document.querySelectorAll(".circle");

for (let i = 0; i < board_spaces.length; i++) {
    board_spaces[i].innerText = i;
}

//for top row only on hover for color of piece.

for (let i = 0; i < 7; i++) {
    board_spaces[i].addEventListener("mouseover", add_bg);
    board_spaces[i].addEventListener("mouseout", remove_bg);
    board_spaces[i].addEventListener("click", function () {
        drop_piece(i);
        change_player();
    });
}

function add_bg() {
    if (board_spaces)
        if (player == 0) {
            this.classList.add("maroon");
        } else {
            this.classList.add("yellow");
        }
}

function remove_bg() {
    this.classList.remove("maroon");
    this.classList.remove("yellow");
}

function drop_piece(i) {
    if (player == 0) {
        board_spaces[column_array[i]].classList.add("maroon");
        game_array[column_array[i]] = "x";
    } else {
        board_spaces[column_array[i]].classList.add("yellow");
        game_array[column_array[i]] = "o";
    }

    if (column_array[i] >= 7) {
        column_array[i] = column_array[i] - 7;
    }

    console.log(game_array);
    console.log(column_array);
}

function change_player() {
    if (player == 1) {
        player = 0;
    } else {
        player = 1;
    }
}

function remove_event_listenrs() {}
