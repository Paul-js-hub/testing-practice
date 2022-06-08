const reverseString = (string) =>{
    let reverseStr = '';
    let stack = [];
    for(let i = 0; i < string.length; i++){
        stack.push(string[i])
    }
    while(stack.length > 0){
        reverseStr += stack.pop();
    }
    return reverseStr;
}


module.exports = reverseString;
