function findSecondLargest(arr){
    if (arr.length < 2) return null
    let max = arr[0]
    let secondMax = Number.MIN_SAFE_INTEGER

    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            secondMax = max
            max = arr[i]
        }
        else if (arr[i] < max && arr[i] > secondMax) {
            secondMax = arr[i]
        }
    }

    return secondMax === Number.MIN_SAFE_INTEGER ? null : secondMax
}