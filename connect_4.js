//prettier-ignore
let board_array = [
    0 , 1 , 2 , 3 , 4 , 5 , 6 ,
    7 , 8 , 9 , 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41
]
let check_array = [];
let col_array = [35, 36, 37, 38, 39, 40, 41];

let turn = 1;

const col_btn = document.querySelectorAll(".drop_btn");
const spaces = document.querySelectorAll(".circle");
const body = document.querySelector("body");

for (let i = 0; i < col_btn.length; i++) {
    col_btn[i].addEventListener("click", function () {
        if (col_array[i] < 0) {
            remove_click_listeners();
        } else {
            drop_token(i);
            add_color();
            if (col_array[i] >= 0) {
                hover_effect_in(turn, i);
            } else {
                col_btn[i].classList.add("disabled_btn");
                col_btn[i].disabled = true;
            }
        }
    });
    col_btn[i].addEventListener("mouseover", function () {
        if (col_array[i] < 0) {
            col_btn[i].removeEventListener("mouseover", hover_effect_in);
        } else {
            hover_effect_in(turn, i);
        }
    });
    col_btn[i].addEventListener("mouseout", function () {
        if (col_array[i] < 0) {
            col_btn[i].classList.add("disabled_btn");
            col_btn[i].removeEventListener("mouseout", hover_effect_out);
        } else {
            hover_effect_out(i);
        }
    });
}

function drop_token(col) {
    if (turn == 1) {
        board_array[col_array[col]] = "x";
        check_win(turn);
        turn = 0;
    } else {
        board_array[col_array[col]] = "o";
        check_win(turn);
        turn = 1;
    }
    col_array[col] = col_array[col] - 7;
}

function add_color() {
    for (let i = 0; i < board_array.length; i++) {
        if (board_array[i] == "x") {
            spaces[i].classList.add("red_circle");
        } else if (board_array[i] == "o") {
            spaces[i].classList.add("yellow_circle");
        }
    }
}

function check_win(turn) {
    let player_piece;
    let player_color;

    if (turn == 1) {
        player_piece = "x";
        player_color = "red";
    } else {
        player_piece = "o";
        player_color = "yellow";
    }
    counter = 0;

    //vertical check
    for (let i = 35; i <= 41; i++) {
        counter = 0;
        check_array = [];
        for (let j = i; j >= 0; j -= 7) {
            if (board_array[j] == player_piece) {
                counter++;
            } else {
                counter = 0;
            }
            if (counter == 4) {
                console.log(player_piece + " wins vertical!");
                win_screen(player_piece, player_color);
                return;
            }
        }
    }

    //horizontal check
    for (let i = 35; i >= 0; i -= 7) {
        counter = 0;
        check_array = [];
        for (let j = i; j <= i + 7; j++) {
            if (board_array[j] == player_piece) {
                counter++;
            } else {
                counter = 0;
            }
            if (counter == 4) {
                console.log(player_piece + " wins horizontal!");
                win_screen(player_piece, player_color);
                return;
            }
        }
    }

    //diagonal 1 check
    for (let i = 35; i >= 21; i -= 7) {
        counter = 0;
        check_array = [];
        for (let j = i; j >= 3; j -= 6) {
            if (board_array[j] == player_piece) {
                counter++;
            } else {
                counter = 0;
            }
            if (counter == 4) {
                console.log(player_piece + " wins diagonal 1!");
                win_screen(player_piece, player_color);
                return;
            }
        }
    }

    //diagonal 2 check
    for (let i = 6; i <= 20; i += 7) {
        counter = 0;
        check_array = [];
        for (let j = i; j <= 38; j += 6) {
            if (board_array[j] == player_piece) {
                counter++;
            } else {
                counter = 0;
            }
            if (counter == 4) {
                console.log(player_piece + " wins diagonal 2!");
                win_screen(player_piece, player_color);
                return;
            }
        }
    }

    //diagonal 3 check
    for (let i = 0; i <= 14; i += 7) {
        counter = 0;
        check_array = [];
        for (let j = i; j <= 40; j += 8) {
            if (board_array[j] == player_piece) {
                counter++;
            } else {
                counter = 0;
            }
            if (counter == 4) {
                console.log(player_piece + " wins diagonal 3!");
                win_screen(player_piece, player_color);
                return;
            }
        }
    }

    //diagonal 4 check
    for (let i = 41; i >= 27; i -= 7) {
        counter = 0;
        check_array = [];
        for (let j = i; j >= 1; j -= 8) {
            if (board_array[j] == player_piece) {
                counter++;
            } else {
                counter = 0;
            }
            if (counter == 4) {
                console.log(player_piece + "wins diagonal 4!");
                win_screen(player_piece, player_color);
                return;
            }
        }
    }
}

function hover_effect_in(turn, i) {
    if (turn == 1) {
        col_btn[i].classList.remove("yellow_btn");
        col_btn[i].classList.add("red_btn");
    } else {
        col_btn[i].classList.remove("red_btn");
        col_btn[i].classList.add("yellow_btn");
    }
}

function hover_effect_out(i) {
    col_btn[i].classList.remove("red_btn");
    col_btn[i].classList.remove("yellow_btn");
}

function win_screen(player_piece, player_color) {
    const win_div = document.createElement("div");
    if (player_piece == "x") {
        win_div.classList.add("red_win");
    } else {
        win_div.classList.add("yellow_win");
    }
    document.body.appendChild(win_div);
    win_div.innerText = player_color.toUpperCase() + " PLAYER WINS!";

    disable_all_btns();
}

function disable_all_btns() {
    for (i = 0; i < col_btn.length; ++i) {
        col_btn[i].classList.add("disabled_btn");
        col_btn[i].disabled = true;
    }
}

function remove_click_listeners() {
    col_btn[i].removeEventListener("click", drop_token);
    col_btn[i].removeEventListener("click", add_color);
    col_btn[i].removeEventListener("click", hover_effect_in);
}
