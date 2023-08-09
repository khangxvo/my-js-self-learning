
function toggle(button_number) {
    const button = document.querySelector(button_number);
    if (!button.classList.contains('is-toggled')) {
        // alert('toggled');
        turn_off_other_buttons();
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
        // alert('off');
    }
    // alert(button);
}

function turn_off_other_buttons() {
    const button = document.querySelector('.is-toggled');
    // get buttons that are on 
    if (button) {
        // if there such buttons, removed its 'is-toggled' class. 
        button.classList.remove('is-toggled')
    }
}