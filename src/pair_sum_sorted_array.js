function pair_sum_sorted_array(numbers, target) {
    let result =[];
    let low =0, high =numbers.length-1;
    

    while (low < high) {
        let num2 = numbers[high]; 
        if(num2 === target - numbers[low]) {
           // console.log(low,num2);
             result.push(`${numbers[low]},${num2}`);
             low++;
             high--;

        }else if(num2 > target - numbers[low]){
                high--;
        }else {
            //console.log(low);
            low++;
        }
    }
    
return result;
    
}

console.log(pair_sum_sorted_array([1, 2, 3, 5, 10],7));