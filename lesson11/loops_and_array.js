// display created the array on the web
// display the result on the web
// Take in an element, make a query out of it, display it on the web
function display_on_web(element) {
    query += `<p>${element}</p>`;
    web.innerHTML = query;
}

function min_max(arr) {
    let min = 0;
    let max = 0;
    if (arr.length == 0) {
        return { "min": 'null', 'max': 'null' };
    } else if (arr.length == 1) {
        return { "min": arr[0], 'max': arr[0] };
    } else {
        min = arr[0];
        max = min;
        for (let i = 0; i < arr.length; i++) {
            // console.log(`arr[${i}]=${arr[i]}`);
            // console.log(`before: min: ${min}`);
            // console.log(`before: max: ${max}`);
            min = (min < arr[i]) ? min : arr[i];
            max = (max > arr[i]) ? max : arr[i];
            // console.log(`after: min: ${min}`);
            // console.log(`after: max: ${max}`);
        }
        return { "min": min, 'max': max };
    }
}

function count_words(words) {
    const keep_track = {}
    for (let i = 0; i < words.length; i++) {
        // if (keep_track[`${words[i]}`] = undefined) {
        //     keep_track[`${words[i]}`] = 1;
        //     console.log(1)
        // } else {
        //     keep_track[`${words[i]}`] += 1;
        //     console.log(2)
        // }
        // console.log(JSON.stringify(keep_track))

        if (keep_track[words[i]] == undefined) {
            keep_track[words[i]] = 1;
        } else {
            keep_track[words[i]] += 1;
        }
    }
    return keep_track
}

const arr = [-2, 3, -5, 7, 10];
const web = document.querySelector('.js-web');
let query = '';
let min = 0;
let max = 0;

display_on_web(`[${arr}]`);
display_on_web(JSON.stringify(min_max(arr)));
const null_arr = [];
display_on_web(`[${null_arr}]`);
display_on_web(JSON.stringify(min_max(null_arr)));
const one_e_arr = [3];
display_on_web(`[${one_e_arr}]`);
display_on_web(JSON.stringify(min_max(one_e_arr)));
const word_arr = ['apple', 'grape', 'apple', 'apple'];
display_on_web(JSON.stringify(word_arr));
display_on_web(JSON.stringify(count_words(word_arr)));
