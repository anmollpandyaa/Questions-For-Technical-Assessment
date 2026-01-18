function findDuplicates(arr){
    if (arr.length === 0) return null
    
    let seen = {}
    let result = []
    
    for(let i = 0; i < arr.length; i++){
        if(seen[arr[i]] !== true){
            seen[arr[i]] = true
            result.push(arr[i])
        }
    }
    return result
}

// without using object
function findDuplicates(arr){
    if (arr.length === 0) return null
    
    let result = []
    for(let i = 0; i < arr.length; i++){
        let isDuplicate = false
        for(let j = 0; j < result.length; j++){
            if(arr[i] === result[j]){
                isDuplicate = true
                break
            }
        }
        if(!isDuplicate) result.push(arr[i])
    }
    return result
}