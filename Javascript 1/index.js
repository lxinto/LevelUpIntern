// count jewels in stones 

var numJewelsInStones = function(jewels, stones) {
    
    const jewelsArray = jewels.split("")
    let count = 0

    //checking every stone with loop 
    
    for (let i=0; i< stones.length; i++) {
        let stone = stones[i]
        //stone === current stone from array that we are checking
        
        if (jewelsArray.includes(stone)) count++
    }

    return count
};

console.log(numJewelsInStones("B","BBBBbbbbbb"))
