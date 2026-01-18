function frequencyCount(arr) {
    if(arr.length === 0) return null
    
    let frequency = {}
    
    for(let i = 0; i < arr.length; i++){
        if(frequency[arr[i]] === undefined){
            frequency[arr[i]] = 1
        }
        else{
            frequency[arr[i]] += 1
        }
    }
    
    return frequency
}