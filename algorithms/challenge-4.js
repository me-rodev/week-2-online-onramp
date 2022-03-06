function withdraw(amount) {
    let less100 = amount % 100
    let hundred = (amount - less100)/100
    let less50 = less100 % 50
    let fifty = (less100 - less50)/50
    let twenty = less50/20

    return [hundred, fifty, twenty]
}

console.log(withdraw(250))
console.log(withdraw(370))

module.exports = withdraw