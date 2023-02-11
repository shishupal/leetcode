/***
 * Given a string s containing just the characters 
 * '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *  Open brackets must be closed by the same type of brackets.
 *  Open brackets must be closed in the correct order.
 *  Every close bracket has a corresponding open bracket of the same type.
 * 
 * 
 */


/*
* @params {String} s
* @return {boolean}   
*/

function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
       // The in operator returns true 
       //if the specified property is in the specified object or 
       //its prototype chain.
        if (s[i] in map) {
            stack.push(s[i]);
        } else if (stack.length === 0 || s[i] !== map[stack.pop()]) {
            return false;
        }
    }

    return stack.length === 0;
}


const first = new Map([
    [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);

const second = new Map([
    [1, 'uno'],
    [2, 'dos'],
  ]);
  //const merged = new Map([...first, ...second]);



const merged = new Map([
    ...first, 
    ...second, 
    [1, 'eins']
]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
