/**
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
 * 
 * 
 */


/**
 * @param {string} s
 * @return {number}
 */


 // Declare a function called `romanToInt` 
 //that takes in a string `s` and an integer `target`
 const romanToInt = (s) => {
  //create  Map object holds key-value pairs 
  //and remembers the original insertion order of the keys. 
    const map =new Map();
    
    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set('M',1000); 
    let strArry =s.split('');
    console.log(strArry);
    let   result   =  map.get(strArry[strArry.length - 1]);  


   

   for (let i = strArry.length - 2; i >= 0; i--) {
       console.log(i)
        if(map.get(strArry[i]) < map.get(strArry[i+1]) ){ 
                result-=map.get(strArry[i])
         }else { 
             result+=map.get(strArry[i])
         }

     }
     return result;

 }


 romanToInt("LVIII");