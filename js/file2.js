const number = parseInt(prompt('Введите число , для проверки кратности 5-и:'));

multipleOfFive = (number % 5 === 0) ? "кратно" : "не кратно";

alert(`${number} ${multipleOfFive} 5-ти`);