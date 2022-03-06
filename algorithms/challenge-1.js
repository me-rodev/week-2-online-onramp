function missingNumber(numArr) {
    let checkArr = [0,0,0,0,0,0,0,0,0]
    let outputArr = []
    numArr.forEach((element, index) => {
       checkArr[numArr[index]-1] = element
    });

    checkArr.forEach((element, index) =>{
        if (element === 0) {
            outputArr.push(index + 1)
        }
    });

    if (outputArr.length === 0) {
        return false
    }else if (outputArr.length === 1) {
        return outputArr[0]
    }else {
        return outputArr
    }
    
}
console.log(missingNumber([1,2,3,4,6,7,8,9]))
console.log(missingNumber([1,2,3,4,5,6,8]))
console.log(missingNumber([1,2,3,4,5,6,7,8,9]))

module.exports = missingNumber
