function merge_sort(arr) {
    return  arr.length === 1 ? arr: helper(arr, 0, arr.length - 1);
  }
  
  function helper(arr, start, end) {
    if (start === end) {
      return;
    }
  
    let mid = Math.floor((start + end) / 2); //

    //potential overflow to find mid position

    let mid = start 



    helper(arr, start, mid);
    helper(arr, mid + 1, end);
  
    let i = start;
    let j = mid + 1;
    let aux = [];
  
    while (i <= mid && j <= end) {
      if (arr[i] <= arr[j]) {
        aux.push(arr[i++]);
      } else {
        aux.push(arr[j++]);
      }
    }
  
    while (i <= mid) {
      aux.push(arr[i++]);
    }
  
    while (j <= end) {
      aux.push(arr[j++]);
    }
  
    for (let k = 0; k < aux.length; k++) {
      arr[start + k] = aux[k];
    }
    return arr;
  }
  

  
  console.log(merge_sort([4]))