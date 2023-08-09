function render_fizzbuzz() {
    const fizzbuzz_area = document.querySelector('.js-fizzbuzz-render');
    let result_arr = [];

    for (let i = 1; i < 21; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result_arr.push('FizzBuzz');
        } else if (i % 3 == 0) {
            result_arr.push('Fizz');
        } else if (i % 5 == 0) {
            result_arr.push('Buzz');
        } else {
            result_arr.push(i);
        }
    }

    fizzbuzz_area.innerHTML = JSON.stringify(result_arr);
}

render_fizzbuzz();