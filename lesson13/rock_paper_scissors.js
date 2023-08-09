function computer_move() {
    // let rand_num = Math.random();
    // if (rand_num <= 0.33) {
    //     return 'rock';
    // } else if (rand_num > 0.33 && rand_num <= 0.66) {
    //     return 'paper';
    // } else {
    //     return 'scissor';
    // }
    let choice_object = { 0: 'rock', 1: 'paper', 2: 'scissor' };
    let rand_arr = [0, 1, 2];
    let number = rand_arr[(Math.floor(Math.random() * rand_arr.length))];
    return [choice_object[number], number];
}

const choice_object = {
    'rock': 0, 'paper': 1, 'scissor': 2
};

function play_game(player_move) {
    let [computer_choose, choose_number] = computer_move();
    const display_result = document.querySelector('.result');
    const display_moves = document.querySelector('.moves');
    const display_scores = document.querySelector('.scores');
    // console.log(`player_num: ${choice_object[player_move]}`);
    // console.log(`computer_num: ${choose_number}`);
    let result = ((choice_object[player_move] - choose_number) % 3);

    // console.log(result);
    if (result == 0) {
        // display tie
        // display move
        // update tie score
        // display scores
        display_result.innerHTML = 'Tie.';
        display_moves.innerHTML = update_moves(player_move, computer_choose);
        scores['tie'] += 1;
        display_scores.innerHTML = update_scores(scores);
    } else if (result == 2 || result == -1) {
        display_result.innerHTML = 'You lose.';
        display_moves.innerHTML = update_moves(player_move, computer_choose);
        scores['lose']++;
        display_scores.innerHTML = update_scores(scores);
    } else if (result == 1 || result == -2) {
        display_result.innerHTML = 'You win.';
        display_moves.innerHTML = update_moves(player_move, computer_choose);
        scores['win']++;
        display_scores.innerHTML = update_scores(scores);
    }

    function update_moves(player_move, computer_choose) {
        return `
        You 
        <img src="/icons/${player_move}.png" class="move_choosen">
        <img src="/icons/${computer_choose}.png" class="move_choosen">
        Computer
        `
    }
}

function update_scores(scores) {
    localStorage.setItem('scores', JSON.stringify(scores));
    return `Wins: ${scores['win']}, Looses: ${scores['lose']}, Ties: ${scores['tie']}.`
}

let scores = JSON.parse(localStorage.getItem('scores')) || {
    'win': 0, 'lose': 0, 'tie': 0
};

let is_auto_play = false;
function auto_play() {
    let rand_arr = ['rock', 'paper', 'scissor'];
    function select_player_move() {
        return rand_arr[Math.floor(Math.random() * rand_arr.length)];
    }
    const auto_play_button = document.querySelector('.auto_play_button');
    if (!is_auto_play) {
        auto_play_id = setInterval(function () {
            play_game(select_player_move())
        }, 1000);
        is_auto_play = true;
        auto_play_button.innerHTML = "Stop Playing";
    } else {
        clearInterval(auto_play_id);
        is_auto_play = false;
        auto_play_button.innerHTML = "Auto Play";
    }
};

function reset_scores() {
    scores = {
        'win': 0, 'lose': 0, 'tie': 0
    };
    const display_scores = document.querySelector('.scores');
    display_scores.innerHTML = update_scores(scores);
}