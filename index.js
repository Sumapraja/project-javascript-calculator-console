let digitA = parseInt(prompt('input your first number'))
let operators = prompt('what are you trying to do? :' + '\n 1. Addition' + '\n 2. Substraction' + '\n 3. Multiplication' + '\n 4. Division')
let digitB = parseInt(prompt('input your second number'))

console.log(digitA)
console.log(operators);
console.log(digitB)

if (operators == '1') {
    const resultAddition = digitA + digitB
    console.log(resultAddition)
    alert(digitA + digitB)
    
}  else if (operators == '2') {
    const resultSubstraction = digitA - digitB
    console.log(resultSubstraction)
    alert(digitA - digitB)

}   else if (operators == '3') {
    const resultMultiplication = digitA * digitB
    console.log(resultMultiplication)
    alert(digitA * digitB)

}   else if (operators == '4') {
    const resultDivison = digitA / digitB
    console.log(resultDivison)
    alert(digitA / digitB)
}   
    else {
    alert('sorry cannot operate, make sure you choose with the number')
}












