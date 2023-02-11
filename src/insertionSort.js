

/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
 function insertion_sort(arr) {
    // right to left sort 
    
    for(let i=1; i<arr.length;i++){
     
        let temp = arr[i];
        let red= i-1;
    
        while( red >=0 && arr[red] > temp){
            arr[red+1]= arr[red];
            red--;
        }
        arr[red+1] = temp;   
        
    }
    
    arr= aux
    return arr;
}


console.log(insertion_sort([5, 3, 1, -10, -11, -100]))