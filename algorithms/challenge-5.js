function arraySum(arr1, arr2) {
    let out = []
    arrLenDiff = arr1.length - arr2.length
    for (let i = 0; i < (arrLenDiff); i++) {
        arr2[arr2.length] = arr2[i]  
    }
    for (let i = 0; i < arr1.length; i++) {
        out.push(arr1[i]+arr2[i])
    }
    return out
}
console.log(arraySum([10,20,30,40,50], [20,40,60]))
console.log(arraySum([1,2,4,5,6,2,1], [2,3,5]))

module.exports = arraySum
