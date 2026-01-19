function subarraySums(arr) {
    if(arr.length === 0) return 0
    let result = []
    
    for(let i = 0; i < arr.length; i++){
        let sum = 0
        for(let j = i; j < arr.length; j++){
            sum += arr[j]
            result.push(sum)
        }
    }
    return result
}