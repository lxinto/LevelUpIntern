var isValid =  function(s) {
    
    //setting correct pairs
    const pairMap = {
        "(" : ")", "[" : "]", "{" : "}"
    }
    
    const stack = []

    
    for(let bracket of s) {
        if (pairMap[bracket]) {
            stack.push(pairMap[bracket])
        } else if (stack.length > 0 && stack[stack.length - 1] === bracket) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
}


console.log(isValid("{}")) //true

