function find_index(arr, word) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == word) {
            return i;
        }
    }
    return -1;
}

function unique(arr) {
    // loop through every element of the array
    // for each element pass that element and the array to find_index
    // create new_array
    // the element inside new_array is determined by the current looped
    // element and return index from find_index
    let new_array = [];
    for (let i = 0; i < arr.length; i++) {
        let index = find_index(arr, arr[i]);
        new_array[index] = arr[i];
    }
    return new_array;
}

arr1 = ['green', 'red', 'blue', 'red'];
word1 = 'red';
arr2 = ['red', 'green', 'red', 'green'];
word2 = 'yellow';
const find_index_area = document.querySelector('.js-find-index');
find_index_area.innerHTML = `<p>find_index(${JSON.stringify(arr1)}, 
    ${word1}) => ${find_index(arr1, word1)}</p>
    <p>find_index(${JSON.stringify(arr2)}, 
    ${word2}) => ${find_index(arr2, word2)}</p>
    <p>unique(${JSON.stringify(arr1)}) => 
    ${JSON.stringify(unique(arr1))}</p>
    <p>unique(${JSON.stringify(arr2)}) => 
    ${JSON.stringify(unique(arr2))}</p>`;

