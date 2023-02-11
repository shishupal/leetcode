/***
 * Given some balls of three colors arranged in a line, 
rearrange them such that all the red balls go first, 
then green and then blue ones.

Do rearrange the balls in place. 
A solution that simply counts colors and overwrites 
the array is not the one we are looking for.

This is an important problem in search 
algorithms theory proposed by Dutch computer s
scientist Edsger Dijkstra. 
Dutch national flag has three colors 
(albeit different from ones used in this problem).


{
    "balls": ["G", "B", "G", "G", "R", "B", "R", "G"]
    }
    Output:
    
    ["R", "R", "G", "G", "G", "G", "B", "B"]

    
    There are a total of 2 red, 4 green and 2 blue balls. 
    In this order they appear in the correct output.


1 <= n <= 100000
Do this in ONE pass over the array, NOT TWO passes
Solution is only allowed to use constant extra memory
 * 
 * 
 * 
 */


function rearrangeBalls(arr) {
    
    let low=0, mid=0, high = arr.length-1;
    while(mid <= high) {
        
        if(arr[mid] === "R"){
            [arr[low],arr[mid]]=[arr[mid],arr[low]];
                low++;
                mid++;
                
        }else if(arr[mid] === "G"){
           mid++;
           
        }else {
            [arr[mid],arr[high]]=[arr[high],arr[mid]]
            high--;
        }
    }
    return arr;

  }
  


  console.log(rearrangeBalls(["G", "B", "G", "G", "R", "B", "R", "G"]));