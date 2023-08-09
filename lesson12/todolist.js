let task_arr = JSON.parse(localStorage.getItem('task_arr')) || [
    {
        name: 'wash dishes',
        due_date: '2022-12-22'
    },
    {
        name: 'watch youtube',
        due_date: '2022-12-23'
    }
]

let display_div = document.querySelector('.js-message')

function display_on_web(task_arr) {
    let query = '';
    // let name = '';
    // let due_date = '';
    for (let i = 0; i < task_arr.length; i++) {
        ({ name, due_date } = task_arr[i])
        query += `<p>${name}</p>
            <p>${due_date}</p>
            <button class="delete-button" 
                onclick="task_arr.splice(${i}, 1);
                display_on_web(task_arr);">Delete</button>`;
    }
    display_div.innerHTML = query;
    save_task_arr();
}

function add_todo() {
    const input_task = document.querySelector('.js-task');
    const task_name = input_task.value;

    const input_due_date = document.querySelector('.js-due-date');
    const task_due_date = input_due_date.value;
    if (task_name === "" || task_due_date === "") {
        return
    } else {
        task_arr.push({ name: task_name, due_date: task_due_date });
        // shortcut: task_arr.push({ task_name, due_date })
        display_on_web(task_arr);
        input_task.value = '';
        input_due_date.value = '';
    }


}

function save_task_arr() {
    localStorage.setItem('task_arr', JSON.stringify(task_arr));
}

display_on_web(task_arr);