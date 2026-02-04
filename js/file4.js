const number1 = parseInt(prompt('Введите число'));
const arithmeticOperations = prompt('Введите операцию ( "+", "-", "/", "*" )');
const number2 = parseInt(prompt('Введите число'));

if(arithmeticOperations === '+'){
    result = number1 + number2
    alert(`Сумма ваших чисел = ${result}`)
}
else if(arithmeticOperations === '-'){
    result = number1 - number2
    alert(`Разность ваших чисел = ${result}`)
}
else if(arithmeticOperations === '/'){
    result = number1 / number2
    alert(`Деление ваших чисел = ${result}`)
}
else if(arithmeticOperations === '*'){
    result = number1 * number2
    alert(`Умножение ваших чисел = ${result}`)
}
else{
    alert('Что-то пошло не так, попробуйте заново.')
}