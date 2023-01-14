//prettier-ignore
let board_array = [
    0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41
]

let col_array = [35, 35, 37, 38, 39, 40, 41];

col1_btn = document.querySelector("#col1");
col1_btn.addEventListener("click", function () {
    if (col_array[0] >= 0) {
        drop_token(0);
    } else {
        console.log("No Can Do");
    }
});

function drop_token(col) {
    board_array[col_array[col]] = "x";
    col_array[col] = col_array[col] - 7;
    console.log(col_array);
    console.log(board_array);
}
