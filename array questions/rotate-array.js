function reverseArray(arr, start, end) {
    if(arr.length === 0) return null
    
    while(start < end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        
        start++
        end--
    }
    return arr
}

function rotateArray(arr, k){
    if(arr.length === 0) return null

    // handles if k > arr.length and gives equivalent number to rotate
    // for example, in a arr of length 5, if k = 7. 7 % 5 = 2 is same as rotating by 7, as after 5 rotations, 
    // we come back to original array 
    k = k % arr.length 

    reverseArray(arr, 0, arr.length - 1)
    reverseArray(arr, 0, k - 1)
    reverseArray(arr, k, arr.length - 1)
    
    return arr
}

// simple approach
function rotateArray(arr, k){
    if(arr.length === 0) return null
    k = k % arr.length
    for(let i = 0; i < k; i++){
        let last = arr.pop()
        arr.unshift(last)
    }
    return arr
}