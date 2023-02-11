function selection_sort(arr) {
    
    for(let i=0; i<=arr.length-1;i++){
        let minValue=arr[i];
        let minIndex= i;
        for(let J = i+1;J<=arr.length-1;J++ ){
            if(arr[J] < minValue) {
                minValue= arr[J];
                minIndex=J;
                //swaping the value
                let temp = arr[J];
                    arr[J]= arr[i];
                    arr[i]= temp;
            }
        
    }

        
    }
    
    
    return arr;
}


console.log()