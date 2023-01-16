//prettier-ignore
let board_array = [
    0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41
]

let col_array = [35, 36, 37, 38, 39, 40, 41];

let turn = 1;

const col_btn = document.querySelectorAll(".drop_btn");
const spaces = document.querySelectorAll(".circle");

for (let i = 0; i < col_btn.length; i++) {
    col_btn[i].addEventListener("click", function () {
        drop_token(i);
        add_color();
    });
}

function drop_token(col) {
    if (col_array[col] >= 0) {
        if (turn == 1) {
            board_array[col_array[col]] = "x";
            turn = 0;
        } else {
            board_array[col_array[col]] = "o";
            turn = 1;
        }
        col_array[col] = col_array[col] - 7;
        console.log(col_array);
        console.log(board_array);
    } else {
        col_btn[col].removeEventListener("click", drop_token);
    }
}

function add_color() {
    for (let i = 0; i < board_array.length; i++) {
        if (board_array[i] == "x") {
            spaces[i].style.backgroundColor = "red";
        } else if (board_array[i] == "o") {
            spaces[i].style.backgroundColor = "yellow";
        }
    }
}
