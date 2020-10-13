function getSum(a, b) {
    if (a ===b ) { return a;
    }
    if(Math.abs(b - a) === 1){
        return a + b;
    } 
    let smallerNumber = Math.min(a, b)
    let biggerNumber = Math.max(a, b)
    let sum = 0;
    for (let index = smallerNumber; index <= biggerNumber; index++) {
        sum += index
        
    }  
    return sum
}
console.log(getSum(1, 1))
console.log(getSum(-2, -2))
console.log(getSum(-4, -5))
console.log(getSum(5, 3))
console.log(getSum(9, 8))
console.log(getSum(3, 5))
console.log(getSum(1, 5))
//-4, -5 a =-5 b = -4
