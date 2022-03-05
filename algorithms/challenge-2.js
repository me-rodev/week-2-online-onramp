function numSwap(number) {
    //Converting the number into an array
    let numberArr = String(number).split("").map((number)=>{
        return Number(number)
    })
    let hold = 0
    for (let i = 0; i < numberArr.length; i+=2) {
        hold = numberArr[i]
        numberArr[i] = numberArr[i+1]
        numberArr[i+1] = hold
    }
    return Number(numberArr.join(""))
}

console.log(numSwap(1234))
console.log(numSwap(432156))

module.exports = numSwap
