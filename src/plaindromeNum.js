

/**
 * 
 * Palindrome Number
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 */


/**
 * @params {number} x
 * 
 * @return {boolean}
 */

// const PalindromeNum = (x)=>{


   
//     const num= x;
//     const revNum= num.toString().split("").reverse();
//     if(revNum.indexOf("-") !== -1){
//         return false;
//     }
    
//     return revNum.join("") ===num.toString();

// }

// console.log(PalindromeNum(121));





// Declare a function called `isPalindrome` that takes in an integer `x`
function isPalindrome(x) {
    // If `x` is negative, return false because negative numbers cannot be palindromes
    if (x < 0) return false;
    
    // Initialize a variable called `reverse` to 0, which will be used to store the reversed version of `x`
    let reverse = 0;
    
    // Initialize a variable called `num` to `x`, which will be used to calculate the reversed version of `x`
    let num = x;
    
    // Loop while `num` is greater than 0
    while (num > 0) {
      // Calculate the last digit of `num` by taking the remainder of `num` divided by 10
      const lastDigit = num % 10;
      
      // Multiply `reverse` by 10 and add the last digit of `num` to it
      reverse = (reverse * 10) + lastDigit;
      
      // Divide `num` by 10 and store the result back in `num`
      num = Math.floor(num / 10);
    }
    
    // Return `true` if `x` is equal to `reverse`, and `false` otherwise
    return x === reverse;
  }
  