const monthNumber = parseInt(prompt('Введите номер месяца:'));

if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12 ){
    alert(`${monthNumber} время года вашего месяца - зима`);
}
else if(monthNumber >= 3 && monthNumber <= 5){
    alert(`${monthNumber} время года вашего месяца - весна`);
}
else if(monthNumber >= 6 && monthNumber <= 8){
    alert(`${monthNumber} время года вашего месяца - лето`);
}
else if(monthNumber >= 9 && monthNumber <= 11){
    alert(`${monthNumber} время года вашего месяца - осень`);
}
else{
    alert(`${monthNumber} такого номера месяца не существует!`)
}