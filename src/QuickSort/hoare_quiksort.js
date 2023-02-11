/**
 * 
 * @param {Array} arr 
 * @param {int} pos1 
 * @param {int} pos2 
 */
 function swap(arr, pos1, pos2) {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
}
/**
 * 
 * @param {Array} arr 
 * @returns []
 */
function hoare_quick(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    return helper(arr, 0, arr.length-1);
}


function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}
/**
 * @param {Array} arr
 * @param {int} start
 * @param {int} end
 * 
 */

function helper(arr, start, end) {
    if (start >= end) {
        return;
    }
    let randomIndex = Math.floor((Math.random() * (end - start)) + start);
    let pivot = arr[randomIndex];
    let smaller = start + 1;
    let bigger = end;
    while (smaller <= bigger) {
        if (arr[smaller] <= pivot) {
            smaller++;
        } else if (arr[bigger] > pivot) {
            bigger--;
        } else {
            swap(arr, smaller, bigger);
            smaller++;
            bigger--;
        }
    }
    swap(arr, start, bigger);
    helper(arr, start, bigger - 1);
    helper(arr, bigger + 1, end);
    return arr;
}

console.log(hoare_quick([14,8,7,1,22,4,66,-1,4,12,3,7]));

 

