function increment(arr, value) {
    arr.forEach(element => {
        element.val+=value
    });
    return arr
}
console.log(increment([{ val: 1 }, { val: 2}, { val: 3 }], 2))
console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5))

module.exports = increment
